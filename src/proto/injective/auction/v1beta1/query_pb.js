// source: injective/auction/v1beta1/query.proto
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

var google_api_annotations_pb = require('../../../google/api/annotations_pb.js');
goog.object.extend(proto, google_api_annotations_pb);
var injective_auction_v1beta1_auction_pb = require('../../../injective/auction/v1beta1/auction_pb.js');
goog.object.extend(proto, injective_auction_v1beta1_auction_pb);
var injective_auction_v1beta1_genesis_pb = require('../../../injective/auction/v1beta1/genesis_pb.js');
goog.object.extend(proto, injective_auction_v1beta1_genesis_pb);
var gogoproto_gogo_pb = require('../../../gogoproto/gogo_pb.js');
goog.object.extend(proto, gogoproto_gogo_pb);
var cosmos_base_v1beta1_coin_pb = require('../../../cosmos/base/v1beta1/coin_pb.js');
goog.object.extend(proto, cosmos_base_v1beta1_coin_pb);
goog.exportSymbol('proto.injective.auction.v1beta1.QueryAuctionParamsRequest', null, global);
goog.exportSymbol('proto.injective.auction.v1beta1.QueryAuctionParamsResponse', null, global);
goog.exportSymbol('proto.injective.auction.v1beta1.QueryCurrentAuctionBasketRequest', null, global);
goog.exportSymbol('proto.injective.auction.v1beta1.QueryCurrentAuctionBasketResponse', null, global);
goog.exportSymbol('proto.injective.auction.v1beta1.QueryModuleStateRequest', null, global);
goog.exportSymbol('proto.injective.auction.v1beta1.QueryModuleStateResponse', null, global);
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
proto.injective.auction.v1beta1.QueryAuctionParamsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.injective.auction.v1beta1.QueryAuctionParamsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.injective.auction.v1beta1.QueryAuctionParamsRequest.displayName = 'proto.injective.auction.v1beta1.QueryAuctionParamsRequest';
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
proto.injective.auction.v1beta1.QueryAuctionParamsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.injective.auction.v1beta1.QueryAuctionParamsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.injective.auction.v1beta1.QueryAuctionParamsResponse.displayName = 'proto.injective.auction.v1beta1.QueryAuctionParamsResponse';
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
proto.injective.auction.v1beta1.QueryCurrentAuctionBasketRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.injective.auction.v1beta1.QueryCurrentAuctionBasketRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.injective.auction.v1beta1.QueryCurrentAuctionBasketRequest.displayName = 'proto.injective.auction.v1beta1.QueryCurrentAuctionBasketRequest';
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
proto.injective.auction.v1beta1.QueryCurrentAuctionBasketResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.injective.auction.v1beta1.QueryCurrentAuctionBasketResponse.repeatedFields_, null);
};
goog.inherits(proto.injective.auction.v1beta1.QueryCurrentAuctionBasketResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.injective.auction.v1beta1.QueryCurrentAuctionBasketResponse.displayName = 'proto.injective.auction.v1beta1.QueryCurrentAuctionBasketResponse';
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
proto.injective.auction.v1beta1.QueryModuleStateRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.injective.auction.v1beta1.QueryModuleStateRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.injective.auction.v1beta1.QueryModuleStateRequest.displayName = 'proto.injective.auction.v1beta1.QueryModuleStateRequest';
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
proto.injective.auction.v1beta1.QueryModuleStateResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.injective.auction.v1beta1.QueryModuleStateResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.injective.auction.v1beta1.QueryModuleStateResponse.displayName = 'proto.injective.auction.v1beta1.QueryModuleStateResponse';
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
proto.injective.auction.v1beta1.QueryAuctionParamsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.injective.auction.v1beta1.QueryAuctionParamsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.injective.auction.v1beta1.QueryAuctionParamsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.injective.auction.v1beta1.QueryAuctionParamsRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.injective.auction.v1beta1.QueryAuctionParamsRequest}
 */
proto.injective.auction.v1beta1.QueryAuctionParamsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.injective.auction.v1beta1.QueryAuctionParamsRequest;
  return proto.injective.auction.v1beta1.QueryAuctionParamsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.injective.auction.v1beta1.QueryAuctionParamsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.injective.auction.v1beta1.QueryAuctionParamsRequest}
 */
proto.injective.auction.v1beta1.QueryAuctionParamsRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.injective.auction.v1beta1.QueryAuctionParamsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.injective.auction.v1beta1.QueryAuctionParamsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.injective.auction.v1beta1.QueryAuctionParamsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.injective.auction.v1beta1.QueryAuctionParamsRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.injective.auction.v1beta1.QueryAuctionParamsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.injective.auction.v1beta1.QueryAuctionParamsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.injective.auction.v1beta1.QueryAuctionParamsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.injective.auction.v1beta1.QueryAuctionParamsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    params: (f = msg.getParams()) && injective_auction_v1beta1_auction_pb.Params.toObject(includeInstance, f)
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
 * @return {!proto.injective.auction.v1beta1.QueryAuctionParamsResponse}
 */
proto.injective.auction.v1beta1.QueryAuctionParamsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.injective.auction.v1beta1.QueryAuctionParamsResponse;
  return proto.injective.auction.v1beta1.QueryAuctionParamsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.injective.auction.v1beta1.QueryAuctionParamsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.injective.auction.v1beta1.QueryAuctionParamsResponse}
 */
proto.injective.auction.v1beta1.QueryAuctionParamsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new injective_auction_v1beta1_auction_pb.Params;
      reader.readMessage(value,injective_auction_v1beta1_auction_pb.Params.deserializeBinaryFromReader);
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
proto.injective.auction.v1beta1.QueryAuctionParamsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.injective.auction.v1beta1.QueryAuctionParamsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.injective.auction.v1beta1.QueryAuctionParamsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.injective.auction.v1beta1.QueryAuctionParamsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getParams();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      injective_auction_v1beta1_auction_pb.Params.serializeBinaryToWriter
    );
  }
};


/**
 * optional Params params = 1;
 * @return {?proto.injective.auction.v1beta1.Params}
 */
proto.injective.auction.v1beta1.QueryAuctionParamsResponse.prototype.getParams = function() {
  return /** @type{?proto.injective.auction.v1beta1.Params} */ (
    jspb.Message.getWrapperField(this, injective_auction_v1beta1_auction_pb.Params, 1));
};


/**
 * @param {?proto.injective.auction.v1beta1.Params|undefined} value
 * @return {!proto.injective.auction.v1beta1.QueryAuctionParamsResponse} returns this
*/
proto.injective.auction.v1beta1.QueryAuctionParamsResponse.prototype.setParams = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.injective.auction.v1beta1.QueryAuctionParamsResponse} returns this
 */
proto.injective.auction.v1beta1.QueryAuctionParamsResponse.prototype.clearParams = function() {
  return this.setParams(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.injective.auction.v1beta1.QueryAuctionParamsResponse.prototype.hasParams = function() {
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
proto.injective.auction.v1beta1.QueryCurrentAuctionBasketRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.injective.auction.v1beta1.QueryCurrentAuctionBasketRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.injective.auction.v1beta1.QueryCurrentAuctionBasketRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.injective.auction.v1beta1.QueryCurrentAuctionBasketRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.injective.auction.v1beta1.QueryCurrentAuctionBasketRequest}
 */
proto.injective.auction.v1beta1.QueryCurrentAuctionBasketRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.injective.auction.v1beta1.QueryCurrentAuctionBasketRequest;
  return proto.injective.auction.v1beta1.QueryCurrentAuctionBasketRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.injective.auction.v1beta1.QueryCurrentAuctionBasketRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.injective.auction.v1beta1.QueryCurrentAuctionBasketRequest}
 */
proto.injective.auction.v1beta1.QueryCurrentAuctionBasketRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.injective.auction.v1beta1.QueryCurrentAuctionBasketRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.injective.auction.v1beta1.QueryCurrentAuctionBasketRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.injective.auction.v1beta1.QueryCurrentAuctionBasketRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.injective.auction.v1beta1.QueryCurrentAuctionBasketRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.injective.auction.v1beta1.QueryCurrentAuctionBasketResponse.repeatedFields_ = [1];



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
proto.injective.auction.v1beta1.QueryCurrentAuctionBasketResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.injective.auction.v1beta1.QueryCurrentAuctionBasketResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.injective.auction.v1beta1.QueryCurrentAuctionBasketResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.injective.auction.v1beta1.QueryCurrentAuctionBasketResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    amountList: jspb.Message.toObjectList(msg.getAmountList(),
    cosmos_base_v1beta1_coin_pb.Coin.toObject, includeInstance),
    auctionround: jspb.Message.getFieldWithDefault(msg, 2, 0),
    auctionclosingtime: jspb.Message.getFieldWithDefault(msg, 3, 0),
    highestbidder: jspb.Message.getFieldWithDefault(msg, 4, ""),
    highestbidamount: jspb.Message.getFieldWithDefault(msg, 5, "")
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
 * @return {!proto.injective.auction.v1beta1.QueryCurrentAuctionBasketResponse}
 */
proto.injective.auction.v1beta1.QueryCurrentAuctionBasketResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.injective.auction.v1beta1.QueryCurrentAuctionBasketResponse;
  return proto.injective.auction.v1beta1.QueryCurrentAuctionBasketResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.injective.auction.v1beta1.QueryCurrentAuctionBasketResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.injective.auction.v1beta1.QueryCurrentAuctionBasketResponse}
 */
proto.injective.auction.v1beta1.QueryCurrentAuctionBasketResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new cosmos_base_v1beta1_coin_pb.Coin;
      reader.readMessage(value,cosmos_base_v1beta1_coin_pb.Coin.deserializeBinaryFromReader);
      msg.addAmount(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setAuctionround(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setAuctionclosingtime(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setHighestbidder(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setHighestbidamount(value);
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
proto.injective.auction.v1beta1.QueryCurrentAuctionBasketResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.injective.auction.v1beta1.QueryCurrentAuctionBasketResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.injective.auction.v1beta1.QueryCurrentAuctionBasketResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.injective.auction.v1beta1.QueryCurrentAuctionBasketResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAmountList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      cosmos_base_v1beta1_coin_pb.Coin.serializeBinaryToWriter
    );
  }
  f = message.getAuctionround();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
  f = message.getAuctionclosingtime();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = message.getHighestbidder();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getHighestbidamount();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
};


/**
 * repeated cosmos.base.v1beta1.Coin amount = 1;
 * @return {!Array<!proto.cosmos.base.v1beta1.Coin>}
 */
proto.injective.auction.v1beta1.QueryCurrentAuctionBasketResponse.prototype.getAmountList = function() {
  return /** @type{!Array<!proto.cosmos.base.v1beta1.Coin>} */ (
    jspb.Message.getRepeatedWrapperField(this, cosmos_base_v1beta1_coin_pb.Coin, 1));
};


/**
 * @param {!Array<!proto.cosmos.base.v1beta1.Coin>} value
 * @return {!proto.injective.auction.v1beta1.QueryCurrentAuctionBasketResponse} returns this
*/
proto.injective.auction.v1beta1.QueryCurrentAuctionBasketResponse.prototype.setAmountList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.cosmos.base.v1beta1.Coin=} opt_value
 * @param {number=} opt_index
 * @return {!proto.cosmos.base.v1beta1.Coin}
 */
proto.injective.auction.v1beta1.QueryCurrentAuctionBasketResponse.prototype.addAmount = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.cosmos.base.v1beta1.Coin, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.injective.auction.v1beta1.QueryCurrentAuctionBasketResponse} returns this
 */
proto.injective.auction.v1beta1.QueryCurrentAuctionBasketResponse.prototype.clearAmountList = function() {
  return this.setAmountList([]);
};


/**
 * optional uint64 auctionRound = 2;
 * @return {number}
 */
proto.injective.auction.v1beta1.QueryCurrentAuctionBasketResponse.prototype.getAuctionround = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.injective.auction.v1beta1.QueryCurrentAuctionBasketResponse} returns this
 */
proto.injective.auction.v1beta1.QueryCurrentAuctionBasketResponse.prototype.setAuctionround = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int64 auctionClosingTime = 3;
 * @return {number}
 */
proto.injective.auction.v1beta1.QueryCurrentAuctionBasketResponse.prototype.getAuctionclosingtime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.injective.auction.v1beta1.QueryCurrentAuctionBasketResponse} returns this
 */
proto.injective.auction.v1beta1.QueryCurrentAuctionBasketResponse.prototype.setAuctionclosingtime = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional string highestBidder = 4;
 * @return {string}
 */
proto.injective.auction.v1beta1.QueryCurrentAuctionBasketResponse.prototype.getHighestbidder = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.injective.auction.v1beta1.QueryCurrentAuctionBasketResponse} returns this
 */
proto.injective.auction.v1beta1.QueryCurrentAuctionBasketResponse.prototype.setHighestbidder = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string highestBidAmount = 5;
 * @return {string}
 */
proto.injective.auction.v1beta1.QueryCurrentAuctionBasketResponse.prototype.getHighestbidamount = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.injective.auction.v1beta1.QueryCurrentAuctionBasketResponse} returns this
 */
proto.injective.auction.v1beta1.QueryCurrentAuctionBasketResponse.prototype.setHighestbidamount = function(value) {
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
proto.injective.auction.v1beta1.QueryModuleStateRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.injective.auction.v1beta1.QueryModuleStateRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.injective.auction.v1beta1.QueryModuleStateRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.injective.auction.v1beta1.QueryModuleStateRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.injective.auction.v1beta1.QueryModuleStateRequest}
 */
proto.injective.auction.v1beta1.QueryModuleStateRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.injective.auction.v1beta1.QueryModuleStateRequest;
  return proto.injective.auction.v1beta1.QueryModuleStateRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.injective.auction.v1beta1.QueryModuleStateRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.injective.auction.v1beta1.QueryModuleStateRequest}
 */
proto.injective.auction.v1beta1.QueryModuleStateRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.injective.auction.v1beta1.QueryModuleStateRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.injective.auction.v1beta1.QueryModuleStateRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.injective.auction.v1beta1.QueryModuleStateRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.injective.auction.v1beta1.QueryModuleStateRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.injective.auction.v1beta1.QueryModuleStateResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.injective.auction.v1beta1.QueryModuleStateResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.injective.auction.v1beta1.QueryModuleStateResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.injective.auction.v1beta1.QueryModuleStateResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    state: (f = msg.getState()) && injective_auction_v1beta1_genesis_pb.GenesisState.toObject(includeInstance, f)
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
 * @return {!proto.injective.auction.v1beta1.QueryModuleStateResponse}
 */
proto.injective.auction.v1beta1.QueryModuleStateResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.injective.auction.v1beta1.QueryModuleStateResponse;
  return proto.injective.auction.v1beta1.QueryModuleStateResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.injective.auction.v1beta1.QueryModuleStateResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.injective.auction.v1beta1.QueryModuleStateResponse}
 */
proto.injective.auction.v1beta1.QueryModuleStateResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new injective_auction_v1beta1_genesis_pb.GenesisState;
      reader.readMessage(value,injective_auction_v1beta1_genesis_pb.GenesisState.deserializeBinaryFromReader);
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
proto.injective.auction.v1beta1.QueryModuleStateResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.injective.auction.v1beta1.QueryModuleStateResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.injective.auction.v1beta1.QueryModuleStateResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.injective.auction.v1beta1.QueryModuleStateResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getState();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      injective_auction_v1beta1_genesis_pb.GenesisState.serializeBinaryToWriter
    );
  }
};


/**
 * optional GenesisState state = 1;
 * @return {?proto.injective.auction.v1beta1.GenesisState}
 */
proto.injective.auction.v1beta1.QueryModuleStateResponse.prototype.getState = function() {
  return /** @type{?proto.injective.auction.v1beta1.GenesisState} */ (
    jspb.Message.getWrapperField(this, injective_auction_v1beta1_genesis_pb.GenesisState, 1));
};


/**
 * @param {?proto.injective.auction.v1beta1.GenesisState|undefined} value
 * @return {!proto.injective.auction.v1beta1.QueryModuleStateResponse} returns this
*/
proto.injective.auction.v1beta1.QueryModuleStateResponse.prototype.setState = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.injective.auction.v1beta1.QueryModuleStateResponse} returns this
 */
proto.injective.auction.v1beta1.QueryModuleStateResponse.prototype.clearState = function() {
  return this.setState(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.injective.auction.v1beta1.QueryModuleStateResponse.prototype.hasState = function() {
  return jspb.Message.getField(this, 1) != null;
};


goog.object.extend(exports, proto.injective.auction.v1beta1);
