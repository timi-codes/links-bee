import { generateShortURL } from '../../utils'
import AppDataSource from './app.datasource';

class LinksDataSource extends AppDataSource {
  // TODO: This will become a seperate microservice and managed via a token range service for scalability
  async shorten({ url }) {
    const shortId = generateShortURL(url)
    return this.context.prisma.link.create({
      data: {
        original_url: url.toString(),
        bee_id: shortId,
        expires_at: new Date()
      },
    });
  };

  async getLink() {

  }
}

export default LinksDataSource;
