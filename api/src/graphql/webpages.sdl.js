export const schema = gql`
  type Webpage {
    id: Int!
    name: String!
    slug: String!
    design: String!
    html: String!
    createdAt: DateTime!
  }

  type Query {
    webpages: [Webpage!]! @skipAuth
    webpage(id: Int!): Webpage @skipAuth
  }

  input CreateWebpageInput {
    name: String!
    slug: String!
    design: String!
    html: String!
  }

  input UpdateWebpageInput {
    name: String
    slug: String
    design: String
    html: String
  }

  type Mutation {
    createWebpage(input: CreateWebpageInput!): Webpage! @requireAuth
    updateWebpage(id: Int!, input: UpdateWebpageInput!): Webpage! @requireAuth
    deleteWebpage(id: Int!): Webpage! @requireAuth
  }
`;
