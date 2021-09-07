export {};
const graphql = require('graphql');

const { GraphQLInt, GraphQLObjectType, GraphQLString, GraphQLFloat } = graphql;
const SessionType = new GraphQLObjectType({
  name: 'Sessions',
  fields: () => ({
    id: { type: GraphQLInt },
    created_at: { type: GraphQLString },
    updated_at: { type: GraphQLString },
    account_id: { type: GraphQLInt },
    lat: { type: GraphQLFloat },
    long: { type: GraphQLFloat }
  })
});
module.exports = SessionType;
