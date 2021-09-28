// package: injective.oracle.v1beta1
// file: injective/oracle/v1beta1/query.proto

var injective_oracle_v1beta1_query_pb = require("../../../injective/oracle/v1beta1/query_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var Query = (function () {
  function Query() {}
  Query.serviceName = "injective.oracle.v1beta1.Query";
  return Query;
}());

Query.Params = {
  methodName: "Params",
  service: Query,
  requestStream: false,
  responseStream: false,
  requestType: injective_oracle_v1beta1_query_pb.QueryParamsRequest,
  responseType: injective_oracle_v1beta1_query_pb.QueryParamsResponse
};

Query.BandRelayers = {
  methodName: "BandRelayers",
  service: Query,
  requestStream: false,
  responseStream: false,
  requestType: injective_oracle_v1beta1_query_pb.QueryBandRelayersRequest,
  responseType: injective_oracle_v1beta1_query_pb.QueryBandRelayersResponse
};

Query.BandPriceStates = {
  methodName: "BandPriceStates",
  service: Query,
  requestStream: false,
  responseStream: false,
  requestType: injective_oracle_v1beta1_query_pb.QueryBandPriceStatesRequest,
  responseType: injective_oracle_v1beta1_query_pb.QueryBandPriceStatesResponse
};

Query.BandIBCPriceStates = {
  methodName: "BandIBCPriceStates",
  service: Query,
  requestStream: false,
  responseStream: false,
  requestType: injective_oracle_v1beta1_query_pb.QueryBandIBCPriceStatesRequest,
  responseType: injective_oracle_v1beta1_query_pb.QueryBandIBCPriceStatesResponse
};

Query.PriceFeedPriceStates = {
  methodName: "PriceFeedPriceStates",
  service: Query,
  requestStream: false,
  responseStream: false,
  requestType: injective_oracle_v1beta1_query_pb.QueryPriceFeedPriceStatesRequest,
  responseType: injective_oracle_v1beta1_query_pb.QueryPriceFeedPriceStatesResponse
};

Query.CoinbasePriceStates = {
  methodName: "CoinbasePriceStates",
  service: Query,
  requestStream: false,
  responseStream: false,
  requestType: injective_oracle_v1beta1_query_pb.QueryCoinbasePriceStatesRequest,
  responseType: injective_oracle_v1beta1_query_pb.QueryCoinbasePriceStatesResponse
};

Query.OracleModuleState = {
  methodName: "OracleModuleState",
  service: Query,
  requestStream: false,
  responseStream: false,
  requestType: injective_oracle_v1beta1_query_pb.QueryModuleStateRequest,
  responseType: injective_oracle_v1beta1_query_pb.QueryModuleStateResponse
};

exports.Query = Query;

function QueryClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

QueryClient.prototype.params = function params(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Query.Params, {
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

QueryClient.prototype.bandRelayers = function bandRelayers(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Query.BandRelayers, {
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

QueryClient.prototype.bandPriceStates = function bandPriceStates(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Query.BandPriceStates, {
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

QueryClient.prototype.bandIBCPriceStates = function bandIBCPriceStates(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Query.BandIBCPriceStates, {
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

QueryClient.prototype.priceFeedPriceStates = function priceFeedPriceStates(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Query.PriceFeedPriceStates, {
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

QueryClient.prototype.coinbasePriceStates = function coinbasePriceStates(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Query.CoinbasePriceStates, {
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

QueryClient.prototype.oracleModuleState = function oracleModuleState(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Query.OracleModuleState, {
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

