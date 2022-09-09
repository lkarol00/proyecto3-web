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
    obtenerUsuarios: [User]
    obtenerUsuario(id: String): User
    contarUsuarios: Int
  }

  type Mutation {
    crearUsuario(data: UserCreateInput): User
    updateUser(id: String, name: String): User
    deleteUser(id: String): User
  }
`;

export { UserTypes };
