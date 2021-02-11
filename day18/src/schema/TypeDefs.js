const {gql} = require("apollo-server-express");

const typeDefs = gql`
  type Use {
    name: String
    addr: String
  }
  type Writer {
    full_name: String
    email: String
    photo: String
    books:[Book]
  }
  type Book {
    writer_id: Int
    category_id: Int
    title: String
    description: String
    photo: String
  }
  type Categories {
    id: Int
    category: String
  }

  type Query {
    hello: String
    users: Use
    writers: [Writer]
    categories: [Categories]
    writerById(id: Int!): Writer
    books: [Book]
  }

  type Mutation {
    createCategory(category: String!): Categories
    updateCategory(id: Int!, category: String!): Categories
    deleteCategory(id: Int!): Categories

    createWriter(full_name: String!, email: String!, photo: String!): Writer
    updateWriter(id: Int!, full_name: String!, email: String!, photo: String!): Writer
    deleteWriter(id: Int!): Writer

    createBook(writer_id: Int!, category_id:Int!, title: String!, description: String!, photo: String!): Book
    updateBook(id: Int!,writer_id: Int!, category_id:Int!, title: String!, description: String!, photo: String!): Book
    deleteBook(id: Int!): Book
  }
 
`;

module.exports = typeDefs;
