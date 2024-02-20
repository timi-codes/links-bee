/* eslint-disable */
import { useMemo } from 'react';
import { ApolloClient, HttpLink } from '@apollo/client';
import { onError } from '@apollo/client/link/error';
import config from 'config';
import { getCookie, destroyCookie } from '../../utils/cookie';
import { cache } from './cache';

const { API_URL, AUTH_TOKEN } = config;

let apolloClient;

const fetchWithToken = async (uri, options) => {
  const token = getCookie('token', ctx?.req);

  if (token) {
    // eslint-disable-next-line no-param-reassign
    options.headers.authorization = `jwt ${token}`;
  }

  return fetch(uri, options);
};

function createApolloClient() {
  const httpLink = new HttpLink({
    uri: `${process.env.NEXT_PUBLIC_API_URL}/graphql`,
    credentials: 'same-origin'
  });

  const errorLink = onError(
    ({ graphQLErrors, response, operation, forward }) => {
      if (graphQLErrors) {
        graphQLErrors.map(({ message }) => {
          if (message === 'jwt expired') {
            response.errors = null;
            // TODO: logout
            destroyCookie('token');
            redirect('/sign-in', ctx);
          }
          return forward(operation);
        });
      }
    }
  );

  return new ApolloClient({
    name: 'link-bee',
    ssrMode: typeof window === 'undefined',
    link: errorLink.concat(httpLink),
    cache,
    fetch: fetchWithToken,
    connectToDevTools: process.env.NODE_ENV !== 'production'
  });
}

export function initializeApollo(initialState = null) {
  const _apolloClient = apolloClient ?? createApolloClient();

  // If your page has Next.js data fetching methods that use Apollo Client, the initial state
  // gets hydrated here
  if (initialState) {
    // Get existing cache, loaded during client side data fetching
    const existingCache = _apolloClient.extract();
    // Restore the cache using the data passed from getStaticProps/getServerSideProps
    // combined with the existing cached data
    _apolloClient.cache.restore({ ...existingCache, ...initialState });
  }
  // For SSG and SSR always create a new Apollo Client
  if (typeof window === 'undefined') return _apolloClient;
  // Create the Apollo Client once in the client
  if (!apolloClient) apolloClient = _apolloClient;

  return _apolloClient;
}

export function useApollo(initialState) {
  const store = useMemo(() => initializeApollo(initialState), [initialState]);
  return store;
}
