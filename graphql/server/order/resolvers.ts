import prisma from '@config/prisma';
import { Resolver } from 'types';
import { OrderTypes } from './types';

const OrderResolvers: Resolver = {
  Query: {
    obtenerOrder: async () => {
      const Order = await prisma.order.findMany();
      return Order;
    },
    obtenerOrderes: async (parent, args) => {
      const Order = await prisma.order.findUnique({
        where: {
          id: args.id,
        },
      });
      return Order;
    },
    contarOrder: async () => {
      const conteo = await prisma.order.count();
    }
  },
  Mutation: {
    crearOrder: async (parent, args) => {
      const newOrder = await prisma.order.create({
        data: {
          id: args.data.id,
          client: args.data.client,
          clientId: args.data.clientId,
          products: args.data.products
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