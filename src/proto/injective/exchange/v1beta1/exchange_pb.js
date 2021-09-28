// source: injective/exchange/v1beta1/exchange.proto
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
var cosmos_base_v1beta1_coin_pb = require('../../../cosmos/base/v1beta1/coin_pb.js');
goog.object.extend(proto, cosmos_base_v1beta1_coin_pb);
var injective_oracle_v1beta1_oracle_pb = require('../../../injective/oracle/v1beta1/oracle_pb.js');
goog.object.extend(proto, injective_oracle_v1beta1_oracle_pb);
goog.exportSymbol('proto.injective.exchange.v1beta1.Deposit', null, global);
goog.exportSymbol('proto.injective.exchange.v1beta1.DepositUpdate', null, global);
goog.exportSymbol('proto.injective.exchange.v1beta1.DerivativeLimitOrder', null, global);
goog.exportSymbol('proto.injective.exchange.v1beta1.DerivativeMarket', null, global);
goog.exportSymbol('proto.injective.exchange.v1beta1.DerivativeMarketOrder', null, global);
goog.exportSymbol('proto.injective.exchange.v1beta1.DerivativeMarketOrderCancel', null, global);
goog.exportSymbol('proto.injective.exchange.v1beta1.DerivativeMarketSettlementInfo', null, global);
goog.exportSymbol('proto.injective.exchange.v1beta1.DerivativeOrder', null, global);
goog.exportSymbol('proto.injective.exchange.v1beta1.DerivativeTradeLog', null, global);
goog.exportSymbol('proto.injective.exchange.v1beta1.EventBatchDepositUpdate', null, global);
goog.exportSymbol('proto.injective.exchange.v1beta1.EventBatchDerivativeExecution', null, global);
goog.exportSymbol('proto.injective.exchange.v1beta1.EventBatchDerivativePosition', null, global);
goog.exportSymbol('proto.injective.exchange.v1beta1.EventBatchSpotExecution', null, global);
goog.exportSymbol('proto.injective.exchange.v1beta1.EventCancelDerivativeOrder', null, global);
goog.exportSymbol('proto.injective.exchange.v1beta1.EventCancelSpotOrder', null, global);
goog.exportSymbol('proto.injective.exchange.v1beta1.EventDerivativeMarketPaused', null, global);
goog.exportSymbol('proto.injective.exchange.v1beta1.EventExpiryFuturesMarketUpdate', null, global);
goog.exportSymbol('proto.injective.exchange.v1beta1.EventNewDerivativeOrders', null, global);
goog.exportSymbol('proto.injective.exchange.v1beta1.EventNewSpotOrders', null, global);
goog.exportSymbol('proto.injective.exchange.v1beta1.EventPerpetualMarketFundingUpdate', null, global);
goog.exportSymbol('proto.injective.exchange.v1beta1.EventPerpetualMarketUpdate', null, global);
goog.exportSymbol('proto.injective.exchange.v1beta1.EventSpotMarketUpdate', null, global);
goog.exportSymbol('proto.injective.exchange.v1beta1.EventSubaccountBalanceTransfer', null, global);
goog.exportSymbol('proto.injective.exchange.v1beta1.EventSubaccountDeposit', null, global);
goog.exportSymbol('proto.injective.exchange.v1beta1.EventSubaccountWithdraw', null, global);
goog.exportSymbol('proto.injective.exchange.v1beta1.ExecutionType', null, global);
goog.exportSymbol('proto.injective.exchange.v1beta1.ExpiryFuturesMarketInfo', null, global);
goog.exportSymbol('proto.injective.exchange.v1beta1.LiquidityMiningCampaign', null, global);
goog.exportSymbol('proto.injective.exchange.v1beta1.MarketOrderIndicator', null, global);
goog.exportSymbol('proto.injective.exchange.v1beta1.MarketStatus', null, global);
goog.exportSymbol('proto.injective.exchange.v1beta1.NextFundingTimestamp', null, global);
goog.exportSymbol('proto.injective.exchange.v1beta1.OrderInfo', null, global);
goog.exportSymbol('proto.injective.exchange.v1beta1.OrderType', null, global);
goog.exportSymbol('proto.injective.exchange.v1beta1.Params', null, global);
goog.exportSymbol('proto.injective.exchange.v1beta1.PerpetualMarketFunding', null, global);
goog.exportSymbol('proto.injective.exchange.v1beta1.PerpetualMarketInfo', null, global);
goog.exportSymbol('proto.injective.exchange.v1beta1.Position', null, global);
goog.exportSymbol('proto.injective.exchange.v1beta1.PositionDelta', null, global);
goog.exportSymbol('proto.injective.exchange.v1beta1.SpotLimitOrder', null, global);
goog.exportSymbol('proto.injective.exchange.v1beta1.SpotMarket', null, global);
goog.exportSymbol('proto.injective.exchange.v1beta1.SpotMarketOrder', null, global);
goog.exportSymbol('proto.injective.exchange.v1beta1.SpotOrder', null, global);
goog.exportSymbol('proto.injective.exchange.v1beta1.SubaccountDeposit', null, global);
goog.exportSymbol('proto.injective.exchange.v1beta1.SubaccountOrder', null, global);
goog.exportSymbol('proto.injective.exchange.v1beta1.SubaccountOrderbookMetadata', null, global);
goog.exportSymbol('proto.injective.exchange.v1beta1.SubaccountPosition', null, global);
goog.exportSymbol('proto.injective.exchange.v1beta1.SubaccountTradeNonce', null, global);
goog.exportSymbol('proto.injective.exchange.v1beta1.TradeLog', null, global);
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
proto.injective.exchange.v1beta1.Params = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.injective.exchange.v1beta1.Params, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.injective.exchange.v1beta1.Params.displayName = 'proto.injective.exchange.v1beta1.Params';
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
proto.injective.exchange.v1beta1.DerivativeMarket = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.injective.exchange.v1beta1.DerivativeMarket, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.injective.exchange.v1beta1.DerivativeMarket.displayName = 'proto.injective.exchange.v1beta1.DerivativeMarket';
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
proto.injective.exchange.v1beta1.ExpiryFuturesMarketInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.injective.exchange.v1beta1.ExpiryFuturesMarketInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.injective.exchange.v1beta1.ExpiryFuturesMarketInfo.displayName = 'proto.injective.exchange.v1beta1.ExpiryFuturesMarketInfo';
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
proto.injective.exchange.v1beta1.PerpetualMarketInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.injective.exchange.v1beta1.PerpetualMarketInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.injective.exchange.v1beta1.PerpetualMarketInfo.displayName = 'proto.injective.exchange.v1beta1.PerpetualMarketInfo';
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
proto.injective.exchange.v1beta1.PerpetualMarketFunding = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.injective.exchange.v1beta1.PerpetualMarketFunding, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.injective.exchange.v1beta1.PerpetualMarketFunding.displayName = 'proto.injective.exchange.v1beta1.PerpetualMarketFunding';
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
proto.injective.exchange.v1beta1.DerivativeMarketSettlementInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.injective.exchange.v1beta1.DerivativeMarketSettlementInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.injective.exchange.v1beta1.DerivativeMarketSettlementInfo.displayName = 'proto.injective.exchange.v1beta1.DerivativeMarketSettlementInfo';
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
proto.injective.exchange.v1beta1.NextFundingTimestamp = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.injective.exchange.v1beta1.NextFundingTimestamp, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.injective.exchange.v1beta1.NextFundingTimestamp.displayName = 'proto.injective.exchange.v1beta1.NextFundingTimestamp';
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
proto.injective.exchange.v1beta1.SpotMarket = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.injective.exchange.v1beta1.SpotMarket, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.injective.exchange.v1beta1.SpotMarket.displayName = 'proto.injective.exchange.v1beta1.SpotMarket';
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
proto.injective.exchange.v1beta1.Deposit = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.injective.exchange.v1beta1.Deposit, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.injective.exchange.v1beta1.Deposit.displayName = 'proto.injective.exchange.v1beta1.Deposit';
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
proto.injective.exchange.v1beta1.SubaccountTradeNonce = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.injective.exchange.v1beta1.SubaccountTradeNonce, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.injective.exchange.v1beta1.SubaccountTradeNonce.displayName = 'proto.injective.exchange.v1beta1.SubaccountTradeNonce';
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
proto.injective.exchange.v1beta1.OrderInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.injective.exchange.v1beta1.OrderInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.injective.exchange.v1beta1.OrderInfo.displayName = 'proto.injective.exchange.v1beta1.OrderInfo';
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
proto.injective.exchange.v1beta1.SpotOrder = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.injective.exchange.v1beta1.SpotOrder, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.injective.exchange.v1beta1.SpotOrder.displayName = 'proto.injective.exchange.v1beta1.SpotOrder';
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
proto.injective.exchange.v1beta1.SpotLimitOrder = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.injective.exchange.v1beta1.SpotLimitOrder, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.injective.exchange.v1beta1.SpotLimitOrder.displayName = 'proto.injective.exchange.v1beta1.SpotLimitOrder';
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
proto.injective.exchange.v1beta1.SpotMarketOrder = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.injective.exchange.v1beta1.SpotMarketOrder, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.injective.exchange.v1beta1.SpotMarketOrder.displayName = 'proto.injective.exchange.v1beta1.SpotMarketOrder';
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
proto.injective.exchange.v1beta1.DerivativeOrder = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.injective.exchange.v1beta1.DerivativeOrder, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.injective.exchange.v1beta1.DerivativeOrder.displayName = 'proto.injective.exchange.v1beta1.DerivativeOrder';
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
proto.injective.exchange.v1beta1.SubaccountOrderbookMetadata = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.injective.exchange.v1beta1.SubaccountOrderbookMetadata, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.injective.exchange.v1beta1.SubaccountOrderbookMetadata.displayName = 'proto.injective.exchange.v1beta1.SubaccountOrderbookMetadata';
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
proto.injective.exchange.v1beta1.SubaccountOrder = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.injective.exchange.v1beta1.SubaccountOrder, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.injective.exchange.v1beta1.SubaccountOrder.displayName = 'proto.injective.exchange.v1beta1.SubaccountOrder';
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
proto.injective.exchange.v1beta1.DerivativeLimitOrder = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.injective.exchange.v1beta1.DerivativeLimitOrder, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.injective.exchange.v1beta1.DerivativeLimitOrder.displayName = 'proto.injective.exchange.v1beta1.DerivativeLimitOrder';
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
proto.injective.exchange.v1beta1.DerivativeMarketOrder = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.injective.exchange.v1beta1.DerivativeMarketOrder, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.injective.exchange.v1beta1.DerivativeMarketOrder.displayName = 'proto.injective.exchange.v1beta1.DerivativeMarketOrder';
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
proto.injective.exchange.v1beta1.Position = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.injective.exchange.v1beta1.Position, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.injective.exchange.v1beta1.Position.displayName = 'proto.injective.exchange.v1beta1.Position';
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
proto.injective.exchange.v1beta1.MarketOrderIndicator = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.injective.exchange.v1beta1.MarketOrderIndicator, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.injective.exchange.v1beta1.MarketOrderIndicator.displayName = 'proto.injective.exchange.v1beta1.MarketOrderIndicator';
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
proto.injective.exchange.v1beta1.TradeLog = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.injective.exchange.v1beta1.TradeLog, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.injective.exchange.v1beta1.TradeLog.displayName = 'proto.injective.exchange.v1beta1.TradeLog';
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
proto.injective.exchange.v1beta1.PositionDelta = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.injective.exchange.v1beta1.PositionDelta, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.injective.exchange.v1beta1.PositionDelta.displayName = 'proto.injective.exchange.v1beta1.PositionDelta';
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
proto.injective.exchange.v1beta1.DerivativeTradeLog = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.injective.exchange.v1beta1.DerivativeTradeLog, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.injective.exchange.v1beta1.DerivativeTradeLog.displayName = 'proto.injective.exchange.v1beta1.DerivativeTradeLog';
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
proto.injective.exchange.v1beta1.EventBatchSpotExecution = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.injective.exchange.v1beta1.EventBatchSpotExecution.repeatedFields_, null);
};
goog.inherits(proto.injective.exchange.v1beta1.EventBatchSpotExecution, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.injective.exchange.v1beta1.EventBatchSpotExecution.displayName = 'proto.injective.exchange.v1beta1.EventBatchSpotExecution';
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
proto.injective.exchange.v1beta1.EventBatchDerivativeExecution = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.injective.exchange.v1beta1.EventBatchDerivativeExecution.repeatedFields_, null);
};
goog.inherits(proto.injective.exchange.v1beta1.EventBatchDerivativeExecution, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.injective.exchange.v1beta1.EventBatchDerivativeExecution.displayName = 'proto.injective.exchange.v1beta1.EventBatchDerivativeExecution';
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
proto.injective.exchange.v1beta1.SubaccountPosition = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.injective.exchange.v1beta1.SubaccountPosition, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.injective.exchange.v1beta1.SubaccountPosition.displayName = 'proto.injective.exchange.v1beta1.SubaccountPosition';
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
proto.injective.exchange.v1beta1.EventBatchDerivativePosition = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.injective.exchange.v1beta1.EventBatchDerivativePosition.repeatedFields_, null);
};
goog.inherits(proto.injective.exchange.v1beta1.EventBatchDerivativePosition, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.injective.exchange.v1beta1.EventBatchDerivativePosition.displayName = 'proto.injective.exchange.v1beta1.EventBatchDerivativePosition';
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
proto.injective.exchange.v1beta1.EventDerivativeMarketPaused = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.injective.exchange.v1beta1.EventDerivativeMarketPaused, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.injective.exchange.v1beta1.EventDerivativeMarketPaused.displayName = 'proto.injective.exchange.v1beta1.EventDerivativeMarketPaused';
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
proto.injective.exchange.v1beta1.EventNewSpotOrders = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.injective.exchange.v1beta1.EventNewSpotOrders.repeatedFields_, null);
};
goog.inherits(proto.injective.exchange.v1beta1.EventNewSpotOrders, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.injective.exchange.v1beta1.EventNewSpotOrders.displayName = 'proto.injective.exchange.v1beta1.EventNewSpotOrders';
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
proto.injective.exchange.v1beta1.EventNewDerivativeOrders = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.injective.exchange.v1beta1.EventNewDerivativeOrders.repeatedFields_, null);
};
goog.inherits(proto.injective.exchange.v1beta1.EventNewDerivativeOrders, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.injective.exchange.v1beta1.EventNewDerivativeOrders.displayName = 'proto.injective.exchange.v1beta1.EventNewDerivativeOrders';
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
proto.injective.exchange.v1beta1.EventCancelSpotOrder = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.injective.exchange.v1beta1.EventCancelSpotOrder, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.injective.exchange.v1beta1.EventCancelSpotOrder.displayName = 'proto.injective.exchange.v1beta1.EventCancelSpotOrder';
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
proto.injective.exchange.v1beta1.EventSpotMarketUpdate = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.injective.exchange.v1beta1.EventSpotMarketUpdate, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.injective.exchange.v1beta1.EventSpotMarketUpdate.displayName = 'proto.injective.exchange.v1beta1.EventSpotMarketUpdate';
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
proto.injective.exchange.v1beta1.EventPerpetualMarketUpdate = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.injective.exchange.v1beta1.EventPerpetualMarketUpdate, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.injective.exchange.v1beta1.EventPerpetualMarketUpdate.displayName = 'proto.injective.exchange.v1beta1.EventPerpetualMarketUpdate';
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
proto.injective.exchange.v1beta1.EventExpiryFuturesMarketUpdate = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.injective.exchange.v1beta1.EventExpiryFuturesMarketUpdate, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.injective.exchange.v1beta1.EventExpiryFuturesMarketUpdate.displayName = 'proto.injective.exchange.v1beta1.EventExpiryFuturesMarketUpdate';
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
proto.injective.exchange.v1beta1.EventPerpetualMarketFundingUpdate = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.injective.exchange.v1beta1.EventPerpetualMarketFundingUpdate, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.injective.exchange.v1beta1.EventPerpetualMarketFundingUpdate.displayName = 'proto.injective.exchange.v1beta1.EventPerpetualMarketFundingUpdate';
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
proto.injective.exchange.v1beta1.EventSubaccountDeposit = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.injective.exchange.v1beta1.EventSubaccountDeposit, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.injective.exchange.v1beta1.EventSubaccountDeposit.displayName = 'proto.injective.exchange.v1beta1.EventSubaccountDeposit';
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
proto.injective.exchange.v1beta1.EventSubaccountWithdraw = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.injective.exchange.v1beta1.EventSubaccountWithdraw, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.injective.exchange.v1beta1.EventSubaccountWithdraw.displayName = 'proto.injective.exchange.v1beta1.EventSubaccountWithdraw';
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
proto.injective.exchange.v1beta1.EventSubaccountBalanceTransfer = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.injective.exchange.v1beta1.EventSubaccountBalanceTransfer, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.injective.exchange.v1beta1.EventSubaccountBalanceTransfer.displayName = 'proto.injective.exchange.v1beta1.EventSubaccountBalanceTransfer';
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
proto.injective.exchange.v1beta1.SubaccountDeposit = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.injective.exchange.v1beta1.SubaccountDeposit, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.injective.exchange.v1beta1.SubaccountDeposit.displayName = 'proto.injective.exchange.v1beta1.SubaccountDeposit';
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
proto.injective.exchange.v1beta1.DepositUpdate = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.injective.exchange.v1beta1.DepositUpdate.repeatedFields_, null);
};
goog.inherits(proto.injective.exchange.v1beta1.DepositUpdate, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.injective.exchange.v1beta1.DepositUpdate.displayName = 'proto.injective.exchange.v1beta1.DepositUpdate';
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
proto.injective.exchange.v1beta1.EventBatchDepositUpdate = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.injective.exchange.v1beta1.EventBatchDepositUpdate.repeatedFields_, null);
};
goog.inherits(proto.injective.exchange.v1beta1.EventBatchDepositUpdate, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.injective.exchange.v1beta1.EventBatchDepositUpdate.displayName = 'proto.injective.exchange.v1beta1.EventBatchDepositUpdate';
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
proto.injective.exchange.v1beta1.DerivativeMarketOrderCancel = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.injective.exchange.v1beta1.DerivativeMarketOrderCancel, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.injective.exchange.v1beta1.DerivativeMarketOrderCancel.displayName = 'proto.injective.exchange.v1beta1.DerivativeMarketOrderCancel';
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
proto.injective.exchange.v1beta1.EventCancelDerivativeOrder = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.injective.exchange.v1beta1.EventCancelDerivativeOrder, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.injective.exchange.v1beta1.EventCancelDerivativeOrder.displayName = 'proto.injective.exchange.v1beta1.EventCancelDerivativeOrder';
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
proto.injective.exchange.v1beta1.LiquidityMiningCampaign = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.injective.exchange.v1beta1.LiquidityMiningCampaign.repeatedFields_, null);
};
goog.inherits(proto.injective.exchange.v1beta1.LiquidityMiningCampaign, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.injective.exchange.v1beta1.LiquidityMiningCampaign.displayName = 'proto.injective.exchange.v1beta1.LiquidityMiningCampaign';
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
proto.injective.exchange.v1beta1.Params.prototype.toObject = function(opt_includeInstance) {
  return proto.injective.exchange.v1beta1.Params.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.injective.exchange.v1beta1.Params} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.injective.exchange.v1beta1.Params.toObject = function(includeInstance, msg) {
  var f, obj = {
    spotMarketInstantListingFee: (f = msg.getSpotMarketInstantListingFee()) && cosmos_base_v1beta1_coin_pb.Coin.toObject(includeInstance, f),
    derivativeMarketInstantListingFee: (f = msg.getDerivativeMarketInstantListingFee()) && cosmos_base_v1beta1_coin_pb.Coin.toObject(includeInstance, f),
    defaultSpotMakerFeeRate: jspb.Message.getFieldWithDefault(msg, 3, ""),
    defaultSpotTakerFeeRate: jspb.Message.getFieldWithDefault(msg, 4, ""),
    defaultDerivativeMakerFeeRate: jspb.Message.getFieldWithDefault(msg, 5, ""),
    defaultDerivativeTakerFeeRate: jspb.Message.getFieldWithDefault(msg, 6, ""),
    defaultInitialMarginRatio: jspb.Message.getFieldWithDefault(msg, 7, ""),
    defaultMaintenanceMarginRatio: jspb.Message.getFieldWithDefault(msg, 8, ""),
    defaultFundingInterval: jspb.Message.getFieldWithDefault(msg, 9, 0),
    fundingMultiple: jspb.Message.getFieldWithDefault(msg, 10, 0),
    relayerFeeShareRate: jspb.Message.getFieldWithDefault(msg, 11, ""),
    defaultHourlyFundingRateCap: jspb.Message.getFieldWithDefault(msg, 12, ""),
    defaultHourlyInterestRate: jspb.Message.getFieldWithDefault(msg, 13, ""),
    maxDerivativeOrderSideCount: jspb.Message.getFieldWithDefault(msg, 14, 0)
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
 * @return {!proto.injective.exchange.v1beta1.Params}
 */
proto.injective.exchange.v1beta1.Params.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.injective.exchange.v1beta1.Params;
  return proto.injective.exchange.v1beta1.Params.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.injective.exchange.v1beta1.Params} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.injective.exchange.v1beta1.Params}
 */
proto.injective.exchange.v1beta1.Params.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new cosmos_base_v1beta1_coin_pb.Coin;
      reader.readMessage(value,cosmos_base_v1beta1_coin_pb.Coin.deserializeBinaryFromReader);
      msg.setSpotMarketInstantListingFee(value);
      break;
    case 2:
      var value = new cosmos_base_v1beta1_coin_pb.Coin;
      reader.readMessage(value,cosmos_base_v1beta1_coin_pb.Coin.deserializeBinaryFromReader);
      msg.setDerivativeMarketInstantListingFee(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setDefaultSpotMakerFeeRate(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setDefaultSpotTakerFeeRate(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setDefaultDerivativeMakerFeeRate(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setDefaultDerivativeTakerFeeRate(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setDefaultInitialMarginRatio(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setDefaultMaintenanceMarginRatio(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setDefaultFundingInterval(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setFundingMultiple(value);
      break;
    case 11:
      var value = /** @type {string} */ (reader.readString());
      msg.setRelayerFeeShareRate(value);
      break;
    case 12:
      var value = /** @type {string} */ (reader.readString());
      msg.setDefaultHourlyFundingRateCap(value);
      break;
    case 13:
      var value = /** @type {string} */ (reader.readString());
      msg.setDefaultHourlyInterestRate(value);
      break;
    case 14:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setMaxDerivativeOrderSideCount(value);
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
proto.injective.exchange.v1beta1.Params.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.injective.exchange.v1beta1.Params.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.injective.exchange.v1beta1.Params} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.injective.exchange.v1beta1.Params.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSpotMarketInstantListingFee();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      cosmos_base_v1beta1_coin_pb.Coin.serializeBinaryToWriter
    );
  }
  f = message.getDerivativeMarketInstantListingFee();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      cosmos_base_v1beta1_coin_pb.Coin.serializeBinaryToWriter
    );
  }
  f = message.getDefaultSpotMakerFeeRate();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getDefaultSpotTakerFeeRate();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getDefaultDerivativeMakerFeeRate();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getDefaultDerivativeTakerFeeRate();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getDefaultInitialMarginRatio();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getDefaultMaintenanceMarginRatio();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getDefaultFundingInterval();
  if (f !== 0) {
    writer.writeInt64(
      9,
      f
    );
  }
  f = message.getFundingMultiple();
  if (f !== 0) {
    writer.writeInt64(
      10,
      f
    );
  }
  f = message.getRelayerFeeShareRate();
  if (f.length > 0) {
    writer.writeString(
      11,
      f
    );
  }
  f = message.getDefaultHourlyFundingRateCap();
  if (f.length > 0) {
    writer.writeString(
      12,
      f
    );
  }
  f = message.getDefaultHourlyInterestRate();
  if (f.length > 0) {
    writer.writeString(
      13,
      f
    );
  }
  f = message.getMaxDerivativeOrderSideCount();
  if (f !== 0) {
    writer.writeUint32(
      14,
      f
    );
  }
};


/**
 * optional cosmos.base.v1beta1.Coin spot_market_instant_listing_fee = 1;
 * @return {?proto.cosmos.base.v1beta1.Coin}
 */
proto.injective.exchange.v1beta1.Params.prototype.getSpotMarketInstantListingFee = function() {
  return /** @type{?proto.cosmos.base.v1beta1.Coin} */ (
    jspb.Message.getWrapperField(this, cosmos_base_v1beta1_coin_pb.Coin, 1));
};


/**
 * @param {?proto.cosmos.base.v1beta1.Coin|undefined} value
 * @return {!proto.injective.exchange.v1beta1.Params} returns this
*/
proto.injective.exchange.v1beta1.Params.prototype.setSpotMarketInstantListingFee = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.injective.exchange.v1beta1.Params} returns this
 */
proto.injective.exchange.v1beta1.Params.prototype.clearSpotMarketInstantListingFee = function() {
  return this.setSpotMarketInstantListingFee(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.injective.exchange.v1beta1.Params.prototype.hasSpotMarketInstantListingFee = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional cosmos.base.v1beta1.Coin derivative_market_instant_listing_fee = 2;
 * @return {?proto.cosmos.base.v1beta1.Coin}
 */
proto.injective.exchange.v1beta1.Params.prototype.getDerivativeMarketInstantListingFee = function() {
  return /** @type{?proto.cosmos.base.v1beta1.Coin} */ (
    jspb.Message.getWrapperField(this, cosmos_base_v1beta1_coin_pb.Coin, 2));
};


/**
 * @param {?proto.cosmos.base.v1beta1.Coin|undefined} value
 * @return {!proto.injective.exchange.v1beta1.Params} returns this
*/
proto.injective.exchange.v1beta1.Params.prototype.setDerivativeMarketInstantListingFee = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.injective.exchange.v1beta1.Params} returns this
 */
proto.injective.exchange.v1beta1.Params.prototype.clearDerivativeMarketInstantListingFee = function() {
  return this.setDerivativeMarketInstantListingFee(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.injective.exchange.v1beta1.Params.prototype.hasDerivativeMarketInstantListingFee = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string default_spot_maker_fee_rate = 3;
 * @return {string}
 */
proto.injective.exchange.v1beta1.Params.prototype.getDefaultSpotMakerFeeRate = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.injective.exchange.v1beta1.Params} returns this
 */
proto.injective.exchange.v1beta1.Params.prototype.setDefaultSpotMakerFeeRate = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string default_spot_taker_fee_rate = 4;
 * @return {string}
 */
proto.injective.exchange.v1beta1.Params.prototype.getDefaultSpotTakerFeeRate = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.injective.exchange.v1beta1.Params} returns this
 */
proto.injective.exchange.v1beta1.Params.prototype.setDefaultSpotTakerFeeRate = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string default_derivative_maker_fee_rate = 5;
 * @return {string}
 */
proto.injective.exchange.v1beta1.Params.prototype.getDefaultDerivativeMakerFeeRate = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.injective.exchange.v1beta1.Params} returns this
 */
proto.injective.exchange.v1beta1.Params.prototype.setDefaultDerivativeMakerFeeRate = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string default_derivative_taker_fee_rate = 6;
 * @return {string}
 */
proto.injective.exchange.v1beta1.Params.prototype.getDefaultDerivativeTakerFeeRate = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.injective.exchange.v1beta1.Params} returns this
 */
proto.injective.exchange.v1beta1.Params.prototype.setDefaultDerivativeTakerFeeRate = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string default_initial_margin_ratio = 7;
 * @return {string}
 */
proto.injective.exchange.v1beta1.Params.prototype.getDefaultInitialMarginRatio = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.injective.exchange.v1beta1.Params} returns this
 */
proto.injective.exchange.v1beta1.Params.prototype.setDefaultInitialMarginRatio = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional string default_maintenance_margin_ratio = 8;
 * @return {string}
 */
proto.injective.exchange.v1beta1.Params.prototype.getDefaultMaintenanceMarginRatio = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.injective.exchange.v1beta1.Params} returns this
 */
proto.injective.exchange.v1beta1.Params.prototype.setDefaultMaintenanceMarginRatio = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional int64 default_funding_interval = 9;
 * @return {number}
 */
proto.injective.exchange.v1beta1.Params.prototype.getDefaultFundingInterval = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {number} value
 * @return {!proto.injective.exchange.v1beta1.Params} returns this
 */
proto.injective.exchange.v1beta1.Params.prototype.setDefaultFundingInterval = function(value) {
  return jspb.Message.setProto3IntField(this, 9, value);
};


/**
 * optional int64 funding_multiple = 10;
 * @return {number}
 */
proto.injective.exchange.v1beta1.Params.prototype.getFundingMultiple = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/**
 * @param {number} value
 * @return {!proto.injective.exchange.v1beta1.Params} returns this
 */
proto.injective.exchange.v1beta1.Params.prototype.setFundingMultiple = function(value) {
  return jspb.Message.setProto3IntField(this, 10, value);
};


/**
 * optional string relayer_fee_share_rate = 11;
 * @return {string}
 */
proto.injective.exchange.v1beta1.Params.prototype.getRelayerFeeShareRate = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 11, ""));
};


/**
 * @param {string} value
 * @return {!proto.injective.exchange.v1beta1.Params} returns this
 */
proto.injective.exchange.v1beta1.Params.prototype.setRelayerFeeShareRate = function(value) {
  return jspb.Message.setProto3StringField(this, 11, value);
};


/**
 * optional string default_hourly_funding_rate_cap = 12;
 * @return {string}
 */
proto.injective.exchange.v1beta1.Params.prototype.getDefaultHourlyFundingRateCap = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 12, ""));
};


/**
 * @param {string} value
 * @return {!proto.injective.exchange.v1beta1.Params} returns this
 */
proto.injective.exchange.v1beta1.Params.prototype.setDefaultHourlyFundingRateCap = function(value) {
  return jspb.Message.setProto3StringField(this, 12, value);
};


/**
 * optional string default_hourly_interest_rate = 13;
 * @return {string}
 */
proto.injective.exchange.v1beta1.Params.prototype.getDefaultHourlyInterestRate = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 13, ""));
};


/**
 * @param {string} value
 * @return {!proto.injective.exchange.v1beta1.Params} returns this
 */
proto.injective.exchange.v1beta1.Params.prototype.setDefaultHourlyInterestRate = function(value) {
  return jspb.Message.setProto3StringField(this, 13, value);
};


/**
 * optional uint32 max_derivative_order_side_count = 14;
 * @return {number}
 */
proto.injective.exchange.v1beta1.Params.prototype.getMaxDerivativeOrderSideCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 14, 0));
};


/**
 * @param {number} value
 * @return {!proto.injective.exchange.v1beta1.Params} returns this
 */
proto.injective.exchange.v1beta1.Params.prototype.setMaxDerivativeOrderSideCount = function(value) {
  return jspb.Message.setProto3IntField(this, 14, value);
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
proto.injective.exchange.v1beta1.DerivativeMarket.prototype.toObject = function(opt_includeInstance) {
  return proto.injective.exchange.v1beta1.DerivativeMarket.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.injective.exchange.v1beta1.DerivativeMarket} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.injective.exchange.v1beta1.DerivativeMarket.toObject = function(includeInstance, msg) {
  var f, obj = {
    ticker: jspb.Message.getFieldWithDefault(msg, 1, ""),
    oracleBase: jspb.Message.getFieldWithDefault(msg, 2, ""),
    oracleQuote: jspb.Message.getFieldWithDefault(msg, 3, ""),
    oracleType: jspb.Message.getFieldWithDefault(msg, 4, 0),
    oracleScaleFactor: jspb.Message.getFieldWithDefault(msg, 5, 0),
    quoteDenom: jspb.Message.getFieldWithDefault(msg, 6, ""),
    marketId: jspb.Message.getFieldWithDefault(msg, 7, ""),
    initialMarginRatio: jspb.Message.getFieldWithDefault(msg, 8, ""),
    maintenanceMarginRatio: jspb.Message.getFieldWithDefault(msg, 9, ""),
    makerFeeRate: jspb.Message.getFieldWithDefault(msg, 10, ""),
    takerFeeRate: jspb.Message.getFieldWithDefault(msg, 11, ""),
    relayerFeeShareRate: jspb.Message.getFieldWithDefault(msg, 12, ""),
    isperpetual: jspb.Message.getBooleanFieldWithDefault(msg, 13, false),
    status: jspb.Message.getFieldWithDefault(msg, 14, 0),
    minPriceTickSize: jspb.Message.getFieldWithDefault(msg, 15, ""),
    minQuantityTickSize: jspb.Message.getFieldWithDefault(msg, 16, "")
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
 * @return {!proto.injective.exchange.v1beta1.DerivativeMarket}
 */
proto.injective.exchange.v1beta1.DerivativeMarket.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.injective.exchange.v1beta1.DerivativeMarket;
  return proto.injective.exchange.v1beta1.DerivativeMarket.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.injective.exchange.v1beta1.DerivativeMarket} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.injective.exchange.v1beta1.DerivativeMarket}
 */
proto.injective.exchange.v1beta1.DerivativeMarket.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setTicker(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setOracleBase(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setOracleQuote(value);
      break;
    case 4:
      var value = /** @type {!proto.injective.oracle.v1beta1.OracleType} */ (reader.readEnum());
      msg.setOracleType(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setOracleScaleFactor(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setQuoteDenom(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setMarketId(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setInitialMarginRatio(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setMaintenanceMarginRatio(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setMakerFeeRate(value);
      break;
    case 11:
      var value = /** @type {string} */ (reader.readString());
      msg.setTakerFeeRate(value);
      break;
    case 12:
      var value = /** @type {string} */ (reader.readString());
      msg.setRelayerFeeShareRate(value);
      break;
    case 13:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsperpetual(value);
      break;
    case 14:
      var value = /** @type {!proto.injective.exchange.v1beta1.MarketStatus} */ (reader.readEnum());
      msg.setStatus(value);
      break;
    case 15:
      var value = /** @type {string} */ (reader.readString());
      msg.setMinPriceTickSize(value);
      break;
    case 16:
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
proto.injective.exchange.v1beta1.DerivativeMarket.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.injective.exchange.v1beta1.DerivativeMarket.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.injective.exchange.v1beta1.DerivativeMarket} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.injective.exchange.v1beta1.DerivativeMarket.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTicker();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getOracleBase();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getOracleQuote();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getOracleType();
  if (f !== 0.0) {
    writer.writeEnum(
      4,
      f
    );
  }
  f = message.getOracleScaleFactor();
  if (f !== 0) {
    writer.writeUint32(
      5,
      f
    );
  }
  f = message.getQuoteDenom();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getMarketId();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getInitialMarginRatio();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getMaintenanceMarginRatio();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
  f = message.getMakerFeeRate();
  if (f.length > 0) {
    writer.writeString(
      10,
      f
    );
  }
  f = message.getTakerFeeRate();
  if (f.length > 0) {
    writer.writeString(
      11,
      f
    );
  }
  f = message.getRelayerFeeShareRate();
  if (f.length > 0) {
    writer.writeString(
      12,
      f
    );
  }
  f = message.getIsperpetual();
  if (f) {
    writer.writeBool(
      13,
      f
    );
  }
  f = message.getStatus();
  if (f !== 0.0) {
    writer.writeEnum(
      14,
      f
    );
  }
  f = message.getMinPriceTickSize();
  if (f.length > 0) {
    writer.writeString(
      15,
      f
    );
  }
  f = message.getMinQuantityTickSize();
  if (f.length > 0) {
    writer.writeString(
      16,
      f
    );
  }
};


/**
 * optional string ticker = 1;
 * @return {string}
 */
proto.injective.exchange.v1beta1.DerivativeMarket.prototype.getTicker = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.injective.exchange.v1beta1.DerivativeMarket} returns this
 */
proto.injective.exchange.v1beta1.DerivativeMarket.prototype.setTicker = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string oracle_base = 2;
 * @return {string}
 */
proto.injective.exchange.v1beta1.DerivativeMarket.prototype.getOracleBase = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.injective.exchange.v1beta1.DerivativeMarket} returns this
 */
proto.injective.exchange.v1beta1.DerivativeMarket.prototype.setOracleBase = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string oracle_quote = 3;
 * @return {string}
 */
proto.injective.exchange.v1beta1.DerivativeMarket.prototype.getOracleQuote = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.injective.exchange.v1beta1.DerivativeMarket} returns this
 */
proto.injective.exchange.v1beta1.DerivativeMarket.prototype.setOracleQuote = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional injective.oracle.v1beta1.OracleType oracle_type = 4;
 * @return {!proto.injective.oracle.v1beta1.OracleType}
 */
proto.injective.exchange.v1beta1.DerivativeMarket.prototype.getOracleType = function() {
  return /** @type {!proto.injective.oracle.v1beta1.OracleType} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {!proto.injective.oracle.v1beta1.OracleType} value
 * @return {!proto.injective.exchange.v1beta1.DerivativeMarket} returns this
 */
proto.injective.exchange.v1beta1.DerivativeMarket.prototype.setOracleType = function(value) {
  return jspb.Message.setProto3EnumField(this, 4, value);
};


/**
 * optional uint32 oracle_scale_factor = 5;
 * @return {number}
 */
proto.injective.exchange.v1beta1.DerivativeMarket.prototype.getOracleScaleFactor = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.injective.exchange.v1beta1.DerivativeMarket} returns this
 */
proto.injective.exchange.v1beta1.DerivativeMarket.prototype.setOracleScaleFactor = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional string quote_denom = 6;
 * @return {string}
 */
proto.injective.exchange.v1beta1.DerivativeMarket.prototype.getQuoteDenom = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.injective.exchange.v1beta1.DerivativeMarket} returns this
 */
proto.injective.exchange.v1beta1.DerivativeMarket.prototype.setQuoteDenom = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string market_id = 7;
 * @return {string}
 */
proto.injective.exchange.v1beta1.DerivativeMarket.prototype.getMarketId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.injective.exchange.v1beta1.DerivativeMarket} returns this
 */
proto.injective.exchange.v1beta1.DerivativeMarket.prototype.setMarketId = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional string initial_margin_ratio = 8;
 * @return {string}
 */
proto.injective.exchange.v1beta1.DerivativeMarket.prototype.getInitialMarginRatio = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.injective.exchange.v1beta1.DerivativeMarket} returns this
 */
proto.injective.exchange.v1beta1.DerivativeMarket.prototype.setInitialMarginRatio = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional string maintenance_margin_ratio = 9;
 * @return {string}
 */
proto.injective.exchange.v1beta1.DerivativeMarket.prototype.getMaintenanceMarginRatio = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.injective.exchange.v1beta1.DerivativeMarket} returns this
 */
proto.injective.exchange.v1beta1.DerivativeMarket.prototype.setMaintenanceMarginRatio = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * optional string maker_fee_rate = 10;
 * @return {string}
 */
proto.injective.exchange.v1beta1.DerivativeMarket.prototype.getMakerFeeRate = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/**
 * @param {string} value
 * @return {!proto.injective.exchange.v1beta1.DerivativeMarket} returns this
 */
proto.injective.exchange.v1beta1.DerivativeMarket.prototype.setMakerFeeRate = function(value) {
  return jspb.Message.setProto3StringField(this, 10, value);
};


/**
 * optional string taker_fee_rate = 11;
 * @return {string}
 */
proto.injective.exchange.v1beta1.DerivativeMarket.prototype.getTakerFeeRate = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 11, ""));
};


/**
 * @param {string} value
 * @return {!proto.injective.exchange.v1beta1.DerivativeMarket} returns this
 */
proto.injective.exchange.v1beta1.DerivativeMarket.prototype.setTakerFeeRate = function(value) {
  return jspb.Message.setProto3StringField(this, 11, value);
};


/**
 * optional string relayer_fee_share_rate = 12;
 * @return {string}
 */
proto.injective.exchange.v1beta1.DerivativeMarket.prototype.getRelayerFeeShareRate = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 12, ""));
};


/**
 * @param {string} value
 * @return {!proto.injective.exchange.v1beta1.DerivativeMarket} returns this
 */
proto.injective.exchange.v1beta1.DerivativeMarket.prototype.setRelayerFeeShareRate = function(value) {
  return jspb.Message.setProto3StringField(this, 12, value);
};


/**
 * optional bool isPerpetual = 13;
 * @return {boolean}
 */
proto.injective.exchange.v1beta1.DerivativeMarket.prototype.getIsperpetual = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 13, false));
};


/**
 * @param {boolean} value
 * @return {!proto.injective.exchange.v1beta1.DerivativeMarket} returns this
 */
proto.injective.exchange.v1beta1.DerivativeMarket.prototype.setIsperpetual = function(value) {
  return jspb.Message.setProto3BooleanField(this, 13, value);
};


/**
 * optional MarketStatus status = 14;
 * @return {!proto.injective.exchange.v1beta1.MarketStatus}
 */
proto.injective.exchange.v1beta1.DerivativeMarket.prototype.getStatus = function() {
  return /** @type {!proto.injective.exchange.v1beta1.MarketStatus} */ (jspb.Message.getFieldWithDefault(this, 14, 0));
};


/**
 * @param {!proto.injective.exchange.v1beta1.MarketStatus} value
 * @return {!proto.injective.exchange.v1beta1.DerivativeMarket} returns this
 */
proto.injective.exchange.v1beta1.DerivativeMarket.prototype.setStatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 14, value);
};


/**
 * optional string min_price_tick_size = 15;
 * @return {string}
 */
proto.injective.exchange.v1beta1.DerivativeMarket.prototype.getMinPriceTickSize = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 15, ""));
};


/**
 * @param {string} value
 * @return {!proto.injective.exchange.v1beta1.DerivativeMarket} returns this
 */
proto.injective.exchange.v1beta1.DerivativeMarket.prototype.setMinPriceTickSize = function(value) {
  return jspb.Message.setProto3StringField(this, 15, value);
};


/**
 * optional string min_quantity_tick_size = 16;
 * @return {string}
 */
proto.injective.exchange.v1beta1.DerivativeMarket.prototype.getMinQuantityTickSize = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 16, ""));
};


/**
 * @param {string} value
 * @return {!proto.injective.exchange.v1beta1.DerivativeMarket} returns this
 */
proto.injective.exchange.v1beta1.DerivativeMarket.prototype.setMinQuantityTickSize = function(value) {
  return jspb.Message.setProto3StringField(this, 16, value);
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
proto.injective.exchange.v1beta1.ExpiryFuturesMarketInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.injective.exchange.v1beta1.ExpiryFuturesMarketInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.injective.exchange.v1beta1.ExpiryFuturesMarketInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.injective.exchange.v1beta1.ExpiryFuturesMarketInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    marketId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    expirationTimestamp: jspb.Message.getFieldWithDefault(msg, 2, 0),
    twapStartTimestamp: jspb.Message.getFieldWithDefault(msg, 3, 0),
    expirationTwapStartPriceCumulative: jspb.Message.getFieldWithDefault(msg, 4, ""),
    settlementPrice: jspb.Message.getFieldWithDefault(msg, 5, "")
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
 * @return {!proto.injective.exchange.v1beta1.ExpiryFuturesMarketInfo}
 */
proto.injective.exchange.v1beta1.ExpiryFuturesMarketInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.injective.exchange.v1beta1.ExpiryFuturesMarketInfo;
  return proto.injective.exchange.v1beta1.ExpiryFuturesMarketInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.injective.exchange.v1beta1.ExpiryFuturesMarketInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.injective.exchange.v1beta1.ExpiryFuturesMarketInfo}
 */
proto.injective.exchange.v1beta1.ExpiryFuturesMarketInfo.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {number} */ (reader.readInt64());
      msg.setExpirationTimestamp(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTwapStartTimestamp(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setExpirationTwapStartPriceCumulative(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setSettlementPrice(value);
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
proto.injective.exchange.v1beta1.ExpiryFuturesMarketInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.injective.exchange.v1beta1.ExpiryFuturesMarketInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.injective.exchange.v1beta1.ExpiryFuturesMarketInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.injective.exchange.v1beta1.ExpiryFuturesMarketInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMarketId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getExpirationTimestamp();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getTwapStartTimestamp();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = message.getExpirationTwapStartPriceCumulative();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getSettlementPrice();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
};


/**
 * optional string market_id = 1;
 * @return {string}
 */
proto.injective.exchange.v1beta1.ExpiryFuturesMarketInfo.prototype.getMarketId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.injective.exchange.v1beta1.ExpiryFuturesMarketInfo} returns this
 */
proto.injective.exchange.v1beta1.ExpiryFuturesMarketInfo.prototype.setMarketId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int64 expiration_timestamp = 2;
 * @return {number}
 */
proto.injective.exchange.v1beta1.ExpiryFuturesMarketInfo.prototype.getExpirationTimestamp = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.injective.exchange.v1beta1.ExpiryFuturesMarketInfo} returns this
 */
proto.injective.exchange.v1beta1.ExpiryFuturesMarketInfo.prototype.setExpirationTimestamp = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int64 twap_start_timestamp = 3;
 * @return {number}
 */
proto.injective.exchange.v1beta1.ExpiryFuturesMarketInfo.prototype.getTwapStartTimestamp = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.injective.exchange.v1beta1.ExpiryFuturesMarketInfo} returns this
 */
proto.injective.exchange.v1beta1.ExpiryFuturesMarketInfo.prototype.setTwapStartTimestamp = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional string expiration_twap_start_price_cumulative = 4;
 * @return {string}
 */
proto.injective.exchange.v1beta1.ExpiryFuturesMarketInfo.prototype.getExpirationTwapStartPriceCumulative = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.injective.exchange.v1beta1.ExpiryFuturesMarketInfo} returns this
 */
proto.injective.exchange.v1beta1.ExpiryFuturesMarketInfo.prototype.setExpirationTwapStartPriceCumulative = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string settlement_price = 5;
 * @return {string}
 */
proto.injective.exchange.v1beta1.ExpiryFuturesMarketInfo.prototype.getSettlementPrice = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.injective.exchange.v1beta1.ExpiryFuturesMarketInfo} returns this
 */
proto.injective.exchange.v1beta1.ExpiryFuturesMarketInfo.prototype.setSettlementPrice = function(value) {
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
proto.injective.exchange.v1beta1.PerpetualMarketInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.injective.exchange.v1beta1.PerpetualMarketInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.injective.exchange.v1beta1.PerpetualMarketInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.injective.exchange.v1beta1.PerpetualMarketInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    marketId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    hourlyFundingRateCap: jspb.Message.getFieldWithDefault(msg, 2, ""),
    hourlyInterestRate: jspb.Message.getFieldWithDefault(msg, 3, ""),
    nextFundingTimestamp: jspb.Message.getFieldWithDefault(msg, 4, 0),
    fundingInterval: jspb.Message.getFieldWithDefault(msg, 5, 0)
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
 * @return {!proto.injective.exchange.v1beta1.PerpetualMarketInfo}
 */
proto.injective.exchange.v1beta1.PerpetualMarketInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.injective.exchange.v1beta1.PerpetualMarketInfo;
  return proto.injective.exchange.v1beta1.PerpetualMarketInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.injective.exchange.v1beta1.PerpetualMarketInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.injective.exchange.v1beta1.PerpetualMarketInfo}
 */
proto.injective.exchange.v1beta1.PerpetualMarketInfo.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setHourlyFundingRateCap(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setHourlyInterestRate(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setNextFundingTimestamp(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setFundingInterval(value);
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
proto.injective.exchange.v1beta1.PerpetualMarketInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.injective.exchange.v1beta1.PerpetualMarketInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.injective.exchange.v1beta1.PerpetualMarketInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.injective.exchange.v1beta1.PerpetualMarketInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMarketId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getHourlyFundingRateCap();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getHourlyInterestRate();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getNextFundingTimestamp();
  if (f !== 0) {
    writer.writeInt64(
      4,
      f
    );
  }
  f = message.getFundingInterval();
  if (f !== 0) {
    writer.writeInt64(
      5,
      f
    );
  }
};


/**
 * optional string market_id = 1;
 * @return {string}
 */
proto.injective.exchange.v1beta1.PerpetualMarketInfo.prototype.getMarketId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.injective.exchange.v1beta1.PerpetualMarketInfo} returns this
 */
proto.injective.exchange.v1beta1.PerpetualMarketInfo.prototype.setMarketId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string hourly_funding_rate_cap = 2;
 * @return {string}
 */
proto.injective.exchange.v1beta1.PerpetualMarketInfo.prototype.getHourlyFundingRateCap = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.injective.exchange.v1beta1.PerpetualMarketInfo} returns this
 */
proto.injective.exchange.v1beta1.PerpetualMarketInfo.prototype.setHourlyFundingRateCap = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string hourly_interest_rate = 3;
 * @return {string}
 */
proto.injective.exchange.v1beta1.PerpetualMarketInfo.prototype.getHourlyInterestRate = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.injective.exchange.v1beta1.PerpetualMarketInfo} returns this
 */
proto.injective.exchange.v1beta1.PerpetualMarketInfo.prototype.setHourlyInterestRate = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional int64 next_funding_timestamp = 4;
 * @return {number}
 */
proto.injective.exchange.v1beta1.PerpetualMarketInfo.prototype.getNextFundingTimestamp = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.injective.exchange.v1beta1.PerpetualMarketInfo} returns this
 */
proto.injective.exchange.v1beta1.PerpetualMarketInfo.prototype.setNextFundingTimestamp = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional int64 funding_interval = 5;
 * @return {number}
 */
proto.injective.exchange.v1beta1.PerpetualMarketInfo.prototype.getFundingInterval = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.injective.exchange.v1beta1.PerpetualMarketInfo} returns this
 */
proto.injective.exchange.v1beta1.PerpetualMarketInfo.prototype.setFundingInterval = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
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
proto.injective.exchange.v1beta1.PerpetualMarketFunding.prototype.toObject = function(opt_includeInstance) {
  return proto.injective.exchange.v1beta1.PerpetualMarketFunding.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.injective.exchange.v1beta1.PerpetualMarketFunding} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.injective.exchange.v1beta1.PerpetualMarketFunding.toObject = function(includeInstance, msg) {
  var f, obj = {
    cumulativeFunding: jspb.Message.getFieldWithDefault(msg, 1, ""),
    cumulativePrice: jspb.Message.getFieldWithDefault(msg, 2, ""),
    lastTimestamp: jspb.Message.getFieldWithDefault(msg, 3, 0)
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
 * @return {!proto.injective.exchange.v1beta1.PerpetualMarketFunding}
 */
proto.injective.exchange.v1beta1.PerpetualMarketFunding.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.injective.exchange.v1beta1.PerpetualMarketFunding;
  return proto.injective.exchange.v1beta1.PerpetualMarketFunding.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.injective.exchange.v1beta1.PerpetualMarketFunding} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.injective.exchange.v1beta1.PerpetualMarketFunding}
 */
proto.injective.exchange.v1beta1.PerpetualMarketFunding.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setCumulativeFunding(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setCumulativePrice(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setLastTimestamp(value);
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
proto.injective.exchange.v1beta1.PerpetualMarketFunding.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.injective.exchange.v1beta1.PerpetualMarketFunding.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.injective.exchange.v1beta1.PerpetualMarketFunding} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.injective.exchange.v1beta1.PerpetualMarketFunding.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCumulativeFunding();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getCumulativePrice();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getLastTimestamp();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
};


/**
 * optional string cumulative_funding = 1;
 * @return {string}
 */
proto.injective.exchange.v1beta1.PerpetualMarketFunding.prototype.getCumulativeFunding = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.injective.exchange.v1beta1.PerpetualMarketFunding} returns this
 */
proto.injective.exchange.v1beta1.PerpetualMarketFunding.prototype.setCumulativeFunding = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string cumulative_price = 2;
 * @return {string}
 */
proto.injective.exchange.v1beta1.PerpetualMarketFunding.prototype.getCumulativePrice = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.injective.exchange.v1beta1.PerpetualMarketFunding} returns this
 */
proto.injective.exchange.v1beta1.PerpetualMarketFunding.prototype.setCumulativePrice = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int64 last_timestamp = 3;
 * @return {number}
 */
proto.injective.exchange.v1beta1.PerpetualMarketFunding.prototype.getLastTimestamp = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.injective.exchange.v1beta1.PerpetualMarketFunding} returns this
 */
proto.injective.exchange.v1beta1.PerpetualMarketFunding.prototype.setLastTimestamp = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
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
proto.injective.exchange.v1beta1.DerivativeMarketSettlementInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.injective.exchange.v1beta1.DerivativeMarketSettlementInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.injective.exchange.v1beta1.DerivativeMarketSettlementInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.injective.exchange.v1beta1.DerivativeMarketSettlementInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    marketId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    settlementPrice: jspb.Message.getFieldWithDefault(msg, 2, ""),
    startingDeficit: jspb.Message.getFieldWithDefault(msg, 3, "")
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
 * @return {!proto.injective.exchange.v1beta1.DerivativeMarketSettlementInfo}
 */
proto.injective.exchange.v1beta1.DerivativeMarketSettlementInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.injective.exchange.v1beta1.DerivativeMarketSettlementInfo;
  return proto.injective.exchange.v1beta1.DerivativeMarketSettlementInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.injective.exchange.v1beta1.DerivativeMarketSettlementInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.injective.exchange.v1beta1.DerivativeMarketSettlementInfo}
 */
proto.injective.exchange.v1beta1.DerivativeMarketSettlementInfo.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setSettlementPrice(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setStartingDeficit(value);
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
proto.injective.exchange.v1beta1.DerivativeMarketSettlementInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.injective.exchange.v1beta1.DerivativeMarketSettlementInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.injective.exchange.v1beta1.DerivativeMarketSettlementInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.injective.exchange.v1beta1.DerivativeMarketSettlementInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMarketId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getSettlementPrice();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getStartingDeficit();
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
proto.injective.exchange.v1beta1.DerivativeMarketSettlementInfo.prototype.getMarketId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.injective.exchange.v1beta1.DerivativeMarketSettlementInfo} returns this
 */
proto.injective.exchange.v1beta1.DerivativeMarketSettlementInfo.prototype.setMarketId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string settlement_price = 2;
 * @return {string}
 */
proto.injective.exchange.v1beta1.DerivativeMarketSettlementInfo.prototype.getSettlementPrice = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.injective.exchange.v1beta1.DerivativeMarketSettlementInfo} returns this
 */
proto.injective.exchange.v1beta1.DerivativeMarketSettlementInfo.prototype.setSettlementPrice = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string starting_deficit = 3;
 * @return {string}
 */
proto.injective.exchange.v1beta1.DerivativeMarketSettlementInfo.prototype.getStartingDeficit = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.injective.exchange.v1beta1.DerivativeMarketSettlementInfo} returns this
 */
proto.injective.exchange.v1beta1.DerivativeMarketSettlementInfo.prototype.setStartingDeficit = function(value) {
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
proto.injective.exchange.v1beta1.NextFundingTimestamp.prototype.toObject = function(opt_includeInstance) {
  return proto.injective.exchange.v1beta1.NextFundingTimestamp.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.injective.exchange.v1beta1.NextFundingTimestamp} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.injective.exchange.v1beta1.NextFundingTimestamp.toObject = function(includeInstance, msg) {
  var f, obj = {
    nextTimestamp: jspb.Message.getFieldWithDefault(msg, 1, 0)
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
 * @return {!proto.injective.exchange.v1beta1.NextFundingTimestamp}
 */
proto.injective.exchange.v1beta1.NextFundingTimestamp.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.injective.exchange.v1beta1.NextFundingTimestamp;
  return proto.injective.exchange.v1beta1.NextFundingTimestamp.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.injective.exchange.v1beta1.NextFundingTimestamp} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.injective.exchange.v1beta1.NextFundingTimestamp}
 */
proto.injective.exchange.v1beta1.NextFundingTimestamp.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setNextTimestamp(value);
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
proto.injective.exchange.v1beta1.NextFundingTimestamp.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.injective.exchange.v1beta1.NextFundingTimestamp.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.injective.exchange.v1beta1.NextFundingTimestamp} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.injective.exchange.v1beta1.NextFundingTimestamp.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNextTimestamp();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
};


/**
 * optional int64 next_timestamp = 1;
 * @return {number}
 */
proto.injective.exchange.v1beta1.NextFundingTimestamp.prototype.getNextTimestamp = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.injective.exchange.v1beta1.NextFundingTimestamp} returns this
 */
proto.injective.exchange.v1beta1.NextFundingTimestamp.prototype.setNextTimestamp = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
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
proto.injective.exchange.v1beta1.SpotMarket.prototype.toObject = function(opt_includeInstance) {
  return proto.injective.exchange.v1beta1.SpotMarket.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.injective.exchange.v1beta1.SpotMarket} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.injective.exchange.v1beta1.SpotMarket.toObject = function(includeInstance, msg) {
  var f, obj = {
    ticker: jspb.Message.getFieldWithDefault(msg, 1, ""),
    baseDenom: jspb.Message.getFieldWithDefault(msg, 2, ""),
    quoteDenom: jspb.Message.getFieldWithDefault(msg, 3, ""),
    makerFeeRate: jspb.Message.getFieldWithDefault(msg, 4, ""),
    takerFeeRate: jspb.Message.getFieldWithDefault(msg, 5, ""),
    relayerFeeShareRate: jspb.Message.getFieldWithDefault(msg, 6, ""),
    marketId: jspb.Message.getFieldWithDefault(msg, 7, ""),
    status: jspb.Message.getFieldWithDefault(msg, 8, 0),
    minPriceTickSize: jspb.Message.getFieldWithDefault(msg, 9, ""),
    minQuantityTickSize: jspb.Message.getFieldWithDefault(msg, 10, "")
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
 * @return {!proto.injective.exchange.v1beta1.SpotMarket}
 */
proto.injective.exchange.v1beta1.SpotMarket.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.injective.exchange.v1beta1.SpotMarket;
  return proto.injective.exchange.v1beta1.SpotMarket.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.injective.exchange.v1beta1.SpotMarket} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.injective.exchange.v1beta1.SpotMarket}
 */
proto.injective.exchange.v1beta1.SpotMarket.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setTicker(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setBaseDenom(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setQuoteDenom(value);
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
      msg.setMarketId(value);
      break;
    case 8:
      var value = /** @type {!proto.injective.exchange.v1beta1.MarketStatus} */ (reader.readEnum());
      msg.setStatus(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setMinPriceTickSize(value);
      break;
    case 10:
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
proto.injective.exchange.v1beta1.SpotMarket.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.injective.exchange.v1beta1.SpotMarket.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.injective.exchange.v1beta1.SpotMarket} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.injective.exchange.v1beta1.SpotMarket.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTicker();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getBaseDenom();
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
  f = message.getMarketId();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getStatus();
  if (f !== 0.0) {
    writer.writeEnum(
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
};


/**
 * optional string ticker = 1;
 * @return {string}
 */
proto.injective.exchange.v1beta1.SpotMarket.prototype.getTicker = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.injective.exchange.v1beta1.SpotMarket} returns this
 */
proto.injective.exchange.v1beta1.SpotMarket.prototype.setTicker = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string base_denom = 2;
 * @return {string}
 */
proto.injective.exchange.v1beta1.SpotMarket.prototype.getBaseDenom = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.injective.exchange.v1beta1.SpotMarket} returns this
 */
proto.injective.exchange.v1beta1.SpotMarket.prototype.setBaseDenom = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string quote_denom = 3;
 * @return {string}
 */
proto.injective.exchange.v1beta1.SpotMarket.prototype.getQuoteDenom = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.injective.exchange.v1beta1.SpotMarket} returns this
 */
proto.injective.exchange.v1beta1.SpotMarket.prototype.setQuoteDenom = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string maker_fee_rate = 4;
 * @return {string}
 */
proto.injective.exchange.v1beta1.SpotMarket.prototype.getMakerFeeRate = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.injective.exchange.v1beta1.SpotMarket} returns this
 */
proto.injective.exchange.v1beta1.SpotMarket.prototype.setMakerFeeRate = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string taker_fee_rate = 5;
 * @return {string}
 */
proto.injective.exchange.v1beta1.SpotMarket.prototype.getTakerFeeRate = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.injective.exchange.v1beta1.SpotMarket} returns this
 */
proto.injective.exchange.v1beta1.SpotMarket.prototype.setTakerFeeRate = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string relayer_fee_share_rate = 6;
 * @return {string}
 */
proto.injective.exchange.v1beta1.SpotMarket.prototype.getRelayerFeeShareRate = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.injective.exchange.v1beta1.SpotMarket} returns this
 */
proto.injective.exchange.v1beta1.SpotMarket.prototype.setRelayerFeeShareRate = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string market_id = 7;
 * @return {string}
 */
proto.injective.exchange.v1beta1.SpotMarket.prototype.getMarketId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.injective.exchange.v1beta1.SpotMarket} returns this
 */
proto.injective.exchange.v1beta1.SpotMarket.prototype.setMarketId = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional MarketStatus status = 8;
 * @return {!proto.injective.exchange.v1beta1.MarketStatus}
 */
proto.injective.exchange.v1beta1.SpotMarket.prototype.getStatus = function() {
  return /** @type {!proto.injective.exchange.v1beta1.MarketStatus} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {!proto.injective.exchange.v1beta1.MarketStatus} value
 * @return {!proto.injective.exchange.v1beta1.SpotMarket} returns this
 */
proto.injective.exchange.v1beta1.SpotMarket.prototype.setStatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 8, value);
};


/**
 * optional string min_price_tick_size = 9;
 * @return {string}
 */
proto.injective.exchange.v1beta1.SpotMarket.prototype.getMinPriceTickSize = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.injective.exchange.v1beta1.SpotMarket} returns this
 */
proto.injective.exchange.v1beta1.SpotMarket.prototype.setMinPriceTickSize = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * optional string min_quantity_tick_size = 10;
 * @return {string}
 */
proto.injective.exchange.v1beta1.SpotMarket.prototype.getMinQuantityTickSize = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/**
 * @param {string} value
 * @return {!proto.injective.exchange.v1beta1.SpotMarket} returns this
 */
proto.injective.exchange.v1beta1.SpotMarket.prototype.setMinQuantityTickSize = function(value) {
  return jspb.Message.setProto3StringField(this, 10, value);
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
proto.injective.exchange.v1beta1.Deposit.prototype.toObject = function(opt_includeInstance) {
  return proto.injective.exchange.v1beta1.Deposit.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.injective.exchange.v1beta1.Deposit} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.injective.exchange.v1beta1.Deposit.toObject = function(includeInstance, msg) {
  var f, obj = {
    availableBalance: jspb.Message.getFieldWithDefault(msg, 1, ""),
    totalBalance: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.injective.exchange.v1beta1.Deposit}
 */
proto.injective.exchange.v1beta1.Deposit.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.injective.exchange.v1beta1.Deposit;
  return proto.injective.exchange.v1beta1.Deposit.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.injective.exchange.v1beta1.Deposit} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.injective.exchange.v1beta1.Deposit}
 */
proto.injective.exchange.v1beta1.Deposit.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setAvailableBalance(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setTotalBalance(value);
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
proto.injective.exchange.v1beta1.Deposit.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.injective.exchange.v1beta1.Deposit.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.injective.exchange.v1beta1.Deposit} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.injective.exchange.v1beta1.Deposit.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAvailableBalance();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getTotalBalance();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string available_balance = 1;
 * @return {string}
 */
proto.injective.exchange.v1beta1.Deposit.prototype.getAvailableBalance = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.injective.exchange.v1beta1.Deposit} returns this
 */
proto.injective.exchange.v1beta1.Deposit.prototype.setAvailableBalance = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string total_balance = 2;
 * @return {string}
 */
proto.injective.exchange.v1beta1.Deposit.prototype.getTotalBalance = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.injective.exchange.v1beta1.Deposit} returns this
 */
proto.injective.exchange.v1beta1.Deposit.prototype.setTotalBalance = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
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
proto.injective.exchange.v1beta1.SubaccountTradeNonce.prototype.toObject = function(opt_includeInstance) {
  return proto.injective.exchange.v1beta1.SubaccountTradeNonce.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.injective.exchange.v1beta1.SubaccountTradeNonce} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.injective.exchange.v1beta1.SubaccountTradeNonce.toObject = function(includeInstance, msg) {
  var f, obj = {
    nonce: jspb.Message.getFieldWithDefault(msg, 1, 0)
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
 * @return {!proto.injective.exchange.v1beta1.SubaccountTradeNonce}
 */
proto.injective.exchange.v1beta1.SubaccountTradeNonce.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.injective.exchange.v1beta1.SubaccountTradeNonce;
  return proto.injective.exchange.v1beta1.SubaccountTradeNonce.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.injective.exchange.v1beta1.SubaccountTradeNonce} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.injective.exchange.v1beta1.SubaccountTradeNonce}
 */
proto.injective.exchange.v1beta1.SubaccountTradeNonce.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setNonce(value);
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
proto.injective.exchange.v1beta1.SubaccountTradeNonce.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.injective.exchange.v1beta1.SubaccountTradeNonce.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.injective.exchange.v1beta1.SubaccountTradeNonce} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.injective.exchange.v1beta1.SubaccountTradeNonce.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNonce();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
};


/**
 * optional uint32 nonce = 1;
 * @return {number}
 */
proto.injective.exchange.v1beta1.SubaccountTradeNonce.prototype.getNonce = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.injective.exchange.v1beta1.SubaccountTradeNonce} returns this
 */
proto.injective.exchange.v1beta1.SubaccountTradeNonce.prototype.setNonce = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
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
proto.injective.exchange.v1beta1.OrderInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.injective.exchange.v1beta1.OrderInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.injective.exchange.v1beta1.OrderInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.injective.exchange.v1beta1.OrderInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    subaccountId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    feeRecipient: jspb.Message.getFieldWithDefault(msg, 2, ""),
    price: jspb.Message.getFieldWithDefault(msg, 3, ""),
    quantity: jspb.Message.getFieldWithDefault(msg, 4, "")
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
 * @return {!proto.injective.exchange.v1beta1.OrderInfo}
 */
proto.injective.exchange.v1beta1.OrderInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.injective.exchange.v1beta1.OrderInfo;
  return proto.injective.exchange.v1beta1.OrderInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.injective.exchange.v1beta1.OrderInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.injective.exchange.v1beta1.OrderInfo}
 */
proto.injective.exchange.v1beta1.OrderInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setSubaccountId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setFeeRecipient(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setPrice(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setQuantity(value);
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
proto.injective.exchange.v1beta1.OrderInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.injective.exchange.v1beta1.OrderInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.injective.exchange.v1beta1.OrderInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.injective.exchange.v1beta1.OrderInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSubaccountId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getFeeRecipient();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getPrice();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getQuantity();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional string subaccount_id = 1;
 * @return {string}
 */
proto.injective.exchange.v1beta1.OrderInfo.prototype.getSubaccountId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.injective.exchange.v1beta1.OrderInfo} returns this
 */
proto.injective.exchange.v1beta1.OrderInfo.prototype.setSubaccountId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string fee_recipient = 2;
 * @return {string}
 */
proto.injective.exchange.v1beta1.OrderInfo.prototype.getFeeRecipient = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.injective.exchange.v1beta1.OrderInfo} returns this
 */
proto.injective.exchange.v1beta1.OrderInfo.prototype.setFeeRecipient = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string price = 3;
 * @return {string}
 */
proto.injective.exchange.v1beta1.OrderInfo.prototype.getPrice = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.injective.exchange.v1beta1.OrderInfo} returns this
 */
proto.injective.exchange.v1beta1.OrderInfo.prototype.setPrice = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string quantity = 4;
 * @return {string}
 */
proto.injective.exchange.v1beta1.OrderInfo.prototype.getQuantity = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.injective.exchange.v1beta1.OrderInfo} returns this
 */
proto.injective.exchange.v1beta1.OrderInfo.prototype.setQuantity = function(value) {
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
proto.injective.exchange.v1beta1.SpotOrder.prototype.toObject = function(opt_includeInstance) {
  return proto.injective.exchange.v1beta1.SpotOrder.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.injective.exchange.v1beta1.SpotOrder} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.injective.exchange.v1beta1.SpotOrder.toObject = function(includeInstance, msg) {
  var f, obj = {
    marketId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    orderInfo: (f = msg.getOrderInfo()) && proto.injective.exchange.v1beta1.OrderInfo.toObject(includeInstance, f),
    orderType: jspb.Message.getFieldWithDefault(msg, 3, 0),
    triggerPrice: jspb.Message.getFieldWithDefault(msg, 4, "")
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
 * @return {!proto.injective.exchange.v1beta1.SpotOrder}
 */
proto.injective.exchange.v1beta1.SpotOrder.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.injective.exchange.v1beta1.SpotOrder;
  return proto.injective.exchange.v1beta1.SpotOrder.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.injective.exchange.v1beta1.SpotOrder} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.injective.exchange.v1beta1.SpotOrder}
 */
proto.injective.exchange.v1beta1.SpotOrder.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.injective.exchange.v1beta1.OrderInfo;
      reader.readMessage(value,proto.injective.exchange.v1beta1.OrderInfo.deserializeBinaryFromReader);
      msg.setOrderInfo(value);
      break;
    case 3:
      var value = /** @type {!proto.injective.exchange.v1beta1.OrderType} */ (reader.readEnum());
      msg.setOrderType(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setTriggerPrice(value);
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
proto.injective.exchange.v1beta1.SpotOrder.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.injective.exchange.v1beta1.SpotOrder.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.injective.exchange.v1beta1.SpotOrder} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.injective.exchange.v1beta1.SpotOrder.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMarketId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getOrderInfo();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.injective.exchange.v1beta1.OrderInfo.serializeBinaryToWriter
    );
  }
  f = message.getOrderType();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
  f = message.getTriggerPrice();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional string market_id = 1;
 * @return {string}
 */
proto.injective.exchange.v1beta1.SpotOrder.prototype.getMarketId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.injective.exchange.v1beta1.SpotOrder} returns this
 */
proto.injective.exchange.v1beta1.SpotOrder.prototype.setMarketId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional OrderInfo order_info = 2;
 * @return {?proto.injective.exchange.v1beta1.OrderInfo}
 */
proto.injective.exchange.v1beta1.SpotOrder.prototype.getOrderInfo = function() {
  return /** @type{?proto.injective.exchange.v1beta1.OrderInfo} */ (
    jspb.Message.getWrapperField(this, proto.injective.exchange.v1beta1.OrderInfo, 2));
};


/**
 * @param {?proto.injective.exchange.v1beta1.OrderInfo|undefined} value
 * @return {!proto.injective.exchange.v1beta1.SpotOrder} returns this
*/
proto.injective.exchange.v1beta1.SpotOrder.prototype.setOrderInfo = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.injective.exchange.v1beta1.SpotOrder} returns this
 */
proto.injective.exchange.v1beta1.SpotOrder.prototype.clearOrderInfo = function() {
  return this.setOrderInfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.injective.exchange.v1beta1.SpotOrder.prototype.hasOrderInfo = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional OrderType order_type = 3;
 * @return {!proto.injective.exchange.v1beta1.OrderType}
 */
proto.injective.exchange.v1beta1.SpotOrder.prototype.getOrderType = function() {
  return /** @type {!proto.injective.exchange.v1beta1.OrderType} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.injective.exchange.v1beta1.OrderType} value
 * @return {!proto.injective.exchange.v1beta1.SpotOrder} returns this
 */
proto.injective.exchange.v1beta1.SpotOrder.prototype.setOrderType = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};


/**
 * optional string trigger_price = 4;
 * @return {string}
 */
proto.injective.exchange.v1beta1.SpotOrder.prototype.getTriggerPrice = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.injective.exchange.v1beta1.SpotOrder} returns this
 */
proto.injective.exchange.v1beta1.SpotOrder.prototype.setTriggerPrice = function(value) {
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
proto.injective.exchange.v1beta1.SpotLimitOrder.prototype.toObject = function(opt_includeInstance) {
  return proto.injective.exchange.v1beta1.SpotLimitOrder.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.injective.exchange.v1beta1.SpotLimitOrder} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.injective.exchange.v1beta1.SpotLimitOrder.toObject = function(includeInstance, msg) {
  var f, obj = {
    orderInfo: (f = msg.getOrderInfo()) && proto.injective.exchange.v1beta1.OrderInfo.toObject(includeInstance, f),
    orderType: jspb.Message.getFieldWithDefault(msg, 2, 0),
    fillable: jspb.Message.getFieldWithDefault(msg, 3, ""),
    triggerPrice: jspb.Message.getFieldWithDefault(msg, 4, ""),
    orderHash: msg.getOrderHash_asB64()
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
 * @return {!proto.injective.exchange.v1beta1.SpotLimitOrder}
 */
proto.injective.exchange.v1beta1.SpotLimitOrder.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.injective.exchange.v1beta1.SpotLimitOrder;
  return proto.injective.exchange.v1beta1.SpotLimitOrder.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.injective.exchange.v1beta1.SpotLimitOrder} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.injective.exchange.v1beta1.SpotLimitOrder}
 */
proto.injective.exchange.v1beta1.SpotLimitOrder.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.injective.exchange.v1beta1.OrderInfo;
      reader.readMessage(value,proto.injective.exchange.v1beta1.OrderInfo.deserializeBinaryFromReader);
      msg.setOrderInfo(value);
      break;
    case 2:
      var value = /** @type {!proto.injective.exchange.v1beta1.OrderType} */ (reader.readEnum());
      msg.setOrderType(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setFillable(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setTriggerPrice(value);
      break;
    case 5:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
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
proto.injective.exchange.v1beta1.SpotLimitOrder.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.injective.exchange.v1beta1.SpotLimitOrder.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.injective.exchange.v1beta1.SpotLimitOrder} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.injective.exchange.v1beta1.SpotLimitOrder.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOrderInfo();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.injective.exchange.v1beta1.OrderInfo.serializeBinaryToWriter
    );
  }
  f = message.getOrderType();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getFillable();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getTriggerPrice();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getOrderHash_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      5,
      f
    );
  }
};


/**
 * optional OrderInfo order_info = 1;
 * @return {?proto.injective.exchange.v1beta1.OrderInfo}
 */
proto.injective.exchange.v1beta1.SpotLimitOrder.prototype.getOrderInfo = function() {
  return /** @type{?proto.injective.exchange.v1beta1.OrderInfo} */ (
    jspb.Message.getWrapperField(this, proto.injective.exchange.v1beta1.OrderInfo, 1));
};


/**
 * @param {?proto.injective.exchange.v1beta1.OrderInfo|undefined} value
 * @return {!proto.injective.exchange.v1beta1.SpotLimitOrder} returns this
*/
proto.injective.exchange.v1beta1.SpotLimitOrder.prototype.setOrderInfo = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.injective.exchange.v1beta1.SpotLimitOrder} returns this
 */
proto.injective.exchange.v1beta1.SpotLimitOrder.prototype.clearOrderInfo = function() {
  return this.setOrderInfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.injective.exchange.v1beta1.SpotLimitOrder.prototype.hasOrderInfo = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional OrderType order_type = 2;
 * @return {!proto.injective.exchange.v1beta1.OrderType}
 */
proto.injective.exchange.v1beta1.SpotLimitOrder.prototype.getOrderType = function() {
  return /** @type {!proto.injective.exchange.v1beta1.OrderType} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.injective.exchange.v1beta1.OrderType} value
 * @return {!proto.injective.exchange.v1beta1.SpotLimitOrder} returns this
 */
proto.injective.exchange.v1beta1.SpotLimitOrder.prototype.setOrderType = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional string fillable = 3;
 * @return {string}
 */
proto.injective.exchange.v1beta1.SpotLimitOrder.prototype.getFillable = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.injective.exchange.v1beta1.SpotLimitOrder} returns this
 */
proto.injective.exchange.v1beta1.SpotLimitOrder.prototype.setFillable = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string trigger_price = 4;
 * @return {string}
 */
proto.injective.exchange.v1beta1.SpotLimitOrder.prototype.getTriggerPrice = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.injective.exchange.v1beta1.SpotLimitOrder} returns this
 */
proto.injective.exchange.v1beta1.SpotLimitOrder.prototype.setTriggerPrice = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional bytes order_hash = 5;
 * @return {!(string|Uint8Array)}
 */
proto.injective.exchange.v1beta1.SpotLimitOrder.prototype.getOrderHash = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * optional bytes order_hash = 5;
 * This is a type-conversion wrapper around `getOrderHash()`
 * @return {string}
 */
proto.injective.exchange.v1beta1.SpotLimitOrder.prototype.getOrderHash_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getOrderHash()));
};


/**
 * optional bytes order_hash = 5;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getOrderHash()`
 * @return {!Uint8Array}
 */
proto.injective.exchange.v1beta1.SpotLimitOrder.prototype.getOrderHash_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getOrderHash()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.injective.exchange.v1beta1.SpotLimitOrder} returns this
 */
proto.injective.exchange.v1beta1.SpotLimitOrder.prototype.setOrderHash = function(value) {
  return jspb.Message.setProto3BytesField(this, 5, value);
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
proto.injective.exchange.v1beta1.SpotMarketOrder.prototype.toObject = function(opt_includeInstance) {
  return proto.injective.exchange.v1beta1.SpotMarketOrder.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.injective.exchange.v1beta1.SpotMarketOrder} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.injective.exchange.v1beta1.SpotMarketOrder.toObject = function(includeInstance, msg) {
  var f, obj = {
    orderInfo: (f = msg.getOrderInfo()) && proto.injective.exchange.v1beta1.OrderInfo.toObject(includeInstance, f),
    balanceHold: jspb.Message.getFieldWithDefault(msg, 2, ""),
    orderHash: msg.getOrderHash_asB64()
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
 * @return {!proto.injective.exchange.v1beta1.SpotMarketOrder}
 */
proto.injective.exchange.v1beta1.SpotMarketOrder.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.injective.exchange.v1beta1.SpotMarketOrder;
  return proto.injective.exchange.v1beta1.SpotMarketOrder.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.injective.exchange.v1beta1.SpotMarketOrder} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.injective.exchange.v1beta1.SpotMarketOrder}
 */
proto.injective.exchange.v1beta1.SpotMarketOrder.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.injective.exchange.v1beta1.OrderInfo;
      reader.readMessage(value,proto.injective.exchange.v1beta1.OrderInfo.deserializeBinaryFromReader);
      msg.setOrderInfo(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setBalanceHold(value);
      break;
    case 3:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
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
proto.injective.exchange.v1beta1.SpotMarketOrder.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.injective.exchange.v1beta1.SpotMarketOrder.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.injective.exchange.v1beta1.SpotMarketOrder} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.injective.exchange.v1beta1.SpotMarketOrder.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOrderInfo();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.injective.exchange.v1beta1.OrderInfo.serializeBinaryToWriter
    );
  }
  f = message.getBalanceHold();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getOrderHash_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      3,
      f
    );
  }
};


/**
 * optional OrderInfo order_info = 1;
 * @return {?proto.injective.exchange.v1beta1.OrderInfo}
 */
proto.injective.exchange.v1beta1.SpotMarketOrder.prototype.getOrderInfo = function() {
  return /** @type{?proto.injective.exchange.v1beta1.OrderInfo} */ (
    jspb.Message.getWrapperField(this, proto.injective.exchange.v1beta1.OrderInfo, 1));
};


/**
 * @param {?proto.injective.exchange.v1beta1.OrderInfo|undefined} value
 * @return {!proto.injective.exchange.v1beta1.SpotMarketOrder} returns this
*/
proto.injective.exchange.v1beta1.SpotMarketOrder.prototype.setOrderInfo = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.injective.exchange.v1beta1.SpotMarketOrder} returns this
 */
proto.injective.exchange.v1beta1.SpotMarketOrder.prototype.clearOrderInfo = function() {
  return this.setOrderInfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.injective.exchange.v1beta1.SpotMarketOrder.prototype.hasOrderInfo = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string balance_hold = 2;
 * @return {string}
 */
proto.injective.exchange.v1beta1.SpotMarketOrder.prototype.getBalanceHold = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.injective.exchange.v1beta1.SpotMarketOrder} returns this
 */
proto.injective.exchange.v1beta1.SpotMarketOrder.prototype.setBalanceHold = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional bytes order_hash = 3;
 * @return {!(string|Uint8Array)}
 */
proto.injective.exchange.v1beta1.SpotMarketOrder.prototype.getOrderHash = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * optional bytes order_hash = 3;
 * This is a type-conversion wrapper around `getOrderHash()`
 * @return {string}
 */
proto.injective.exchange.v1beta1.SpotMarketOrder.prototype.getOrderHash_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getOrderHash()));
};


/**
 * optional bytes order_hash = 3;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getOrderHash()`
 * @return {!Uint8Array}
 */
proto.injective.exchange.v1beta1.SpotMarketOrder.prototype.getOrderHash_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getOrderHash()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.injective.exchange.v1beta1.SpotMarketOrder} returns this
 */
proto.injective.exchange.v1beta1.SpotMarketOrder.prototype.setOrderHash = function(value) {
  return jspb.Message.setProto3BytesField(this, 3, value);
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
proto.injective.exchange.v1beta1.DerivativeOrder.prototype.toObject = function(opt_includeInstance) {
  return proto.injective.exchange.v1beta1.DerivativeOrder.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.injective.exchange.v1beta1.DerivativeOrder} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.injective.exchange.v1beta1.DerivativeOrder.toObject = function(includeInstance, msg) {
  var f, obj = {
    marketId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    orderInfo: (f = msg.getOrderInfo()) && proto.injective.exchange.v1beta1.OrderInfo.toObject(includeInstance, f),
    orderType: jspb.Message.getFieldWithDefault(msg, 3, 0),
    margin: jspb.Message.getFieldWithDefault(msg, 4, ""),
    triggerPrice: jspb.Message.getFieldWithDefault(msg, 5, "")
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
 * @return {!proto.injective.exchange.v1beta1.DerivativeOrder}
 */
proto.injective.exchange.v1beta1.DerivativeOrder.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.injective.exchange.v1beta1.DerivativeOrder;
  return proto.injective.exchange.v1beta1.DerivativeOrder.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.injective.exchange.v1beta1.DerivativeOrder} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.injective.exchange.v1beta1.DerivativeOrder}
 */
proto.injective.exchange.v1beta1.DerivativeOrder.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.injective.exchange.v1beta1.OrderInfo;
      reader.readMessage(value,proto.injective.exchange.v1beta1.OrderInfo.deserializeBinaryFromReader);
      msg.setOrderInfo(value);
      break;
    case 3:
      var value = /** @type {!proto.injective.exchange.v1beta1.OrderType} */ (reader.readEnum());
      msg.setOrderType(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setMargin(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setTriggerPrice(value);
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
proto.injective.exchange.v1beta1.DerivativeOrder.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.injective.exchange.v1beta1.DerivativeOrder.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.injective.exchange.v1beta1.DerivativeOrder} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.injective.exchange.v1beta1.DerivativeOrder.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMarketId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getOrderInfo();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.injective.exchange.v1beta1.OrderInfo.serializeBinaryToWriter
    );
  }
  f = message.getOrderType();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
  f = message.getMargin();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getTriggerPrice();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
};


/**
 * optional string market_id = 1;
 * @return {string}
 */
proto.injective.exchange.v1beta1.DerivativeOrder.prototype.getMarketId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.injective.exchange.v1beta1.DerivativeOrder} returns this
 */
proto.injective.exchange.v1beta1.DerivativeOrder.prototype.setMarketId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional OrderInfo order_info = 2;
 * @return {?proto.injective.exchange.v1beta1.OrderInfo}
 */
proto.injective.exchange.v1beta1.DerivativeOrder.prototype.getOrderInfo = function() {
  return /** @type{?proto.injective.exchange.v1beta1.OrderInfo} */ (
    jspb.Message.getWrapperField(this, proto.injective.exchange.v1beta1.OrderInfo, 2));
};


/**
 * @param {?proto.injective.exchange.v1beta1.OrderInfo|undefined} value
 * @return {!proto.injective.exchange.v1beta1.DerivativeOrder} returns this
*/
proto.injective.exchange.v1beta1.DerivativeOrder.prototype.setOrderInfo = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.injective.exchange.v1beta1.DerivativeOrder} returns this
 */
proto.injective.exchange.v1beta1.DerivativeOrder.prototype.clearOrderInfo = function() {
  return this.setOrderInfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.injective.exchange.v1beta1.DerivativeOrder.prototype.hasOrderInfo = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional OrderType order_type = 3;
 * @return {!proto.injective.exchange.v1beta1.OrderType}
 */
proto.injective.exchange.v1beta1.DerivativeOrder.prototype.getOrderType = function() {
  return /** @type {!proto.injective.exchange.v1beta1.OrderType} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.injective.exchange.v1beta1.OrderType} value
 * @return {!proto.injective.exchange.v1beta1.DerivativeOrder} returns this
 */
proto.injective.exchange.v1beta1.DerivativeOrder.prototype.setOrderType = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};


/**
 * optional string margin = 4;
 * @return {string}
 */
proto.injective.exchange.v1beta1.DerivativeOrder.prototype.getMargin = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.injective.exchange.v1beta1.DerivativeOrder} returns this
 */
proto.injective.exchange.v1beta1.DerivativeOrder.prototype.setMargin = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string trigger_price = 5;
 * @return {string}
 */
proto.injective.exchange.v1beta1.DerivativeOrder.prototype.getTriggerPrice = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.injective.exchange.v1beta1.DerivativeOrder} returns this
 */
proto.injective.exchange.v1beta1.DerivativeOrder.prototype.setTriggerPrice = function(value) {
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
proto.injective.exchange.v1beta1.SubaccountOrderbookMetadata.prototype.toObject = function(opt_includeInstance) {
  return proto.injective.exchange.v1beta1.SubaccountOrderbookMetadata.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.injective.exchange.v1beta1.SubaccountOrderbookMetadata} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.injective.exchange.v1beta1.SubaccountOrderbookMetadata.toObject = function(includeInstance, msg) {
  var f, obj = {
    vanillaLimitOrderCount: jspb.Message.getFieldWithDefault(msg, 1, 0),
    reduceOnlyLimitOrderCount: jspb.Message.getFieldWithDefault(msg, 2, 0),
    aggregateReduceOnlyQuantity: jspb.Message.getFieldWithDefault(msg, 3, ""),
    aggregateVanillaQuantity: jspb.Message.getFieldWithDefault(msg, 4, "")
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
 * @return {!proto.injective.exchange.v1beta1.SubaccountOrderbookMetadata}
 */
proto.injective.exchange.v1beta1.SubaccountOrderbookMetadata.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.injective.exchange.v1beta1.SubaccountOrderbookMetadata;
  return proto.injective.exchange.v1beta1.SubaccountOrderbookMetadata.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.injective.exchange.v1beta1.SubaccountOrderbookMetadata} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.injective.exchange.v1beta1.SubaccountOrderbookMetadata}
 */
proto.injective.exchange.v1beta1.SubaccountOrderbookMetadata.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setVanillaLimitOrderCount(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setReduceOnlyLimitOrderCount(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setAggregateReduceOnlyQuantity(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setAggregateVanillaQuantity(value);
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
proto.injective.exchange.v1beta1.SubaccountOrderbookMetadata.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.injective.exchange.v1beta1.SubaccountOrderbookMetadata.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.injective.exchange.v1beta1.SubaccountOrderbookMetadata} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.injective.exchange.v1beta1.SubaccountOrderbookMetadata.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getVanillaLimitOrderCount();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getReduceOnlyLimitOrderCount();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
  f = message.getAggregateReduceOnlyQuantity();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getAggregateVanillaQuantity();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional uint32 vanilla_limit_order_count = 1;
 * @return {number}
 */
proto.injective.exchange.v1beta1.SubaccountOrderbookMetadata.prototype.getVanillaLimitOrderCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.injective.exchange.v1beta1.SubaccountOrderbookMetadata} returns this
 */
proto.injective.exchange.v1beta1.SubaccountOrderbookMetadata.prototype.setVanillaLimitOrderCount = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint32 reduce_only_limit_order_count = 2;
 * @return {number}
 */
proto.injective.exchange.v1beta1.SubaccountOrderbookMetadata.prototype.getReduceOnlyLimitOrderCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.injective.exchange.v1beta1.SubaccountOrderbookMetadata} returns this
 */
proto.injective.exchange.v1beta1.SubaccountOrderbookMetadata.prototype.setReduceOnlyLimitOrderCount = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string aggregate_reduce_only_quantity = 3;
 * @return {string}
 */
proto.injective.exchange.v1beta1.SubaccountOrderbookMetadata.prototype.getAggregateReduceOnlyQuantity = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.injective.exchange.v1beta1.SubaccountOrderbookMetadata} returns this
 */
proto.injective.exchange.v1beta1.SubaccountOrderbookMetadata.prototype.setAggregateReduceOnlyQuantity = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string aggregate_vanilla_quantity = 4;
 * @return {string}
 */
proto.injective.exchange.v1beta1.SubaccountOrderbookMetadata.prototype.getAggregateVanillaQuantity = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.injective.exchange.v1beta1.SubaccountOrderbookMetadata} returns this
 */
proto.injective.exchange.v1beta1.SubaccountOrderbookMetadata.prototype.setAggregateVanillaQuantity = function(value) {
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
proto.injective.exchange.v1beta1.SubaccountOrder.prototype.toObject = function(opt_includeInstance) {
  return proto.injective.exchange.v1beta1.SubaccountOrder.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.injective.exchange.v1beta1.SubaccountOrder} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.injective.exchange.v1beta1.SubaccountOrder.toObject = function(includeInstance, msg) {
  var f, obj = {
    price: jspb.Message.getFieldWithDefault(msg, 1, ""),
    quantity: jspb.Message.getFieldWithDefault(msg, 2, ""),
    isreduceonly: jspb.Message.getBooleanFieldWithDefault(msg, 3, false)
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
 * @return {!proto.injective.exchange.v1beta1.SubaccountOrder}
 */
proto.injective.exchange.v1beta1.SubaccountOrder.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.injective.exchange.v1beta1.SubaccountOrder;
  return proto.injective.exchange.v1beta1.SubaccountOrder.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.injective.exchange.v1beta1.SubaccountOrder} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.injective.exchange.v1beta1.SubaccountOrder}
 */
proto.injective.exchange.v1beta1.SubaccountOrder.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPrice(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setQuantity(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsreduceonly(value);
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
proto.injective.exchange.v1beta1.SubaccountOrder.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.injective.exchange.v1beta1.SubaccountOrder.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.injective.exchange.v1beta1.SubaccountOrder} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.injective.exchange.v1beta1.SubaccountOrder.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPrice();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getQuantity();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getIsreduceonly();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
};


/**
 * optional string price = 1;
 * @return {string}
 */
proto.injective.exchange.v1beta1.SubaccountOrder.prototype.getPrice = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.injective.exchange.v1beta1.SubaccountOrder} returns this
 */
proto.injective.exchange.v1beta1.SubaccountOrder.prototype.setPrice = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string quantity = 2;
 * @return {string}
 */
proto.injective.exchange.v1beta1.SubaccountOrder.prototype.getQuantity = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.injective.exchange.v1beta1.SubaccountOrder} returns this
 */
proto.injective.exchange.v1beta1.SubaccountOrder.prototype.setQuantity = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional bool isReduceOnly = 3;
 * @return {boolean}
 */
proto.injective.exchange.v1beta1.SubaccountOrder.prototype.getIsreduceonly = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.injective.exchange.v1beta1.SubaccountOrder} returns this
 */
proto.injective.exchange.v1beta1.SubaccountOrder.prototype.setIsreduceonly = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
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
proto.injective.exchange.v1beta1.DerivativeLimitOrder.prototype.toObject = function(opt_includeInstance) {
  return proto.injective.exchange.v1beta1.DerivativeLimitOrder.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.injective.exchange.v1beta1.DerivativeLimitOrder} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.injective.exchange.v1beta1.DerivativeLimitOrder.toObject = function(includeInstance, msg) {
  var f, obj = {
    orderInfo: (f = msg.getOrderInfo()) && proto.injective.exchange.v1beta1.OrderInfo.toObject(includeInstance, f),
    orderType: jspb.Message.getFieldWithDefault(msg, 2, 0),
    margin: jspb.Message.getFieldWithDefault(msg, 3, ""),
    fillable: jspb.Message.getFieldWithDefault(msg, 4, ""),
    triggerPrice: jspb.Message.getFieldWithDefault(msg, 5, ""),
    orderHash: msg.getOrderHash_asB64()
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
 * @return {!proto.injective.exchange.v1beta1.DerivativeLimitOrder}
 */
proto.injective.exchange.v1beta1.DerivativeLimitOrder.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.injective.exchange.v1beta1.DerivativeLimitOrder;
  return proto.injective.exchange.v1beta1.DerivativeLimitOrder.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.injective.exchange.v1beta1.DerivativeLimitOrder} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.injective.exchange.v1beta1.DerivativeLimitOrder}
 */
proto.injective.exchange.v1beta1.DerivativeLimitOrder.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.injective.exchange.v1beta1.OrderInfo;
      reader.readMessage(value,proto.injective.exchange.v1beta1.OrderInfo.deserializeBinaryFromReader);
      msg.setOrderInfo(value);
      break;
    case 2:
      var value = /** @type {!proto.injective.exchange.v1beta1.OrderType} */ (reader.readEnum());
      msg.setOrderType(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setMargin(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setFillable(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setTriggerPrice(value);
      break;
    case 6:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
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
proto.injective.exchange.v1beta1.DerivativeLimitOrder.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.injective.exchange.v1beta1.DerivativeLimitOrder.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.injective.exchange.v1beta1.DerivativeLimitOrder} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.injective.exchange.v1beta1.DerivativeLimitOrder.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOrderInfo();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.injective.exchange.v1beta1.OrderInfo.serializeBinaryToWriter
    );
  }
  f = message.getOrderType();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getMargin();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getFillable();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getTriggerPrice();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getOrderHash_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      6,
      f
    );
  }
};


/**
 * optional OrderInfo order_info = 1;
 * @return {?proto.injective.exchange.v1beta1.OrderInfo}
 */
proto.injective.exchange.v1beta1.DerivativeLimitOrder.prototype.getOrderInfo = function() {
  return /** @type{?proto.injective.exchange.v1beta1.OrderInfo} */ (
    jspb.Message.getWrapperField(this, proto.injective.exchange.v1beta1.OrderInfo, 1));
};


/**
 * @param {?proto.injective.exchange.v1beta1.OrderInfo|undefined} value
 * @return {!proto.injective.exchange.v1beta1.DerivativeLimitOrder} returns this
*/
proto.injective.exchange.v1beta1.DerivativeLimitOrder.prototype.setOrderInfo = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.injective.exchange.v1beta1.DerivativeLimitOrder} returns this
 */
proto.injective.exchange.v1beta1.DerivativeLimitOrder.prototype.clearOrderInfo = function() {
  return this.setOrderInfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.injective.exchange.v1beta1.DerivativeLimitOrder.prototype.hasOrderInfo = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional OrderType order_type = 2;
 * @return {!proto.injective.exchange.v1beta1.OrderType}
 */
proto.injective.exchange.v1beta1.DerivativeLimitOrder.prototype.getOrderType = function() {
  return /** @type {!proto.injective.exchange.v1beta1.OrderType} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.injective.exchange.v1beta1.OrderType} value
 * @return {!proto.injective.exchange.v1beta1.DerivativeLimitOrder} returns this
 */
proto.injective.exchange.v1beta1.DerivativeLimitOrder.prototype.setOrderType = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional string margin = 3;
 * @return {string}
 */
proto.injective.exchange.v1beta1.DerivativeLimitOrder.prototype.getMargin = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.injective.exchange.v1beta1.DerivativeLimitOrder} returns this
 */
proto.injective.exchange.v1beta1.DerivativeLimitOrder.prototype.setMargin = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string fillable = 4;
 * @return {string}
 */
proto.injective.exchange.v1beta1.DerivativeLimitOrder.prototype.getFillable = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.injective.exchange.v1beta1.DerivativeLimitOrder} returns this
 */
proto.injective.exchange.v1beta1.DerivativeLimitOrder.prototype.setFillable = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string trigger_price = 5;
 * @return {string}
 */
proto.injective.exchange.v1beta1.DerivativeLimitOrder.prototype.getTriggerPrice = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.injective.exchange.v1beta1.DerivativeLimitOrder} returns this
 */
proto.injective.exchange.v1beta1.DerivativeLimitOrder.prototype.setTriggerPrice = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional bytes order_hash = 6;
 * @return {!(string|Uint8Array)}
 */
proto.injective.exchange.v1beta1.DerivativeLimitOrder.prototype.getOrderHash = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * optional bytes order_hash = 6;
 * This is a type-conversion wrapper around `getOrderHash()`
 * @return {string}
 */
proto.injective.exchange.v1beta1.DerivativeLimitOrder.prototype.getOrderHash_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getOrderHash()));
};


/**
 * optional bytes order_hash = 6;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getOrderHash()`
 * @return {!Uint8Array}
 */
proto.injective.exchange.v1beta1.DerivativeLimitOrder.prototype.getOrderHash_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getOrderHash()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.injective.exchange.v1beta1.DerivativeLimitOrder} returns this
 */
proto.injective.exchange.v1beta1.DerivativeLimitOrder.prototype.setOrderHash = function(value) {
  return jspb.Message.setProto3BytesField(this, 6, value);
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
proto.injective.exchange.v1beta1.DerivativeMarketOrder.prototype.toObject = function(opt_includeInstance) {
  return proto.injective.exchange.v1beta1.DerivativeMarketOrder.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.injective.exchange.v1beta1.DerivativeMarketOrder} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.injective.exchange.v1beta1.DerivativeMarketOrder.toObject = function(includeInstance, msg) {
  var f, obj = {
    orderInfo: (f = msg.getOrderInfo()) && proto.injective.exchange.v1beta1.OrderInfo.toObject(includeInstance, f),
    orderType: jspb.Message.getFieldWithDefault(msg, 2, 0),
    margin: jspb.Message.getFieldWithDefault(msg, 3, ""),
    marginHold: jspb.Message.getFieldWithDefault(msg, 4, ""),
    triggerPrice: jspb.Message.getFieldWithDefault(msg, 5, ""),
    orderHash: msg.getOrderHash_asB64()
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
 * @return {!proto.injective.exchange.v1beta1.DerivativeMarketOrder}
 */
proto.injective.exchange.v1beta1.DerivativeMarketOrder.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.injective.exchange.v1beta1.DerivativeMarketOrder;
  return proto.injective.exchange.v1beta1.DerivativeMarketOrder.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.injective.exchange.v1beta1.DerivativeMarketOrder} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.injective.exchange.v1beta1.DerivativeMarketOrder}
 */
proto.injective.exchange.v1beta1.DerivativeMarketOrder.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.injective.exchange.v1beta1.OrderInfo;
      reader.readMessage(value,proto.injective.exchange.v1beta1.OrderInfo.deserializeBinaryFromReader);
      msg.setOrderInfo(value);
      break;
    case 2:
      var value = /** @type {!proto.injective.exchange.v1beta1.OrderType} */ (reader.readEnum());
      msg.setOrderType(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setMargin(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setMarginHold(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setTriggerPrice(value);
      break;
    case 6:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
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
proto.injective.exchange.v1beta1.DerivativeMarketOrder.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.injective.exchange.v1beta1.DerivativeMarketOrder.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.injective.exchange.v1beta1.DerivativeMarketOrder} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.injective.exchange.v1beta1.DerivativeMarketOrder.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOrderInfo();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.injective.exchange.v1beta1.OrderInfo.serializeBinaryToWriter
    );
  }
  f = message.getOrderType();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getMargin();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getMarginHold();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getTriggerPrice();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getOrderHash_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      6,
      f
    );
  }
};


/**
 * optional OrderInfo order_info = 1;
 * @return {?proto.injective.exchange.v1beta1.OrderInfo}
 */
proto.injective.exchange.v1beta1.DerivativeMarketOrder.prototype.getOrderInfo = function() {
  return /** @type{?proto.injective.exchange.v1beta1.OrderInfo} */ (
    jspb.Message.getWrapperField(this, proto.injective.exchange.v1beta1.OrderInfo, 1));
};


/**
 * @param {?proto.injective.exchange.v1beta1.OrderInfo|undefined} value
 * @return {!proto.injective.exchange.v1beta1.DerivativeMarketOrder} returns this
*/
proto.injective.exchange.v1beta1.DerivativeMarketOrder.prototype.setOrderInfo = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.injective.exchange.v1beta1.DerivativeMarketOrder} returns this
 */
proto.injective.exchange.v1beta1.DerivativeMarketOrder.prototype.clearOrderInfo = function() {
  return this.setOrderInfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.injective.exchange.v1beta1.DerivativeMarketOrder.prototype.hasOrderInfo = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional OrderType order_type = 2;
 * @return {!proto.injective.exchange.v1beta1.OrderType}
 */
proto.injective.exchange.v1beta1.DerivativeMarketOrder.prototype.getOrderType = function() {
  return /** @type {!proto.injective.exchange.v1beta1.OrderType} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.injective.exchange.v1beta1.OrderType} value
 * @return {!proto.injective.exchange.v1beta1.DerivativeMarketOrder} returns this
 */
proto.injective.exchange.v1beta1.DerivativeMarketOrder.prototype.setOrderType = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional string margin = 3;
 * @return {string}
 */
proto.injective.exchange.v1beta1.DerivativeMarketOrder.prototype.getMargin = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.injective.exchange.v1beta1.DerivativeMarketOrder} returns this
 */
proto.injective.exchange.v1beta1.DerivativeMarketOrder.prototype.setMargin = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string margin_hold = 4;
 * @return {string}
 */
proto.injective.exchange.v1beta1.DerivativeMarketOrder.prototype.getMarginHold = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.injective.exchange.v1beta1.DerivativeMarketOrder} returns this
 */
proto.injective.exchange.v1beta1.DerivativeMarketOrder.prototype.setMarginHold = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string trigger_price = 5;
 * @return {string}
 */
proto.injective.exchange.v1beta1.DerivativeMarketOrder.prototype.getTriggerPrice = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.injective.exchange.v1beta1.DerivativeMarketOrder} returns this
 */
proto.injective.exchange.v1beta1.DerivativeMarketOrder.prototype.setTriggerPrice = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional bytes order_hash = 6;
 * @return {!(string|Uint8Array)}
 */
proto.injective.exchange.v1beta1.DerivativeMarketOrder.prototype.getOrderHash = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * optional bytes order_hash = 6;
 * This is a type-conversion wrapper around `getOrderHash()`
 * @return {string}
 */
proto.injective.exchange.v1beta1.DerivativeMarketOrder.prototype.getOrderHash_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getOrderHash()));
};


/**
 * optional bytes order_hash = 6;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getOrderHash()`
 * @return {!Uint8Array}
 */
proto.injective.exchange.v1beta1.DerivativeMarketOrder.prototype.getOrderHash_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getOrderHash()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.injective.exchange.v1beta1.DerivativeMarketOrder} returns this
 */
proto.injective.exchange.v1beta1.DerivativeMarketOrder.prototype.setOrderHash = function(value) {
  return jspb.Message.setProto3BytesField(this, 6, value);
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
proto.injective.exchange.v1beta1.Position.prototype.toObject = function(opt_includeInstance) {
  return proto.injective.exchange.v1beta1.Position.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.injective.exchange.v1beta1.Position} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.injective.exchange.v1beta1.Position.toObject = function(includeInstance, msg) {
  var f, obj = {
    islong: jspb.Message.getBooleanFieldWithDefault(msg, 1, false),
    quantity: jspb.Message.getFieldWithDefault(msg, 2, ""),
    entryPrice: jspb.Message.getFieldWithDefault(msg, 3, ""),
    margin: jspb.Message.getFieldWithDefault(msg, 4, ""),
    cumulativeFundingEntry: jspb.Message.getFieldWithDefault(msg, 5, "")
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
 * @return {!proto.injective.exchange.v1beta1.Position}
 */
proto.injective.exchange.v1beta1.Position.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.injective.exchange.v1beta1.Position;
  return proto.injective.exchange.v1beta1.Position.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.injective.exchange.v1beta1.Position} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.injective.exchange.v1beta1.Position}
 */
proto.injective.exchange.v1beta1.Position.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIslong(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setQuantity(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setEntryPrice(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setMargin(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setCumulativeFundingEntry(value);
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
proto.injective.exchange.v1beta1.Position.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.injective.exchange.v1beta1.Position.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.injective.exchange.v1beta1.Position} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.injective.exchange.v1beta1.Position.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getIslong();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
  f = message.getQuantity();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getEntryPrice();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getMargin();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getCumulativeFundingEntry();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
};


/**
 * optional bool isLong = 1;
 * @return {boolean}
 */
proto.injective.exchange.v1beta1.Position.prototype.getIslong = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.injective.exchange.v1beta1.Position} returns this
 */
proto.injective.exchange.v1beta1.Position.prototype.setIslong = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};


/**
 * optional string quantity = 2;
 * @return {string}
 */
proto.injective.exchange.v1beta1.Position.prototype.getQuantity = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.injective.exchange.v1beta1.Position} returns this
 */
proto.injective.exchange.v1beta1.Position.prototype.setQuantity = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string entry_price = 3;
 * @return {string}
 */
proto.injective.exchange.v1beta1.Position.prototype.getEntryPrice = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.injective.exchange.v1beta1.Position} returns this
 */
proto.injective.exchange.v1beta1.Position.prototype.setEntryPrice = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string margin = 4;
 * @return {string}
 */
proto.injective.exchange.v1beta1.Position.prototype.getMargin = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.injective.exchange.v1beta1.Position} returns this
 */
proto.injective.exchange.v1beta1.Position.prototype.setMargin = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string cumulative_funding_entry = 5;
 * @return {string}
 */
proto.injective.exchange.v1beta1.Position.prototype.getCumulativeFundingEntry = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.injective.exchange.v1beta1.Position} returns this
 */
proto.injective.exchange.v1beta1.Position.prototype.setCumulativeFundingEntry = function(value) {
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
proto.injective.exchange.v1beta1.MarketOrderIndicator.prototype.toObject = function(opt_includeInstance) {
  return proto.injective.exchange.v1beta1.MarketOrderIndicator.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.injective.exchange.v1beta1.MarketOrderIndicator} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.injective.exchange.v1beta1.MarketOrderIndicator.toObject = function(includeInstance, msg) {
  var f, obj = {
    marketId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    isbuy: jspb.Message.getBooleanFieldWithDefault(msg, 2, false)
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
 * @return {!proto.injective.exchange.v1beta1.MarketOrderIndicator}
 */
proto.injective.exchange.v1beta1.MarketOrderIndicator.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.injective.exchange.v1beta1.MarketOrderIndicator;
  return proto.injective.exchange.v1beta1.MarketOrderIndicator.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.injective.exchange.v1beta1.MarketOrderIndicator} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.injective.exchange.v1beta1.MarketOrderIndicator}
 */
proto.injective.exchange.v1beta1.MarketOrderIndicator.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsbuy(value);
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
proto.injective.exchange.v1beta1.MarketOrderIndicator.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.injective.exchange.v1beta1.MarketOrderIndicator.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.injective.exchange.v1beta1.MarketOrderIndicator} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.injective.exchange.v1beta1.MarketOrderIndicator.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMarketId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getIsbuy();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
};


/**
 * optional string market_id = 1;
 * @return {string}
 */
proto.injective.exchange.v1beta1.MarketOrderIndicator.prototype.getMarketId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.injective.exchange.v1beta1.MarketOrderIndicator} returns this
 */
proto.injective.exchange.v1beta1.MarketOrderIndicator.prototype.setMarketId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional bool isBuy = 2;
 * @return {boolean}
 */
proto.injective.exchange.v1beta1.MarketOrderIndicator.prototype.getIsbuy = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.injective.exchange.v1beta1.MarketOrderIndicator} returns this
 */
proto.injective.exchange.v1beta1.MarketOrderIndicator.prototype.setIsbuy = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
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
proto.injective.exchange.v1beta1.TradeLog.prototype.toObject = function(opt_includeInstance) {
  return proto.injective.exchange.v1beta1.TradeLog.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.injective.exchange.v1beta1.TradeLog} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.injective.exchange.v1beta1.TradeLog.toObject = function(includeInstance, msg) {
  var f, obj = {
    quantity: jspb.Message.getFieldWithDefault(msg, 1, ""),
    price: jspb.Message.getFieldWithDefault(msg, 2, ""),
    subaccountId: msg.getSubaccountId_asB64(),
    fee: jspb.Message.getFieldWithDefault(msg, 4, ""),
    orderHash: msg.getOrderHash_asB64()
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
 * @return {!proto.injective.exchange.v1beta1.TradeLog}
 */
proto.injective.exchange.v1beta1.TradeLog.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.injective.exchange.v1beta1.TradeLog;
  return proto.injective.exchange.v1beta1.TradeLog.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.injective.exchange.v1beta1.TradeLog} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.injective.exchange.v1beta1.TradeLog}
 */
proto.injective.exchange.v1beta1.TradeLog.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setQuantity(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setPrice(value);
      break;
    case 3:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setSubaccountId(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setFee(value);
      break;
    case 5:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
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
proto.injective.exchange.v1beta1.TradeLog.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.injective.exchange.v1beta1.TradeLog.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.injective.exchange.v1beta1.TradeLog} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.injective.exchange.v1beta1.TradeLog.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getQuantity();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPrice();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getSubaccountId_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      3,
      f
    );
  }
  f = message.getFee();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getOrderHash_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      5,
      f
    );
  }
};


/**
 * optional string quantity = 1;
 * @return {string}
 */
proto.injective.exchange.v1beta1.TradeLog.prototype.getQuantity = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.injective.exchange.v1beta1.TradeLog} returns this
 */
proto.injective.exchange.v1beta1.TradeLog.prototype.setQuantity = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string price = 2;
 * @return {string}
 */
proto.injective.exchange.v1beta1.TradeLog.prototype.getPrice = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.injective.exchange.v1beta1.TradeLog} returns this
 */
proto.injective.exchange.v1beta1.TradeLog.prototype.setPrice = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional bytes subaccount_id = 3;
 * @return {!(string|Uint8Array)}
 */
proto.injective.exchange.v1beta1.TradeLog.prototype.getSubaccountId = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * optional bytes subaccount_id = 3;
 * This is a type-conversion wrapper around `getSubaccountId()`
 * @return {string}
 */
proto.injective.exchange.v1beta1.TradeLog.prototype.getSubaccountId_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getSubaccountId()));
};


/**
 * optional bytes subaccount_id = 3;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getSubaccountId()`
 * @return {!Uint8Array}
 */
proto.injective.exchange.v1beta1.TradeLog.prototype.getSubaccountId_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getSubaccountId()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.injective.exchange.v1beta1.TradeLog} returns this
 */
proto.injective.exchange.v1beta1.TradeLog.prototype.setSubaccountId = function(value) {
  return jspb.Message.setProto3BytesField(this, 3, value);
};


/**
 * optional string fee = 4;
 * @return {string}
 */
proto.injective.exchange.v1beta1.TradeLog.prototype.getFee = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.injective.exchange.v1beta1.TradeLog} returns this
 */
proto.injective.exchange.v1beta1.TradeLog.prototype.setFee = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional bytes order_hash = 5;
 * @return {!(string|Uint8Array)}
 */
proto.injective.exchange.v1beta1.TradeLog.prototype.getOrderHash = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * optional bytes order_hash = 5;
 * This is a type-conversion wrapper around `getOrderHash()`
 * @return {string}
 */
proto.injective.exchange.v1beta1.TradeLog.prototype.getOrderHash_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getOrderHash()));
};


/**
 * optional bytes order_hash = 5;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getOrderHash()`
 * @return {!Uint8Array}
 */
proto.injective.exchange.v1beta1.TradeLog.prototype.getOrderHash_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getOrderHash()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.injective.exchange.v1beta1.TradeLog} returns this
 */
proto.injective.exchange.v1beta1.TradeLog.prototype.setOrderHash = function(value) {
  return jspb.Message.setProto3BytesField(this, 5, value);
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
proto.injective.exchange.v1beta1.PositionDelta.prototype.toObject = function(opt_includeInstance) {
  return proto.injective.exchange.v1beta1.PositionDelta.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.injective.exchange.v1beta1.PositionDelta} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.injective.exchange.v1beta1.PositionDelta.toObject = function(includeInstance, msg) {
  var f, obj = {
    isLong: jspb.Message.getBooleanFieldWithDefault(msg, 1, false),
    executionQuantity: jspb.Message.getFieldWithDefault(msg, 2, ""),
    executionMargin: jspb.Message.getFieldWithDefault(msg, 3, ""),
    executionPrice: jspb.Message.getFieldWithDefault(msg, 4, "")
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
 * @return {!proto.injective.exchange.v1beta1.PositionDelta}
 */
proto.injective.exchange.v1beta1.PositionDelta.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.injective.exchange.v1beta1.PositionDelta;
  return proto.injective.exchange.v1beta1.PositionDelta.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.injective.exchange.v1beta1.PositionDelta} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.injective.exchange.v1beta1.PositionDelta}
 */
proto.injective.exchange.v1beta1.PositionDelta.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsLong(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setExecutionQuantity(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setExecutionMargin(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setExecutionPrice(value);
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
proto.injective.exchange.v1beta1.PositionDelta.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.injective.exchange.v1beta1.PositionDelta.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.injective.exchange.v1beta1.PositionDelta} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.injective.exchange.v1beta1.PositionDelta.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getIsLong();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
  f = message.getExecutionQuantity();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getExecutionMargin();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getExecutionPrice();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional bool is_long = 1;
 * @return {boolean}
 */
proto.injective.exchange.v1beta1.PositionDelta.prototype.getIsLong = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.injective.exchange.v1beta1.PositionDelta} returns this
 */
proto.injective.exchange.v1beta1.PositionDelta.prototype.setIsLong = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};


/**
 * optional string execution_quantity = 2;
 * @return {string}
 */
proto.injective.exchange.v1beta1.PositionDelta.prototype.getExecutionQuantity = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.injective.exchange.v1beta1.PositionDelta} returns this
 */
proto.injective.exchange.v1beta1.PositionDelta.prototype.setExecutionQuantity = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string execution_margin = 3;
 * @return {string}
 */
proto.injective.exchange.v1beta1.PositionDelta.prototype.getExecutionMargin = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.injective.exchange.v1beta1.PositionDelta} returns this
 */
proto.injective.exchange.v1beta1.PositionDelta.prototype.setExecutionMargin = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string execution_price = 4;
 * @return {string}
 */
proto.injective.exchange.v1beta1.PositionDelta.prototype.getExecutionPrice = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.injective.exchange.v1beta1.PositionDelta} returns this
 */
proto.injective.exchange.v1beta1.PositionDelta.prototype.setExecutionPrice = function(value) {
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
proto.injective.exchange.v1beta1.DerivativeTradeLog.prototype.toObject = function(opt_includeInstance) {
  return proto.injective.exchange.v1beta1.DerivativeTradeLog.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.injective.exchange.v1beta1.DerivativeTradeLog} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.injective.exchange.v1beta1.DerivativeTradeLog.toObject = function(includeInstance, msg) {
  var f, obj = {
    subaccountId: msg.getSubaccountId_asB64(),
    positionDelta: (f = msg.getPositionDelta()) && proto.injective.exchange.v1beta1.PositionDelta.toObject(includeInstance, f),
    payout: jspb.Message.getFieldWithDefault(msg, 3, ""),
    fee: jspb.Message.getFieldWithDefault(msg, 4, ""),
    orderHash: msg.getOrderHash_asB64()
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
 * @return {!proto.injective.exchange.v1beta1.DerivativeTradeLog}
 */
proto.injective.exchange.v1beta1.DerivativeTradeLog.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.injective.exchange.v1beta1.DerivativeTradeLog;
  return proto.injective.exchange.v1beta1.DerivativeTradeLog.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.injective.exchange.v1beta1.DerivativeTradeLog} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.injective.exchange.v1beta1.DerivativeTradeLog}
 */
proto.injective.exchange.v1beta1.DerivativeTradeLog.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setSubaccountId(value);
      break;
    case 2:
      var value = new proto.injective.exchange.v1beta1.PositionDelta;
      reader.readMessage(value,proto.injective.exchange.v1beta1.PositionDelta.deserializeBinaryFromReader);
      msg.setPositionDelta(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setPayout(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setFee(value);
      break;
    case 5:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
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
proto.injective.exchange.v1beta1.DerivativeTradeLog.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.injective.exchange.v1beta1.DerivativeTradeLog.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.injective.exchange.v1beta1.DerivativeTradeLog} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.injective.exchange.v1beta1.DerivativeTradeLog.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSubaccountId_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
  f = message.getPositionDelta();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.injective.exchange.v1beta1.PositionDelta.serializeBinaryToWriter
    );
  }
  f = message.getPayout();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getFee();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getOrderHash_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      5,
      f
    );
  }
};


/**
 * optional bytes subaccount_id = 1;
 * @return {!(string|Uint8Array)}
 */
proto.injective.exchange.v1beta1.DerivativeTradeLog.prototype.getSubaccountId = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes subaccount_id = 1;
 * This is a type-conversion wrapper around `getSubaccountId()`
 * @return {string}
 */
proto.injective.exchange.v1beta1.DerivativeTradeLog.prototype.getSubaccountId_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getSubaccountId()));
};


/**
 * optional bytes subaccount_id = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getSubaccountId()`
 * @return {!Uint8Array}
 */
proto.injective.exchange.v1beta1.DerivativeTradeLog.prototype.getSubaccountId_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getSubaccountId()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.injective.exchange.v1beta1.DerivativeTradeLog} returns this
 */
proto.injective.exchange.v1beta1.DerivativeTradeLog.prototype.setSubaccountId = function(value) {
  return jspb.Message.setProto3BytesField(this, 1, value);
};


/**
 * optional PositionDelta position_delta = 2;
 * @return {?proto.injective.exchange.v1beta1.PositionDelta}
 */
proto.injective.exchange.v1beta1.DerivativeTradeLog.prototype.getPositionDelta = function() {
  return /** @type{?proto.injective.exchange.v1beta1.PositionDelta} */ (
    jspb.Message.getWrapperField(this, proto.injective.exchange.v1beta1.PositionDelta, 2));
};


/**
 * @param {?proto.injective.exchange.v1beta1.PositionDelta|undefined} value
 * @return {!proto.injective.exchange.v1beta1.DerivativeTradeLog} returns this
*/
proto.injective.exchange.v1beta1.DerivativeTradeLog.prototype.setPositionDelta = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.injective.exchange.v1beta1.DerivativeTradeLog} returns this
 */
proto.injective.exchange.v1beta1.DerivativeTradeLog.prototype.clearPositionDelta = function() {
  return this.setPositionDelta(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.injective.exchange.v1beta1.DerivativeTradeLog.prototype.hasPositionDelta = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string payout = 3;
 * @return {string}
 */
proto.injective.exchange.v1beta1.DerivativeTradeLog.prototype.getPayout = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.injective.exchange.v1beta1.DerivativeTradeLog} returns this
 */
proto.injective.exchange.v1beta1.DerivativeTradeLog.prototype.setPayout = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string fee = 4;
 * @return {string}
 */
proto.injective.exchange.v1beta1.DerivativeTradeLog.prototype.getFee = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.injective.exchange.v1beta1.DerivativeTradeLog} returns this
 */
proto.injective.exchange.v1beta1.DerivativeTradeLog.prototype.setFee = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional bytes order_hash = 5;
 * @return {!(string|Uint8Array)}
 */
proto.injective.exchange.v1beta1.DerivativeTradeLog.prototype.getOrderHash = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * optional bytes order_hash = 5;
 * This is a type-conversion wrapper around `getOrderHash()`
 * @return {string}
 */
proto.injective.exchange.v1beta1.DerivativeTradeLog.prototype.getOrderHash_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getOrderHash()));
};


/**
 * optional bytes order_hash = 5;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getOrderHash()`
 * @return {!Uint8Array}
 */
proto.injective.exchange.v1beta1.DerivativeTradeLog.prototype.getOrderHash_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getOrderHash()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.injective.exchange.v1beta1.DerivativeTradeLog} returns this
 */
proto.injective.exchange.v1beta1.DerivativeTradeLog.prototype.setOrderHash = function(value) {
  return jspb.Message.setProto3BytesField(this, 5, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.injective.exchange.v1beta1.EventBatchSpotExecution.repeatedFields_ = [4];



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
proto.injective.exchange.v1beta1.EventBatchSpotExecution.prototype.toObject = function(opt_includeInstance) {
  return proto.injective.exchange.v1beta1.EventBatchSpotExecution.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.injective.exchange.v1beta1.EventBatchSpotExecution} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.injective.exchange.v1beta1.EventBatchSpotExecution.toObject = function(includeInstance, msg) {
  var f, obj = {
    marketId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    isBuy: jspb.Message.getBooleanFieldWithDefault(msg, 2, false),
    executiontype: jspb.Message.getFieldWithDefault(msg, 3, 0),
    tradesList: jspb.Message.toObjectList(msg.getTradesList(),
    proto.injective.exchange.v1beta1.TradeLog.toObject, includeInstance)
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
 * @return {!proto.injective.exchange.v1beta1.EventBatchSpotExecution}
 */
proto.injective.exchange.v1beta1.EventBatchSpotExecution.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.injective.exchange.v1beta1.EventBatchSpotExecution;
  return proto.injective.exchange.v1beta1.EventBatchSpotExecution.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.injective.exchange.v1beta1.EventBatchSpotExecution} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.injective.exchange.v1beta1.EventBatchSpotExecution}
 */
proto.injective.exchange.v1beta1.EventBatchSpotExecution.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsBuy(value);
      break;
    case 3:
      var value = /** @type {!proto.injective.exchange.v1beta1.ExecutionType} */ (reader.readEnum());
      msg.setExecutiontype(value);
      break;
    case 4:
      var value = new proto.injective.exchange.v1beta1.TradeLog;
      reader.readMessage(value,proto.injective.exchange.v1beta1.TradeLog.deserializeBinaryFromReader);
      msg.addTrades(value);
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
proto.injective.exchange.v1beta1.EventBatchSpotExecution.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.injective.exchange.v1beta1.EventBatchSpotExecution.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.injective.exchange.v1beta1.EventBatchSpotExecution} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.injective.exchange.v1beta1.EventBatchSpotExecution.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMarketId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getIsBuy();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
  f = message.getExecutiontype();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
  f = message.getTradesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      proto.injective.exchange.v1beta1.TradeLog.serializeBinaryToWriter
    );
  }
};


/**
 * optional string market_id = 1;
 * @return {string}
 */
proto.injective.exchange.v1beta1.EventBatchSpotExecution.prototype.getMarketId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.injective.exchange.v1beta1.EventBatchSpotExecution} returns this
 */
proto.injective.exchange.v1beta1.EventBatchSpotExecution.prototype.setMarketId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional bool is_buy = 2;
 * @return {boolean}
 */
proto.injective.exchange.v1beta1.EventBatchSpotExecution.prototype.getIsBuy = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.injective.exchange.v1beta1.EventBatchSpotExecution} returns this
 */
proto.injective.exchange.v1beta1.EventBatchSpotExecution.prototype.setIsBuy = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};


/**
 * optional ExecutionType executionType = 3;
 * @return {!proto.injective.exchange.v1beta1.ExecutionType}
 */
proto.injective.exchange.v1beta1.EventBatchSpotExecution.prototype.getExecutiontype = function() {
  return /** @type {!proto.injective.exchange.v1beta1.ExecutionType} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.injective.exchange.v1beta1.ExecutionType} value
 * @return {!proto.injective.exchange.v1beta1.EventBatchSpotExecution} returns this
 */
proto.injective.exchange.v1beta1.EventBatchSpotExecution.prototype.setExecutiontype = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};


/**
 * repeated TradeLog trades = 4;
 * @return {!Array<!proto.injective.exchange.v1beta1.TradeLog>}
 */
proto.injective.exchange.v1beta1.EventBatchSpotExecution.prototype.getTradesList = function() {
  return /** @type{!Array<!proto.injective.exchange.v1beta1.TradeLog>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.injective.exchange.v1beta1.TradeLog, 4));
};


/**
 * @param {!Array<!proto.injective.exchange.v1beta1.TradeLog>} value
 * @return {!proto.injective.exchange.v1beta1.EventBatchSpotExecution} returns this
*/
proto.injective.exchange.v1beta1.EventBatchSpotExecution.prototype.setTradesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.injective.exchange.v1beta1.TradeLog=} opt_value
 * @param {number=} opt_index
 * @return {!proto.injective.exchange.v1beta1.TradeLog}
 */
proto.injective.exchange.v1beta1.EventBatchSpotExecution.prototype.addTrades = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.injective.exchange.v1beta1.TradeLog, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.injective.exchange.v1beta1.EventBatchSpotExecution} returns this
 */
proto.injective.exchange.v1beta1.EventBatchSpotExecution.prototype.clearTradesList = function() {
  return this.setTradesList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.injective.exchange.v1beta1.EventBatchDerivativeExecution.repeatedFields_ = [6];



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
proto.injective.exchange.v1beta1.EventBatchDerivativeExecution.prototype.toObject = function(opt_includeInstance) {
  return proto.injective.exchange.v1beta1.EventBatchDerivativeExecution.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.injective.exchange.v1beta1.EventBatchDerivativeExecution} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.injective.exchange.v1beta1.EventBatchDerivativeExecution.toObject = function(includeInstance, msg) {
  var f, obj = {
    marketId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    isBuy: jspb.Message.getBooleanFieldWithDefault(msg, 2, false),
    isLiquidation: jspb.Message.getBooleanFieldWithDefault(msg, 3, false),
    cumulativeFunding: jspb.Message.getFieldWithDefault(msg, 4, ""),
    executiontype: jspb.Message.getFieldWithDefault(msg, 5, 0),
    tradesList: jspb.Message.toObjectList(msg.getTradesList(),
    proto.injective.exchange.v1beta1.DerivativeTradeLog.toObject, includeInstance)
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
 * @return {!proto.injective.exchange.v1beta1.EventBatchDerivativeExecution}
 */
proto.injective.exchange.v1beta1.EventBatchDerivativeExecution.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.injective.exchange.v1beta1.EventBatchDerivativeExecution;
  return proto.injective.exchange.v1beta1.EventBatchDerivativeExecution.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.injective.exchange.v1beta1.EventBatchDerivativeExecution} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.injective.exchange.v1beta1.EventBatchDerivativeExecution}
 */
proto.injective.exchange.v1beta1.EventBatchDerivativeExecution.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsBuy(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsLiquidation(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setCumulativeFunding(value);
      break;
    case 5:
      var value = /** @type {!proto.injective.exchange.v1beta1.ExecutionType} */ (reader.readEnum());
      msg.setExecutiontype(value);
      break;
    case 6:
      var value = new proto.injective.exchange.v1beta1.DerivativeTradeLog;
      reader.readMessage(value,proto.injective.exchange.v1beta1.DerivativeTradeLog.deserializeBinaryFromReader);
      msg.addTrades(value);
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
proto.injective.exchange.v1beta1.EventBatchDerivativeExecution.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.injective.exchange.v1beta1.EventBatchDerivativeExecution.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.injective.exchange.v1beta1.EventBatchDerivativeExecution} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.injective.exchange.v1beta1.EventBatchDerivativeExecution.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMarketId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getIsBuy();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
  f = message.getIsLiquidation();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
  f = message.getCumulativeFunding();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getExecutiontype();
  if (f !== 0.0) {
    writer.writeEnum(
      5,
      f
    );
  }
  f = message.getTradesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      6,
      f,
      proto.injective.exchange.v1beta1.DerivativeTradeLog.serializeBinaryToWriter
    );
  }
};


/**
 * optional string market_id = 1;
 * @return {string}
 */
proto.injective.exchange.v1beta1.EventBatchDerivativeExecution.prototype.getMarketId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.injective.exchange.v1beta1.EventBatchDerivativeExecution} returns this
 */
proto.injective.exchange.v1beta1.EventBatchDerivativeExecution.prototype.setMarketId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional bool is_buy = 2;
 * @return {boolean}
 */
proto.injective.exchange.v1beta1.EventBatchDerivativeExecution.prototype.getIsBuy = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.injective.exchange.v1beta1.EventBatchDerivativeExecution} returns this
 */
proto.injective.exchange.v1beta1.EventBatchDerivativeExecution.prototype.setIsBuy = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};


/**
 * optional bool is_liquidation = 3;
 * @return {boolean}
 */
proto.injective.exchange.v1beta1.EventBatchDerivativeExecution.prototype.getIsLiquidation = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.injective.exchange.v1beta1.EventBatchDerivativeExecution} returns this
 */
proto.injective.exchange.v1beta1.EventBatchDerivativeExecution.prototype.setIsLiquidation = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};


/**
 * optional string cumulative_funding = 4;
 * @return {string}
 */
proto.injective.exchange.v1beta1.EventBatchDerivativeExecution.prototype.getCumulativeFunding = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.injective.exchange.v1beta1.EventBatchDerivativeExecution} returns this
 */
proto.injective.exchange.v1beta1.EventBatchDerivativeExecution.prototype.setCumulativeFunding = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional ExecutionType executionType = 5;
 * @return {!proto.injective.exchange.v1beta1.ExecutionType}
 */
proto.injective.exchange.v1beta1.EventBatchDerivativeExecution.prototype.getExecutiontype = function() {
  return /** @type {!proto.injective.exchange.v1beta1.ExecutionType} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {!proto.injective.exchange.v1beta1.ExecutionType} value
 * @return {!proto.injective.exchange.v1beta1.EventBatchDerivativeExecution} returns this
 */
proto.injective.exchange.v1beta1.EventBatchDerivativeExecution.prototype.setExecutiontype = function(value) {
  return jspb.Message.setProto3EnumField(this, 5, value);
};


/**
 * repeated DerivativeTradeLog trades = 6;
 * @return {!Array<!proto.injective.exchange.v1beta1.DerivativeTradeLog>}
 */
proto.injective.exchange.v1beta1.EventBatchDerivativeExecution.prototype.getTradesList = function() {
  return /** @type{!Array<!proto.injective.exchange.v1beta1.DerivativeTradeLog>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.injective.exchange.v1beta1.DerivativeTradeLog, 6));
};


/**
 * @param {!Array<!proto.injective.exchange.v1beta1.DerivativeTradeLog>} value
 * @return {!proto.injective.exchange.v1beta1.EventBatchDerivativeExecution} returns this
*/
proto.injective.exchange.v1beta1.EventBatchDerivativeExecution.prototype.setTradesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 6, value);
};


/**
 * @param {!proto.injective.exchange.v1beta1.DerivativeTradeLog=} opt_value
 * @param {number=} opt_index
 * @return {!proto.injective.exchange.v1beta1.DerivativeTradeLog}
 */
proto.injective.exchange.v1beta1.EventBatchDerivativeExecution.prototype.addTrades = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 6, opt_value, proto.injective.exchange.v1beta1.DerivativeTradeLog, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.injective.exchange.v1beta1.EventBatchDerivativeExecution} returns this
 */
proto.injective.exchange.v1beta1.EventBatchDerivativeExecution.prototype.clearTradesList = function() {
  return this.setTradesList([]);
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
proto.injective.exchange.v1beta1.SubaccountPosition.prototype.toObject = function(opt_includeInstance) {
  return proto.injective.exchange.v1beta1.SubaccountPosition.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.injective.exchange.v1beta1.SubaccountPosition} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.injective.exchange.v1beta1.SubaccountPosition.toObject = function(includeInstance, msg) {
  var f, obj = {
    position: (f = msg.getPosition()) && proto.injective.exchange.v1beta1.Position.toObject(includeInstance, f),
    subaccountId: msg.getSubaccountId_asB64()
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
 * @return {!proto.injective.exchange.v1beta1.SubaccountPosition}
 */
proto.injective.exchange.v1beta1.SubaccountPosition.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.injective.exchange.v1beta1.SubaccountPosition;
  return proto.injective.exchange.v1beta1.SubaccountPosition.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.injective.exchange.v1beta1.SubaccountPosition} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.injective.exchange.v1beta1.SubaccountPosition}
 */
proto.injective.exchange.v1beta1.SubaccountPosition.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.injective.exchange.v1beta1.Position;
      reader.readMessage(value,proto.injective.exchange.v1beta1.Position.deserializeBinaryFromReader);
      msg.setPosition(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setSubaccountId(value);
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
proto.injective.exchange.v1beta1.SubaccountPosition.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.injective.exchange.v1beta1.SubaccountPosition.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.injective.exchange.v1beta1.SubaccountPosition} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.injective.exchange.v1beta1.SubaccountPosition.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPosition();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.injective.exchange.v1beta1.Position.serializeBinaryToWriter
    );
  }
  f = message.getSubaccountId_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      2,
      f
    );
  }
};


/**
 * optional Position position = 1;
 * @return {?proto.injective.exchange.v1beta1.Position}
 */
proto.injective.exchange.v1beta1.SubaccountPosition.prototype.getPosition = function() {
  return /** @type{?proto.injective.exchange.v1beta1.Position} */ (
    jspb.Message.getWrapperField(this, proto.injective.exchange.v1beta1.Position, 1));
};


/**
 * @param {?proto.injective.exchange.v1beta1.Position|undefined} value
 * @return {!proto.injective.exchange.v1beta1.SubaccountPosition} returns this
*/
proto.injective.exchange.v1beta1.SubaccountPosition.prototype.setPosition = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.injective.exchange.v1beta1.SubaccountPosition} returns this
 */
proto.injective.exchange.v1beta1.SubaccountPosition.prototype.clearPosition = function() {
  return this.setPosition(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.injective.exchange.v1beta1.SubaccountPosition.prototype.hasPosition = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional bytes subaccount_id = 2;
 * @return {!(string|Uint8Array)}
 */
proto.injective.exchange.v1beta1.SubaccountPosition.prototype.getSubaccountId = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes subaccount_id = 2;
 * This is a type-conversion wrapper around `getSubaccountId()`
 * @return {string}
 */
proto.injective.exchange.v1beta1.SubaccountPosition.prototype.getSubaccountId_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getSubaccountId()));
};


/**
 * optional bytes subaccount_id = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getSubaccountId()`
 * @return {!Uint8Array}
 */
proto.injective.exchange.v1beta1.SubaccountPosition.prototype.getSubaccountId_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getSubaccountId()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.injective.exchange.v1beta1.SubaccountPosition} returns this
 */
proto.injective.exchange.v1beta1.SubaccountPosition.prototype.setSubaccountId = function(value) {
  return jspb.Message.setProto3BytesField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.injective.exchange.v1beta1.EventBatchDerivativePosition.repeatedFields_ = [2];



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
proto.injective.exchange.v1beta1.EventBatchDerivativePosition.prototype.toObject = function(opt_includeInstance) {
  return proto.injective.exchange.v1beta1.EventBatchDerivativePosition.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.injective.exchange.v1beta1.EventBatchDerivativePosition} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.injective.exchange.v1beta1.EventBatchDerivativePosition.toObject = function(includeInstance, msg) {
  var f, obj = {
    marketId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    positionsList: jspb.Message.toObjectList(msg.getPositionsList(),
    proto.injective.exchange.v1beta1.SubaccountPosition.toObject, includeInstance)
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
 * @return {!proto.injective.exchange.v1beta1.EventBatchDerivativePosition}
 */
proto.injective.exchange.v1beta1.EventBatchDerivativePosition.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.injective.exchange.v1beta1.EventBatchDerivativePosition;
  return proto.injective.exchange.v1beta1.EventBatchDerivativePosition.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.injective.exchange.v1beta1.EventBatchDerivativePosition} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.injective.exchange.v1beta1.EventBatchDerivativePosition}
 */
proto.injective.exchange.v1beta1.EventBatchDerivativePosition.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.injective.exchange.v1beta1.SubaccountPosition;
      reader.readMessage(value,proto.injective.exchange.v1beta1.SubaccountPosition.deserializeBinaryFromReader);
      msg.addPositions(value);
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
proto.injective.exchange.v1beta1.EventBatchDerivativePosition.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.injective.exchange.v1beta1.EventBatchDerivativePosition.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.injective.exchange.v1beta1.EventBatchDerivativePosition} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.injective.exchange.v1beta1.EventBatchDerivativePosition.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMarketId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPositionsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.injective.exchange.v1beta1.SubaccountPosition.serializeBinaryToWriter
    );
  }
};


/**
 * optional string market_id = 1;
 * @return {string}
 */
proto.injective.exchange.v1beta1.EventBatchDerivativePosition.prototype.getMarketId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.injective.exchange.v1beta1.EventBatchDerivativePosition} returns this
 */
proto.injective.exchange.v1beta1.EventBatchDerivativePosition.prototype.setMarketId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated SubaccountPosition positions = 2;
 * @return {!Array<!proto.injective.exchange.v1beta1.SubaccountPosition>}
 */
proto.injective.exchange.v1beta1.EventBatchDerivativePosition.prototype.getPositionsList = function() {
  return /** @type{!Array<!proto.injective.exchange.v1beta1.SubaccountPosition>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.injective.exchange.v1beta1.SubaccountPosition, 2));
};


/**
 * @param {!Array<!proto.injective.exchange.v1beta1.SubaccountPosition>} value
 * @return {!proto.injective.exchange.v1beta1.EventBatchDerivativePosition} returns this
*/
proto.injective.exchange.v1beta1.EventBatchDerivativePosition.prototype.setPositionsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.injective.exchange.v1beta1.SubaccountPosition=} opt_value
 * @param {number=} opt_index
 * @return {!proto.injective.exchange.v1beta1.SubaccountPosition}
 */
proto.injective.exchange.v1beta1.EventBatchDerivativePosition.prototype.addPositions = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.injective.exchange.v1beta1.SubaccountPosition, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.injective.exchange.v1beta1.EventBatchDerivativePosition} returns this
 */
proto.injective.exchange.v1beta1.EventBatchDerivativePosition.prototype.clearPositionsList = function() {
  return this.setPositionsList([]);
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
proto.injective.exchange.v1beta1.EventDerivativeMarketPaused.prototype.toObject = function(opt_includeInstance) {
  return proto.injective.exchange.v1beta1.EventDerivativeMarketPaused.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.injective.exchange.v1beta1.EventDerivativeMarketPaused} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.injective.exchange.v1beta1.EventDerivativeMarketPaused.toObject = function(includeInstance, msg) {
  var f, obj = {
    marketId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    settlePrice: jspb.Message.getFieldWithDefault(msg, 2, ""),
    totalMissingFunds: jspb.Message.getFieldWithDefault(msg, 3, ""),
    missingFundsRate: jspb.Message.getFieldWithDefault(msg, 4, "")
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
 * @return {!proto.injective.exchange.v1beta1.EventDerivativeMarketPaused}
 */
proto.injective.exchange.v1beta1.EventDerivativeMarketPaused.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.injective.exchange.v1beta1.EventDerivativeMarketPaused;
  return proto.injective.exchange.v1beta1.EventDerivativeMarketPaused.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.injective.exchange.v1beta1.EventDerivativeMarketPaused} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.injective.exchange.v1beta1.EventDerivativeMarketPaused}
 */
proto.injective.exchange.v1beta1.EventDerivativeMarketPaused.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setSettlePrice(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setTotalMissingFunds(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setMissingFundsRate(value);
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
proto.injective.exchange.v1beta1.EventDerivativeMarketPaused.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.injective.exchange.v1beta1.EventDerivativeMarketPaused.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.injective.exchange.v1beta1.EventDerivativeMarketPaused} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.injective.exchange.v1beta1.EventDerivativeMarketPaused.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMarketId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getSettlePrice();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getTotalMissingFunds();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getMissingFundsRate();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional string market_id = 1;
 * @return {string}
 */
proto.injective.exchange.v1beta1.EventDerivativeMarketPaused.prototype.getMarketId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.injective.exchange.v1beta1.EventDerivativeMarketPaused} returns this
 */
proto.injective.exchange.v1beta1.EventDerivativeMarketPaused.prototype.setMarketId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string settle_price = 2;
 * @return {string}
 */
proto.injective.exchange.v1beta1.EventDerivativeMarketPaused.prototype.getSettlePrice = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.injective.exchange.v1beta1.EventDerivativeMarketPaused} returns this
 */
proto.injective.exchange.v1beta1.EventDerivativeMarketPaused.prototype.setSettlePrice = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string total_missing_funds = 3;
 * @return {string}
 */
proto.injective.exchange.v1beta1.EventDerivativeMarketPaused.prototype.getTotalMissingFunds = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.injective.exchange.v1beta1.EventDerivativeMarketPaused} returns this
 */
proto.injective.exchange.v1beta1.EventDerivativeMarketPaused.prototype.setTotalMissingFunds = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string missing_funds_rate = 4;
 * @return {string}
 */
proto.injective.exchange.v1beta1.EventDerivativeMarketPaused.prototype.getMissingFundsRate = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.injective.exchange.v1beta1.EventDerivativeMarketPaused} returns this
 */
proto.injective.exchange.v1beta1.EventDerivativeMarketPaused.prototype.setMissingFundsRate = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.injective.exchange.v1beta1.EventNewSpotOrders.repeatedFields_ = [2,3];



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
proto.injective.exchange.v1beta1.EventNewSpotOrders.prototype.toObject = function(opt_includeInstance) {
  return proto.injective.exchange.v1beta1.EventNewSpotOrders.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.injective.exchange.v1beta1.EventNewSpotOrders} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.injective.exchange.v1beta1.EventNewSpotOrders.toObject = function(includeInstance, msg) {
  var f, obj = {
    marketId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    buyOrdersList: jspb.Message.toObjectList(msg.getBuyOrdersList(),
    proto.injective.exchange.v1beta1.SpotLimitOrder.toObject, includeInstance),
    sellOrdersList: jspb.Message.toObjectList(msg.getSellOrdersList(),
    proto.injective.exchange.v1beta1.SpotLimitOrder.toObject, includeInstance)
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
 * @return {!proto.injective.exchange.v1beta1.EventNewSpotOrders}
 */
proto.injective.exchange.v1beta1.EventNewSpotOrders.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.injective.exchange.v1beta1.EventNewSpotOrders;
  return proto.injective.exchange.v1beta1.EventNewSpotOrders.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.injective.exchange.v1beta1.EventNewSpotOrders} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.injective.exchange.v1beta1.EventNewSpotOrders}
 */
proto.injective.exchange.v1beta1.EventNewSpotOrders.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.injective.exchange.v1beta1.SpotLimitOrder;
      reader.readMessage(value,proto.injective.exchange.v1beta1.SpotLimitOrder.deserializeBinaryFromReader);
      msg.addBuyOrders(value);
      break;
    case 3:
      var value = new proto.injective.exchange.v1beta1.SpotLimitOrder;
      reader.readMessage(value,proto.injective.exchange.v1beta1.SpotLimitOrder.deserializeBinaryFromReader);
      msg.addSellOrders(value);
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
proto.injective.exchange.v1beta1.EventNewSpotOrders.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.injective.exchange.v1beta1.EventNewSpotOrders.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.injective.exchange.v1beta1.EventNewSpotOrders} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.injective.exchange.v1beta1.EventNewSpotOrders.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMarketId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getBuyOrdersList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.injective.exchange.v1beta1.SpotLimitOrder.serializeBinaryToWriter
    );
  }
  f = message.getSellOrdersList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.injective.exchange.v1beta1.SpotLimitOrder.serializeBinaryToWriter
    );
  }
};


/**
 * optional string market_id = 1;
 * @return {string}
 */
proto.injective.exchange.v1beta1.EventNewSpotOrders.prototype.getMarketId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.injective.exchange.v1beta1.EventNewSpotOrders} returns this
 */
proto.injective.exchange.v1beta1.EventNewSpotOrders.prototype.setMarketId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated SpotLimitOrder buy_orders = 2;
 * @return {!Array<!proto.injective.exchange.v1beta1.SpotLimitOrder>}
 */
proto.injective.exchange.v1beta1.EventNewSpotOrders.prototype.getBuyOrdersList = function() {
  return /** @type{!Array<!proto.injective.exchange.v1beta1.SpotLimitOrder>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.injective.exchange.v1beta1.SpotLimitOrder, 2));
};


/**
 * @param {!Array<!proto.injective.exchange.v1beta1.SpotLimitOrder>} value
 * @return {!proto.injective.exchange.v1beta1.EventNewSpotOrders} returns this
*/
proto.injective.exchange.v1beta1.EventNewSpotOrders.prototype.setBuyOrdersList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.injective.exchange.v1beta1.SpotLimitOrder=} opt_value
 * @param {number=} opt_index
 * @return {!proto.injective.exchange.v1beta1.SpotLimitOrder}
 */
proto.injective.exchange.v1beta1.EventNewSpotOrders.prototype.addBuyOrders = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.injective.exchange.v1beta1.SpotLimitOrder, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.injective.exchange.v1beta1.EventNewSpotOrders} returns this
 */
proto.injective.exchange.v1beta1.EventNewSpotOrders.prototype.clearBuyOrdersList = function() {
  return this.setBuyOrdersList([]);
};


/**
 * repeated SpotLimitOrder sell_orders = 3;
 * @return {!Array<!proto.injective.exchange.v1beta1.SpotLimitOrder>}
 */
proto.injective.exchange.v1beta1.EventNewSpotOrders.prototype.getSellOrdersList = function() {
  return /** @type{!Array<!proto.injective.exchange.v1beta1.SpotLimitOrder>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.injective.exchange.v1beta1.SpotLimitOrder, 3));
};


/**
 * @param {!Array<!proto.injective.exchange.v1beta1.SpotLimitOrder>} value
 * @return {!proto.injective.exchange.v1beta1.EventNewSpotOrders} returns this
*/
proto.injective.exchange.v1beta1.EventNewSpotOrders.prototype.setSellOrdersList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.injective.exchange.v1beta1.SpotLimitOrder=} opt_value
 * @param {number=} opt_index
 * @return {!proto.injective.exchange.v1beta1.SpotLimitOrder}
 */
proto.injective.exchange.v1beta1.EventNewSpotOrders.prototype.addSellOrders = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.injective.exchange.v1beta1.SpotLimitOrder, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.injective.exchange.v1beta1.EventNewSpotOrders} returns this
 */
proto.injective.exchange.v1beta1.EventNewSpotOrders.prototype.clearSellOrdersList = function() {
  return this.setSellOrdersList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.injective.exchange.v1beta1.EventNewDerivativeOrders.repeatedFields_ = [2,3];



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
proto.injective.exchange.v1beta1.EventNewDerivativeOrders.prototype.toObject = function(opt_includeInstance) {
  return proto.injective.exchange.v1beta1.EventNewDerivativeOrders.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.injective.exchange.v1beta1.EventNewDerivativeOrders} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.injective.exchange.v1beta1.EventNewDerivativeOrders.toObject = function(includeInstance, msg) {
  var f, obj = {
    marketId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    buyOrdersList: jspb.Message.toObjectList(msg.getBuyOrdersList(),
    proto.injective.exchange.v1beta1.DerivativeLimitOrder.toObject, includeInstance),
    sellOrdersList: jspb.Message.toObjectList(msg.getSellOrdersList(),
    proto.injective.exchange.v1beta1.DerivativeLimitOrder.toObject, includeInstance)
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
 * @return {!proto.injective.exchange.v1beta1.EventNewDerivativeOrders}
 */
proto.injective.exchange.v1beta1.EventNewDerivativeOrders.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.injective.exchange.v1beta1.EventNewDerivativeOrders;
  return proto.injective.exchange.v1beta1.EventNewDerivativeOrders.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.injective.exchange.v1beta1.EventNewDerivativeOrders} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.injective.exchange.v1beta1.EventNewDerivativeOrders}
 */
proto.injective.exchange.v1beta1.EventNewDerivativeOrders.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.injective.exchange.v1beta1.DerivativeLimitOrder;
      reader.readMessage(value,proto.injective.exchange.v1beta1.DerivativeLimitOrder.deserializeBinaryFromReader);
      msg.addBuyOrders(value);
      break;
    case 3:
      var value = new proto.injective.exchange.v1beta1.DerivativeLimitOrder;
      reader.readMessage(value,proto.injective.exchange.v1beta1.DerivativeLimitOrder.deserializeBinaryFromReader);
      msg.addSellOrders(value);
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
proto.injective.exchange.v1beta1.EventNewDerivativeOrders.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.injective.exchange.v1beta1.EventNewDerivativeOrders.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.injective.exchange.v1beta1.EventNewDerivativeOrders} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.injective.exchange.v1beta1.EventNewDerivativeOrders.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMarketId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getBuyOrdersList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.injective.exchange.v1beta1.DerivativeLimitOrder.serializeBinaryToWriter
    );
  }
  f = message.getSellOrdersList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.injective.exchange.v1beta1.DerivativeLimitOrder.serializeBinaryToWriter
    );
  }
};


/**
 * optional string market_id = 1;
 * @return {string}
 */
proto.injective.exchange.v1beta1.EventNewDerivativeOrders.prototype.getMarketId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.injective.exchange.v1beta1.EventNewDerivativeOrders} returns this
 */
proto.injective.exchange.v1beta1.EventNewDerivativeOrders.prototype.setMarketId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated DerivativeLimitOrder buy_orders = 2;
 * @return {!Array<!proto.injective.exchange.v1beta1.DerivativeLimitOrder>}
 */
proto.injective.exchange.v1beta1.EventNewDerivativeOrders.prototype.getBuyOrdersList = function() {
  return /** @type{!Array<!proto.injective.exchange.v1beta1.DerivativeLimitOrder>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.injective.exchange.v1beta1.DerivativeLimitOrder, 2));
};


/**
 * @param {!Array<!proto.injective.exchange.v1beta1.DerivativeLimitOrder>} value
 * @return {!proto.injective.exchange.v1beta1.EventNewDerivativeOrders} returns this
*/
proto.injective.exchange.v1beta1.EventNewDerivativeOrders.prototype.setBuyOrdersList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.injective.exchange.v1beta1.DerivativeLimitOrder=} opt_value
 * @param {number=} opt_index
 * @return {!proto.injective.exchange.v1beta1.DerivativeLimitOrder}
 */
proto.injective.exchange.v1beta1.EventNewDerivativeOrders.prototype.addBuyOrders = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.injective.exchange.v1beta1.DerivativeLimitOrder, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.injective.exchange.v1beta1.EventNewDerivativeOrders} returns this
 */
proto.injective.exchange.v1beta1.EventNewDerivativeOrders.prototype.clearBuyOrdersList = function() {
  return this.setBuyOrdersList([]);
};


/**
 * repeated DerivativeLimitOrder sell_orders = 3;
 * @return {!Array<!proto.injective.exchange.v1beta1.DerivativeLimitOrder>}
 */
proto.injective.exchange.v1beta1.EventNewDerivativeOrders.prototype.getSellOrdersList = function() {
  return /** @type{!Array<!proto.injective.exchange.v1beta1.DerivativeLimitOrder>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.injective.exchange.v1beta1.DerivativeLimitOrder, 3));
};


/**
 * @param {!Array<!proto.injective.exchange.v1beta1.DerivativeLimitOrder>} value
 * @return {!proto.injective.exchange.v1beta1.EventNewDerivativeOrders} returns this
*/
proto.injective.exchange.v1beta1.EventNewDerivativeOrders.prototype.setSellOrdersList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.injective.exchange.v1beta1.DerivativeLimitOrder=} opt_value
 * @param {number=} opt_index
 * @return {!proto.injective.exchange.v1beta1.DerivativeLimitOrder}
 */
proto.injective.exchange.v1beta1.EventNewDerivativeOrders.prototype.addSellOrders = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.injective.exchange.v1beta1.DerivativeLimitOrder, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.injective.exchange.v1beta1.EventNewDerivativeOrders} returns this
 */
proto.injective.exchange.v1beta1.EventNewDerivativeOrders.prototype.clearSellOrdersList = function() {
  return this.setSellOrdersList([]);
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
proto.injective.exchange.v1beta1.EventCancelSpotOrder.prototype.toObject = function(opt_includeInstance) {
  return proto.injective.exchange.v1beta1.EventCancelSpotOrder.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.injective.exchange.v1beta1.EventCancelSpotOrder} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.injective.exchange.v1beta1.EventCancelSpotOrder.toObject = function(includeInstance, msg) {
  var f, obj = {
    marketId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    order: (f = msg.getOrder()) && proto.injective.exchange.v1beta1.SpotLimitOrder.toObject(includeInstance, f)
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
 * @return {!proto.injective.exchange.v1beta1.EventCancelSpotOrder}
 */
proto.injective.exchange.v1beta1.EventCancelSpotOrder.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.injective.exchange.v1beta1.EventCancelSpotOrder;
  return proto.injective.exchange.v1beta1.EventCancelSpotOrder.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.injective.exchange.v1beta1.EventCancelSpotOrder} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.injective.exchange.v1beta1.EventCancelSpotOrder}
 */
proto.injective.exchange.v1beta1.EventCancelSpotOrder.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.injective.exchange.v1beta1.SpotLimitOrder;
      reader.readMessage(value,proto.injective.exchange.v1beta1.SpotLimitOrder.deserializeBinaryFromReader);
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
proto.injective.exchange.v1beta1.EventCancelSpotOrder.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.injective.exchange.v1beta1.EventCancelSpotOrder.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.injective.exchange.v1beta1.EventCancelSpotOrder} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.injective.exchange.v1beta1.EventCancelSpotOrder.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMarketId();
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
      proto.injective.exchange.v1beta1.SpotLimitOrder.serializeBinaryToWriter
    );
  }
};


/**
 * optional string market_id = 1;
 * @return {string}
 */
proto.injective.exchange.v1beta1.EventCancelSpotOrder.prototype.getMarketId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.injective.exchange.v1beta1.EventCancelSpotOrder} returns this
 */
proto.injective.exchange.v1beta1.EventCancelSpotOrder.prototype.setMarketId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional SpotLimitOrder order = 2;
 * @return {?proto.injective.exchange.v1beta1.SpotLimitOrder}
 */
proto.injective.exchange.v1beta1.EventCancelSpotOrder.prototype.getOrder = function() {
  return /** @type{?proto.injective.exchange.v1beta1.SpotLimitOrder} */ (
    jspb.Message.getWrapperField(this, proto.injective.exchange.v1beta1.SpotLimitOrder, 2));
};


/**
 * @param {?proto.injective.exchange.v1beta1.SpotLimitOrder|undefined} value
 * @return {!proto.injective.exchange.v1beta1.EventCancelSpotOrder} returns this
*/
proto.injective.exchange.v1beta1.EventCancelSpotOrder.prototype.setOrder = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.injective.exchange.v1beta1.EventCancelSpotOrder} returns this
 */
proto.injective.exchange.v1beta1.EventCancelSpotOrder.prototype.clearOrder = function() {
  return this.setOrder(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.injective.exchange.v1beta1.EventCancelSpotOrder.prototype.hasOrder = function() {
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
proto.injective.exchange.v1beta1.EventSpotMarketUpdate.prototype.toObject = function(opt_includeInstance) {
  return proto.injective.exchange.v1beta1.EventSpotMarketUpdate.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.injective.exchange.v1beta1.EventSpotMarketUpdate} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.injective.exchange.v1beta1.EventSpotMarketUpdate.toObject = function(includeInstance, msg) {
  var f, obj = {
    market: (f = msg.getMarket()) && proto.injective.exchange.v1beta1.SpotMarket.toObject(includeInstance, f)
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
 * @return {!proto.injective.exchange.v1beta1.EventSpotMarketUpdate}
 */
proto.injective.exchange.v1beta1.EventSpotMarketUpdate.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.injective.exchange.v1beta1.EventSpotMarketUpdate;
  return proto.injective.exchange.v1beta1.EventSpotMarketUpdate.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.injective.exchange.v1beta1.EventSpotMarketUpdate} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.injective.exchange.v1beta1.EventSpotMarketUpdate}
 */
proto.injective.exchange.v1beta1.EventSpotMarketUpdate.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.injective.exchange.v1beta1.SpotMarket;
      reader.readMessage(value,proto.injective.exchange.v1beta1.SpotMarket.deserializeBinaryFromReader);
      msg.setMarket(value);
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
proto.injective.exchange.v1beta1.EventSpotMarketUpdate.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.injective.exchange.v1beta1.EventSpotMarketUpdate.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.injective.exchange.v1beta1.EventSpotMarketUpdate} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.injective.exchange.v1beta1.EventSpotMarketUpdate.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMarket();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.injective.exchange.v1beta1.SpotMarket.serializeBinaryToWriter
    );
  }
};


/**
 * optional SpotMarket market = 1;
 * @return {?proto.injective.exchange.v1beta1.SpotMarket}
 */
proto.injective.exchange.v1beta1.EventSpotMarketUpdate.prototype.getMarket = function() {
  return /** @type{?proto.injective.exchange.v1beta1.SpotMarket} */ (
    jspb.Message.getWrapperField(this, proto.injective.exchange.v1beta1.SpotMarket, 1));
};


/**
 * @param {?proto.injective.exchange.v1beta1.SpotMarket|undefined} value
 * @return {!proto.injective.exchange.v1beta1.EventSpotMarketUpdate} returns this
*/
proto.injective.exchange.v1beta1.EventSpotMarketUpdate.prototype.setMarket = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.injective.exchange.v1beta1.EventSpotMarketUpdate} returns this
 */
proto.injective.exchange.v1beta1.EventSpotMarketUpdate.prototype.clearMarket = function() {
  return this.setMarket(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.injective.exchange.v1beta1.EventSpotMarketUpdate.prototype.hasMarket = function() {
  return jspb.Message.getField(this, 1) != null;
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
proto.injective.exchange.v1beta1.EventPerpetualMarketUpdate.prototype.toObject = function(opt_includeInstance) {
  return proto.injective.exchange.v1beta1.EventPerpetualMarketUpdate.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.injective.exchange.v1beta1.EventPerpetualMarketUpdate} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.injective.exchange.v1beta1.EventPerpetualMarketUpdate.toObject = function(includeInstance, msg) {
  var f, obj = {
    market: (f = msg.getMarket()) && proto.injective.exchange.v1beta1.DerivativeMarket.toObject(includeInstance, f),
    perpetualMarketInfo: (f = msg.getPerpetualMarketInfo()) && proto.injective.exchange.v1beta1.PerpetualMarketInfo.toObject(includeInstance, f),
    funding: (f = msg.getFunding()) && proto.injective.exchange.v1beta1.PerpetualMarketFunding.toObject(includeInstance, f)
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
 * @return {!proto.injective.exchange.v1beta1.EventPerpetualMarketUpdate}
 */
proto.injective.exchange.v1beta1.EventPerpetualMarketUpdate.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.injective.exchange.v1beta1.EventPerpetualMarketUpdate;
  return proto.injective.exchange.v1beta1.EventPerpetualMarketUpdate.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.injective.exchange.v1beta1.EventPerpetualMarketUpdate} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.injective.exchange.v1beta1.EventPerpetualMarketUpdate}
 */
proto.injective.exchange.v1beta1.EventPerpetualMarketUpdate.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.injective.exchange.v1beta1.DerivativeMarket;
      reader.readMessage(value,proto.injective.exchange.v1beta1.DerivativeMarket.deserializeBinaryFromReader);
      msg.setMarket(value);
      break;
    case 2:
      var value = new proto.injective.exchange.v1beta1.PerpetualMarketInfo;
      reader.readMessage(value,proto.injective.exchange.v1beta1.PerpetualMarketInfo.deserializeBinaryFromReader);
      msg.setPerpetualMarketInfo(value);
      break;
    case 3:
      var value = new proto.injective.exchange.v1beta1.PerpetualMarketFunding;
      reader.readMessage(value,proto.injective.exchange.v1beta1.PerpetualMarketFunding.deserializeBinaryFromReader);
      msg.setFunding(value);
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
proto.injective.exchange.v1beta1.EventPerpetualMarketUpdate.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.injective.exchange.v1beta1.EventPerpetualMarketUpdate.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.injective.exchange.v1beta1.EventPerpetualMarketUpdate} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.injective.exchange.v1beta1.EventPerpetualMarketUpdate.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMarket();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.injective.exchange.v1beta1.DerivativeMarket.serializeBinaryToWriter
    );
  }
  f = message.getPerpetualMarketInfo();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.injective.exchange.v1beta1.PerpetualMarketInfo.serializeBinaryToWriter
    );
  }
  f = message.getFunding();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.injective.exchange.v1beta1.PerpetualMarketFunding.serializeBinaryToWriter
    );
  }
};


/**
 * optional DerivativeMarket market = 1;
 * @return {?proto.injective.exchange.v1beta1.DerivativeMarket}
 */
proto.injective.exchange.v1beta1.EventPerpetualMarketUpdate.prototype.getMarket = function() {
  return /** @type{?proto.injective.exchange.v1beta1.DerivativeMarket} */ (
    jspb.Message.getWrapperField(this, proto.injective.exchange.v1beta1.DerivativeMarket, 1));
};


/**
 * @param {?proto.injective.exchange.v1beta1.DerivativeMarket|undefined} value
 * @return {!proto.injective.exchange.v1beta1.EventPerpetualMarketUpdate} returns this
*/
proto.injective.exchange.v1beta1.EventPerpetualMarketUpdate.prototype.setMarket = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.injective.exchange.v1beta1.EventPerpetualMarketUpdate} returns this
 */
proto.injective.exchange.v1beta1.EventPerpetualMarketUpdate.prototype.clearMarket = function() {
  return this.setMarket(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.injective.exchange.v1beta1.EventPerpetualMarketUpdate.prototype.hasMarket = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional PerpetualMarketInfo perpetual_market_info = 2;
 * @return {?proto.injective.exchange.v1beta1.PerpetualMarketInfo}
 */
proto.injective.exchange.v1beta1.EventPerpetualMarketUpdate.prototype.getPerpetualMarketInfo = function() {
  return /** @type{?proto.injective.exchange.v1beta1.PerpetualMarketInfo} */ (
    jspb.Message.getWrapperField(this, proto.injective.exchange.v1beta1.PerpetualMarketInfo, 2));
};


/**
 * @param {?proto.injective.exchange.v1beta1.PerpetualMarketInfo|undefined} value
 * @return {!proto.injective.exchange.v1beta1.EventPerpetualMarketUpdate} returns this
*/
proto.injective.exchange.v1beta1.EventPerpetualMarketUpdate.prototype.setPerpetualMarketInfo = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.injective.exchange.v1beta1.EventPerpetualMarketUpdate} returns this
 */
proto.injective.exchange.v1beta1.EventPerpetualMarketUpdate.prototype.clearPerpetualMarketInfo = function() {
  return this.setPerpetualMarketInfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.injective.exchange.v1beta1.EventPerpetualMarketUpdate.prototype.hasPerpetualMarketInfo = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional PerpetualMarketFunding funding = 3;
 * @return {?proto.injective.exchange.v1beta1.PerpetualMarketFunding}
 */
proto.injective.exchange.v1beta1.EventPerpetualMarketUpdate.prototype.getFunding = function() {
  return /** @type{?proto.injective.exchange.v1beta1.PerpetualMarketFunding} */ (
    jspb.Message.getWrapperField(this, proto.injective.exchange.v1beta1.PerpetualMarketFunding, 3));
};


/**
 * @param {?proto.injective.exchange.v1beta1.PerpetualMarketFunding|undefined} value
 * @return {!proto.injective.exchange.v1beta1.EventPerpetualMarketUpdate} returns this
*/
proto.injective.exchange.v1beta1.EventPerpetualMarketUpdate.prototype.setFunding = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.injective.exchange.v1beta1.EventPerpetualMarketUpdate} returns this
 */
proto.injective.exchange.v1beta1.EventPerpetualMarketUpdate.prototype.clearFunding = function() {
  return this.setFunding(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.injective.exchange.v1beta1.EventPerpetualMarketUpdate.prototype.hasFunding = function() {
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
proto.injective.exchange.v1beta1.EventExpiryFuturesMarketUpdate.prototype.toObject = function(opt_includeInstance) {
  return proto.injective.exchange.v1beta1.EventExpiryFuturesMarketUpdate.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.injective.exchange.v1beta1.EventExpiryFuturesMarketUpdate} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.injective.exchange.v1beta1.EventExpiryFuturesMarketUpdate.toObject = function(includeInstance, msg) {
  var f, obj = {
    market: (f = msg.getMarket()) && proto.injective.exchange.v1beta1.DerivativeMarket.toObject(includeInstance, f),
    expiryFuturesMarketInfo: (f = msg.getExpiryFuturesMarketInfo()) && proto.injective.exchange.v1beta1.ExpiryFuturesMarketInfo.toObject(includeInstance, f)
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
 * @return {!proto.injective.exchange.v1beta1.EventExpiryFuturesMarketUpdate}
 */
proto.injective.exchange.v1beta1.EventExpiryFuturesMarketUpdate.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.injective.exchange.v1beta1.EventExpiryFuturesMarketUpdate;
  return proto.injective.exchange.v1beta1.EventExpiryFuturesMarketUpdate.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.injective.exchange.v1beta1.EventExpiryFuturesMarketUpdate} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.injective.exchange.v1beta1.EventExpiryFuturesMarketUpdate}
 */
proto.injective.exchange.v1beta1.EventExpiryFuturesMarketUpdate.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.injective.exchange.v1beta1.DerivativeMarket;
      reader.readMessage(value,proto.injective.exchange.v1beta1.DerivativeMarket.deserializeBinaryFromReader);
      msg.setMarket(value);
      break;
    case 3:
      var value = new proto.injective.exchange.v1beta1.ExpiryFuturesMarketInfo;
      reader.readMessage(value,proto.injective.exchange.v1beta1.ExpiryFuturesMarketInfo.deserializeBinaryFromReader);
      msg.setExpiryFuturesMarketInfo(value);
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
proto.injective.exchange.v1beta1.EventExpiryFuturesMarketUpdate.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.injective.exchange.v1beta1.EventExpiryFuturesMarketUpdate.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.injective.exchange.v1beta1.EventExpiryFuturesMarketUpdate} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.injective.exchange.v1beta1.EventExpiryFuturesMarketUpdate.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMarket();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.injective.exchange.v1beta1.DerivativeMarket.serializeBinaryToWriter
    );
  }
  f = message.getExpiryFuturesMarketInfo();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.injective.exchange.v1beta1.ExpiryFuturesMarketInfo.serializeBinaryToWriter
    );
  }
};


/**
 * optional DerivativeMarket market = 1;
 * @return {?proto.injective.exchange.v1beta1.DerivativeMarket}
 */
proto.injective.exchange.v1beta1.EventExpiryFuturesMarketUpdate.prototype.getMarket = function() {
  return /** @type{?proto.injective.exchange.v1beta1.DerivativeMarket} */ (
    jspb.Message.getWrapperField(this, proto.injective.exchange.v1beta1.DerivativeMarket, 1));
};


/**
 * @param {?proto.injective.exchange.v1beta1.DerivativeMarket|undefined} value
 * @return {!proto.injective.exchange.v1beta1.EventExpiryFuturesMarketUpdate} returns this
*/
proto.injective.exchange.v1beta1.EventExpiryFuturesMarketUpdate.prototype.setMarket = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.injective.exchange.v1beta1.EventExpiryFuturesMarketUpdate} returns this
 */
proto.injective.exchange.v1beta1.EventExpiryFuturesMarketUpdate.prototype.clearMarket = function() {
  return this.setMarket(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.injective.exchange.v1beta1.EventExpiryFuturesMarketUpdate.prototype.hasMarket = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional ExpiryFuturesMarketInfo expiry_futures_market_info = 3;
 * @return {?proto.injective.exchange.v1beta1.ExpiryFuturesMarketInfo}
 */
proto.injective.exchange.v1beta1.EventExpiryFuturesMarketUpdate.prototype.getExpiryFuturesMarketInfo = function() {
  return /** @type{?proto.injective.exchange.v1beta1.ExpiryFuturesMarketInfo} */ (
    jspb.Message.getWrapperField(this, proto.injective.exchange.v1beta1.ExpiryFuturesMarketInfo, 3));
};


/**
 * @param {?proto.injective.exchange.v1beta1.ExpiryFuturesMarketInfo|undefined} value
 * @return {!proto.injective.exchange.v1beta1.EventExpiryFuturesMarketUpdate} returns this
*/
proto.injective.exchange.v1beta1.EventExpiryFuturesMarketUpdate.prototype.setExpiryFuturesMarketInfo = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.injective.exchange.v1beta1.EventExpiryFuturesMarketUpdate} returns this
 */
proto.injective.exchange.v1beta1.EventExpiryFuturesMarketUpdate.prototype.clearExpiryFuturesMarketInfo = function() {
  return this.setExpiryFuturesMarketInfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.injective.exchange.v1beta1.EventExpiryFuturesMarketUpdate.prototype.hasExpiryFuturesMarketInfo = function() {
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
proto.injective.exchange.v1beta1.EventPerpetualMarketFundingUpdate.prototype.toObject = function(opt_includeInstance) {
  return proto.injective.exchange.v1beta1.EventPerpetualMarketFundingUpdate.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.injective.exchange.v1beta1.EventPerpetualMarketFundingUpdate} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.injective.exchange.v1beta1.EventPerpetualMarketFundingUpdate.toObject = function(includeInstance, msg) {
  var f, obj = {
    marketId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    funding: (f = msg.getFunding()) && proto.injective.exchange.v1beta1.PerpetualMarketFunding.toObject(includeInstance, f),
    isHourlyFunding: jspb.Message.getBooleanFieldWithDefault(msg, 3, false),
    fundingRate: jspb.Message.getFieldWithDefault(msg, 4, "")
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
 * @return {!proto.injective.exchange.v1beta1.EventPerpetualMarketFundingUpdate}
 */
proto.injective.exchange.v1beta1.EventPerpetualMarketFundingUpdate.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.injective.exchange.v1beta1.EventPerpetualMarketFundingUpdate;
  return proto.injective.exchange.v1beta1.EventPerpetualMarketFundingUpdate.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.injective.exchange.v1beta1.EventPerpetualMarketFundingUpdate} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.injective.exchange.v1beta1.EventPerpetualMarketFundingUpdate}
 */
proto.injective.exchange.v1beta1.EventPerpetualMarketFundingUpdate.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.injective.exchange.v1beta1.PerpetualMarketFunding;
      reader.readMessage(value,proto.injective.exchange.v1beta1.PerpetualMarketFunding.deserializeBinaryFromReader);
      msg.setFunding(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsHourlyFunding(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setFundingRate(value);
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
proto.injective.exchange.v1beta1.EventPerpetualMarketFundingUpdate.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.injective.exchange.v1beta1.EventPerpetualMarketFundingUpdate.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.injective.exchange.v1beta1.EventPerpetualMarketFundingUpdate} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.injective.exchange.v1beta1.EventPerpetualMarketFundingUpdate.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMarketId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getFunding();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.injective.exchange.v1beta1.PerpetualMarketFunding.serializeBinaryToWriter
    );
  }
  f = message.getIsHourlyFunding();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
  f = message.getFundingRate();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional string market_id = 1;
 * @return {string}
 */
proto.injective.exchange.v1beta1.EventPerpetualMarketFundingUpdate.prototype.getMarketId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.injective.exchange.v1beta1.EventPerpetualMarketFundingUpdate} returns this
 */
proto.injective.exchange.v1beta1.EventPerpetualMarketFundingUpdate.prototype.setMarketId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional PerpetualMarketFunding funding = 2;
 * @return {?proto.injective.exchange.v1beta1.PerpetualMarketFunding}
 */
proto.injective.exchange.v1beta1.EventPerpetualMarketFundingUpdate.prototype.getFunding = function() {
  return /** @type{?proto.injective.exchange.v1beta1.PerpetualMarketFunding} */ (
    jspb.Message.getWrapperField(this, proto.injective.exchange.v1beta1.PerpetualMarketFunding, 2));
};


/**
 * @param {?proto.injective.exchange.v1beta1.PerpetualMarketFunding|undefined} value
 * @return {!proto.injective.exchange.v1beta1.EventPerpetualMarketFundingUpdate} returns this
*/
proto.injective.exchange.v1beta1.EventPerpetualMarketFundingUpdate.prototype.setFunding = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.injective.exchange.v1beta1.EventPerpetualMarketFundingUpdate} returns this
 */
proto.injective.exchange.v1beta1.EventPerpetualMarketFundingUpdate.prototype.clearFunding = function() {
  return this.setFunding(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.injective.exchange.v1beta1.EventPerpetualMarketFundingUpdate.prototype.hasFunding = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional bool is_hourly_funding = 3;
 * @return {boolean}
 */
proto.injective.exchange.v1beta1.EventPerpetualMarketFundingUpdate.prototype.getIsHourlyFunding = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.injective.exchange.v1beta1.EventPerpetualMarketFundingUpdate} returns this
 */
proto.injective.exchange.v1beta1.EventPerpetualMarketFundingUpdate.prototype.setIsHourlyFunding = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};


/**
 * optional string funding_rate = 4;
 * @return {string}
 */
proto.injective.exchange.v1beta1.EventPerpetualMarketFundingUpdate.prototype.getFundingRate = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.injective.exchange.v1beta1.EventPerpetualMarketFundingUpdate} returns this
 */
proto.injective.exchange.v1beta1.EventPerpetualMarketFundingUpdate.prototype.setFundingRate = function(value) {
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
proto.injective.exchange.v1beta1.EventSubaccountDeposit.prototype.toObject = function(opt_includeInstance) {
  return proto.injective.exchange.v1beta1.EventSubaccountDeposit.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.injective.exchange.v1beta1.EventSubaccountDeposit} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.injective.exchange.v1beta1.EventSubaccountDeposit.toObject = function(includeInstance, msg) {
  var f, obj = {
    srcAddress: jspb.Message.getFieldWithDefault(msg, 1, ""),
    subaccountId: msg.getSubaccountId_asB64(),
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
 * @return {!proto.injective.exchange.v1beta1.EventSubaccountDeposit}
 */
proto.injective.exchange.v1beta1.EventSubaccountDeposit.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.injective.exchange.v1beta1.EventSubaccountDeposit;
  return proto.injective.exchange.v1beta1.EventSubaccountDeposit.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.injective.exchange.v1beta1.EventSubaccountDeposit} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.injective.exchange.v1beta1.EventSubaccountDeposit}
 */
proto.injective.exchange.v1beta1.EventSubaccountDeposit.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setSrcAddress(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
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
proto.injective.exchange.v1beta1.EventSubaccountDeposit.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.injective.exchange.v1beta1.EventSubaccountDeposit.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.injective.exchange.v1beta1.EventSubaccountDeposit} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.injective.exchange.v1beta1.EventSubaccountDeposit.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSrcAddress();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getSubaccountId_asU8();
  if (f.length > 0) {
    writer.writeBytes(
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
 * optional string src_address = 1;
 * @return {string}
 */
proto.injective.exchange.v1beta1.EventSubaccountDeposit.prototype.getSrcAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.injective.exchange.v1beta1.EventSubaccountDeposit} returns this
 */
proto.injective.exchange.v1beta1.EventSubaccountDeposit.prototype.setSrcAddress = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional bytes subaccount_id = 2;
 * @return {!(string|Uint8Array)}
 */
proto.injective.exchange.v1beta1.EventSubaccountDeposit.prototype.getSubaccountId = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes subaccount_id = 2;
 * This is a type-conversion wrapper around `getSubaccountId()`
 * @return {string}
 */
proto.injective.exchange.v1beta1.EventSubaccountDeposit.prototype.getSubaccountId_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getSubaccountId()));
};


/**
 * optional bytes subaccount_id = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getSubaccountId()`
 * @return {!Uint8Array}
 */
proto.injective.exchange.v1beta1.EventSubaccountDeposit.prototype.getSubaccountId_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getSubaccountId()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.injective.exchange.v1beta1.EventSubaccountDeposit} returns this
 */
proto.injective.exchange.v1beta1.EventSubaccountDeposit.prototype.setSubaccountId = function(value) {
  return jspb.Message.setProto3BytesField(this, 2, value);
};


/**
 * optional cosmos.base.v1beta1.Coin amount = 3;
 * @return {?proto.cosmos.base.v1beta1.Coin}
 */
proto.injective.exchange.v1beta1.EventSubaccountDeposit.prototype.getAmount = function() {
  return /** @type{?proto.cosmos.base.v1beta1.Coin} */ (
    jspb.Message.getWrapperField(this, cosmos_base_v1beta1_coin_pb.Coin, 3));
};


/**
 * @param {?proto.cosmos.base.v1beta1.Coin|undefined} value
 * @return {!proto.injective.exchange.v1beta1.EventSubaccountDeposit} returns this
*/
proto.injective.exchange.v1beta1.EventSubaccountDeposit.prototype.setAmount = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.injective.exchange.v1beta1.EventSubaccountDeposit} returns this
 */
proto.injective.exchange.v1beta1.EventSubaccountDeposit.prototype.clearAmount = function() {
  return this.setAmount(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.injective.exchange.v1beta1.EventSubaccountDeposit.prototype.hasAmount = function() {
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
proto.injective.exchange.v1beta1.EventSubaccountWithdraw.prototype.toObject = function(opt_includeInstance) {
  return proto.injective.exchange.v1beta1.EventSubaccountWithdraw.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.injective.exchange.v1beta1.EventSubaccountWithdraw} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.injective.exchange.v1beta1.EventSubaccountWithdraw.toObject = function(includeInstance, msg) {
  var f, obj = {
    subaccountId: msg.getSubaccountId_asB64(),
    dstAddress: jspb.Message.getFieldWithDefault(msg, 2, ""),
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
 * @return {!proto.injective.exchange.v1beta1.EventSubaccountWithdraw}
 */
proto.injective.exchange.v1beta1.EventSubaccountWithdraw.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.injective.exchange.v1beta1.EventSubaccountWithdraw;
  return proto.injective.exchange.v1beta1.EventSubaccountWithdraw.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.injective.exchange.v1beta1.EventSubaccountWithdraw} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.injective.exchange.v1beta1.EventSubaccountWithdraw}
 */
proto.injective.exchange.v1beta1.EventSubaccountWithdraw.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setSubaccountId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setDstAddress(value);
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
proto.injective.exchange.v1beta1.EventSubaccountWithdraw.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.injective.exchange.v1beta1.EventSubaccountWithdraw.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.injective.exchange.v1beta1.EventSubaccountWithdraw} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.injective.exchange.v1beta1.EventSubaccountWithdraw.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSubaccountId_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
  f = message.getDstAddress();
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
 * optional bytes subaccount_id = 1;
 * @return {!(string|Uint8Array)}
 */
proto.injective.exchange.v1beta1.EventSubaccountWithdraw.prototype.getSubaccountId = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes subaccount_id = 1;
 * This is a type-conversion wrapper around `getSubaccountId()`
 * @return {string}
 */
proto.injective.exchange.v1beta1.EventSubaccountWithdraw.prototype.getSubaccountId_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getSubaccountId()));
};


/**
 * optional bytes subaccount_id = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getSubaccountId()`
 * @return {!Uint8Array}
 */
proto.injective.exchange.v1beta1.EventSubaccountWithdraw.prototype.getSubaccountId_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getSubaccountId()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.injective.exchange.v1beta1.EventSubaccountWithdraw} returns this
 */
proto.injective.exchange.v1beta1.EventSubaccountWithdraw.prototype.setSubaccountId = function(value) {
  return jspb.Message.setProto3BytesField(this, 1, value);
};


/**
 * optional string dst_address = 2;
 * @return {string}
 */
proto.injective.exchange.v1beta1.EventSubaccountWithdraw.prototype.getDstAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.injective.exchange.v1beta1.EventSubaccountWithdraw} returns this
 */
proto.injective.exchange.v1beta1.EventSubaccountWithdraw.prototype.setDstAddress = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional cosmos.base.v1beta1.Coin amount = 3;
 * @return {?proto.cosmos.base.v1beta1.Coin}
 */
proto.injective.exchange.v1beta1.EventSubaccountWithdraw.prototype.getAmount = function() {
  return /** @type{?proto.cosmos.base.v1beta1.Coin} */ (
    jspb.Message.getWrapperField(this, cosmos_base_v1beta1_coin_pb.Coin, 3));
};


/**
 * @param {?proto.cosmos.base.v1beta1.Coin|undefined} value
 * @return {!proto.injective.exchange.v1beta1.EventSubaccountWithdraw} returns this
*/
proto.injective.exchange.v1beta1.EventSubaccountWithdraw.prototype.setAmount = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.injective.exchange.v1beta1.EventSubaccountWithdraw} returns this
 */
proto.injective.exchange.v1beta1.EventSubaccountWithdraw.prototype.clearAmount = function() {
  return this.setAmount(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.injective.exchange.v1beta1.EventSubaccountWithdraw.prototype.hasAmount = function() {
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
proto.injective.exchange.v1beta1.EventSubaccountBalanceTransfer.prototype.toObject = function(opt_includeInstance) {
  return proto.injective.exchange.v1beta1.EventSubaccountBalanceTransfer.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.injective.exchange.v1beta1.EventSubaccountBalanceTransfer} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.injective.exchange.v1beta1.EventSubaccountBalanceTransfer.toObject = function(includeInstance, msg) {
  var f, obj = {
    srcSubaccountId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    dstSubaccountId: jspb.Message.getFieldWithDefault(msg, 2, ""),
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
 * @return {!proto.injective.exchange.v1beta1.EventSubaccountBalanceTransfer}
 */
proto.injective.exchange.v1beta1.EventSubaccountBalanceTransfer.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.injective.exchange.v1beta1.EventSubaccountBalanceTransfer;
  return proto.injective.exchange.v1beta1.EventSubaccountBalanceTransfer.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.injective.exchange.v1beta1.EventSubaccountBalanceTransfer} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.injective.exchange.v1beta1.EventSubaccountBalanceTransfer}
 */
proto.injective.exchange.v1beta1.EventSubaccountBalanceTransfer.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setSrcSubaccountId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setDstSubaccountId(value);
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
proto.injective.exchange.v1beta1.EventSubaccountBalanceTransfer.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.injective.exchange.v1beta1.EventSubaccountBalanceTransfer.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.injective.exchange.v1beta1.EventSubaccountBalanceTransfer} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.injective.exchange.v1beta1.EventSubaccountBalanceTransfer.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSrcSubaccountId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getDstSubaccountId();
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
 * optional string src_subaccount_id = 1;
 * @return {string}
 */
proto.injective.exchange.v1beta1.EventSubaccountBalanceTransfer.prototype.getSrcSubaccountId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.injective.exchange.v1beta1.EventSubaccountBalanceTransfer} returns this
 */
proto.injective.exchange.v1beta1.EventSubaccountBalanceTransfer.prototype.setSrcSubaccountId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string dst_subaccount_id = 2;
 * @return {string}
 */
proto.injective.exchange.v1beta1.EventSubaccountBalanceTransfer.prototype.getDstSubaccountId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.injective.exchange.v1beta1.EventSubaccountBalanceTransfer} returns this
 */
proto.injective.exchange.v1beta1.EventSubaccountBalanceTransfer.prototype.setDstSubaccountId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional cosmos.base.v1beta1.Coin amount = 3;
 * @return {?proto.cosmos.base.v1beta1.Coin}
 */
proto.injective.exchange.v1beta1.EventSubaccountBalanceTransfer.prototype.getAmount = function() {
  return /** @type{?proto.cosmos.base.v1beta1.Coin} */ (
    jspb.Message.getWrapperField(this, cosmos_base_v1beta1_coin_pb.Coin, 3));
};


/**
 * @param {?proto.cosmos.base.v1beta1.Coin|undefined} value
 * @return {!proto.injective.exchange.v1beta1.EventSubaccountBalanceTransfer} returns this
*/
proto.injective.exchange.v1beta1.EventSubaccountBalanceTransfer.prototype.setAmount = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.injective.exchange.v1beta1.EventSubaccountBalanceTransfer} returns this
 */
proto.injective.exchange.v1beta1.EventSubaccountBalanceTransfer.prototype.clearAmount = function() {
  return this.setAmount(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.injective.exchange.v1beta1.EventSubaccountBalanceTransfer.prototype.hasAmount = function() {
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
proto.injective.exchange.v1beta1.SubaccountDeposit.prototype.toObject = function(opt_includeInstance) {
  return proto.injective.exchange.v1beta1.SubaccountDeposit.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.injective.exchange.v1beta1.SubaccountDeposit} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.injective.exchange.v1beta1.SubaccountDeposit.toObject = function(includeInstance, msg) {
  var f, obj = {
    subaccountId: msg.getSubaccountId_asB64(),
    deposit: (f = msg.getDeposit()) && proto.injective.exchange.v1beta1.Deposit.toObject(includeInstance, f)
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
 * @return {!proto.injective.exchange.v1beta1.SubaccountDeposit}
 */
proto.injective.exchange.v1beta1.SubaccountDeposit.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.injective.exchange.v1beta1.SubaccountDeposit;
  return proto.injective.exchange.v1beta1.SubaccountDeposit.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.injective.exchange.v1beta1.SubaccountDeposit} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.injective.exchange.v1beta1.SubaccountDeposit}
 */
proto.injective.exchange.v1beta1.SubaccountDeposit.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setSubaccountId(value);
      break;
    case 2:
      var value = new proto.injective.exchange.v1beta1.Deposit;
      reader.readMessage(value,proto.injective.exchange.v1beta1.Deposit.deserializeBinaryFromReader);
      msg.setDeposit(value);
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
proto.injective.exchange.v1beta1.SubaccountDeposit.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.injective.exchange.v1beta1.SubaccountDeposit.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.injective.exchange.v1beta1.SubaccountDeposit} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.injective.exchange.v1beta1.SubaccountDeposit.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSubaccountId_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
  f = message.getDeposit();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.injective.exchange.v1beta1.Deposit.serializeBinaryToWriter
    );
  }
};


/**
 * optional bytes subaccount_id = 1;
 * @return {!(string|Uint8Array)}
 */
proto.injective.exchange.v1beta1.SubaccountDeposit.prototype.getSubaccountId = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes subaccount_id = 1;
 * This is a type-conversion wrapper around `getSubaccountId()`
 * @return {string}
 */
proto.injective.exchange.v1beta1.SubaccountDeposit.prototype.getSubaccountId_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getSubaccountId()));
};


/**
 * optional bytes subaccount_id = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getSubaccountId()`
 * @return {!Uint8Array}
 */
proto.injective.exchange.v1beta1.SubaccountDeposit.prototype.getSubaccountId_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getSubaccountId()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.injective.exchange.v1beta1.SubaccountDeposit} returns this
 */
proto.injective.exchange.v1beta1.SubaccountDeposit.prototype.setSubaccountId = function(value) {
  return jspb.Message.setProto3BytesField(this, 1, value);
};


/**
 * optional Deposit deposit = 2;
 * @return {?proto.injective.exchange.v1beta1.Deposit}
 */
proto.injective.exchange.v1beta1.SubaccountDeposit.prototype.getDeposit = function() {
  return /** @type{?proto.injective.exchange.v1beta1.Deposit} */ (
    jspb.Message.getWrapperField(this, proto.injective.exchange.v1beta1.Deposit, 2));
};


/**
 * @param {?proto.injective.exchange.v1beta1.Deposit|undefined} value
 * @return {!proto.injective.exchange.v1beta1.SubaccountDeposit} returns this
*/
proto.injective.exchange.v1beta1.SubaccountDeposit.prototype.setDeposit = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.injective.exchange.v1beta1.SubaccountDeposit} returns this
 */
proto.injective.exchange.v1beta1.SubaccountDeposit.prototype.clearDeposit = function() {
  return this.setDeposit(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.injective.exchange.v1beta1.SubaccountDeposit.prototype.hasDeposit = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.injective.exchange.v1beta1.DepositUpdate.repeatedFields_ = [2];



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
proto.injective.exchange.v1beta1.DepositUpdate.prototype.toObject = function(opt_includeInstance) {
  return proto.injective.exchange.v1beta1.DepositUpdate.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.injective.exchange.v1beta1.DepositUpdate} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.injective.exchange.v1beta1.DepositUpdate.toObject = function(includeInstance, msg) {
  var f, obj = {
    denom: jspb.Message.getFieldWithDefault(msg, 1, ""),
    depositsList: jspb.Message.toObjectList(msg.getDepositsList(),
    proto.injective.exchange.v1beta1.SubaccountDeposit.toObject, includeInstance)
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
 * @return {!proto.injective.exchange.v1beta1.DepositUpdate}
 */
proto.injective.exchange.v1beta1.DepositUpdate.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.injective.exchange.v1beta1.DepositUpdate;
  return proto.injective.exchange.v1beta1.DepositUpdate.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.injective.exchange.v1beta1.DepositUpdate} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.injective.exchange.v1beta1.DepositUpdate}
 */
proto.injective.exchange.v1beta1.DepositUpdate.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setDenom(value);
      break;
    case 2:
      var value = new proto.injective.exchange.v1beta1.SubaccountDeposit;
      reader.readMessage(value,proto.injective.exchange.v1beta1.SubaccountDeposit.deserializeBinaryFromReader);
      msg.addDeposits(value);
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
proto.injective.exchange.v1beta1.DepositUpdate.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.injective.exchange.v1beta1.DepositUpdate.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.injective.exchange.v1beta1.DepositUpdate} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.injective.exchange.v1beta1.DepositUpdate.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDenom();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getDepositsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.injective.exchange.v1beta1.SubaccountDeposit.serializeBinaryToWriter
    );
  }
};


/**
 * optional string denom = 1;
 * @return {string}
 */
proto.injective.exchange.v1beta1.DepositUpdate.prototype.getDenom = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.injective.exchange.v1beta1.DepositUpdate} returns this
 */
proto.injective.exchange.v1beta1.DepositUpdate.prototype.setDenom = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated SubaccountDeposit deposits = 2;
 * @return {!Array<!proto.injective.exchange.v1beta1.SubaccountDeposit>}
 */
proto.injective.exchange.v1beta1.DepositUpdate.prototype.getDepositsList = function() {
  return /** @type{!Array<!proto.injective.exchange.v1beta1.SubaccountDeposit>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.injective.exchange.v1beta1.SubaccountDeposit, 2));
};


/**
 * @param {!Array<!proto.injective.exchange.v1beta1.SubaccountDeposit>} value
 * @return {!proto.injective.exchange.v1beta1.DepositUpdate} returns this
*/
proto.injective.exchange.v1beta1.DepositUpdate.prototype.setDepositsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.injective.exchange.v1beta1.SubaccountDeposit=} opt_value
 * @param {number=} opt_index
 * @return {!proto.injective.exchange.v1beta1.SubaccountDeposit}
 */
proto.injective.exchange.v1beta1.DepositUpdate.prototype.addDeposits = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.injective.exchange.v1beta1.SubaccountDeposit, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.injective.exchange.v1beta1.DepositUpdate} returns this
 */
proto.injective.exchange.v1beta1.DepositUpdate.prototype.clearDepositsList = function() {
  return this.setDepositsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.injective.exchange.v1beta1.EventBatchDepositUpdate.repeatedFields_ = [1];



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
proto.injective.exchange.v1beta1.EventBatchDepositUpdate.prototype.toObject = function(opt_includeInstance) {
  return proto.injective.exchange.v1beta1.EventBatchDepositUpdate.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.injective.exchange.v1beta1.EventBatchDepositUpdate} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.injective.exchange.v1beta1.EventBatchDepositUpdate.toObject = function(includeInstance, msg) {
  var f, obj = {
    depositUpdatesList: jspb.Message.toObjectList(msg.getDepositUpdatesList(),
    proto.injective.exchange.v1beta1.DepositUpdate.toObject, includeInstance)
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
 * @return {!proto.injective.exchange.v1beta1.EventBatchDepositUpdate}
 */
proto.injective.exchange.v1beta1.EventBatchDepositUpdate.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.injective.exchange.v1beta1.EventBatchDepositUpdate;
  return proto.injective.exchange.v1beta1.EventBatchDepositUpdate.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.injective.exchange.v1beta1.EventBatchDepositUpdate} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.injective.exchange.v1beta1.EventBatchDepositUpdate}
 */
proto.injective.exchange.v1beta1.EventBatchDepositUpdate.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.injective.exchange.v1beta1.DepositUpdate;
      reader.readMessage(value,proto.injective.exchange.v1beta1.DepositUpdate.deserializeBinaryFromReader);
      msg.addDepositUpdates(value);
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
proto.injective.exchange.v1beta1.EventBatchDepositUpdate.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.injective.exchange.v1beta1.EventBatchDepositUpdate.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.injective.exchange.v1beta1.EventBatchDepositUpdate} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.injective.exchange.v1beta1.EventBatchDepositUpdate.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDepositUpdatesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.injective.exchange.v1beta1.DepositUpdate.serializeBinaryToWriter
    );
  }
};


/**
 * repeated DepositUpdate deposit_updates = 1;
 * @return {!Array<!proto.injective.exchange.v1beta1.DepositUpdate>}
 */
proto.injective.exchange.v1beta1.EventBatchDepositUpdate.prototype.getDepositUpdatesList = function() {
  return /** @type{!Array<!proto.injective.exchange.v1beta1.DepositUpdate>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.injective.exchange.v1beta1.DepositUpdate, 1));
};


/**
 * @param {!Array<!proto.injective.exchange.v1beta1.DepositUpdate>} value
 * @return {!proto.injective.exchange.v1beta1.EventBatchDepositUpdate} returns this
*/
proto.injective.exchange.v1beta1.EventBatchDepositUpdate.prototype.setDepositUpdatesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.injective.exchange.v1beta1.DepositUpdate=} opt_value
 * @param {number=} opt_index
 * @return {!proto.injective.exchange.v1beta1.DepositUpdate}
 */
proto.injective.exchange.v1beta1.EventBatchDepositUpdate.prototype.addDepositUpdates = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.injective.exchange.v1beta1.DepositUpdate, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.injective.exchange.v1beta1.EventBatchDepositUpdate} returns this
 */
proto.injective.exchange.v1beta1.EventBatchDepositUpdate.prototype.clearDepositUpdatesList = function() {
  return this.setDepositUpdatesList([]);
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
proto.injective.exchange.v1beta1.DerivativeMarketOrderCancel.prototype.toObject = function(opt_includeInstance) {
  return proto.injective.exchange.v1beta1.DerivativeMarketOrderCancel.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.injective.exchange.v1beta1.DerivativeMarketOrderCancel} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.injective.exchange.v1beta1.DerivativeMarketOrderCancel.toObject = function(includeInstance, msg) {
  var f, obj = {
    marketOrder: (f = msg.getMarketOrder()) && proto.injective.exchange.v1beta1.DerivativeMarketOrder.toObject(includeInstance, f),
    cancelQuantity: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.injective.exchange.v1beta1.DerivativeMarketOrderCancel}
 */
proto.injective.exchange.v1beta1.DerivativeMarketOrderCancel.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.injective.exchange.v1beta1.DerivativeMarketOrderCancel;
  return proto.injective.exchange.v1beta1.DerivativeMarketOrderCancel.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.injective.exchange.v1beta1.DerivativeMarketOrderCancel} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.injective.exchange.v1beta1.DerivativeMarketOrderCancel}
 */
proto.injective.exchange.v1beta1.DerivativeMarketOrderCancel.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.injective.exchange.v1beta1.DerivativeMarketOrder;
      reader.readMessage(value,proto.injective.exchange.v1beta1.DerivativeMarketOrder.deserializeBinaryFromReader);
      msg.setMarketOrder(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setCancelQuantity(value);
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
proto.injective.exchange.v1beta1.DerivativeMarketOrderCancel.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.injective.exchange.v1beta1.DerivativeMarketOrderCancel.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.injective.exchange.v1beta1.DerivativeMarketOrderCancel} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.injective.exchange.v1beta1.DerivativeMarketOrderCancel.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMarketOrder();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.injective.exchange.v1beta1.DerivativeMarketOrder.serializeBinaryToWriter
    );
  }
  f = message.getCancelQuantity();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional DerivativeMarketOrder market_order = 1;
 * @return {?proto.injective.exchange.v1beta1.DerivativeMarketOrder}
 */
proto.injective.exchange.v1beta1.DerivativeMarketOrderCancel.prototype.getMarketOrder = function() {
  return /** @type{?proto.injective.exchange.v1beta1.DerivativeMarketOrder} */ (
    jspb.Message.getWrapperField(this, proto.injective.exchange.v1beta1.DerivativeMarketOrder, 1));
};


/**
 * @param {?proto.injective.exchange.v1beta1.DerivativeMarketOrder|undefined} value
 * @return {!proto.injective.exchange.v1beta1.DerivativeMarketOrderCancel} returns this
*/
proto.injective.exchange.v1beta1.DerivativeMarketOrderCancel.prototype.setMarketOrder = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.injective.exchange.v1beta1.DerivativeMarketOrderCancel} returns this
 */
proto.injective.exchange.v1beta1.DerivativeMarketOrderCancel.prototype.clearMarketOrder = function() {
  return this.setMarketOrder(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.injective.exchange.v1beta1.DerivativeMarketOrderCancel.prototype.hasMarketOrder = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string cancel_quantity = 2;
 * @return {string}
 */
proto.injective.exchange.v1beta1.DerivativeMarketOrderCancel.prototype.getCancelQuantity = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.injective.exchange.v1beta1.DerivativeMarketOrderCancel} returns this
 */
proto.injective.exchange.v1beta1.DerivativeMarketOrderCancel.prototype.setCancelQuantity = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
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
proto.injective.exchange.v1beta1.EventCancelDerivativeOrder.prototype.toObject = function(opt_includeInstance) {
  return proto.injective.exchange.v1beta1.EventCancelDerivativeOrder.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.injective.exchange.v1beta1.EventCancelDerivativeOrder} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.injective.exchange.v1beta1.EventCancelDerivativeOrder.toObject = function(includeInstance, msg) {
  var f, obj = {
    marketId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    islimitcancel: jspb.Message.getBooleanFieldWithDefault(msg, 2, false),
    limitOrder: (f = msg.getLimitOrder()) && proto.injective.exchange.v1beta1.DerivativeLimitOrder.toObject(includeInstance, f),
    marketOrderCancel: (f = msg.getMarketOrderCancel()) && proto.injective.exchange.v1beta1.DerivativeMarketOrderCancel.toObject(includeInstance, f)
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
 * @return {!proto.injective.exchange.v1beta1.EventCancelDerivativeOrder}
 */
proto.injective.exchange.v1beta1.EventCancelDerivativeOrder.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.injective.exchange.v1beta1.EventCancelDerivativeOrder;
  return proto.injective.exchange.v1beta1.EventCancelDerivativeOrder.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.injective.exchange.v1beta1.EventCancelDerivativeOrder} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.injective.exchange.v1beta1.EventCancelDerivativeOrder}
 */
proto.injective.exchange.v1beta1.EventCancelDerivativeOrder.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIslimitcancel(value);
      break;
    case 3:
      var value = new proto.injective.exchange.v1beta1.DerivativeLimitOrder;
      reader.readMessage(value,proto.injective.exchange.v1beta1.DerivativeLimitOrder.deserializeBinaryFromReader);
      msg.setLimitOrder(value);
      break;
    case 4:
      var value = new proto.injective.exchange.v1beta1.DerivativeMarketOrderCancel;
      reader.readMessage(value,proto.injective.exchange.v1beta1.DerivativeMarketOrderCancel.deserializeBinaryFromReader);
      msg.setMarketOrderCancel(value);
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
proto.injective.exchange.v1beta1.EventCancelDerivativeOrder.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.injective.exchange.v1beta1.EventCancelDerivativeOrder.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.injective.exchange.v1beta1.EventCancelDerivativeOrder} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.injective.exchange.v1beta1.EventCancelDerivativeOrder.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMarketId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getIslimitcancel();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
  f = message.getLimitOrder();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.injective.exchange.v1beta1.DerivativeLimitOrder.serializeBinaryToWriter
    );
  }
  f = message.getMarketOrderCancel();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.injective.exchange.v1beta1.DerivativeMarketOrderCancel.serializeBinaryToWriter
    );
  }
};


/**
 * optional string market_id = 1;
 * @return {string}
 */
proto.injective.exchange.v1beta1.EventCancelDerivativeOrder.prototype.getMarketId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.injective.exchange.v1beta1.EventCancelDerivativeOrder} returns this
 */
proto.injective.exchange.v1beta1.EventCancelDerivativeOrder.prototype.setMarketId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional bool isLimitCancel = 2;
 * @return {boolean}
 */
proto.injective.exchange.v1beta1.EventCancelDerivativeOrder.prototype.getIslimitcancel = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.injective.exchange.v1beta1.EventCancelDerivativeOrder} returns this
 */
proto.injective.exchange.v1beta1.EventCancelDerivativeOrder.prototype.setIslimitcancel = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};


/**
 * optional DerivativeLimitOrder limit_order = 3;
 * @return {?proto.injective.exchange.v1beta1.DerivativeLimitOrder}
 */
proto.injective.exchange.v1beta1.EventCancelDerivativeOrder.prototype.getLimitOrder = function() {
  return /** @type{?proto.injective.exchange.v1beta1.DerivativeLimitOrder} */ (
    jspb.Message.getWrapperField(this, proto.injective.exchange.v1beta1.DerivativeLimitOrder, 3));
};


/**
 * @param {?proto.injective.exchange.v1beta1.DerivativeLimitOrder|undefined} value
 * @return {!proto.injective.exchange.v1beta1.EventCancelDerivativeOrder} returns this
*/
proto.injective.exchange.v1beta1.EventCancelDerivativeOrder.prototype.setLimitOrder = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.injective.exchange.v1beta1.EventCancelDerivativeOrder} returns this
 */
proto.injective.exchange.v1beta1.EventCancelDerivativeOrder.prototype.clearLimitOrder = function() {
  return this.setLimitOrder(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.injective.exchange.v1beta1.EventCancelDerivativeOrder.prototype.hasLimitOrder = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional DerivativeMarketOrderCancel market_order_cancel = 4;
 * @return {?proto.injective.exchange.v1beta1.DerivativeMarketOrderCancel}
 */
proto.injective.exchange.v1beta1.EventCancelDerivativeOrder.prototype.getMarketOrderCancel = function() {
  return /** @type{?proto.injective.exchange.v1beta1.DerivativeMarketOrderCancel} */ (
    jspb.Message.getWrapperField(this, proto.injective.exchange.v1beta1.DerivativeMarketOrderCancel, 4));
};


/**
 * @param {?proto.injective.exchange.v1beta1.DerivativeMarketOrderCancel|undefined} value
 * @return {!proto.injective.exchange.v1beta1.EventCancelDerivativeOrder} returns this
*/
proto.injective.exchange.v1beta1.EventCancelDerivativeOrder.prototype.setMarketOrderCancel = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.injective.exchange.v1beta1.EventCancelDerivativeOrder} returns this
 */
proto.injective.exchange.v1beta1.EventCancelDerivativeOrder.prototype.clearMarketOrderCancel = function() {
  return this.setMarketOrderCancel(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.injective.exchange.v1beta1.EventCancelDerivativeOrder.prototype.hasMarketOrderCancel = function() {
  return jspb.Message.getField(this, 4) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.injective.exchange.v1beta1.LiquidityMiningCampaign.repeatedFields_ = [1,2,3,4,5];



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
proto.injective.exchange.v1beta1.LiquidityMiningCampaign.prototype.toObject = function(opt_includeInstance) {
  return proto.injective.exchange.v1beta1.LiquidityMiningCampaign.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.injective.exchange.v1beta1.LiquidityMiningCampaign} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.injective.exchange.v1beta1.LiquidityMiningCampaign.toObject = function(includeInstance, msg) {
  var f, obj = {
    spotMarketIdsList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f,
    spotMarketWeightsList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f,
    derivativeMarketIdsList: (f = jspb.Message.getRepeatedField(msg, 3)) == null ? undefined : f,
    derivativeMarketWeightsList: (f = jspb.Message.getRepeatedField(msg, 4)) == null ? undefined : f,
    maxEpochRewardsList: jspb.Message.toObjectList(msg.getMaxEpochRewardsList(),
    cosmos_base_v1beta1_coin_pb.Coin.toObject, includeInstance)
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
 * @return {!proto.injective.exchange.v1beta1.LiquidityMiningCampaign}
 */
proto.injective.exchange.v1beta1.LiquidityMiningCampaign.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.injective.exchange.v1beta1.LiquidityMiningCampaign;
  return proto.injective.exchange.v1beta1.LiquidityMiningCampaign.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.injective.exchange.v1beta1.LiquidityMiningCampaign} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.injective.exchange.v1beta1.LiquidityMiningCampaign}
 */
proto.injective.exchange.v1beta1.LiquidityMiningCampaign.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.addSpotMarketIds(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.addSpotMarketWeights(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.addDerivativeMarketIds(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.addDerivativeMarketWeights(value);
      break;
    case 5:
      var value = new cosmos_base_v1beta1_coin_pb.Coin;
      reader.readMessage(value,cosmos_base_v1beta1_coin_pb.Coin.deserializeBinaryFromReader);
      msg.addMaxEpochRewards(value);
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
proto.injective.exchange.v1beta1.LiquidityMiningCampaign.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.injective.exchange.v1beta1.LiquidityMiningCampaign.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.injective.exchange.v1beta1.LiquidityMiningCampaign} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.injective.exchange.v1beta1.LiquidityMiningCampaign.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSpotMarketIdsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
  f = message.getSpotMarketWeightsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      2,
      f
    );
  }
  f = message.getDerivativeMarketIdsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      3,
      f
    );
  }
  f = message.getDerivativeMarketWeightsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      4,
      f
    );
  }
  f = message.getMaxEpochRewardsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      5,
      f,
      cosmos_base_v1beta1_coin_pb.Coin.serializeBinaryToWriter
    );
  }
};


/**
 * repeated string spot_market_ids = 1;
 * @return {!Array<string>}
 */
proto.injective.exchange.v1beta1.LiquidityMiningCampaign.prototype.getSpotMarketIdsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.injective.exchange.v1beta1.LiquidityMiningCampaign} returns this
 */
proto.injective.exchange.v1beta1.LiquidityMiningCampaign.prototype.setSpotMarketIdsList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.injective.exchange.v1beta1.LiquidityMiningCampaign} returns this
 */
proto.injective.exchange.v1beta1.LiquidityMiningCampaign.prototype.addSpotMarketIds = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.injective.exchange.v1beta1.LiquidityMiningCampaign} returns this
 */
proto.injective.exchange.v1beta1.LiquidityMiningCampaign.prototype.clearSpotMarketIdsList = function() {
  return this.setSpotMarketIdsList([]);
};


/**
 * repeated string spot_market_weights = 2;
 * @return {!Array<string>}
 */
proto.injective.exchange.v1beta1.LiquidityMiningCampaign.prototype.getSpotMarketWeightsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.injective.exchange.v1beta1.LiquidityMiningCampaign} returns this
 */
proto.injective.exchange.v1beta1.LiquidityMiningCampaign.prototype.setSpotMarketWeightsList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.injective.exchange.v1beta1.LiquidityMiningCampaign} returns this
 */
proto.injective.exchange.v1beta1.LiquidityMiningCampaign.prototype.addSpotMarketWeights = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.injective.exchange.v1beta1.LiquidityMiningCampaign} returns this
 */
proto.injective.exchange.v1beta1.LiquidityMiningCampaign.prototype.clearSpotMarketWeightsList = function() {
  return this.setSpotMarketWeightsList([]);
};


/**
 * repeated string derivative_market_ids = 3;
 * @return {!Array<string>}
 */
proto.injective.exchange.v1beta1.LiquidityMiningCampaign.prototype.getDerivativeMarketIdsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 3));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.injective.exchange.v1beta1.LiquidityMiningCampaign} returns this
 */
proto.injective.exchange.v1beta1.LiquidityMiningCampaign.prototype.setDerivativeMarketIdsList = function(value) {
  return jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.injective.exchange.v1beta1.LiquidityMiningCampaign} returns this
 */
proto.injective.exchange.v1beta1.LiquidityMiningCampaign.prototype.addDerivativeMarketIds = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.injective.exchange.v1beta1.LiquidityMiningCampaign} returns this
 */
proto.injective.exchange.v1beta1.LiquidityMiningCampaign.prototype.clearDerivativeMarketIdsList = function() {
  return this.setDerivativeMarketIdsList([]);
};


/**
 * repeated string derivative_market_weights = 4;
 * @return {!Array<string>}
 */
proto.injective.exchange.v1beta1.LiquidityMiningCampaign.prototype.getDerivativeMarketWeightsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 4));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.injective.exchange.v1beta1.LiquidityMiningCampaign} returns this
 */
proto.injective.exchange.v1beta1.LiquidityMiningCampaign.prototype.setDerivativeMarketWeightsList = function(value) {
  return jspb.Message.setField(this, 4, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.injective.exchange.v1beta1.LiquidityMiningCampaign} returns this
 */
proto.injective.exchange.v1beta1.LiquidityMiningCampaign.prototype.addDerivativeMarketWeights = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 4, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.injective.exchange.v1beta1.LiquidityMiningCampaign} returns this
 */
proto.injective.exchange.v1beta1.LiquidityMiningCampaign.prototype.clearDerivativeMarketWeightsList = function() {
  return this.setDerivativeMarketWeightsList([]);
};


/**
 * repeated cosmos.base.v1beta1.Coin max_epoch_rewards = 5;
 * @return {!Array<!proto.cosmos.base.v1beta1.Coin>}
 */
proto.injective.exchange.v1beta1.LiquidityMiningCampaign.prototype.getMaxEpochRewardsList = function() {
  return /** @type{!Array<!proto.cosmos.base.v1beta1.Coin>} */ (
    jspb.Message.getRepeatedWrapperField(this, cosmos_base_v1beta1_coin_pb.Coin, 5));
};


/**
 * @param {!Array<!proto.cosmos.base.v1beta1.Coin>} value
 * @return {!proto.injective.exchange.v1beta1.LiquidityMiningCampaign} returns this
*/
proto.injective.exchange.v1beta1.LiquidityMiningCampaign.prototype.setMaxEpochRewardsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 5, value);
};


/**
 * @param {!proto.cosmos.base.v1beta1.Coin=} opt_value
 * @param {number=} opt_index
 * @return {!proto.cosmos.base.v1beta1.Coin}
 */
proto.injective.exchange.v1beta1.LiquidityMiningCampaign.prototype.addMaxEpochRewards = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 5, opt_value, proto.cosmos.base.v1beta1.Coin, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.injective.exchange.v1beta1.LiquidityMiningCampaign} returns this
 */
proto.injective.exchange.v1beta1.LiquidityMiningCampaign.prototype.clearMaxEpochRewardsList = function() {
  return this.setMaxEpochRewardsList([]);
};


/**
 * @enum {number}
 */
proto.injective.exchange.v1beta1.MarketStatus = {
  UNSPECIFIED: 0,
  ACTIVE: 1,
  PAUSED: 2,
  SUSPENDED: 3,
  DEMOLISHED: 4,
  EXPIRED: 5
};

/**
 * @enum {number}
 */
proto.injective.exchange.v1beta1.OrderType = {
  UNSPECIFIED: 0,
  BUY: 1,
  SELL: 2,
  STOP_BUY: 3,
  STOP_SELL: 4,
  TAKE_BUY: 5,
  TAKE_SELL: 6
};

/**
 * @enum {number}
 */
proto.injective.exchange.v1beta1.ExecutionType = {
  UNSPECIFIEDEXECUTIONTYPE: 0,
  MARKET: 1,
  LIMITFILL: 2,
  LIMITMATCHRESTINGORDER: 3,
  LIMITMATCHNEWORDER: 4
};

goog.object.extend(exports, proto.injective.exchange.v1beta1);
