import { DocumentNode } from 'graphql';
import { gql } from 'apollo-server-micro';
import { productTypes } from '@graphql/server/product/types';

const CommonTypes = gql`
  scalar Date
`;

const globalTypes: DocumentNode[] = [CommonTypes, productTypes];

export { globalTypes };
