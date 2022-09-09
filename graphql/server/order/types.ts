import { gql } from 'apollo-server-micro';

const OrderTypes = gql`
  type Order {
    id: ID
    client: Client
    product_order: [Product_Order]
  }

  input OrderCreateInput {
    clientId: String
    productId: String
  }

  type Query {
    getOrders: [Order]
    getOrder(id: String): Order
  }

  type Mutation {
    createOrder(data: OrderCreateInput): Order
    updateOrder(id: String, clientID: String): Order
    deleteOrder(id: String, clientID: String): Order
  }
`;

export { OrderTypes };
