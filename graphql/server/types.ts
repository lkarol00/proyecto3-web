import { DocumentNode } from 'graphql';
import { gql } from 'apollo-server-micro';
import { UserTypes } from '@graphql/server/user/type';
import { OrderTypes } from '@graphql/server/order/types';
import { productTypes } from '@graphql/server/product/types';
import { dispatchTypes } from '@graphql/server/dispatch/types';

const CommonTypes = gql`
  scalar Date
`;

const globalTypes: DocumentNode[] = [
  CommonTypes,
  productTypes,
  dispatchTypes,
  OrderTypes,
  UserTypes,
];

export { globalTypes };
