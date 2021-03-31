const resolvers = {
    Query: {
      getRestaurantList: async (_source, _args, { dataSources }) => {
        return dataSources.restaurantAPI.getRestaurants();
      },
  },
}

module.exports = resolvers;
