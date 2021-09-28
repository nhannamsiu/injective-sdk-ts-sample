// package: ibc.core.client.v1
// file: ibc/core/client/v1/query.proto

var ibc_core_client_v1_query_pb = require("../../../../ibc/core/client/v1/query_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var Query = (function () {
  function Query() {}
  Query.serviceName = "ibc.core.client.v1.Query";
  return Query;
}());

Query.ClientState = {
  methodName: "ClientState",
  service: Query,
  requestStream: false,
  responseStream: false,
  requestType: ibc_core_client_v1_query_pb.QueryClientStateRequest,
  responseType: ibc_core_client_v1_query_pb.QueryClientStateResponse
};

Query.ClientStates = {
  methodName: "ClientStates",
  service: Query,
  requestStream: false,
  responseStream: false,
  requestType: ibc_core_client_v1_query_pb.QueryClientStatesRequest,
  responseType: ibc_core_client_v1_query_pb.QueryClientStatesResponse
};

Query.ConsensusState = {
  methodName: "ConsensusState",
  service: Query,
  requestStream: false,
  responseStream: false,
  requestType: ibc_core_client_v1_query_pb.QueryConsensusStateRequest,
  responseType: ibc_core_client_v1_query_pb.QueryConsensusStateResponse
};

Query.ConsensusStates = {
  methodName: "ConsensusStates",
  service: Query,
  requestStream: false,
  responseStream: false,
  requestType: ibc_core_client_v1_query_pb.QueryConsensusStatesRequest,
  responseType: ibc_core_client_v1_query_pb.QueryConsensusStatesResponse
};

exports.Query = Query;

function QueryClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

QueryClient.prototype.clientState = function clientState(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Query.ClientState, {
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

QueryClient.prototype.clientStates = function clientStates(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Query.ClientStates, {
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

QueryClient.prototype.consensusState = function consensusState(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Query.ConsensusState, {
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

QueryClient.prototype.consensusStates = function consensusStates(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Query.ConsensusStates, {
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

