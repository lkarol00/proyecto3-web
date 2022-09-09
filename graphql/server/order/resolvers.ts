import prisma from '@config/prisma';
import { Resolver } from 'types';

const OrderResolvers: Resolver = {
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
    crearOrder: async (parent, args) => {
      const newOrder = await prisma.order.create({
        data: {
          id: args.data.id,
          client: args.data.client,
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
