export const schema = gql`
  type Profile {
    id: String!
    avatar: String
    klasse: String
    hobbies: String
    user: [User]!
  }

  type Query {
    latestMembers: [Profile!]
  }

  input CreateProfileInput {
    avatar: String
    klasse: String
    hobbies: String
  }

  input UpdateProfileInput {
    avatar: String
    klasse: String
    hobbies: String
  }
`;
