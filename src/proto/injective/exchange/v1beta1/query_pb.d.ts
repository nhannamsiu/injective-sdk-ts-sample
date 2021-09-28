// package: injective.exchange.v1beta1
// file: injective/exchange/v1beta1/query.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../google/api/annotations_pb";
import * as injective_exchange_v1beta1_exchange_pb from "../../../injective/exchange/v1beta1/exchange_pb";
import * as injective_exchange_v1beta1_genesis_pb from "../../../injective/exchange/v1beta1/genesis_pb";
import * as gogoproto_gogo_pb from "../../../gogoproto/gogo_pb";

export class Subaccount extends jspb.Message {
  getTrader(): string;
  setTrader(value: string): void;

  getSubaccountNonce(): number;
  setSubaccountNonce(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Subaccount.AsObject;
  static toObject(includeInstance: boolean, msg: Subaccount): Subaccount.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Subaccount, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Subaccount;
  static deserializeBinaryFromReader(message: Subaccount, reader: jspb.BinaryReader): Subaccount;
}

export namespace Subaccount {
  export type AsObject = {
    trader: string,
    subaccountNonce: number,
  }
}

export class QueryExchangeParamsRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryExchangeParamsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: QueryExchangeParamsRequest): QueryExchangeParamsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryExchangeParamsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryExchangeParamsRequest;
  static deserializeBinaryFromReader(message: QueryExchangeParamsRequest, reader: jspb.BinaryReader): QueryExchangeParamsRequest;
}

export namespace QueryExchangeParamsRequest {
  export type AsObject = {
  }
}

export class QueryExchangeParamsResponse extends jspb.Message {
  hasParams(): boolean;
  clearParams(): void;
  getParams(): injective_exchange_v1beta1_exchange_pb.Params | undefined;
  setParams(value?: injective_exchange_v1beta1_exchange_pb.Params): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryExchangeParamsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: QueryExchangeParamsResponse): QueryExchangeParamsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryExchangeParamsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryExchangeParamsResponse;
  static deserializeBinaryFromReader(message: QueryExchangeParamsResponse, reader: jspb.BinaryReader): QueryExchangeParamsResponse;
}

export namespace QueryExchangeParamsResponse {
  export type AsObject = {
    params?: injective_exchange_v1beta1_exchange_pb.Params.AsObject,
  }
}

export class QuerySubaccountDepositsRequest extends jspb.Message {
  getSubaccountId(): string;
  setSubaccountId(value: string): void;

  hasSubaccount(): boolean;
  clearSubaccount(): void;
  getSubaccount(): Subaccount | undefined;
  setSubaccount(value?: Subaccount): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QuerySubaccountDepositsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: QuerySubaccountDepositsRequest): QuerySubaccountDepositsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QuerySubaccountDepositsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QuerySubaccountDepositsRequest;
  static deserializeBinaryFromReader(message: QuerySubaccountDepositsRequest, reader: jspb.BinaryReader): QuerySubaccountDepositsRequest;
}

export namespace QuerySubaccountDepositsRequest {
  export type AsObject = {
    subaccountId: string,
    subaccount?: Subaccount.AsObject,
  }
}

export class QuerySubaccountDepositsResponse extends jspb.Message {
  getDepositsMap(): jspb.Map<string, injective_exchange_v1beta1_exchange_pb.Deposit>;
  clearDepositsMap(): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QuerySubaccountDepositsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: QuerySubaccountDepositsResponse): QuerySubaccountDepositsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QuerySubaccountDepositsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QuerySubaccountDepositsResponse;
  static deserializeBinaryFromReader(message: QuerySubaccountDepositsResponse, reader: jspb.BinaryReader): QuerySubaccountDepositsResponse;
}

export namespace QuerySubaccountDepositsResponse {
  export type AsObject = {
    depositsMap: Array<[string, injective_exchange_v1beta1_exchange_pb.Deposit.AsObject]>,
  }
}

export class QueryExchangeBalancesRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryExchangeBalancesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: QueryExchangeBalancesRequest): QueryExchangeBalancesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryExchangeBalancesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryExchangeBalancesRequest;
  static deserializeBinaryFromReader(message: QueryExchangeBalancesRequest, reader: jspb.BinaryReader): QueryExchangeBalancesRequest;
}

export namespace QueryExchangeBalancesRequest {
  export type AsObject = {
  }
}

export class QueryExchangeBalancesResponse extends jspb.Message {
  clearBalancesList(): void;
  getBalancesList(): Array<injective_exchange_v1beta1_genesis_pb.Balance>;
  setBalancesList(value: Array<injective_exchange_v1beta1_genesis_pb.Balance>): void;
  addBalances(value?: injective_exchange_v1beta1_genesis_pb.Balance, index?: number): injective_exchange_v1beta1_genesis_pb.Balance;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryExchangeBalancesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: QueryExchangeBalancesResponse): QueryExchangeBalancesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryExchangeBalancesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryExchangeBalancesResponse;
  static deserializeBinaryFromReader(message: QueryExchangeBalancesResponse, reader: jspb.BinaryReader): QueryExchangeBalancesResponse;
}

export namespace QueryExchangeBalancesResponse {
  export type AsObject = {
    balancesList: Array<injective_exchange_v1beta1_genesis_pb.Balance.AsObject>,
  }
}

export class QuerySubaccountDepositRequest extends jspb.Message {
  getSubaccountId(): string;
  setSubaccountId(value: string): void;

  getDenom(): string;
  setDenom(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QuerySubaccountDepositRequest.AsObject;
  static toObject(includeInstance: boolean, msg: QuerySubaccountDepositRequest): QuerySubaccountDepositRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QuerySubaccountDepositRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QuerySubaccountDepositRequest;
  static deserializeBinaryFromReader(message: QuerySubaccountDepositRequest, reader: jspb.BinaryReader): QuerySubaccountDepositRequest;
}

export namespace QuerySubaccountDepositRequest {
  export type AsObject = {
    subaccountId: string,
    denom: string,
  }
}

export class QuerySubaccountDepositResponse extends jspb.Message {
  hasDeposits(): boolean;
  clearDeposits(): void;
  getDeposits(): injective_exchange_v1beta1_exchange_pb.Deposit | undefined;
  setDeposits(value?: injective_exchange_v1beta1_exchange_pb.Deposit): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QuerySubaccountDepositResponse.AsObject;
  static toObject(includeInstance: boolean, msg: QuerySubaccountDepositResponse): QuerySubaccountDepositResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QuerySubaccountDepositResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QuerySubaccountDepositResponse;
  static deserializeBinaryFromReader(message: QuerySubaccountDepositResponse, reader: jspb.BinaryReader): QuerySubaccountDepositResponse;
}

export namespace QuerySubaccountDepositResponse {
  export type AsObject = {
    deposits?: injective_exchange_v1beta1_exchange_pb.Deposit.AsObject,
  }
}

export class QuerySpotMarketsRequest extends jspb.Message {
  getStatus(): string;
  setStatus(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QuerySpotMarketsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: QuerySpotMarketsRequest): QuerySpotMarketsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QuerySpotMarketsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QuerySpotMarketsRequest;
  static deserializeBinaryFromReader(message: QuerySpotMarketsRequest, reader: jspb.BinaryReader): QuerySpotMarketsRequest;
}

export namespace QuerySpotMarketsRequest {
  export type AsObject = {
    status: string,
  }
}

export class QuerySpotMarketsResponse extends jspb.Message {
  clearMarketsList(): void;
  getMarketsList(): Array<injective_exchange_v1beta1_exchange_pb.SpotMarket>;
  setMarketsList(value: Array<injective_exchange_v1beta1_exchange_pb.SpotMarket>): void;
  addMarkets(value?: injective_exchange_v1beta1_exchange_pb.SpotMarket, index?: number): injective_exchange_v1beta1_exchange_pb.SpotMarket;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QuerySpotMarketsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: QuerySpotMarketsResponse): QuerySpotMarketsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QuerySpotMarketsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QuerySpotMarketsResponse;
  static deserializeBinaryFromReader(message: QuerySpotMarketsResponse, reader: jspb.BinaryReader): QuerySpotMarketsResponse;
}

export namespace QuerySpotMarketsResponse {
  export type AsObject = {
    marketsList: Array<injective_exchange_v1beta1_exchange_pb.SpotMarket.AsObject>,
  }
}

export class QuerySpotMarketRequest extends jspb.Message {
  getMarketId(): string;
  setMarketId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QuerySpotMarketRequest.AsObject;
  static toObject(includeInstance: boolean, msg: QuerySpotMarketRequest): QuerySpotMarketRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QuerySpotMarketRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QuerySpotMarketRequest;
  static deserializeBinaryFromReader(message: QuerySpotMarketRequest, reader: jspb.BinaryReader): QuerySpotMarketRequest;
}

export namespace QuerySpotMarketRequest {
  export type AsObject = {
    marketId: string,
  }
}

export class QuerySpotMarketResponse extends jspb.Message {
  hasMarket(): boolean;
  clearMarket(): void;
  getMarket(): injective_exchange_v1beta1_exchange_pb.SpotMarket | undefined;
  setMarket(value?: injective_exchange_v1beta1_exchange_pb.SpotMarket): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QuerySpotMarketResponse.AsObject;
  static toObject(includeInstance: boolean, msg: QuerySpotMarketResponse): QuerySpotMarketResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QuerySpotMarketResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QuerySpotMarketResponse;
  static deserializeBinaryFromReader(message: QuerySpotMarketResponse, reader: jspb.BinaryReader): QuerySpotMarketResponse;
}

export namespace QuerySpotMarketResponse {
  export type AsObject = {
    market?: injective_exchange_v1beta1_exchange_pb.SpotMarket.AsObject,
  }
}

export class QuerySpotOrderbookRequest extends jspb.Message {
  getMarketId(): string;
  setMarketId(value: string): void;

  getLimit(): number;
  setLimit(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QuerySpotOrderbookRequest.AsObject;
  static toObject(includeInstance: boolean, msg: QuerySpotOrderbookRequest): QuerySpotOrderbookRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QuerySpotOrderbookRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QuerySpotOrderbookRequest;
  static deserializeBinaryFromReader(message: QuerySpotOrderbookRequest, reader: jspb.BinaryReader): QuerySpotOrderbookRequest;
}

export namespace QuerySpotOrderbookRequest {
  export type AsObject = {
    marketId: string,
    limit: number,
  }
}

export class QuerySpotOrderbookResponse extends jspb.Message {
  clearBuysPriceLevelList(): void;
  getBuysPriceLevelList(): Array<PriceLevel>;
  setBuysPriceLevelList(value: Array<PriceLevel>): void;
  addBuysPriceLevel(value?: PriceLevel, index?: number): PriceLevel;

  clearSellsPriceLevelList(): void;
  getSellsPriceLevelList(): Array<PriceLevel>;
  setSellsPriceLevelList(value: Array<PriceLevel>): void;
  addSellsPriceLevel(value?: PriceLevel, index?: number): PriceLevel;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QuerySpotOrderbookResponse.AsObject;
  static toObject(includeInstance: boolean, msg: QuerySpotOrderbookResponse): QuerySpotOrderbookResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QuerySpotOrderbookResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QuerySpotOrderbookResponse;
  static deserializeBinaryFromReader(message: QuerySpotOrderbookResponse, reader: jspb.BinaryReader): QuerySpotOrderbookResponse;
}

export namespace QuerySpotOrderbookResponse {
  export type AsObject = {
    buysPriceLevelList: Array<PriceLevel.AsObject>,
    sellsPriceLevelList: Array<PriceLevel.AsObject>,
  }
}

export class QueryTraderSpotOrdersRequest extends jspb.Message {
  getMarketId(): string;
  setMarketId(value: string): void;

  getSubaccountId(): string;
  setSubaccountId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryTraderSpotOrdersRequest.AsObject;
  static toObject(includeInstance: boolean, msg: QueryTraderSpotOrdersRequest): QueryTraderSpotOrdersRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryTraderSpotOrdersRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryTraderSpotOrdersRequest;
  static deserializeBinaryFromReader(message: QueryTraderSpotOrdersRequest, reader: jspb.BinaryReader): QueryTraderSpotOrdersRequest;
}

export namespace QueryTraderSpotOrdersRequest {
  export type AsObject = {
    marketId: string,
    subaccountId: string,
  }
}

export class TrimmedSpotLimitOrder extends jspb.Message {
  getPrice(): string;
  setPrice(value: string): void;

  getQuantity(): string;
  setQuantity(value: string): void;

  getFillable(): string;
  setFillable(value: string): void;

  getIsbuy(): boolean;
  setIsbuy(value: boolean): void;

  getOrderHash(): string;
  setOrderHash(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TrimmedSpotLimitOrder.AsObject;
  static toObject(includeInstance: boolean, msg: TrimmedSpotLimitOrder): TrimmedSpotLimitOrder.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TrimmedSpotLimitOrder, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TrimmedSpotLimitOrder;
  static deserializeBinaryFromReader(message: TrimmedSpotLimitOrder, reader: jspb.BinaryReader): TrimmedSpotLimitOrder;
}

export namespace TrimmedSpotLimitOrder {
  export type AsObject = {
    price: string,
    quantity: string,
    fillable: string,
    isbuy: boolean,
    orderHash: string,
  }
}

export class QueryTraderSpotOrdersResponse extends jspb.Message {
  clearOrdersList(): void;
  getOrdersList(): Array<TrimmedSpotLimitOrder>;
  setOrdersList(value: Array<TrimmedSpotLimitOrder>): void;
  addOrders(value?: TrimmedSpotLimitOrder, index?: number): TrimmedSpotLimitOrder;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryTraderSpotOrdersResponse.AsObject;
  static toObject(includeInstance: boolean, msg: QueryTraderSpotOrdersResponse): QueryTraderSpotOrdersResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryTraderSpotOrdersResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryTraderSpotOrdersResponse;
  static deserializeBinaryFromReader(message: QueryTraderSpotOrdersResponse, reader: jspb.BinaryReader): QueryTraderSpotOrdersResponse;
}

export namespace QueryTraderSpotOrdersResponse {
  export type AsObject = {
    ordersList: Array<TrimmedSpotLimitOrder.AsObject>,
  }
}

export class QueryDerivativeOrderbookRequest extends jspb.Message {
  getMarketId(): string;
  setMarketId(value: string): void;

  getLimit(): number;
  setLimit(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryDerivativeOrderbookRequest.AsObject;
  static toObject(includeInstance: boolean, msg: QueryDerivativeOrderbookRequest): QueryDerivativeOrderbookRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryDerivativeOrderbookRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryDerivativeOrderbookRequest;
  static deserializeBinaryFromReader(message: QueryDerivativeOrderbookRequest, reader: jspb.BinaryReader): QueryDerivativeOrderbookRequest;
}

export namespace QueryDerivativeOrderbookRequest {
  export type AsObject = {
    marketId: string,
    limit: number,
  }
}

export class QueryDerivativeOrderbookResponse extends jspb.Message {
  clearBuysPriceLevelList(): void;
  getBuysPriceLevelList(): Array<PriceLevel>;
  setBuysPriceLevelList(value: Array<PriceLevel>): void;
  addBuysPriceLevel(value?: PriceLevel, index?: number): PriceLevel;

  clearSellsPriceLevelList(): void;
  getSellsPriceLevelList(): Array<PriceLevel>;
  setSellsPriceLevelList(value: Array<PriceLevel>): void;
  addSellsPriceLevel(value?: PriceLevel, index?: number): PriceLevel;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryDerivativeOrderbookResponse.AsObject;
  static toObject(includeInstance: boolean, msg: QueryDerivativeOrderbookResponse): QueryDerivativeOrderbookResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryDerivativeOrderbookResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryDerivativeOrderbookResponse;
  static deserializeBinaryFromReader(message: QueryDerivativeOrderbookResponse, reader: jspb.BinaryReader): QueryDerivativeOrderbookResponse;
}

export namespace QueryDerivativeOrderbookResponse {
  export type AsObject = {
    buysPriceLevelList: Array<PriceLevel.AsObject>,
    sellsPriceLevelList: Array<PriceLevel.AsObject>,
  }
}

export class QueryTraderDerivativeOrdersRequest extends jspb.Message {
  getMarketId(): string;
  setMarketId(value: string): void;

  getSubaccountId(): string;
  setSubaccountId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryTraderDerivativeOrdersRequest.AsObject;
  static toObject(includeInstance: boolean, msg: QueryTraderDerivativeOrdersRequest): QueryTraderDerivativeOrdersRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryTraderDerivativeOrdersRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryTraderDerivativeOrdersRequest;
  static deserializeBinaryFromReader(message: QueryTraderDerivativeOrdersRequest, reader: jspb.BinaryReader): QueryTraderDerivativeOrdersRequest;
}

export namespace QueryTraderDerivativeOrdersRequest {
  export type AsObject = {
    marketId: string,
    subaccountId: string,
  }
}

export class TrimmedDerivativeLimitOrder extends jspb.Message {
  getPrice(): string;
  setPrice(value: string): void;

  getQuantity(): string;
  setQuantity(value: string): void;

  getMargin(): string;
  setMargin(value: string): void;

  getFillable(): string;
  setFillable(value: string): void;

  getIsbuy(): boolean;
  setIsbuy(value: boolean): void;

  getOrderHash(): string;
  setOrderHash(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TrimmedDerivativeLimitOrder.AsObject;
  static toObject(includeInstance: boolean, msg: TrimmedDerivativeLimitOrder): TrimmedDerivativeLimitOrder.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TrimmedDerivativeLimitOrder, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TrimmedDerivativeLimitOrder;
  static deserializeBinaryFromReader(message: TrimmedDerivativeLimitOrder, reader: jspb.BinaryReader): TrimmedDerivativeLimitOrder;
}

export namespace TrimmedDerivativeLimitOrder {
  export type AsObject = {
    price: string,
    quantity: string,
    margin: string,
    fillable: string,
    isbuy: boolean,
    orderHash: string,
  }
}

export class QueryTraderDerivativeOrdersResponse extends jspb.Message {
  clearOrdersList(): void;
  getOrdersList(): Array<TrimmedDerivativeLimitOrder>;
  setOrdersList(value: Array<TrimmedDerivativeLimitOrder>): void;
  addOrders(value?: TrimmedDerivativeLimitOrder, index?: number): TrimmedDerivativeLimitOrder;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryTraderDerivativeOrdersResponse.AsObject;
  static toObject(includeInstance: boolean, msg: QueryTraderDerivativeOrdersResponse): QueryTraderDerivativeOrdersResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryTraderDerivativeOrdersResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryTraderDerivativeOrdersResponse;
  static deserializeBinaryFromReader(message: QueryTraderDerivativeOrdersResponse, reader: jspb.BinaryReader): QueryTraderDerivativeOrdersResponse;
}

export namespace QueryTraderDerivativeOrdersResponse {
  export type AsObject = {
    ordersList: Array<TrimmedDerivativeLimitOrder.AsObject>,
  }
}

export class QueryDerivativeMarketsRequest extends jspb.Message {
  getStatus(): string;
  setStatus(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryDerivativeMarketsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: QueryDerivativeMarketsRequest): QueryDerivativeMarketsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryDerivativeMarketsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryDerivativeMarketsRequest;
  static deserializeBinaryFromReader(message: QueryDerivativeMarketsRequest, reader: jspb.BinaryReader): QueryDerivativeMarketsRequest;
}

export namespace QueryDerivativeMarketsRequest {
  export type AsObject = {
    status: string,
  }
}

export class PriceLevel extends jspb.Message {
  getPrice(): string;
  setPrice(value: string): void;

  getQuantity(): string;
  setQuantity(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PriceLevel.AsObject;
  static toObject(includeInstance: boolean, msg: PriceLevel): PriceLevel.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PriceLevel, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PriceLevel;
  static deserializeBinaryFromReader(message: PriceLevel, reader: jspb.BinaryReader): PriceLevel;
}

export namespace PriceLevel {
  export type AsObject = {
    price: string,
    quantity: string,
  }
}

export class PerpetualMarketState extends jspb.Message {
  hasMarketInfo(): boolean;
  clearMarketInfo(): void;
  getMarketInfo(): injective_exchange_v1beta1_exchange_pb.PerpetualMarketInfo | undefined;
  setMarketInfo(value?: injective_exchange_v1beta1_exchange_pb.PerpetualMarketInfo): void;

  hasFundingInfo(): boolean;
  clearFundingInfo(): void;
  getFundingInfo(): injective_exchange_v1beta1_exchange_pb.PerpetualMarketFunding | undefined;
  setFundingInfo(value?: injective_exchange_v1beta1_exchange_pb.PerpetualMarketFunding): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PerpetualMarketState.AsObject;
  static toObject(includeInstance: boolean, msg: PerpetualMarketState): PerpetualMarketState.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PerpetualMarketState, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PerpetualMarketState;
  static deserializeBinaryFromReader(message: PerpetualMarketState, reader: jspb.BinaryReader): PerpetualMarketState;
}

export namespace PerpetualMarketState {
  export type AsObject = {
    marketInfo?: injective_exchange_v1beta1_exchange_pb.PerpetualMarketInfo.AsObject,
    fundingInfo?: injective_exchange_v1beta1_exchange_pb.PerpetualMarketFunding.AsObject,
  }
}

export class FullDerivativeMarket extends jspb.Message {
  hasMarket(): boolean;
  clearMarket(): void;
  getMarket(): injective_exchange_v1beta1_exchange_pb.DerivativeMarket | undefined;
  setMarket(value?: injective_exchange_v1beta1_exchange_pb.DerivativeMarket): void;

  hasPerpetualInfo(): boolean;
  clearPerpetualInfo(): void;
  getPerpetualInfo(): PerpetualMarketState | undefined;
  setPerpetualInfo(value?: PerpetualMarketState): void;

  hasFuturesInfo(): boolean;
  clearFuturesInfo(): void;
  getFuturesInfo(): injective_exchange_v1beta1_exchange_pb.ExpiryFuturesMarketInfo | undefined;
  setFuturesInfo(value?: injective_exchange_v1beta1_exchange_pb.ExpiryFuturesMarketInfo): void;

  getMarkPrice(): string;
  setMarkPrice(value: string): void;

  getInfoCase(): FullDerivativeMarket.InfoCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FullDerivativeMarket.AsObject;
  static toObject(includeInstance: boolean, msg: FullDerivativeMarket): FullDerivativeMarket.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FullDerivativeMarket, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FullDerivativeMarket;
  static deserializeBinaryFromReader(message: FullDerivativeMarket, reader: jspb.BinaryReader): FullDerivativeMarket;
}

export namespace FullDerivativeMarket {
  export type AsObject = {
    market?: injective_exchange_v1beta1_exchange_pb.DerivativeMarket.AsObject,
    perpetualInfo?: PerpetualMarketState.AsObject,
    futuresInfo?: injective_exchange_v1beta1_exchange_pb.ExpiryFuturesMarketInfo.AsObject,
    markPrice: string,
  }

  export enum InfoCase {
    INFO_NOT_SET = 0,
    PERPETUAL_INFO = 2,
    FUTURES_INFO = 3,
  }
}

export class QueryDerivativeMarketsResponse extends jspb.Message {
  clearMarketsList(): void;
  getMarketsList(): Array<FullDerivativeMarket>;
  setMarketsList(value: Array<FullDerivativeMarket>): void;
  addMarkets(value?: FullDerivativeMarket, index?: number): FullDerivativeMarket;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryDerivativeMarketsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: QueryDerivativeMarketsResponse): QueryDerivativeMarketsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryDerivativeMarketsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryDerivativeMarketsResponse;
  static deserializeBinaryFromReader(message: QueryDerivativeMarketsResponse, reader: jspb.BinaryReader): QueryDerivativeMarketsResponse;
}

export namespace QueryDerivativeMarketsResponse {
  export type AsObject = {
    marketsList: Array<FullDerivativeMarket.AsObject>,
  }
}

export class QueryDerivativeMarketRequest extends jspb.Message {
  getMarketId(): string;
  setMarketId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryDerivativeMarketRequest.AsObject;
  static toObject(includeInstance: boolean, msg: QueryDerivativeMarketRequest): QueryDerivativeMarketRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryDerivativeMarketRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryDerivativeMarketRequest;
  static deserializeBinaryFromReader(message: QueryDerivativeMarketRequest, reader: jspb.BinaryReader): QueryDerivativeMarketRequest;
}

export namespace QueryDerivativeMarketRequest {
  export type AsObject = {
    marketId: string,
  }
}

export class QueryDerivativeMarketResponse extends jspb.Message {
  hasMarket(): boolean;
  clearMarket(): void;
  getMarket(): FullDerivativeMarket | undefined;
  setMarket(value?: FullDerivativeMarket): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryDerivativeMarketResponse.AsObject;
  static toObject(includeInstance: boolean, msg: QueryDerivativeMarketResponse): QueryDerivativeMarketResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryDerivativeMarketResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryDerivativeMarketResponse;
  static deserializeBinaryFromReader(message: QueryDerivativeMarketResponse, reader: jspb.BinaryReader): QueryDerivativeMarketResponse;
}

export namespace QueryDerivativeMarketResponse {
  export type AsObject = {
    market?: FullDerivativeMarket.AsObject,
  }
}

export class QuerySubaccountTradeNonceRequest extends jspb.Message {
  getSubaccountId(): string;
  setSubaccountId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QuerySubaccountTradeNonceRequest.AsObject;
  static toObject(includeInstance: boolean, msg: QuerySubaccountTradeNonceRequest): QuerySubaccountTradeNonceRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QuerySubaccountTradeNonceRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QuerySubaccountTradeNonceRequest;
  static deserializeBinaryFromReader(message: QuerySubaccountTradeNonceRequest, reader: jspb.BinaryReader): QuerySubaccountTradeNonceRequest;
}

export namespace QuerySubaccountTradeNonceRequest {
  export type AsObject = {
    subaccountId: string,
  }
}

export class QuerySubaccountTradeNonceResponse extends jspb.Message {
  getNonce(): number;
  setNonce(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QuerySubaccountTradeNonceResponse.AsObject;
  static toObject(includeInstance: boolean, msg: QuerySubaccountTradeNonceResponse): QuerySubaccountTradeNonceResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QuerySubaccountTradeNonceResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QuerySubaccountTradeNonceResponse;
  static deserializeBinaryFromReader(message: QuerySubaccountTradeNonceResponse, reader: jspb.BinaryReader): QuerySubaccountTradeNonceResponse;
}

export namespace QuerySubaccountTradeNonceResponse {
  export type AsObject = {
    nonce: number,
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
  getState(): injective_exchange_v1beta1_genesis_pb.GenesisState | undefined;
  setState(value?: injective_exchange_v1beta1_genesis_pb.GenesisState): void;

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
    state?: injective_exchange_v1beta1_genesis_pb.GenesisState.AsObject,
  }
}

export class QueryPositionsRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryPositionsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: QueryPositionsRequest): QueryPositionsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryPositionsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryPositionsRequest;
  static deserializeBinaryFromReader(message: QueryPositionsRequest, reader: jspb.BinaryReader): QueryPositionsRequest;
}

export namespace QueryPositionsRequest {
  export type AsObject = {
  }
}

export class QueryLiquidityMiningPointsRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryLiquidityMiningPointsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: QueryLiquidityMiningPointsRequest): QueryLiquidityMiningPointsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryLiquidityMiningPointsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryLiquidityMiningPointsRequest;
  static deserializeBinaryFromReader(message: QueryLiquidityMiningPointsRequest, reader: jspb.BinaryReader): QueryLiquidityMiningPointsRequest;
}

export namespace QueryLiquidityMiningPointsRequest {
  export type AsObject = {
  }
}

export class QueryPositionsResponse extends jspb.Message {
  clearStateList(): void;
  getStateList(): Array<injective_exchange_v1beta1_genesis_pb.DerivativePosition>;
  setStateList(value: Array<injective_exchange_v1beta1_genesis_pb.DerivativePosition>): void;
  addState(value?: injective_exchange_v1beta1_genesis_pb.DerivativePosition, index?: number): injective_exchange_v1beta1_genesis_pb.DerivativePosition;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryPositionsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: QueryPositionsResponse): QueryPositionsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryPositionsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryPositionsResponse;
  static deserializeBinaryFromReader(message: QueryPositionsResponse, reader: jspb.BinaryReader): QueryPositionsResponse;
}

export namespace QueryPositionsResponse {
  export type AsObject = {
    stateList: Array<injective_exchange_v1beta1_genesis_pb.DerivativePosition.AsObject>,
  }
}

export class QueryLiquidityMiningPointsResponse extends jspb.Message {
  getTotalLiquidityMiningPoints(): string;
  setTotalLiquidityMiningPoints(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryLiquidityMiningPointsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: QueryLiquidityMiningPointsResponse): QueryLiquidityMiningPointsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryLiquidityMiningPointsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryLiquidityMiningPointsResponse;
  static deserializeBinaryFromReader(message: QueryLiquidityMiningPointsResponse, reader: jspb.BinaryReader): QueryLiquidityMiningPointsResponse;
}

export namespace QueryLiquidityMiningPointsResponse {
  export type AsObject = {
    totalLiquidityMiningPoints: string,
  }
}

