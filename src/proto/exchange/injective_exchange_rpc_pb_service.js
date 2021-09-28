// package: injective_exchange_rpc
// file: exchange/injective_exchange_rpc.proto

var exchange_injective_exchange_rpc_pb = require("../exchange/injective_exchange_rpc_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var InjectiveExchangeRPC = (function () {
  function InjectiveExchangeRPC() {}
  InjectiveExchangeRPC.serviceName = "injective_exchange_rpc.InjectiveExchangeRPC";
  return InjectiveExchangeRPC;
}());

InjectiveExchangeRPC.Ping = {
  methodName: "Ping",
  service: InjectiveExchangeRPC,
  requestStream: false,
  responseStream: false,
  requestType: exchange_injective_exchange_rpc_pb.PingRequest,
  responseType: exchange_injective_exchange_rpc_pb.PingResponse
};

InjectiveExchangeRPC.Version = {
  methodName: "Version",
  service: InjectiveExchangeRPC,
  requestStream: false,
  responseStream: false,
  requestType: exchange_injective_exchange_rpc_pb.VersionRequest,
  responseType: exchange_injective_exchange_rpc_pb.VersionResponse
};

InjectiveExchangeRPC.GetTx = {
  methodName: "GetTx",
  service: InjectiveExchangeRPC,
  requestStream: false,
  responseStream: false,
  requestType: exchange_injective_exchange_rpc_pb.GetTxRequest,
  responseType: exchange_injective_exchange_rpc_pb.GetTxResponse
};

InjectiveExchangeRPC.PrepareTx = {
  methodName: "PrepareTx",
  service: InjectiveExchangeRPC,
  requestStream: false,
  responseStream: false,
  requestType: exchange_injective_exchange_rpc_pb.PrepareTxRequest,
  responseType: exchange_injective_exchange_rpc_pb.PrepareTxResponse
};

InjectiveExchangeRPC.BroadcastTx = {
  methodName: "BroadcastTx",
  service: InjectiveExchangeRPC,
  requestStream: false,
  responseStream: false,
  requestType: exchange_injective_exchange_rpc_pb.BroadcastTxRequest,
  responseType: exchange_injective_exchange_rpc_pb.BroadcastTxResponse
};

exports.InjectiveExchangeRPC = InjectiveExchangeRPC;

function InjectiveExchangeRPCClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

InjectiveExchangeRPCClient.prototype.ping = function ping(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(InjectiveExchangeRPC.Ping, {
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

InjectiveExchangeRPCClient.prototype.version = function version(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(InjectiveExchangeRPC.Version, {
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

InjectiveExchangeRPCClient.prototype.getTx = function getTx(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(InjectiveExchangeRPC.GetTx, {
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

InjectiveExchangeRPCClient.prototype.prepareTx = function prepareTx(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(InjectiveExchangeRPC.PrepareTx, {
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

InjectiveExchangeRPCClient.prototype.broadcastTx = function broadcastTx(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(InjectiveExchangeRPC.BroadcastTx, {
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

exports.InjectiveExchangeRPCClient = InjectiveExchangeRPCClient;

