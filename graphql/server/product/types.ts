import { gql } from 'apollo-server-micro';

const productTypes = gql`
  type Product {
    id: ID
    name: String
    price: String
    description: String
    product_order: [Product_Order]
  }

  input ProductCreateInput {
    name: String
    price: String
    description: String
  }

  type Query {
    getProducts: [Product]
    getProduct(name: String): Product
  }

  type Mutation {
    createProduct(data: ProductCreateInput): Product
    updateProduct(id: String, name: String, description: String): Product
    deleteProduct(id: String): Product
  }
`;

export { productTypes };
