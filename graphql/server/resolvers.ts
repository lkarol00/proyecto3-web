import { Resolver } from 'types';
import { UserResolvers } from '@graphql/server/user/resolvers';
import { OrderResolvers } from '@graphql/server/order/resolvers';
import { productResolvers } from '@graphql/server/product/resolvers';
import { dispatchResolvers } from '@graphql/server/dispatch/resolvers';
import { ClientResolvers } from '@graphql/server/clients/resolvers';
import { ProductOrderResolvers } from '@graphql/server/product_order/resolvers';

const globalResolvers: Resolver[] = [
  productResolvers,
  dispatchResolvers,
  OrderResolvers,
  UserResolvers,
  ClientResolvers,
  ProductOrderResolvers,
];

export { globalResolvers };
