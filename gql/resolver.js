const resolvers = {
  Query: {
    // user
    getUser: () => {
      console.log("Obteniendo usuario");
      return null;
    },
  },

  Mutation: {
    //User
    register: (_, { input }) => {
      console.log("Registrando usuarios");
      return null;
    },
  },
};

module.exports = resolvers;
