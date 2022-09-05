import { Resolver } from 'types';
import { productResolvers } from '@graphql/server/product/resolvers';

const globalResolvers: Resolver[] = [productResolvers];

export { globalResolvers };
