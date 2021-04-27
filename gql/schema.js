const { gql } = require("apollo-server");

const typeDefs = gql`
  type User {
    id: ID
    name: String
    username: String
    email: String
    siteWeb: String
    description: String
    password: String
    avatar: String
    createAt: String
  }

  type Token {
    token: String
  }

  input UserInput {
    name: String!
    username: String!
    email: String!
    password: String!
  }

  input LoginInput {
    email: String!
    password: String!
  }

  type Query {
    # User
    getUser(id: ID, username: String): User
    search(search: String): [User]

    # Follow
    isFollow(username: String!): Boolean
    getFollowers(username: String!): [User]
    getFolloweds(username: String!): [User]
    getNotFolloweds: [User]

    # Publication
    getPublications(username: String!): [Publication]
    getPublicationsFolloweds: [FeedPublication]

    # Comment
    getComments(idPublication: ID!): [Comment]

    # Like
    isLike(idPublication: ID!): Boolean
    countLikes(idPublication: ID!): Int
  }

  type Mutation {
    #User
    register(input: UserInput): User
    login(input: LoginInput): Token
  }
`;

module.exports = typeDefs;
