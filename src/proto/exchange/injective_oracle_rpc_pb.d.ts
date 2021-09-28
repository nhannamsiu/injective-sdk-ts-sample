// package: injective_oracle_rpc
// file: exchange/injective_oracle_rpc.proto

import * as jspb from "google-protobuf";

export class OracleListRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OracleListRequest.AsObject;
  static toObject(includeInstance: boolean, msg: OracleListRequest): OracleListRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OracleListRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OracleListRequest;
  static deserializeBinaryFromReader(message: OracleListRequest, reader: jspb.BinaryReader): OracleListRequest;
}

export namespace OracleListRequest {
  export type AsObject = {
  }
}

export class OracleListResponse extends jspb.Message {
  clearOraclesList(): void;
  getOraclesList(): Array<Oracle>;
  setOraclesList(value: Array<Oracle>): void;
  addOracles(value?: Oracle, index?: number): Oracle;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OracleListResponse.AsObject;
  static toObject(includeInstance: boolean, msg: OracleListResponse): OracleListResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OracleListResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OracleListResponse;
  static deserializeBinaryFromReader(message: OracleListResponse, reader: jspb.BinaryReader): OracleListResponse;
}

export namespace OracleListResponse {
  export type AsObject = {
    oraclesList: Array<Oracle.AsObject>,
  }
}

export class Oracle extends jspb.Message {
  getSymbol(): string;
  setSymbol(value: string): void;

  getBaseSymbol(): string;
  setBaseSymbol(value: string): void;

  getQuoteSymbol(): string;
  setQuoteSymbol(value: string): void;

  getOracleType(): string;
  setOracleType(value: string): void;

  getPrice(): string;
  setPrice(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Oracle.AsObject;
  static toObject(includeInstance: boolean, msg: Oracle): Oracle.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Oracle, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Oracle;
  static deserializeBinaryFromReader(message: Oracle, reader: jspb.BinaryReader): Oracle;
}

export namespace Oracle {
  export type AsObject = {
    symbol: string,
    baseSymbol: string,
    quoteSymbol: string,
    oracleType: string,
    price: string,
  }
}

export class PriceRequest extends jspb.Message {
  getBaseSymbol(): string;
  setBaseSymbol(value: string): void;

  getQuoteSymbol(): string;
  setQuoteSymbol(value: string): void;

  getOracleType(): string;
  setOracleType(value: string): void;

  getOracleScaleFactor(): number;
  setOracleScaleFactor(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PriceRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PriceRequest): PriceRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PriceRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PriceRequest;
  static deserializeBinaryFromReader(message: PriceRequest, reader: jspb.BinaryReader): PriceRequest;
}

export namespace PriceRequest {
  export type AsObject = {
    baseSymbol: string,
    quoteSymbol: string,
    oracleType: string,
    oracleScaleFactor: number,
  }
}

export class PriceResponse extends jspb.Message {
  getPrice(): string;
  setPrice(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PriceResponse.AsObject;
  static toObject(includeInstance: boolean, msg: PriceResponse): PriceResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PriceResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PriceResponse;
  static deserializeBinaryFromReader(message: PriceResponse, reader: jspb.BinaryReader): PriceResponse;
}

export namespace PriceResponse {
  export type AsObject = {
    price: string,
  }
}

export class StreamPricesRequest extends jspb.Message {
  getBaseSymbol(): string;
  setBaseSymbol(value: string): void;

  getQuoteSymbol(): string;
  setQuoteSymbol(value: string): void;

  getOracleType(): string;
  setOracleType(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StreamPricesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: StreamPricesRequest): StreamPricesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StreamPricesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StreamPricesRequest;
  static deserializeBinaryFromReader(message: StreamPricesRequest, reader: jspb.BinaryReader): StreamPricesRequest;
}

export namespace StreamPricesRequest {
  export type AsObject = {
    baseSymbol: string,
    quoteSymbol: string,
    oracleType: string,
  }
}

export class StreamPricesResponse extends jspb.Message {
  getPrice(): string;
  setPrice(value: string): void;

  getTimestamp(): number;
  setTimestamp(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StreamPricesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: StreamPricesResponse): StreamPricesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StreamPricesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StreamPricesResponse;
  static deserializeBinaryFromReader(message: StreamPricesResponse, reader: jspb.BinaryReader): StreamPricesResponse;
}

export namespace StreamPricesResponse {
  export type AsObject = {
    price: string,
    timestamp: number,
  }
}

