// package: injective.exchange.v1beta1
// file: injective/exchange/v1beta1/tx.proto

var injective_exchange_v1beta1_tx_pb = require("../../../injective/exchange/v1beta1/tx_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var Msg = (function () {
  function Msg() {}
  Msg.serviceName = "injective.exchange.v1beta1.Msg";
  return Msg;
}());

Msg.Deposit = {
  methodName: "Deposit",
  service: Msg,
  requestStream: false,
  responseStream: false,
  requestType: injective_exchange_v1beta1_tx_pb.MsgDeposit,
  responseType: injective_exchange_v1beta1_tx_pb.MsgDepositResponse
};

Msg.Withdraw = {
  methodName: "Withdraw",
  service: Msg,
  requestStream: false,
  responseStream: false,
  requestType: injective_exchange_v1beta1_tx_pb.MsgWithdraw,
  responseType: injective_exchange_v1beta1_tx_pb.MsgWithdrawResponse
};

Msg.InstantSpotMarketLaunch = {
  methodName: "InstantSpotMarketLaunch",
  service: Msg,
  requestStream: false,
  responseStream: false,
  requestType: injective_exchange_v1beta1_tx_pb.MsgInstantSpotMarketLaunch,
  responseType: injective_exchange_v1beta1_tx_pb.MsgInstantSpotMarketLaunchResponse
};

Msg.InstantPerpetualMarketLaunch = {
  methodName: "InstantPerpetualMarketLaunch",
  service: Msg,
  requestStream: false,
  responseStream: false,
  requestType: injective_exchange_v1beta1_tx_pb.MsgInstantPerpetualMarketLaunch,
  responseType: injective_exchange_v1beta1_tx_pb.MsgInstantPerpetualMarketLaunchResponse
};

Msg.InstantExpiryFuturesMarketLaunch = {
  methodName: "InstantExpiryFuturesMarketLaunch",
  service: Msg,
  requestStream: false,
  responseStream: false,
  requestType: injective_exchange_v1beta1_tx_pb.MsgInstantExpiryFuturesMarketLaunch,
  responseType: injective_exchange_v1beta1_tx_pb.MsgInstantExpiryFuturesMarketLaunchResponse
};

Msg.CreateSpotLimitOrder = {
  methodName: "CreateSpotLimitOrder",
  service: Msg,
  requestStream: false,
  responseStream: false,
  requestType: injective_exchange_v1beta1_tx_pb.MsgCreateSpotLimitOrder,
  responseType: injective_exchange_v1beta1_tx_pb.MsgCreateSpotLimitOrderResponse
};

Msg.BatchCreateSpotLimitOrders = {
  methodName: "BatchCreateSpotLimitOrders",
  service: Msg,
  requestStream: false,
  responseStream: false,
  requestType: injective_exchange_v1beta1_tx_pb.MsgBatchCreateSpotLimitOrders,
  responseType: injective_exchange_v1beta1_tx_pb.MsgBatchCreateSpotLimitOrdersResponse
};

Msg.CreateSpotMarketOrder = {
  methodName: "CreateSpotMarketOrder",
  service: Msg,
  requestStream: false,
  responseStream: false,
  requestType: injective_exchange_v1beta1_tx_pb.MsgCreateSpotMarketOrder,
  responseType: injective_exchange_v1beta1_tx_pb.MsgCreateSpotMarketOrderResponse
};

Msg.CancelSpotOrder = {
  methodName: "CancelSpotOrder",
  service: Msg,
  requestStream: false,
  responseStream: false,
  requestType: injective_exchange_v1beta1_tx_pb.MsgCancelSpotOrder,
  responseType: injective_exchange_v1beta1_tx_pb.MsgCancelSpotOrderResponse
};

Msg.BatchCancelSpotOrders = {
  methodName: "BatchCancelSpotOrders",
  service: Msg,
  requestStream: false,
  responseStream: false,
  requestType: injective_exchange_v1beta1_tx_pb.MsgBatchCancelSpotOrders,
  responseType: injective_exchange_v1beta1_tx_pb.MsgBatchCancelSpotOrdersResponse
};

Msg.CreateDerivativeLimitOrder = {
  methodName: "CreateDerivativeLimitOrder",
  service: Msg,
  requestStream: false,
  responseStream: false,
  requestType: injective_exchange_v1beta1_tx_pb.MsgCreateDerivativeLimitOrder,
  responseType: injective_exchange_v1beta1_tx_pb.MsgCreateDerivativeLimitOrderResponse
};

Msg.BatchCreateDerivativeLimitOrders = {
  methodName: "BatchCreateDerivativeLimitOrders",
  service: Msg,
  requestStream: false,
  responseStream: false,
  requestType: injective_exchange_v1beta1_tx_pb.MsgBatchCreateDerivativeLimitOrders,
  responseType: injective_exchange_v1beta1_tx_pb.MsgBatchCreateDerivativeLimitOrdersResponse
};

Msg.CreateDerivativeMarketOrder = {
  methodName: "CreateDerivativeMarketOrder",
  service: Msg,
  requestStream: false,
  responseStream: false,
  requestType: injective_exchange_v1beta1_tx_pb.MsgCreateDerivativeMarketOrder,
  responseType: injective_exchange_v1beta1_tx_pb.MsgCreateDerivativeMarketOrderResponse
};

Msg.CancelDerivativeOrder = {
  methodName: "CancelDerivativeOrder",
  service: Msg,
  requestStream: false,
  responseStream: false,
  requestType: injective_exchange_v1beta1_tx_pb.MsgCancelDerivativeOrder,
  responseType: injective_exchange_v1beta1_tx_pb.MsgCancelDerivativeOrderResponse
};

Msg.BatchCancelDerivativeOrders = {
  methodName: "BatchCancelDerivativeOrders",
  service: Msg,
  requestStream: false,
  responseStream: false,
  requestType: injective_exchange_v1beta1_tx_pb.MsgBatchCancelDerivativeOrders,
  responseType: injective_exchange_v1beta1_tx_pb.MsgBatchCancelDerivativeOrdersResponse
};

Msg.SubaccountTransfer = {
  methodName: "SubaccountTransfer",
  service: Msg,
  requestStream: false,
  responseStream: false,
  requestType: injective_exchange_v1beta1_tx_pb.MsgSubaccountTransfer,
  responseType: injective_exchange_v1beta1_tx_pb.MsgSubaccountTransferResponse
};

Msg.ExternalTransfer = {
  methodName: "ExternalTransfer",
  service: Msg,
  requestStream: false,
  responseStream: false,
  requestType: injective_exchange_v1beta1_tx_pb.MsgExternalTransfer,
  responseType: injective_exchange_v1beta1_tx_pb.MsgExternalTransferResponse
};

Msg.LiquidatePosition = {
  methodName: "LiquidatePosition",
  service: Msg,
  requestStream: false,
  responseStream: false,
  requestType: injective_exchange_v1beta1_tx_pb.MsgLiquidatePosition,
  responseType: injective_exchange_v1beta1_tx_pb.MsgLiquidatePositionResponse
};

Msg.IncreasePositionMargin = {
  methodName: "IncreasePositionMargin",
  service: Msg,
  requestStream: false,
  responseStream: false,
  requestType: injective_exchange_v1beta1_tx_pb.MsgIncreasePositionMargin,
  responseType: injective_exchange_v1beta1_tx_pb.MsgIncreasePositionMarginResponse
};

exports.Msg = Msg;

function MsgClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

MsgClient.prototype.deposit = function deposit(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Msg.Deposit, {
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

MsgClient.prototype.withdraw = function withdraw(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Msg.Withdraw, {
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

MsgClient.prototype.instantSpotMarketLaunch = function instantSpotMarketLaunch(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Msg.InstantSpotMarketLaunch, {
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

MsgClient.prototype.instantPerpetualMarketLaunch = function instantPerpetualMarketLaunch(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Msg.InstantPerpetualMarketLaunch, {
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

MsgClient.prototype.instantExpiryFuturesMarketLaunch = function instantExpiryFuturesMarketLaunch(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Msg.InstantExpiryFuturesMarketLaunch, {
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

MsgClient.prototype.createSpotLimitOrder = function createSpotLimitOrder(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Msg.CreateSpotLimitOrder, {
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

MsgClient.prototype.batchCreateSpotLimitOrders = function batchCreateSpotLimitOrders(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Msg.BatchCreateSpotLimitOrders, {
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

MsgClient.prototype.createSpotMarketOrder = function createSpotMarketOrder(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Msg.CreateSpotMarketOrder, {
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

MsgClient.prototype.cancelSpotOrder = function cancelSpotOrder(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Msg.CancelSpotOrder, {
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

MsgClient.prototype.batchCancelSpotOrders = function batchCancelSpotOrders(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Msg.BatchCancelSpotOrders, {
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

MsgClient.prototype.createDerivativeLimitOrder = function createDerivativeLimitOrder(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Msg.CreateDerivativeLimitOrder, {
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

MsgClient.prototype.batchCreateDerivativeLimitOrders = function batchCreateDerivativeLimitOrders(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Msg.BatchCreateDerivativeLimitOrders, {
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

MsgClient.prototype.createDerivativeMarketOrder = function createDerivativeMarketOrder(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Msg.CreateDerivativeMarketOrder, {
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

MsgClient.prototype.cancelDerivativeOrder = function cancelDerivativeOrder(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Msg.CancelDerivativeOrder, {
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

MsgClient.prototype.batchCancelDerivativeOrders = function batchCancelDerivativeOrders(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Msg.BatchCancelDerivativeOrders, {
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

MsgClient.prototype.subaccountTransfer = function subaccountTransfer(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Msg.SubaccountTransfer, {
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

MsgClient.prototype.externalTransfer = function externalTransfer(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Msg.ExternalTransfer, {
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

MsgClient.prototype.liquidatePosition = function liquidatePosition(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Msg.LiquidatePosition, {
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

MsgClient.prototype.increasePositionMargin = function increasePositionMargin(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Msg.IncreasePositionMargin, {
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

