import { AppContext } from "../../../server";

export default {
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
    shortenLink: async (_, { url }, { dataSources }: AppContext) => {
      try {
        return await dataSources.link.shorten({ url });
      } catch (error) {
        return error;
      }
    },
  }
}