import { Resolver } from 'types';
import { model1Resolvers } from '@graphql/server/model1/resolvers';
import { productResolvers } from '@graphql/server/product/resolvers';

const globalResolvers: Resolver[] = [model1Resolvers, productResolvers];

export { globalResolvers };
