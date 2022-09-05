import { gql } from 'apollo-server-micro';

const ClientTypes = gql`
  type Client {
    id: ID
    document: String
    email: String
    address: String
    phone: String
    name: String
    orders: [Order]
  }

  type Order {
    id: ID
    client: Client
  }

  input ClientCreateInfo {
    document: String
    email: String
    address: String
    phone: String
    name: String
  }

  type Query {
    getClients: [Client]
    getClientByEmail(email: String): Client
  }

  type Mutation {
    createClient(data: ClientCreateInfo): Client
    updateClient(id: String, data: ClientCreateInfo): Client
    deleteClient(id: String): Client
  }
`;

export { ClientTypes };
