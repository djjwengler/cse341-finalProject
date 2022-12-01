const graphql = require("graphql");

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLSchema,
  GraphQLList,
  GraphQLNonNull,
} = graphql;

//Schema defines data on the Graph like object types(user type), relation between
//these object types and describes how it can reach into the graph to interact with
//the data to retrieve or mutate the data

var users = [
  {
    id: 1,
    username: "NewUser",
    firstName: "New",
    lastName: "User",
    streetAddress: "XX Bruce Hill Rd",
    email: "newuser@example.com",
    phoneNum: "111-111-1111",
  },
  {
    id: 2,
    username: "NewUser2",
    firstName: "New2",
    lastName: "User2",
    streetAddress: "XX2 Bruce Hill Rd",
    email: "newuser2@example.com",
    phoneNum: "111-111-222",
  },
  {
    id: 3,
    username: "NewUser3",
    firstName: "New3",
    lastName: "User3",
    streetAddress: "XX3 Bruce Hill Rd",
    email: "newuser3@example.com",
    phoneNum: "111-111-3333",
  },
];

//RootQuery describes how users can use the graph and grab data.

const UserType = new GraphQLObjectType({
  name: "Users",
  description: "This represents a user",
  fields: () => ({
    id: { type: new GraphQLNonNull(GraphQLInt) },
    userName: { type: new GraphQLNonNull(GraphQLString) },
    firstName: { type: GraphQLString },
    lastName: { type: GraphQLString },
    streetAddress: { type: GraphQLString },
    phoneNum: { type: GraphQLString },
    email: { type: GraphQLString },
  }),
});

const RootQuery = new GraphQLObjectType({
  name: "Query",
  description: "Root Query",
  fields: () => ({
    user: {
      type: UserType,
      description: "A single user",
      args: {
        id: { type: GraphQLInt },
      },
      resolve: (parent, args) => users.find((user) => user.id === args.id),
    },
    users: {
      type: new GraphQLList(UserType),
      description: "List of All Users",
      resolve: () => users,
    },
  }),
});

const RootMutationType = new GraphQLObjectType({
  name: "Mutation",
  description: "Root Mutation",
  fields: () => ({
    addUser: {
      type: UserType,
      description: "Add a User",
      args: {
        userName: { type: new GraphQLNonNull(GraphQLString) },
        firstName: { type: GraphQLString },
        lastName: { type: GraphQLString },
        streetAddress: { type: GraphQLString },
        phoneNum: { type: GraphQLString },
        email: { type: GraphQLString },
      },
      resolve: (parent, args) => {
        const user = {
          id: user.length + 1,
          userName: { type: new GraphQLNonNull(GraphQLString) },
          firstName: { type: GraphQLString },
          lastName: { type: GraphQLString },
          streetAddress: { type: GraphQLString },
          phoneNum: { type: GraphQLString },
          email: { type: GraphQLString },
        };
        users.push(user);
        return user;
      },
    },
  }),
});

//Creating a new GraphQL Schema, with options query which defines query
// will allow users to use when they are making request
module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: RootMutationType,
});
