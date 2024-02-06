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
        //TODO: Add link to a boom filter so that it's returned when another user tries to create same link.
        return await dataSources.link.shorten({ url });
      } catch (error) {
        return error;
      }
    },
  }
}