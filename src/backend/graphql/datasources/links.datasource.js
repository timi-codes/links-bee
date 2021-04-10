const shortid = require('shortid');
const AppDataSource = require('./app.datasource');

class LinksDataSource extends AppDataSource {
  async shorten({ url }) {
    const shortId = shortid.generate();
    const { bee_id, ...rest } = await this.context.prisma.link.create({
      data: {
        original_url: url.toString(),
        bee_id: shortId,
      },
    });
    return {
      bee_url: `${this.frontend_url}/${bee_id}`,
      ...rest,
    };
  }
}

module.exports = LinksDataSource;
