export const schema = gql`
  type BlogPost {
    id: Int!
    slug: String!
    titel: String!
    text: String!
    createdAt: DateTime!
  }

  type Query {
    blogPosts: [BlogPost!]! @requireAuth
    postBySlug(slug: String!): BlogPost @requireAuth
  }

  input CreateBlogPostInput {
    slug: String!
    titel: String!
    text: String!
  }

  input UpdateBlogPostInput {
    slug: String
    titel: String
    text: String
  }
`;
