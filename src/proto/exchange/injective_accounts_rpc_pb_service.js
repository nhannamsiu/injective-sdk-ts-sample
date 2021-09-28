// package: injective_accounts_rpc
// file: exchange/injective_accounts_rpc.proto

var exchange_injective_accounts_rpc_pb = require("../exchange/injective_accounts_rpc_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var InjectiveAccountsRPC = (function () {
  function InjectiveAccountsRPC() {}
  InjectiveAccountsRPC.serviceName = "injective_accounts_rpc.InjectiveAccountsRPC";
  return InjectiveAccountsRPC;
}());

InjectiveAccountsRPC.SubaccountsList = {
  methodName: "SubaccountsList",
  service: InjectiveAccountsRPC,
  requestStream: false,
  responseStream: false,
  requestType: exchange_injective_accounts_rpc_pb.SubaccountsListRequest,
  responseType: exchange_injective_accounts_rpc_pb.SubaccountsListResponse
};

InjectiveAccountsRPC.SubaccountBalancesList = {
  methodName: "SubaccountBalancesList",
  service: InjectiveAccountsRPC,
  requestStream: false,
  responseStream: false,
  requestType: exchange_injective_accounts_rpc_pb.SubaccountBalancesListRequest,
  responseType: exchange_injective_accounts_rpc_pb.SubaccountBalancesListResponse
};

InjectiveAccountsRPC.SubaccountBalanceEndpoint = {
  methodName: "SubaccountBalanceEndpoint",
  service: InjectiveAccountsRPC,
  requestStream: false,
  responseStream: false,
  requestType: exchange_injective_accounts_rpc_pb.SubaccountBalanceRequest,
  responseType: exchange_injective_accounts_rpc_pb.SubaccountBalanceResponse
};

InjectiveAccountsRPC.StreamSubaccountBalance = {
  methodName: "StreamSubaccountBalance",
  service: InjectiveAccountsRPC,
  requestStream: false,
  responseStream: true,
  requestType: exchange_injective_accounts_rpc_pb.StreamSubaccountBalanceRequest,
  responseType: exchange_injective_accounts_rpc_pb.StreamSubaccountBalanceResponse
};

InjectiveAccountsRPC.SubaccountHistory = {
  methodName: "SubaccountHistory",
  service: InjectiveAccountsRPC,
  requestStream: false,
  responseStream: false,
  requestType: exchange_injective_accounts_rpc_pb.SubaccountHistoryRequest,
  responseType: exchange_injective_accounts_rpc_pb.SubaccountHistoryResponse
};

InjectiveAccountsRPC.SubaccountOrderSummary = {
  methodName: "SubaccountOrderSummary",
  service: InjectiveAccountsRPC,
  requestStream: false,
  responseStream: false,
  requestType: exchange_injective_accounts_rpc_pb.SubaccountOrderSummaryRequest,
  responseType: exchange_injective_accounts_rpc_pb.SubaccountOrderSummaryResponse
};

exports.InjectiveAccountsRPC = InjectiveAccountsRPC;

function InjectiveAccountsRPCClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

InjectiveAccountsRPCClient.prototype.subaccountsList = function subaccountsList(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(InjectiveAccountsRPC.SubaccountsList, {
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

InjectiveAccountsRPCClient.prototype.subaccountBalancesList = function subaccountBalancesList(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(InjectiveAccountsRPC.SubaccountBalancesList, {
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

InjectiveAccountsRPCClient.prototype.subaccountBalanceEndpoint = function subaccountBalanceEndpoint(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(InjectiveAccountsRPC.SubaccountBalanceEndpoint, {
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

InjectiveAccountsRPCClient.prototype.streamSubaccountBalance = function streamSubaccountBalance(requestMessage, metadata) {
  var listeners = {
    data: [],
    end: [],
    status: []
  };
  var client = grpc.invoke(InjectiveAccountsRPC.StreamSubaccountBalance, {
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

InjectiveAccountsRPCClient.prototype.subaccountHistory = function subaccountHistory(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(InjectiveAccountsRPC.SubaccountHistory, {
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

InjectiveAccountsRPCClient.prototype.subaccountOrderSummary = function subaccountOrderSummary(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(InjectiveAccountsRPC.SubaccountOrderSummary, {
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

exports.InjectiveAccountsRPCClient = InjectiveAccountsRPCClient;

