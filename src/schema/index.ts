export {};
const graphql = require('graphql');
const { GraphQLSchema } = graphql;
const DefaultQuery = require('../queries');

const schema = new GraphQLSchema({
  query: DefaultQuery
});

module.exports = schema;
