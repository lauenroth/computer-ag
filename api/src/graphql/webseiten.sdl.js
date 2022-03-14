export const schema = gql`
  type Webseite {
    id: Int!
    name: String!
    slug: String!
    design: String!
    html: String!
    createdAt: DateTime!
  }

  type Query {
    webseiten: [Webseite!]! @skipAuth
    webseite(slug: String!): Webseite @skipAuth
  }

  input CreateWebseiteInput {
    name: String!
    slug: String!
    design: String!
    html: String!
  }

  input UpdateWebseiteInput {
    name: String
    slug: String
    design: String
    html: String
  }
`;
