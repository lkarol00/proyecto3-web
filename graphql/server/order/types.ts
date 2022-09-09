// eslint-disable-next-line spaced-comment
//import { Order } from '@prisma/client';
import { gql } from 'apollo-server-micro';

const OrderTypes = gql`
  type Order {
    id: ID
    client: Client
    clientID: String
    products: Product
  }

  input OrderCreateInput {
    id: ID
    clientID: String
    products: Product
  }

  type Query {
    getOrders: [Order]
    getOrder(id: String): Order
  }

  type Mutation {
    crearOrder(data: OrderCreateInput): Order
    updateOrder(id: String, client: Client): Order
    deleteOrder(id: String, clientID: String): Order
  }
`;

export { OrderTypes };

// eslint-disable-next-line spaced-comment
/*type client{
    id: ID
    name: String
  }
   type product{
    id: ID
    name: String
  }*/
