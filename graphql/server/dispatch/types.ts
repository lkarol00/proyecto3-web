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

  input DispatchCreateInput {
    deliveryCost: Float
    status: String
    serviceScore: Int
    dispatchTime: DateTime
    deliveryTime: DateTime
    userId: String
    orderId: String
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
