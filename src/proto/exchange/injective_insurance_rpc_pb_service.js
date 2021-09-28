// package: injective_insurance_rpc
// file: exchange/injective_insurance_rpc.proto

var exchange_injective_insurance_rpc_pb = require("../exchange/injective_insurance_rpc_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var InjectiveInsuranceRPC = (function () {
  function InjectiveInsuranceRPC() {}
  InjectiveInsuranceRPC.serviceName = "injective_insurance_rpc.InjectiveInsuranceRPC";
  return InjectiveInsuranceRPC;
}());

InjectiveInsuranceRPC.Funds = {
  methodName: "Funds",
  service: InjectiveInsuranceRPC,
  requestStream: false,
  responseStream: false,
  requestType: exchange_injective_insurance_rpc_pb.FundsRequest,
  responseType: exchange_injective_insurance_rpc_pb.FundsResponse
};

InjectiveInsuranceRPC.Redemptions = {
  methodName: "Redemptions",
  service: InjectiveInsuranceRPC,
  requestStream: false,
  responseStream: false,
  requestType: exchange_injective_insurance_rpc_pb.RedemptionsRequest,
  responseType: exchange_injective_insurance_rpc_pb.RedemptionsResponse
};

exports.InjectiveInsuranceRPC = InjectiveInsuranceRPC;

function InjectiveInsuranceRPCClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

InjectiveInsuranceRPCClient.prototype.funds = function funds(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(InjectiveInsuranceRPC.Funds, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

InjectiveInsuranceRPCClient.prototype.redemptions = function redemptions(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(InjectiveInsuranceRPC.Redemptions, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

exports.InjectiveInsuranceRPCClient = InjectiveInsuranceRPCClient;

