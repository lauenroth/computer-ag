export const schema = gql`
  type Website {
    id: Int!
    userId: Int!
    name: String!
    slug: String!
    design: String!
    createdAt: DateTime!
    # User: [User]!
  }

  type Query {
    websites: [Website!]! @skipAuth
    website(id: Int!): Website @skipAuth
    websiteBySlug(slug: String!): Website @skipAuth
  }

  input CreateWebsiteInput {
    # userId: Int!
    name: String!
    slug: String!
    design: String!
  }

  input UpdateWebsiteInput {
    # userId: Int
    name: String
    slug: String
    design: String
  }
`;
