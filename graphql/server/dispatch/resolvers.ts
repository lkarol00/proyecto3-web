import { Resolver } from 'types';
import prisma from '@config/prisma';

const dispatchResolvers: Resolver = {
  Dispatch: {
    order: async (parent, args) => {
      const order = await prisma.order.findUnique({
        where: {
          id: parent.orderId,
        },
      });
      return order;
    },
    user: async (parent, args) => {
      const user = await prisma.user.findUnique({
        where: {
          id: parent.userId,
        },
      });
      return user;
    },
  },
  Query: {
    getDispatches: async () => {
      const dispatches = await prisma.dispatch.findMany();
      return dispatches;
    },
    getDispatch: async (parent, args) => {
      const dispatch = await prisma.dispatch.findFirst({
        where: {
          dispatchTime: args.dispatchTime,
        },
      });
      return dispatch;
    },
  },
  Mutation: {
    createDispatch: async (parent, args) => {
      const newDispatch = await prisma.dispatch.create({
        data: {
          deliveryCost: args.data.deliveryCost,
          userId: args.data.userId,
          orderId: args.data.orderId,
          serviceScore: args.data.serviceScore,
          status: args.data.status,
          dispatchTime: args.data.dispatchTime,
          deliveryTime: args.data.deliveryTime,
        },
      });
      return newDispatch;
    },
    updateDispatch: async (parent, args) => {
      const updatedDispatch = await prisma.dispatch.update({
        where: {
          id: args.id,
        },
        data: {
          status: {
            set: args.status,
          },
          serviceScore: {
            set: args.serviceScore,
          },
        },
      });
      return updatedDispatch;
    },
    deleteDispatch: async (parent, args) => {
      const deletedDispatch = await prisma.dispatch.delete({
        where: {
          id: args.id,
        },
      });
      return deletedDispatch;
    },
  },
};

export { dispatchResolvers };
