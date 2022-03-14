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
    webseites: [Webseite!]! @requireAuth
    webseite(id: Int!): Webseite @requireAuth
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

  type Mutation {
    createWebseite(input: CreateWebseiteInput!): Webseite! @requireAuth
    updateWebseite(id: Int!, input: UpdateWebseiteInput!): Webseite!
      @requireAuth
    deleteWebseite(id: Int!): Webseite! @requireAuth
  }
`;
