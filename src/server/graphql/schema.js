module.exports = `
  type Product {
    id: ID!
    name: String!,
    amount: Float!,
    description: String,
    createdAt: String,
    updatedAt: String
  }
  type Query {
    allProducts: [Product!]!
    getProduct: Product!
  }
`;
