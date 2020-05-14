import { ApolloProvider } from '@apollo/client';
import React from 'react';

import GraphQlClient from '../graphql/client';
import { AppContainer } from '../navigation';

export default function App() {
  return (
    <ApolloProvider client={GraphQlClient}>
      <AppContainer />
    </ApolloProvider>
  );
}
