// package: injective.oracle.v1beta1
// file: injective/oracle/v1beta1/tx.proto

import * as jspb from "google-protobuf";
import * as gogoproto_gogo_pb from "../../../gogoproto/gogo_pb";
import * as cosmos_base_v1beta1_coin_pb from "../../../cosmos/base/v1beta1/coin_pb";
import * as injective_oracle_v1beta1_oracle_pb from "../../../injective/oracle/v1beta1/oracle_pb";

export class MsgRelayPriceFeedPrice extends jspb.Message {
  getSender(): string;
  setSender(value: string): void;

  clearBaseList(): void;
  getBaseList(): Array<string>;
  setBaseList(value: Array<string>): void;
  addBase(value: string, index?: number): string;

  clearQuoteList(): void;
  getQuoteList(): Array<string>;
  setQuoteList(value: Array<string>): void;
  addQuote(value: string, index?: number): string;

  clearPriceList(): void;
  getPriceList(): Array<string>;
  setPriceList(value: Array<string>): void;
  addPrice(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgRelayPriceFeedPrice.AsObject;
  static toObject(includeInstance: boolean, msg: MsgRelayPriceFeedPrice): MsgRelayPriceFeedPrice.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MsgRelayPriceFeedPrice, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgRelayPriceFeedPrice;
  static deserializeBinaryFromReader(message: MsgRelayPriceFeedPrice, reader: jspb.BinaryReader): MsgRelayPriceFeedPrice;
}

export namespace MsgRelayPriceFeedPrice {
  export type AsObject = {
    sender: string,
    baseList: Array<string>,
    quoteList: Array<string>,
    priceList: Array<string>,
  }
}

export class MsgRelayPriceFeedPriceResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgRelayPriceFeedPriceResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MsgRelayPriceFeedPriceResponse): MsgRelayPriceFeedPriceResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MsgRelayPriceFeedPriceResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgRelayPriceFeedPriceResponse;
  static deserializeBinaryFromReader(message: MsgRelayPriceFeedPriceResponse, reader: jspb.BinaryReader): MsgRelayPriceFeedPriceResponse;
}

export namespace MsgRelayPriceFeedPriceResponse {
  export type AsObject = {
  }
}

export class MsgRelayBandRates extends jspb.Message {
  getRelayer(): string;
  setRelayer(value: string): void;

  clearSymbolsList(): void;
  getSymbolsList(): Array<string>;
  setSymbolsList(value: Array<string>): void;
  addSymbols(value: string, index?: number): string;

  clearRatesList(): void;
  getRatesList(): Array<number>;
  setRatesList(value: Array<number>): void;
  addRates(value: number, index?: number): number;

  clearResolveTimesList(): void;
  getResolveTimesList(): Array<number>;
  setResolveTimesList(value: Array<number>): void;
  addResolveTimes(value: number, index?: number): number;

  clearRequestidsList(): void;
  getRequestidsList(): Array<number>;
  setRequestidsList(value: Array<number>): void;
  addRequestids(value: number, index?: number): number;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgRelayBandRates.AsObject;
  static toObject(includeInstance: boolean, msg: MsgRelayBandRates): MsgRelayBandRates.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MsgRelayBandRates, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgRelayBandRates;
  static deserializeBinaryFromReader(message: MsgRelayBandRates, reader: jspb.BinaryReader): MsgRelayBandRates;
}

export namespace MsgRelayBandRates {
  export type AsObject = {
    relayer: string,
    symbolsList: Array<string>,
    ratesList: Array<number>,
    resolveTimesList: Array<number>,
    requestidsList: Array<number>,
  }
}

export class MsgRelayBandRatesResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgRelayBandRatesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MsgRelayBandRatesResponse): MsgRelayBandRatesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MsgRelayBandRatesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgRelayBandRatesResponse;
  static deserializeBinaryFromReader(message: MsgRelayBandRatesResponse, reader: jspb.BinaryReader): MsgRelayBandRatesResponse;
}

export namespace MsgRelayBandRatesResponse {
  export type AsObject = {
  }
}

export class MsgRelayCoinbaseMessages extends jspb.Message {
  getSender(): string;
  setSender(value: string): void;

  clearMessagesList(): void;
  getMessagesList(): Array<Uint8Array | string>;
  getMessagesList_asU8(): Array<Uint8Array>;
  getMessagesList_asB64(): Array<string>;
  setMessagesList(value: Array<Uint8Array | string>): void;
  addMessages(value: Uint8Array | string, index?: number): Uint8Array | string;

  clearSignaturesList(): void;
  getSignaturesList(): Array<Uint8Array | string>;
  getSignaturesList_asU8(): Array<Uint8Array>;
  getSignaturesList_asB64(): Array<string>;
  setSignaturesList(value: Array<Uint8Array | string>): void;
  addSignatures(value: Uint8Array | string, index?: number): Uint8Array | string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgRelayCoinbaseMessages.AsObject;
  static toObject(includeInstance: boolean, msg: MsgRelayCoinbaseMessages): MsgRelayCoinbaseMessages.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MsgRelayCoinbaseMessages, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgRelayCoinbaseMessages;
  static deserializeBinaryFromReader(message: MsgRelayCoinbaseMessages, reader: jspb.BinaryReader): MsgRelayCoinbaseMessages;
}

export namespace MsgRelayCoinbaseMessages {
  export type AsObject = {
    sender: string,
    messagesList: Array<Uint8Array | string>,
    signaturesList: Array<Uint8Array | string>,
  }
}

export class MsgRelayCoinbaseMessagesResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgRelayCoinbaseMessagesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MsgRelayCoinbaseMessagesResponse): MsgRelayCoinbaseMessagesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MsgRelayCoinbaseMessagesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgRelayCoinbaseMessagesResponse;
  static deserializeBinaryFromReader(message: MsgRelayCoinbaseMessagesResponse, reader: jspb.BinaryReader): MsgRelayCoinbaseMessagesResponse;
}

export namespace MsgRelayCoinbaseMessagesResponse {
  export type AsObject = {
  }
}

export class MsgRequestBandIBCRates extends jspb.Message {
  getSender(): string;
  setSender(value: string): void;

  getRequestId(): number;
  setRequestId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgRequestBandIBCRates.AsObject;
  static toObject(includeInstance: boolean, msg: MsgRequestBandIBCRates): MsgRequestBandIBCRates.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MsgRequestBandIBCRates, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgRequestBandIBCRates;
  static deserializeBinaryFromReader(message: MsgRequestBandIBCRates, reader: jspb.BinaryReader): MsgRequestBandIBCRates;
}

export namespace MsgRequestBandIBCRates {
  export type AsObject = {
    sender: string,
    requestId: number,
  }
}

export class MsgRequestBandIBCRatesResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgRequestBandIBCRatesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MsgRequestBandIBCRatesResponse): MsgRequestBandIBCRatesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MsgRequestBandIBCRatesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgRequestBandIBCRatesResponse;
  static deserializeBinaryFromReader(message: MsgRequestBandIBCRatesResponse, reader: jspb.BinaryReader): MsgRequestBandIBCRatesResponse;
}

export namespace MsgRequestBandIBCRatesResponse {
  export type AsObject = {
  }
}

