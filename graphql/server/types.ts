import { DocumentNode } from 'graphql';
import { gql } from 'apollo-server-micro';
import { productTypes } from '@graphql/server/product/types';
import { dispatchTypes } from '@graphql/server/dispatch/types';

const CommonTypes = gql`
  scalar Date
`;

const globalTypes: DocumentNode[] = [CommonTypes, productTypes, dispatchTypes];

export { globalTypes };
