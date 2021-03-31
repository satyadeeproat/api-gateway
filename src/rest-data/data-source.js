const { RESTDataSource } = require('apollo-datasource-rest');

class RestaurantsAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'http://localhost:3000/';
  }

  async getRestaurant(id) {
    return this.get(`restaurants/${id}`);
  }

  async getRestaurants() {
    return this.get(`restaurants/`);
  }

  async updateRestaurant(id, data) {
    return this.put(`restaurants/${id}`, {
        data
    });
  }
  async createRestaurant(data) {
    return this.post(`restaurants/${id}`, {
        data
    });
  }

  async deleteRestaurant(id) {
    return this.delete(`restaurants/${id}`);
  }
}

module.exports = RestaurantsAPI;