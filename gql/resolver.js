const resolvers = {
  Query: {
    // user
    getUser: () => {
      console.log("Obteniendo usuario");
      return null;
    },
  },
};

module.exports = resolvers;
