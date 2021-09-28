// package: injective_explorer_rpc
// file: exchange/injective_explorer_rpc.proto

var exchange_injective_explorer_rpc_pb = require("../exchange/injective_explorer_rpc_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var InjectiveExplorerRPC = (function () {
  function InjectiveExplorerRPC() {}
  InjectiveExplorerRPC.serviceName = "injective_explorer_rpc.InjectiveExplorerRPC";
  return InjectiveExplorerRPC;
}());

InjectiveExplorerRPC.GetAccount = {
  methodName: "GetAccount",
  service: InjectiveExplorerRPC,
  requestStream: false,
  responseStream: false,
  requestType: exchange_injective_explorer_rpc_pb.GetAccountRequest,
  responseType: exchange_injective_explorer_rpc_pb.GetAccountResponse
};

InjectiveExplorerRPC.GetAccountTxs = {
  methodName: "GetAccountTxs",
  service: InjectiveExplorerRPC,
  requestStream: false,
  responseStream: false,
  requestType: exchange_injective_explorer_rpc_pb.GetAccountTxsRequest,
  responseType: exchange_injective_explorer_rpc_pb.GetAccountTxsResponse
};

InjectiveExplorerRPC.StreamTxs = {
  methodName: "StreamTxs",
  service: InjectiveExplorerRPC,
  requestStream: false,
  responseStream: true,
  requestType: exchange_injective_explorer_rpc_pb.StreamTxsRequest,
  responseType: exchange_injective_explorer_rpc_pb.StreamTxsResponse
};

InjectiveExplorerRPC.StreamBlocks = {
  methodName: "StreamBlocks",
  service: InjectiveExplorerRPC,
  requestStream: false,
  responseStream: true,
  requestType: exchange_injective_explorer_rpc_pb.StreamBlocksRequest,
  responseType: exchange_injective_explorer_rpc_pb.StreamBlocksResponse
};

exports.InjectiveExplorerRPC = InjectiveExplorerRPC;

function InjectiveExplorerRPCClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

InjectiveExplorerRPCClient.prototype.getAccount = function getAccount(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(InjectiveExplorerRPC.GetAccount, {
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

InjectiveExplorerRPCClient.prototype.getAccountTxs = function getAccountTxs(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(InjectiveExplorerRPC.GetAccountTxs, {
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

InjectiveExplorerRPCClient.prototype.streamTxs = function streamTxs(requestMessage, metadata) {
  var listeners = {
    data: [],
    end: [],
    status: []
  };
  var client = grpc.invoke(InjectiveExplorerRPC.StreamTxs, {
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

InjectiveExplorerRPCClient.prototype.streamBlocks = function streamBlocks(requestMessage, metadata) {
  var listeners = {
    data: [],
    end: [],
    status: []
  };
  var client = grpc.invoke(InjectiveExplorerRPC.StreamBlocks, {
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

exports.InjectiveExplorerRPCClient = InjectiveExplorerRPCClient;

