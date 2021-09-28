// source: injective/peggy/v1/query.proto
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

var injective_peggy_v1_genesis_pb = require('../../../injective/peggy/v1/genesis_pb.js');
goog.object.extend(proto, injective_peggy_v1_genesis_pb);
var injective_peggy_v1_types_pb = require('../../../injective/peggy/v1/types_pb.js');
goog.object.extend(proto, injective_peggy_v1_types_pb);
var injective_peggy_v1_msgs_pb = require('../../../injective/peggy/v1/msgs_pb.js');
goog.object.extend(proto, injective_peggy_v1_msgs_pb);
var injective_peggy_v1_pool_pb = require('../../../injective/peggy/v1/pool_pb.js');
goog.object.extend(proto, injective_peggy_v1_pool_pb);
var injective_peggy_v1_batch_pb = require('../../../injective/peggy/v1/batch_pb.js');
goog.object.extend(proto, injective_peggy_v1_batch_pb);
var google_api_annotations_pb = require('../../../google/api/annotations_pb.js');
goog.object.extend(proto, google_api_annotations_pb);
var gogoproto_gogo_pb = require('../../../gogoproto/gogo_pb.js');
goog.object.extend(proto, gogoproto_gogo_pb);
goog.exportSymbol('proto.injective.peggy.v1.QueryBatchConfirmsRequest', null, global);
goog.exportSymbol('proto.injective.peggy.v1.QueryBatchConfirmsResponse', null, global);
goog.exportSymbol('proto.injective.peggy.v1.QueryBatchFeeRequest', null, global);
goog.exportSymbol('proto.injective.peggy.v1.QueryBatchFeeResponse', null, global);
goog.exportSymbol('proto.injective.peggy.v1.QueryBatchRequestByNonceRequest', null, global);
goog.exportSymbol('proto.injective.peggy.v1.QueryBatchRequestByNonceResponse', null, global);
goog.exportSymbol('proto.injective.peggy.v1.QueryCurrentValsetRequest', null, global);
goog.exportSymbol('proto.injective.peggy.v1.QueryCurrentValsetResponse', null, global);
goog.exportSymbol('proto.injective.peggy.v1.QueryDelegateKeysByEthAddress', null, global);
goog.exportSymbol('proto.injective.peggy.v1.QueryDelegateKeysByEthAddressResponse', null, global);
goog.exportSymbol('proto.injective.peggy.v1.QueryDelegateKeysByOrchestratorAddress', null, global);
goog.exportSymbol('proto.injective.peggy.v1.QueryDelegateKeysByOrchestratorAddressResponse', null, global);
goog.exportSymbol('proto.injective.peggy.v1.QueryDelegateKeysByValidatorAddress', null, global);
goog.exportSymbol('proto.injective.peggy.v1.QueryDelegateKeysByValidatorAddressResponse', null, global);
goog.exportSymbol('proto.injective.peggy.v1.QueryDenomToERC20Request', null, global);
goog.exportSymbol('proto.injective.peggy.v1.QueryDenomToERC20Response', null, global);
goog.exportSymbol('proto.injective.peggy.v1.QueryERC20ToDenomRequest', null, global);
goog.exportSymbol('proto.injective.peggy.v1.QueryERC20ToDenomResponse', null, global);
goog.exportSymbol('proto.injective.peggy.v1.QueryLastEventByAddrRequest', null, global);
goog.exportSymbol('proto.injective.peggy.v1.QueryLastEventByAddrResponse', null, global);
goog.exportSymbol('proto.injective.peggy.v1.QueryLastPendingBatchRequestByAddrRequest', null, global);
goog.exportSymbol('proto.injective.peggy.v1.QueryLastPendingBatchRequestByAddrResponse', null, global);
goog.exportSymbol('proto.injective.peggy.v1.QueryLastPendingValsetRequestByAddrRequest', null, global);
goog.exportSymbol('proto.injective.peggy.v1.QueryLastPendingValsetRequestByAddrResponse', null, global);
goog.exportSymbol('proto.injective.peggy.v1.QueryLastValsetRequestsRequest', null, global);
goog.exportSymbol('proto.injective.peggy.v1.QueryLastValsetRequestsResponse', null, global);
goog.exportSymbol('proto.injective.peggy.v1.QueryModuleStateRequest', null, global);
goog.exportSymbol('proto.injective.peggy.v1.QueryModuleStateResponse', null, global);
goog.exportSymbol('proto.injective.peggy.v1.QueryOutgoingTxBatchesRequest', null, global);
goog.exportSymbol('proto.injective.peggy.v1.QueryOutgoingTxBatchesResponse', null, global);
goog.exportSymbol('proto.injective.peggy.v1.QueryParamsRequest', null, global);
goog.exportSymbol('proto.injective.peggy.v1.QueryParamsResponse', null, global);
goog.exportSymbol('proto.injective.peggy.v1.QueryPendingSendToEth', null, global);
goog.exportSymbol('proto.injective.peggy.v1.QueryPendingSendToEthResponse', null, global);
goog.exportSymbol('proto.injective.peggy.v1.QueryValsetConfirmRequest', null, global);
goog.exportSymbol('proto.injective.peggy.v1.QueryValsetConfirmResponse', null, global);
goog.exportSymbol('proto.injective.peggy.v1.QueryValsetConfirmsByNonceRequest', null, global);
goog.exportSymbol('proto.injective.peggy.v1.QueryValsetConfirmsByNonceResponse', null, global);
goog.exportSymbol('proto.injective.peggy.v1.QueryValsetRequestRequest', null, global);
goog.exportSymbol('proto.injective.peggy.v1.QueryValsetRequestResponse', null, global);
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
proto.injective.peggy.v1.QueryParamsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.injective.peggy.v1.QueryParamsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.injective.peggy.v1.QueryParamsRequest.displayName = 'proto.injective.peggy.v1.QueryParamsRequest';
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
proto.injective.peggy.v1.QueryParamsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.injective.peggy.v1.QueryParamsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.injective.peggy.v1.QueryParamsResponse.displayName = 'proto.injective.peggy.v1.QueryParamsResponse';
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
proto.injective.peggy.v1.QueryCurrentValsetRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.injective.peggy.v1.QueryCurrentValsetRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.injective.peggy.v1.QueryCurrentValsetRequest.displayName = 'proto.injective.peggy.v1.QueryCurrentValsetRequest';
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
proto.injective.peggy.v1.QueryCurrentValsetResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.injective.peggy.v1.QueryCurrentValsetResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.injective.peggy.v1.QueryCurrentValsetResponse.displayName = 'proto.injective.peggy.v1.QueryCurrentValsetResponse';
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
proto.injective.peggy.v1.QueryValsetRequestRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.injective.peggy.v1.QueryValsetRequestRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.injective.peggy.v1.QueryValsetRequestRequest.displayName = 'proto.injective.peggy.v1.QueryValsetRequestRequest';
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
proto.injective.peggy.v1.QueryValsetRequestResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.injective.peggy.v1.QueryValsetRequestResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.injective.peggy.v1.QueryValsetRequestResponse.displayName = 'proto.injective.peggy.v1.QueryValsetRequestResponse';
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
proto.injective.peggy.v1.QueryValsetConfirmRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.injective.peggy.v1.QueryValsetConfirmRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.injective.peggy.v1.QueryValsetConfirmRequest.displayName = 'proto.injective.peggy.v1.QueryValsetConfirmRequest';
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
proto.injective.peggy.v1.QueryValsetConfirmResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.injective.peggy.v1.QueryValsetConfirmResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.injective.peggy.v1.QueryValsetConfirmResponse.displayName = 'proto.injective.peggy.v1.QueryValsetConfirmResponse';
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
proto.injective.peggy.v1.QueryValsetConfirmsByNonceRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.injective.peggy.v1.QueryValsetConfirmsByNonceRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.injective.peggy.v1.QueryValsetConfirmsByNonceRequest.displayName = 'proto.injective.peggy.v1.QueryValsetConfirmsByNonceRequest';
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
proto.injective.peggy.v1.QueryValsetConfirmsByNonceResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.injective.peggy.v1.QueryValsetConfirmsByNonceResponse.repeatedFields_, null);
};
goog.inherits(proto.injective.peggy.v1.QueryValsetConfirmsByNonceResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.injective.peggy.v1.QueryValsetConfirmsByNonceResponse.displayName = 'proto.injective.peggy.v1.QueryValsetConfirmsByNonceResponse';
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
proto.injective.peggy.v1.QueryLastValsetRequestsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.injective.peggy.v1.QueryLastValsetRequestsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.injective.peggy.v1.QueryLastValsetRequestsRequest.displayName = 'proto.injective.peggy.v1.QueryLastValsetRequestsRequest';
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
proto.injective.peggy.v1.QueryLastValsetRequestsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.injective.peggy.v1.QueryLastValsetRequestsResponse.repeatedFields_, null);
};
goog.inherits(proto.injective.peggy.v1.QueryLastValsetRequestsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.injective.peggy.v1.QueryLastValsetRequestsResponse.displayName = 'proto.injective.peggy.v1.QueryLastValsetRequestsResponse';
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
proto.injective.peggy.v1.QueryLastPendingValsetRequestByAddrRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.injective.peggy.v1.QueryLastPendingValsetRequestByAddrRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.injective.peggy.v1.QueryLastPendingValsetRequestByAddrRequest.displayName = 'proto.injective.peggy.v1.QueryLastPendingValsetRequestByAddrRequest';
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
proto.injective.peggy.v1.QueryLastPendingValsetRequestByAddrResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.injective.peggy.v1.QueryLastPendingValsetRequestByAddrResponse.repeatedFields_, null);
};
goog.inherits(proto.injective.peggy.v1.QueryLastPendingValsetRequestByAddrResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.injective.peggy.v1.QueryLastPendingValsetRequestByAddrResponse.displayName = 'proto.injective.peggy.v1.QueryLastPendingValsetRequestByAddrResponse';
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
proto.injective.peggy.v1.QueryBatchFeeRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.injective.peggy.v1.QueryBatchFeeRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.injective.peggy.v1.QueryBatchFeeRequest.displayName = 'proto.injective.peggy.v1.QueryBatchFeeRequest';
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
proto.injective.peggy.v1.QueryBatchFeeResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.injective.peggy.v1.QueryBatchFeeResponse.repeatedFields_, null);
};
goog.inherits(proto.injective.peggy.v1.QueryBatchFeeResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.injective.peggy.v1.QueryBatchFeeResponse.displayName = 'proto.injective.peggy.v1.QueryBatchFeeResponse';
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
proto.injective.peggy.v1.QueryLastPendingBatchRequestByAddrRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.injective.peggy.v1.QueryLastPendingBatchRequestByAddrRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.injective.peggy.v1.QueryLastPendingBatchRequestByAddrRequest.displayName = 'proto.injective.peggy.v1.QueryLastPendingBatchRequestByAddrRequest';
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
proto.injective.peggy.v1.QueryLastPendingBatchRequestByAddrResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.injective.peggy.v1.QueryLastPendingBatchRequestByAddrResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.injective.peggy.v1.QueryLastPendingBatchRequestByAddrResponse.displayName = 'proto.injective.peggy.v1.QueryLastPendingBatchRequestByAddrResponse';
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
proto.injective.peggy.v1.QueryOutgoingTxBatchesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.injective.peggy.v1.QueryOutgoingTxBatchesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.injective.peggy.v1.QueryOutgoingTxBatchesRequest.displayName = 'proto.injective.peggy.v1.QueryOutgoingTxBatchesRequest';
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
proto.injective.peggy.v1.QueryOutgoingTxBatchesResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.injective.peggy.v1.QueryOutgoingTxBatchesResponse.repeatedFields_, null);
};
goog.inherits(proto.injective.peggy.v1.QueryOutgoingTxBatchesResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.injective.peggy.v1.QueryOutgoingTxBatchesResponse.displayName = 'proto.injective.peggy.v1.QueryOutgoingTxBatchesResponse';
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
proto.injective.peggy.v1.QueryBatchRequestByNonceRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.injective.peggy.v1.QueryBatchRequestByNonceRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.injective.peggy.v1.QueryBatchRequestByNonceRequest.displayName = 'proto.injective.peggy.v1.QueryBatchRequestByNonceRequest';
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
proto.injective.peggy.v1.QueryBatchRequestByNonceResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.injective.peggy.v1.QueryBatchRequestByNonceResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.injective.peggy.v1.QueryBatchRequestByNonceResponse.displayName = 'proto.injective.peggy.v1.QueryBatchRequestByNonceResponse';
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
proto.injective.peggy.v1.QueryBatchConfirmsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.injective.peggy.v1.QueryBatchConfirmsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.injective.peggy.v1.QueryBatchConfirmsRequest.displayName = 'proto.injective.peggy.v1.QueryBatchConfirmsRequest';
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
proto.injective.peggy.v1.QueryBatchConfirmsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.injective.peggy.v1.QueryBatchConfirmsResponse.repeatedFields_, null);
};
goog.inherits(proto.injective.peggy.v1.QueryBatchConfirmsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.injective.peggy.v1.QueryBatchConfirmsResponse.displayName = 'proto.injective.peggy.v1.QueryBatchConfirmsResponse';
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
proto.injective.peggy.v1.QueryLastEventByAddrRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.injective.peggy.v1.QueryLastEventByAddrRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.injective.peggy.v1.QueryLastEventByAddrRequest.displayName = 'proto.injective.peggy.v1.QueryLastEventByAddrRequest';
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
proto.injective.peggy.v1.QueryLastEventByAddrResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.injective.peggy.v1.QueryLastEventByAddrResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.injective.peggy.v1.QueryLastEventByAddrResponse.displayName = 'proto.injective.peggy.v1.QueryLastEventByAddrResponse';
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
proto.injective.peggy.v1.QueryERC20ToDenomRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.injective.peggy.v1.QueryERC20ToDenomRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.injective.peggy.v1.QueryERC20ToDenomRequest.displayName = 'proto.injective.peggy.v1.QueryERC20ToDenomRequest';
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
proto.injective.peggy.v1.QueryERC20ToDenomResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.injective.peggy.v1.QueryERC20ToDenomResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.injective.peggy.v1.QueryERC20ToDenomResponse.displayName = 'proto.injective.peggy.v1.QueryERC20ToDenomResponse';
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
proto.injective.peggy.v1.QueryDenomToERC20Request = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.injective.peggy.v1.QueryDenomToERC20Request, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.injective.peggy.v1.QueryDenomToERC20Request.displayName = 'proto.injective.peggy.v1.QueryDenomToERC20Request';
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
proto.injective.peggy.v1.QueryDenomToERC20Response = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.injective.peggy.v1.QueryDenomToERC20Response, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.injective.peggy.v1.QueryDenomToERC20Response.displayName = 'proto.injective.peggy.v1.QueryDenomToERC20Response';
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
proto.injective.peggy.v1.QueryDelegateKeysByValidatorAddress = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.injective.peggy.v1.QueryDelegateKeysByValidatorAddress, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.injective.peggy.v1.QueryDelegateKeysByValidatorAddress.displayName = 'proto.injective.peggy.v1.QueryDelegateKeysByValidatorAddress';
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
proto.injective.peggy.v1.QueryDelegateKeysByValidatorAddressResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.injective.peggy.v1.QueryDelegateKeysByValidatorAddressResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.injective.peggy.v1.QueryDelegateKeysByValidatorAddressResponse.displayName = 'proto.injective.peggy.v1.QueryDelegateKeysByValidatorAddressResponse';
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
proto.injective.peggy.v1.QueryDelegateKeysByEthAddress = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.injective.peggy.v1.QueryDelegateKeysByEthAddress, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.injective.peggy.v1.QueryDelegateKeysByEthAddress.displayName = 'proto.injective.peggy.v1.QueryDelegateKeysByEthAddress';
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
proto.injective.peggy.v1.QueryDelegateKeysByEthAddressResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.injective.peggy.v1.QueryDelegateKeysByEthAddressResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.injective.peggy.v1.QueryDelegateKeysByEthAddressResponse.displayName = 'proto.injective.peggy.v1.QueryDelegateKeysByEthAddressResponse';
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
proto.injective.peggy.v1.QueryDelegateKeysByOrchestratorAddress = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.injective.peggy.v1.QueryDelegateKeysByOrchestratorAddress, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.injective.peggy.v1.QueryDelegateKeysByOrchestratorAddress.displayName = 'proto.injective.peggy.v1.QueryDelegateKeysByOrchestratorAddress';
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
proto.injective.peggy.v1.QueryDelegateKeysByOrchestratorAddressResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.injective.peggy.v1.QueryDelegateKeysByOrchestratorAddressResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.injective.peggy.v1.QueryDelegateKeysByOrchestratorAddressResponse.displayName = 'proto.injective.peggy.v1.QueryDelegateKeysByOrchestratorAddressResponse';
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
proto.injective.peggy.v1.QueryPendingSendToEth = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.injective.peggy.v1.QueryPendingSendToEth, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.injective.peggy.v1.QueryPendingSendToEth.displayName = 'proto.injective.peggy.v1.QueryPendingSendToEth';
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
proto.injective.peggy.v1.QueryPendingSendToEthResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.injective.peggy.v1.QueryPendingSendToEthResponse.repeatedFields_, null);
};
goog.inherits(proto.injective.peggy.v1.QueryPendingSendToEthResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.injective.peggy.v1.QueryPendingSendToEthResponse.displayName = 'proto.injective.peggy.v1.QueryPendingSendToEthResponse';
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
proto.injective.peggy.v1.QueryModuleStateRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.injective.peggy.v1.QueryModuleStateRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.injective.peggy.v1.QueryModuleStateRequest.displayName = 'proto.injective.peggy.v1.QueryModuleStateRequest';
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
proto.injective.peggy.v1.QueryModuleStateResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.injective.peggy.v1.QueryModuleStateResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.injective.peggy.v1.QueryModuleStateResponse.displayName = 'proto.injective.peggy.v1.QueryModuleStateResponse';
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
proto.injective.peggy.v1.QueryParamsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.injective.peggy.v1.QueryParamsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.injective.peggy.v1.QueryParamsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.injective.peggy.v1.QueryParamsRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.injective.peggy.v1.QueryParamsRequest}
 */
proto.injective.peggy.v1.QueryParamsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.injective.peggy.v1.QueryParamsRequest;
  return proto.injective.peggy.v1.QueryParamsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.injective.peggy.v1.QueryParamsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.injective.peggy.v1.QueryParamsRequest}
 */
proto.injective.peggy.v1.QueryParamsRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.injective.peggy.v1.QueryParamsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.injective.peggy.v1.QueryParamsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.injective.peggy.v1.QueryParamsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.injective.peggy.v1.QueryParamsRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.injective.peggy.v1.QueryParamsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.injective.peggy.v1.QueryParamsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.injective.peggy.v1.QueryParamsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.injective.peggy.v1.QueryParamsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    params: (f = msg.getParams()) && injective_peggy_v1_genesis_pb.Params.toObject(includeInstance, f)
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
 * @return {!proto.injective.peggy.v1.QueryParamsResponse}
 */
proto.injective.peggy.v1.QueryParamsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.injective.peggy.v1.QueryParamsResponse;
  return proto.injective.peggy.v1.QueryParamsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.injective.peggy.v1.QueryParamsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.injective.peggy.v1.QueryParamsResponse}
 */
proto.injective.peggy.v1.QueryParamsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new injective_peggy_v1_genesis_pb.Params;
      reader.readMessage(value,injective_peggy_v1_genesis_pb.Params.deserializeBinaryFromReader);
      msg.setParams(value);
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
proto.injective.peggy.v1.QueryParamsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.injective.peggy.v1.QueryParamsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.injective.peggy.v1.QueryParamsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.injective.peggy.v1.QueryParamsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getParams();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      injective_peggy_v1_genesis_pb.Params.serializeBinaryToWriter
    );
  }
};


/**
 * optional Params params = 1;
 * @return {?proto.injective.peggy.v1.Params}
 */
proto.injective.peggy.v1.QueryParamsResponse.prototype.getParams = function() {
  return /** @type{?proto.injective.peggy.v1.Params} */ (
    jspb.Message.getWrapperField(this, injective_peggy_v1_genesis_pb.Params, 1));
};


/**
 * @param {?proto.injective.peggy.v1.Params|undefined} value
 * @return {!proto.injective.peggy.v1.QueryParamsResponse} returns this
*/
proto.injective.peggy.v1.QueryParamsResponse.prototype.setParams = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.injective.peggy.v1.QueryParamsResponse} returns this
 */
proto.injective.peggy.v1.QueryParamsResponse.prototype.clearParams = function() {
  return this.setParams(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.injective.peggy.v1.QueryParamsResponse.prototype.hasParams = function() {
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
proto.injective.peggy.v1.QueryCurrentValsetRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.injective.peggy.v1.QueryCurrentValsetRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.injective.peggy.v1.QueryCurrentValsetRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.injective.peggy.v1.QueryCurrentValsetRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.injective.peggy.v1.QueryCurrentValsetRequest}
 */
proto.injective.peggy.v1.QueryCurrentValsetRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.injective.peggy.v1.QueryCurrentValsetRequest;
  return proto.injective.peggy.v1.QueryCurrentValsetRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.injective.peggy.v1.QueryCurrentValsetRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.injective.peggy.v1.QueryCurrentValsetRequest}
 */
proto.injective.peggy.v1.QueryCurrentValsetRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.injective.peggy.v1.QueryCurrentValsetRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.injective.peggy.v1.QueryCurrentValsetRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.injective.peggy.v1.QueryCurrentValsetRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.injective.peggy.v1.QueryCurrentValsetRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.injective.peggy.v1.QueryCurrentValsetResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.injective.peggy.v1.QueryCurrentValsetResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.injective.peggy.v1.QueryCurrentValsetResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.injective.peggy.v1.QueryCurrentValsetResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    valset: (f = msg.getValset()) && injective_peggy_v1_types_pb.Valset.toObject(includeInstance, f)
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
 * @return {!proto.injective.peggy.v1.QueryCurrentValsetResponse}
 */
proto.injective.peggy.v1.QueryCurrentValsetResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.injective.peggy.v1.QueryCurrentValsetResponse;
  return proto.injective.peggy.v1.QueryCurrentValsetResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.injective.peggy.v1.QueryCurrentValsetResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.injective.peggy.v1.QueryCurrentValsetResponse}
 */
proto.injective.peggy.v1.QueryCurrentValsetResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new injective_peggy_v1_types_pb.Valset;
      reader.readMessage(value,injective_peggy_v1_types_pb.Valset.deserializeBinaryFromReader);
      msg.setValset(value);
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
proto.injective.peggy.v1.QueryCurrentValsetResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.injective.peggy.v1.QueryCurrentValsetResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.injective.peggy.v1.QueryCurrentValsetResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.injective.peggy.v1.QueryCurrentValsetResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getValset();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      injective_peggy_v1_types_pb.Valset.serializeBinaryToWriter
    );
  }
};


/**
 * optional Valset valset = 1;
 * @return {?proto.injective.peggy.v1.Valset}
 */
proto.injective.peggy.v1.QueryCurrentValsetResponse.prototype.getValset = function() {
  return /** @type{?proto.injective.peggy.v1.Valset} */ (
    jspb.Message.getWrapperField(this, injective_peggy_v1_types_pb.Valset, 1));
};


/**
 * @param {?proto.injective.peggy.v1.Valset|undefined} value
 * @return {!proto.injective.peggy.v1.QueryCurrentValsetResponse} returns this
*/
proto.injective.peggy.v1.QueryCurrentValsetResponse.prototype.setValset = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.injective.peggy.v1.QueryCurrentValsetResponse} returns this
 */
proto.injective.peggy.v1.QueryCurrentValsetResponse.prototype.clearValset = function() {
  return this.setValset(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.injective.peggy.v1.QueryCurrentValsetResponse.prototype.hasValset = function() {
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
proto.injective.peggy.v1.QueryValsetRequestRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.injective.peggy.v1.QueryValsetRequestRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.injective.peggy.v1.QueryValsetRequestRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.injective.peggy.v1.QueryValsetRequestRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.injective.peggy.v1.QueryValsetRequestRequest}
 */
proto.injective.peggy.v1.QueryValsetRequestRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.injective.peggy.v1.QueryValsetRequestRequest;
  return proto.injective.peggy.v1.QueryValsetRequestRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.injective.peggy.v1.QueryValsetRequestRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.injective.peggy.v1.QueryValsetRequestRequest}
 */
proto.injective.peggy.v1.QueryValsetRequestRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
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
proto.injective.peggy.v1.QueryValsetRequestRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.injective.peggy.v1.QueryValsetRequestRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.injective.peggy.v1.QueryValsetRequestRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.injective.peggy.v1.QueryValsetRequestRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNonce();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
};


/**
 * optional uint64 nonce = 1;
 * @return {number}
 */
proto.injective.peggy.v1.QueryValsetRequestRequest.prototype.getNonce = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.injective.peggy.v1.QueryValsetRequestRequest} returns this
 */
proto.injective.peggy.v1.QueryValsetRequestRequest.prototype.setNonce = function(value) {
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
proto.injective.peggy.v1.QueryValsetRequestResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.injective.peggy.v1.QueryValsetRequestResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.injective.peggy.v1.QueryValsetRequestResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.injective.peggy.v1.QueryValsetRequestResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    valset: (f = msg.getValset()) && injective_peggy_v1_types_pb.Valset.toObject(includeInstance, f)
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
 * @return {!proto.injective.peggy.v1.QueryValsetRequestResponse}
 */
proto.injective.peggy.v1.QueryValsetRequestResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.injective.peggy.v1.QueryValsetRequestResponse;
  return proto.injective.peggy.v1.QueryValsetRequestResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.injective.peggy.v1.QueryValsetRequestResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.injective.peggy.v1.QueryValsetRequestResponse}
 */
proto.injective.peggy.v1.QueryValsetRequestResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new injective_peggy_v1_types_pb.Valset;
      reader.readMessage(value,injective_peggy_v1_types_pb.Valset.deserializeBinaryFromReader);
      msg.setValset(value);
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
proto.injective.peggy.v1.QueryValsetRequestResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.injective.peggy.v1.QueryValsetRequestResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.injective.peggy.v1.QueryValsetRequestResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.injective.peggy.v1.QueryValsetRequestResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getValset();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      injective_peggy_v1_types_pb.Valset.serializeBinaryToWriter
    );
  }
};


/**
 * optional Valset valset = 1;
 * @return {?proto.injective.peggy.v1.Valset}
 */
proto.injective.peggy.v1.QueryValsetRequestResponse.prototype.getValset = function() {
  return /** @type{?proto.injective.peggy.v1.Valset} */ (
    jspb.Message.getWrapperField(this, injective_peggy_v1_types_pb.Valset, 1));
};


/**
 * @param {?proto.injective.peggy.v1.Valset|undefined} value
 * @return {!proto.injective.peggy.v1.QueryValsetRequestResponse} returns this
*/
proto.injective.peggy.v1.QueryValsetRequestResponse.prototype.setValset = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.injective.peggy.v1.QueryValsetRequestResponse} returns this
 */
proto.injective.peggy.v1.QueryValsetRequestResponse.prototype.clearValset = function() {
  return this.setValset(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.injective.peggy.v1.QueryValsetRequestResponse.prototype.hasValset = function() {
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
proto.injective.peggy.v1.QueryValsetConfirmRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.injective.peggy.v1.QueryValsetConfirmRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.injective.peggy.v1.QueryValsetConfirmRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.injective.peggy.v1.QueryValsetConfirmRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    nonce: jspb.Message.getFieldWithDefault(msg, 1, 0),
    address: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.injective.peggy.v1.QueryValsetConfirmRequest}
 */
proto.injective.peggy.v1.QueryValsetConfirmRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.injective.peggy.v1.QueryValsetConfirmRequest;
  return proto.injective.peggy.v1.QueryValsetConfirmRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.injective.peggy.v1.QueryValsetConfirmRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.injective.peggy.v1.QueryValsetConfirmRequest}
 */
proto.injective.peggy.v1.QueryValsetConfirmRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setNonce(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setAddress(value);
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
proto.injective.peggy.v1.QueryValsetConfirmRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.injective.peggy.v1.QueryValsetConfirmRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.injective.peggy.v1.QueryValsetConfirmRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.injective.peggy.v1.QueryValsetConfirmRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNonce();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getAddress();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional uint64 nonce = 1;
 * @return {number}
 */
proto.injective.peggy.v1.QueryValsetConfirmRequest.prototype.getNonce = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.injective.peggy.v1.QueryValsetConfirmRequest} returns this
 */
proto.injective.peggy.v1.QueryValsetConfirmRequest.prototype.setNonce = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string address = 2;
 * @return {string}
 */
proto.injective.peggy.v1.QueryValsetConfirmRequest.prototype.getAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.injective.peggy.v1.QueryValsetConfirmRequest} returns this
 */
proto.injective.peggy.v1.QueryValsetConfirmRequest.prototype.setAddress = function(value) {
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
proto.injective.peggy.v1.QueryValsetConfirmResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.injective.peggy.v1.QueryValsetConfirmResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.injective.peggy.v1.QueryValsetConfirmResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.injective.peggy.v1.QueryValsetConfirmResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    confirm: (f = msg.getConfirm()) && injective_peggy_v1_msgs_pb.MsgValsetConfirm.toObject(includeInstance, f)
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
 * @return {!proto.injective.peggy.v1.QueryValsetConfirmResponse}
 */
proto.injective.peggy.v1.QueryValsetConfirmResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.injective.peggy.v1.QueryValsetConfirmResponse;
  return proto.injective.peggy.v1.QueryValsetConfirmResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.injective.peggy.v1.QueryValsetConfirmResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.injective.peggy.v1.QueryValsetConfirmResponse}
 */
proto.injective.peggy.v1.QueryValsetConfirmResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new injective_peggy_v1_msgs_pb.MsgValsetConfirm;
      reader.readMessage(value,injective_peggy_v1_msgs_pb.MsgValsetConfirm.deserializeBinaryFromReader);
      msg.setConfirm(value);
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
proto.injective.peggy.v1.QueryValsetConfirmResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.injective.peggy.v1.QueryValsetConfirmResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.injective.peggy.v1.QueryValsetConfirmResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.injective.peggy.v1.QueryValsetConfirmResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getConfirm();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      injective_peggy_v1_msgs_pb.MsgValsetConfirm.serializeBinaryToWriter
    );
  }
};


/**
 * optional MsgValsetConfirm confirm = 1;
 * @return {?proto.injective.peggy.v1.MsgValsetConfirm}
 */
proto.injective.peggy.v1.QueryValsetConfirmResponse.prototype.getConfirm = function() {
  return /** @type{?proto.injective.peggy.v1.MsgValsetConfirm} */ (
    jspb.Message.getWrapperField(this, injective_peggy_v1_msgs_pb.MsgValsetConfirm, 1));
};


/**
 * @param {?proto.injective.peggy.v1.MsgValsetConfirm|undefined} value
 * @return {!proto.injective.peggy.v1.QueryValsetConfirmResponse} returns this
*/
proto.injective.peggy.v1.QueryValsetConfirmResponse.prototype.setConfirm = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.injective.peggy.v1.QueryValsetConfirmResponse} returns this
 */
proto.injective.peggy.v1.QueryValsetConfirmResponse.prototype.clearConfirm = function() {
  return this.setConfirm(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.injective.peggy.v1.QueryValsetConfirmResponse.prototype.hasConfirm = function() {
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
proto.injective.peggy.v1.QueryValsetConfirmsByNonceRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.injective.peggy.v1.QueryValsetConfirmsByNonceRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.injective.peggy.v1.QueryValsetConfirmsByNonceRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.injective.peggy.v1.QueryValsetConfirmsByNonceRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.injective.peggy.v1.QueryValsetConfirmsByNonceRequest}
 */
proto.injective.peggy.v1.QueryValsetConfirmsByNonceRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.injective.peggy.v1.QueryValsetConfirmsByNonceRequest;
  return proto.injective.peggy.v1.QueryValsetConfirmsByNonceRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.injective.peggy.v1.QueryValsetConfirmsByNonceRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.injective.peggy.v1.QueryValsetConfirmsByNonceRequest}
 */
proto.injective.peggy.v1.QueryValsetConfirmsByNonceRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
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
proto.injective.peggy.v1.QueryValsetConfirmsByNonceRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.injective.peggy.v1.QueryValsetConfirmsByNonceRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.injective.peggy.v1.QueryValsetConfirmsByNonceRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.injective.peggy.v1.QueryValsetConfirmsByNonceRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNonce();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
};


/**
 * optional uint64 nonce = 1;
 * @return {number}
 */
proto.injective.peggy.v1.QueryValsetConfirmsByNonceRequest.prototype.getNonce = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.injective.peggy.v1.QueryValsetConfirmsByNonceRequest} returns this
 */
proto.injective.peggy.v1.QueryValsetConfirmsByNonceRequest.prototype.setNonce = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.injective.peggy.v1.QueryValsetConfirmsByNonceResponse.repeatedFields_ = [1];



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
proto.injective.peggy.v1.QueryValsetConfirmsByNonceResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.injective.peggy.v1.QueryValsetConfirmsByNonceResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.injective.peggy.v1.QueryValsetConfirmsByNonceResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.injective.peggy.v1.QueryValsetConfirmsByNonceResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    confirmsList: jspb.Message.toObjectList(msg.getConfirmsList(),
    injective_peggy_v1_msgs_pb.MsgValsetConfirm.toObject, includeInstance)
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
 * @return {!proto.injective.peggy.v1.QueryValsetConfirmsByNonceResponse}
 */
proto.injective.peggy.v1.QueryValsetConfirmsByNonceResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.injective.peggy.v1.QueryValsetConfirmsByNonceResponse;
  return proto.injective.peggy.v1.QueryValsetConfirmsByNonceResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.injective.peggy.v1.QueryValsetConfirmsByNonceResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.injective.peggy.v1.QueryValsetConfirmsByNonceResponse}
 */
proto.injective.peggy.v1.QueryValsetConfirmsByNonceResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new injective_peggy_v1_msgs_pb.MsgValsetConfirm;
      reader.readMessage(value,injective_peggy_v1_msgs_pb.MsgValsetConfirm.deserializeBinaryFromReader);
      msg.addConfirms(value);
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
proto.injective.peggy.v1.QueryValsetConfirmsByNonceResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.injective.peggy.v1.QueryValsetConfirmsByNonceResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.injective.peggy.v1.QueryValsetConfirmsByNonceResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.injective.peggy.v1.QueryValsetConfirmsByNonceResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getConfirmsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      injective_peggy_v1_msgs_pb.MsgValsetConfirm.serializeBinaryToWriter
    );
  }
};


/**
 * repeated MsgValsetConfirm confirms = 1;
 * @return {!Array<!proto.injective.peggy.v1.MsgValsetConfirm>}
 */
proto.injective.peggy.v1.QueryValsetConfirmsByNonceResponse.prototype.getConfirmsList = function() {
  return /** @type{!Array<!proto.injective.peggy.v1.MsgValsetConfirm>} */ (
    jspb.Message.getRepeatedWrapperField(this, injective_peggy_v1_msgs_pb.MsgValsetConfirm, 1));
};


/**
 * @param {!Array<!proto.injective.peggy.v1.MsgValsetConfirm>} value
 * @return {!proto.injective.peggy.v1.QueryValsetConfirmsByNonceResponse} returns this
*/
proto.injective.peggy.v1.QueryValsetConfirmsByNonceResponse.prototype.setConfirmsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.injective.peggy.v1.MsgValsetConfirm=} opt_value
 * @param {number=} opt_index
 * @return {!proto.injective.peggy.v1.MsgValsetConfirm}
 */
proto.injective.peggy.v1.QueryValsetConfirmsByNonceResponse.prototype.addConfirms = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.injective.peggy.v1.MsgValsetConfirm, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.injective.peggy.v1.QueryValsetConfirmsByNonceResponse} returns this
 */
proto.injective.peggy.v1.QueryValsetConfirmsByNonceResponse.prototype.clearConfirmsList = function() {
  return this.setConfirmsList([]);
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
proto.injective.peggy.v1.QueryLastValsetRequestsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.injective.peggy.v1.QueryLastValsetRequestsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.injective.peggy.v1.QueryLastValsetRequestsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.injective.peggy.v1.QueryLastValsetRequestsRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.injective.peggy.v1.QueryLastValsetRequestsRequest}
 */
proto.injective.peggy.v1.QueryLastValsetRequestsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.injective.peggy.v1.QueryLastValsetRequestsRequest;
  return proto.injective.peggy.v1.QueryLastValsetRequestsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.injective.peggy.v1.QueryLastValsetRequestsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.injective.peggy.v1.QueryLastValsetRequestsRequest}
 */
proto.injective.peggy.v1.QueryLastValsetRequestsRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.injective.peggy.v1.QueryLastValsetRequestsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.injective.peggy.v1.QueryLastValsetRequestsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.injective.peggy.v1.QueryLastValsetRequestsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.injective.peggy.v1.QueryLastValsetRequestsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.injective.peggy.v1.QueryLastValsetRequestsResponse.repeatedFields_ = [1];



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
proto.injective.peggy.v1.QueryLastValsetRequestsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.injective.peggy.v1.QueryLastValsetRequestsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.injective.peggy.v1.QueryLastValsetRequestsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.injective.peggy.v1.QueryLastValsetRequestsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    valsetsList: jspb.Message.toObjectList(msg.getValsetsList(),
    injective_peggy_v1_types_pb.Valset.toObject, includeInstance)
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
 * @return {!proto.injective.peggy.v1.QueryLastValsetRequestsResponse}
 */
proto.injective.peggy.v1.QueryLastValsetRequestsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.injective.peggy.v1.QueryLastValsetRequestsResponse;
  return proto.injective.peggy.v1.QueryLastValsetRequestsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.injective.peggy.v1.QueryLastValsetRequestsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.injective.peggy.v1.QueryLastValsetRequestsResponse}
 */
proto.injective.peggy.v1.QueryLastValsetRequestsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new injective_peggy_v1_types_pb.Valset;
      reader.readMessage(value,injective_peggy_v1_types_pb.Valset.deserializeBinaryFromReader);
      msg.addValsets(value);
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
proto.injective.peggy.v1.QueryLastValsetRequestsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.injective.peggy.v1.QueryLastValsetRequestsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.injective.peggy.v1.QueryLastValsetRequestsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.injective.peggy.v1.QueryLastValsetRequestsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getValsetsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      injective_peggy_v1_types_pb.Valset.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Valset valsets = 1;
 * @return {!Array<!proto.injective.peggy.v1.Valset>}
 */
proto.injective.peggy.v1.QueryLastValsetRequestsResponse.prototype.getValsetsList = function() {
  return /** @type{!Array<!proto.injective.peggy.v1.Valset>} */ (
    jspb.Message.getRepeatedWrapperField(this, injective_peggy_v1_types_pb.Valset, 1));
};


/**
 * @param {!Array<!proto.injective.peggy.v1.Valset>} value
 * @return {!proto.injective.peggy.v1.QueryLastValsetRequestsResponse} returns this
*/
proto.injective.peggy.v1.QueryLastValsetRequestsResponse.prototype.setValsetsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.injective.peggy.v1.Valset=} opt_value
 * @param {number=} opt_index
 * @return {!proto.injective.peggy.v1.Valset}
 */
proto.injective.peggy.v1.QueryLastValsetRequestsResponse.prototype.addValsets = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.injective.peggy.v1.Valset, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.injective.peggy.v1.QueryLastValsetRequestsResponse} returns this
 */
proto.injective.peggy.v1.QueryLastValsetRequestsResponse.prototype.clearValsetsList = function() {
  return this.setValsetsList([]);
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
proto.injective.peggy.v1.QueryLastPendingValsetRequestByAddrRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.injective.peggy.v1.QueryLastPendingValsetRequestByAddrRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.injective.peggy.v1.QueryLastPendingValsetRequestByAddrRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.injective.peggy.v1.QueryLastPendingValsetRequestByAddrRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    address: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.injective.peggy.v1.QueryLastPendingValsetRequestByAddrRequest}
 */
proto.injective.peggy.v1.QueryLastPendingValsetRequestByAddrRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.injective.peggy.v1.QueryLastPendingValsetRequestByAddrRequest;
  return proto.injective.peggy.v1.QueryLastPendingValsetRequestByAddrRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.injective.peggy.v1.QueryLastPendingValsetRequestByAddrRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.injective.peggy.v1.QueryLastPendingValsetRequestByAddrRequest}
 */
proto.injective.peggy.v1.QueryLastPendingValsetRequestByAddrRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setAddress(value);
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
proto.injective.peggy.v1.QueryLastPendingValsetRequestByAddrRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.injective.peggy.v1.QueryLastPendingValsetRequestByAddrRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.injective.peggy.v1.QueryLastPendingValsetRequestByAddrRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.injective.peggy.v1.QueryLastPendingValsetRequestByAddrRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAddress();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string address = 1;
 * @return {string}
 */
proto.injective.peggy.v1.QueryLastPendingValsetRequestByAddrRequest.prototype.getAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.injective.peggy.v1.QueryLastPendingValsetRequestByAddrRequest} returns this
 */
proto.injective.peggy.v1.QueryLastPendingValsetRequestByAddrRequest.prototype.setAddress = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.injective.peggy.v1.QueryLastPendingValsetRequestByAddrResponse.repeatedFields_ = [1];



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
proto.injective.peggy.v1.QueryLastPendingValsetRequestByAddrResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.injective.peggy.v1.QueryLastPendingValsetRequestByAddrResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.injective.peggy.v1.QueryLastPendingValsetRequestByAddrResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.injective.peggy.v1.QueryLastPendingValsetRequestByAddrResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    valsetsList: jspb.Message.toObjectList(msg.getValsetsList(),
    injective_peggy_v1_types_pb.Valset.toObject, includeInstance)
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
 * @return {!proto.injective.peggy.v1.QueryLastPendingValsetRequestByAddrResponse}
 */
proto.injective.peggy.v1.QueryLastPendingValsetRequestByAddrResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.injective.peggy.v1.QueryLastPendingValsetRequestByAddrResponse;
  return proto.injective.peggy.v1.QueryLastPendingValsetRequestByAddrResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.injective.peggy.v1.QueryLastPendingValsetRequestByAddrResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.injective.peggy.v1.QueryLastPendingValsetRequestByAddrResponse}
 */
proto.injective.peggy.v1.QueryLastPendingValsetRequestByAddrResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new injective_peggy_v1_types_pb.Valset;
      reader.readMessage(value,injective_peggy_v1_types_pb.Valset.deserializeBinaryFromReader);
      msg.addValsets(value);
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
proto.injective.peggy.v1.QueryLastPendingValsetRequestByAddrResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.injective.peggy.v1.QueryLastPendingValsetRequestByAddrResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.injective.peggy.v1.QueryLastPendingValsetRequestByAddrResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.injective.peggy.v1.QueryLastPendingValsetRequestByAddrResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getValsetsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      injective_peggy_v1_types_pb.Valset.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Valset valsets = 1;
 * @return {!Array<!proto.injective.peggy.v1.Valset>}
 */
proto.injective.peggy.v1.QueryLastPendingValsetRequestByAddrResponse.prototype.getValsetsList = function() {
  return /** @type{!Array<!proto.injective.peggy.v1.Valset>} */ (
    jspb.Message.getRepeatedWrapperField(this, injective_peggy_v1_types_pb.Valset, 1));
};


/**
 * @param {!Array<!proto.injective.peggy.v1.Valset>} value
 * @return {!proto.injective.peggy.v1.QueryLastPendingValsetRequestByAddrResponse} returns this
*/
proto.injective.peggy.v1.QueryLastPendingValsetRequestByAddrResponse.prototype.setValsetsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.injective.peggy.v1.Valset=} opt_value
 * @param {number=} opt_index
 * @return {!proto.injective.peggy.v1.Valset}
 */
proto.injective.peggy.v1.QueryLastPendingValsetRequestByAddrResponse.prototype.addValsets = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.injective.peggy.v1.Valset, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.injective.peggy.v1.QueryLastPendingValsetRequestByAddrResponse} returns this
 */
proto.injective.peggy.v1.QueryLastPendingValsetRequestByAddrResponse.prototype.clearValsetsList = function() {
  return this.setValsetsList([]);
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
proto.injective.peggy.v1.QueryBatchFeeRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.injective.peggy.v1.QueryBatchFeeRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.injective.peggy.v1.QueryBatchFeeRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.injective.peggy.v1.QueryBatchFeeRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.injective.peggy.v1.QueryBatchFeeRequest}
 */
proto.injective.peggy.v1.QueryBatchFeeRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.injective.peggy.v1.QueryBatchFeeRequest;
  return proto.injective.peggy.v1.QueryBatchFeeRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.injective.peggy.v1.QueryBatchFeeRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.injective.peggy.v1.QueryBatchFeeRequest}
 */
proto.injective.peggy.v1.QueryBatchFeeRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.injective.peggy.v1.QueryBatchFeeRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.injective.peggy.v1.QueryBatchFeeRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.injective.peggy.v1.QueryBatchFeeRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.injective.peggy.v1.QueryBatchFeeRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.injective.peggy.v1.QueryBatchFeeResponse.repeatedFields_ = [1];



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
proto.injective.peggy.v1.QueryBatchFeeResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.injective.peggy.v1.QueryBatchFeeResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.injective.peggy.v1.QueryBatchFeeResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.injective.peggy.v1.QueryBatchFeeResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    batchfeesList: jspb.Message.toObjectList(msg.getBatchfeesList(),
    injective_peggy_v1_pool_pb.BatchFees.toObject, includeInstance)
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
 * @return {!proto.injective.peggy.v1.QueryBatchFeeResponse}
 */
proto.injective.peggy.v1.QueryBatchFeeResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.injective.peggy.v1.QueryBatchFeeResponse;
  return proto.injective.peggy.v1.QueryBatchFeeResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.injective.peggy.v1.QueryBatchFeeResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.injective.peggy.v1.QueryBatchFeeResponse}
 */
proto.injective.peggy.v1.QueryBatchFeeResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new injective_peggy_v1_pool_pb.BatchFees;
      reader.readMessage(value,injective_peggy_v1_pool_pb.BatchFees.deserializeBinaryFromReader);
      msg.addBatchfees(value);
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
proto.injective.peggy.v1.QueryBatchFeeResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.injective.peggy.v1.QueryBatchFeeResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.injective.peggy.v1.QueryBatchFeeResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.injective.peggy.v1.QueryBatchFeeResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBatchfeesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      injective_peggy_v1_pool_pb.BatchFees.serializeBinaryToWriter
    );
  }
};


/**
 * repeated BatchFees batchFees = 1;
 * @return {!Array<!proto.injective.peggy.v1.BatchFees>}
 */
proto.injective.peggy.v1.QueryBatchFeeResponse.prototype.getBatchfeesList = function() {
  return /** @type{!Array<!proto.injective.peggy.v1.BatchFees>} */ (
    jspb.Message.getRepeatedWrapperField(this, injective_peggy_v1_pool_pb.BatchFees, 1));
};


/**
 * @param {!Array<!proto.injective.peggy.v1.BatchFees>} value
 * @return {!proto.injective.peggy.v1.QueryBatchFeeResponse} returns this
*/
proto.injective.peggy.v1.QueryBatchFeeResponse.prototype.setBatchfeesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.injective.peggy.v1.BatchFees=} opt_value
 * @param {number=} opt_index
 * @return {!proto.injective.peggy.v1.BatchFees}
 */
proto.injective.peggy.v1.QueryBatchFeeResponse.prototype.addBatchfees = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.injective.peggy.v1.BatchFees, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.injective.peggy.v1.QueryBatchFeeResponse} returns this
 */
proto.injective.peggy.v1.QueryBatchFeeResponse.prototype.clearBatchfeesList = function() {
  return this.setBatchfeesList([]);
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
proto.injective.peggy.v1.QueryLastPendingBatchRequestByAddrRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.injective.peggy.v1.QueryLastPendingBatchRequestByAddrRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.injective.peggy.v1.QueryLastPendingBatchRequestByAddrRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.injective.peggy.v1.QueryLastPendingBatchRequestByAddrRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    address: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.injective.peggy.v1.QueryLastPendingBatchRequestByAddrRequest}
 */
proto.injective.peggy.v1.QueryLastPendingBatchRequestByAddrRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.injective.peggy.v1.QueryLastPendingBatchRequestByAddrRequest;
  return proto.injective.peggy.v1.QueryLastPendingBatchRequestByAddrRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.injective.peggy.v1.QueryLastPendingBatchRequestByAddrRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.injective.peggy.v1.QueryLastPendingBatchRequestByAddrRequest}
 */
proto.injective.peggy.v1.QueryLastPendingBatchRequestByAddrRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setAddress(value);
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
proto.injective.peggy.v1.QueryLastPendingBatchRequestByAddrRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.injective.peggy.v1.QueryLastPendingBatchRequestByAddrRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.injective.peggy.v1.QueryLastPendingBatchRequestByAddrRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.injective.peggy.v1.QueryLastPendingBatchRequestByAddrRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAddress();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string address = 1;
 * @return {string}
 */
proto.injective.peggy.v1.QueryLastPendingBatchRequestByAddrRequest.prototype.getAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.injective.peggy.v1.QueryLastPendingBatchRequestByAddrRequest} returns this
 */
proto.injective.peggy.v1.QueryLastPendingBatchRequestByAddrRequest.prototype.setAddress = function(value) {
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
proto.injective.peggy.v1.QueryLastPendingBatchRequestByAddrResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.injective.peggy.v1.QueryLastPendingBatchRequestByAddrResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.injective.peggy.v1.QueryLastPendingBatchRequestByAddrResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.injective.peggy.v1.QueryLastPendingBatchRequestByAddrResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    batch: (f = msg.getBatch()) && injective_peggy_v1_batch_pb.OutgoingTxBatch.toObject(includeInstance, f)
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
 * @return {!proto.injective.peggy.v1.QueryLastPendingBatchRequestByAddrResponse}
 */
proto.injective.peggy.v1.QueryLastPendingBatchRequestByAddrResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.injective.peggy.v1.QueryLastPendingBatchRequestByAddrResponse;
  return proto.injective.peggy.v1.QueryLastPendingBatchRequestByAddrResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.injective.peggy.v1.QueryLastPendingBatchRequestByAddrResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.injective.peggy.v1.QueryLastPendingBatchRequestByAddrResponse}
 */
proto.injective.peggy.v1.QueryLastPendingBatchRequestByAddrResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new injective_peggy_v1_batch_pb.OutgoingTxBatch;
      reader.readMessage(value,injective_peggy_v1_batch_pb.OutgoingTxBatch.deserializeBinaryFromReader);
      msg.setBatch(value);
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
proto.injective.peggy.v1.QueryLastPendingBatchRequestByAddrResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.injective.peggy.v1.QueryLastPendingBatchRequestByAddrResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.injective.peggy.v1.QueryLastPendingBatchRequestByAddrResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.injective.peggy.v1.QueryLastPendingBatchRequestByAddrResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBatch();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      injective_peggy_v1_batch_pb.OutgoingTxBatch.serializeBinaryToWriter
    );
  }
};


/**
 * optional OutgoingTxBatch batch = 1;
 * @return {?proto.injective.peggy.v1.OutgoingTxBatch}
 */
proto.injective.peggy.v1.QueryLastPendingBatchRequestByAddrResponse.prototype.getBatch = function() {
  return /** @type{?proto.injective.peggy.v1.OutgoingTxBatch} */ (
    jspb.Message.getWrapperField(this, injective_peggy_v1_batch_pb.OutgoingTxBatch, 1));
};


/**
 * @param {?proto.injective.peggy.v1.OutgoingTxBatch|undefined} value
 * @return {!proto.injective.peggy.v1.QueryLastPendingBatchRequestByAddrResponse} returns this
*/
proto.injective.peggy.v1.QueryLastPendingBatchRequestByAddrResponse.prototype.setBatch = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.injective.peggy.v1.QueryLastPendingBatchRequestByAddrResponse} returns this
 */
proto.injective.peggy.v1.QueryLastPendingBatchRequestByAddrResponse.prototype.clearBatch = function() {
  return this.setBatch(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.injective.peggy.v1.QueryLastPendingBatchRequestByAddrResponse.prototype.hasBatch = function() {
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
proto.injective.peggy.v1.QueryOutgoingTxBatchesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.injective.peggy.v1.QueryOutgoingTxBatchesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.injective.peggy.v1.QueryOutgoingTxBatchesRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.injective.peggy.v1.QueryOutgoingTxBatchesRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.injective.peggy.v1.QueryOutgoingTxBatchesRequest}
 */
proto.injective.peggy.v1.QueryOutgoingTxBatchesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.injective.peggy.v1.QueryOutgoingTxBatchesRequest;
  return proto.injective.peggy.v1.QueryOutgoingTxBatchesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.injective.peggy.v1.QueryOutgoingTxBatchesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.injective.peggy.v1.QueryOutgoingTxBatchesRequest}
 */
proto.injective.peggy.v1.QueryOutgoingTxBatchesRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.injective.peggy.v1.QueryOutgoingTxBatchesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.injective.peggy.v1.QueryOutgoingTxBatchesRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.injective.peggy.v1.QueryOutgoingTxBatchesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.injective.peggy.v1.QueryOutgoingTxBatchesRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.injective.peggy.v1.QueryOutgoingTxBatchesResponse.repeatedFields_ = [1];



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
proto.injective.peggy.v1.QueryOutgoingTxBatchesResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.injective.peggy.v1.QueryOutgoingTxBatchesResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.injective.peggy.v1.QueryOutgoingTxBatchesResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.injective.peggy.v1.QueryOutgoingTxBatchesResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    batchesList: jspb.Message.toObjectList(msg.getBatchesList(),
    injective_peggy_v1_batch_pb.OutgoingTxBatch.toObject, includeInstance)
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
 * @return {!proto.injective.peggy.v1.QueryOutgoingTxBatchesResponse}
 */
proto.injective.peggy.v1.QueryOutgoingTxBatchesResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.injective.peggy.v1.QueryOutgoingTxBatchesResponse;
  return proto.injective.peggy.v1.QueryOutgoingTxBatchesResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.injective.peggy.v1.QueryOutgoingTxBatchesResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.injective.peggy.v1.QueryOutgoingTxBatchesResponse}
 */
proto.injective.peggy.v1.QueryOutgoingTxBatchesResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new injective_peggy_v1_batch_pb.OutgoingTxBatch;
      reader.readMessage(value,injective_peggy_v1_batch_pb.OutgoingTxBatch.deserializeBinaryFromReader);
      msg.addBatches(value);
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
proto.injective.peggy.v1.QueryOutgoingTxBatchesResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.injective.peggy.v1.QueryOutgoingTxBatchesResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.injective.peggy.v1.QueryOutgoingTxBatchesResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.injective.peggy.v1.QueryOutgoingTxBatchesResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBatchesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      injective_peggy_v1_batch_pb.OutgoingTxBatch.serializeBinaryToWriter
    );
  }
};


/**
 * repeated OutgoingTxBatch batches = 1;
 * @return {!Array<!proto.injective.peggy.v1.OutgoingTxBatch>}
 */
proto.injective.peggy.v1.QueryOutgoingTxBatchesResponse.prototype.getBatchesList = function() {
  return /** @type{!Array<!proto.injective.peggy.v1.OutgoingTxBatch>} */ (
    jspb.Message.getRepeatedWrapperField(this, injective_peggy_v1_batch_pb.OutgoingTxBatch, 1));
};


/**
 * @param {!Array<!proto.injective.peggy.v1.OutgoingTxBatch>} value
 * @return {!proto.injective.peggy.v1.QueryOutgoingTxBatchesResponse} returns this
*/
proto.injective.peggy.v1.QueryOutgoingTxBatchesResponse.prototype.setBatchesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.injective.peggy.v1.OutgoingTxBatch=} opt_value
 * @param {number=} opt_index
 * @return {!proto.injective.peggy.v1.OutgoingTxBatch}
 */
proto.injective.peggy.v1.QueryOutgoingTxBatchesResponse.prototype.addBatches = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.injective.peggy.v1.OutgoingTxBatch, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.injective.peggy.v1.QueryOutgoingTxBatchesResponse} returns this
 */
proto.injective.peggy.v1.QueryOutgoingTxBatchesResponse.prototype.clearBatchesList = function() {
  return this.setBatchesList([]);
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
proto.injective.peggy.v1.QueryBatchRequestByNonceRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.injective.peggy.v1.QueryBatchRequestByNonceRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.injective.peggy.v1.QueryBatchRequestByNonceRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.injective.peggy.v1.QueryBatchRequestByNonceRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    nonce: jspb.Message.getFieldWithDefault(msg, 1, 0),
    contractAddress: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.injective.peggy.v1.QueryBatchRequestByNonceRequest}
 */
proto.injective.peggy.v1.QueryBatchRequestByNonceRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.injective.peggy.v1.QueryBatchRequestByNonceRequest;
  return proto.injective.peggy.v1.QueryBatchRequestByNonceRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.injective.peggy.v1.QueryBatchRequestByNonceRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.injective.peggy.v1.QueryBatchRequestByNonceRequest}
 */
proto.injective.peggy.v1.QueryBatchRequestByNonceRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setNonce(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setContractAddress(value);
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
proto.injective.peggy.v1.QueryBatchRequestByNonceRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.injective.peggy.v1.QueryBatchRequestByNonceRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.injective.peggy.v1.QueryBatchRequestByNonceRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.injective.peggy.v1.QueryBatchRequestByNonceRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNonce();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getContractAddress();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional uint64 nonce = 1;
 * @return {number}
 */
proto.injective.peggy.v1.QueryBatchRequestByNonceRequest.prototype.getNonce = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.injective.peggy.v1.QueryBatchRequestByNonceRequest} returns this
 */
proto.injective.peggy.v1.QueryBatchRequestByNonceRequest.prototype.setNonce = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string contract_address = 2;
 * @return {string}
 */
proto.injective.peggy.v1.QueryBatchRequestByNonceRequest.prototype.getContractAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.injective.peggy.v1.QueryBatchRequestByNonceRequest} returns this
 */
proto.injective.peggy.v1.QueryBatchRequestByNonceRequest.prototype.setContractAddress = function(value) {
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
proto.injective.peggy.v1.QueryBatchRequestByNonceResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.injective.peggy.v1.QueryBatchRequestByNonceResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.injective.peggy.v1.QueryBatchRequestByNonceResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.injective.peggy.v1.QueryBatchRequestByNonceResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    batch: (f = msg.getBatch()) && injective_peggy_v1_batch_pb.OutgoingTxBatch.toObject(includeInstance, f)
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
 * @return {!proto.injective.peggy.v1.QueryBatchRequestByNonceResponse}
 */
proto.injective.peggy.v1.QueryBatchRequestByNonceResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.injective.peggy.v1.QueryBatchRequestByNonceResponse;
  return proto.injective.peggy.v1.QueryBatchRequestByNonceResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.injective.peggy.v1.QueryBatchRequestByNonceResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.injective.peggy.v1.QueryBatchRequestByNonceResponse}
 */
proto.injective.peggy.v1.QueryBatchRequestByNonceResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new injective_peggy_v1_batch_pb.OutgoingTxBatch;
      reader.readMessage(value,injective_peggy_v1_batch_pb.OutgoingTxBatch.deserializeBinaryFromReader);
      msg.setBatch(value);
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
proto.injective.peggy.v1.QueryBatchRequestByNonceResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.injective.peggy.v1.QueryBatchRequestByNonceResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.injective.peggy.v1.QueryBatchRequestByNonceResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.injective.peggy.v1.QueryBatchRequestByNonceResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBatch();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      injective_peggy_v1_batch_pb.OutgoingTxBatch.serializeBinaryToWriter
    );
  }
};


/**
 * optional OutgoingTxBatch batch = 1;
 * @return {?proto.injective.peggy.v1.OutgoingTxBatch}
 */
proto.injective.peggy.v1.QueryBatchRequestByNonceResponse.prototype.getBatch = function() {
  return /** @type{?proto.injective.peggy.v1.OutgoingTxBatch} */ (
    jspb.Message.getWrapperField(this, injective_peggy_v1_batch_pb.OutgoingTxBatch, 1));
};


/**
 * @param {?proto.injective.peggy.v1.OutgoingTxBatch|undefined} value
 * @return {!proto.injective.peggy.v1.QueryBatchRequestByNonceResponse} returns this
*/
proto.injective.peggy.v1.QueryBatchRequestByNonceResponse.prototype.setBatch = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.injective.peggy.v1.QueryBatchRequestByNonceResponse} returns this
 */
proto.injective.peggy.v1.QueryBatchRequestByNonceResponse.prototype.clearBatch = function() {
  return this.setBatch(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.injective.peggy.v1.QueryBatchRequestByNonceResponse.prototype.hasBatch = function() {
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
proto.injective.peggy.v1.QueryBatchConfirmsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.injective.peggy.v1.QueryBatchConfirmsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.injective.peggy.v1.QueryBatchConfirmsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.injective.peggy.v1.QueryBatchConfirmsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    nonce: jspb.Message.getFieldWithDefault(msg, 1, 0),
    contractAddress: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.injective.peggy.v1.QueryBatchConfirmsRequest}
 */
proto.injective.peggy.v1.QueryBatchConfirmsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.injective.peggy.v1.QueryBatchConfirmsRequest;
  return proto.injective.peggy.v1.QueryBatchConfirmsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.injective.peggy.v1.QueryBatchConfirmsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.injective.peggy.v1.QueryBatchConfirmsRequest}
 */
proto.injective.peggy.v1.QueryBatchConfirmsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setNonce(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setContractAddress(value);
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
proto.injective.peggy.v1.QueryBatchConfirmsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.injective.peggy.v1.QueryBatchConfirmsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.injective.peggy.v1.QueryBatchConfirmsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.injective.peggy.v1.QueryBatchConfirmsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNonce();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getContractAddress();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional uint64 nonce = 1;
 * @return {number}
 */
proto.injective.peggy.v1.QueryBatchConfirmsRequest.prototype.getNonce = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.injective.peggy.v1.QueryBatchConfirmsRequest} returns this
 */
proto.injective.peggy.v1.QueryBatchConfirmsRequest.prototype.setNonce = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string contract_address = 2;
 * @return {string}
 */
proto.injective.peggy.v1.QueryBatchConfirmsRequest.prototype.getContractAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.injective.peggy.v1.QueryBatchConfirmsRequest} returns this
 */
proto.injective.peggy.v1.QueryBatchConfirmsRequest.prototype.setContractAddress = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.injective.peggy.v1.QueryBatchConfirmsResponse.repeatedFields_ = [1];



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
proto.injective.peggy.v1.QueryBatchConfirmsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.injective.peggy.v1.QueryBatchConfirmsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.injective.peggy.v1.QueryBatchConfirmsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.injective.peggy.v1.QueryBatchConfirmsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    confirmsList: jspb.Message.toObjectList(msg.getConfirmsList(),
    injective_peggy_v1_msgs_pb.MsgConfirmBatch.toObject, includeInstance)
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
 * @return {!proto.injective.peggy.v1.QueryBatchConfirmsResponse}
 */
proto.injective.peggy.v1.QueryBatchConfirmsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.injective.peggy.v1.QueryBatchConfirmsResponse;
  return proto.injective.peggy.v1.QueryBatchConfirmsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.injective.peggy.v1.QueryBatchConfirmsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.injective.peggy.v1.QueryBatchConfirmsResponse}
 */
proto.injective.peggy.v1.QueryBatchConfirmsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new injective_peggy_v1_msgs_pb.MsgConfirmBatch;
      reader.readMessage(value,injective_peggy_v1_msgs_pb.MsgConfirmBatch.deserializeBinaryFromReader);
      msg.addConfirms(value);
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
proto.injective.peggy.v1.QueryBatchConfirmsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.injective.peggy.v1.QueryBatchConfirmsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.injective.peggy.v1.QueryBatchConfirmsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.injective.peggy.v1.QueryBatchConfirmsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getConfirmsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      injective_peggy_v1_msgs_pb.MsgConfirmBatch.serializeBinaryToWriter
    );
  }
};


/**
 * repeated MsgConfirmBatch confirms = 1;
 * @return {!Array<!proto.injective.peggy.v1.MsgConfirmBatch>}
 */
proto.injective.peggy.v1.QueryBatchConfirmsResponse.prototype.getConfirmsList = function() {
  return /** @type{!Array<!proto.injective.peggy.v1.MsgConfirmBatch>} */ (
    jspb.Message.getRepeatedWrapperField(this, injective_peggy_v1_msgs_pb.MsgConfirmBatch, 1));
};


/**
 * @param {!Array<!proto.injective.peggy.v1.MsgConfirmBatch>} value
 * @return {!proto.injective.peggy.v1.QueryBatchConfirmsResponse} returns this
*/
proto.injective.peggy.v1.QueryBatchConfirmsResponse.prototype.setConfirmsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.injective.peggy.v1.MsgConfirmBatch=} opt_value
 * @param {number=} opt_index
 * @return {!proto.injective.peggy.v1.MsgConfirmBatch}
 */
proto.injective.peggy.v1.QueryBatchConfirmsResponse.prototype.addConfirms = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.injective.peggy.v1.MsgConfirmBatch, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.injective.peggy.v1.QueryBatchConfirmsResponse} returns this
 */
proto.injective.peggy.v1.QueryBatchConfirmsResponse.prototype.clearConfirmsList = function() {
  return this.setConfirmsList([]);
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
proto.injective.peggy.v1.QueryLastEventByAddrRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.injective.peggy.v1.QueryLastEventByAddrRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.injective.peggy.v1.QueryLastEventByAddrRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.injective.peggy.v1.QueryLastEventByAddrRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    address: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.injective.peggy.v1.QueryLastEventByAddrRequest}
 */
proto.injective.peggy.v1.QueryLastEventByAddrRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.injective.peggy.v1.QueryLastEventByAddrRequest;
  return proto.injective.peggy.v1.QueryLastEventByAddrRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.injective.peggy.v1.QueryLastEventByAddrRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.injective.peggy.v1.QueryLastEventByAddrRequest}
 */
proto.injective.peggy.v1.QueryLastEventByAddrRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setAddress(value);
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
proto.injective.peggy.v1.QueryLastEventByAddrRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.injective.peggy.v1.QueryLastEventByAddrRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.injective.peggy.v1.QueryLastEventByAddrRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.injective.peggy.v1.QueryLastEventByAddrRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAddress();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string address = 1;
 * @return {string}
 */
proto.injective.peggy.v1.QueryLastEventByAddrRequest.prototype.getAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.injective.peggy.v1.QueryLastEventByAddrRequest} returns this
 */
proto.injective.peggy.v1.QueryLastEventByAddrRequest.prototype.setAddress = function(value) {
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
proto.injective.peggy.v1.QueryLastEventByAddrResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.injective.peggy.v1.QueryLastEventByAddrResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.injective.peggy.v1.QueryLastEventByAddrResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.injective.peggy.v1.QueryLastEventByAddrResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    lastClaimEvent: (f = msg.getLastClaimEvent()) && injective_peggy_v1_types_pb.LastClaimEvent.toObject(includeInstance, f)
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
 * @return {!proto.injective.peggy.v1.QueryLastEventByAddrResponse}
 */
proto.injective.peggy.v1.QueryLastEventByAddrResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.injective.peggy.v1.QueryLastEventByAddrResponse;
  return proto.injective.peggy.v1.QueryLastEventByAddrResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.injective.peggy.v1.QueryLastEventByAddrResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.injective.peggy.v1.QueryLastEventByAddrResponse}
 */
proto.injective.peggy.v1.QueryLastEventByAddrResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new injective_peggy_v1_types_pb.LastClaimEvent;
      reader.readMessage(value,injective_peggy_v1_types_pb.LastClaimEvent.deserializeBinaryFromReader);
      msg.setLastClaimEvent(value);
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
proto.injective.peggy.v1.QueryLastEventByAddrResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.injective.peggy.v1.QueryLastEventByAddrResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.injective.peggy.v1.QueryLastEventByAddrResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.injective.peggy.v1.QueryLastEventByAddrResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLastClaimEvent();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      injective_peggy_v1_types_pb.LastClaimEvent.serializeBinaryToWriter
    );
  }
};


/**
 * optional LastClaimEvent last_claim_event = 1;
 * @return {?proto.injective.peggy.v1.LastClaimEvent}
 */
proto.injective.peggy.v1.QueryLastEventByAddrResponse.prototype.getLastClaimEvent = function() {
  return /** @type{?proto.injective.peggy.v1.LastClaimEvent} */ (
    jspb.Message.getWrapperField(this, injective_peggy_v1_types_pb.LastClaimEvent, 1));
};


/**
 * @param {?proto.injective.peggy.v1.LastClaimEvent|undefined} value
 * @return {!proto.injective.peggy.v1.QueryLastEventByAddrResponse} returns this
*/
proto.injective.peggy.v1.QueryLastEventByAddrResponse.prototype.setLastClaimEvent = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.injective.peggy.v1.QueryLastEventByAddrResponse} returns this
 */
proto.injective.peggy.v1.QueryLastEventByAddrResponse.prototype.clearLastClaimEvent = function() {
  return this.setLastClaimEvent(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.injective.peggy.v1.QueryLastEventByAddrResponse.prototype.hasLastClaimEvent = function() {
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
proto.injective.peggy.v1.QueryERC20ToDenomRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.injective.peggy.v1.QueryERC20ToDenomRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.injective.peggy.v1.QueryERC20ToDenomRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.injective.peggy.v1.QueryERC20ToDenomRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    erc20: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.injective.peggy.v1.QueryERC20ToDenomRequest}
 */
proto.injective.peggy.v1.QueryERC20ToDenomRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.injective.peggy.v1.QueryERC20ToDenomRequest;
  return proto.injective.peggy.v1.QueryERC20ToDenomRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.injective.peggy.v1.QueryERC20ToDenomRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.injective.peggy.v1.QueryERC20ToDenomRequest}
 */
proto.injective.peggy.v1.QueryERC20ToDenomRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setErc20(value);
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
proto.injective.peggy.v1.QueryERC20ToDenomRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.injective.peggy.v1.QueryERC20ToDenomRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.injective.peggy.v1.QueryERC20ToDenomRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.injective.peggy.v1.QueryERC20ToDenomRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getErc20();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string erc20 = 1;
 * @return {string}
 */
proto.injective.peggy.v1.QueryERC20ToDenomRequest.prototype.getErc20 = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.injective.peggy.v1.QueryERC20ToDenomRequest} returns this
 */
proto.injective.peggy.v1.QueryERC20ToDenomRequest.prototype.setErc20 = function(value) {
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
proto.injective.peggy.v1.QueryERC20ToDenomResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.injective.peggy.v1.QueryERC20ToDenomResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.injective.peggy.v1.QueryERC20ToDenomResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.injective.peggy.v1.QueryERC20ToDenomResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    denom: jspb.Message.getFieldWithDefault(msg, 1, ""),
    cosmosOriginated: jspb.Message.getBooleanFieldWithDefault(msg, 2, false)
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
 * @return {!proto.injective.peggy.v1.QueryERC20ToDenomResponse}
 */
proto.injective.peggy.v1.QueryERC20ToDenomResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.injective.peggy.v1.QueryERC20ToDenomResponse;
  return proto.injective.peggy.v1.QueryERC20ToDenomResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.injective.peggy.v1.QueryERC20ToDenomResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.injective.peggy.v1.QueryERC20ToDenomResponse}
 */
proto.injective.peggy.v1.QueryERC20ToDenomResponse.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setCosmosOriginated(value);
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
proto.injective.peggy.v1.QueryERC20ToDenomResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.injective.peggy.v1.QueryERC20ToDenomResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.injective.peggy.v1.QueryERC20ToDenomResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.injective.peggy.v1.QueryERC20ToDenomResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDenom();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getCosmosOriginated();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
};


/**
 * optional string denom = 1;
 * @return {string}
 */
proto.injective.peggy.v1.QueryERC20ToDenomResponse.prototype.getDenom = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.injective.peggy.v1.QueryERC20ToDenomResponse} returns this
 */
proto.injective.peggy.v1.QueryERC20ToDenomResponse.prototype.setDenom = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional bool cosmos_originated = 2;
 * @return {boolean}
 */
proto.injective.peggy.v1.QueryERC20ToDenomResponse.prototype.getCosmosOriginated = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.injective.peggy.v1.QueryERC20ToDenomResponse} returns this
 */
proto.injective.peggy.v1.QueryERC20ToDenomResponse.prototype.setCosmosOriginated = function(value) {
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
proto.injective.peggy.v1.QueryDenomToERC20Request.prototype.toObject = function(opt_includeInstance) {
  return proto.injective.peggy.v1.QueryDenomToERC20Request.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.injective.peggy.v1.QueryDenomToERC20Request} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.injective.peggy.v1.QueryDenomToERC20Request.toObject = function(includeInstance, msg) {
  var f, obj = {
    denom: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.injective.peggy.v1.QueryDenomToERC20Request}
 */
proto.injective.peggy.v1.QueryDenomToERC20Request.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.injective.peggy.v1.QueryDenomToERC20Request;
  return proto.injective.peggy.v1.QueryDenomToERC20Request.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.injective.peggy.v1.QueryDenomToERC20Request} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.injective.peggy.v1.QueryDenomToERC20Request}
 */
proto.injective.peggy.v1.QueryDenomToERC20Request.deserializeBinaryFromReader = function(msg, reader) {
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
proto.injective.peggy.v1.QueryDenomToERC20Request.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.injective.peggy.v1.QueryDenomToERC20Request.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.injective.peggy.v1.QueryDenomToERC20Request} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.injective.peggy.v1.QueryDenomToERC20Request.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDenom();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string denom = 1;
 * @return {string}
 */
proto.injective.peggy.v1.QueryDenomToERC20Request.prototype.getDenom = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.injective.peggy.v1.QueryDenomToERC20Request} returns this
 */
proto.injective.peggy.v1.QueryDenomToERC20Request.prototype.setDenom = function(value) {
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
proto.injective.peggy.v1.QueryDenomToERC20Response.prototype.toObject = function(opt_includeInstance) {
  return proto.injective.peggy.v1.QueryDenomToERC20Response.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.injective.peggy.v1.QueryDenomToERC20Response} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.injective.peggy.v1.QueryDenomToERC20Response.toObject = function(includeInstance, msg) {
  var f, obj = {
    erc20: jspb.Message.getFieldWithDefault(msg, 1, ""),
    cosmosOriginated: jspb.Message.getBooleanFieldWithDefault(msg, 2, false)
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
 * @return {!proto.injective.peggy.v1.QueryDenomToERC20Response}
 */
proto.injective.peggy.v1.QueryDenomToERC20Response.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.injective.peggy.v1.QueryDenomToERC20Response;
  return proto.injective.peggy.v1.QueryDenomToERC20Response.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.injective.peggy.v1.QueryDenomToERC20Response} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.injective.peggy.v1.QueryDenomToERC20Response}
 */
proto.injective.peggy.v1.QueryDenomToERC20Response.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setErc20(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setCosmosOriginated(value);
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
proto.injective.peggy.v1.QueryDenomToERC20Response.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.injective.peggy.v1.QueryDenomToERC20Response.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.injective.peggy.v1.QueryDenomToERC20Response} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.injective.peggy.v1.QueryDenomToERC20Response.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getErc20();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getCosmosOriginated();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
};


/**
 * optional string erc20 = 1;
 * @return {string}
 */
proto.injective.peggy.v1.QueryDenomToERC20Response.prototype.getErc20 = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.injective.peggy.v1.QueryDenomToERC20Response} returns this
 */
proto.injective.peggy.v1.QueryDenomToERC20Response.prototype.setErc20 = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional bool cosmos_originated = 2;
 * @return {boolean}
 */
proto.injective.peggy.v1.QueryDenomToERC20Response.prototype.getCosmosOriginated = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.injective.peggy.v1.QueryDenomToERC20Response} returns this
 */
proto.injective.peggy.v1.QueryDenomToERC20Response.prototype.setCosmosOriginated = function(value) {
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
proto.injective.peggy.v1.QueryDelegateKeysByValidatorAddress.prototype.toObject = function(opt_includeInstance) {
  return proto.injective.peggy.v1.QueryDelegateKeysByValidatorAddress.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.injective.peggy.v1.QueryDelegateKeysByValidatorAddress} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.injective.peggy.v1.QueryDelegateKeysByValidatorAddress.toObject = function(includeInstance, msg) {
  var f, obj = {
    validatorAddress: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.injective.peggy.v1.QueryDelegateKeysByValidatorAddress}
 */
proto.injective.peggy.v1.QueryDelegateKeysByValidatorAddress.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.injective.peggy.v1.QueryDelegateKeysByValidatorAddress;
  return proto.injective.peggy.v1.QueryDelegateKeysByValidatorAddress.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.injective.peggy.v1.QueryDelegateKeysByValidatorAddress} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.injective.peggy.v1.QueryDelegateKeysByValidatorAddress}
 */
proto.injective.peggy.v1.QueryDelegateKeysByValidatorAddress.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setValidatorAddress(value);
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
proto.injective.peggy.v1.QueryDelegateKeysByValidatorAddress.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.injective.peggy.v1.QueryDelegateKeysByValidatorAddress.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.injective.peggy.v1.QueryDelegateKeysByValidatorAddress} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.injective.peggy.v1.QueryDelegateKeysByValidatorAddress.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getValidatorAddress();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string validator_address = 1;
 * @return {string}
 */
proto.injective.peggy.v1.QueryDelegateKeysByValidatorAddress.prototype.getValidatorAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.injective.peggy.v1.QueryDelegateKeysByValidatorAddress} returns this
 */
proto.injective.peggy.v1.QueryDelegateKeysByValidatorAddress.prototype.setValidatorAddress = function(value) {
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
proto.injective.peggy.v1.QueryDelegateKeysByValidatorAddressResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.injective.peggy.v1.QueryDelegateKeysByValidatorAddressResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.injective.peggy.v1.QueryDelegateKeysByValidatorAddressResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.injective.peggy.v1.QueryDelegateKeysByValidatorAddressResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    ethAddress: jspb.Message.getFieldWithDefault(msg, 1, ""),
    orchestratorAddress: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.injective.peggy.v1.QueryDelegateKeysByValidatorAddressResponse}
 */
proto.injective.peggy.v1.QueryDelegateKeysByValidatorAddressResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.injective.peggy.v1.QueryDelegateKeysByValidatorAddressResponse;
  return proto.injective.peggy.v1.QueryDelegateKeysByValidatorAddressResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.injective.peggy.v1.QueryDelegateKeysByValidatorAddressResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.injective.peggy.v1.QueryDelegateKeysByValidatorAddressResponse}
 */
proto.injective.peggy.v1.QueryDelegateKeysByValidatorAddressResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setEthAddress(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setOrchestratorAddress(value);
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
proto.injective.peggy.v1.QueryDelegateKeysByValidatorAddressResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.injective.peggy.v1.QueryDelegateKeysByValidatorAddressResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.injective.peggy.v1.QueryDelegateKeysByValidatorAddressResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.injective.peggy.v1.QueryDelegateKeysByValidatorAddressResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEthAddress();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getOrchestratorAddress();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string eth_address = 1;
 * @return {string}
 */
proto.injective.peggy.v1.QueryDelegateKeysByValidatorAddressResponse.prototype.getEthAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.injective.peggy.v1.QueryDelegateKeysByValidatorAddressResponse} returns this
 */
proto.injective.peggy.v1.QueryDelegateKeysByValidatorAddressResponse.prototype.setEthAddress = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string orchestrator_address = 2;
 * @return {string}
 */
proto.injective.peggy.v1.QueryDelegateKeysByValidatorAddressResponse.prototype.getOrchestratorAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.injective.peggy.v1.QueryDelegateKeysByValidatorAddressResponse} returns this
 */
proto.injective.peggy.v1.QueryDelegateKeysByValidatorAddressResponse.prototype.setOrchestratorAddress = function(value) {
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
proto.injective.peggy.v1.QueryDelegateKeysByEthAddress.prototype.toObject = function(opt_includeInstance) {
  return proto.injective.peggy.v1.QueryDelegateKeysByEthAddress.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.injective.peggy.v1.QueryDelegateKeysByEthAddress} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.injective.peggy.v1.QueryDelegateKeysByEthAddress.toObject = function(includeInstance, msg) {
  var f, obj = {
    ethAddress: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.injective.peggy.v1.QueryDelegateKeysByEthAddress}
 */
proto.injective.peggy.v1.QueryDelegateKeysByEthAddress.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.injective.peggy.v1.QueryDelegateKeysByEthAddress;
  return proto.injective.peggy.v1.QueryDelegateKeysByEthAddress.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.injective.peggy.v1.QueryDelegateKeysByEthAddress} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.injective.peggy.v1.QueryDelegateKeysByEthAddress}
 */
proto.injective.peggy.v1.QueryDelegateKeysByEthAddress.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setEthAddress(value);
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
proto.injective.peggy.v1.QueryDelegateKeysByEthAddress.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.injective.peggy.v1.QueryDelegateKeysByEthAddress.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.injective.peggy.v1.QueryDelegateKeysByEthAddress} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.injective.peggy.v1.QueryDelegateKeysByEthAddress.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEthAddress();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string eth_address = 1;
 * @return {string}
 */
proto.injective.peggy.v1.QueryDelegateKeysByEthAddress.prototype.getEthAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.injective.peggy.v1.QueryDelegateKeysByEthAddress} returns this
 */
proto.injective.peggy.v1.QueryDelegateKeysByEthAddress.prototype.setEthAddress = function(value) {
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
proto.injective.peggy.v1.QueryDelegateKeysByEthAddressResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.injective.peggy.v1.QueryDelegateKeysByEthAddressResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.injective.peggy.v1.QueryDelegateKeysByEthAddressResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.injective.peggy.v1.QueryDelegateKeysByEthAddressResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    validatorAddress: jspb.Message.getFieldWithDefault(msg, 1, ""),
    orchestratorAddress: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.injective.peggy.v1.QueryDelegateKeysByEthAddressResponse}
 */
proto.injective.peggy.v1.QueryDelegateKeysByEthAddressResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.injective.peggy.v1.QueryDelegateKeysByEthAddressResponse;
  return proto.injective.peggy.v1.QueryDelegateKeysByEthAddressResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.injective.peggy.v1.QueryDelegateKeysByEthAddressResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.injective.peggy.v1.QueryDelegateKeysByEthAddressResponse}
 */
proto.injective.peggy.v1.QueryDelegateKeysByEthAddressResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setValidatorAddress(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setOrchestratorAddress(value);
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
proto.injective.peggy.v1.QueryDelegateKeysByEthAddressResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.injective.peggy.v1.QueryDelegateKeysByEthAddressResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.injective.peggy.v1.QueryDelegateKeysByEthAddressResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.injective.peggy.v1.QueryDelegateKeysByEthAddressResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getValidatorAddress();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getOrchestratorAddress();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string validator_address = 1;
 * @return {string}
 */
proto.injective.peggy.v1.QueryDelegateKeysByEthAddressResponse.prototype.getValidatorAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.injective.peggy.v1.QueryDelegateKeysByEthAddressResponse} returns this
 */
proto.injective.peggy.v1.QueryDelegateKeysByEthAddressResponse.prototype.setValidatorAddress = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string orchestrator_address = 2;
 * @return {string}
 */
proto.injective.peggy.v1.QueryDelegateKeysByEthAddressResponse.prototype.getOrchestratorAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.injective.peggy.v1.QueryDelegateKeysByEthAddressResponse} returns this
 */
proto.injective.peggy.v1.QueryDelegateKeysByEthAddressResponse.prototype.setOrchestratorAddress = function(value) {
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
proto.injective.peggy.v1.QueryDelegateKeysByOrchestratorAddress.prototype.toObject = function(opt_includeInstance) {
  return proto.injective.peggy.v1.QueryDelegateKeysByOrchestratorAddress.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.injective.peggy.v1.QueryDelegateKeysByOrchestratorAddress} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.injective.peggy.v1.QueryDelegateKeysByOrchestratorAddress.toObject = function(includeInstance, msg) {
  var f, obj = {
    orchestratorAddress: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.injective.peggy.v1.QueryDelegateKeysByOrchestratorAddress}
 */
proto.injective.peggy.v1.QueryDelegateKeysByOrchestratorAddress.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.injective.peggy.v1.QueryDelegateKeysByOrchestratorAddress;
  return proto.injective.peggy.v1.QueryDelegateKeysByOrchestratorAddress.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.injective.peggy.v1.QueryDelegateKeysByOrchestratorAddress} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.injective.peggy.v1.QueryDelegateKeysByOrchestratorAddress}
 */
proto.injective.peggy.v1.QueryDelegateKeysByOrchestratorAddress.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setOrchestratorAddress(value);
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
proto.injective.peggy.v1.QueryDelegateKeysByOrchestratorAddress.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.injective.peggy.v1.QueryDelegateKeysByOrchestratorAddress.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.injective.peggy.v1.QueryDelegateKeysByOrchestratorAddress} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.injective.peggy.v1.QueryDelegateKeysByOrchestratorAddress.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOrchestratorAddress();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string orchestrator_address = 1;
 * @return {string}
 */
proto.injective.peggy.v1.QueryDelegateKeysByOrchestratorAddress.prototype.getOrchestratorAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.injective.peggy.v1.QueryDelegateKeysByOrchestratorAddress} returns this
 */
proto.injective.peggy.v1.QueryDelegateKeysByOrchestratorAddress.prototype.setOrchestratorAddress = function(value) {
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
proto.injective.peggy.v1.QueryDelegateKeysByOrchestratorAddressResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.injective.peggy.v1.QueryDelegateKeysByOrchestratorAddressResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.injective.peggy.v1.QueryDelegateKeysByOrchestratorAddressResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.injective.peggy.v1.QueryDelegateKeysByOrchestratorAddressResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    validatorAddress: jspb.Message.getFieldWithDefault(msg, 1, ""),
    ethAddress: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.injective.peggy.v1.QueryDelegateKeysByOrchestratorAddressResponse}
 */
proto.injective.peggy.v1.QueryDelegateKeysByOrchestratorAddressResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.injective.peggy.v1.QueryDelegateKeysByOrchestratorAddressResponse;
  return proto.injective.peggy.v1.QueryDelegateKeysByOrchestratorAddressResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.injective.peggy.v1.QueryDelegateKeysByOrchestratorAddressResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.injective.peggy.v1.QueryDelegateKeysByOrchestratorAddressResponse}
 */
proto.injective.peggy.v1.QueryDelegateKeysByOrchestratorAddressResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setValidatorAddress(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setEthAddress(value);
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
proto.injective.peggy.v1.QueryDelegateKeysByOrchestratorAddressResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.injective.peggy.v1.QueryDelegateKeysByOrchestratorAddressResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.injective.peggy.v1.QueryDelegateKeysByOrchestratorAddressResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.injective.peggy.v1.QueryDelegateKeysByOrchestratorAddressResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getValidatorAddress();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getEthAddress();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string validator_address = 1;
 * @return {string}
 */
proto.injective.peggy.v1.QueryDelegateKeysByOrchestratorAddressResponse.prototype.getValidatorAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.injective.peggy.v1.QueryDelegateKeysByOrchestratorAddressResponse} returns this
 */
proto.injective.peggy.v1.QueryDelegateKeysByOrchestratorAddressResponse.prototype.setValidatorAddress = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string eth_address = 2;
 * @return {string}
 */
proto.injective.peggy.v1.QueryDelegateKeysByOrchestratorAddressResponse.prototype.getEthAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.injective.peggy.v1.QueryDelegateKeysByOrchestratorAddressResponse} returns this
 */
proto.injective.peggy.v1.QueryDelegateKeysByOrchestratorAddressResponse.prototype.setEthAddress = function(value) {
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
proto.injective.peggy.v1.QueryPendingSendToEth.prototype.toObject = function(opt_includeInstance) {
  return proto.injective.peggy.v1.QueryPendingSendToEth.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.injective.peggy.v1.QueryPendingSendToEth} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.injective.peggy.v1.QueryPendingSendToEth.toObject = function(includeInstance, msg) {
  var f, obj = {
    senderAddress: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.injective.peggy.v1.QueryPendingSendToEth}
 */
proto.injective.peggy.v1.QueryPendingSendToEth.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.injective.peggy.v1.QueryPendingSendToEth;
  return proto.injective.peggy.v1.QueryPendingSendToEth.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.injective.peggy.v1.QueryPendingSendToEth} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.injective.peggy.v1.QueryPendingSendToEth}
 */
proto.injective.peggy.v1.QueryPendingSendToEth.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setSenderAddress(value);
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
proto.injective.peggy.v1.QueryPendingSendToEth.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.injective.peggy.v1.QueryPendingSendToEth.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.injective.peggy.v1.QueryPendingSendToEth} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.injective.peggy.v1.QueryPendingSendToEth.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSenderAddress();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string sender_address = 1;
 * @return {string}
 */
proto.injective.peggy.v1.QueryPendingSendToEth.prototype.getSenderAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.injective.peggy.v1.QueryPendingSendToEth} returns this
 */
proto.injective.peggy.v1.QueryPendingSendToEth.prototype.setSenderAddress = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.injective.peggy.v1.QueryPendingSendToEthResponse.repeatedFields_ = [1,2];



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
proto.injective.peggy.v1.QueryPendingSendToEthResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.injective.peggy.v1.QueryPendingSendToEthResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.injective.peggy.v1.QueryPendingSendToEthResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.injective.peggy.v1.QueryPendingSendToEthResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    transfersInBatchesList: jspb.Message.toObjectList(msg.getTransfersInBatchesList(),
    injective_peggy_v1_batch_pb.OutgoingTransferTx.toObject, includeInstance),
    unbatchedTransfersList: jspb.Message.toObjectList(msg.getUnbatchedTransfersList(),
    injective_peggy_v1_batch_pb.OutgoingTransferTx.toObject, includeInstance)
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
 * @return {!proto.injective.peggy.v1.QueryPendingSendToEthResponse}
 */
proto.injective.peggy.v1.QueryPendingSendToEthResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.injective.peggy.v1.QueryPendingSendToEthResponse;
  return proto.injective.peggy.v1.QueryPendingSendToEthResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.injective.peggy.v1.QueryPendingSendToEthResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.injective.peggy.v1.QueryPendingSendToEthResponse}
 */
proto.injective.peggy.v1.QueryPendingSendToEthResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new injective_peggy_v1_batch_pb.OutgoingTransferTx;
      reader.readMessage(value,injective_peggy_v1_batch_pb.OutgoingTransferTx.deserializeBinaryFromReader);
      msg.addTransfersInBatches(value);
      break;
    case 2:
      var value = new injective_peggy_v1_batch_pb.OutgoingTransferTx;
      reader.readMessage(value,injective_peggy_v1_batch_pb.OutgoingTransferTx.deserializeBinaryFromReader);
      msg.addUnbatchedTransfers(value);
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
proto.injective.peggy.v1.QueryPendingSendToEthResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.injective.peggy.v1.QueryPendingSendToEthResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.injective.peggy.v1.QueryPendingSendToEthResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.injective.peggy.v1.QueryPendingSendToEthResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTransfersInBatchesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      injective_peggy_v1_batch_pb.OutgoingTransferTx.serializeBinaryToWriter
    );
  }
  f = message.getUnbatchedTransfersList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      injective_peggy_v1_batch_pb.OutgoingTransferTx.serializeBinaryToWriter
    );
  }
};


/**
 * repeated OutgoingTransferTx transfers_in_batches = 1;
 * @return {!Array<!proto.injective.peggy.v1.OutgoingTransferTx>}
 */
proto.injective.peggy.v1.QueryPendingSendToEthResponse.prototype.getTransfersInBatchesList = function() {
  return /** @type{!Array<!proto.injective.peggy.v1.OutgoingTransferTx>} */ (
    jspb.Message.getRepeatedWrapperField(this, injective_peggy_v1_batch_pb.OutgoingTransferTx, 1));
};


/**
 * @param {!Array<!proto.injective.peggy.v1.OutgoingTransferTx>} value
 * @return {!proto.injective.peggy.v1.QueryPendingSendToEthResponse} returns this
*/
proto.injective.peggy.v1.QueryPendingSendToEthResponse.prototype.setTransfersInBatchesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.injective.peggy.v1.OutgoingTransferTx=} opt_value
 * @param {number=} opt_index
 * @return {!proto.injective.peggy.v1.OutgoingTransferTx}
 */
proto.injective.peggy.v1.QueryPendingSendToEthResponse.prototype.addTransfersInBatches = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.injective.peggy.v1.OutgoingTransferTx, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.injective.peggy.v1.QueryPendingSendToEthResponse} returns this
 */
proto.injective.peggy.v1.QueryPendingSendToEthResponse.prototype.clearTransfersInBatchesList = function() {
  return this.setTransfersInBatchesList([]);
};


/**
 * repeated OutgoingTransferTx unbatched_transfers = 2;
 * @return {!Array<!proto.injective.peggy.v1.OutgoingTransferTx>}
 */
proto.injective.peggy.v1.QueryPendingSendToEthResponse.prototype.getUnbatchedTransfersList = function() {
  return /** @type{!Array<!proto.injective.peggy.v1.OutgoingTransferTx>} */ (
    jspb.Message.getRepeatedWrapperField(this, injective_peggy_v1_batch_pb.OutgoingTransferTx, 2));
};


/**
 * @param {!Array<!proto.injective.peggy.v1.OutgoingTransferTx>} value
 * @return {!proto.injective.peggy.v1.QueryPendingSendToEthResponse} returns this
*/
proto.injective.peggy.v1.QueryPendingSendToEthResponse.prototype.setUnbatchedTransfersList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.injective.peggy.v1.OutgoingTransferTx=} opt_value
 * @param {number=} opt_index
 * @return {!proto.injective.peggy.v1.OutgoingTransferTx}
 */
proto.injective.peggy.v1.QueryPendingSendToEthResponse.prototype.addUnbatchedTransfers = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.injective.peggy.v1.OutgoingTransferTx, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.injective.peggy.v1.QueryPendingSendToEthResponse} returns this
 */
proto.injective.peggy.v1.QueryPendingSendToEthResponse.prototype.clearUnbatchedTransfersList = function() {
  return this.setUnbatchedTransfersList([]);
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
proto.injective.peggy.v1.QueryModuleStateRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.injective.peggy.v1.QueryModuleStateRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.injective.peggy.v1.QueryModuleStateRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.injective.peggy.v1.QueryModuleStateRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.injective.peggy.v1.QueryModuleStateRequest}
 */
proto.injective.peggy.v1.QueryModuleStateRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.injective.peggy.v1.QueryModuleStateRequest;
  return proto.injective.peggy.v1.QueryModuleStateRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.injective.peggy.v1.QueryModuleStateRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.injective.peggy.v1.QueryModuleStateRequest}
 */
proto.injective.peggy.v1.QueryModuleStateRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.injective.peggy.v1.QueryModuleStateRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.injective.peggy.v1.QueryModuleStateRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.injective.peggy.v1.QueryModuleStateRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.injective.peggy.v1.QueryModuleStateRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.injective.peggy.v1.QueryModuleStateResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.injective.peggy.v1.QueryModuleStateResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.injective.peggy.v1.QueryModuleStateResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.injective.peggy.v1.QueryModuleStateResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    state: (f = msg.getState()) && injective_peggy_v1_genesis_pb.GenesisState.toObject(includeInstance, f)
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
 * @return {!proto.injective.peggy.v1.QueryModuleStateResponse}
 */
proto.injective.peggy.v1.QueryModuleStateResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.injective.peggy.v1.QueryModuleStateResponse;
  return proto.injective.peggy.v1.QueryModuleStateResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.injective.peggy.v1.QueryModuleStateResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.injective.peggy.v1.QueryModuleStateResponse}
 */
proto.injective.peggy.v1.QueryModuleStateResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new injective_peggy_v1_genesis_pb.GenesisState;
      reader.readMessage(value,injective_peggy_v1_genesis_pb.GenesisState.deserializeBinaryFromReader);
      msg.setState(value);
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
proto.injective.peggy.v1.QueryModuleStateResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.injective.peggy.v1.QueryModuleStateResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.injective.peggy.v1.QueryModuleStateResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.injective.peggy.v1.QueryModuleStateResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getState();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      injective_peggy_v1_genesis_pb.GenesisState.serializeBinaryToWriter
    );
  }
};


/**
 * optional GenesisState state = 1;
 * @return {?proto.injective.peggy.v1.GenesisState}
 */
proto.injective.peggy.v1.QueryModuleStateResponse.prototype.getState = function() {
  return /** @type{?proto.injective.peggy.v1.GenesisState} */ (
    jspb.Message.getWrapperField(this, injective_peggy_v1_genesis_pb.GenesisState, 1));
};


/**
 * @param {?proto.injective.peggy.v1.GenesisState|undefined} value
 * @return {!proto.injective.peggy.v1.QueryModuleStateResponse} returns this
*/
proto.injective.peggy.v1.QueryModuleStateResponse.prototype.setState = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.injective.peggy.v1.QueryModuleStateResponse} returns this
 */
proto.injective.peggy.v1.QueryModuleStateResponse.prototype.clearState = function() {
  return this.setState(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.injective.peggy.v1.QueryModuleStateResponse.prototype.hasState = function() {
  return jspb.Message.getField(this, 1) != null;
};


goog.object.extend(exports, proto.injective.peggy.v1);
