import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

import { authors, books, lendings, members } from "./_db.js";

const typeDefs = `#graphql
  type Author {
    id: ID!
    name: String!
    books: [Book!]
  }

  type Book {
    id: ID!
    title: String!
    author: Author!
    published_at: String!
    category: String!
    total: Int!
    lendings: [Lending!]
  }

  type Member {
    id: ID!
    name: String!
    email: String!
    verified: Boolean!
    lendings: [Lending!]
  }

  type Lending {
    id: ID!
    borrowed_at: String!
    returned_at: String!
    book: Book!
    member: Member!
  }

  type Query {
    authors: [Author!]!
    author(id: ID!): Author!
    books: [Book!]!
    book(id: ID!): Book!
    members: [Member!]!
    member(id: ID!): Member!
    lendings: [Lending!]!
    lending(id: ID!): Lending!
  }
`;

const resolvers = {
  Query: {
    authors: () => {
      return authors;
    },
    author: (_, args) => {
      return authors.find((author) => author.id === args.id);
    },
    books: () => {
      return books;
    },
    book: (_, args) => {
      return books.find((book) => book.id === args.id);
    },
    members: () => {
      return members;
    },
    member: (_, args) => {
      return members.find((member) => member.id === args.id);
    },
    lendings: () => {
      return lendings;
    },
    lending: (_, args) => {
      return lendings.find((lending) => lending.id === args.id);
    },
  },
  Author: {
    books(parent) {
      return books.filter((book) => book.author_id === parent.id);
    },
  },
  Book: {
    lendings(parent) {
      return lendings.filter((lending) => lending.book_id === parent.id);
    },
    author(parent) {
      return authors.find((author) => author.id === parent.author_id);
    },
  },
  Member: {
    lendings(parent) {
      return lendings.filter((lending) => lending.member_id === parent.id);
    },
  },
  Lending: {
    book(parent) {
      return books.find((book) => book.id === parent.book_id);
    },
    member(parent) {
      return members.find((member) => member.id === parent.member_id);
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});

console.log(`Server ready at: ${url}`);
