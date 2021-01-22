import gql from 'graphql-tag';

export const getBooks = gql`
  query q {
    books {
      id
      title
      author
    }
  }
`;
