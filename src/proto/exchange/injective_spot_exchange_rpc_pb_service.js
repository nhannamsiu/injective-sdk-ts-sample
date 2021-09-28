// package: injective_spot_exchange_rpc
// file: exchange/injective_spot_exchange_rpc.proto

var exchange_injective_spot_exchange_rpc_pb = require("../exchange/injective_spot_exchange_rpc_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var InjectiveSpotExchangeRPC = (function () {
  function InjectiveSpotExchangeRPC() {}
  InjectiveSpotExchangeRPC.serviceName = "injective_spot_exchange_rpc.InjectiveSpotExchangeRPC";
  return InjectiveSpotExchangeRPC;
}());

InjectiveSpotExchangeRPC.Markets = {
  methodName: "Markets",
  service: InjectiveSpotExchangeRPC,
  requestStream: false,
  responseStream: false,
  requestType: exchange_injective_spot_exchange_rpc_pb.MarketsRequest,
  responseType: exchange_injective_spot_exchange_rpc_pb.MarketsResponse
};

InjectiveSpotExchangeRPC.Market = {
  methodName: "Market",
  service: InjectiveSpotExchangeRPC,
  requestStream: false,
  responseStream: false,
  requestType: exchange_injective_spot_exchange_rpc_pb.MarketRequest,
  responseType: exchange_injective_spot_exchange_rpc_pb.MarketResponse
};

InjectiveSpotExchangeRPC.StreamMarkets = {
  methodName: "StreamMarkets",
  service: InjectiveSpotExchangeRPC,
  requestStream: false,
  responseStream: true,
  requestType: exchange_injective_spot_exchange_rpc_pb.StreamMarketsRequest,
  responseType: exchange_injective_spot_exchange_rpc_pb.StreamMarketsResponse
};

InjectiveSpotExchangeRPC.Orderbook = {
  methodName: "Orderbook",
  service: InjectiveSpotExchangeRPC,
  requestStream: false,
  responseStream: false,
  requestType: exchange_injective_spot_exchange_rpc_pb.OrderbookRequest,
  responseType: exchange_injective_spot_exchange_rpc_pb.OrderbookResponse
};

InjectiveSpotExchangeRPC.StreamOrderbook = {
  methodName: "StreamOrderbook",
  service: InjectiveSpotExchangeRPC,
  requestStream: false,
  responseStream: true,
  requestType: exchange_injective_spot_exchange_rpc_pb.StreamOrderbookRequest,
  responseType: exchange_injective_spot_exchange_rpc_pb.StreamOrderbookResponse
};

InjectiveSpotExchangeRPC.Orders = {
  methodName: "Orders",
  service: InjectiveSpotExchangeRPC,
  requestStream: false,
  responseStream: false,
  requestType: exchange_injective_spot_exchange_rpc_pb.OrdersRequest,
  responseType: exchange_injective_spot_exchange_rpc_pb.OrdersResponse
};

InjectiveSpotExchangeRPC.StreamOrders = {
  methodName: "StreamOrders",
  service: InjectiveSpotExchangeRPC,
  requestStream: false,
  responseStream: true,
  requestType: exchange_injective_spot_exchange_rpc_pb.StreamOrdersRequest,
  responseType: exchange_injective_spot_exchange_rpc_pb.StreamOrdersResponse
};

InjectiveSpotExchangeRPC.Trades = {
  methodName: "Trades",
  service: InjectiveSpotExchangeRPC,
  requestStream: false,
  responseStream: false,
  requestType: exchange_injective_spot_exchange_rpc_pb.TradesRequest,
  responseType: exchange_injective_spot_exchange_rpc_pb.TradesResponse
};

InjectiveSpotExchangeRPC.StreamTrades = {
  methodName: "StreamTrades",
  service: InjectiveSpotExchangeRPC,
  requestStream: false,
  responseStream: true,
  requestType: exchange_injective_spot_exchange_rpc_pb.StreamTradesRequest,
  responseType: exchange_injective_spot_exchange_rpc_pb.StreamTradesResponse
};

InjectiveSpotExchangeRPC.SubaccountOrdersList = {
  methodName: "SubaccountOrdersList",
  service: InjectiveSpotExchangeRPC,
  requestStream: false,
  responseStream: false,
  requestType: exchange_injective_spot_exchange_rpc_pb.SubaccountOrdersListRequest,
  responseType: exchange_injective_spot_exchange_rpc_pb.SubaccountOrdersListResponse
};

InjectiveSpotExchangeRPC.SubaccountTradesList = {
  methodName: "SubaccountTradesList",
  service: InjectiveSpotExchangeRPC,
  requestStream: false,
  responseStream: false,
  requestType: exchange_injective_spot_exchange_rpc_pb.SubaccountTradesListRequest,
  responseType: exchange_injective_spot_exchange_rpc_pb.SubaccountTradesListResponse
};

exports.InjectiveSpotExchangeRPC = InjectiveSpotExchangeRPC;

function InjectiveSpotExchangeRPCClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

InjectiveSpotExchangeRPCClient.prototype.markets = function markets(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(InjectiveSpotExchangeRPC.Markets, {
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

InjectiveSpotExchangeRPCClient.prototype.market = function market(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(InjectiveSpotExchangeRPC.Market, {
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

InjectiveSpotExchangeRPCClient.prototype.streamMarkets = function streamMarkets(requestMessage, metadata) {
  var listeners = {
    data: [],
    end: [],
    status: []
  };
  var client = grpc.invoke(InjectiveSpotExchangeRPC.StreamMarkets, {
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

InjectiveSpotExchangeRPCClient.prototype.orderbook = function orderbook(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(InjectiveSpotExchangeRPC.Orderbook, {
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

InjectiveSpotExchangeRPCClient.prototype.streamOrderbook = function streamOrderbook(requestMessage, metadata) {
  var listeners = {
    data: [],
    end: [],
    status: []
  };
  var client = grpc.invoke(InjectiveSpotExchangeRPC.StreamOrderbook, {
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

InjectiveSpotExchangeRPCClient.prototype.orders = function orders(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(InjectiveSpotExchangeRPC.Orders, {
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

InjectiveSpotExchangeRPCClient.prototype.streamOrders = function streamOrders(requestMessage, metadata) {
  var listeners = {
    data: [],
    end: [],
    status: []
  };
  var client = grpc.invoke(InjectiveSpotExchangeRPC.StreamOrders, {
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

InjectiveSpotExchangeRPCClient.prototype.trades = function trades(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(InjectiveSpotExchangeRPC.Trades, {
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

InjectiveSpotExchangeRPCClient.prototype.streamTrades = function streamTrades(requestMessage, metadata) {
  var listeners = {
    data: [],
    end: [],
    status: []
  };
  var client = grpc.invoke(InjectiveSpotExchangeRPC.StreamTrades, {
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

InjectiveSpotExchangeRPCClient.prototype.subaccountOrdersList = function subaccountOrdersList(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(InjectiveSpotExchangeRPC.SubaccountOrdersList, {
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

InjectiveSpotExchangeRPCClient.prototype.subaccountTradesList = function subaccountTradesList(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(InjectiveSpotExchangeRPC.SubaccountTradesList, {
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

exports.InjectiveSpotExchangeRPCClient = InjectiveSpotExchangeRPCClient;

