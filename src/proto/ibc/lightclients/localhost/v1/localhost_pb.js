// source: ibc/lightclients/localhost/v1/localhost.proto
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

var gogoproto_gogo_pb = require('../../../../gogoproto/gogo_pb.js');
goog.object.extend(proto, gogoproto_gogo_pb);
var ibc_core_client_v1_client_pb = require('../../../../ibc/core/client/v1/client_pb.js');
goog.object.extend(proto, ibc_core_client_v1_client_pb);
goog.exportSymbol('proto.ibc.lightclients.localhost.v1.ClientState', null, global);
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
proto.ibc.lightclients.localhost.v1.ClientState = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ibc.lightclients.localhost.v1.ClientState, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ibc.lightclients.localhost.v1.ClientState.displayName = 'proto.ibc.lightclients.localhost.v1.ClientState';
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
proto.ibc.lightclients.localhost.v1.ClientState.prototype.toObject = function(opt_includeInstance) {
  return proto.ibc.lightclients.localhost.v1.ClientState.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ibc.lightclients.localhost.v1.ClientState} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ibc.lightclients.localhost.v1.ClientState.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    chainId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    height: (f = msg.getHeight()) && ibc_core_client_v1_client_pb.Height.toObject(includeInstance, f)
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
 * @return {!proto.ibc.lightclients.localhost.v1.ClientState}
 */
proto.ibc.lightclients.localhost.v1.ClientState.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ibc.lightclients.localhost.v1.ClientState;
  return proto.ibc.lightclients.localhost.v1.ClientState.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ibc.lightclients.localhost.v1.ClientState} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ibc.lightclients.localhost.v1.ClientState}
 */
proto.ibc.lightclients.localhost.v1.ClientState.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setChainId(value);
      break;
    case 3:
      var value = new ibc_core_client_v1_client_pb.Height;
      reader.readMessage(value,ibc_core_client_v1_client_pb.Height.deserializeBinaryFromReader);
      msg.setHeight(value);
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
proto.ibc.lightclients.localhost.v1.ClientState.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ibc.lightclients.localhost.v1.ClientState.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ibc.lightclients.localhost.v1.ClientState} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ibc.lightclients.localhost.v1.ClientState.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getChainId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getHeight();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      ibc_core_client_v1_client_pb.Height.serializeBinaryToWriter
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.ibc.lightclients.localhost.v1.ClientState.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ibc.lightclients.localhost.v1.ClientState} returns this
 */
proto.ibc.lightclients.localhost.v1.ClientState.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string chain_id = 2;
 * @return {string}
 */
proto.ibc.lightclients.localhost.v1.ClientState.prototype.getChainId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.ibc.lightclients.localhost.v1.ClientState} returns this
 */
proto.ibc.lightclients.localhost.v1.ClientState.prototype.setChainId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional ibc.core.client.v1.Height height = 3;
 * @return {?proto.ibc.core.client.v1.Height}
 */
proto.ibc.lightclients.localhost.v1.ClientState.prototype.getHeight = function() {
  return /** @type{?proto.ibc.core.client.v1.Height} */ (
    jspb.Message.getWrapperField(this, ibc_core_client_v1_client_pb.Height, 3));
};


/**
 * @param {?proto.ibc.core.client.v1.Height|undefined} value
 * @return {!proto.ibc.lightclients.localhost.v1.ClientState} returns this
*/
proto.ibc.lightclients.localhost.v1.ClientState.prototype.setHeight = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ibc.lightclients.localhost.v1.ClientState} returns this
 */
proto.ibc.lightclients.localhost.v1.ClientState.prototype.clearHeight = function() {
  return this.setHeight(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ibc.lightclients.localhost.v1.ClientState.prototype.hasHeight = function() {
  return jspb.Message.getField(this, 3) != null;
};


goog.object.extend(exports, proto.ibc.lightclients.localhost.v1);
