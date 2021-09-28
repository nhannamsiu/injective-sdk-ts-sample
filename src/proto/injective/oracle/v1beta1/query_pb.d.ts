// package: injective.oracle.v1beta1
// file: injective/oracle/v1beta1/query.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../google/api/annotations_pb";
import * as injective_oracle_v1beta1_oracle_pb from "../../../injective/oracle/v1beta1/oracle_pb";
import * as injective_oracle_v1beta1_genesis_pb from "../../../injective/oracle/v1beta1/genesis_pb";
import * as gogoproto_gogo_pb from "../../../gogoproto/gogo_pb";
import * as cosmos_base_v1beta1_coin_pb from "../../../cosmos/base/v1beta1/coin_pb";

export class QueryParamsRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryParamsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: QueryParamsRequest): QueryParamsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryParamsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryParamsRequest;
  static deserializeBinaryFromReader(message: QueryParamsRequest, reader: jspb.BinaryReader): QueryParamsRequest;
}

export namespace QueryParamsRequest {
  export type AsObject = {
  }
}

export class QueryParamsResponse extends jspb.Message {
  hasParams(): boolean;
  clearParams(): void;
  getParams(): injective_oracle_v1beta1_oracle_pb.Params | undefined;
  setParams(value?: injective_oracle_v1beta1_oracle_pb.Params): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryParamsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: QueryParamsResponse): QueryParamsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryParamsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryParamsResponse;
  static deserializeBinaryFromReader(message: QueryParamsResponse, reader: jspb.BinaryReader): QueryParamsResponse;
}

export namespace QueryParamsResponse {
  export type AsObject = {
    params?: injective_oracle_v1beta1_oracle_pb.Params.AsObject,
  }
}

export class QueryBandRelayersRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryBandRelayersRequest.AsObject;
  static toObject(includeInstance: boolean, msg: QueryBandRelayersRequest): QueryBandRelayersRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryBandRelayersRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryBandRelayersRequest;
  static deserializeBinaryFromReader(message: QueryBandRelayersRequest, reader: jspb.BinaryReader): QueryBandRelayersRequest;
}

export namespace QueryBandRelayersRequest {
  export type AsObject = {
  }
}

export class QueryBandRelayersResponse extends jspb.Message {
  clearRelayersList(): void;
  getRelayersList(): Array<string>;
  setRelayersList(value: Array<string>): void;
  addRelayers(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryBandRelayersResponse.AsObject;
  static toObject(includeInstance: boolean, msg: QueryBandRelayersResponse): QueryBandRelayersResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryBandRelayersResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryBandRelayersResponse;
  static deserializeBinaryFromReader(message: QueryBandRelayersResponse, reader: jspb.BinaryReader): QueryBandRelayersResponse;
}

export namespace QueryBandRelayersResponse {
  export type AsObject = {
    relayersList: Array<string>,
  }
}

export class QueryBandPriceStatesRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryBandPriceStatesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: QueryBandPriceStatesRequest): QueryBandPriceStatesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryBandPriceStatesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryBandPriceStatesRequest;
  static deserializeBinaryFromReader(message: QueryBandPriceStatesRequest, reader: jspb.BinaryReader): QueryBandPriceStatesRequest;
}

export namespace QueryBandPriceStatesRequest {
  export type AsObject = {
  }
}

export class QueryBandPriceStatesResponse extends jspb.Message {
  clearPriceStatesList(): void;
  getPriceStatesList(): Array<injective_oracle_v1beta1_oracle_pb.BandPriceState>;
  setPriceStatesList(value: Array<injective_oracle_v1beta1_oracle_pb.BandPriceState>): void;
  addPriceStates(value?: injective_oracle_v1beta1_oracle_pb.BandPriceState, index?: number): injective_oracle_v1beta1_oracle_pb.BandPriceState;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryBandPriceStatesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: QueryBandPriceStatesResponse): QueryBandPriceStatesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryBandPriceStatesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryBandPriceStatesResponse;
  static deserializeBinaryFromReader(message: QueryBandPriceStatesResponse, reader: jspb.BinaryReader): QueryBandPriceStatesResponse;
}

export namespace QueryBandPriceStatesResponse {
  export type AsObject = {
    priceStatesList: Array<injective_oracle_v1beta1_oracle_pb.BandPriceState.AsObject>,
  }
}

export class QueryBandIBCPriceStatesRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryBandIBCPriceStatesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: QueryBandIBCPriceStatesRequest): QueryBandIBCPriceStatesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryBandIBCPriceStatesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryBandIBCPriceStatesRequest;
  static deserializeBinaryFromReader(message: QueryBandIBCPriceStatesRequest, reader: jspb.BinaryReader): QueryBandIBCPriceStatesRequest;
}

export namespace QueryBandIBCPriceStatesRequest {
  export type AsObject = {
  }
}

export class QueryBandIBCPriceStatesResponse extends jspb.Message {
  clearPriceStatesList(): void;
  getPriceStatesList(): Array<injective_oracle_v1beta1_oracle_pb.BandPriceState>;
  setPriceStatesList(value: Array<injective_oracle_v1beta1_oracle_pb.BandPriceState>): void;
  addPriceStates(value?: injective_oracle_v1beta1_oracle_pb.BandPriceState, index?: number): injective_oracle_v1beta1_oracle_pb.BandPriceState;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryBandIBCPriceStatesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: QueryBandIBCPriceStatesResponse): QueryBandIBCPriceStatesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryBandIBCPriceStatesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryBandIBCPriceStatesResponse;
  static deserializeBinaryFromReader(message: QueryBandIBCPriceStatesResponse, reader: jspb.BinaryReader): QueryBandIBCPriceStatesResponse;
}

export namespace QueryBandIBCPriceStatesResponse {
  export type AsObject = {
    priceStatesList: Array<injective_oracle_v1beta1_oracle_pb.BandPriceState.AsObject>,
  }
}

export class QueryPriceFeedPriceStatesRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryPriceFeedPriceStatesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: QueryPriceFeedPriceStatesRequest): QueryPriceFeedPriceStatesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryPriceFeedPriceStatesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryPriceFeedPriceStatesRequest;
  static deserializeBinaryFromReader(message: QueryPriceFeedPriceStatesRequest, reader: jspb.BinaryReader): QueryPriceFeedPriceStatesRequest;
}

export namespace QueryPriceFeedPriceStatesRequest {
  export type AsObject = {
  }
}

export class QueryPriceFeedPriceStatesResponse extends jspb.Message {
  clearPriceStatesList(): void;
  getPriceStatesList(): Array<injective_oracle_v1beta1_oracle_pb.PriceFeedState>;
  setPriceStatesList(value: Array<injective_oracle_v1beta1_oracle_pb.PriceFeedState>): void;
  addPriceStates(value?: injective_oracle_v1beta1_oracle_pb.PriceFeedState, index?: number): injective_oracle_v1beta1_oracle_pb.PriceFeedState;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryPriceFeedPriceStatesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: QueryPriceFeedPriceStatesResponse): QueryPriceFeedPriceStatesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryPriceFeedPriceStatesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryPriceFeedPriceStatesResponse;
  static deserializeBinaryFromReader(message: QueryPriceFeedPriceStatesResponse, reader: jspb.BinaryReader): QueryPriceFeedPriceStatesResponse;
}

export namespace QueryPriceFeedPriceStatesResponse {
  export type AsObject = {
    priceStatesList: Array<injective_oracle_v1beta1_oracle_pb.PriceFeedState.AsObject>,
  }
}

export class QueryCoinbasePriceStatesRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryCoinbasePriceStatesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: QueryCoinbasePriceStatesRequest): QueryCoinbasePriceStatesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryCoinbasePriceStatesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryCoinbasePriceStatesRequest;
  static deserializeBinaryFromReader(message: QueryCoinbasePriceStatesRequest, reader: jspb.BinaryReader): QueryCoinbasePriceStatesRequest;
}

export namespace QueryCoinbasePriceStatesRequest {
  export type AsObject = {
  }
}

export class QueryCoinbasePriceStatesResponse extends jspb.Message {
  clearPriceStatesList(): void;
  getPriceStatesList(): Array<injective_oracle_v1beta1_oracle_pb.CoinbasePriceState>;
  setPriceStatesList(value: Array<injective_oracle_v1beta1_oracle_pb.CoinbasePriceState>): void;
  addPriceStates(value?: injective_oracle_v1beta1_oracle_pb.CoinbasePriceState, index?: number): injective_oracle_v1beta1_oracle_pb.CoinbasePriceState;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryCoinbasePriceStatesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: QueryCoinbasePriceStatesResponse): QueryCoinbasePriceStatesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryCoinbasePriceStatesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryCoinbasePriceStatesResponse;
  static deserializeBinaryFromReader(message: QueryCoinbasePriceStatesResponse, reader: jspb.BinaryReader): QueryCoinbasePriceStatesResponse;
}

export namespace QueryCoinbasePriceStatesResponse {
  export type AsObject = {
    priceStatesList: Array<injective_oracle_v1beta1_oracle_pb.CoinbasePriceState.AsObject>,
  }
}

export class QueryModuleStateRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryModuleStateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: QueryModuleStateRequest): QueryModuleStateRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryModuleStateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryModuleStateRequest;
  static deserializeBinaryFromReader(message: QueryModuleStateRequest, reader: jspb.BinaryReader): QueryModuleStateRequest;
}

export namespace QueryModuleStateRequest {
  export type AsObject = {
  }
}

export class QueryModuleStateResponse extends jspb.Message {
  hasState(): boolean;
  clearState(): void;
  getState(): injective_oracle_v1beta1_genesis_pb.GenesisState | undefined;
  setState(value?: injective_oracle_v1beta1_genesis_pb.GenesisState): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryModuleStateResponse.AsObject;
  static toObject(includeInstance: boolean, msg: QueryModuleStateResponse): QueryModuleStateResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryModuleStateResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryModuleStateResponse;
  static deserializeBinaryFromReader(message: QueryModuleStateResponse, reader: jspb.BinaryReader): QueryModuleStateResponse;
}

export namespace QueryModuleStateResponse {
  export type AsObject = {
    state?: injective_oracle_v1beta1_genesis_pb.GenesisState.AsObject,
  }
}

