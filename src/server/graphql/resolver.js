const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const resolvers = {
  Query: {
    allProducts: async () => {
      return await prisma.Product.findMany();
    },
    getProduct: async (obj, { id }) => {
      const product = await prisma.Product.findUnique({
        where: { id: Number(id) },
      });

      if (product) {
        return product;
      } else {
        throw new Error("Requested resource was not found");
      }
    },
  },
  Mutation: {
    createProduct: async (obj, { product }) => {
      return await prisma.Product.create({ data: product });
    },
    updateProduct: async (obj, { id, product }) => {
      return await prisma.Product.update({
        where: { id: Number(id) },
        data: product,
      });
    },
    deleteProduct: async (obj, { id }) => {
      return await prisma.Product.delete({ where: { id: Number(id) } });
    },
  },
};

module.exports = resolvers;