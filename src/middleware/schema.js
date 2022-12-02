const graphql = require("graphql");
const User = require("../models").user;
const Book = require("../models").book;
const Review = require("../models").review;
const Movie = require("../models").movie;

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLID,
  GraphQLSchema,
  GraphQLList,
  GraphQLNonNull,
} = graphql;

//Schema defines data on the Graph like object types(user type), relation between
//these object types and describes how it can reach into the graph to interact with
//the data to retrieve or mutate the data

// var users = [
//   {
//     id: 1,
//     username: "NewUser",
//     firstName: "New",
//     lastName: "User",
//     streetAddress: "XX Bruce Hill Rd",
//     email: "newuser@example.com",
//     phoneNum: "111-111-1111",
//   },
//   {
//     id: 2,
//     username: "NewUser2",
//     firstName: "New2",
//     lastName: "User2",
//     streetAddress: "XX2 Bruce Hill Rd",
//     email: "newuser2@example.com",
//     phoneNum: "111-111-222",
//   },
//   {
//     id: 3,
//     username: "NewUser3",
//     firstName: "New3",
//     lastName: "User3",
//     streetAddress: "XX3 Bruce Hill Rd",
//     email: "newuser3@example.com",
//     phoneNum: "111-111-3333",
//   },
// ];

//RootQuery describes how users can use the graph and grab data.

const UserType = new GraphQLObjectType({
  name: "User",
  description: "This represents a user",
  fields: () => ({
    id: { type: GraphQLID },
    userName: { type: GraphQLString },
    firstName: { type: GraphQLString },
    lastName: { type: GraphQLString },
    streetAddress: { type: GraphQLString },
    phoneNum: { type: GraphQLString },
    email: { type: GraphQLString },
  }),
});

const BookType = new GraphQLObjectType({
  name: "Book",
  description: "This represents a book",
  fields: () => ({
    title: { type: GraphQLID },
    author: { type: GraphQLString },
    description: { type: GraphQLString },
    genre: { type: GraphQLString },
    ownerId: { type: GraphQLString },
    availability: { type: GraphQLString },
    location: { type: GraphQLString },
  }),
});

const MovieType = new GraphQLObjectType({
  name: "Movie",
  description: "This represents a movie",
  fields: () => ({
    title: { type: GraphQLID },
    rating: { type: GraphQLString },
    description: { type: GraphQLString },
    genre: { type: GraphQLString },
    ownerId: { type: GraphQLString },
    availability: { type: GraphQLString },
    location: { type: GraphQLString },
  }),
});

const ReviewType = new GraphQLObjectType({
  name: "Review",
  description: "This represents a review",
  fields: () => ({
    username: { type: GraphQLID },
    mediaId: { type: GraphQLString },
    reviewTitle: { type: GraphQLString },
    reviewBody: { type: GraphQLString },
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
        id: { type: GraphQLID },
      },
      resolve(parent, args) {
        return User.findById(args.id);
      },
    },
    users: {
      type: new GraphQLList(UserType),
      description: "List of All Users",
      resolve(parent, args) {
        return User.find({});
      },
    },
    book: {
      type: BookType,
      description: "A single book",
      args: {
        id: { type: GraphQLID },
      },
      resolve(parent, args) {
        return Book.findById(args.id);
      },
    },
    books: {
      type: new GraphQLList(BookType),
      description: "List of All Books",
      resolve(parent, args) {
        return Book.find({});
      },
    },
    movie: {
      type: MovieType,
      description: "A single movie",
      args: {
        id: { type: GraphQLID },
      },
      resolve(parent, args) {
        return Movie.findById(args.id);
      },
    },
    movies: {
      type: new GraphQLList(MovieType),
      description: "List of All Movies",
      resolve(parent, args) {
        return Movie.find({});
      },
    },
    review: {
      type: ReviewType,
      description: "A single review",
      args: {
        id: { type: GraphQLID },
      },
      resolve(parent, args) {
        return Review.findById(args.id);
      },
    },
    reviews: {
      type: new GraphQLList(ReviewType),
      description: "List of All Reviews",
      resolve(parent, args) {
        return Review.find({});
      },
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
        userName: { type: GraphQLString },
        firstName: { type: GraphQLString },
        lastName: { type: GraphQLString },
        streetAddress: { type: GraphQLString },
        phoneNum: { type: GraphQLString },
        email: { type: GraphQLString },
      },
      resolve: (parent, args) => {
        const user = new User({
          userName: args.userName,
          firstName: args.firstName,
          lastName: args.lastName,
          streetAddress: args.streetAddress,
          phoneNum: args.phoneNum,
          email: args.email,
        });
        return user.save();
      },
    },
    addBook: {
      type: BookType,
      description: "Add a Book",
      args: {
        title: { type: GraphQLString },
        author: { type: GraphQLString },
        description: { type: GraphQLString },
        genre: { type: GraphQLString },
        ownerId: { type: GraphQLString },
        availability: { type: GraphQLString },
        location: { type: GraphQLString },
      },
      resolve: (parent, args) => {
        const book = new Book({
          title: args.title,
          author: args.author,
          description: args.description,
          genre: args.genre,
          ownerId: args.ownerId,
          availability: args.availability,
          location: args.location,
        });
        return book.save();
      },
    },
    addMovie: {
      type: MovieType,
      description: "Add a Movie",
      args: {
        title: { type: GraphQLString },
        rating: { type: GraphQLString },
        description: { type: GraphQLString },
        genre: { type: GraphQLString },
        ownerId: { type: GraphQLString },
        availabilty: { type: GraphQLString },
        location: { type: GraphQLString },
      },
      resolve: (parent, args) => {
        const movie = new Movie({
          title: args.title,
          rating: args.rating,
          description: args.description,
          genre: args.genre,
          ownerId: args.ownerId,
          availability: args.availability,
          location: args.location,
        });
        return movie.save();
      },
    },
    addReview: {
      type: ReviewType,
      description: "Add a Review",
      args: {
        username: { type: GraphQLString },
        mediaId: { type: GraphQLString },
        reviewTitle: { type: GraphQLString },
        reviewBody: { type: GraphQLString },
      },
      resolve: (parent, args) => {
        const review = new Review({
          username: args.username,
          mediaId: args.mediaId,
          reviewTitle: args.reviewTitle,
          reviewBody: args.reviewBody,
        });
        return review.save();
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
