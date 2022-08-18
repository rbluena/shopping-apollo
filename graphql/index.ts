import { join } from 'node:path';
import { makeExecutableSchema } from '@graphql-tools/schema';
import { readFileSync } from 'node:fs';
import resolvers from './resolvers';

const typeDefs = readFileSync(join(process.cwd(), 'graphql/schema.graphql'), {
  encoding: 'utf-8',
});

export default makeExecutableSchema({ typeDefs, resolvers });
