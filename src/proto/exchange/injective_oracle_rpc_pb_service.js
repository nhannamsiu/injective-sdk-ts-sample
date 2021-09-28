// package: injective_oracle_rpc
// file: exchange/injective_oracle_rpc.proto

var exchange_injective_oracle_rpc_pb = require("../exchange/injective_oracle_rpc_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var InjectiveOracleRPC = (function () {
  function InjectiveOracleRPC() {}
  InjectiveOracleRPC.serviceName = "injective_oracle_rpc.InjectiveOracleRPC";
  return InjectiveOracleRPC;
}());

InjectiveOracleRPC.OracleList = {
  methodName: "OracleList",
  service: InjectiveOracleRPC,
  requestStream: false,
  responseStream: false,
  requestType: exchange_injective_oracle_rpc_pb.OracleListRequest,
  responseType: exchange_injective_oracle_rpc_pb.OracleListResponse
};

InjectiveOracleRPC.Price = {
  methodName: "Price",
  service: InjectiveOracleRPC,
  requestStream: false,
  responseStream: false,
  requestType: exchange_injective_oracle_rpc_pb.PriceRequest,
  responseType: exchange_injective_oracle_rpc_pb.PriceResponse
};

InjectiveOracleRPC.StreamPrices = {
  methodName: "StreamPrices",
  service: InjectiveOracleRPC,
  requestStream: false,
  responseStream: true,
  requestType: exchange_injective_oracle_rpc_pb.StreamPricesRequest,
  responseType: exchange_injective_oracle_rpc_pb.StreamPricesResponse
};

exports.InjectiveOracleRPC = InjectiveOracleRPC;

function InjectiveOracleRPCClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

InjectiveOracleRPCClient.prototype.oracleList = function oracleList(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(InjectiveOracleRPC.OracleList, {
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

InjectiveOracleRPCClient.prototype.price = function price(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(InjectiveOracleRPC.Price, {
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

InjectiveOracleRPCClient.prototype.streamPrices = function streamPrices(requestMessage, metadata) {
  var listeners = {
    data: [],
    end: [],
    status: []
  };
  var client = grpc.invoke(InjectiveOracleRPC.StreamPrices, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onMessage: function (responseMessage) {
      listeners.data.forEach(function (handler) {
        handler(responseMessage);
      });
    },
    onEnd: function (status, statusMessage, trailers) {
      listeners.status.forEach(function (handler) {
        handler({ code: status, details: statusMessage, metadata: trailers });
      });
      listeners.end.forEach(function (handler) {
        handler({ code: status, details: statusMessage, metadata: trailers });
      });
      listeners = null;
    }
  });
  return {
    on: function (type, handler) {
      listeners[type].push(handler);
      return this;
    },
    cancel: function () {
      listeners = null;
      client.close();
    }
  };
};

exports.InjectiveOracleRPCClient = InjectiveOracleRPCClient;

