export const schema = gql`
  type Anmeldung {
    id: Int!
    name: String!
    email: String!
    klasse: String!
    anmerkung: String
    createdAt: DateTime!
  }

  type Query {
    anmeldungen: [Anmeldung!]! @requireAuth
    anmeldung(id: Int!): Anmeldung @requireAuth
  }

  input CreateAnmeldungInput {
    name: String!
    email: String!
    klasse: String!
    anmerkung: String
  }

  input UpdateAnmeldungInput {
    name: String
    email: String
    klasse: String
    anmerkung: String
  }

  type Mutation {
    createAnmeldung(input: CreateAnmeldungInput!): Anmeldung! @skipAuth
    updateAnmeldung(id: Int!, input: UpdateAnmeldungInput!): Anmeldung!
      @requireAuth
    deleteAnmeldung(id: Int!): Anmeldung! @requireAuth
  }
`
