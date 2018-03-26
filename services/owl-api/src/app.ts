import { GraphQLServer } from 'graphql-yoga';
import resolvers from './resolvers';
import Context from './Context';

import { createSchema } from '@thr1ve/owl-api-binding';

const schema = createSchema({ resolvers });

// @ts-ignore
export const app = new GraphQLServer({
  schema,
  context: req => new Context(req)
});
