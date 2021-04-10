module.exports = {
  Query: {
    getShortLinks: async () => [
      {
        id: '1',
        original_url: 'https://adobe.com',
        bee_url: '20',
        created_at: '30-20-1995',
        updated_at: '30-20-1995',
      },
    ],
  },
  Mutation: {
    shortenLink: async (parent, { url }, { dataSources }) => {
      try {
        return await dataSources.links.shorten({ url });
      } catch (error) {
        return error;
      }
    },
  },

};
