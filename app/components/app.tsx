import { ApolloProvider } from '@apollo/client';
import React from 'react';

import GraphQlClient from '../graphql/client';
import NavigationContainer from './navigation/root_container';

export default function App() {
  return (
    <ApolloProvider client={GraphQlClient}>
      <NavigationContainer />
    </ApolloProvider>
  );
}
