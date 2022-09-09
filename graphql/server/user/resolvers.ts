import prisma from '@config/prisma';
import { Resolver } from 'types';

const UserResolvers: Resolver = {
  Query: {
    getUsers: async () => {
      const users = await prisma.user.findMany();
      return users;
    },
    getUser: async (parent, args) => {
      const user = await prisma.user.findUnique({
        where: {
          id: args.id,
        },
      });
      return user;
    },
    countUsers: async () => {
      const conteo = await prisma.user.count();

      return conteo;
    },
  },
  Mutation: {
    createUser: async (parent, args) => {
      const newUser = await prisma.user.create({
        data: {
          role: args.data.role,
          name: args.data.name,
          email: args.data.email,
        },
      });
      return newUser;
    },
    updateUser: async (parent, args) => {
      const updatedUser = await prisma.user.update({
        where: {
          id: args.id,
        },
        data: {
          name: {
            set: args.name,
          },
        },
      });
      return updatedUser;
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

export { UserResolvers };
