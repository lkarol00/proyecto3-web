import { Resolver } from 'types';
import { model1Resolvers } from '@graphql/server/model1/resolvers';
import { ClientResolvers } from '@graphql/server/clients/resolvers';

const globalResolvers: Resolver[] = [model1Resolvers, ClientResolvers];

export { globalResolvers };
