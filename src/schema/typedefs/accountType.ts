export {};
const graphql = require('graphql');

const { GraphQLInt, GraphQLObjectType, GraphQLString } = graphql;
const AccountType = new GraphQLObjectType({
  name: 'Accounts',
  fields: () => ({
    id: { type: GraphQLInt },
    created_at: { type: GraphQLString },
    updated_at: { type: GraphQLString },
    first_name: { type: GraphQLString },
    last_name: { type: GraphQLString },
    type: { type: GraphQLString }
  })
});
module.exports = AccountType;
