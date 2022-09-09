import { Resolver } from 'types';
import { productResolvers } from '@graphql/server/product/resolvers';
import { dispatchResolvers } from '@graphql/server/dispatch/resolvers';

const globalResolvers: Resolver[] = [productResolvers, dispatchResolvers];

export { globalResolvers };
