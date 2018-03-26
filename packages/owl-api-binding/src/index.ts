import * as path from 'path';
import {
  makeRemoteExecutableSchema,
  makeExecutableSchema
} from 'graphql-tools';
import { importSchema } from 'graphql-import';
import { GraphQLSchema } from 'graphql';
import { Binding } from './generated/owlApiBinding';
import OwlApiLink from './OwlApiLink';

const typeDefs = importSchema(path.join(__dirname, '../schema/root.graphql'));

export const createSchema = ({ resolvers, ...rest }): GraphQLSchema => {
  return makeExecutableSchema({ ...rest, typeDefs, resolvers });
};

export class OwlApiBinding extends Binding {
  constructor(uri: string) {
    const link = new OwlApiLink(uri);

    const schema = makeRemoteExecutableSchema({
      schema: typeDefs,
      link
    });

    super({ schema });
  }
}
