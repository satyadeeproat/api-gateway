const PROTO_PATH = `${__dirname}/customers.proto`;

const grpc = require("grpc");
const protoLoader = require("@grpc/proto-loader");

var packageDefinition = protoLoader.loadSync(PROTO_PATH, {});

const grpcObject = grpc.loadPackageDefinition(packageDefinition);

const CustomerService = grpcObject.CustomerService;
const client = new CustomerService(
	"localhost:4679",
	grpc.credentials.createInsecure()
);

module.exports = client;