import prisma from '@config/prisma';

import { Resolver } from 'types';

const ClientResolvers: Resolver = {
  Client: {
    orders: async (parent, args) => {
      const orders = await prisma.order.findMany({
        where: {
          clientId: {
            equals: parent.id,
          },
        },
      });
      return orders;
    },
  },
  Query: {
    getClients: async () => {
      const clients = await prisma.client.findMany();
      return clients;
    },
    getClientByEmail: async (parent, args) => {
      const client = await prisma.client.findUnique({
        where: {
          email: args.email,
        },
      });
      return client;
    },
  },
  Mutation: {
    createClient: async (parent, args) => {
      const newClient = await prisma.client.create({
        data: {
          document: args.data.document,
          email: args.data.email,
          address: args.data.address,
          phone: args.data.phone,
          name: args.data.name,
        },
      });
      return newClient;
    },
    updateClient: async (parent, args) => {
      const updatedClient = await prisma.client.update({
        where: {
          id: args.id,
        },
        data: {
          document: {
            set: args.data.document,
          },
          email: {
            set: args.data.email,
          },
          address: {
            set: args.data.address,
          },
          phone: {
            set: args.data.phone,
          },
          name: {
            set: args.data.name,
          },
        },
      });
      return updatedClient;
    },
    deleteClient: async (parent, args) => {
      const deletedClient = await prisma.client.delete({
        where: {
          id: args.id,
        },
      });

      return deletedClient;
    },
  },
};

export { ClientResolvers };
