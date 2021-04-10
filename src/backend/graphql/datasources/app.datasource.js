const { DataSource } = require('apollo-datasource');
const { InMemoryLRUCache } = require('apollo-server-caching');
const hash = require('object-hash');
const config = require('../../config');

class AppDataSource extends DataSource {
  constructor() {
    super();
    this.templates = config.mailgun.templates;
    this.frontend_url = config.frontend_url;
  }

  initialize({ context, cache } = {}) {
    this.context = context;
    this.cache = cache || new InMemoryLRUCache();
  }

  didEncounterError(error) {
    throw error;
  }

  cacheKey(id) {
    return `linkbee-${process.env.NODE_ENV}-${id}`;
  }

  async get({ id, model, ttlInSeconds = this.ttlInSeconds } = {}) {
    const key = `${model}-${id}`;
    const cacheDoc = await this.cache.get(this.cacheKey(key));
    if (cacheDoc) {
      return JSON.parse(cacheDoc);
    }
    const doc = await this.context.prisma[model].findUnique({ where: { id } });
    if (ttlInSeconds) {
      await this.cache.set(this.cacheKey(key), JSON.stringify(doc), { ttl: parseInt(ttlInSeconds, 10) });
    }
    return doc;
  }

  async getRecords({ query, model, ttlInSeconds = this.ttlInSeconds }) {
    const key = `${model}-${hash(query)}`;
    const cacheDocs = await this.cache.get(this.cacheKey(key));
    if (cacheDocs) {
      return JSON.parse(cacheDocs);
    }
    const docs = await this.context.prisma[model].findMany(query);
    if (ttlInSeconds && docs.length) {
      await this.cache.set(this.cacheKey(key), JSON.stringify(docs), { ttl: parseInt(ttlInSeconds, 10) });
    }
    return docs;
  }

  async delete({ key }) {
    try {
      await this.cache.delete(this.cacheKey(key));
    } catch (error) {
      console.error(`Could not delete cache key: ${this.cacheKey(key)}`); // eslint-disable-line no-console
      console.error(error); // eslint-disable-line no-console
    }
    return true;
  }
}
module.exports = AppDataSource;
