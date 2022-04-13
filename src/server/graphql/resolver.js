const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

module.exports = {
  Query: {
    allProducts: async () => {
      return await prisma.Product.findMany();
    },
    getProduct: async () => {
      return await prisma.Product.findUnique({ where: { id: 1 } });
    },
  }
};
