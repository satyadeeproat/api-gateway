

const client = require('./grpc-client');
console.log(client, 'here');
const resolvers = {
    Query: {
      getNotesList: async () => {
        return new Promise((res, rej) => {
          client.getAll({}, (err, data) => {
              if(!err) {
                res(data.customers)
              } else {
                rej(err)
              }
            })
          });
      },
      getNote: async (_, {id}) => {
        return new Promise((res, rej) => {
          console.log(id);
          client.get({id}, (err, data) => {
              if(!err) {
                res(data)
              } else {
                rej(err)
              }
            })
          });
      },
      
  },
}

module.exports = resolvers;
