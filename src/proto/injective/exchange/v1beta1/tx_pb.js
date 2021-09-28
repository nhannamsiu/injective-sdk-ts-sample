// source: injective/exchange/v1beta1/tx.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

var gogoproto_gogo_pb = require('../../../gogoproto/gogo_pb.js');
goog.object.extend(proto, gogoproto_gogo_pb);
var injective_oracle_v1beta1_oracle_pb = require('../../../injective/oracle/v1beta1/oracle_pb.js');
goog.object.extend(proto, injective_oracle_v1beta1_oracle_pb);
var injective_exchange_v1beta1_exchange_pb = require('../../../injective/exchange/v1beta1/exchange_pb.js');
goog.object.extend(proto, injective_exchange_v1beta1_exchange_pb);
var cosmos_base_v1beta1_coin_pb = require('../../../cosmos/base/v1beta1/coin_pb.js');
goog.object.extend(proto, cosmos_base_v1beta1_coin_pb);
goog.exportSymbol('proto.injective.exchange.v1beta1.DerivativeMarketBandOraclePromotionProposal', null, global);
goog.exportSymbol('proto.injective.exchange.v1beta1.DerivativeMarketParamUpdateProposal', null, global);
goog.exportSymbol('proto.injective.exchange.v1beta1.ExchangeEnableProposal', null, global);
goog.exportSymbol('proto.injective.exchange.v1beta1.ExchangeType', null, global);
goog.exportSymbol('proto.injective.exchange.v1beta1.ExpiryFuturesMarketLaunchProposal', null, global);
goog.exportSymbol('proto.injective.exchange.v1beta1.LiquidityMiningCampaignProposal', null, global);
goog.exportSymbol('proto.injective.exchange.v1beta1.MsgBatchCancelDerivativeOrders', null, global);
goog.exportSymbol('proto.injective.exchange.v1beta1.MsgBatchCancelDerivativeOrdersResponse', null, global);
goog.exportSymbol('proto.injective.exchange.v1beta1.MsgBatchCancelSpotOrders', null, global);
goog.exportSymbol('proto.injective.exchange.v1beta1.MsgBatchCancelSpotOrdersResponse', null, global);
goog.exportSymbol('proto.injective.exchange.v1beta1.MsgBatchCreateDerivativeLimitOrders', null, global);
goog.exportSymbol('proto.injective.exchange.v1beta1.MsgBatchCreateDerivativeLimitOrdersResponse', null, global);
goog.exportSymbol('proto.injective.exchange.v1beta1.MsgBatchCreateSpotLimitOrders', null, global);
goog.exportSymbol('proto.injective.exchange.v1beta1.MsgBatchCreateSpotLimitOrdersResponse', null, global);
goog.exportSymbol('proto.injective.exchange.v1beta1.MsgCancelDerivativeOrder', null, global);
goog.exportSymbol('proto.injective.exchange.v1beta1.MsgCancelDerivativeOrderResponse', null, global);
goog.exportSymbol('proto.injective.exchange.v1beta1.MsgCancelSpotOrder', null, global);
goog.exportSymbol('proto.injective.exchange.v1beta1.MsgCancelSpotOrderResponse', null, global);
goog.exportSymbol('proto.injective.exchange.v1beta1.MsgCreateDerivativeLimitOrder', null, global);
goog.exportSymbol('proto.injective.exchange.v1beta1.MsgCreateDerivativeLimitOrderResponse', null, global);
goog.exportSymbol('proto.injective.exchange.v1beta1.MsgCreateDerivativeMarketOrder', null, global);
goog.exportSymbol('proto.injective.exchange.v1beta1.MsgCreateDerivativeMarketOrderResponse', null, global);
goog.exportSymbol('proto.injective.exchange.v1beta1.MsgCreateSpotLimitOrder', null, global);
goog.exportSymbol('proto.injective.exchange.v1beta1.MsgCreateSpotLimitOrderResponse', null, global);
goog.exportSymbol('proto.injective.exchange.v1beta1.MsgCreateSpotMarketOrder', null, global);
goog.exportSymbol('proto.injective.exchange.v1beta1.MsgCreateSpotMarketOrderResponse', null, global);
goog.exportSymbol('proto.injective.exchange.v1beta1.MsgDeposit', null, global);
goog.exportSymbol('proto.injective.exchange.v1beta1.MsgDepositResponse', null, global);
goog.exportSymbol('proto.injective.exchange.v1beta1.MsgExternalTransfer', null, global);
goog.exportSymbol('proto.injective.exchange.v1beta1.MsgExternalTransferResponse', null, global);
goog.exportSymbol('proto.injective.exchange.v1beta1.MsgIncreasePositionMargin', null, global);
goog.exportSymbol('proto.injective.exchange.v1beta1.MsgIncreasePositionMarginResponse', null, global);
goog.exportSymbol('proto.injective.exchange.v1beta1.MsgInstantExpiryFuturesMarketLaunch', null, global);
goog.exportSymbol('proto.injective.exchange.v1beta1.MsgInstantExpiryFuturesMarketLaunchResponse', null, global);
goog.exportSymbol('proto.injective.exchange.v1beta1.MsgInstantPerpetualMarketLaunch', null, global);
goog.exportSymbol('proto.injective.exchange.v1beta1.MsgInstantPerpetualMarketLaunchResponse', null, global);
goog.exportSymbol('proto.injective.exchange.v1beta1.MsgInstantSpotMarketLaunch', null, global);
goog.exportSymbol('proto.injective.exchange.v1beta1.MsgInstantSpotMarketLaunchResponse', null, global);
goog.exportSymbol('proto.injective.exchange.v1beta1.MsgLiquidatePosition', null, global);
goog.exportSymbol('proto.injective.exchange.v1beta1.MsgLiquidatePositionResponse', null, global);
goog.exportSymbol('proto.injective.exchange.v1beta1.MsgSubaccountTransfer', null, global);
goog.exportSymbol('proto.injective.exchange.v1beta1.MsgSubaccountTransferResponse', null, global);
goog.exportSymbol('proto.injective.exchange.v1beta1.MsgWithdraw', null, global);
goog.exportSymbol('proto.injective.exchange.v1beta1.MsgWithdrawResponse', null, global);
goog.exportSymbol('proto.injective.exchange.v1beta1.OrderData', null, global);
goog.exportSymbol('proto.injective.exchange.v1beta1.PerpetualMarketLaunchProposal', null, global);
goog.exportSymbol('proto.injective.exchange.v1beta1.SpotMarketLaunchProposal', null, global);
goog.exportSymbol('proto.injective.exchange.v1beta1.SpotMarketParamUpdateProposal', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.injective.exchange.v1beta1.MsgDeposit = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.injective.exchange.v1beta1.MsgDeposit, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.injective.exchange.v1beta1.MsgDeposit.displayName = 'proto.injective.exchange.v1beta1.MsgDeposit';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.injective.exchange.v1beta1.MsgDepositResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.injective.exchange.v1beta1.MsgDepositResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.injective.exchange.v1beta1.MsgDepositResponse.displayName = 'proto.injective.exchange.v1beta1.MsgDepositResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.injective.exchange.v1beta1.MsgWithdraw = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.injective.exchange.v1beta1.MsgWithdraw, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.injective.exchange.v1beta1.MsgWithdraw.displayName = 'proto.injective.exchange.v1beta1.MsgWithdraw';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.injective.exchange.v1beta1.MsgWithdrawResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.injective.exchange.v1beta1.MsgWithdrawResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.injective.exchange.v1beta1.MsgWithdrawResponse.displayName = 'proto.injective.exchange.v1beta1.MsgWithdrawResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.injective.exchange.v1beta1.MsgCreateSpotLimitOrder = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.injective.exchange.v1beta1.MsgCreateSpotLimitOrder, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.injective.exchange.v1beta1.MsgCreateSpotLimitOrder.displayName = 'proto.injective.exchange.v1beta1.MsgCreateSpotLimitOrder';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.injective.exchange.v1beta1.MsgCreateSpotLimitOrderResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.injective.exchange.v1beta1.MsgCreateSpotLimitOrderResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.injective.exchange.v1beta1.MsgCreateSpotLimitOrderResponse.displayName = 'proto.injective.exchange.v1beta1.MsgCreateSpotLimitOrderResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.injective.exchange.v1beta1.MsgBatchCreateSpotLimitOrders = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.injective.exchange.v1beta1.MsgBatchCreateSpotLimitOrders.repeatedFields_, null);
};
goog.inherits(proto.injective.exchange.v1beta1.MsgBatchCreateSpotLimitOrders, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.injective.exchange.v1beta1.MsgBatchCreateSpotLimitOrders.displayName = 'proto.injective.exchange.v1beta1.MsgBatchCreateSpotLimitOrders';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.injective.exchange.v1beta1.MsgBatchCreateSpotLimitOrdersResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.injective.exchange.v1beta1.MsgBatchCreateSpotLimitOrdersResponse.repeatedFields_, null);
};
goog.inherits(proto.injective.exchange.v1beta1.MsgBatchCreateSpotLimitOrdersResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.injective.exchange.v1beta1.MsgBatchCreateSpotLimitOrdersResponse.displayName = 'proto.injective.exchange.v1beta1.MsgBatchCreateSpotLimitOrdersResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.injective.exchange.v1beta1.MsgInstantSpotMarketLaunch = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.injective.exchange.v1beta1.MsgInstantSpotMarketLaunch, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.injective.exchange.v1beta1.MsgInstantSpotMarketLaunch.displayName = 'proto.injective.exchange.v1beta1.MsgInstantSpotMarketLaunch';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.injective.exchange.v1beta1.MsgInstantSpotMarketLaunchResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.injective.exchange.v1beta1.MsgInstantSpotMarketLaunchResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.injective.exchange.v1beta1.MsgInstantSpotMarketLaunchResponse.displayName = 'proto.injective.exchange.v1beta1.MsgInstantSpotMarketLaunchResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.injective.exchange.v1beta1.MsgInstantPerpetualMarketLaunch = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.injective.exchange.v1beta1.MsgInstantPerpetualMarketLaunch, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.injective.exchange.v1beta1.MsgInstantPerpetualMarketLaunch.displayName = 'proto.injective.exchange.v1beta1.MsgInstantPerpetualMarketLaunch';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.injective.exchange.v1beta1.MsgInstantPerpetualMarketLaunchResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.injective.exchange.v1beta1.MsgInstantPerpetualMarketLaunchResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.injective.exchange.v1beta1.MsgInstantPerpetualMarketLaunchResponse.displayName = 'proto.injective.exchange.v1beta1.MsgInstantPerpetualMarketLaunchResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.injective.exchange.v1beta1.MsgInstantExpiryFuturesMarketLaunch = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.injective.exchange.v1beta1.MsgInstantExpiryFuturesMarketLaunch, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.injective.exchange.v1beta1.MsgInstantExpiryFuturesMarketLaunch.displayName = 'proto.injective.exchange.v1beta1.MsgInstantExpiryFuturesMarketLaunch';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.injective.exchange.v1beta1.MsgInstantExpiryFuturesMarketLaunchResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.injective.exchange.v1beta1.MsgInstantExpiryFuturesMarketLaunchResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.injective.exchange.v1beta1.MsgInstantExpiryFuturesMarketLaunchResponse.displayName = 'proto.injective.exchange.v1beta1.MsgInstantExpiryFuturesMarketLaunchResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.injective.exchange.v1beta1.MsgCreateSpotMarketOrder = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.injective.exchange.v1beta1.MsgCreateSpotMarketOrder, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.injective.exchange.v1beta1.MsgCreateSpotMarketOrder.displayName = 'proto.injective.exchange.v1beta1.MsgCreateSpotMarketOrder';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.injective.exchange.v1beta1.MsgCreateSpotMarketOrderResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.injective.exchange.v1beta1.MsgCreateSpotMarketOrderResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.injective.exchange.v1beta1.MsgCreateSpotMarketOrderResponse.displayName = 'proto.injective.exchange.v1beta1.MsgCreateSpotMarketOrderResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.injective.exchange.v1beta1.MsgCreateDerivativeLimitOrder = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.injective.exchange.v1beta1.MsgCreateDerivativeLimitOrder, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.injective.exchange.v1beta1.MsgCreateDerivativeLimitOrder.displayName = 'proto.injective.exchange.v1beta1.MsgCreateDerivativeLimitOrder';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.injective.exchange.v1beta1.MsgCreateDerivativeLimitOrderResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.injective.exchange.v1beta1.MsgCreateDerivativeLimitOrderResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.injective.exchange.v1beta1.MsgCreateDerivativeLimitOrderResponse.displayName = 'proto.injective.exchange.v1beta1.MsgCreateDerivativeLimitOrderResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.injective.exchange.v1beta1.MsgBatchCreateDerivativeLimitOrders = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.injective.exchange.v1beta1.MsgBatchCreateDerivativeLimitOrders.repeatedFields_, null);
};
goog.inherits(proto.injective.exchange.v1beta1.MsgBatchCreateDerivativeLimitOrders, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.injective.exchange.v1beta1.MsgBatchCreateDerivativeLimitOrders.displayName = 'proto.injective.exchange.v1beta1.MsgBatchCreateDerivativeLimitOrders';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.injective.exchange.v1beta1.MsgBatchCreateDerivativeLimitOrdersResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.injective.exchange.v1beta1.MsgBatchCreateDerivativeLimitOrdersResponse.repeatedFields_, null);
};
goog.inherits(proto.injective.exchange.v1beta1.MsgBatchCreateDerivativeLimitOrdersResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.injective.exchange.v1beta1.MsgBatchCreateDerivativeLimitOrdersResponse.displayName = 'proto.injective.exchange.v1beta1.MsgBatchCreateDerivativeLimitOrdersResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.injective.exchange.v1beta1.MsgCancelSpotOrder = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.injective.exchange.v1beta1.MsgCancelSpotOrder, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.injective.exchange.v1beta1.MsgCancelSpotOrder.displayName = 'proto.injective.exchange.v1beta1.MsgCancelSpotOrder';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.injective.exchange.v1beta1.MsgCancelSpotOrderResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.injective.exchange.v1beta1.MsgCancelSpotOrderResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.injective.exchange.v1beta1.MsgCancelSpotOrderResponse.displayName = 'proto.injective.exchange.v1beta1.MsgCancelSpotOrderResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.injective.exchange.v1beta1.MsgBatchCancelSpotOrders = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.injective.exchange.v1beta1.MsgBatchCancelSpotOrders.repeatedFields_, null);
};
goog.inherits(proto.injective.exchange.v1beta1.MsgBatchCancelSpotOrders, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.injective.exchange.v1beta1.MsgBatchCancelSpotOrders.displayName = 'proto.injective.exchange.v1beta1.MsgBatchCancelSpotOrders';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.injective.exchange.v1beta1.MsgBatchCancelSpotOrdersResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.injective.exchange.v1beta1.MsgBatchCancelSpotOrdersResponse.repeatedFields_, null);
};
goog.inherits(proto.injective.exchange.v1beta1.MsgBatchCancelSpotOrdersResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.injective.exchange.v1beta1.MsgBatchCancelSpotOrdersResponse.displayName = 'proto.injective.exchange.v1beta1.MsgBatchCancelSpotOrdersResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.injective.exchange.v1beta1.MsgCreateDerivativeMarketOrder = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.injective.exchange.v1beta1.MsgCreateDerivativeMarketOrder, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.injective.exchange.v1beta1.MsgCreateDerivativeMarketOrder.displayName = 'proto.injective.exchange.v1beta1.MsgCreateDerivativeMarketOrder';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.injective.exchange.v1beta1.MsgCreateDerivativeMarketOrderResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.injective.exchange.v1beta1.MsgCreateDerivativeMarketOrderResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.injective.exchange.v1beta1.MsgCreateDerivativeMarketOrderResponse.displayName = 'proto.injective.exchange.v1beta1.MsgCreateDerivativeMarketOrderResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.injective.exchange.v1beta1.MsgCancelDerivativeOrder = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.injective.exchange.v1beta1.MsgCancelDerivativeOrder, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.injective.exchange.v1beta1.MsgCancelDerivativeOrder.displayName = 'proto.injective.exchange.v1beta1.MsgCancelDerivativeOrder';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.injective.exchange.v1beta1.MsgCancelDerivativeOrderResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.injective.exchange.v1beta1.MsgCancelDerivativeOrderResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.injective.exchange.v1beta1.MsgCancelDerivativeOrderResponse.displayName = 'proto.injective.exchange.v1beta1.MsgCancelDerivativeOrderResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.injective.exchange.v1beta1.OrderData = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.injective.exchange.v1beta1.OrderData, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.injective.exchange.v1beta1.OrderData.displayName = 'proto.injective.exchange.v1beta1.OrderData';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.injective.exchange.v1beta1.MsgBatchCancelDerivativeOrders = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.injective.exchange.v1beta1.MsgBatchCancelDerivativeOrders.repeatedFields_, null);
};
goog.inherits(proto.injective.exchange.v1beta1.MsgBatchCancelDerivativeOrders, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.injective.exchange.v1beta1.MsgBatchCancelDerivativeOrders.displayName = 'proto.injective.exchange.v1beta1.MsgBatchCancelDerivativeOrders';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.injective.exchange.v1beta1.MsgBatchCancelDerivativeOrdersResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.injective.exchange.v1beta1.MsgBatchCancelDerivativeOrdersResponse.repeatedFields_, null);
};
goog.inherits(proto.injective.exchange.v1beta1.MsgBatchCancelDerivativeOrdersResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.injective.exchange.v1beta1.MsgBatchCancelDerivativeOrdersResponse.displayName = 'proto.injective.exchange.v1beta1.MsgBatchCancelDerivativeOrdersResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.injective.exchange.v1beta1.MsgSubaccountTransfer = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.injective.exchange.v1beta1.MsgSubaccountTransfer, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.injective.exchange.v1beta1.MsgSubaccountTransfer.displayName = 'proto.injective.exchange.v1beta1.MsgSubaccountTransfer';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.injective.exchange.v1beta1.MsgSubaccountTransferResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.injective.exchange.v1beta1.MsgSubaccountTransferResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.injective.exchange.v1beta1.MsgSubaccountTransferResponse.displayName = 'proto.injective.exchange.v1beta1.MsgSubaccountTransferResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.injective.exchange.v1beta1.MsgExternalTransfer = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.injective.exchange.v1beta1.MsgExternalTransfer, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.injective.exchange.v1beta1.MsgExternalTransfer.displayName = 'proto.injective.exchange.v1beta1.MsgExternalTransfer';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.injective.exchange.v1beta1.MsgExternalTransferResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.injective.exchange.v1beta1.MsgExternalTransferResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.injective.exchange.v1beta1.MsgExternalTransferResponse.displayName = 'proto.injective.exchange.v1beta1.MsgExternalTransferResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.injective.exchange.v1beta1.MsgLiquidatePosition = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.injective.exchange.v1beta1.MsgLiquidatePosition, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.injective.exchange.v1beta1.MsgLiquidatePosition.displayName = 'proto.injective.exchange.v1beta1.MsgLiquidatePosition';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.injective.exchange.v1beta1.MsgLiquidatePositionResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.injective.exchange.v1beta1.MsgLiquidatePositionResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.injective.exchange.v1beta1.MsgLiquidatePositionResponse.displayName = 'proto.injective.exchange.v1beta1.MsgLiquidatePositionResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.injective.exchange.v1beta1.MsgIncreasePositionMargin = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.injective.exchange.v1beta1.MsgIncreasePositionMargin, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.injective.exchange.v1beta1.MsgIncreasePositionMargin.displayName = 'proto.injective.exchange.v1beta1.MsgIncreasePositionMargin';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.injective.exchange.v1beta1.MsgIncreasePositionMarginResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.injective.exchange.v1beta1.MsgIncreasePositionMarginResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.injective.exchange.v1beta1.MsgIncreasePositionMarginResponse.displayName = 'proto.injective.exchange.v1beta1.MsgIncreasePositionMarginResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.injective.exchange.v1beta1.SpotMarketParamUpdateProposal = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.injective.exchange.v1beta1.SpotMarketParamUpdateProposal, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.injective.exchange.v1beta1.SpotMarketParamUpdateProposal.displayName = 'proto.injective.exchange.v1beta1.SpotMarketParamUpdateProposal';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.injective.exchange.v1beta1.ExchangeEnableProposal = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.injective.exchange.v1beta1.ExchangeEnableProposal, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.injective.exchange.v1beta1.ExchangeEnableProposal.displayName = 'proto.injective.exchange.v1beta1.ExchangeEnableProposal';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.injective.exchange.v1beta1.SpotMarketLaunchProposal = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.injective.exchange.v1beta1.SpotMarketLaunchProposal, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.injective.exchange.v1beta1.SpotMarketLaunchProposal.displayName = 'proto.injective.exchange.v1beta1.SpotMarketLaunchProposal';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.injective.exchange.v1beta1.PerpetualMarketLaunchProposal = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.injective.exchange.v1beta1.PerpetualMarketLaunchProposal, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.injective.exchange.v1beta1.PerpetualMarketLaunchProposal.displayName = 'proto.injective.exchange.v1beta1.PerpetualMarketLaunchProposal';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.injective.exchange.v1beta1.ExpiryFuturesMarketLaunchProposal = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.injective.exchange.v1beta1.ExpiryFuturesMarketLaunchProposal, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.injective.exchange.v1beta1.ExpiryFuturesMarketLaunchProposal.displayName = 'proto.injective.exchange.v1beta1.ExpiryFuturesMarketLaunchProposal';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.injective.exchange.v1beta1.DerivativeMarketParamUpdateProposal = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.injective.exchange.v1beta1.DerivativeMarketParamUpdateProposal, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.injective.exchange.v1beta1.DerivativeMarketParamUpdateProposal.displayName = 'proto.injective.exchange.v1beta1.DerivativeMarketParamUpdateProposal';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.injective.exchange.v1beta1.DerivativeMarketBandOraclePromotionProposal = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.injective.exchange.v1beta1.DerivativeMarketBandOraclePromotionProposal, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.injective.exchange.v1beta1.DerivativeMarketBandOraclePromotionProposal.displayName = 'proto.injective.exchange.v1beta1.DerivativeMarketBandOraclePromotionProposal';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.injective.exchange.v1beta1.LiquidityMiningCampaignProposal = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.injective.exchange.v1beta1.LiquidityMiningCampaignProposal, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.injective.exchange.v1beta1.LiquidityMiningCampaignProposal.displayName = 'proto.injective.exchange.v1beta1.LiquidityMiningCampaignProposal';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.injective.exchange.v1beta1.MsgDeposit.prototype.toObject = function(opt_includeInstance) {
  return proto.injective.exchange.v1beta1.MsgDeposit.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.injective.exchange.v1beta1.MsgDeposit} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.injective.exchange.v1beta1.MsgDeposit.toObject = function(includeInstance, msg) {
  var f, obj = {
    sender: jspb.Message.getFieldWithDefault(msg, 1, ""),
    subaccountId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    amount: (f = msg.getAmount()) && cosmos_base_v1beta1_coin_pb.Coin.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.injective.exchange.v1beta1.MsgDeposit}
 */
proto.injective.exchange.v1beta1.MsgDeposit.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.injective.exchange.v1beta1.MsgDeposit;
  return proto.injective.exchange.v1beta1.MsgDeposit.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.injective.exchange.v1beta1.MsgDeposit} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.injective.exchange.v1beta1.MsgDeposit}
 */
proto.injective.exchange.v1beta1.MsgDeposit.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setSender(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setSubaccountId(value);
      break;
    case 3:
      var value = new cosmos_base_v1beta1_coin_pb.Coin;
      reader.readMessage(value,cosmos_base_v1beta1_coin_pb.Coin.deserializeBinaryFromReader);
      msg.setAmount(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.injective.exchange.v1beta1.MsgDeposit.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.injective.exchange.v1beta1.MsgDeposit.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.injective.exchange.v1beta1.MsgDeposit} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.injective.exchange.v1beta1.MsgDeposit.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSender();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getSubaccountId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getAmount();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      cosmos_base_v1beta1_coin_pb.Coin.serializeBinaryToWriter
    );
  }
};


/**
 * optional string sender = 1;
 * @return {string}
 */
proto.injective.exchange.v1beta1.MsgDeposit.prototype.getSender = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.injective.exchange.v1beta1.MsgDeposit} returns this
 */
proto.injective.exchange.v1beta1.MsgDeposit.prototype.setSender = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string subaccount_id = 2;
 * @return {string}
 */
proto.injective.exchange.v1beta1.MsgDeposit.prototype.getSubaccountId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.injective.exchange.v1beta1.MsgDeposit} returns this
 */
proto.injective.exchange.v1beta1.MsgDeposit.prototype.setSubaccountId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional cosmos.base.v1beta1.Coin amount = 3;
 * @return {?proto.cosmos.base.v1beta1.Coin}
 */
proto.injective.exchange.v1beta1.MsgDeposit.prototype.getAmount = function() {
  return /** @type{?proto.cosmos.base.v1beta1.Coin} */ (
    jspb.Message.getWrapperField(this, cosmos_base_v1beta1_coin_pb.Coin, 3));
};


/**
 * @param {?proto.cosmos.base.v1beta1.Coin|undefined} value
 * @return {!proto.injective.exchange.v1beta1.MsgDeposit} returns this
*/
proto.injective.exchange.v1beta1.MsgDeposit.prototype.setAmount = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.injective.exchange.v1beta1.MsgDeposit} returns this
 */
proto.injective.exchange.v1beta1.MsgDeposit.prototype.clearAmount = function() {
  return this.setAmount(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.injective.exchange.v1beta1.MsgDeposit.prototype.hasAmount = function() {
  return jspb.Message.getField(this, 3) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.injective.exchange.v1beta1.MsgDepositResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.injective.exchange.v1beta1.MsgDepositResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.injective.exchange.v1beta1.MsgDepositResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.injective.exchange.v1beta1.MsgDepositResponse.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.injective.exchange.v1beta1.MsgDepositResponse}
 */
proto.injective.exchange.v1beta1.MsgDepositResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.injective.exchange.v1beta1.MsgDepositResponse;
  return proto.injective.exchange.v1beta1.MsgDepositResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.injective.exchange.v1beta1.MsgDepositResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.injective.exchange.v1beta1.MsgDepositResponse}
 */
proto.injective.exchange.v1beta1.MsgDepositResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.injective.exchange.v1beta1.MsgDepositResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.injective.exchange.v1beta1.MsgDepositResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.injective.exchange.v1beta1.MsgDepositResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.injective.exchange.v1beta1.MsgDepositResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.injective.exchange.v1beta1.MsgWithdraw.prototype.toObject = function(opt_includeInstance) {
  return proto.injective.exchange.v1beta1.MsgWithdraw.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.injective.exchange.v1beta1.MsgWithdraw} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.injective.exchange.v1beta1.MsgWithdraw.toObject = function(includeInstance, msg) {
  var f, obj = {
    sender: jspb.Message.getFieldWithDefault(msg, 1, ""),
    subaccountId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    amount: (f = msg.getAmount()) && cosmos_base_v1beta1_coin_pb.Coin.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.injective.exchange.v1beta1.MsgWithdraw}
 */
proto.injective.exchange.v1beta1.MsgWithdraw.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.injective.exchange.v1beta1.MsgWithdraw;
  return proto.injective.exchange.v1beta1.MsgWithdraw.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.injective.exchange.v1beta1.MsgWithdraw} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.injective.exchange.v1beta1.MsgWithdraw}
 */
proto.injective.exchange.v1beta1.MsgWithdraw.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setSender(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setSubaccountId(value);
      break;
    case 3:
      var value = new cosmos_base_v1beta1_coin_pb.Coin;
      reader.readMessage(value,cosmos_base_v1beta1_coin_pb.Coin.deserializeBinaryFromReader);
      msg.setAmount(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.injective.exchange.v1beta1.MsgWithdraw.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.injective.exchange.v1beta1.MsgWithdraw.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.injective.exchange.v1beta1.MsgWithdraw} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.injective.exchange.v1beta1.MsgWithdraw.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSender();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getSubaccountId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getAmount();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      cosmos_base_v1beta1_coin_pb.Coin.serializeBinaryToWriter
    );
  }
};


/**
 * optional string sender = 1;
 * @return {string}
 */
proto.injective.exchange.v1beta1.MsgWithdraw.prototype.getSender = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.injective.exchange.v1beta1.MsgWithdraw} returns this
 */
proto.injective.exchange.v1beta1.MsgWithdraw.prototype.setSender = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string subaccount_id = 2;
 * @return {string}
 */
proto.injective.exchange.v1beta1.MsgWithdraw.prototype.getSubaccountId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.injective.exchange.v1beta1.MsgWithdraw} returns this
 */
proto.injective.exchange.v1beta1.MsgWithdraw.prototype.setSubaccountId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional cosmos.base.v1beta1.Coin amount = 3;
 * @return {?proto.cosmos.base.v1beta1.Coin}
 */
proto.injective.exchange.v1beta1.MsgWithdraw.prototype.getAmount = function() {
  return /** @type{?proto.cosmos.base.v1beta1.Coin} */ (
    jspb.Message.getWrapperField(this, cosmos_base_v1beta1_coin_pb.Coin, 3));
};


/**
 * @param {?proto.cosmos.base.v1beta1.Coin|undefined} value
 * @return {!proto.injective.exchange.v1beta1.MsgWithdraw} returns this
*/
proto.injective.exchange.v1beta1.MsgWithdraw.prototype.setAmount = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.injective.exchange.v1beta1.MsgWithdraw} returns this
 */
proto.injective.exchange.v1beta1.MsgWithdraw.prototype.clearAmount = function() {
  return this.setAmount(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.injective.exchange.v1beta1.MsgWithdraw.prototype.hasAmount = function() {
  return jspb.Message.getField(this, 3) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.injective.exchange.v1beta1.MsgWithdrawResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.injective.exchange.v1beta1.MsgWithdrawResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.injective.exchange.v1beta1.MsgWithdrawResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.injective.exchange.v1beta1.MsgWithdrawResponse.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.injective.exchange.v1beta1.MsgWithdrawResponse}
 */
proto.injective.exchange.v1beta1.MsgWithdrawResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.injective.exchange.v1beta1.MsgWithdrawResponse;
  return proto.injective.exchange.v1beta1.MsgWithdrawResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.injective.exchange.v1beta1.MsgWithdrawResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.injective.exchange.v1beta1.MsgWithdrawResponse}
 */
proto.injective.exchange.v1beta1.MsgWithdrawResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.injective.exchange.v1beta1.MsgWithdrawResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.injective.exchange.v1beta1.MsgWithdrawResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.injective.exchange.v1beta1.MsgWithdrawResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.injective.exchange.v1beta1.MsgWithdrawResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.injective.exchange.v1beta1.MsgCreateSpotLimitOrder.prototype.toObject = function(opt_includeInstance) {
  return proto.injective.exchange.v1beta1.MsgCreateSpotLimitOrder.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.injective.exchange.v1beta1.MsgCreateSpotLimitOrder} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.injective.exchange.v1beta1.MsgCreateSpotLimitOrder.toObject = function(includeInstance, msg) {
  var f, obj = {
    sender: jspb.Message.getFieldWithDefault(msg, 1, ""),
    order: (f = msg.getOrder()) && injective_exchange_v1beta1_exchange_pb.SpotOrder.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.injective.exchange.v1beta1.MsgCreateSpotLimitOrder}
 */
proto.injective.exchange.v1beta1.MsgCreateSpotLimitOrder.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.injective.exchange.v1beta1.MsgCreateSpotLimitOrder;
  return proto.injective.exchange.v1beta1.MsgCreateSpotLimitOrder.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.injective.exchange.v1beta1.MsgCreateSpotLimitOrder} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.injective.exchange.v1beta1.MsgCreateSpotLimitOrder}
 */
proto.injective.exchange.v1beta1.MsgCreateSpotLimitOrder.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setSender(value);
      break;
    case 2:
      var value = new injective_exchange_v1beta1_exchange_pb.SpotOrder;
      reader.readMessage(value,injective_exchange_v1beta1_exchange_pb.SpotOrder.deserializeBinaryFromReader);
      msg.setOrder(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.injective.exchange.v1beta1.MsgCreateSpotLimitOrder.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.injective.exchange.v1beta1.MsgCreateSpotLimitOrder.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.injective.exchange.v1beta1.MsgCreateSpotLimitOrder} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.injective.exchange.v1beta1.MsgCreateSpotLimitOrder.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSender();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getOrder();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      injective_exchange_v1beta1_exchange_pb.SpotOrder.serializeBinaryToWriter
    );
  }
};


/**
 * optional string sender = 1;
 * @return {string}
 */
proto.injective.exchange.v1beta1.MsgCreateSpotLimitOrder.prototype.getSender = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.injective.exchange.v1beta1.MsgCreateSpotLimitOrder} returns this
 */
proto.injective.exchange.v1beta1.MsgCreateSpotLimitOrder.prototype.setSender = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional SpotOrder order = 2;
 * @return {?proto.injective.exchange.v1beta1.SpotOrder}
 */
proto.injective.exchange.v1beta1.MsgCreateSpotLimitOrder.prototype.getOrder = function() {
  return /** @type{?proto.injective.exchange.v1beta1.SpotOrder} */ (
    jspb.Message.getWrapperField(this, injective_exchange_v1beta1_exchange_pb.SpotOrder, 2));
};


/**
 * @param {?proto.injective.exchange.v1beta1.SpotOrder|undefined} value
 * @return {!proto.injective.exchange.v1beta1.MsgCreateSpotLimitOrder} returns this
*/
proto.injective.exchange.v1beta1.MsgCreateSpotLimitOrder.prototype.setOrder = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.injective.exchange.v1beta1.MsgCreateSpotLimitOrder} returns this
 */
proto.injective.exchange.v1beta1.MsgCreateSpotLimitOrder.prototype.clearOrder = function() {
  return this.setOrder(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.injective.exchange.v1beta1.MsgCreateSpotLimitOrder.prototype.hasOrder = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.injective.exchange.v1beta1.MsgCreateSpotLimitOrderResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.injective.exchange.v1beta1.MsgCreateSpotLimitOrderResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.injective.exchange.v1beta1.MsgCreateSpotLimitOrderResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.injective.exchange.v1beta1.MsgCreateSpotLimitOrderResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    orderHash: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.injective.exchange.v1beta1.MsgCreateSpotLimitOrderResponse}
 */
proto.injective.exchange.v1beta1.MsgCreateSpotLimitOrderResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.injective.exchange.v1beta1.MsgCreateSpotLimitOrderResponse;
  return proto.injective.exchange.v1beta1.MsgCreateSpotLimitOrderResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.injective.exchange.v1beta1.MsgCreateSpotLimitOrderResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.injective.exchange.v1beta1.MsgCreateSpotLimitOrderResponse}
 */
proto.injective.exchange.v1beta1.MsgCreateSpotLimitOrderResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setOrderHash(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.injective.exchange.v1beta1.MsgCreateSpotLimitOrderResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.injective.exchange.v1beta1.MsgCreateSpotLimitOrderResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.injective.exchange.v1beta1.MsgCreateSpotLimitOrderResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.injective.exchange.v1beta1.MsgCreateSpotLimitOrderResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOrderHash();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string order_hash = 1;
 * @return {string}
 */
proto.injective.exchange.v1beta1.MsgCreateSpotLimitOrderResponse.prototype.getOrderHash = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.injective.exchange.v1beta1.MsgCreateSpotLimitOrderResponse} returns this
 */
proto.injective.exchange.v1beta1.MsgCreateSpotLimitOrderResponse.prototype.setOrderHash = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.injective.exchange.v1beta1.MsgBatchCreateSpotLimitOrders.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.injective.exchange.v1beta1.MsgBatchCreateSpotLimitOrders.prototype.toObject = function(opt_includeInstance) {
  return proto.injective.exchange.v1beta1.MsgBatchCreateSpotLimitOrders.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.injective.exchange.v1beta1.MsgBatchCreateSpotLimitOrders} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.injective.exchange.v1beta1.MsgBatchCreateSpotLimitOrders.toObject = function(includeInstance, msg) {
  var f, obj = {
    sender: jspb.Message.getFieldWithDefault(msg, 1, ""),
    ordersList: jspb.Message.toObjectList(msg.getOrdersList(),
    injective_exchange_v1beta1_exchange_pb.SpotOrder.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.injective.exchange.v1beta1.MsgBatchCreateSpotLimitOrders}
 */
proto.injective.exchange.v1beta1.MsgBatchCreateSpotLimitOrders.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.injective.exchange.v1beta1.MsgBatchCreateSpotLimitOrders;
  return proto.injective.exchange.v1beta1.MsgBatchCreateSpotLimitOrders.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.injective.exchange.v1beta1.MsgBatchCreateSpotLimitOrders} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.injective.exchange.v1beta1.MsgBatchCreateSpotLimitOrders}
 */
proto.injective.exchange.v1beta1.MsgBatchCreateSpotLimitOrders.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setSender(value);
      break;
    case 2:
      var value = new injective_exchange_v1beta1_exchange_pb.SpotOrder;
      reader.readMessage(value,injective_exchange_v1beta1_exchange_pb.SpotOrder.deserializeBinaryFromReader);
      msg.addOrders(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.injective.exchange.v1beta1.MsgBatchCreateSpotLimitOrders.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.injective.exchange.v1beta1.MsgBatchCreateSpotLimitOrders.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.injective.exchange.v1beta1.MsgBatchCreateSpotLimitOrders} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.injective.exchange.v1beta1.MsgBatchCreateSpotLimitOrders.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSender();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getOrdersList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      injective_exchange_v1beta1_exchange_pb.SpotOrder.serializeBinaryToWriter
    );
  }
};


/**
 * optional string sender = 1;
 * @return {string}
 */
proto.injective.exchange.v1beta1.MsgBatchCreateSpotLimitOrders.prototype.getSender = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.injective.exchange.v1beta1.MsgBatchCreateSpotLimitOrders} returns this
 */
proto.injective.exchange.v1beta1.MsgBatchCreateSpotLimitOrders.prototype.setSender = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated SpotOrder orders = 2;
 * @return {!Array<!proto.injective.exchange.v1beta1.SpotOrder>}
 */
proto.injective.exchange.v1beta1.MsgBatchCreateSpotLimitOrders.prototype.getOrdersList = function() {
  return /** @type{!Array<!proto.injective.exchange.v1beta1.SpotOrder>} */ (
    jspb.Message.getRepeatedWrapperField(this, injective_exchange_v1beta1_exchange_pb.SpotOrder, 2));
};


/**
 * @param {!Array<!proto.injective.exchange.v1beta1.SpotOrder>} value
 * @return {!proto.injective.exchange.v1beta1.MsgBatchCreateSpotLimitOrders} returns this
*/
proto.injective.exchange.v1beta1.MsgBatchCreateSpotLimitOrders.prototype.setOrdersList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.injective.exchange.v1beta1.SpotOrder=} opt_value
 * @param {number=} opt_index
 * @return {!proto.injective.exchange.v1beta1.SpotOrder}
 */
proto.injective.exchange.v1beta1.MsgBatchCreateSpotLimitOrders.prototype.addOrders = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.injective.exchange.v1beta1.SpotOrder, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.injective.exchange.v1beta1.MsgBatchCreateSpotLimitOrders} returns this
 */
proto.injective.exchange.v1beta1.MsgBatchCreateSpotLimitOrders.prototype.clearOrdersList = function() {
  return this.setOrdersList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.injective.exchange.v1beta1.MsgBatchCreateSpotLimitOrdersResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.injective.exchange.v1beta1.MsgBatchCreateSpotLimitOrdersResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.injective.exchange.v1beta1.MsgBatchCreateSpotLimitOrdersResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.injective.exchange.v1beta1.MsgBatchCreateSpotLimitOrdersResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.injective.exchange.v1beta1.MsgBatchCreateSpotLimitOrdersResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    orderHashesList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.injective.exchange.v1beta1.MsgBatchCreateSpotLimitOrdersResponse}
 */
proto.injective.exchange.v1beta1.MsgBatchCreateSpotLimitOrdersResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.injective.exchange.v1beta1.MsgBatchCreateSpotLimitOrdersResponse;
  return proto.injective.exchange.v1beta1.MsgBatchCreateSpotLimitOrdersResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.injective.exchange.v1beta1.MsgBatchCreateSpotLimitOrdersResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.injective.exchange.v1beta1.MsgBatchCreateSpotLimitOrdersResponse}
 */
proto.injective.exchange.v1beta1.MsgBatchCreateSpotLimitOrdersResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.addOrderHashes(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.injective.exchange.v1beta1.MsgBatchCreateSpotLimitOrdersResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.injective.exchange.v1beta1.MsgBatchCreateSpotLimitOrdersResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.injective.exchange.v1beta1.MsgBatchCreateSpotLimitOrdersResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.injective.exchange.v1beta1.MsgBatchCreateSpotLimitOrdersResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOrderHashesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
};


/**
 * repeated string order_hashes = 1;
 * @return {!Array<string>}
 */
proto.injective.exchange.v1beta1.MsgBatchCreateSpotLimitOrdersResponse.prototype.getOrderHashesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.injective.exchange.v1beta1.MsgBatchCreateSpotLimitOrdersResponse} returns this
 */
proto.injective.exchange.v1beta1.MsgBatchCreateSpotLimitOrdersResponse.prototype.setOrderHashesList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.injective.exchange.v1beta1.MsgBatchCreateSpotLimitOrdersResponse} returns this
 */
proto.injective.exchange.v1beta1.MsgBatchCreateSpotLimitOrdersResponse.prototype.addOrderHashes = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.injective.exchange.v1beta1.MsgBatchCreateSpotLimitOrdersResponse} returns this
 */
proto.injective.exchange.v1beta1.MsgBatchCreateSpotLimitOrdersResponse.prototype.clearOrderHashesList = function() {
  return this.setOrderHashesList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.injective.exchange.v1beta1.MsgInstantSpotMarketLaunch.prototype.toObject = function(opt_includeInstance) {
  return proto.injective.exchange.v1beta1.MsgInstantSpotMarketLaunch.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.injective.exchange.v1beta1.MsgInstantSpotMarketLaunch} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.injective.exchange.v1beta1.MsgInstantSpotMarketLaunch.toObject = function(includeInstance, msg) {
  var f, obj = {
    sender: jspb.Message.getFieldWithDefault(msg, 1, ""),
    ticker: jspb.Message.getFieldWithDefault(msg, 2, ""),
    baseDenom: jspb.Message.getFieldWithDefault(msg, 3, ""),
    quoteDenom: jspb.Message.getFieldWithDefault(msg, 4, ""),
    minPriceTickSize: jspb.Message.getFieldWithDefault(msg, 5, ""),
    minQuantityTickSize: jspb.Message.getFieldWithDefault(msg, 6, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.injective.exchange.v1beta1.MsgInstantSpotMarketLaunch}
 */
proto.injective.exchange.v1beta1.MsgInstantSpotMarketLaunch.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.injective.exchange.v1beta1.MsgInstantSpotMarketLaunch;
  return proto.injective.exchange.v1beta1.MsgInstantSpotMarketLaunch.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.injective.exchange.v1beta1.MsgInstantSpotMarketLaunch} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.injective.exchange.v1beta1.MsgInstantSpotMarketLaunch}
 */
proto.injective.exchange.v1beta1.MsgInstantSpotMarketLaunch.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setSender(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setTicker(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setBaseDenom(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setQuoteDenom(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setMinPriceTickSize(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setMinQuantityTickSize(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.injective.exchange.v1beta1.MsgInstantSpotMarketLaunch.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.injective.exchange.v1beta1.MsgInstantSpotMarketLaunch.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.injective.exchange.v1beta1.MsgInstantSpotMarketLaunch} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.injective.exchange.v1beta1.MsgInstantSpotMarketLaunch.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSender();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getTicker();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getBaseDenom();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getQuoteDenom();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getMinPriceTickSize();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getMinQuantityTickSize();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
};


/**
 * optional string sender = 1;
 * @return {string}
 */
proto.injective.exchange.v1beta1.MsgInstantSpotMarketLaunch.prototype.getSender = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.injective.exchange.v1beta1.MsgInstantSpotMarketLaunch} returns this
 */
proto.injective.exchange.v1beta1.MsgInstantSpotMarketLaunch.prototype.setSender = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string ticker = 2;
 * @return {string}
 */
proto.injective.exchange.v1beta1.MsgInstantSpotMarketLaunch.prototype.getTicker = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.injective.exchange.v1beta1.MsgInstantSpotMarketLaunch} returns this
 */
proto.injective.exchange.v1beta1.MsgInstantSpotMarketLaunch.prototype.setTicker = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string base_denom = 3;
 * @return {string}
 */
proto.injective.exchange.v1beta1.MsgInstantSpotMarketLaunch.prototype.getBaseDenom = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.injective.exchange.v1beta1.MsgInstantSpotMarketLaunch} returns this
 */
proto.injective.exchange.v1beta1.MsgInstantSpotMarketLaunch.prototype.setBaseDenom = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string quote_denom = 4;
 * @return {string}
 */
proto.injective.exchange.v1beta1.MsgInstantSpotMarketLaunch.prototype.getQuoteDenom = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.injective.exchange.v1beta1.MsgInstantSpotMarketLaunch} returns this
 */
proto.injective.exchange.v1beta1.MsgInstantSpotMarketLaunch.prototype.setQuoteDenom = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string min_price_tick_size = 5;
 * @return {string}
 */
proto.injective.exchange.v1beta1.MsgInstantSpotMarketLaunch.prototype.getMinPriceTickSize = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.injective.exchange.v1beta1.MsgInstantSpotMarketLaunch} returns this
 */
proto.injective.exchange.v1beta1.MsgInstantSpotMarketLaunch.prototype.setMinPriceTickSize = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string min_quantity_tick_size = 6;
 * @return {string}
 */
proto.injective.exchange.v1beta1.MsgInstantSpotMarketLaunch.prototype.getMinQuantityTickSize = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.injective.exchange.v1beta1.MsgInstantSpotMarketLaunch} returns this
 */
proto.injective.exchange.v1beta1.MsgInstantSpotMarketLaunch.prototype.setMinQuantityTickSize = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.injective.exchange.v1beta1.MsgInstantSpotMarketLaunchResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.injective.exchange.v1beta1.MsgInstantSpotMarketLaunchResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.injective.exchange.v1beta1.MsgInstantSpotMarketLaunchResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.injective.exchange.v1beta1.MsgInstantSpotMarketLaunchResponse.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.injective.exchange.v1beta1.MsgInstantSpotMarketLaunchResponse}
 */
proto.injective.exchange.v1beta1.MsgInstantSpotMarketLaunchResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.injective.exchange.v1beta1.MsgInstantSpotMarketLaunchResponse;
  return proto.injective.exchange.v1beta1.MsgInstantSpotMarketLaunchResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.injective.exchange.v1beta1.MsgInstantSpotMarketLaunchResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.injective.exchange.v1beta1.MsgInstantSpotMarketLaunchResponse}
 */
proto.injective.exchange.v1beta1.MsgInstantSpotMarketLaunchResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.injective.exchange.v1beta1.MsgInstantSpotMarketLaunchResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.injective.exchange.v1beta1.MsgInstantSpotMarketLaunchResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.injective.exchange.v1beta1.MsgInstantSpotMarketLaunchResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.injective.exchange.v1beta1.MsgInstantSpotMarketLaunchResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.injective.exchange.v1beta1.MsgInstantPerpetualMarketLaunch.prototype.toObject = function(opt_includeInstance) {
  return proto.injective.exchange.v1beta1.MsgInstantPerpetualMarketLaunch.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.injective.exchange.v1beta1.MsgInstantPerpetualMarketLaunch} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.injective.exchange.v1beta1.MsgInstantPerpetualMarketLaunch.toObject = function(includeInstance, msg) {
  var f, obj = {
    sender: jspb.Message.getFieldWithDefault(msg, 1, ""),
    ticker: jspb.Message.getFieldWithDefault(msg, 2, ""),
    quoteDenom: jspb.Message.getFieldWithDefault(msg, 3, ""),
    oracleBase: jspb.Message.getFieldWithDefault(msg, 4, ""),
    oracleQuote: jspb.Message.getFieldWithDefault(msg, 5, ""),
    oracleScaleFactor: jspb.Message.getFieldWithDefault(msg, 6, 0),
    oracleType: jspb.Message.getFieldWithDefault(msg, 7, 0),
    makerFeeRate: jspb.Message.getFieldWithDefault(msg, 8, ""),
    takerFeeRate: jspb.Message.getFieldWithDefault(msg, 9, ""),
    initialMarginRatio: jspb.Message.getFieldWithDefault(msg, 10, ""),
    maintenanceMarginRatio: jspb.Message.getFieldWithDefault(msg, 11, ""),
    minPriceTickSize: jspb.Message.getFieldWithDefault(msg, 12, ""),
    minQuantityTickSize: jspb.Message.getFieldWithDefault(msg, 13, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.injective.exchange.v1beta1.MsgInstantPerpetualMarketLaunch}
 */
proto.injective.exchange.v1beta1.MsgInstantPerpetualMarketLaunch.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.injective.exchange.v1beta1.MsgInstantPerpetualMarketLaunch;
  return proto.injective.exchange.v1beta1.MsgInstantPerpetualMarketLaunch.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.injective.exchange.v1beta1.MsgInstantPerpetualMarketLaunch} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.injective.exchange.v1beta1.MsgInstantPerpetualMarketLaunch}
 */
proto.injective.exchange.v1beta1.MsgInstantPerpetualMarketLaunch.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setSender(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setTicker(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setQuoteDenom(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setOracleBase(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setOracleQuote(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setOracleScaleFactor(value);
      break;
    case 7:
      var value = /** @type {!proto.injective.oracle.v1beta1.OracleType} */ (reader.readEnum());
      msg.setOracleType(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setMakerFeeRate(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setTakerFeeRate(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setInitialMarginRatio(value);
      break;
    case 11:
      var value = /** @type {string} */ (reader.readString());
      msg.setMaintenanceMarginRatio(value);
      break;
    case 12:
      var value = /** @type {string} */ (reader.readString());
      msg.setMinPriceTickSize(value);
      break;
    case 13:
      var value = /** @type {string} */ (reader.readString());
      msg.setMinQuantityTickSize(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.injective.exchange.v1beta1.MsgInstantPerpetualMarketLaunch.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.injective.exchange.v1beta1.MsgInstantPerpetualMarketLaunch.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.injective.exchange.v1beta1.MsgInstantPerpetualMarketLaunch} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.injective.exchange.v1beta1.MsgInstantPerpetualMarketLaunch.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSender();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getTicker();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getQuoteDenom();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getOracleBase();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getOracleQuote();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getOracleScaleFactor();
  if (f !== 0) {
    writer.writeUint32(
      6,
      f
    );
  }
  f = message.getOracleType();
  if (f !== 0.0) {
    writer.writeEnum(
      7,
      f
    );
  }
  f = message.getMakerFeeRate();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getTakerFeeRate();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
  f = message.getInitialMarginRatio();
  if (f.length > 0) {
    writer.writeString(
      10,
      f
    );
  }
  f = message.getMaintenanceMarginRatio();
  if (f.length > 0) {
    writer.writeString(
      11,
      f
    );
  }
  f = message.getMinPriceTickSize();
  if (f.length > 0) {
    writer.writeString(
      12,
      f
    );
  }
  f = message.getMinQuantityTickSize();
  if (f.length > 0) {
    writer.writeString(
      13,
      f
    );
  }
};


/**
 * optional string sender = 1;
 * @return {string}
 */
proto.injective.exchange.v1beta1.MsgInstantPerpetualMarketLaunch.prototype.getSender = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.injective.exchange.v1beta1.MsgInstantPerpetualMarketLaunch} returns this
 */
proto.injective.exchange.v1beta1.MsgInstantPerpetualMarketLaunch.prototype.setSender = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string ticker = 2;
 * @return {string}
 */
proto.injective.exchange.v1beta1.MsgInstantPerpetualMarketLaunch.prototype.getTicker = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.injective.exchange.v1beta1.MsgInstantPerpetualMarketLaunch} returns this
 */
proto.injective.exchange.v1beta1.MsgInstantPerpetualMarketLaunch.prototype.setTicker = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string quote_denom = 3;
 * @return {string}
 */
proto.injective.exchange.v1beta1.MsgInstantPerpetualMarketLaunch.prototype.getQuoteDenom = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.injective.exchange.v1beta1.MsgInstantPerpetualMarketLaunch} returns this
 */
proto.injective.exchange.v1beta1.MsgInstantPerpetualMarketLaunch.prototype.setQuoteDenom = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string oracle_base = 4;
 * @return {string}
 */
proto.injective.exchange.v1beta1.MsgInstantPerpetualMarketLaunch.prototype.getOracleBase = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.injective.exchange.v1beta1.MsgInstantPerpetualMarketLaunch} returns this
 */
proto.injective.exchange.v1beta1.MsgInstantPerpetualMarketLaunch.prototype.setOracleBase = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string oracle_quote = 5;
 * @return {string}
 */
proto.injective.exchange.v1beta1.MsgInstantPerpetualMarketLaunch.prototype.getOracleQuote = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.injective.exchange.v1beta1.MsgInstantPerpetualMarketLaunch} returns this
 */
proto.injective.exchange.v1beta1.MsgInstantPerpetualMarketLaunch.prototype.setOracleQuote = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional uint32 oracle_scale_factor = 6;
 * @return {number}
 */
proto.injective.exchange.v1beta1.MsgInstantPerpetualMarketLaunch.prototype.getOracleScaleFactor = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.injective.exchange.v1beta1.MsgInstantPerpetualMarketLaunch} returns this
 */
proto.injective.exchange.v1beta1.MsgInstantPerpetualMarketLaunch.prototype.setOracleScaleFactor = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional injective.oracle.v1beta1.OracleType oracle_type = 7;
 * @return {!proto.injective.oracle.v1beta1.OracleType}
 */
proto.injective.exchange.v1beta1.MsgInstantPerpetualMarketLaunch.prototype.getOracleType = function() {
  return /** @type {!proto.injective.oracle.v1beta1.OracleType} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {!proto.injective.oracle.v1beta1.OracleType} value
 * @return {!proto.injective.exchange.v1beta1.MsgInstantPerpetualMarketLaunch} returns this
 */
proto.injective.exchange.v1beta1.MsgInstantPerpetualMarketLaunch.prototype.setOracleType = function(value) {
  return jspb.Message.setProto3EnumField(this, 7, value);
};


/**
 * optional string maker_fee_rate = 8;
 * @return {string}
 */
proto.injective.exchange.v1beta1.MsgInstantPerpetualMarketLaunch.prototype.getMakerFeeRate = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.injective.exchange.v1beta1.MsgInstantPerpetualMarketLaunch} returns this
 */
proto.injective.exchange.v1beta1.MsgInstantPerpetualMarketLaunch.prototype.setMakerFeeRate = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional string taker_fee_rate = 9;
 * @return {string}
 */
proto.injective.exchange.v1beta1.MsgInstantPerpetualMarketLaunch.prototype.getTakerFeeRate = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.injective.exchange.v1beta1.MsgInstantPerpetualMarketLaunch} returns this
 */
proto.injective.exchange.v1beta1.MsgInstantPerpetualMarketLaunch.prototype.setTakerFeeRate = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * optional string initial_margin_ratio = 10;
 * @return {string}
 */
proto.injective.exchange.v1beta1.MsgInstantPerpetualMarketLaunch.prototype.getInitialMarginRatio = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/**
 * @param {string} value
 * @return {!proto.injective.exchange.v1beta1.MsgInstantPerpetualMarketLaunch} returns this
 */
proto.injective.exchange.v1beta1.MsgInstantPerpetualMarketLaunch.prototype.setInitialMarginRatio = function(value) {
  return jspb.Message.setProto3StringField(this, 10, value);
};


/**
 * optional string maintenance_margin_ratio = 11;
 * @return {string}
 */
proto.injective.exchange.v1beta1.MsgInstantPerpetualMarketLaunch.prototype.getMaintenanceMarginRatio = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 11, ""));
};


/**
 * @param {string} value
 * @return {!proto.injective.exchange.v1beta1.MsgInstantPerpetualMarketLaunch} returns this
 */
proto.injective.exchange.v1beta1.MsgInstantPerpetualMarketLaunch.prototype.setMaintenanceMarginRatio = function(value) {
  return jspb.Message.setProto3StringField(this, 11, value);
};


/**
 * optional string min_price_tick_size = 12;
 * @return {string}
 */
proto.injective.exchange.v1beta1.MsgInstantPerpetualMarketLaunch.prototype.getMinPriceTickSize = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 12, ""));
};


/**
 * @param {string} value
 * @return {!proto.injective.exchange.v1beta1.MsgInstantPerpetualMarketLaunch} returns this
 */
proto.injective.exchange.v1beta1.MsgInstantPerpetualMarketLaunch.prototype.setMinPriceTickSize = function(value) {
  return jspb.Message.setProto3StringField(this, 12, value);
};


/**
 * optional string min_quantity_tick_size = 13;
 * @return {string}
 */
proto.injective.exchange.v1beta1.MsgInstantPerpetualMarketLaunch.prototype.getMinQuantityTickSize = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 13, ""));
};


/**
 * @param {string} value
 * @return {!proto.injective.exchange.v1beta1.MsgInstantPerpetualMarketLaunch} returns this
 */
proto.injective.exchange.v1beta1.MsgInstantPerpetualMarketLaunch.prototype.setMinQuantityTickSize = function(value) {
  return jspb.Message.setProto3StringField(this, 13, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.injective.exchange.v1beta1.MsgInstantPerpetualMarketLaunchResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.injective.exchange.v1beta1.MsgInstantPerpetualMarketLaunchResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.injective.exchange.v1beta1.MsgInstantPerpetualMarketLaunchResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.injective.exchange.v1beta1.MsgInstantPerpetualMarketLaunchResponse.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.injective.exchange.v1beta1.MsgInstantPerpetualMarketLaunchResponse}
 */
proto.injective.exchange.v1beta1.MsgInstantPerpetualMarketLaunchResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.injective.exchange.v1beta1.MsgInstantPerpetualMarketLaunchResponse;
  return proto.injective.exchange.v1beta1.MsgInstantPerpetualMarketLaunchResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.injective.exchange.v1beta1.MsgInstantPerpetualMarketLaunchResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.injective.exchange.v1beta1.MsgInstantPerpetualMarketLaunchResponse}
 */
proto.injective.exchange.v1beta1.MsgInstantPerpetualMarketLaunchResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.injective.exchange.v1beta1.MsgInstantPerpetualMarketLaunchResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.injective.exchange.v1beta1.MsgInstantPerpetualMarketLaunchResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.injective.exchange.v1beta1.MsgInstantPerpetualMarketLaunchResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.injective.exchange.v1beta1.MsgInstantPerpetualMarketLaunchResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.injective.exchange.v1beta1.MsgInstantExpiryFuturesMarketLaunch.prototype.toObject = function(opt_includeInstance) {
  return proto.injective.exchange.v1beta1.MsgInstantExpiryFuturesMarketLaunch.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.injective.exchange.v1beta1.MsgInstantExpiryFuturesMarketLaunch} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.injective.exchange.v1beta1.MsgInstantExpiryFuturesMarketLaunch.toObject = function(includeInstance, msg) {
  var f, obj = {
    sender: jspb.Message.getFieldWithDefault(msg, 1, ""),
    ticker: jspb.Message.getFieldWithDefault(msg, 2, ""),
    quoteDenom: jspb.Message.getFieldWithDefault(msg, 3, ""),
    oracleBase: jspb.Message.getFieldWithDefault(msg, 4, ""),
    oracleQuote: jspb.Message.getFieldWithDefault(msg, 5, ""),
    oracleType: jspb.Message.getFieldWithDefault(msg, 6, 0),
    oracleScaleFactor: jspb.Message.getFieldWithDefault(msg, 7, 0),
    expiry: jspb.Message.getFieldWithDefault(msg, 8, 0),
    makerFeeRate: jspb.Message.getFieldWithDefault(msg, 9, ""),
    takerFeeRate: jspb.Message.getFieldWithDefault(msg, 10, ""),
    initialMarginRatio: jspb.Message.getFieldWithDefault(msg, 11, ""),
    maintenanceMarginRatio: jspb.Message.getFieldWithDefault(msg, 12, ""),
    minPriceTickSize: jspb.Message.getFieldWithDefault(msg, 13, ""),
    minQuantityTickSize: jspb.Message.getFieldWithDefault(msg, 14, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.injective.exchange.v1beta1.MsgInstantExpiryFuturesMarketLaunch}
 */
proto.injective.exchange.v1beta1.MsgInstantExpiryFuturesMarketLaunch.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.injective.exchange.v1beta1.MsgInstantExpiryFuturesMarketLaunch;
  return proto.injective.exchange.v1beta1.MsgInstantExpiryFuturesMarketLaunch.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.injective.exchange.v1beta1.MsgInstantExpiryFuturesMarketLaunch} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.injective.exchange.v1beta1.MsgInstantExpiryFuturesMarketLaunch}
 */
proto.injective.exchange.v1beta1.MsgInstantExpiryFuturesMarketLaunch.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setSender(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setTicker(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setQuoteDenom(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setOracleBase(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setOracleQuote(value);
      break;
    case 6:
      var value = /** @type {!proto.injective.oracle.v1beta1.OracleType} */ (reader.readEnum());
      msg.setOracleType(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setOracleScaleFactor(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setExpiry(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setMakerFeeRate(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setTakerFeeRate(value);
      break;
    case 11:
      var value = /** @type {string} */ (reader.readString());
      msg.setInitialMarginRatio(value);
      break;
    case 12:
      var value = /** @type {string} */ (reader.readString());
      msg.setMaintenanceMarginRatio(value);
      break;
    case 13:
      var value = /** @type {string} */ (reader.readString());
      msg.setMinPriceTickSize(value);
      break;
    case 14:
      var value = /** @type {string} */ (reader.readString());
      msg.setMinQuantityTickSize(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.injective.exchange.v1beta1.MsgInstantExpiryFuturesMarketLaunch.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.injective.exchange.v1beta1.MsgInstantExpiryFuturesMarketLaunch.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.injective.exchange.v1beta1.MsgInstantExpiryFuturesMarketLaunch} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.injective.exchange.v1beta1.MsgInstantExpiryFuturesMarketLaunch.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSender();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getTicker();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getQuoteDenom();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getOracleBase();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getOracleQuote();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getOracleType();
  if (f !== 0.0) {
    writer.writeEnum(
      6,
      f
    );
  }
  f = message.getOracleScaleFactor();
  if (f !== 0) {
    writer.writeUint32(
      7,
      f
    );
  }
  f = message.getExpiry();
  if (f !== 0) {
    writer.writeInt64(
      8,
      f
    );
  }
  f = message.getMakerFeeRate();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
  f = message.getTakerFeeRate();
  if (f.length > 0) {
    writer.writeString(
      10,
      f
    );
  }
  f = message.getInitialMarginRatio();
  if (f.length > 0) {
    writer.writeString(
      11,
      f
    );
  }
  f = message.getMaintenanceMarginRatio();
  if (f.length > 0) {
    writer.writeString(
      12,
      f
    );
  }
  f = message.getMinPriceTickSize();
  if (f.length > 0) {
    writer.writeString(
      13,
      f
    );
  }
  f = message.getMinQuantityTickSize();
  if (f.length > 0) {
    writer.writeString(
      14,
      f
    );
  }
};


/**
 * optional string sender = 1;
 * @return {string}
 */
proto.injective.exchange.v1beta1.MsgInstantExpiryFuturesMarketLaunch.prototype.getSender = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.injective.exchange.v1beta1.MsgInstantExpiryFuturesMarketLaunch} returns this
 */
proto.injective.exchange.v1beta1.MsgInstantExpiryFuturesMarketLaunch.prototype.setSender = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string ticker = 2;
 * @return {string}
 */
proto.injective.exchange.v1beta1.MsgInstantExpiryFuturesMarketLaunch.prototype.getTicker = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.injective.exchange.v1beta1.MsgInstantExpiryFuturesMarketLaunch} returns this
 */
proto.injective.exchange.v1beta1.MsgInstantExpiryFuturesMarketLaunch.prototype.setTicker = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string quote_denom = 3;
 * @return {string}
 */
proto.injective.exchange.v1beta1.MsgInstantExpiryFuturesMarketLaunch.prototype.getQuoteDenom = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.injective.exchange.v1beta1.MsgInstantExpiryFuturesMarketLaunch} returns this
 */
proto.injective.exchange.v1beta1.MsgInstantExpiryFuturesMarketLaunch.prototype.setQuoteDenom = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string oracle_base = 4;
 * @return {string}
 */
proto.injective.exchange.v1beta1.MsgInstantExpiryFuturesMarketLaunch.prototype.getOracleBase = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.injective.exchange.v1beta1.MsgInstantExpiryFuturesMarketLaunch} returns this
 */
proto.injective.exchange.v1beta1.MsgInstantExpiryFuturesMarketLaunch.prototype.setOracleBase = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string oracle_quote = 5;
 * @return {string}
 */
proto.injective.exchange.v1beta1.MsgInstantExpiryFuturesMarketLaunch.prototype.getOracleQuote = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.injective.exchange.v1beta1.MsgInstantExpiryFuturesMarketLaunch} returns this
 */
proto.injective.exchange.v1beta1.MsgInstantExpiryFuturesMarketLaunch.prototype.setOracleQuote = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional injective.oracle.v1beta1.OracleType oracle_type = 6;
 * @return {!proto.injective.oracle.v1beta1.OracleType}
 */
proto.injective.exchange.v1beta1.MsgInstantExpiryFuturesMarketLaunch.prototype.getOracleType = function() {
  return /** @type {!proto.injective.oracle.v1beta1.OracleType} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {!proto.injective.oracle.v1beta1.OracleType} value
 * @return {!proto.injective.exchange.v1beta1.MsgInstantExpiryFuturesMarketLaunch} returns this
 */
proto.injective.exchange.v1beta1.MsgInstantExpiryFuturesMarketLaunch.prototype.setOracleType = function(value) {
  return jspb.Message.setProto3EnumField(this, 6, value);
};


/**
 * optional uint32 oracle_scale_factor = 7;
 * @return {number}
 */
proto.injective.exchange.v1beta1.MsgInstantExpiryFuturesMarketLaunch.prototype.getOracleScaleFactor = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.injective.exchange.v1beta1.MsgInstantExpiryFuturesMarketLaunch} returns this
 */
proto.injective.exchange.v1beta1.MsgInstantExpiryFuturesMarketLaunch.prototype.setOracleScaleFactor = function(value) {
  return jspb.Message.setProto3IntField(this, 7, value);
};


/**
 * optional int64 expiry = 8;
 * @return {number}
 */
proto.injective.exchange.v1beta1.MsgInstantExpiryFuturesMarketLaunch.prototype.getExpiry = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {number} value
 * @return {!proto.injective.exchange.v1beta1.MsgInstantExpiryFuturesMarketLaunch} returns this
 */
proto.injective.exchange.v1beta1.MsgInstantExpiryFuturesMarketLaunch.prototype.setExpiry = function(value) {
  return jspb.Message.setProto3IntField(this, 8, value);
};


/**
 * optional string maker_fee_rate = 9;
 * @return {string}
 */
proto.injective.exchange.v1beta1.MsgInstantExpiryFuturesMarketLaunch.prototype.getMakerFeeRate = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.injective.exchange.v1beta1.MsgInstantExpiryFuturesMarketLaunch} returns this
 */
proto.injective.exchange.v1beta1.MsgInstantExpiryFuturesMarketLaunch.prototype.setMakerFeeRate = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * optional string taker_fee_rate = 10;
 * @return {string}
 */
proto.injective.exchange.v1beta1.MsgInstantExpiryFuturesMarketLaunch.prototype.getTakerFeeRate = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/**
 * @param {string} value
 * @return {!proto.injective.exchange.v1beta1.MsgInstantExpiryFuturesMarketLaunch} returns this
 */
proto.injective.exchange.v1beta1.MsgInstantExpiryFuturesMarketLaunch.prototype.setTakerFeeRate = function(value) {
  return jspb.Message.setProto3StringField(this, 10, value);
};


/**
 * optional string initial_margin_ratio = 11;
 * @return {string}
 */
proto.injective.exchange.v1beta1.MsgInstantExpiryFuturesMarketLaunch.prototype.getInitialMarginRatio = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 11, ""));
};


/**
 * @param {string} value
 * @return {!proto.injective.exchange.v1beta1.MsgInstantExpiryFuturesMarketLaunch} returns this
 */
proto.injective.exchange.v1beta1.MsgInstantExpiryFuturesMarketLaunch.prototype.setInitialMarginRatio = function(value) {
  return jspb.Message.setProto3StringField(this, 11, value);
};


/**
 * optional string maintenance_margin_ratio = 12;
 * @return {string}
 */
proto.injective.exchange.v1beta1.MsgInstantExpiryFuturesMarketLaunch.prototype.getMaintenanceMarginRatio = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 12, ""));
};


/**
 * @param {string} value
 * @return {!proto.injective.exchange.v1beta1.MsgInstantExpiryFuturesMarketLaunch} returns this
 */
proto.injective.exchange.v1beta1.MsgInstantExpiryFuturesMarketLaunch.prototype.setMaintenanceMarginRatio = function(value) {
  return jspb.Message.setProto3StringField(this, 12, value);
};


/**
 * optional string min_price_tick_size = 13;
 * @return {string}
 */
proto.injective.exchange.v1beta1.MsgInstantExpiryFuturesMarketLaunch.prototype.getMinPriceTickSize = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 13, ""));
};


/**
 * @param {string} value
 * @return {!proto.injective.exchange.v1beta1.MsgInstantExpiryFuturesMarketLaunch} returns this
 */
proto.injective.exchange.v1beta1.MsgInstantExpiryFuturesMarketLaunch.prototype.setMinPriceTickSize = function(value) {
  return jspb.Message.setProto3StringField(this, 13, value);
};


/**
 * optional string min_quantity_tick_size = 14;
 * @return {string}
 */
proto.injective.exchange.v1beta1.MsgInstantExpiryFuturesMarketLaunch.prototype.getMinQuantityTickSize = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 14, ""));
};


/**
 * @param {string} value
 * @return {!proto.injective.exchange.v1beta1.MsgInstantExpiryFuturesMarketLaunch} returns this
 */
proto.injective.exchange.v1beta1.MsgInstantExpiryFuturesMarketLaunch.prototype.setMinQuantityTickSize = function(value) {
  return jspb.Message.setProto3StringField(this, 14, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.injective.exchange.v1beta1.MsgInstantExpiryFuturesMarketLaunchResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.injective.exchange.v1beta1.MsgInstantExpiryFuturesMarketLaunchResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.injective.exchange.v1beta1.MsgInstantExpiryFuturesMarketLaunchResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.injective.exchange.v1beta1.MsgInstantExpiryFuturesMarketLaunchResponse.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.injective.exchange.v1beta1.MsgInstantExpiryFuturesMarketLaunchResponse}
 */
proto.injective.exchange.v1beta1.MsgInstantExpiryFuturesMarketLaunchResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.injective.exchange.v1beta1.MsgInstantExpiryFuturesMarketLaunchResponse;
  return proto.injective.exchange.v1beta1.MsgInstantExpiryFuturesMarketLaunchResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.injective.exchange.v1beta1.MsgInstantExpiryFuturesMarketLaunchResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.injective.exchange.v1beta1.MsgInstantExpiryFuturesMarketLaunchResponse}
 */
proto.injective.exchange.v1beta1.MsgInstantExpiryFuturesMarketLaunchResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.injective.exchange.v1beta1.MsgInstantExpiryFuturesMarketLaunchResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.injective.exchange.v1beta1.MsgInstantExpiryFuturesMarketLaunchResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.injective.exchange.v1beta1.MsgInstantExpiryFuturesMarketLaunchResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.injective.exchange.v1beta1.MsgInstantExpiryFuturesMarketLaunchResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.injective.exchange.v1beta1.MsgCreateSpotMarketOrder.prototype.toObject = function(opt_includeInstance) {
  return proto.injective.exchange.v1beta1.MsgCreateSpotMarketOrder.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.injective.exchange.v1beta1.MsgCreateSpotMarketOrder} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.injective.exchange.v1beta1.MsgCreateSpotMarketOrder.toObject = function(includeInstance, msg) {
  var f, obj = {
    sender: jspb.Message.getFieldWithDefault(msg, 1, ""),
    order: (f = msg.getOrder()) && injective_exchange_v1beta1_exchange_pb.SpotOrder.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.injective.exchange.v1beta1.MsgCreateSpotMarketOrder}
 */
proto.injective.exchange.v1beta1.MsgCreateSpotMarketOrder.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.injective.exchange.v1beta1.MsgCreateSpotMarketOrder;
  return proto.injective.exchange.v1beta1.MsgCreateSpotMarketOrder.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.injective.exchange.v1beta1.MsgCreateSpotMarketOrder} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.injective.exchange.v1beta1.MsgCreateSpotMarketOrder}
 */
proto.injective.exchange.v1beta1.MsgCreateSpotMarketOrder.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setSender(value);
      break;
    case 2:
      var value = new injective_exchange_v1beta1_exchange_pb.SpotOrder;
      reader.readMessage(value,injective_exchange_v1beta1_exchange_pb.SpotOrder.deserializeBinaryFromReader);
      msg.setOrder(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.injective.exchange.v1beta1.MsgCreateSpotMarketOrder.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.injective.exchange.v1beta1.MsgCreateSpotMarketOrder.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.injective.exchange.v1beta1.MsgCreateSpotMarketOrder} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.injective.exchange.v1beta1.MsgCreateSpotMarketOrder.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSender();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getOrder();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      injective_exchange_v1beta1_exchange_pb.SpotOrder.serializeBinaryToWriter
    );
  }
};


/**
 * optional string sender = 1;
 * @return {string}
 */
proto.injective.exchange.v1beta1.MsgCreateSpotMarketOrder.prototype.getSender = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.injective.exchange.v1beta1.MsgCreateSpotMarketOrder} returns this
 */
proto.injective.exchange.v1beta1.MsgCreateSpotMarketOrder.prototype.setSender = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional SpotOrder order = 2;
 * @return {?proto.injective.exchange.v1beta1.SpotOrder}
 */
proto.injective.exchange.v1beta1.MsgCreateSpotMarketOrder.prototype.getOrder = function() {
  return /** @type{?proto.injective.exchange.v1beta1.SpotOrder} */ (
    jspb.Message.getWrapperField(this, injective_exchange_v1beta1_exchange_pb.SpotOrder, 2));
};


/**
 * @param {?proto.injective.exchange.v1beta1.SpotOrder|undefined} value
 * @return {!proto.injective.exchange.v1beta1.MsgCreateSpotMarketOrder} returns this
*/
proto.injective.exchange.v1beta1.MsgCreateSpotMarketOrder.prototype.setOrder = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.injective.exchange.v1beta1.MsgCreateSpotMarketOrder} returns this
 */
proto.injective.exchange.v1beta1.MsgCreateSpotMarketOrder.prototype.clearOrder = function() {
  return this.setOrder(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.injective.exchange.v1beta1.MsgCreateSpotMarketOrder.prototype.hasOrder = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.injective.exchange.v1beta1.MsgCreateSpotMarketOrderResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.injective.exchange.v1beta1.MsgCreateSpotMarketOrderResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.injective.exchange.v1beta1.MsgCreateSpotMarketOrderResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.injective.exchange.v1beta1.MsgCreateSpotMarketOrderResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    orderHash: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.injective.exchange.v1beta1.MsgCreateSpotMarketOrderResponse}
 */
proto.injective.exchange.v1beta1.MsgCreateSpotMarketOrderResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.injective.exchange.v1beta1.MsgCreateSpotMarketOrderResponse;
  return proto.injective.exchange.v1beta1.MsgCreateSpotMarketOrderResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.injective.exchange.v1beta1.MsgCreateSpotMarketOrderResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.injective.exchange.v1beta1.MsgCreateSpotMarketOrderResponse}
 */
proto.injective.exchange.v1beta1.MsgCreateSpotMarketOrderResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setOrderHash(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.injective.exchange.v1beta1.MsgCreateSpotMarketOrderResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.injective.exchange.v1beta1.MsgCreateSpotMarketOrderResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.injective.exchange.v1beta1.MsgCreateSpotMarketOrderResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.injective.exchange.v1beta1.MsgCreateSpotMarketOrderResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOrderHash();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string order_hash = 1;
 * @return {string}
 */
proto.injective.exchange.v1beta1.MsgCreateSpotMarketOrderResponse.prototype.getOrderHash = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.injective.exchange.v1beta1.MsgCreateSpotMarketOrderResponse} returns this
 */
proto.injective.exchange.v1beta1.MsgCreateSpotMarketOrderResponse.prototype.setOrderHash = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.injective.exchange.v1beta1.MsgCreateDerivativeLimitOrder.prototype.toObject = function(opt_includeInstance) {
  return proto.injective.exchange.v1beta1.MsgCreateDerivativeLimitOrder.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.injective.exchange.v1beta1.MsgCreateDerivativeLimitOrder} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.injective.exchange.v1beta1.MsgCreateDerivativeLimitOrder.toObject = function(includeInstance, msg) {
  var f, obj = {
    sender: jspb.Message.getFieldWithDefault(msg, 1, ""),
    order: (f = msg.getOrder()) && injective_exchange_v1beta1_exchange_pb.DerivativeOrder.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.injective.exchange.v1beta1.MsgCreateDerivativeLimitOrder}
 */
proto.injective.exchange.v1beta1.MsgCreateDerivativeLimitOrder.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.injective.exchange.v1beta1.MsgCreateDerivativeLimitOrder;
  return proto.injective.exchange.v1beta1.MsgCreateDerivativeLimitOrder.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.injective.exchange.v1beta1.MsgCreateDerivativeLimitOrder} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.injective.exchange.v1beta1.MsgCreateDerivativeLimitOrder}
 */
proto.injective.exchange.v1beta1.MsgCreateDerivativeLimitOrder.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setSender(value);
      break;
    case 2:
      var value = new injective_exchange_v1beta1_exchange_pb.DerivativeOrder;
      reader.readMessage(value,injective_exchange_v1beta1_exchange_pb.DerivativeOrder.deserializeBinaryFromReader);
      msg.setOrder(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.injective.exchange.v1beta1.MsgCreateDerivativeLimitOrder.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.injective.exchange.v1beta1.MsgCreateDerivativeLimitOrder.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.injective.exchange.v1beta1.MsgCreateDerivativeLimitOrder} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.injective.exchange.v1beta1.MsgCreateDerivativeLimitOrder.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSender();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getOrder();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      injective_exchange_v1beta1_exchange_pb.DerivativeOrder.serializeBinaryToWriter
    );
  }
};


/**
 * optional string sender = 1;
 * @return {string}
 */
proto.injective.exchange.v1beta1.MsgCreateDerivativeLimitOrder.prototype.getSender = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.injective.exchange.v1beta1.MsgCreateDerivativeLimitOrder} returns this
 */
proto.injective.exchange.v1beta1.MsgCreateDerivativeLimitOrder.prototype.setSender = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional DerivativeOrder order = 2;
 * @return {?proto.injective.exchange.v1beta1.DerivativeOrder}
 */
proto.injective.exchange.v1beta1.MsgCreateDerivativeLimitOrder.prototype.getOrder = function() {
  return /** @type{?proto.injective.exchange.v1beta1.DerivativeOrder} */ (
    jspb.Message.getWrapperField(this, injective_exchange_v1beta1_exchange_pb.DerivativeOrder, 2));
};


/**
 * @param {?proto.injective.exchange.v1beta1.DerivativeOrder|undefined} value
 * @return {!proto.injective.exchange.v1beta1.MsgCreateDerivativeLimitOrder} returns this
*/
proto.injective.exchange.v1beta1.MsgCreateDerivativeLimitOrder.prototype.setOrder = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.injective.exchange.v1beta1.MsgCreateDerivativeLimitOrder} returns this
 */
proto.injective.exchange.v1beta1.MsgCreateDerivativeLimitOrder.prototype.clearOrder = function() {
  return this.setOrder(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.injective.exchange.v1beta1.MsgCreateDerivativeLimitOrder.prototype.hasOrder = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.injective.exchange.v1beta1.MsgCreateDerivativeLimitOrderResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.injective.exchange.v1beta1.MsgCreateDerivativeLimitOrderResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.injective.exchange.v1beta1.MsgCreateDerivativeLimitOrderResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.injective.exchange.v1beta1.MsgCreateDerivativeLimitOrderResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    orderHash: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.injective.exchange.v1beta1.MsgCreateDerivativeLimitOrderResponse}
 */
proto.injective.exchange.v1beta1.MsgCreateDerivativeLimitOrderResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.injective.exchange.v1beta1.MsgCreateDerivativeLimitOrderResponse;
  return proto.injective.exchange.v1beta1.MsgCreateDerivativeLimitOrderResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.injective.exchange.v1beta1.MsgCreateDerivativeLimitOrderResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.injective.exchange.v1beta1.MsgCreateDerivativeLimitOrderResponse}
 */
proto.injective.exchange.v1beta1.MsgCreateDerivativeLimitOrderResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setOrderHash(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.injective.exchange.v1beta1.MsgCreateDerivativeLimitOrderResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.injective.exchange.v1beta1.MsgCreateDerivativeLimitOrderResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.injective.exchange.v1beta1.MsgCreateDerivativeLimitOrderResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.injective.exchange.v1beta1.MsgCreateDerivativeLimitOrderResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOrderHash();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string order_hash = 1;
 * @return {string}
 */
proto.injective.exchange.v1beta1.MsgCreateDerivativeLimitOrderResponse.prototype.getOrderHash = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.injective.exchange.v1beta1.MsgCreateDerivativeLimitOrderResponse} returns this
 */
proto.injective.exchange.v1beta1.MsgCreateDerivativeLimitOrderResponse.prototype.setOrderHash = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.injective.exchange.v1beta1.MsgBatchCreateDerivativeLimitOrders.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.injective.exchange.v1beta1.MsgBatchCreateDerivativeLimitOrders.prototype.toObject = function(opt_includeInstance) {
  return proto.injective.exchange.v1beta1.MsgBatchCreateDerivativeLimitOrders.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.injective.exchange.v1beta1.MsgBatchCreateDerivativeLimitOrders} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.injective.exchange.v1beta1.MsgBatchCreateDerivativeLimitOrders.toObject = function(includeInstance, msg) {
  var f, obj = {
    sender: jspb.Message.getFieldWithDefault(msg, 1, ""),
    ordersList: jspb.Message.toObjectList(msg.getOrdersList(),
    injective_exchange_v1beta1_exchange_pb.DerivativeOrder.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.injective.exchange.v1beta1.MsgBatchCreateDerivativeLimitOrders}
 */
proto.injective.exchange.v1beta1.MsgBatchCreateDerivativeLimitOrders.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.injective.exchange.v1beta1.MsgBatchCreateDerivativeLimitOrders;
  return proto.injective.exchange.v1beta1.MsgBatchCreateDerivativeLimitOrders.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.injective.exchange.v1beta1.MsgBatchCreateDerivativeLimitOrders} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.injective.exchange.v1beta1.MsgBatchCreateDerivativeLimitOrders}
 */
proto.injective.exchange.v1beta1.MsgBatchCreateDerivativeLimitOrders.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setSender(value);
      break;
    case 2:
      var value = new injective_exchange_v1beta1_exchange_pb.DerivativeOrder;
      reader.readMessage(value,injective_exchange_v1beta1_exchange_pb.DerivativeOrder.deserializeBinaryFromReader);
      msg.addOrders(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.injective.exchange.v1beta1.MsgBatchCreateDerivativeLimitOrders.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.injective.exchange.v1beta1.MsgBatchCreateDerivativeLimitOrders.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.injective.exchange.v1beta1.MsgBatchCreateDerivativeLimitOrders} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.injective.exchange.v1beta1.MsgBatchCreateDerivativeLimitOrders.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSender();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getOrdersList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      injective_exchange_v1beta1_exchange_pb.DerivativeOrder.serializeBinaryToWriter
    );
  }
};


/**
 * optional string sender = 1;
 * @return {string}
 */
proto.injective.exchange.v1beta1.MsgBatchCreateDerivativeLimitOrders.prototype.getSender = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.injective.exchange.v1beta1.MsgBatchCreateDerivativeLimitOrders} returns this
 */
proto.injective.exchange.v1beta1.MsgBatchCreateDerivativeLimitOrders.prototype.setSender = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated DerivativeOrder orders = 2;
 * @return {!Array<!proto.injective.exchange.v1beta1.DerivativeOrder>}
 */
proto.injective.exchange.v1beta1.MsgBatchCreateDerivativeLimitOrders.prototype.getOrdersList = function() {
  return /** @type{!Array<!proto.injective.exchange.v1beta1.DerivativeOrder>} */ (
    jspb.Message.getRepeatedWrapperField(this, injective_exchange_v1beta1_exchange_pb.DerivativeOrder, 2));
};


/**
 * @param {!Array<!proto.injective.exchange.v1beta1.DerivativeOrder>} value
 * @return {!proto.injective.exchange.v1beta1.MsgBatchCreateDerivativeLimitOrders} returns this
*/
proto.injective.exchange.v1beta1.MsgBatchCreateDerivativeLimitOrders.prototype.setOrdersList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.injective.exchange.v1beta1.DerivativeOrder=} opt_value
 * @param {number=} opt_index
 * @return {!proto.injective.exchange.v1beta1.DerivativeOrder}
 */
proto.injective.exchange.v1beta1.MsgBatchCreateDerivativeLimitOrders.prototype.addOrders = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.injective.exchange.v1beta1.DerivativeOrder, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.injective.exchange.v1beta1.MsgBatchCreateDerivativeLimitOrders} returns this
 */
proto.injective.exchange.v1beta1.MsgBatchCreateDerivativeLimitOrders.prototype.clearOrdersList = function() {
  return this.setOrdersList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.injective.exchange.v1beta1.MsgBatchCreateDerivativeLimitOrdersResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.injective.exchange.v1beta1.MsgBatchCreateDerivativeLimitOrdersResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.injective.exchange.v1beta1.MsgBatchCreateDerivativeLimitOrdersResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.injective.exchange.v1beta1.MsgBatchCreateDerivativeLimitOrdersResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.injective.exchange.v1beta1.MsgBatchCreateDerivativeLimitOrdersResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    orderHashesList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.injective.exchange.v1beta1.MsgBatchCreateDerivativeLimitOrdersResponse}
 */
proto.injective.exchange.v1beta1.MsgBatchCreateDerivativeLimitOrdersResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.injective.exchange.v1beta1.MsgBatchCreateDerivativeLimitOrdersResponse;
  return proto.injective.exchange.v1beta1.MsgBatchCreateDerivativeLimitOrdersResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.injective.exchange.v1beta1.MsgBatchCreateDerivativeLimitOrdersResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.injective.exchange.v1beta1.MsgBatchCreateDerivativeLimitOrdersResponse}
 */
proto.injective.exchange.v1beta1.MsgBatchCreateDerivativeLimitOrdersResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.addOrderHashes(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.injective.exchange.v1beta1.MsgBatchCreateDerivativeLimitOrdersResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.injective.exchange.v1beta1.MsgBatchCreateDerivativeLimitOrdersResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.injective.exchange.v1beta1.MsgBatchCreateDerivativeLimitOrdersResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.injective.exchange.v1beta1.MsgBatchCreateDerivativeLimitOrdersResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOrderHashesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
};


/**
 * repeated string order_hashes = 1;
 * @return {!Array<string>}
 */
proto.injective.exchange.v1beta1.MsgBatchCreateDerivativeLimitOrdersResponse.prototype.getOrderHashesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.injective.exchange.v1beta1.MsgBatchCreateDerivativeLimitOrdersResponse} returns this
 */
proto.injective.exchange.v1beta1.MsgBatchCreateDerivativeLimitOrdersResponse.prototype.setOrderHashesList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.injective.exchange.v1beta1.MsgBatchCreateDerivativeLimitOrdersResponse} returns this
 */
proto.injective.exchange.v1beta1.MsgBatchCreateDerivativeLimitOrdersResponse.prototype.addOrderHashes = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.injective.exchange.v1beta1.MsgBatchCreateDerivativeLimitOrdersResponse} returns this
 */
proto.injective.exchange.v1beta1.MsgBatchCreateDerivativeLimitOrdersResponse.prototype.clearOrderHashesList = function() {
  return this.setOrderHashesList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.injective.exchange.v1beta1.MsgCancelSpotOrder.prototype.toObject = function(opt_includeInstance) {
  return proto.injective.exchange.v1beta1.MsgCancelSpotOrder.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.injective.exchange.v1beta1.MsgCancelSpotOrder} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.injective.exchange.v1beta1.MsgCancelSpotOrder.toObject = function(includeInstance, msg) {
  var f, obj = {
    sender: jspb.Message.getFieldWithDefault(msg, 1, ""),
    marketId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    subaccountId: jspb.Message.getFieldWithDefault(msg, 3, ""),
    orderHash: jspb.Message.getFieldWithDefault(msg, 4, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.injective.exchange.v1beta1.MsgCancelSpotOrder}
 */
proto.injective.exchange.v1beta1.MsgCancelSpotOrder.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.injective.exchange.v1beta1.MsgCancelSpotOrder;
  return proto.injective.exchange.v1beta1.MsgCancelSpotOrder.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.injective.exchange.v1beta1.MsgCancelSpotOrder} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.injective.exchange.v1beta1.MsgCancelSpotOrder}
 */
proto.injective.exchange.v1beta1.MsgCancelSpotOrder.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setSender(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setMarketId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setSubaccountId(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setOrderHash(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.injective.exchange.v1beta1.MsgCancelSpotOrder.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.injective.exchange.v1beta1.MsgCancelSpotOrder.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.injective.exchange.v1beta1.MsgCancelSpotOrder} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.injective.exchange.v1beta1.MsgCancelSpotOrder.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSender();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getMarketId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getSubaccountId();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getOrderHash();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional string sender = 1;
 * @return {string}
 */
proto.injective.exchange.v1beta1.MsgCancelSpotOrder.prototype.getSender = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.injective.exchange.v1beta1.MsgCancelSpotOrder} returns this
 */
proto.injective.exchange.v1beta1.MsgCancelSpotOrder.prototype.setSender = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string market_id = 2;
 * @return {string}
 */
proto.injective.exchange.v1beta1.MsgCancelSpotOrder.prototype.getMarketId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.injective.exchange.v1beta1.MsgCancelSpotOrder} returns this
 */
proto.injective.exchange.v1beta1.MsgCancelSpotOrder.prototype.setMarketId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string subaccount_id = 3;
 * @return {string}
 */
proto.injective.exchange.v1beta1.MsgCancelSpotOrder.prototype.getSubaccountId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.injective.exchange.v1beta1.MsgCancelSpotOrder} returns this
 */
proto.injective.exchange.v1beta1.MsgCancelSpotOrder.prototype.setSubaccountId = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string order_hash = 4;
 * @return {string}
 */
proto.injective.exchange.v1beta1.MsgCancelSpotOrder.prototype.getOrderHash = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.injective.exchange.v1beta1.MsgCancelSpotOrder} returns this
 */
proto.injective.exchange.v1beta1.MsgCancelSpotOrder.prototype.setOrderHash = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.injective.exchange.v1beta1.MsgCancelSpotOrderResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.injective.exchange.v1beta1.MsgCancelSpotOrderResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.injective.exchange.v1beta1.MsgCancelSpotOrderResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.injective.exchange.v1beta1.MsgCancelSpotOrderResponse.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.injective.exchange.v1beta1.MsgCancelSpotOrderResponse}
 */
proto.injective.exchange.v1beta1.MsgCancelSpotOrderResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.injective.exchange.v1beta1.MsgCancelSpotOrderResponse;
  return proto.injective.exchange.v1beta1.MsgCancelSpotOrderResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.injective.exchange.v1beta1.MsgCancelSpotOrderResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.injective.exchange.v1beta1.MsgCancelSpotOrderResponse}
 */
proto.injective.exchange.v1beta1.MsgCancelSpotOrderResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.injective.exchange.v1beta1.MsgCancelSpotOrderResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.injective.exchange.v1beta1.MsgCancelSpotOrderResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.injective.exchange.v1beta1.MsgCancelSpotOrderResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.injective.exchange.v1beta1.MsgCancelSpotOrderResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.injective.exchange.v1beta1.MsgBatchCancelSpotOrders.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.injective.exchange.v1beta1.MsgBatchCancelSpotOrders.prototype.toObject = function(opt_includeInstance) {
  return proto.injective.exchange.v1beta1.MsgBatchCancelSpotOrders.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.injective.exchange.v1beta1.MsgBatchCancelSpotOrders} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.injective.exchange.v1beta1.MsgBatchCancelSpotOrders.toObject = function(includeInstance, msg) {
  var f, obj = {
    sender: jspb.Message.getFieldWithDefault(msg, 1, ""),
    dataList: jspb.Message.toObjectList(msg.getDataList(),
    proto.injective.exchange.v1beta1.OrderData.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.injective.exchange.v1beta1.MsgBatchCancelSpotOrders}
 */
proto.injective.exchange.v1beta1.MsgBatchCancelSpotOrders.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.injective.exchange.v1beta1.MsgBatchCancelSpotOrders;
  return proto.injective.exchange.v1beta1.MsgBatchCancelSpotOrders.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.injective.exchange.v1beta1.MsgBatchCancelSpotOrders} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.injective.exchange.v1beta1.MsgBatchCancelSpotOrders}
 */
proto.injective.exchange.v1beta1.MsgBatchCancelSpotOrders.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setSender(value);
      break;
    case 2:
      var value = new proto.injective.exchange.v1beta1.OrderData;
      reader.readMessage(value,proto.injective.exchange.v1beta1.OrderData.deserializeBinaryFromReader);
      msg.addData(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.injective.exchange.v1beta1.MsgBatchCancelSpotOrders.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.injective.exchange.v1beta1.MsgBatchCancelSpotOrders.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.injective.exchange.v1beta1.MsgBatchCancelSpotOrders} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.injective.exchange.v1beta1.MsgBatchCancelSpotOrders.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSender();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getDataList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.injective.exchange.v1beta1.OrderData.serializeBinaryToWriter
    );
  }
};


/**
 * optional string sender = 1;
 * @return {string}
 */
proto.injective.exchange.v1beta1.MsgBatchCancelSpotOrders.prototype.getSender = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.injective.exchange.v1beta1.MsgBatchCancelSpotOrders} returns this
 */
proto.injective.exchange.v1beta1.MsgBatchCancelSpotOrders.prototype.setSender = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated OrderData data = 2;
 * @return {!Array<!proto.injective.exchange.v1beta1.OrderData>}
 */
proto.injective.exchange.v1beta1.MsgBatchCancelSpotOrders.prototype.getDataList = function() {
  return /** @type{!Array<!proto.injective.exchange.v1beta1.OrderData>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.injective.exchange.v1beta1.OrderData, 2));
};


/**
 * @param {!Array<!proto.injective.exchange.v1beta1.OrderData>} value
 * @return {!proto.injective.exchange.v1beta1.MsgBatchCancelSpotOrders} returns this
*/
proto.injective.exchange.v1beta1.MsgBatchCancelSpotOrders.prototype.setDataList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.injective.exchange.v1beta1.OrderData=} opt_value
 * @param {number=} opt_index
 * @return {!proto.injective.exchange.v1beta1.OrderData}
 */
proto.injective.exchange.v1beta1.MsgBatchCancelSpotOrders.prototype.addData = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.injective.exchange.v1beta1.OrderData, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.injective.exchange.v1beta1.MsgBatchCancelSpotOrders} returns this
 */
proto.injective.exchange.v1beta1.MsgBatchCancelSpotOrders.prototype.clearDataList = function() {
  return this.setDataList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.injective.exchange.v1beta1.MsgBatchCancelSpotOrdersResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.injective.exchange.v1beta1.MsgBatchCancelSpotOrdersResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.injective.exchange.v1beta1.MsgBatchCancelSpotOrdersResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.injective.exchange.v1beta1.MsgBatchCancelSpotOrdersResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.injective.exchange.v1beta1.MsgBatchCancelSpotOrdersResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    successList: (f = jspb.Message.getRepeatedBooleanField(msg, 1)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.injective.exchange.v1beta1.MsgBatchCancelSpotOrdersResponse}
 */
proto.injective.exchange.v1beta1.MsgBatchCancelSpotOrdersResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.injective.exchange.v1beta1.MsgBatchCancelSpotOrdersResponse;
  return proto.injective.exchange.v1beta1.MsgBatchCancelSpotOrdersResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.injective.exchange.v1beta1.MsgBatchCancelSpotOrdersResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.injective.exchange.v1beta1.MsgBatchCancelSpotOrdersResponse}
 */
proto.injective.exchange.v1beta1.MsgBatchCancelSpotOrdersResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var values = /** @type {!Array<boolean>} */ (reader.isDelimited() ? reader.readPackedBool() : [reader.readBool()]);
      for (var i = 0; i < values.length; i++) {
        msg.addSuccess(values[i]);
      }
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.injective.exchange.v1beta1.MsgBatchCancelSpotOrdersResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.injective.exchange.v1beta1.MsgBatchCancelSpotOrdersResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.injective.exchange.v1beta1.MsgBatchCancelSpotOrdersResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.injective.exchange.v1beta1.MsgBatchCancelSpotOrdersResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSuccessList();
  if (f.length > 0) {
    writer.writePackedBool(
      1,
      f
    );
  }
};


/**
 * repeated bool success = 1;
 * @return {!Array<boolean>}
 */
proto.injective.exchange.v1beta1.MsgBatchCancelSpotOrdersResponse.prototype.getSuccessList = function() {
  return /** @type {!Array<boolean>} */ (jspb.Message.getRepeatedBooleanField(this, 1));
};


/**
 * @param {!Array<boolean>} value
 * @return {!proto.injective.exchange.v1beta1.MsgBatchCancelSpotOrdersResponse} returns this
 */
proto.injective.exchange.v1beta1.MsgBatchCancelSpotOrdersResponse.prototype.setSuccessList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {boolean} value
 * @param {number=} opt_index
 * @return {!proto.injective.exchange.v1beta1.MsgBatchCancelSpotOrdersResponse} returns this
 */
proto.injective.exchange.v1beta1.MsgBatchCancelSpotOrdersResponse.prototype.addSuccess = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.injective.exchange.v1beta1.MsgBatchCancelSpotOrdersResponse} returns this
 */
proto.injective.exchange.v1beta1.MsgBatchCancelSpotOrdersResponse.prototype.clearSuccessList = function() {
  return this.setSuccessList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.injective.exchange.v1beta1.MsgCreateDerivativeMarketOrder.prototype.toObject = function(opt_includeInstance) {
  return proto.injective.exchange.v1beta1.MsgCreateDerivativeMarketOrder.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.injective.exchange.v1beta1.MsgCreateDerivativeMarketOrder} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.injective.exchange.v1beta1.MsgCreateDerivativeMarketOrder.toObject = function(includeInstance, msg) {
  var f, obj = {
    sender: jspb.Message.getFieldWithDefault(msg, 1, ""),
    order: (f = msg.getOrder()) && injective_exchange_v1beta1_exchange_pb.DerivativeOrder.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.injective.exchange.v1beta1.MsgCreateDerivativeMarketOrder}
 */
proto.injective.exchange.v1beta1.MsgCreateDerivativeMarketOrder.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.injective.exchange.v1beta1.MsgCreateDerivativeMarketOrder;
  return proto.injective.exchange.v1beta1.MsgCreateDerivativeMarketOrder.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.injective.exchange.v1beta1.MsgCreateDerivativeMarketOrder} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.injective.exchange.v1beta1.MsgCreateDerivativeMarketOrder}
 */
proto.injective.exchange.v1beta1.MsgCreateDerivativeMarketOrder.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setSender(value);
      break;
    case 2:
      var value = new injective_exchange_v1beta1_exchange_pb.DerivativeOrder;
      reader.readMessage(value,injective_exchange_v1beta1_exchange_pb.DerivativeOrder.deserializeBinaryFromReader);
      msg.setOrder(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.injective.exchange.v1beta1.MsgCreateDerivativeMarketOrder.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.injective.exchange.v1beta1.MsgCreateDerivativeMarketOrder.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.injective.exchange.v1beta1.MsgCreateDerivativeMarketOrder} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.injective.exchange.v1beta1.MsgCreateDerivativeMarketOrder.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSender();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getOrder();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      injective_exchange_v1beta1_exchange_pb.DerivativeOrder.serializeBinaryToWriter
    );
  }
};


/**
 * optional string sender = 1;
 * @return {string}
 */
proto.injective.exchange.v1beta1.MsgCreateDerivativeMarketOrder.prototype.getSender = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.injective.exchange.v1beta1.MsgCreateDerivativeMarketOrder} returns this
 */
proto.injective.exchange.v1beta1.MsgCreateDerivativeMarketOrder.prototype.setSender = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional DerivativeOrder order = 2;
 * @return {?proto.injective.exchange.v1beta1.DerivativeOrder}
 */
proto.injective.exchange.v1beta1.MsgCreateDerivativeMarketOrder.prototype.getOrder = function() {
  return /** @type{?proto.injective.exchange.v1beta1.DerivativeOrder} */ (
    jspb.Message.getWrapperField(this, injective_exchange_v1beta1_exchange_pb.DerivativeOrder, 2));
};


/**
 * @param {?proto.injective.exchange.v1beta1.DerivativeOrder|undefined} value
 * @return {!proto.injective.exchange.v1beta1.MsgCreateDerivativeMarketOrder} returns this
*/
proto.injective.exchange.v1beta1.MsgCreateDerivativeMarketOrder.prototype.setOrder = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.injective.exchange.v1beta1.MsgCreateDerivativeMarketOrder} returns this
 */
proto.injective.exchange.v1beta1.MsgCreateDerivativeMarketOrder.prototype.clearOrder = function() {
  return this.setOrder(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.injective.exchange.v1beta1.MsgCreateDerivativeMarketOrder.prototype.hasOrder = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.injective.exchange.v1beta1.MsgCreateDerivativeMarketOrderResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.injective.exchange.v1beta1.MsgCreateDerivativeMarketOrderResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.injective.exchange.v1beta1.MsgCreateDerivativeMarketOrderResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.injective.exchange.v1beta1.MsgCreateDerivativeMarketOrderResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    orderHash: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.injective.exchange.v1beta1.MsgCreateDerivativeMarketOrderResponse}
 */
proto.injective.exchange.v1beta1.MsgCreateDerivativeMarketOrderResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.injective.exchange.v1beta1.MsgCreateDerivativeMarketOrderResponse;
  return proto.injective.exchange.v1beta1.MsgCreateDerivativeMarketOrderResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.injective.exchange.v1beta1.MsgCreateDerivativeMarketOrderResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.injective.exchange.v1beta1.MsgCreateDerivativeMarketOrderResponse}
 */
proto.injective.exchange.v1beta1.MsgCreateDerivativeMarketOrderResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setOrderHash(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.injective.exchange.v1beta1.MsgCreateDerivativeMarketOrderResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.injective.exchange.v1beta1.MsgCreateDerivativeMarketOrderResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.injective.exchange.v1beta1.MsgCreateDerivativeMarketOrderResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.injective.exchange.v1beta1.MsgCreateDerivativeMarketOrderResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOrderHash();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string order_hash = 1;
 * @return {string}
 */
proto.injective.exchange.v1beta1.MsgCreateDerivativeMarketOrderResponse.prototype.getOrderHash = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.injective.exchange.v1beta1.MsgCreateDerivativeMarketOrderResponse} returns this
 */
proto.injective.exchange.v1beta1.MsgCreateDerivativeMarketOrderResponse.prototype.setOrderHash = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.injective.exchange.v1beta1.MsgCancelDerivativeOrder.prototype.toObject = function(opt_includeInstance) {
  return proto.injective.exchange.v1beta1.MsgCancelDerivativeOrder.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.injective.exchange.v1beta1.MsgCancelDerivativeOrder} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.injective.exchange.v1beta1.MsgCancelDerivativeOrder.toObject = function(includeInstance, msg) {
  var f, obj = {
    sender: jspb.Message.getFieldWithDefault(msg, 1, ""),
    marketId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    subaccountId: jspb.Message.getFieldWithDefault(msg, 3, ""),
    orderHash: jspb.Message.getFieldWithDefault(msg, 4, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.injective.exchange.v1beta1.MsgCancelDerivativeOrder}
 */
proto.injective.exchange.v1beta1.MsgCancelDerivativeOrder.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.injective.exchange.v1beta1.MsgCancelDerivativeOrder;
  return proto.injective.exchange.v1beta1.MsgCancelDerivativeOrder.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.injective.exchange.v1beta1.MsgCancelDerivativeOrder} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.injective.exchange.v1beta1.MsgCancelDerivativeOrder}
 */
proto.injective.exchange.v1beta1.MsgCancelDerivativeOrder.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setSender(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setMarketId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setSubaccountId(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setOrderHash(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.injective.exchange.v1beta1.MsgCancelDerivativeOrder.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.injective.exchange.v1beta1.MsgCancelDerivativeOrder.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.injective.exchange.v1beta1.MsgCancelDerivativeOrder} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.injective.exchange.v1beta1.MsgCancelDerivativeOrder.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSender();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getMarketId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getSubaccountId();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getOrderHash();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional string sender = 1;
 * @return {string}
 */
proto.injective.exchange.v1beta1.MsgCancelDerivativeOrder.prototype.getSender = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.injective.exchange.v1beta1.MsgCancelDerivativeOrder} returns this
 */
proto.injective.exchange.v1beta1.MsgCancelDerivativeOrder.prototype.setSender = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string market_id = 2;
 * @return {string}
 */
proto.injective.exchange.v1beta1.MsgCancelDerivativeOrder.prototype.getMarketId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.injective.exchange.v1beta1.MsgCancelDerivativeOrder} returns this
 */
proto.injective.exchange.v1beta1.MsgCancelDerivativeOrder.prototype.setMarketId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string subaccount_id = 3;
 * @return {string}
 */
proto.injective.exchange.v1beta1.MsgCancelDerivativeOrder.prototype.getSubaccountId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.injective.exchange.v1beta1.MsgCancelDerivativeOrder} returns this
 */
proto.injective.exchange.v1beta1.MsgCancelDerivativeOrder.prototype.setSubaccountId = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string order_hash = 4;
 * @return {string}
 */
proto.injective.exchange.v1beta1.MsgCancelDerivativeOrder.prototype.getOrderHash = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.injective.exchange.v1beta1.MsgCancelDerivativeOrder} returns this
 */
proto.injective.exchange.v1beta1.MsgCancelDerivativeOrder.prototype.setOrderHash = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.injective.exchange.v1beta1.MsgCancelDerivativeOrderResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.injective.exchange.v1beta1.MsgCancelDerivativeOrderResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.injective.exchange.v1beta1.MsgCancelDerivativeOrderResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.injective.exchange.v1beta1.MsgCancelDerivativeOrderResponse.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.injective.exchange.v1beta1.MsgCancelDerivativeOrderResponse}
 */
proto.injective.exchange.v1beta1.MsgCancelDerivativeOrderResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.injective.exchange.v1beta1.MsgCancelDerivativeOrderResponse;
  return proto.injective.exchange.v1beta1.MsgCancelDerivativeOrderResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.injective.exchange.v1beta1.MsgCancelDerivativeOrderResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.injective.exchange.v1beta1.MsgCancelDerivativeOrderResponse}
 */
proto.injective.exchange.v1beta1.MsgCancelDerivativeOrderResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.injective.exchange.v1beta1.MsgCancelDerivativeOrderResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.injective.exchange.v1beta1.MsgCancelDerivativeOrderResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.injective.exchange.v1beta1.MsgCancelDerivativeOrderResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.injective.exchange.v1beta1.MsgCancelDerivativeOrderResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.injective.exchange.v1beta1.OrderData.prototype.toObject = function(opt_includeInstance) {
  return proto.injective.exchange.v1beta1.OrderData.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.injective.exchange.v1beta1.OrderData} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.injective.exchange.v1beta1.OrderData.toObject = function(includeInstance, msg) {
  var f, obj = {
    marketId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    subaccountId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    orderHash: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.injective.exchange.v1beta1.OrderData}
 */
proto.injective.exchange.v1beta1.OrderData.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.injective.exchange.v1beta1.OrderData;
  return proto.injective.exchange.v1beta1.OrderData.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.injective.exchange.v1beta1.OrderData} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.injective.exchange.v1beta1.OrderData}
 */
proto.injective.exchange.v1beta1.OrderData.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMarketId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setSubaccountId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setOrderHash(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.injective.exchange.v1beta1.OrderData.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.injective.exchange.v1beta1.OrderData.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.injective.exchange.v1beta1.OrderData} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.injective.exchange.v1beta1.OrderData.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMarketId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getSubaccountId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getOrderHash();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string market_id = 1;
 * @return {string}
 */
proto.injective.exchange.v1beta1.OrderData.prototype.getMarketId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.injective.exchange.v1beta1.OrderData} returns this
 */
proto.injective.exchange.v1beta1.OrderData.prototype.setMarketId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string subaccount_id = 2;
 * @return {string}
 */
proto.injective.exchange.v1beta1.OrderData.prototype.getSubaccountId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.injective.exchange.v1beta1.OrderData} returns this
 */
proto.injective.exchange.v1beta1.OrderData.prototype.setSubaccountId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string order_hash = 3;
 * @return {string}
 */
proto.injective.exchange.v1beta1.OrderData.prototype.getOrderHash = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.injective.exchange.v1beta1.OrderData} returns this
 */
proto.injective.exchange.v1beta1.OrderData.prototype.setOrderHash = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.injective.exchange.v1beta1.MsgBatchCancelDerivativeOrders.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.injective.exchange.v1beta1.MsgBatchCancelDerivativeOrders.prototype.toObject = function(opt_includeInstance) {
  return proto.injective.exchange.v1beta1.MsgBatchCancelDerivativeOrders.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.injective.exchange.v1beta1.MsgBatchCancelDerivativeOrders} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.injective.exchange.v1beta1.MsgBatchCancelDerivativeOrders.toObject = function(includeInstance, msg) {
  var f, obj = {
    sender: jspb.Message.getFieldWithDefault(msg, 1, ""),
    dataList: jspb.Message.toObjectList(msg.getDataList(),
    proto.injective.exchange.v1beta1.OrderData.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.injective.exchange.v1beta1.MsgBatchCancelDerivativeOrders}
 */
proto.injective.exchange.v1beta1.MsgBatchCancelDerivativeOrders.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.injective.exchange.v1beta1.MsgBatchCancelDerivativeOrders;
  return proto.injective.exchange.v1beta1.MsgBatchCancelDerivativeOrders.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.injective.exchange.v1beta1.MsgBatchCancelDerivativeOrders} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.injective.exchange.v1beta1.MsgBatchCancelDerivativeOrders}
 */
proto.injective.exchange.v1beta1.MsgBatchCancelDerivativeOrders.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setSender(value);
      break;
    case 2:
      var value = new proto.injective.exchange.v1beta1.OrderData;
      reader.readMessage(value,proto.injective.exchange.v1beta1.OrderData.deserializeBinaryFromReader);
      msg.addData(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.injective.exchange.v1beta1.MsgBatchCancelDerivativeOrders.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.injective.exchange.v1beta1.MsgBatchCancelDerivativeOrders.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.injective.exchange.v1beta1.MsgBatchCancelDerivativeOrders} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.injective.exchange.v1beta1.MsgBatchCancelDerivativeOrders.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSender();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getDataList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.injective.exchange.v1beta1.OrderData.serializeBinaryToWriter
    );
  }
};


/**
 * optional string sender = 1;
 * @return {string}
 */
proto.injective.exchange.v1beta1.MsgBatchCancelDerivativeOrders.prototype.getSender = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.injective.exchange.v1beta1.MsgBatchCancelDerivativeOrders} returns this
 */
proto.injective.exchange.v1beta1.MsgBatchCancelDerivativeOrders.prototype.setSender = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated OrderData data = 2;
 * @return {!Array<!proto.injective.exchange.v1beta1.OrderData>}
 */
proto.injective.exchange.v1beta1.MsgBatchCancelDerivativeOrders.prototype.getDataList = function() {
  return /** @type{!Array<!proto.injective.exchange.v1beta1.OrderData>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.injective.exchange.v1beta1.OrderData, 2));
};


/**
 * @param {!Array<!proto.injective.exchange.v1beta1.OrderData>} value
 * @return {!proto.injective.exchange.v1beta1.MsgBatchCancelDerivativeOrders} returns this
*/
proto.injective.exchange.v1beta1.MsgBatchCancelDerivativeOrders.prototype.setDataList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.injective.exchange.v1beta1.OrderData=} opt_value
 * @param {number=} opt_index
 * @return {!proto.injective.exchange.v1beta1.OrderData}
 */
proto.injective.exchange.v1beta1.MsgBatchCancelDerivativeOrders.prototype.addData = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.injective.exchange.v1beta1.OrderData, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.injective.exchange.v1beta1.MsgBatchCancelDerivativeOrders} returns this
 */
proto.injective.exchange.v1beta1.MsgBatchCancelDerivativeOrders.prototype.clearDataList = function() {
  return this.setDataList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.injective.exchange.v1beta1.MsgBatchCancelDerivativeOrdersResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.injective.exchange.v1beta1.MsgBatchCancelDerivativeOrdersResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.injective.exchange.v1beta1.MsgBatchCancelDerivativeOrdersResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.injective.exchange.v1beta1.MsgBatchCancelDerivativeOrdersResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.injective.exchange.v1beta1.MsgBatchCancelDerivativeOrdersResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    successList: (f = jspb.Message.getRepeatedBooleanField(msg, 1)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.injective.exchange.v1beta1.MsgBatchCancelDerivativeOrdersResponse}
 */
proto.injective.exchange.v1beta1.MsgBatchCancelDerivativeOrdersResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.injective.exchange.v1beta1.MsgBatchCancelDerivativeOrdersResponse;
  return proto.injective.exchange.v1beta1.MsgBatchCancelDerivativeOrdersResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.injective.exchange.v1beta1.MsgBatchCancelDerivativeOrdersResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.injective.exchange.v1beta1.MsgBatchCancelDerivativeOrdersResponse}
 */
proto.injective.exchange.v1beta1.MsgBatchCancelDerivativeOrdersResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var values = /** @type {!Array<boolean>} */ (reader.isDelimited() ? reader.readPackedBool() : [reader.readBool()]);
      for (var i = 0; i < values.length; i++) {
        msg.addSuccess(values[i]);
      }
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.injective.exchange.v1beta1.MsgBatchCancelDerivativeOrdersResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.injective.exchange.v1beta1.MsgBatchCancelDerivativeOrdersResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.injective.exchange.v1beta1.MsgBatchCancelDerivativeOrdersResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.injective.exchange.v1beta1.MsgBatchCancelDerivativeOrdersResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSuccessList();
  if (f.length > 0) {
    writer.writePackedBool(
      1,
      f
    );
  }
};


/**
 * repeated bool success = 1;
 * @return {!Array<boolean>}
 */
proto.injective.exchange.v1beta1.MsgBatchCancelDerivativeOrdersResponse.prototype.getSuccessList = function() {
  return /** @type {!Array<boolean>} */ (jspb.Message.getRepeatedBooleanField(this, 1));
};


/**
 * @param {!Array<boolean>} value
 * @return {!proto.injective.exchange.v1beta1.MsgBatchCancelDerivativeOrdersResponse} returns this
 */
proto.injective.exchange.v1beta1.MsgBatchCancelDerivativeOrdersResponse.prototype.setSuccessList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {boolean} value
 * @param {number=} opt_index
 * @return {!proto.injective.exchange.v1beta1.MsgBatchCancelDerivativeOrdersResponse} returns this
 */
proto.injective.exchange.v1beta1.MsgBatchCancelDerivativeOrdersResponse.prototype.addSuccess = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.injective.exchange.v1beta1.MsgBatchCancelDerivativeOrdersResponse} returns this
 */
proto.injective.exchange.v1beta1.MsgBatchCancelDerivativeOrdersResponse.prototype.clearSuccessList = function() {
  return this.setSuccessList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.injective.exchange.v1beta1.MsgSubaccountTransfer.prototype.toObject = function(opt_includeInstance) {
  return proto.injective.exchange.v1beta1.MsgSubaccountTransfer.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.injective.exchange.v1beta1.MsgSubaccountTransfer} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.injective.exchange.v1beta1.MsgSubaccountTransfer.toObject = function(includeInstance, msg) {
  var f, obj = {
    sender: jspb.Message.getFieldWithDefault(msg, 1, ""),
    sourceSubaccountId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    destinationSubaccountId: jspb.Message.getFieldWithDefault(msg, 3, ""),
    amount: (f = msg.getAmount()) && cosmos_base_v1beta1_coin_pb.Coin.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.injective.exchange.v1beta1.MsgSubaccountTransfer}
 */
proto.injective.exchange.v1beta1.MsgSubaccountTransfer.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.injective.exchange.v1beta1.MsgSubaccountTransfer;
  return proto.injective.exchange.v1beta1.MsgSubaccountTransfer.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.injective.exchange.v1beta1.MsgSubaccountTransfer} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.injective.exchange.v1beta1.MsgSubaccountTransfer}
 */
proto.injective.exchange.v1beta1.MsgSubaccountTransfer.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setSender(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setSourceSubaccountId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setDestinationSubaccountId(value);
      break;
    case 4:
      var value = new cosmos_base_v1beta1_coin_pb.Coin;
      reader.readMessage(value,cosmos_base_v1beta1_coin_pb.Coin.deserializeBinaryFromReader);
      msg.setAmount(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.injective.exchange.v1beta1.MsgSubaccountTransfer.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.injective.exchange.v1beta1.MsgSubaccountTransfer.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.injective.exchange.v1beta1.MsgSubaccountTransfer} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.injective.exchange.v1beta1.MsgSubaccountTransfer.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSender();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getSourceSubaccountId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getDestinationSubaccountId();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getAmount();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      cosmos_base_v1beta1_coin_pb.Coin.serializeBinaryToWriter
    );
  }
};


/**
 * optional string sender = 1;
 * @return {string}
 */
proto.injective.exchange.v1beta1.MsgSubaccountTransfer.prototype.getSender = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.injective.exchange.v1beta1.MsgSubaccountTransfer} returns this
 */
proto.injective.exchange.v1beta1.MsgSubaccountTransfer.prototype.setSender = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string source_subaccount_id = 2;
 * @return {string}
 */
proto.injective.exchange.v1beta1.MsgSubaccountTransfer.prototype.getSourceSubaccountId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.injective.exchange.v1beta1.MsgSubaccountTransfer} returns this
 */
proto.injective.exchange.v1beta1.MsgSubaccountTransfer.prototype.setSourceSubaccountId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string destination_subaccount_id = 3;
 * @return {string}
 */
proto.injective.exchange.v1beta1.MsgSubaccountTransfer.prototype.getDestinationSubaccountId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.injective.exchange.v1beta1.MsgSubaccountTransfer} returns this
 */
proto.injective.exchange.v1beta1.MsgSubaccountTransfer.prototype.setDestinationSubaccountId = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional cosmos.base.v1beta1.Coin amount = 4;
 * @return {?proto.cosmos.base.v1beta1.Coin}
 */
proto.injective.exchange.v1beta1.MsgSubaccountTransfer.prototype.getAmount = function() {
  return /** @type{?proto.cosmos.base.v1beta1.Coin} */ (
    jspb.Message.getWrapperField(this, cosmos_base_v1beta1_coin_pb.Coin, 4));
};


/**
 * @param {?proto.cosmos.base.v1beta1.Coin|undefined} value
 * @return {!proto.injective.exchange.v1beta1.MsgSubaccountTransfer} returns this
*/
proto.injective.exchange.v1beta1.MsgSubaccountTransfer.prototype.setAmount = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.injective.exchange.v1beta1.MsgSubaccountTransfer} returns this
 */
proto.injective.exchange.v1beta1.MsgSubaccountTransfer.prototype.clearAmount = function() {
  return this.setAmount(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.injective.exchange.v1beta1.MsgSubaccountTransfer.prototype.hasAmount = function() {
  return jspb.Message.getField(this, 4) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.injective.exchange.v1beta1.MsgSubaccountTransferResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.injective.exchange.v1beta1.MsgSubaccountTransferResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.injective.exchange.v1beta1.MsgSubaccountTransferResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.injective.exchange.v1beta1.MsgSubaccountTransferResponse.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.injective.exchange.v1beta1.MsgSubaccountTransferResponse}
 */
proto.injective.exchange.v1beta1.MsgSubaccountTransferResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.injective.exchange.v1beta1.MsgSubaccountTransferResponse;
  return proto.injective.exchange.v1beta1.MsgSubaccountTransferResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.injective.exchange.v1beta1.MsgSubaccountTransferResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.injective.exchange.v1beta1.MsgSubaccountTransferResponse}
 */
proto.injective.exchange.v1beta1.MsgSubaccountTransferResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.injective.exchange.v1beta1.MsgSubaccountTransferResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.injective.exchange.v1beta1.MsgSubaccountTransferResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.injective.exchange.v1beta1.MsgSubaccountTransferResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.injective.exchange.v1beta1.MsgSubaccountTransferResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.injective.exchange.v1beta1.MsgExternalTransfer.prototype.toObject = function(opt_includeInstance) {
  return proto.injective.exchange.v1beta1.MsgExternalTransfer.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.injective.exchange.v1beta1.MsgExternalTransfer} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.injective.exchange.v1beta1.MsgExternalTransfer.toObject = function(includeInstance, msg) {
  var f, obj = {
    sender: jspb.Message.getFieldWithDefault(msg, 1, ""),
    sourceSubaccountId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    destinationSubaccountId: jspb.Message.getFieldWithDefault(msg, 3, ""),
    amount: (f = msg.getAmount()) && cosmos_base_v1beta1_coin_pb.Coin.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.injective.exchange.v1beta1.MsgExternalTransfer}
 */
proto.injective.exchange.v1beta1.MsgExternalTransfer.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.injective.exchange.v1beta1.MsgExternalTransfer;
  return proto.injective.exchange.v1beta1.MsgExternalTransfer.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.injective.exchange.v1beta1.MsgExternalTransfer} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.injective.exchange.v1beta1.MsgExternalTransfer}
 */
proto.injective.exchange.v1beta1.MsgExternalTransfer.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setSender(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setSourceSubaccountId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setDestinationSubaccountId(value);
      break;
    case 4:
      var value = new cosmos_base_v1beta1_coin_pb.Coin;
      reader.readMessage(value,cosmos_base_v1beta1_coin_pb.Coin.deserializeBinaryFromReader);
      msg.setAmount(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.injective.exchange.v1beta1.MsgExternalTransfer.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.injective.exchange.v1beta1.MsgExternalTransfer.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.injective.exchange.v1beta1.MsgExternalTransfer} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.injective.exchange.v1beta1.MsgExternalTransfer.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSender();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getSourceSubaccountId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getDestinationSubaccountId();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getAmount();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      cosmos_base_v1beta1_coin_pb.Coin.serializeBinaryToWriter
    );
  }
};


/**
 * optional string sender = 1;
 * @return {string}
 */
proto.injective.exchange.v1beta1.MsgExternalTransfer.prototype.getSender = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.injective.exchange.v1beta1.MsgExternalTransfer} returns this
 */
proto.injective.exchange.v1beta1.MsgExternalTransfer.prototype.setSender = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string source_subaccount_id = 2;
 * @return {string}
 */
proto.injective.exchange.v1beta1.MsgExternalTransfer.prototype.getSourceSubaccountId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.injective.exchange.v1beta1.MsgExternalTransfer} returns this
 */
proto.injective.exchange.v1beta1.MsgExternalTransfer.prototype.setSourceSubaccountId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string destination_subaccount_id = 3;
 * @return {string}
 */
proto.injective.exchange.v1beta1.MsgExternalTransfer.prototype.getDestinationSubaccountId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.injective.exchange.v1beta1.MsgExternalTransfer} returns this
 */
proto.injective.exchange.v1beta1.MsgExternalTransfer.prototype.setDestinationSubaccountId = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional cosmos.base.v1beta1.Coin amount = 4;
 * @return {?proto.cosmos.base.v1beta1.Coin}
 */
proto.injective.exchange.v1beta1.MsgExternalTransfer.prototype.getAmount = function() {
  return /** @type{?proto.cosmos.base.v1beta1.Coin} */ (
    jspb.Message.getWrapperField(this, cosmos_base_v1beta1_coin_pb.Coin, 4));
};


/**
 * @param {?proto.cosmos.base.v1beta1.Coin|undefined} value
 * @return {!proto.injective.exchange.v1beta1.MsgExternalTransfer} returns this
*/
proto.injective.exchange.v1beta1.MsgExternalTransfer.prototype.setAmount = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.injective.exchange.v1beta1.MsgExternalTransfer} returns this
 */
proto.injective.exchange.v1beta1.MsgExternalTransfer.prototype.clearAmount = function() {
  return this.setAmount(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.injective.exchange.v1beta1.MsgExternalTransfer.prototype.hasAmount = function() {
  return jspb.Message.getField(this, 4) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.injective.exchange.v1beta1.MsgExternalTransferResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.injective.exchange.v1beta1.MsgExternalTransferResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.injective.exchange.v1beta1.MsgExternalTransferResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.injective.exchange.v1beta1.MsgExternalTransferResponse.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.injective.exchange.v1beta1.MsgExternalTransferResponse}
 */
proto.injective.exchange.v1beta1.MsgExternalTransferResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.injective.exchange.v1beta1.MsgExternalTransferResponse;
  return proto.injective.exchange.v1beta1.MsgExternalTransferResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.injective.exchange.v1beta1.MsgExternalTransferResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.injective.exchange.v1beta1.MsgExternalTransferResponse}
 */
proto.injective.exchange.v1beta1.MsgExternalTransferResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.injective.exchange.v1beta1.MsgExternalTransferResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.injective.exchange.v1beta1.MsgExternalTransferResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.injective.exchange.v1beta1.MsgExternalTransferResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.injective.exchange.v1beta1.MsgExternalTransferResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.injective.exchange.v1beta1.MsgLiquidatePosition.prototype.toObject = function(opt_includeInstance) {
  return proto.injective.exchange.v1beta1.MsgLiquidatePosition.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.injective.exchange.v1beta1.MsgLiquidatePosition} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.injective.exchange.v1beta1.MsgLiquidatePosition.toObject = function(includeInstance, msg) {
  var f, obj = {
    sender: jspb.Message.getFieldWithDefault(msg, 1, ""),
    subaccountId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    marketId: jspb.Message.getFieldWithDefault(msg, 3, ""),
    order: (f = msg.getOrder()) && injective_exchange_v1beta1_exchange_pb.DerivativeOrder.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.injective.exchange.v1beta1.MsgLiquidatePosition}
 */
proto.injective.exchange.v1beta1.MsgLiquidatePosition.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.injective.exchange.v1beta1.MsgLiquidatePosition;
  return proto.injective.exchange.v1beta1.MsgLiquidatePosition.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.injective.exchange.v1beta1.MsgLiquidatePosition} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.injective.exchange.v1beta1.MsgLiquidatePosition}
 */
proto.injective.exchange.v1beta1.MsgLiquidatePosition.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setSender(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setSubaccountId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setMarketId(value);
      break;
    case 4:
      var value = new injective_exchange_v1beta1_exchange_pb.DerivativeOrder;
      reader.readMessage(value,injective_exchange_v1beta1_exchange_pb.DerivativeOrder.deserializeBinaryFromReader);
      msg.setOrder(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.injective.exchange.v1beta1.MsgLiquidatePosition.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.injective.exchange.v1beta1.MsgLiquidatePosition.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.injective.exchange.v1beta1.MsgLiquidatePosition} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.injective.exchange.v1beta1.MsgLiquidatePosition.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSender();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getSubaccountId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getMarketId();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getOrder();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      injective_exchange_v1beta1_exchange_pb.DerivativeOrder.serializeBinaryToWriter
    );
  }
};


/**
 * optional string sender = 1;
 * @return {string}
 */
proto.injective.exchange.v1beta1.MsgLiquidatePosition.prototype.getSender = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.injective.exchange.v1beta1.MsgLiquidatePosition} returns this
 */
proto.injective.exchange.v1beta1.MsgLiquidatePosition.prototype.setSender = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string subaccount_id = 2;
 * @return {string}
 */
proto.injective.exchange.v1beta1.MsgLiquidatePosition.prototype.getSubaccountId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.injective.exchange.v1beta1.MsgLiquidatePosition} returns this
 */
proto.injective.exchange.v1beta1.MsgLiquidatePosition.prototype.setSubaccountId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string market_id = 3;
 * @return {string}
 */
proto.injective.exchange.v1beta1.MsgLiquidatePosition.prototype.getMarketId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.injective.exchange.v1beta1.MsgLiquidatePosition} returns this
 */
proto.injective.exchange.v1beta1.MsgLiquidatePosition.prototype.setMarketId = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional DerivativeOrder order = 4;
 * @return {?proto.injective.exchange.v1beta1.DerivativeOrder}
 */
proto.injective.exchange.v1beta1.MsgLiquidatePosition.prototype.getOrder = function() {
  return /** @type{?proto.injective.exchange.v1beta1.DerivativeOrder} */ (
    jspb.Message.getWrapperField(this, injective_exchange_v1beta1_exchange_pb.DerivativeOrder, 4));
};


/**
 * @param {?proto.injective.exchange.v1beta1.DerivativeOrder|undefined} value
 * @return {!proto.injective.exchange.v1beta1.MsgLiquidatePosition} returns this
*/
proto.injective.exchange.v1beta1.MsgLiquidatePosition.prototype.setOrder = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.injective.exchange.v1beta1.MsgLiquidatePosition} returns this
 */
proto.injective.exchange.v1beta1.MsgLiquidatePosition.prototype.clearOrder = function() {
  return this.setOrder(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.injective.exchange.v1beta1.MsgLiquidatePosition.prototype.hasOrder = function() {
  return jspb.Message.getField(this, 4) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.injective.exchange.v1beta1.MsgLiquidatePositionResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.injective.exchange.v1beta1.MsgLiquidatePositionResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.injective.exchange.v1beta1.MsgLiquidatePositionResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.injective.exchange.v1beta1.MsgLiquidatePositionResponse.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.injective.exchange.v1beta1.MsgLiquidatePositionResponse}
 */
proto.injective.exchange.v1beta1.MsgLiquidatePositionResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.injective.exchange.v1beta1.MsgLiquidatePositionResponse;
  return proto.injective.exchange.v1beta1.MsgLiquidatePositionResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.injective.exchange.v1beta1.MsgLiquidatePositionResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.injective.exchange.v1beta1.MsgLiquidatePositionResponse}
 */
proto.injective.exchange.v1beta1.MsgLiquidatePositionResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.injective.exchange.v1beta1.MsgLiquidatePositionResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.injective.exchange.v1beta1.MsgLiquidatePositionResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.injective.exchange.v1beta1.MsgLiquidatePositionResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.injective.exchange.v1beta1.MsgLiquidatePositionResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.injective.exchange.v1beta1.MsgIncreasePositionMargin.prototype.toObject = function(opt_includeInstance) {
  return proto.injective.exchange.v1beta1.MsgIncreasePositionMargin.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.injective.exchange.v1beta1.MsgIncreasePositionMargin} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.injective.exchange.v1beta1.MsgIncreasePositionMargin.toObject = function(includeInstance, msg) {
  var f, obj = {
    sender: jspb.Message.getFieldWithDefault(msg, 1, ""),
    sourceSubaccountId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    destinationSubaccountId: jspb.Message.getFieldWithDefault(msg, 3, ""),
    marketId: jspb.Message.getFieldWithDefault(msg, 4, ""),
    amount: jspb.Message.getFieldWithDefault(msg, 5, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.injective.exchange.v1beta1.MsgIncreasePositionMargin}
 */
proto.injective.exchange.v1beta1.MsgIncreasePositionMargin.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.injective.exchange.v1beta1.MsgIncreasePositionMargin;
  return proto.injective.exchange.v1beta1.MsgIncreasePositionMargin.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.injective.exchange.v1beta1.MsgIncreasePositionMargin} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.injective.exchange.v1beta1.MsgIncreasePositionMargin}
 */
proto.injective.exchange.v1beta1.MsgIncreasePositionMargin.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setSender(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setSourceSubaccountId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setDestinationSubaccountId(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setMarketId(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setAmount(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.injective.exchange.v1beta1.MsgIncreasePositionMargin.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.injective.exchange.v1beta1.MsgIncreasePositionMargin.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.injective.exchange.v1beta1.MsgIncreasePositionMargin} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.injective.exchange.v1beta1.MsgIncreasePositionMargin.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSender();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getSourceSubaccountId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getDestinationSubaccountId();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getMarketId();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getAmount();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
};


/**
 * optional string sender = 1;
 * @return {string}
 */
proto.injective.exchange.v1beta1.MsgIncreasePositionMargin.prototype.getSender = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.injective.exchange.v1beta1.MsgIncreasePositionMargin} returns this
 */
proto.injective.exchange.v1beta1.MsgIncreasePositionMargin.prototype.setSender = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string source_subaccount_id = 2;
 * @return {string}
 */
proto.injective.exchange.v1beta1.MsgIncreasePositionMargin.prototype.getSourceSubaccountId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.injective.exchange.v1beta1.MsgIncreasePositionMargin} returns this
 */
proto.injective.exchange.v1beta1.MsgIncreasePositionMargin.prototype.setSourceSubaccountId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string destination_subaccount_id = 3;
 * @return {string}
 */
proto.injective.exchange.v1beta1.MsgIncreasePositionMargin.prototype.getDestinationSubaccountId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.injective.exchange.v1beta1.MsgIncreasePositionMargin} returns this
 */
proto.injective.exchange.v1beta1.MsgIncreasePositionMargin.prototype.setDestinationSubaccountId = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string market_id = 4;
 * @return {string}
 */
proto.injective.exchange.v1beta1.MsgIncreasePositionMargin.prototype.getMarketId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.injective.exchange.v1beta1.MsgIncreasePositionMargin} returns this
 */
proto.injective.exchange.v1beta1.MsgIncreasePositionMargin.prototype.setMarketId = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string amount = 5;
 * @return {string}
 */
proto.injective.exchange.v1beta1.MsgIncreasePositionMargin.prototype.getAmount = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.injective.exchange.v1beta1.MsgIncreasePositionMargin} returns this
 */
proto.injective.exchange.v1beta1.MsgIncreasePositionMargin.prototype.setAmount = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.injective.exchange.v1beta1.MsgIncreasePositionMarginResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.injective.exchange.v1beta1.MsgIncreasePositionMarginResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.injective.exchange.v1beta1.MsgIncreasePositionMarginResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.injective.exchange.v1beta1.MsgIncreasePositionMarginResponse.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.injective.exchange.v1beta1.MsgIncreasePositionMarginResponse}
 */
proto.injective.exchange.v1beta1.MsgIncreasePositionMarginResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.injective.exchange.v1beta1.MsgIncreasePositionMarginResponse;
  return proto.injective.exchange.v1beta1.MsgIncreasePositionMarginResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.injective.exchange.v1beta1.MsgIncreasePositionMarginResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.injective.exchange.v1beta1.MsgIncreasePositionMarginResponse}
 */
proto.injective.exchange.v1beta1.MsgIncreasePositionMarginResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.injective.exchange.v1beta1.MsgIncreasePositionMarginResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.injective.exchange.v1beta1.MsgIncreasePositionMarginResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.injective.exchange.v1beta1.MsgIncreasePositionMarginResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.injective.exchange.v1beta1.MsgIncreasePositionMarginResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.injective.exchange.v1beta1.SpotMarketParamUpdateProposal.prototype.toObject = function(opt_includeInstance) {
  return proto.injective.exchange.v1beta1.SpotMarketParamUpdateProposal.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.injective.exchange.v1beta1.SpotMarketParamUpdateProposal} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.injective.exchange.v1beta1.SpotMarketParamUpdateProposal.toObject = function(includeInstance, msg) {
  var f, obj = {
    title: jspb.Message.getFieldWithDefault(msg, 1, ""),
    description: jspb.Message.getFieldWithDefault(msg, 2, ""),
    marketId: jspb.Message.getFieldWithDefault(msg, 3, ""),
    makerFeeRate: jspb.Message.getFieldWithDefault(msg, 4, ""),
    takerFeeRate: jspb.Message.getFieldWithDefault(msg, 5, ""),
    relayerFeeShareRate: jspb.Message.getFieldWithDefault(msg, 6, ""),
    minPriceTickSize: jspb.Message.getFieldWithDefault(msg, 7, ""),
    minQuantityTickSize: jspb.Message.getFieldWithDefault(msg, 8, ""),
    status: jspb.Message.getFieldWithDefault(msg, 9, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.injective.exchange.v1beta1.SpotMarketParamUpdateProposal}
 */
proto.injective.exchange.v1beta1.SpotMarketParamUpdateProposal.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.injective.exchange.v1beta1.SpotMarketParamUpdateProposal;
  return proto.injective.exchange.v1beta1.SpotMarketParamUpdateProposal.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.injective.exchange.v1beta1.SpotMarketParamUpdateProposal} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.injective.exchange.v1beta1.SpotMarketParamUpdateProposal}
 */
proto.injective.exchange.v1beta1.SpotMarketParamUpdateProposal.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setTitle(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setMarketId(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setMakerFeeRate(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setTakerFeeRate(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setRelayerFeeShareRate(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setMinPriceTickSize(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setMinQuantityTickSize(value);
      break;
    case 9:
      var value = /** @type {!proto.injective.exchange.v1beta1.MarketStatus} */ (reader.readEnum());
      msg.setStatus(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.injective.exchange.v1beta1.SpotMarketParamUpdateProposal.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.injective.exchange.v1beta1.SpotMarketParamUpdateProposal.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.injective.exchange.v1beta1.SpotMarketParamUpdateProposal} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.injective.exchange.v1beta1.SpotMarketParamUpdateProposal.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTitle();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getMarketId();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getMakerFeeRate();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getTakerFeeRate();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getRelayerFeeShareRate();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getMinPriceTickSize();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getMinQuantityTickSize();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getStatus();
  if (f !== 0.0) {
    writer.writeEnum(
      9,
      f
    );
  }
};


/**
 * optional string title = 1;
 * @return {string}
 */
proto.injective.exchange.v1beta1.SpotMarketParamUpdateProposal.prototype.getTitle = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.injective.exchange.v1beta1.SpotMarketParamUpdateProposal} returns this
 */
proto.injective.exchange.v1beta1.SpotMarketParamUpdateProposal.prototype.setTitle = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string description = 2;
 * @return {string}
 */
proto.injective.exchange.v1beta1.SpotMarketParamUpdateProposal.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.injective.exchange.v1beta1.SpotMarketParamUpdateProposal} returns this
 */
proto.injective.exchange.v1beta1.SpotMarketParamUpdateProposal.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string market_id = 3;
 * @return {string}
 */
proto.injective.exchange.v1beta1.SpotMarketParamUpdateProposal.prototype.getMarketId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.injective.exchange.v1beta1.SpotMarketParamUpdateProposal} returns this
 */
proto.injective.exchange.v1beta1.SpotMarketParamUpdateProposal.prototype.setMarketId = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string maker_fee_rate = 4;
 * @return {string}
 */
proto.injective.exchange.v1beta1.SpotMarketParamUpdateProposal.prototype.getMakerFeeRate = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.injective.exchange.v1beta1.SpotMarketParamUpdateProposal} returns this
 */
proto.injective.exchange.v1beta1.SpotMarketParamUpdateProposal.prototype.setMakerFeeRate = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string taker_fee_rate = 5;
 * @return {string}
 */
proto.injective.exchange.v1beta1.SpotMarketParamUpdateProposal.prototype.getTakerFeeRate = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.injective.exchange.v1beta1.SpotMarketParamUpdateProposal} returns this
 */
proto.injective.exchange.v1beta1.SpotMarketParamUpdateProposal.prototype.setTakerFeeRate = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string relayer_fee_share_rate = 6;
 * @return {string}
 */
proto.injective.exchange.v1beta1.SpotMarketParamUpdateProposal.prototype.getRelayerFeeShareRate = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.injective.exchange.v1beta1.SpotMarketParamUpdateProposal} returns this
 */
proto.injective.exchange.v1beta1.SpotMarketParamUpdateProposal.prototype.setRelayerFeeShareRate = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string min_price_tick_size = 7;
 * @return {string}
 */
proto.injective.exchange.v1beta1.SpotMarketParamUpdateProposal.prototype.getMinPriceTickSize = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.injective.exchange.v1beta1.SpotMarketParamUpdateProposal} returns this
 */
proto.injective.exchange.v1beta1.SpotMarketParamUpdateProposal.prototype.setMinPriceTickSize = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional string min_quantity_tick_size = 8;
 * @return {string}
 */
proto.injective.exchange.v1beta1.SpotMarketParamUpdateProposal.prototype.getMinQuantityTickSize = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.injective.exchange.v1beta1.SpotMarketParamUpdateProposal} returns this
 */
proto.injective.exchange.v1beta1.SpotMarketParamUpdateProposal.prototype.setMinQuantityTickSize = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional MarketStatus status = 9;
 * @return {!proto.injective.exchange.v1beta1.MarketStatus}
 */
proto.injective.exchange.v1beta1.SpotMarketParamUpdateProposal.prototype.getStatus = function() {
  return /** @type {!proto.injective.exchange.v1beta1.MarketStatus} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {!proto.injective.exchange.v1beta1.MarketStatus} value
 * @return {!proto.injective.exchange.v1beta1.SpotMarketParamUpdateProposal} returns this
 */
proto.injective.exchange.v1beta1.SpotMarketParamUpdateProposal.prototype.setStatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 9, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.injective.exchange.v1beta1.ExchangeEnableProposal.prototype.toObject = function(opt_includeInstance) {
  return proto.injective.exchange.v1beta1.ExchangeEnableProposal.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.injective.exchange.v1beta1.ExchangeEnableProposal} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.injective.exchange.v1beta1.ExchangeEnableProposal.toObject = function(includeInstance, msg) {
  var f, obj = {
    title: jspb.Message.getFieldWithDefault(msg, 1, ""),
    description: jspb.Message.getFieldWithDefault(msg, 2, ""),
    exchangetype: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.injective.exchange.v1beta1.ExchangeEnableProposal}
 */
proto.injective.exchange.v1beta1.ExchangeEnableProposal.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.injective.exchange.v1beta1.ExchangeEnableProposal;
  return proto.injective.exchange.v1beta1.ExchangeEnableProposal.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.injective.exchange.v1beta1.ExchangeEnableProposal} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.injective.exchange.v1beta1.ExchangeEnableProposal}
 */
proto.injective.exchange.v1beta1.ExchangeEnableProposal.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setTitle(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 3:
      var value = /** @type {!proto.injective.exchange.v1beta1.ExchangeType} */ (reader.readEnum());
      msg.setExchangetype(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.injective.exchange.v1beta1.ExchangeEnableProposal.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.injective.exchange.v1beta1.ExchangeEnableProposal.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.injective.exchange.v1beta1.ExchangeEnableProposal} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.injective.exchange.v1beta1.ExchangeEnableProposal.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTitle();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getExchangetype();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
};


/**
 * optional string title = 1;
 * @return {string}
 */
proto.injective.exchange.v1beta1.ExchangeEnableProposal.prototype.getTitle = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.injective.exchange.v1beta1.ExchangeEnableProposal} returns this
 */
proto.injective.exchange.v1beta1.ExchangeEnableProposal.prototype.setTitle = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string description = 2;
 * @return {string}
 */
proto.injective.exchange.v1beta1.ExchangeEnableProposal.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.injective.exchange.v1beta1.ExchangeEnableProposal} returns this
 */
proto.injective.exchange.v1beta1.ExchangeEnableProposal.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional ExchangeType exchangeType = 3;
 * @return {!proto.injective.exchange.v1beta1.ExchangeType}
 */
proto.injective.exchange.v1beta1.ExchangeEnableProposal.prototype.getExchangetype = function() {
  return /** @type {!proto.injective.exchange.v1beta1.ExchangeType} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.injective.exchange.v1beta1.ExchangeType} value
 * @return {!proto.injective.exchange.v1beta1.ExchangeEnableProposal} returns this
 */
proto.injective.exchange.v1beta1.ExchangeEnableProposal.prototype.setExchangetype = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.injective.exchange.v1beta1.SpotMarketLaunchProposal.prototype.toObject = function(opt_includeInstance) {
  return proto.injective.exchange.v1beta1.SpotMarketLaunchProposal.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.injective.exchange.v1beta1.SpotMarketLaunchProposal} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.injective.exchange.v1beta1.SpotMarketLaunchProposal.toObject = function(includeInstance, msg) {
  var f, obj = {
    title: jspb.Message.getFieldWithDefault(msg, 1, ""),
    description: jspb.Message.getFieldWithDefault(msg, 2, ""),
    ticker: jspb.Message.getFieldWithDefault(msg, 3, ""),
    baseDenom: jspb.Message.getFieldWithDefault(msg, 4, ""),
    quoteDenom: jspb.Message.getFieldWithDefault(msg, 5, ""),
    minPriceTickSize: jspb.Message.getFieldWithDefault(msg, 6, ""),
    minQuantityTickSize: jspb.Message.getFieldWithDefault(msg, 7, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.injective.exchange.v1beta1.SpotMarketLaunchProposal}
 */
proto.injective.exchange.v1beta1.SpotMarketLaunchProposal.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.injective.exchange.v1beta1.SpotMarketLaunchProposal;
  return proto.injective.exchange.v1beta1.SpotMarketLaunchProposal.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.injective.exchange.v1beta1.SpotMarketLaunchProposal} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.injective.exchange.v1beta1.SpotMarketLaunchProposal}
 */
proto.injective.exchange.v1beta1.SpotMarketLaunchProposal.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setTitle(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setTicker(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setBaseDenom(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setQuoteDenom(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setMinPriceTickSize(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setMinQuantityTickSize(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.injective.exchange.v1beta1.SpotMarketLaunchProposal.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.injective.exchange.v1beta1.SpotMarketLaunchProposal.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.injective.exchange.v1beta1.SpotMarketLaunchProposal} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.injective.exchange.v1beta1.SpotMarketLaunchProposal.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTitle();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getTicker();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getBaseDenom();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getQuoteDenom();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getMinPriceTickSize();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getMinQuantityTickSize();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
};


/**
 * optional string title = 1;
 * @return {string}
 */
proto.injective.exchange.v1beta1.SpotMarketLaunchProposal.prototype.getTitle = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.injective.exchange.v1beta1.SpotMarketLaunchProposal} returns this
 */
proto.injective.exchange.v1beta1.SpotMarketLaunchProposal.prototype.setTitle = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string description = 2;
 * @return {string}
 */
proto.injective.exchange.v1beta1.SpotMarketLaunchProposal.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.injective.exchange.v1beta1.SpotMarketLaunchProposal} returns this
 */
proto.injective.exchange.v1beta1.SpotMarketLaunchProposal.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string ticker = 3;
 * @return {string}
 */
proto.injective.exchange.v1beta1.SpotMarketLaunchProposal.prototype.getTicker = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.injective.exchange.v1beta1.SpotMarketLaunchProposal} returns this
 */
proto.injective.exchange.v1beta1.SpotMarketLaunchProposal.prototype.setTicker = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string base_denom = 4;
 * @return {string}
 */
proto.injective.exchange.v1beta1.SpotMarketLaunchProposal.prototype.getBaseDenom = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.injective.exchange.v1beta1.SpotMarketLaunchProposal} returns this
 */
proto.injective.exchange.v1beta1.SpotMarketLaunchProposal.prototype.setBaseDenom = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string quote_denom = 5;
 * @return {string}
 */
proto.injective.exchange.v1beta1.SpotMarketLaunchProposal.prototype.getQuoteDenom = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.injective.exchange.v1beta1.SpotMarketLaunchProposal} returns this
 */
proto.injective.exchange.v1beta1.SpotMarketLaunchProposal.prototype.setQuoteDenom = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string min_price_tick_size = 6;
 * @return {string}
 */
proto.injective.exchange.v1beta1.SpotMarketLaunchProposal.prototype.getMinPriceTickSize = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.injective.exchange.v1beta1.SpotMarketLaunchProposal} returns this
 */
proto.injective.exchange.v1beta1.SpotMarketLaunchProposal.prototype.setMinPriceTickSize = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string min_quantity_tick_size = 7;
 * @return {string}
 */
proto.injective.exchange.v1beta1.SpotMarketLaunchProposal.prototype.getMinQuantityTickSize = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.injective.exchange.v1beta1.SpotMarketLaunchProposal} returns this
 */
proto.injective.exchange.v1beta1.SpotMarketLaunchProposal.prototype.setMinQuantityTickSize = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.injective.exchange.v1beta1.PerpetualMarketLaunchProposal.prototype.toObject = function(opt_includeInstance) {
  return proto.injective.exchange.v1beta1.PerpetualMarketLaunchProposal.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.injective.exchange.v1beta1.PerpetualMarketLaunchProposal} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.injective.exchange.v1beta1.PerpetualMarketLaunchProposal.toObject = function(includeInstance, msg) {
  var f, obj = {
    title: jspb.Message.getFieldWithDefault(msg, 1, ""),
    description: jspb.Message.getFieldWithDefault(msg, 2, ""),
    ticker: jspb.Message.getFieldWithDefault(msg, 3, ""),
    quoteDenom: jspb.Message.getFieldWithDefault(msg, 4, ""),
    oracleBase: jspb.Message.getFieldWithDefault(msg, 5, ""),
    oracleQuote: jspb.Message.getFieldWithDefault(msg, 6, ""),
    oracleScaleFactor: jspb.Message.getFieldWithDefault(msg, 7, 0),
    oracleType: jspb.Message.getFieldWithDefault(msg, 8, 0),
    initialMarginRatio: jspb.Message.getFieldWithDefault(msg, 9, ""),
    maintenanceMarginRatio: jspb.Message.getFieldWithDefault(msg, 10, ""),
    makerFeeRate: jspb.Message.getFieldWithDefault(msg, 11, ""),
    takerFeeRate: jspb.Message.getFieldWithDefault(msg, 12, ""),
    minPriceTickSize: jspb.Message.getFieldWithDefault(msg, 13, ""),
    minQuantityTickSize: jspb.Message.getFieldWithDefault(msg, 14, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.injective.exchange.v1beta1.PerpetualMarketLaunchProposal}
 */
proto.injective.exchange.v1beta1.PerpetualMarketLaunchProposal.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.injective.exchange.v1beta1.PerpetualMarketLaunchProposal;
  return proto.injective.exchange.v1beta1.PerpetualMarketLaunchProposal.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.injective.exchange.v1beta1.PerpetualMarketLaunchProposal} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.injective.exchange.v1beta1.PerpetualMarketLaunchProposal}
 */
proto.injective.exchange.v1beta1.PerpetualMarketLaunchProposal.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setTitle(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setTicker(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setQuoteDenom(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setOracleBase(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setOracleQuote(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setOracleScaleFactor(value);
      break;
    case 8:
      var value = /** @type {!proto.injective.oracle.v1beta1.OracleType} */ (reader.readEnum());
      msg.setOracleType(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setInitialMarginRatio(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setMaintenanceMarginRatio(value);
      break;
    case 11:
      var value = /** @type {string} */ (reader.readString());
      msg.setMakerFeeRate(value);
      break;
    case 12:
      var value = /** @type {string} */ (reader.readString());
      msg.setTakerFeeRate(value);
      break;
    case 13:
      var value = /** @type {string} */ (reader.readString());
      msg.setMinPriceTickSize(value);
      break;
    case 14:
      var value = /** @type {string} */ (reader.readString());
      msg.setMinQuantityTickSize(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.injective.exchange.v1beta1.PerpetualMarketLaunchProposal.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.injective.exchange.v1beta1.PerpetualMarketLaunchProposal.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.injective.exchange.v1beta1.PerpetualMarketLaunchProposal} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.injective.exchange.v1beta1.PerpetualMarketLaunchProposal.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTitle();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getTicker();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getQuoteDenom();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getOracleBase();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getOracleQuote();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getOracleScaleFactor();
  if (f !== 0) {
    writer.writeUint32(
      7,
      f
    );
  }
  f = message.getOracleType();
  if (f !== 0.0) {
    writer.writeEnum(
      8,
      f
    );
  }
  f = message.getInitialMarginRatio();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
  f = message.getMaintenanceMarginRatio();
  if (f.length > 0) {
    writer.writeString(
      10,
      f
    );
  }
  f = message.getMakerFeeRate();
  if (f.length > 0) {
    writer.writeString(
      11,
      f
    );
  }
  f = message.getTakerFeeRate();
  if (f.length > 0) {
    writer.writeString(
      12,
      f
    );
  }
  f = message.getMinPriceTickSize();
  if (f.length > 0) {
    writer.writeString(
      13,
      f
    );
  }
  f = message.getMinQuantityTickSize();
  if (f.length > 0) {
    writer.writeString(
      14,
      f
    );
  }
};


/**
 * optional string title = 1;
 * @return {string}
 */
proto.injective.exchange.v1beta1.PerpetualMarketLaunchProposal.prototype.getTitle = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.injective.exchange.v1beta1.PerpetualMarketLaunchProposal} returns this
 */
proto.injective.exchange.v1beta1.PerpetualMarketLaunchProposal.prototype.setTitle = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string description = 2;
 * @return {string}
 */
proto.injective.exchange.v1beta1.PerpetualMarketLaunchProposal.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.injective.exchange.v1beta1.PerpetualMarketLaunchProposal} returns this
 */
proto.injective.exchange.v1beta1.PerpetualMarketLaunchProposal.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string ticker = 3;
 * @return {string}
 */
proto.injective.exchange.v1beta1.PerpetualMarketLaunchProposal.prototype.getTicker = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.injective.exchange.v1beta1.PerpetualMarketLaunchProposal} returns this
 */
proto.injective.exchange.v1beta1.PerpetualMarketLaunchProposal.prototype.setTicker = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string quote_denom = 4;
 * @return {string}
 */
proto.injective.exchange.v1beta1.PerpetualMarketLaunchProposal.prototype.getQuoteDenom = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.injective.exchange.v1beta1.PerpetualMarketLaunchProposal} returns this
 */
proto.injective.exchange.v1beta1.PerpetualMarketLaunchProposal.prototype.setQuoteDenom = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string oracle_base = 5;
 * @return {string}
 */
proto.injective.exchange.v1beta1.PerpetualMarketLaunchProposal.prototype.getOracleBase = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.injective.exchange.v1beta1.PerpetualMarketLaunchProposal} returns this
 */
proto.injective.exchange.v1beta1.PerpetualMarketLaunchProposal.prototype.setOracleBase = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string oracle_quote = 6;
 * @return {string}
 */
proto.injective.exchange.v1beta1.PerpetualMarketLaunchProposal.prototype.getOracleQuote = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.injective.exchange.v1beta1.PerpetualMarketLaunchProposal} returns this
 */
proto.injective.exchange.v1beta1.PerpetualMarketLaunchProposal.prototype.setOracleQuote = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional uint32 oracle_scale_factor = 7;
 * @return {number}
 */
proto.injective.exchange.v1beta1.PerpetualMarketLaunchProposal.prototype.getOracleScaleFactor = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.injective.exchange.v1beta1.PerpetualMarketLaunchProposal} returns this
 */
proto.injective.exchange.v1beta1.PerpetualMarketLaunchProposal.prototype.setOracleScaleFactor = function(value) {
  return jspb.Message.setProto3IntField(this, 7, value);
};


/**
 * optional injective.oracle.v1beta1.OracleType oracle_type = 8;
 * @return {!proto.injective.oracle.v1beta1.OracleType}
 */
proto.injective.exchange.v1beta1.PerpetualMarketLaunchProposal.prototype.getOracleType = function() {
  return /** @type {!proto.injective.oracle.v1beta1.OracleType} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {!proto.injective.oracle.v1beta1.OracleType} value
 * @return {!proto.injective.exchange.v1beta1.PerpetualMarketLaunchProposal} returns this
 */
proto.injective.exchange.v1beta1.PerpetualMarketLaunchProposal.prototype.setOracleType = function(value) {
  return jspb.Message.setProto3EnumField(this, 8, value);
};


/**
 * optional string initial_margin_ratio = 9;
 * @return {string}
 */
proto.injective.exchange.v1beta1.PerpetualMarketLaunchProposal.prototype.getInitialMarginRatio = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.injective.exchange.v1beta1.PerpetualMarketLaunchProposal} returns this
 */
proto.injective.exchange.v1beta1.PerpetualMarketLaunchProposal.prototype.setInitialMarginRatio = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * optional string maintenance_margin_ratio = 10;
 * @return {string}
 */
proto.injective.exchange.v1beta1.PerpetualMarketLaunchProposal.prototype.getMaintenanceMarginRatio = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/**
 * @param {string} value
 * @return {!proto.injective.exchange.v1beta1.PerpetualMarketLaunchProposal} returns this
 */
proto.injective.exchange.v1beta1.PerpetualMarketLaunchProposal.prototype.setMaintenanceMarginRatio = function(value) {
  return jspb.Message.setProto3StringField(this, 10, value);
};


/**
 * optional string maker_fee_rate = 11;
 * @return {string}
 */
proto.injective.exchange.v1beta1.PerpetualMarketLaunchProposal.prototype.getMakerFeeRate = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 11, ""));
};


/**
 * @param {string} value
 * @return {!proto.injective.exchange.v1beta1.PerpetualMarketLaunchProposal} returns this
 */
proto.injective.exchange.v1beta1.PerpetualMarketLaunchProposal.prototype.setMakerFeeRate = function(value) {
  return jspb.Message.setProto3StringField(this, 11, value);
};


/**
 * optional string taker_fee_rate = 12;
 * @return {string}
 */
proto.injective.exchange.v1beta1.PerpetualMarketLaunchProposal.prototype.getTakerFeeRate = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 12, ""));
};


/**
 * @param {string} value
 * @return {!proto.injective.exchange.v1beta1.PerpetualMarketLaunchProposal} returns this
 */
proto.injective.exchange.v1beta1.PerpetualMarketLaunchProposal.prototype.setTakerFeeRate = function(value) {
  return jspb.Message.setProto3StringField(this, 12, value);
};


/**
 * optional string min_price_tick_size = 13;
 * @return {string}
 */
proto.injective.exchange.v1beta1.PerpetualMarketLaunchProposal.prototype.getMinPriceTickSize = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 13, ""));
};


/**
 * @param {string} value
 * @return {!proto.injective.exchange.v1beta1.PerpetualMarketLaunchProposal} returns this
 */
proto.injective.exchange.v1beta1.PerpetualMarketLaunchProposal.prototype.setMinPriceTickSize = function(value) {
  return jspb.Message.setProto3StringField(this, 13, value);
};


/**
 * optional string min_quantity_tick_size = 14;
 * @return {string}
 */
proto.injective.exchange.v1beta1.PerpetualMarketLaunchProposal.prototype.getMinQuantityTickSize = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 14, ""));
};


/**
 * @param {string} value
 * @return {!proto.injective.exchange.v1beta1.PerpetualMarketLaunchProposal} returns this
 */
proto.injective.exchange.v1beta1.PerpetualMarketLaunchProposal.prototype.setMinQuantityTickSize = function(value) {
  return jspb.Message.setProto3StringField(this, 14, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.injective.exchange.v1beta1.ExpiryFuturesMarketLaunchProposal.prototype.toObject = function(opt_includeInstance) {
  return proto.injective.exchange.v1beta1.ExpiryFuturesMarketLaunchProposal.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.injective.exchange.v1beta1.ExpiryFuturesMarketLaunchProposal} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.injective.exchange.v1beta1.ExpiryFuturesMarketLaunchProposal.toObject = function(includeInstance, msg) {
  var f, obj = {
    title: jspb.Message.getFieldWithDefault(msg, 1, ""),
    description: jspb.Message.getFieldWithDefault(msg, 2, ""),
    ticker: jspb.Message.getFieldWithDefault(msg, 3, ""),
    quoteDenom: jspb.Message.getFieldWithDefault(msg, 4, ""),
    oracleBase: jspb.Message.getFieldWithDefault(msg, 5, ""),
    oracleQuote: jspb.Message.getFieldWithDefault(msg, 6, ""),
    oracleScaleFactor: jspb.Message.getFieldWithDefault(msg, 7, 0),
    oracleType: jspb.Message.getFieldWithDefault(msg, 8, 0),
    expiry: jspb.Message.getFieldWithDefault(msg, 9, 0),
    initialMarginRatio: jspb.Message.getFieldWithDefault(msg, 10, ""),
    maintenanceMarginRatio: jspb.Message.getFieldWithDefault(msg, 11, ""),
    makerFeeRate: jspb.Message.getFieldWithDefault(msg, 12, ""),
    takerFeeRate: jspb.Message.getFieldWithDefault(msg, 13, ""),
    minPriceTickSize: jspb.Message.getFieldWithDefault(msg, 14, ""),
    minQuantityTickSize: jspb.Message.getFieldWithDefault(msg, 15, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.injective.exchange.v1beta1.ExpiryFuturesMarketLaunchProposal}
 */
proto.injective.exchange.v1beta1.ExpiryFuturesMarketLaunchProposal.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.injective.exchange.v1beta1.ExpiryFuturesMarketLaunchProposal;
  return proto.injective.exchange.v1beta1.ExpiryFuturesMarketLaunchProposal.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.injective.exchange.v1beta1.ExpiryFuturesMarketLaunchProposal} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.injective.exchange.v1beta1.ExpiryFuturesMarketLaunchProposal}
 */
proto.injective.exchange.v1beta1.ExpiryFuturesMarketLaunchProposal.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setTitle(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setTicker(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setQuoteDenom(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setOracleBase(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setOracleQuote(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setOracleScaleFactor(value);
      break;
    case 8:
      var value = /** @type {!proto.injective.oracle.v1beta1.OracleType} */ (reader.readEnum());
      msg.setOracleType(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setExpiry(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setInitialMarginRatio(value);
      break;
    case 11:
      var value = /** @type {string} */ (reader.readString());
      msg.setMaintenanceMarginRatio(value);
      break;
    case 12:
      var value = /** @type {string} */ (reader.readString());
      msg.setMakerFeeRate(value);
      break;
    case 13:
      var value = /** @type {string} */ (reader.readString());
      msg.setTakerFeeRate(value);
      break;
    case 14:
      var value = /** @type {string} */ (reader.readString());
      msg.setMinPriceTickSize(value);
      break;
    case 15:
      var value = /** @type {string} */ (reader.readString());
      msg.setMinQuantityTickSize(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.injective.exchange.v1beta1.ExpiryFuturesMarketLaunchProposal.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.injective.exchange.v1beta1.ExpiryFuturesMarketLaunchProposal.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.injective.exchange.v1beta1.ExpiryFuturesMarketLaunchProposal} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.injective.exchange.v1beta1.ExpiryFuturesMarketLaunchProposal.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTitle();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getTicker();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getQuoteDenom();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getOracleBase();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getOracleQuote();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getOracleScaleFactor();
  if (f !== 0) {
    writer.writeUint32(
      7,
      f
    );
  }
  f = message.getOracleType();
  if (f !== 0.0) {
    writer.writeEnum(
      8,
      f
    );
  }
  f = message.getExpiry();
  if (f !== 0) {
    writer.writeInt64(
      9,
      f
    );
  }
  f = message.getInitialMarginRatio();
  if (f.length > 0) {
    writer.writeString(
      10,
      f
    );
  }
  f = message.getMaintenanceMarginRatio();
  if (f.length > 0) {
    writer.writeString(
      11,
      f
    );
  }
  f = message.getMakerFeeRate();
  if (f.length > 0) {
    writer.writeString(
      12,
      f
    );
  }
  f = message.getTakerFeeRate();
  if (f.length > 0) {
    writer.writeString(
      13,
      f
    );
  }
  f = message.getMinPriceTickSize();
  if (f.length > 0) {
    writer.writeString(
      14,
      f
    );
  }
  f = message.getMinQuantityTickSize();
  if (f.length > 0) {
    writer.writeString(
      15,
      f
    );
  }
};


/**
 * optional string title = 1;
 * @return {string}
 */
proto.injective.exchange.v1beta1.ExpiryFuturesMarketLaunchProposal.prototype.getTitle = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.injective.exchange.v1beta1.ExpiryFuturesMarketLaunchProposal} returns this
 */
proto.injective.exchange.v1beta1.ExpiryFuturesMarketLaunchProposal.prototype.setTitle = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string description = 2;
 * @return {string}
 */
proto.injective.exchange.v1beta1.ExpiryFuturesMarketLaunchProposal.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.injective.exchange.v1beta1.ExpiryFuturesMarketLaunchProposal} returns this
 */
proto.injective.exchange.v1beta1.ExpiryFuturesMarketLaunchProposal.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string ticker = 3;
 * @return {string}
 */
proto.injective.exchange.v1beta1.ExpiryFuturesMarketLaunchProposal.prototype.getTicker = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.injective.exchange.v1beta1.ExpiryFuturesMarketLaunchProposal} returns this
 */
proto.injective.exchange.v1beta1.ExpiryFuturesMarketLaunchProposal.prototype.setTicker = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string quote_denom = 4;
 * @return {string}
 */
proto.injective.exchange.v1beta1.ExpiryFuturesMarketLaunchProposal.prototype.getQuoteDenom = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.injective.exchange.v1beta1.ExpiryFuturesMarketLaunchProposal} returns this
 */
proto.injective.exchange.v1beta1.ExpiryFuturesMarketLaunchProposal.prototype.setQuoteDenom = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string oracle_base = 5;
 * @return {string}
 */
proto.injective.exchange.v1beta1.ExpiryFuturesMarketLaunchProposal.prototype.getOracleBase = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.injective.exchange.v1beta1.ExpiryFuturesMarketLaunchProposal} returns this
 */
proto.injective.exchange.v1beta1.ExpiryFuturesMarketLaunchProposal.prototype.setOracleBase = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string oracle_quote = 6;
 * @return {string}
 */
proto.injective.exchange.v1beta1.ExpiryFuturesMarketLaunchProposal.prototype.getOracleQuote = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.injective.exchange.v1beta1.ExpiryFuturesMarketLaunchProposal} returns this
 */
proto.injective.exchange.v1beta1.ExpiryFuturesMarketLaunchProposal.prototype.setOracleQuote = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional uint32 oracle_scale_factor = 7;
 * @return {number}
 */
proto.injective.exchange.v1beta1.ExpiryFuturesMarketLaunchProposal.prototype.getOracleScaleFactor = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.injective.exchange.v1beta1.ExpiryFuturesMarketLaunchProposal} returns this
 */
proto.injective.exchange.v1beta1.ExpiryFuturesMarketLaunchProposal.prototype.setOracleScaleFactor = function(value) {
  return jspb.Message.setProto3IntField(this, 7, value);
};


/**
 * optional injective.oracle.v1beta1.OracleType oracle_type = 8;
 * @return {!proto.injective.oracle.v1beta1.OracleType}
 */
proto.injective.exchange.v1beta1.ExpiryFuturesMarketLaunchProposal.prototype.getOracleType = function() {
  return /** @type {!proto.injective.oracle.v1beta1.OracleType} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {!proto.injective.oracle.v1beta1.OracleType} value
 * @return {!proto.injective.exchange.v1beta1.ExpiryFuturesMarketLaunchProposal} returns this
 */
proto.injective.exchange.v1beta1.ExpiryFuturesMarketLaunchProposal.prototype.setOracleType = function(value) {
  return jspb.Message.setProto3EnumField(this, 8, value);
};


/**
 * optional int64 expiry = 9;
 * @return {number}
 */
proto.injective.exchange.v1beta1.ExpiryFuturesMarketLaunchProposal.prototype.getExpiry = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {number} value
 * @return {!proto.injective.exchange.v1beta1.ExpiryFuturesMarketLaunchProposal} returns this
 */
proto.injective.exchange.v1beta1.ExpiryFuturesMarketLaunchProposal.prototype.setExpiry = function(value) {
  return jspb.Message.setProto3IntField(this, 9, value);
};


/**
 * optional string initial_margin_ratio = 10;
 * @return {string}
 */
proto.injective.exchange.v1beta1.ExpiryFuturesMarketLaunchProposal.prototype.getInitialMarginRatio = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/**
 * @param {string} value
 * @return {!proto.injective.exchange.v1beta1.ExpiryFuturesMarketLaunchProposal} returns this
 */
proto.injective.exchange.v1beta1.ExpiryFuturesMarketLaunchProposal.prototype.setInitialMarginRatio = function(value) {
  return jspb.Message.setProto3StringField(this, 10, value);
};


/**
 * optional string maintenance_margin_ratio = 11;
 * @return {string}
 */
proto.injective.exchange.v1beta1.ExpiryFuturesMarketLaunchProposal.prototype.getMaintenanceMarginRatio = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 11, ""));
};


/**
 * @param {string} value
 * @return {!proto.injective.exchange.v1beta1.ExpiryFuturesMarketLaunchProposal} returns this
 */
proto.injective.exchange.v1beta1.ExpiryFuturesMarketLaunchProposal.prototype.setMaintenanceMarginRatio = function(value) {
  return jspb.Message.setProto3StringField(this, 11, value);
};


/**
 * optional string maker_fee_rate = 12;
 * @return {string}
 */
proto.injective.exchange.v1beta1.ExpiryFuturesMarketLaunchProposal.prototype.getMakerFeeRate = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 12, ""));
};


/**
 * @param {string} value
 * @return {!proto.injective.exchange.v1beta1.ExpiryFuturesMarketLaunchProposal} returns this
 */
proto.injective.exchange.v1beta1.ExpiryFuturesMarketLaunchProposal.prototype.setMakerFeeRate = function(value) {
  return jspb.Message.setProto3StringField(this, 12, value);
};


/**
 * optional string taker_fee_rate = 13;
 * @return {string}
 */
proto.injective.exchange.v1beta1.ExpiryFuturesMarketLaunchProposal.prototype.getTakerFeeRate = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 13, ""));
};


/**
 * @param {string} value
 * @return {!proto.injective.exchange.v1beta1.ExpiryFuturesMarketLaunchProposal} returns this
 */
proto.injective.exchange.v1beta1.ExpiryFuturesMarketLaunchProposal.prototype.setTakerFeeRate = function(value) {
  return jspb.Message.setProto3StringField(this, 13, value);
};


/**
 * optional string min_price_tick_size = 14;
 * @return {string}
 */
proto.injective.exchange.v1beta1.ExpiryFuturesMarketLaunchProposal.prototype.getMinPriceTickSize = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 14, ""));
};


/**
 * @param {string} value
 * @return {!proto.injective.exchange.v1beta1.ExpiryFuturesMarketLaunchProposal} returns this
 */
proto.injective.exchange.v1beta1.ExpiryFuturesMarketLaunchProposal.prototype.setMinPriceTickSize = function(value) {
  return jspb.Message.setProto3StringField(this, 14, value);
};


/**
 * optional string min_quantity_tick_size = 15;
 * @return {string}
 */
proto.injective.exchange.v1beta1.ExpiryFuturesMarketLaunchProposal.prototype.getMinQuantityTickSize = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 15, ""));
};


/**
 * @param {string} value
 * @return {!proto.injective.exchange.v1beta1.ExpiryFuturesMarketLaunchProposal} returns this
 */
proto.injective.exchange.v1beta1.ExpiryFuturesMarketLaunchProposal.prototype.setMinQuantityTickSize = function(value) {
  return jspb.Message.setProto3StringField(this, 15, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.injective.exchange.v1beta1.DerivativeMarketParamUpdateProposal.prototype.toObject = function(opt_includeInstance) {
  return proto.injective.exchange.v1beta1.DerivativeMarketParamUpdateProposal.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.injective.exchange.v1beta1.DerivativeMarketParamUpdateProposal} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.injective.exchange.v1beta1.DerivativeMarketParamUpdateProposal.toObject = function(includeInstance, msg) {
  var f, obj = {
    title: jspb.Message.getFieldWithDefault(msg, 1, ""),
    description: jspb.Message.getFieldWithDefault(msg, 2, ""),
    marketId: jspb.Message.getFieldWithDefault(msg, 3, ""),
    initialMarginRatio: jspb.Message.getFieldWithDefault(msg, 4, ""),
    maintenanceMarginRatio: jspb.Message.getFieldWithDefault(msg, 5, ""),
    makerFeeRate: jspb.Message.getFieldWithDefault(msg, 6, ""),
    takerFeeRate: jspb.Message.getFieldWithDefault(msg, 7, ""),
    relayerFeeShareRate: jspb.Message.getFieldWithDefault(msg, 8, ""),
    minPriceTickSize: jspb.Message.getFieldWithDefault(msg, 9, ""),
    minQuantityTickSize: jspb.Message.getFieldWithDefault(msg, 10, ""),
    hourlyinterestrate: jspb.Message.getFieldWithDefault(msg, 11, ""),
    hourlyfundingratecap: jspb.Message.getFieldWithDefault(msg, 12, ""),
    status: jspb.Message.getFieldWithDefault(msg, 13, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.injective.exchange.v1beta1.DerivativeMarketParamUpdateProposal}
 */
proto.injective.exchange.v1beta1.DerivativeMarketParamUpdateProposal.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.injective.exchange.v1beta1.DerivativeMarketParamUpdateProposal;
  return proto.injective.exchange.v1beta1.DerivativeMarketParamUpdateProposal.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.injective.exchange.v1beta1.DerivativeMarketParamUpdateProposal} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.injective.exchange.v1beta1.DerivativeMarketParamUpdateProposal}
 */
proto.injective.exchange.v1beta1.DerivativeMarketParamUpdateProposal.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setTitle(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setMarketId(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setInitialMarginRatio(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setMaintenanceMarginRatio(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setMakerFeeRate(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setTakerFeeRate(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setRelayerFeeShareRate(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setMinPriceTickSize(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setMinQuantityTickSize(value);
      break;
    case 11:
      var value = /** @type {string} */ (reader.readString());
      msg.setHourlyinterestrate(value);
      break;
    case 12:
      var value = /** @type {string} */ (reader.readString());
      msg.setHourlyfundingratecap(value);
      break;
    case 13:
      var value = /** @type {!proto.injective.exchange.v1beta1.MarketStatus} */ (reader.readEnum());
      msg.setStatus(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.injective.exchange.v1beta1.DerivativeMarketParamUpdateProposal.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.injective.exchange.v1beta1.DerivativeMarketParamUpdateProposal.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.injective.exchange.v1beta1.DerivativeMarketParamUpdateProposal} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.injective.exchange.v1beta1.DerivativeMarketParamUpdateProposal.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTitle();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getMarketId();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getInitialMarginRatio();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getMaintenanceMarginRatio();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getMakerFeeRate();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getTakerFeeRate();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getRelayerFeeShareRate();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getMinPriceTickSize();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
  f = message.getMinQuantityTickSize();
  if (f.length > 0) {
    writer.writeString(
      10,
      f
    );
  }
  f = message.getHourlyinterestrate();
  if (f.length > 0) {
    writer.writeString(
      11,
      f
    );
  }
  f = message.getHourlyfundingratecap();
  if (f.length > 0) {
    writer.writeString(
      12,
      f
    );
  }
  f = message.getStatus();
  if (f !== 0.0) {
    writer.writeEnum(
      13,
      f
    );
  }
};


/**
 * optional string title = 1;
 * @return {string}
 */
proto.injective.exchange.v1beta1.DerivativeMarketParamUpdateProposal.prototype.getTitle = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.injective.exchange.v1beta1.DerivativeMarketParamUpdateProposal} returns this
 */
proto.injective.exchange.v1beta1.DerivativeMarketParamUpdateProposal.prototype.setTitle = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string description = 2;
 * @return {string}
 */
proto.injective.exchange.v1beta1.DerivativeMarketParamUpdateProposal.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.injective.exchange.v1beta1.DerivativeMarketParamUpdateProposal} returns this
 */
proto.injective.exchange.v1beta1.DerivativeMarketParamUpdateProposal.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string market_id = 3;
 * @return {string}
 */
proto.injective.exchange.v1beta1.DerivativeMarketParamUpdateProposal.prototype.getMarketId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.injective.exchange.v1beta1.DerivativeMarketParamUpdateProposal} returns this
 */
proto.injective.exchange.v1beta1.DerivativeMarketParamUpdateProposal.prototype.setMarketId = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string initial_margin_ratio = 4;
 * @return {string}
 */
proto.injective.exchange.v1beta1.DerivativeMarketParamUpdateProposal.prototype.getInitialMarginRatio = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.injective.exchange.v1beta1.DerivativeMarketParamUpdateProposal} returns this
 */
proto.injective.exchange.v1beta1.DerivativeMarketParamUpdateProposal.prototype.setInitialMarginRatio = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string maintenance_margin_ratio = 5;
 * @return {string}
 */
proto.injective.exchange.v1beta1.DerivativeMarketParamUpdateProposal.prototype.getMaintenanceMarginRatio = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.injective.exchange.v1beta1.DerivativeMarketParamUpdateProposal} returns this
 */
proto.injective.exchange.v1beta1.DerivativeMarketParamUpdateProposal.prototype.setMaintenanceMarginRatio = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string maker_fee_rate = 6;
 * @return {string}
 */
proto.injective.exchange.v1beta1.DerivativeMarketParamUpdateProposal.prototype.getMakerFeeRate = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.injective.exchange.v1beta1.DerivativeMarketParamUpdateProposal} returns this
 */
proto.injective.exchange.v1beta1.DerivativeMarketParamUpdateProposal.prototype.setMakerFeeRate = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string taker_fee_rate = 7;
 * @return {string}
 */
proto.injective.exchange.v1beta1.DerivativeMarketParamUpdateProposal.prototype.getTakerFeeRate = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.injective.exchange.v1beta1.DerivativeMarketParamUpdateProposal} returns this
 */
proto.injective.exchange.v1beta1.DerivativeMarketParamUpdateProposal.prototype.setTakerFeeRate = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional string relayer_fee_share_rate = 8;
 * @return {string}
 */
proto.injective.exchange.v1beta1.DerivativeMarketParamUpdateProposal.prototype.getRelayerFeeShareRate = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.injective.exchange.v1beta1.DerivativeMarketParamUpdateProposal} returns this
 */
proto.injective.exchange.v1beta1.DerivativeMarketParamUpdateProposal.prototype.setRelayerFeeShareRate = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional string min_price_tick_size = 9;
 * @return {string}
 */
proto.injective.exchange.v1beta1.DerivativeMarketParamUpdateProposal.prototype.getMinPriceTickSize = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.injective.exchange.v1beta1.DerivativeMarketParamUpdateProposal} returns this
 */
proto.injective.exchange.v1beta1.DerivativeMarketParamUpdateProposal.prototype.setMinPriceTickSize = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * optional string min_quantity_tick_size = 10;
 * @return {string}
 */
proto.injective.exchange.v1beta1.DerivativeMarketParamUpdateProposal.prototype.getMinQuantityTickSize = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/**
 * @param {string} value
 * @return {!proto.injective.exchange.v1beta1.DerivativeMarketParamUpdateProposal} returns this
 */
proto.injective.exchange.v1beta1.DerivativeMarketParamUpdateProposal.prototype.setMinQuantityTickSize = function(value) {
  return jspb.Message.setProto3StringField(this, 10, value);
};


/**
 * optional string HourlyInterestRate = 11;
 * @return {string}
 */
proto.injective.exchange.v1beta1.DerivativeMarketParamUpdateProposal.prototype.getHourlyinterestrate = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 11, ""));
};


/**
 * @param {string} value
 * @return {!proto.injective.exchange.v1beta1.DerivativeMarketParamUpdateProposal} returns this
 */
proto.injective.exchange.v1beta1.DerivativeMarketParamUpdateProposal.prototype.setHourlyinterestrate = function(value) {
  return jspb.Message.setProto3StringField(this, 11, value);
};


/**
 * optional string HourlyFundingRateCap = 12;
 * @return {string}
 */
proto.injective.exchange.v1beta1.DerivativeMarketParamUpdateProposal.prototype.getHourlyfundingratecap = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 12, ""));
};


/**
 * @param {string} value
 * @return {!proto.injective.exchange.v1beta1.DerivativeMarketParamUpdateProposal} returns this
 */
proto.injective.exchange.v1beta1.DerivativeMarketParamUpdateProposal.prototype.setHourlyfundingratecap = function(value) {
  return jspb.Message.setProto3StringField(this, 12, value);
};


/**
 * optional MarketStatus status = 13;
 * @return {!proto.injective.exchange.v1beta1.MarketStatus}
 */
proto.injective.exchange.v1beta1.DerivativeMarketParamUpdateProposal.prototype.getStatus = function() {
  return /** @type {!proto.injective.exchange.v1beta1.MarketStatus} */ (jspb.Message.getFieldWithDefault(this, 13, 0));
};


/**
 * @param {!proto.injective.exchange.v1beta1.MarketStatus} value
 * @return {!proto.injective.exchange.v1beta1.DerivativeMarketParamUpdateProposal} returns this
 */
proto.injective.exchange.v1beta1.DerivativeMarketParamUpdateProposal.prototype.setStatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 13, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.injective.exchange.v1beta1.DerivativeMarketBandOraclePromotionProposal.prototype.toObject = function(opt_includeInstance) {
  return proto.injective.exchange.v1beta1.DerivativeMarketBandOraclePromotionProposal.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.injective.exchange.v1beta1.DerivativeMarketBandOraclePromotionProposal} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.injective.exchange.v1beta1.DerivativeMarketBandOraclePromotionProposal.toObject = function(includeInstance, msg) {
  var f, obj = {
    title: jspb.Message.getFieldWithDefault(msg, 1, ""),
    description: jspb.Message.getFieldWithDefault(msg, 2, ""),
    marketId: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.injective.exchange.v1beta1.DerivativeMarketBandOraclePromotionProposal}
 */
proto.injective.exchange.v1beta1.DerivativeMarketBandOraclePromotionProposal.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.injective.exchange.v1beta1.DerivativeMarketBandOraclePromotionProposal;
  return proto.injective.exchange.v1beta1.DerivativeMarketBandOraclePromotionProposal.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.injective.exchange.v1beta1.DerivativeMarketBandOraclePromotionProposal} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.injective.exchange.v1beta1.DerivativeMarketBandOraclePromotionProposal}
 */
proto.injective.exchange.v1beta1.DerivativeMarketBandOraclePromotionProposal.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setTitle(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setMarketId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.injective.exchange.v1beta1.DerivativeMarketBandOraclePromotionProposal.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.injective.exchange.v1beta1.DerivativeMarketBandOraclePromotionProposal.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.injective.exchange.v1beta1.DerivativeMarketBandOraclePromotionProposal} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.injective.exchange.v1beta1.DerivativeMarketBandOraclePromotionProposal.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTitle();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getMarketId();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string title = 1;
 * @return {string}
 */
proto.injective.exchange.v1beta1.DerivativeMarketBandOraclePromotionProposal.prototype.getTitle = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.injective.exchange.v1beta1.DerivativeMarketBandOraclePromotionProposal} returns this
 */
proto.injective.exchange.v1beta1.DerivativeMarketBandOraclePromotionProposal.prototype.setTitle = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string description = 2;
 * @return {string}
 */
proto.injective.exchange.v1beta1.DerivativeMarketBandOraclePromotionProposal.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.injective.exchange.v1beta1.DerivativeMarketBandOraclePromotionProposal} returns this
 */
proto.injective.exchange.v1beta1.DerivativeMarketBandOraclePromotionProposal.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string market_id = 3;
 * @return {string}
 */
proto.injective.exchange.v1beta1.DerivativeMarketBandOraclePromotionProposal.prototype.getMarketId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.injective.exchange.v1beta1.DerivativeMarketBandOraclePromotionProposal} returns this
 */
proto.injective.exchange.v1beta1.DerivativeMarketBandOraclePromotionProposal.prototype.setMarketId = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.injective.exchange.v1beta1.LiquidityMiningCampaignProposal.prototype.toObject = function(opt_includeInstance) {
  return proto.injective.exchange.v1beta1.LiquidityMiningCampaignProposal.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.injective.exchange.v1beta1.LiquidityMiningCampaignProposal} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.injective.exchange.v1beta1.LiquidityMiningCampaignProposal.toObject = function(includeInstance, msg) {
  var f, obj = {
    title: jspb.Message.getFieldWithDefault(msg, 1, ""),
    description: jspb.Message.getFieldWithDefault(msg, 2, ""),
    campaign: (f = msg.getCampaign()) && injective_exchange_v1beta1_exchange_pb.LiquidityMiningCampaign.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.injective.exchange.v1beta1.LiquidityMiningCampaignProposal}
 */
proto.injective.exchange.v1beta1.LiquidityMiningCampaignProposal.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.injective.exchange.v1beta1.LiquidityMiningCampaignProposal;
  return proto.injective.exchange.v1beta1.LiquidityMiningCampaignProposal.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.injective.exchange.v1beta1.LiquidityMiningCampaignProposal} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.injective.exchange.v1beta1.LiquidityMiningCampaignProposal}
 */
proto.injective.exchange.v1beta1.LiquidityMiningCampaignProposal.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setTitle(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 3:
      var value = new injective_exchange_v1beta1_exchange_pb.LiquidityMiningCampaign;
      reader.readMessage(value,injective_exchange_v1beta1_exchange_pb.LiquidityMiningCampaign.deserializeBinaryFromReader);
      msg.setCampaign(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.injective.exchange.v1beta1.LiquidityMiningCampaignProposal.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.injective.exchange.v1beta1.LiquidityMiningCampaignProposal.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.injective.exchange.v1beta1.LiquidityMiningCampaignProposal} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.injective.exchange.v1beta1.LiquidityMiningCampaignProposal.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTitle();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getCampaign();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      injective_exchange_v1beta1_exchange_pb.LiquidityMiningCampaign.serializeBinaryToWriter
    );
  }
};


/**
 * optional string title = 1;
 * @return {string}
 */
proto.injective.exchange.v1beta1.LiquidityMiningCampaignProposal.prototype.getTitle = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.injective.exchange.v1beta1.LiquidityMiningCampaignProposal} returns this
 */
proto.injective.exchange.v1beta1.LiquidityMiningCampaignProposal.prototype.setTitle = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string description = 2;
 * @return {string}
 */
proto.injective.exchange.v1beta1.LiquidityMiningCampaignProposal.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.injective.exchange.v1beta1.LiquidityMiningCampaignProposal} returns this
 */
proto.injective.exchange.v1beta1.LiquidityMiningCampaignProposal.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional LiquidityMiningCampaign campaign = 3;
 * @return {?proto.injective.exchange.v1beta1.LiquidityMiningCampaign}
 */
proto.injective.exchange.v1beta1.LiquidityMiningCampaignProposal.prototype.getCampaign = function() {
  return /** @type{?proto.injective.exchange.v1beta1.LiquidityMiningCampaign} */ (
    jspb.Message.getWrapperField(this, injective_exchange_v1beta1_exchange_pb.LiquidityMiningCampaign, 3));
};


/**
 * @param {?proto.injective.exchange.v1beta1.LiquidityMiningCampaign|undefined} value
 * @return {!proto.injective.exchange.v1beta1.LiquidityMiningCampaignProposal} returns this
*/
proto.injective.exchange.v1beta1.LiquidityMiningCampaignProposal.prototype.setCampaign = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.injective.exchange.v1beta1.LiquidityMiningCampaignProposal} returns this
 */
proto.injective.exchange.v1beta1.LiquidityMiningCampaignProposal.prototype.clearCampaign = function() {
  return this.setCampaign(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.injective.exchange.v1beta1.LiquidityMiningCampaignProposal.prototype.hasCampaign = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * @enum {number}
 */
proto.injective.exchange.v1beta1.ExchangeType = {
  EXCHANGE_UNSPECIFIED: 0,
  SPOT: 1,
  DERIVATIVES: 2
};

goog.object.extend(exports, proto.injective.exchange.v1beta1);
