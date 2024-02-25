import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { ApolloProvider } from '@apollo/client';
import "../styles/global.css"
import client from 'utils/client'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ApolloProvider client={client}>
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </ApolloProvider>
  );
};

export default App;
