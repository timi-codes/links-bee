import { AppContext } from "../../server";
import config from '../../config';
import { InMemoryLRUCache } from '@apollo/utils.keyvaluecache';
import hash from 'object-hash';
import KeyvRedis from "@keyv/redis";

class AppDataSource  {
  context: AppContext;
  base_url: string;
  cache: KeyvRedis<string> | InMemoryLRUCache<string> 
  ttlInSeconds: number;

  constructor(options) {
    this.context = options.context;
    this.base_url = "http://localhost:4000"
    this.cache = options.cache || new InMemoryLRUCache();
    this.ttlInSeconds = parseInt(config.ttlInSeconds as string, 10);
  }

  cacheKey(id: string) {
    return `links-bee-${process.env.NODE_ENV}-${id}`;
  }


  async get({ id, model, ttlInSeconds = this.ttlInSeconds }: {id: string, model:string, ttlInSeconds: number}) {
    const key = `${model}-${id}`;
    const cacheDoc = await this.cache.get(this.cacheKey(key));
    if (cacheDoc) {
      return JSON.parse(cacheDoc);
    }
    const doc = await this.context.prisma[model].findUnique({ where: { id } });
    if (ttlInSeconds) {
      await this.cache.set(this.cacheKey(key), JSON.stringify(doc), ttlInSeconds);
    }
    return doc;
  }

  async getRecords({ query, model, ttlInSeconds = this.ttlInSeconds }: {query: any, model: string, ttlInSeconds: number}) {
    const key = `${model}-${hash(query)}`;
    const cacheDocs = await this.cache.get(this.cacheKey(key));
    if (cacheDocs) {
      return JSON.parse(cacheDocs);
    }
    const docs = await this.context.prisma[model].findMany(query);
    if (ttlInSeconds && docs.length) {
      await this.cache.set(this.cacheKey(key), JSON.stringify(docs), ttlInSeconds);
    }
    return docs;
  }

  async delete({ key }) {
    try {
      await this.cache.delete(this.cacheKey(key));
    } catch (error) {
      console.error(`Could not delete cache key: ${this.cacheKey(key)}`);
      console.error(error);
    }
    return true;
  }
}
export default AppDataSource;
