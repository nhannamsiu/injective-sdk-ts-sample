// package: injective_derivative_exchange_rpc
// file: exchange/injective_derivative_exchange_rpc.proto

var exchange_injective_derivative_exchange_rpc_pb = require("../exchange/injective_derivative_exchange_rpc_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var InjectiveDerivativeExchangeRPC = (function () {
  function InjectiveDerivativeExchangeRPC() {}
  InjectiveDerivativeExchangeRPC.serviceName = "injective_derivative_exchange_rpc.InjectiveDerivativeExchangeRPC";
  return InjectiveDerivativeExchangeRPC;
}());

InjectiveDerivativeExchangeRPC.Markets = {
  methodName: "Markets",
  service: InjectiveDerivativeExchangeRPC,
  requestStream: false,
  responseStream: false,
  requestType: exchange_injective_derivative_exchange_rpc_pb.MarketsRequest,
  responseType: exchange_injective_derivative_exchange_rpc_pb.MarketsResponse
};

InjectiveDerivativeExchangeRPC.Market = {
  methodName: "Market",
  service: InjectiveDerivativeExchangeRPC,
  requestStream: false,
  responseStream: false,
  requestType: exchange_injective_derivative_exchange_rpc_pb.MarketRequest,
  responseType: exchange_injective_derivative_exchange_rpc_pb.MarketResponse
};

InjectiveDerivativeExchangeRPC.StreamMarket = {
  methodName: "StreamMarket",
  service: InjectiveDerivativeExchangeRPC,
  requestStream: false,
  responseStream: true,
  requestType: exchange_injective_derivative_exchange_rpc_pb.StreamMarketRequest,
  responseType: exchange_injective_derivative_exchange_rpc_pb.StreamMarketResponse
};

InjectiveDerivativeExchangeRPC.Orderbook = {
  methodName: "Orderbook",
  service: InjectiveDerivativeExchangeRPC,
  requestStream: false,
  responseStream: false,
  requestType: exchange_injective_derivative_exchange_rpc_pb.OrderbookRequest,
  responseType: exchange_injective_derivative_exchange_rpc_pb.OrderbookResponse
};

InjectiveDerivativeExchangeRPC.StreamOrderbook = {
  methodName: "StreamOrderbook",
  service: InjectiveDerivativeExchangeRPC,
  requestStream: false,
  responseStream: true,
  requestType: exchange_injective_derivative_exchange_rpc_pb.StreamOrderbookRequest,
  responseType: exchange_injective_derivative_exchange_rpc_pb.StreamOrderbookResponse
};

InjectiveDerivativeExchangeRPC.Orders = {
  methodName: "Orders",
  service: InjectiveDerivativeExchangeRPC,
  requestStream: false,
  responseStream: false,
  requestType: exchange_injective_derivative_exchange_rpc_pb.OrdersRequest,
  responseType: exchange_injective_derivative_exchange_rpc_pb.OrdersResponse
};

InjectiveDerivativeExchangeRPC.Positions = {
  methodName: "Positions",
  service: InjectiveDerivativeExchangeRPC,
  requestStream: false,
  responseStream: false,
  requestType: exchange_injective_derivative_exchange_rpc_pb.PositionsRequest,
  responseType: exchange_injective_derivative_exchange_rpc_pb.PositionsResponse
};

InjectiveDerivativeExchangeRPC.LiquidablePositions = {
  methodName: "LiquidablePositions",
  service: InjectiveDerivativeExchangeRPC,
  requestStream: false,
  responseStream: false,
  requestType: exchange_injective_derivative_exchange_rpc_pb.LiquidablePositionsRequest,
  responseType: exchange_injective_derivative_exchange_rpc_pb.LiquidablePositionsResponse
};

InjectiveDerivativeExchangeRPC.FundingPayments = {
  methodName: "FundingPayments",
  service: InjectiveDerivativeExchangeRPC,
  requestStream: false,
  responseStream: false,
  requestType: exchange_injective_derivative_exchange_rpc_pb.FundingPaymentsRequest,
  responseType: exchange_injective_derivative_exchange_rpc_pb.FundingPaymentsResponse
};

InjectiveDerivativeExchangeRPC.StreamPositions = {
  methodName: "StreamPositions",
  service: InjectiveDerivativeExchangeRPC,
  requestStream: false,
  responseStream: true,
  requestType: exchange_injective_derivative_exchange_rpc_pb.StreamPositionsRequest,
  responseType: exchange_injective_derivative_exchange_rpc_pb.StreamPositionsResponse
};

InjectiveDerivativeExchangeRPC.StreamOrders = {
  methodName: "StreamOrders",
  service: InjectiveDerivativeExchangeRPC,
  requestStream: false,
  responseStream: true,
  requestType: exchange_injective_derivative_exchange_rpc_pb.StreamOrdersRequest,
  responseType: exchange_injective_derivative_exchange_rpc_pb.StreamOrdersResponse
};

InjectiveDerivativeExchangeRPC.Trades = {
  methodName: "Trades",
  service: InjectiveDerivativeExchangeRPC,
  requestStream: false,
  responseStream: false,
  requestType: exchange_injective_derivative_exchange_rpc_pb.TradesRequest,
  responseType: exchange_injective_derivative_exchange_rpc_pb.TradesResponse
};

InjectiveDerivativeExchangeRPC.StreamTrades = {
  methodName: "StreamTrades",
  service: InjectiveDerivativeExchangeRPC,
  requestStream: false,
  responseStream: true,
  requestType: exchange_injective_derivative_exchange_rpc_pb.StreamTradesRequest,
  responseType: exchange_injective_derivative_exchange_rpc_pb.StreamTradesResponse
};

InjectiveDerivativeExchangeRPC.SubaccountOrdersList = {
  methodName: "SubaccountOrdersList",
  service: InjectiveDerivativeExchangeRPC,
  requestStream: false,
  responseStream: false,
  requestType: exchange_injective_derivative_exchange_rpc_pb.SubaccountOrdersListRequest,
  responseType: exchange_injective_derivative_exchange_rpc_pb.SubaccountOrdersListResponse
};

InjectiveDerivativeExchangeRPC.SubaccountTradesList = {
  methodName: "SubaccountTradesList",
  service: InjectiveDerivativeExchangeRPC,
  requestStream: false,
  responseStream: false,
  requestType: exchange_injective_derivative_exchange_rpc_pb.SubaccountTradesListRequest,
  responseType: exchange_injective_derivative_exchange_rpc_pb.SubaccountTradesListResponse
};

exports.InjectiveDerivativeExchangeRPC = InjectiveDerivativeExchangeRPC;

function InjectiveDerivativeExchangeRPCClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

InjectiveDerivativeExchangeRPCClient.prototype.markets = function markets(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(InjectiveDerivativeExchangeRPC.Markets, {
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

InjectiveDerivativeExchangeRPCClient.prototype.market = function market(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(InjectiveDerivativeExchangeRPC.Market, {
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

InjectiveDerivativeExchangeRPCClient.prototype.streamMarket = function streamMarket(requestMessage, metadata) {
  var listeners = {
    data: [],
    end: [],
    status: []
  };
  var client = grpc.invoke(InjectiveDerivativeExchangeRPC.StreamMarket, {
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

InjectiveDerivativeExchangeRPCClient.prototype.orderbook = function orderbook(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(InjectiveDerivativeExchangeRPC.Orderbook, {
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

InjectiveDerivativeExchangeRPCClient.prototype.streamOrderbook = function streamOrderbook(requestMessage, metadata) {
  var listeners = {
    data: [],
    end: [],
    status: []
  };
  var client = grpc.invoke(InjectiveDerivativeExchangeRPC.StreamOrderbook, {
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

InjectiveDerivativeExchangeRPCClient.prototype.orders = function orders(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(InjectiveDerivativeExchangeRPC.Orders, {
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

InjectiveDerivativeExchangeRPCClient.prototype.positions = function positions(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(InjectiveDerivativeExchangeRPC.Positions, {
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

InjectiveDerivativeExchangeRPCClient.prototype.liquidablePositions = function liquidablePositions(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(InjectiveDerivativeExchangeRPC.LiquidablePositions, {
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

InjectiveDerivativeExchangeRPCClient.prototype.fundingPayments = function fundingPayments(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(InjectiveDerivativeExchangeRPC.FundingPayments, {
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

InjectiveDerivativeExchangeRPCClient.prototype.streamPositions = function streamPositions(requestMessage, metadata) {
  var listeners = {
    data: [],
    end: [],
    status: []
  };
  var client = grpc.invoke(InjectiveDerivativeExchangeRPC.StreamPositions, {
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

InjectiveDerivativeExchangeRPCClient.prototype.streamOrders = function streamOrders(requestMessage, metadata) {
  var listeners = {
    data: [],
    end: [],
    status: []
  };
  var client = grpc.invoke(InjectiveDerivativeExchangeRPC.StreamOrders, {
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

InjectiveDerivativeExchangeRPCClient.prototype.trades = function trades(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(InjectiveDerivativeExchangeRPC.Trades, {
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

InjectiveDerivativeExchangeRPCClient.prototype.streamTrades = function streamTrades(requestMessage, metadata) {
  var listeners = {
    data: [],
    end: [],
    status: []
  };
  var client = grpc.invoke(InjectiveDerivativeExchangeRPC.StreamTrades, {
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

InjectiveDerivativeExchangeRPCClient.prototype.subaccountOrdersList = function subaccountOrdersList(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(InjectiveDerivativeExchangeRPC.SubaccountOrdersList, {
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

InjectiveDerivativeExchangeRPCClient.prototype.subaccountTradesList = function subaccountTradesList(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(InjectiveDerivativeExchangeRPC.SubaccountTradesList, {
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

exports.InjectiveDerivativeExchangeRPCClient = InjectiveDerivativeExchangeRPCClient;

