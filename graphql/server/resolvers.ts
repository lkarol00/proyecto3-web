import { UserResolvers } from '@graphql/server/user/resolvers';
import { OrderResolvers } from '@graphql/server/order/resolvers';

const globalResolvers = [OrderResolvers, UserResolvers];

export { globalResolvers };
