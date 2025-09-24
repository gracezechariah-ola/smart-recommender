
export const typeDefs = `
  type Headphone {
    id: Int!
    name: String,
    make: String
    model: String
    price: Float
    colour: String
    description: String
    seller: String
    sellerSite: String
    imageFile: String
    deliveryCost: String
    deliveryTime: String
  }

  type Query {
    hello: String
    getAllProducts: [Headphone!]!
    getAllHeadphones: [Headphone!]!
    getAllHeadphoneById(id: Int!): Headphone
    getAllHeadphoneByMake ( make: String!): [Headphone!]!
    getAllHeadphoneByDesc ( filter: [String!], match: String): [Headphone!]!
    getHeadphonesFullFilter( make: String, model: String, price: Float, colour: String, descfeature: [String!], match: String)	: [Headphone!]!
  }
`;
