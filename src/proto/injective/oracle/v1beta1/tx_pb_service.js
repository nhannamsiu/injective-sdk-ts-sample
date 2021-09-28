// package: injective.oracle.v1beta1
// file: injective/oracle/v1beta1/tx.proto

var injective_oracle_v1beta1_tx_pb = require("../../../injective/oracle/v1beta1/tx_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var Msg = (function () {
  function Msg() {}
  Msg.serviceName = "injective.oracle.v1beta1.Msg";
  return Msg;
}());

Msg.RelayPriceFeedPrice = {
  methodName: "RelayPriceFeedPrice",
  service: Msg,
  requestStream: false,
  responseStream: false,
  requestType: injective_oracle_v1beta1_tx_pb.MsgRelayPriceFeedPrice,
  responseType: injective_oracle_v1beta1_tx_pb.MsgRelayPriceFeedPriceResponse
};

Msg.RelayBandRates = {
  methodName: "RelayBandRates",
  service: Msg,
  requestStream: false,
  responseStream: false,
  requestType: injective_oracle_v1beta1_tx_pb.MsgRelayBandRates,
  responseType: injective_oracle_v1beta1_tx_pb.MsgRelayBandRatesResponse
};

Msg.RequestBandIBCRates = {
  methodName: "RequestBandIBCRates",
  service: Msg,
  requestStream: false,
  responseStream: false,
  requestType: injective_oracle_v1beta1_tx_pb.MsgRequestBandIBCRates,
  responseType: injective_oracle_v1beta1_tx_pb.MsgRequestBandIBCRatesResponse
};

Msg.RelayCoinbaseMessages = {
  methodName: "RelayCoinbaseMessages",
  service: Msg,
  requestStream: false,
  responseStream: false,
  requestType: injective_oracle_v1beta1_tx_pb.MsgRelayCoinbaseMessages,
  responseType: injective_oracle_v1beta1_tx_pb.MsgRelayCoinbaseMessagesResponse
};

exports.Msg = Msg;

function MsgClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

MsgClient.prototype.relayPriceFeedPrice = function relayPriceFeedPrice(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Msg.RelayPriceFeedPrice, {
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

MsgClient.prototype.relayBandRates = function relayBandRates(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Msg.RelayBandRates, {
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

MsgClient.prototype.requestBandIBCRates = function requestBandIBCRates(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Msg.RequestBandIBCRates, {
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

MsgClient.prototype.relayCoinbaseMessages = function relayCoinbaseMessages(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Msg.RelayCoinbaseMessages, {
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

exports.MsgClient = MsgClient;

