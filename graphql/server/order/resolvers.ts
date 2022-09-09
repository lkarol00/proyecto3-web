import prisma from '@config/prisma';
import { Resolver } from 'types';

const OrderResolvers: Resolver = {
  Order: {
    client: async (parent, args) => {
      const client = await prisma.client.findUnique({
        where: {
          id: parent.clientId,
        },
      });
      return client;
    },
    product_order: async (parent, args) => {
      const productOrder = await prisma.product_Order.findMany({
        where: {
          orderId: {
            equals: parent.id,
          },
        },
      });
      return productOrder;
    },
  },
  Query: {
    getOrders: async () => {
      const orders = await prisma.order.findMany();
      return orders;
    },
    getOrder: async (parent, args) => {
      const order = await prisma.order.findUnique({
        where: {
          id: args.id,
        },
      });
      return order;
    },
  },
  Mutation: {
    createOrder: async (parent, args) => {
      const newOrder = await prisma.order.create({
        data: {
          id: args.data.id,
          clientId: args.data.clientId,
        },
      });
      return newOrder;
    },
    updateOrder: async (parent, args) => {
      const updatedOrder = await prisma.order.update({
        where: {
          id: args.id,
        },
        data: {
          clientId: {
            set: args.clientId,
          },
        },
      });
      return updatedOrder;
    },
    deleteUser: async (parent, args) => {
      const deletedUser = await prisma.user.delete({
        where: {
          id: args.id,
        },
      });

      return deletedUser;
    },
  },
};

export { OrderResolvers };
