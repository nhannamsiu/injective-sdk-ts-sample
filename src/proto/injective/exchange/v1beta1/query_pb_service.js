// package: injective.exchange.v1beta1
// file: injective/exchange/v1beta1/query.proto

var injective_exchange_v1beta1_query_pb = require("../../../injective/exchange/v1beta1/query_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var Query = (function () {
  function Query() {}
  Query.serviceName = "injective.exchange.v1beta1.Query";
  return Query;
}());

Query.QueryExchangeParams = {
  methodName: "QueryExchangeParams",
  service: Query,
  requestStream: false,
  responseStream: false,
  requestType: injective_exchange_v1beta1_query_pb.QueryExchangeParamsRequest,
  responseType: injective_exchange_v1beta1_query_pb.QueryExchangeParamsResponse
};

Query.SubaccountDeposits = {
  methodName: "SubaccountDeposits",
  service: Query,
  requestStream: false,
  responseStream: false,
  requestType: injective_exchange_v1beta1_query_pb.QuerySubaccountDepositsRequest,
  responseType: injective_exchange_v1beta1_query_pb.QuerySubaccountDepositsResponse
};

Query.SubaccountDeposit = {
  methodName: "SubaccountDeposit",
  service: Query,
  requestStream: false,
  responseStream: false,
  requestType: injective_exchange_v1beta1_query_pb.QuerySubaccountDepositRequest,
  responseType: injective_exchange_v1beta1_query_pb.QuerySubaccountDepositResponse
};

Query.ExchangeBalances = {
  methodName: "ExchangeBalances",
  service: Query,
  requestStream: false,
  responseStream: false,
  requestType: injective_exchange_v1beta1_query_pb.QueryExchangeBalancesRequest,
  responseType: injective_exchange_v1beta1_query_pb.QueryExchangeBalancesResponse
};

Query.SpotMarkets = {
  methodName: "SpotMarkets",
  service: Query,
  requestStream: false,
  responseStream: false,
  requestType: injective_exchange_v1beta1_query_pb.QuerySpotMarketsRequest,
  responseType: injective_exchange_v1beta1_query_pb.QuerySpotMarketsResponse
};

Query.SpotMarket = {
  methodName: "SpotMarket",
  service: Query,
  requestStream: false,
  responseStream: false,
  requestType: injective_exchange_v1beta1_query_pb.QuerySpotMarketRequest,
  responseType: injective_exchange_v1beta1_query_pb.QuerySpotMarketResponse
};

Query.SpotOrderbook = {
  methodName: "SpotOrderbook",
  service: Query,
  requestStream: false,
  responseStream: false,
  requestType: injective_exchange_v1beta1_query_pb.QuerySpotOrderbookRequest,
  responseType: injective_exchange_v1beta1_query_pb.QuerySpotOrderbookResponse
};

Query.TraderSpotOrders = {
  methodName: "TraderSpotOrders",
  service: Query,
  requestStream: false,
  responseStream: false,
  requestType: injective_exchange_v1beta1_query_pb.QueryTraderSpotOrdersRequest,
  responseType: injective_exchange_v1beta1_query_pb.QueryTraderSpotOrdersResponse
};

Query.DerivativeOrderbook = {
  methodName: "DerivativeOrderbook",
  service: Query,
  requestStream: false,
  responseStream: false,
  requestType: injective_exchange_v1beta1_query_pb.QueryDerivativeOrderbookRequest,
  responseType: injective_exchange_v1beta1_query_pb.QueryDerivativeOrderbookResponse
};

Query.TraderDerivativeOrders = {
  methodName: "TraderDerivativeOrders",
  service: Query,
  requestStream: false,
  responseStream: false,
  requestType: injective_exchange_v1beta1_query_pb.QueryTraderDerivativeOrdersRequest,
  responseType: injective_exchange_v1beta1_query_pb.QueryTraderDerivativeOrdersResponse
};

Query.DerivativeMarkets = {
  methodName: "DerivativeMarkets",
  service: Query,
  requestStream: false,
  responseStream: false,
  requestType: injective_exchange_v1beta1_query_pb.QueryDerivativeMarketsRequest,
  responseType: injective_exchange_v1beta1_query_pb.QueryDerivativeMarketsResponse
};

Query.DerivativeMarket = {
  methodName: "DerivativeMarket",
  service: Query,
  requestStream: false,
  responseStream: false,
  requestType: injective_exchange_v1beta1_query_pb.QueryDerivativeMarketRequest,
  responseType: injective_exchange_v1beta1_query_pb.QueryDerivativeMarketResponse
};

Query.SubaccountTradeNonce = {
  methodName: "SubaccountTradeNonce",
  service: Query,
  requestStream: false,
  responseStream: false,
  requestType: injective_exchange_v1beta1_query_pb.QuerySubaccountTradeNonceRequest,
  responseType: injective_exchange_v1beta1_query_pb.QuerySubaccountTradeNonceResponse
};

Query.ExchangeModuleState = {
  methodName: "ExchangeModuleState",
  service: Query,
  requestStream: false,
  responseStream: false,
  requestType: injective_exchange_v1beta1_query_pb.QueryModuleStateRequest,
  responseType: injective_exchange_v1beta1_query_pb.QueryModuleStateResponse
};

Query.Positions = {
  methodName: "Positions",
  service: Query,
  requestStream: false,
  responseStream: false,
  requestType: injective_exchange_v1beta1_query_pb.QueryPositionsRequest,
  responseType: injective_exchange_v1beta1_query_pb.QueryPositionsResponse
};

Query.LiquidityMiningPoints = {
  methodName: "LiquidityMiningPoints",
  service: Query,
  requestStream: false,
  responseStream: false,
  requestType: injective_exchange_v1beta1_query_pb.QueryLiquidityMiningPointsRequest,
  responseType: injective_exchange_v1beta1_query_pb.QueryLiquidityMiningPointsResponse
};

exports.Query = Query;

function QueryClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

QueryClient.prototype.queryExchangeParams = function queryExchangeParams(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Query.QueryExchangeParams, {
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

QueryClient.prototype.subaccountDeposits = function subaccountDeposits(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Query.SubaccountDeposits, {
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

QueryClient.prototype.subaccountDeposit = function subaccountDeposit(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Query.SubaccountDeposit, {
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

QueryClient.prototype.exchangeBalances = function exchangeBalances(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Query.ExchangeBalances, {
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

QueryClient.prototype.spotMarkets = function spotMarkets(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Query.SpotMarkets, {
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

QueryClient.prototype.spotMarket = function spotMarket(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Query.SpotMarket, {
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

QueryClient.prototype.spotOrderbook = function spotOrderbook(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Query.SpotOrderbook, {
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

QueryClient.prototype.traderSpotOrders = function traderSpotOrders(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Query.TraderSpotOrders, {
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

QueryClient.prototype.derivativeOrderbook = function derivativeOrderbook(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Query.DerivativeOrderbook, {
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

QueryClient.prototype.traderDerivativeOrders = function traderDerivativeOrders(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Query.TraderDerivativeOrders, {
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

QueryClient.prototype.derivativeMarkets = function derivativeMarkets(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Query.DerivativeMarkets, {
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

QueryClient.prototype.derivativeMarket = function derivativeMarket(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Query.DerivativeMarket, {
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

QueryClient.prototype.subaccountTradeNonce = function subaccountTradeNonce(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Query.SubaccountTradeNonce, {
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

QueryClient.prototype.exchangeModuleState = function exchangeModuleState(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Query.ExchangeModuleState, {
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

QueryClient.prototype.positions = function positions(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Query.Positions, {
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

QueryClient.prototype.liquidityMiningPoints = function liquidityMiningPoints(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Query.LiquidityMiningPoints, {
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

exports.QueryClient = QueryClient;

