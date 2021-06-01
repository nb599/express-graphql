export default `

type Activity {
  id: Int!
  title: String!
  creator: User!
  creatorId: Int!
}

type Suggestion {
  id: Int!
  text: String!
  creator: User!
  activityId: Int!
}

  type Board {
    id: Int!
    name: String!
    suggestions: [Suggestion!]!
    owner: Int!
  }

  type User {
    id: Int!
    username: String!
    createdAt: String!
    updatedAt: String! 
    boards: [Board!]!
    suggestions: [Suggestion!]!
    activities:[Activity!]!
  }

  type Query {
    allActivity: [Activity!]!
    allUsers: [User!]!
    getUser(username: String!): User
    userBoards(owner: String!): [Board!]!
    userSuggestions(creatorId: String!): [Suggestion!]!
  }

  type Mutation {
    createUser(username: String!): User
    updateUser(username: String!, newUsername: String!): [Int!]!
    deleteUser(username: String!): Int!
    createBoard(owner: Int!, name: String): Board!
    createAct(creatorId: Int!, title: String): Activity!
    createSuggestion(creatorId: Int!, text: String, boardId: Int!): Suggestion!
  }
`;