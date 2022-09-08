import { Order } from '@prisma/client';
import { gql } from 'apollo-server-micro';

const OrderTypes = gql`
  type Order {
    id: ID
    client: client
    clientID: String
    products: product
  }
  type client{
    id: ID
    name: String
  }
   type product{
    id: ID
    name: String
  }

  input OrderCreateInput {
    id: ID
    client: client
    clientID: String
    products: product
  }

  type Query {
    getOrder: [Order]
    getOrder(id: String): order
  }

  type Mutation {
    crearOrder(data: OrderCreateInput): Order
    updateOrder(id: String, client: Client): Order
    deleteOrder(id: String,  clientID: String): Order
  }
`;

export {OrderTypes};