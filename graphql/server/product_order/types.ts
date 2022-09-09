import { gql } from 'apollo-server-micro';

const ProductOrderTypes = gql`
  type Product_Order {
    product: Product
    order: Order
    amount: Int
  }

  input Product_OrderCreateInput {
    productId: String
    orderId: String
    amount: Int
  }

  type Query {
    getProduct_Orders: [Product_Order]
    getProduct_OrderById(productId: String, orderId: String): Product_Order
  }

  type Mutation {
    createProductOrder(data: Product_OrderCreateInput): Product_Order
    updateProductOrder(data: Product_OrderCreateInput): Product_Order
    deleteProductOrder(productId: String, orderId: String): Product_Order
  }
`;

export { ProductOrderTypes };
