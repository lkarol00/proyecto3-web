import { gql } from 'apollo-server-micro';

const dispatchTypes = gql`
  scalar DateTime

  type Dispatch {
    id: ID
    deliveryCost: Float
    serviceScore: Int
    status: String
    dispatchTime: DateTime
    deliveryTime: DateTime
    user: User
    order: Order
  }

  type Client {
    id: ID
    document: String
    email: String
    address: String
    phone: String
    name: String
    orders: [Order]
  }

  type User {
    id: ID
    role: String
    name: String
    email: String
  }

  type Order {
    id: ID
    client: Client
    clientID: String
    products: Product
  }

  input DispatchCreateInput {
    deliveryCost: Float
    status: String
    dispatchTime: DateTime
    user_id: String
    order_id: String
  }

  type Query {
    getDispatches: [Dispatch]
    getDispatch(dispatchTime: DateTime): Dispatch
  }

  type Mutation {
    createDispatch(data: DispatchCreateInput): Dispatch
    updateDispatch(id: String, name: String, description: String): Dispatch
    deleteDispatch(id: String): Dispatch
  }
`;

export { dispatchTypes };
