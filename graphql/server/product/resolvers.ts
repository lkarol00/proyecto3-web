import { Resolver } from 'types';
import prisma from '@config/prisma';

const productResolvers: Resolver = {
  Query: {
    getProducts: async () => {
      const products = await prisma.product.findMany();
      return products;
    },
    getProduct: async (parent, args) => {
      const product = await prisma.product.findFirst({
        where: {
          name: args.name,
        },
      });
      return product;
    },
  },
  Mutation: {
    createProduct: async (parent, args) => {
      const newProduct = await prisma.product.create({
        data: {
          name: args.data.name,
          price: args.data.price,
          description: args.data.description,
        },
      });
      return newProduct;
    },
    updateProduct: async (parent, args) => {
      const updatedProduct = await prisma.product.update({
        where: {
          id: args.id,
        },
        data: {
          name: {
            set: args.name,
          },
          description: {
            set: args.description,
          },
        },
      });
      return updatedProduct;
    },
    deleteProduct: async (parent, args) => {
      const deletedProduct = await prisma.product.delete({
        where: {
          id: args.id,
        },
      });
      return deletedProduct;
    },
  },
};

export { productResolvers };
