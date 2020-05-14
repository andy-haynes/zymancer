import { ApolloClient, InMemoryCache } from '@apollo/client';
import { SchemaLink } from '@apollo/link-schema';

import recipeSchema from './schemas/recipe';

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new SchemaLink({ schema: recipeSchema }),
});

export default client;
