import { NextApiRequest, NextApiResponse } from 'next';
import { ApolloServer } from 'apollo-server-micro';
import graphqlSchema from '../../graphql';

const apolloServer = new ApolloServer({
  schema: graphqlSchema,
  mocks: true,
});

export const config = {
  api: {
    bodyParser: false,
  },
};

const startServer = apolloServer.start();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await startServer;

  if (req.method === 'OPTIONS') {
    return res.end();
  }

  await apolloServer.createHandler({
    path: '/api/graphql',
  })(req, res);
}
