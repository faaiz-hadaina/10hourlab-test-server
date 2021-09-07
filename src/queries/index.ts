export {};
const graphql = require('graphql');
var moment = require('moment');
const { GraphQLInt, GraphQLList, GraphQLObjectType, GraphQLString } = graphql;
const accountType = require('../schema/typedefs/accountType');
const TransactionType = require('../schema/typedefs/TransactionType');
const SessionType = require('../schema/typedefs/SessionType');

const data = require('../data/data');

const DefaultQuery = new GraphQLObjectType({
  name: 'Query',
  fields: () => ({
    Accounts: {
      type: GraphQLList(accountType),
      args: {
        date_from: { type: GraphQLString },
        date_to: { type: GraphQLString }
      },
      resolve: (root: any, args: any) =>
        data.Accounts.filter((item: any) => {
          const date1 = moment(item.created_at).format('YYYY-MM-DD');
          const date2 = moment(args.date_from).format('YYYY-MM-DD');
          const date3 = moment(args.date_to).format('YYYY-MM-DD');

          return (
            Date.parse(date1) >= Date.parse(date2) &&
            Date.parse(date1) <= Date.parse(date3)
          );
        })
    },
    Transactions: {
      type: GraphQLList(TransactionType),
      args: {
        date_from: { type: GraphQLString },
        date_to: { type: GraphQLString }
      },
      resolve: (root: any, args: any) =>
        data.Transactions.filter((item: any) => {
          const date1 = moment(item.created_at).format('YYYY-MM-DD');
          const date2 = moment(args.date_from).format('YYYY-MM-DD');
          const date3 = moment(args.date_to).format('YYYY-MM-DD');

          return (
            Date.parse(date1) >= Date.parse(date2) &&
            Date.parse(date1) <= Date.parse(date3)
          );
        })
    },
    Sessions: {
      type: GraphQLList(SessionType),
      args: {
        date_from: { type: GraphQLString },
        date_to: { type: GraphQLString }
      },
      resolve: (root: any, args: any) =>
        data.Sessions.filter((item: any) => {
          const date1 = moment(item.created_at).format('YYYY-MM-DD');
          const date2 = moment(args.date_from).format('YYYY-MM-DD');
          const date3 = moment(args.date_to).format('YYYY-MM-DD');

          return (
            Date.parse(date1) >= Date.parse(date2) &&
            Date.parse(date1) <= Date.parse(date3)
          );
        })
    },
    getAllAccounts: {
      type: new GraphQLList(accountType),
      resolve() {
        return data.Accounts;
      }
    },
    getAllTransactions: {
      type: new GraphQLList(TransactionType),
      args: {
        id: { type: GraphQLInt }
      },
      resolve: () => data.Transactions
    },
    getAllSessions: {
      type: new GraphQLList(SessionType),
      resolve: () => data.Sessions
    }
  })
});

module.exports = DefaultQuery;
