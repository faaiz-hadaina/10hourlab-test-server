import { GraphQLFloat } from 'graphql';

export {};
const graphql = require('graphql');

const { GraphQLInt, GraphQLObjectType, GraphQLString } = graphql;
const TransactionType = new GraphQLObjectType({
  name: 'Transactions',
  fields: () => ({
    id: { type: GraphQLInt },
    created_at: { type: GraphQLString },
    updated_at: { type: GraphQLString },
    account_id: { type: GraphQLInt },
    type: { type: GraphQLString },
    amount: { type: GraphQLFloat },
    branch: { type: GraphQLString }
  })
});
module.exports = TransactionType;
