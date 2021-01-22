export default (context) => {
  return {
    httpEndpoint: 'http://graphql:4000/',

    /*
     * For permanent authentication provide `getAuth` function.
     * The string returned will be used in all requests as authorization header
     */
    getAuth: () => 'Bearer my-static-token'
  }
};
