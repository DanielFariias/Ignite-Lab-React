import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4vyhrgm20f201uigynjfqip/master',
  cache: new InMemoryCache(),
});
