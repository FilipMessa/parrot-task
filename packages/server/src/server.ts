import { ApolloServer } from 'apollo-server';
import { schema } from './schema';
import { context } from './context';

const server = new ApolloServer({
  schema,
  context,
  subscriptions: {
    path: '/subscriptions',
  },
});

server.listen().then(async ({ url }) => {
  console.log(`\
🚀 Server ready at: ${url}
  `);
});
