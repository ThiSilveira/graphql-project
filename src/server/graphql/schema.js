const typeDefs = `
  input InputProduct {
    name: String!,
    amount: Float!,
    description: String,
  }
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
    getProduct(id: ID!): Product
  }
  type Mutation {
    createProduct(product: InputProduct): Product
    updateProduct(id: ID!, product: InputProduct): Product
    deleteProduct(id: ID!) : Product
  }
`;

module.exports = typeDefs;
