import { Resolver } from 'types';
import prisma from '@config/prisma';

const ProductOrderResolvers: Resolver = {
  Product_Order: {
    order: async (parent, args) => {
      const order = await prisma.order.findUnique({
        where: {
          id: parent.orderId,
        },
      });
      return order;
    },
    product: async (parent, args) => {
      const product = await prisma.product.findUnique({
        where: {
          id: parent.productId,
        },
      });
      return product;
    },
  },
  Query: {
    getProduct_Orders: async () => {
      const productOrders = await prisma.product_Order.findMany();
      return productOrders;
    },
    getProduct_OrderById: async (parent, args) => {
      const productOrder = await prisma.product_Order.findFirst({
        where: {
          productId: args.productId,
          orderId: args.orderId,
        },
      });
      return productOrder;
    },
  },
  Mutation: {
    createProductOrder: async (parent, args) => {
      const newProductOrder = await prisma.product_Order.create({
        data: {
          productId: args.data.productId,
          orderId: args.data.orderId,
          amount: args.data.amount,
        },
      });
      return newProductOrder;
    },
    updateProductOrder: async (parent, args) => {
      const updatedProductOrder = await prisma.product_Order.update({
        where: {
          productId_orderId: {
            productId: args.productId,
            orderId: args.orderId,
          },
        },
        data: {
          productId: {
            set: args.data.productId,
          },
          orderId: {
            set: args.data.orderId,
          },
          amount: {
            set: args.data.amount,
          },
        },
      });
      return updatedProductOrder;
    },
    deleteProductOrder: async (parent, args) => {
      const deletedProductOrder = await prisma.product_Order.delete({
        where: {
          productId_orderId: {
            productId: args.productId,
            orderId: args.orderId,
          },
        },
      });
      return deletedProductOrder;
    },
  },
};

export { ProductOrderResolvers };
