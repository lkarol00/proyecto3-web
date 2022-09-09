import { gql } from 'apollo-server-micro';

const UserTypes = gql`
  type User {
    id: ID
    role: String
    name: String
    email: String
  }

  input UserCreateInput {
    role: String
    name: String
    email: String
  }

  type Query {
    getUsers: [User]
    getUser(id: String): User
    countUsers: Int
  }

  type Mutation {
    createUser(data: UserCreateInput): User
    updateUser(id: String, name: String): User
    deleteUser(id: String): User
  }
`;

export { UserTypes };
