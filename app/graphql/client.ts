import { ApolloClient, InMemoryCache } from '@apollo/client';

import { getApolloServerUrl } from '../utils/environment';

const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: getApolloServerUrl(),
});

export default client;
