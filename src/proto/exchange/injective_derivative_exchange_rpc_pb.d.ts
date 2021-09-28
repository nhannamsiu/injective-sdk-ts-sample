// package: injective_derivative_exchange_rpc
// file: exchange/injective_derivative_exchange_rpc.proto

import * as jspb from "google-protobuf";

export class MarketsRequest extends jspb.Message {
  getMarketStatus(): string;
  setMarketStatus(value: string): void;

  getQuoteDenom(): string;
  setQuoteDenom(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MarketsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: MarketsRequest): MarketsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MarketsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MarketsRequest;
  static deserializeBinaryFromReader(message: MarketsRequest, reader: jspb.BinaryReader): MarketsRequest;
}

export namespace MarketsRequest {
  export type AsObject = {
    marketStatus: string,
    quoteDenom: string,
  }
}

export class MarketsResponse extends jspb.Message {
  clearMarketsList(): void;
  getMarketsList(): Array<DerivativeMarketInfo>;
  setMarketsList(value: Array<DerivativeMarketInfo>): void;
  addMarkets(value?: DerivativeMarketInfo, index?: number): DerivativeMarketInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MarketsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MarketsResponse): MarketsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MarketsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MarketsResponse;
  static deserializeBinaryFromReader(message: MarketsResponse, reader: jspb.BinaryReader): MarketsResponse;
}

export namespace MarketsResponse {
  export type AsObject = {
    marketsList: Array<DerivativeMarketInfo.AsObject>,
  }
}

export class DerivativeMarketInfo extends jspb.Message {
  getMarketId(): string;
  setMarketId(value: string): void;

  getMarketStatus(): string;
  setMarketStatus(value: string): void;

  getTicker(): string;
  setTicker(value: string): void;

  getOracleBase(): string;
  setOracleBase(value: string): void;

  getOracleQuote(): string;
  setOracleQuote(value: string): void;

  getOracleType(): string;
  setOracleType(value: string): void;

  getOracleScaleFactor(): number;
  setOracleScaleFactor(value: number): void;

  getInitialMarginRatio(): string;
  setInitialMarginRatio(value: string): void;

  getMaintenanceMarginRatio(): string;
  setMaintenanceMarginRatio(value: string): void;

  getQuoteDenom(): string;
  setQuoteDenom(value: string): void;

  hasQuoteTokenMeta(): boolean;
  clearQuoteTokenMeta(): void;
  getQuoteTokenMeta(): TokenMeta | undefined;
  setQuoteTokenMeta(value?: TokenMeta): void;

  getMakerFeeRate(): string;
  setMakerFeeRate(value: string): void;

  getTakerFeeRate(): string;
  setTakerFeeRate(value: string): void;

  getServiceProviderFee(): string;
  setServiceProviderFee(value: string): void;

  getIsPerpetual(): boolean;
  setIsPerpetual(value: boolean): void;

  getMinPriceTickSize(): string;
  setMinPriceTickSize(value: string): void;

  getMinQuantityTickSize(): string;
  setMinQuantityTickSize(value: string): void;

  hasPerpetualMarketInfo(): boolean;
  clearPerpetualMarketInfo(): void;
  getPerpetualMarketInfo(): PerpetualMarketInfo | undefined;
  setPerpetualMarketInfo(value?: PerpetualMarketInfo): void;

  hasPerpetualMarketFunding(): boolean;
  clearPerpetualMarketFunding(): void;
  getPerpetualMarketFunding(): PerpetualMarketFunding | undefined;
  setPerpetualMarketFunding(value?: PerpetualMarketFunding): void;

  hasExpiryFuturesMarketInfo(): boolean;
  clearExpiryFuturesMarketInfo(): void;
  getExpiryFuturesMarketInfo(): ExpiryFuturesMarketInfo | undefined;
  setExpiryFuturesMarketInfo(value?: ExpiryFuturesMarketInfo): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DerivativeMarketInfo.AsObject;
  static toObject(includeInstance: boolean, msg: DerivativeMarketInfo): DerivativeMarketInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DerivativeMarketInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DerivativeMarketInfo;
  static deserializeBinaryFromReader(message: DerivativeMarketInfo, reader: jspb.BinaryReader): DerivativeMarketInfo;
}

export namespace DerivativeMarketInfo {
  export type AsObject = {
    marketId: string,
    marketStatus: string,
    ticker: string,
    oracleBase: string,
    oracleQuote: string,
    oracleType: string,
    oracleScaleFactor: number,
    initialMarginRatio: string,
    maintenanceMarginRatio: string,
    quoteDenom: string,
    quoteTokenMeta?: TokenMeta.AsObject,
    makerFeeRate: string,
    takerFeeRate: string,
    serviceProviderFee: string,
    isPerpetual: boolean,
    minPriceTickSize: string,
    minQuantityTickSize: string,
    perpetualMarketInfo?: PerpetualMarketInfo.AsObject,
    perpetualMarketFunding?: PerpetualMarketFunding.AsObject,
    expiryFuturesMarketInfo?: ExpiryFuturesMarketInfo.AsObject,
  }
}

export class TokenMeta extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getAddress(): string;
  setAddress(value: string): void;

  getSymbol(): string;
  setSymbol(value: string): void;

  getLogo(): string;
  setLogo(value: string): void;

  getDecimals(): number;
  setDecimals(value: number): void;

  getUpdatedAt(): number;
  setUpdatedAt(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TokenMeta.AsObject;
  static toObject(includeInstance: boolean, msg: TokenMeta): TokenMeta.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TokenMeta, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TokenMeta;
  static deserializeBinaryFromReader(message: TokenMeta, reader: jspb.BinaryReader): TokenMeta;
}

export namespace TokenMeta {
  export type AsObject = {
    name: string,
    address: string,
    symbol: string,
    logo: string,
    decimals: number,
    updatedAt: number,
  }
}

export class PerpetualMarketInfo extends jspb.Message {
  getHourlyFundingRateCap(): string;
  setHourlyFundingRateCap(value: string): void;

  getHourlyInterestRate(): string;
  setHourlyInterestRate(value: string): void;

  getNextFundingTimestamp(): number;
  setNextFundingTimestamp(value: number): void;

  getFundingInterval(): number;
  setFundingInterval(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PerpetualMarketInfo.AsObject;
  static toObject(includeInstance: boolean, msg: PerpetualMarketInfo): PerpetualMarketInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PerpetualMarketInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PerpetualMarketInfo;
  static deserializeBinaryFromReader(message: PerpetualMarketInfo, reader: jspb.BinaryReader): PerpetualMarketInfo;
}

export namespace PerpetualMarketInfo {
  export type AsObject = {
    hourlyFundingRateCap: string,
    hourlyInterestRate: string,
    nextFundingTimestamp: number,
    fundingInterval: number,
  }
}

export class PerpetualMarketFunding extends jspb.Message {
  getCumulativeFunding(): string;
  setCumulativeFunding(value: string): void;

  getCumulativePrice(): string;
  setCumulativePrice(value: string): void;

  getLastTimestamp(): number;
  setLastTimestamp(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PerpetualMarketFunding.AsObject;
  static toObject(includeInstance: boolean, msg: PerpetualMarketFunding): PerpetualMarketFunding.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PerpetualMarketFunding, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PerpetualMarketFunding;
  static deserializeBinaryFromReader(message: PerpetualMarketFunding, reader: jspb.BinaryReader): PerpetualMarketFunding;
}

export namespace PerpetualMarketFunding {
  export type AsObject = {
    cumulativeFunding: string,
    cumulativePrice: string,
    lastTimestamp: number,
  }
}

export class ExpiryFuturesMarketInfo extends jspb.Message {
  getExpirationTimestamp(): number;
  setExpirationTimestamp(value: number): void;

  getSettlementPrice(): string;
  setSettlementPrice(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExpiryFuturesMarketInfo.AsObject;
  static toObject(includeInstance: boolean, msg: ExpiryFuturesMarketInfo): ExpiryFuturesMarketInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExpiryFuturesMarketInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExpiryFuturesMarketInfo;
  static deserializeBinaryFromReader(message: ExpiryFuturesMarketInfo, reader: jspb.BinaryReader): ExpiryFuturesMarketInfo;
}

export namespace ExpiryFuturesMarketInfo {
  export type AsObject = {
    expirationTimestamp: number,
    settlementPrice: string,
  }
}

export class MarketRequest extends jspb.Message {
  getMarketId(): string;
  setMarketId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MarketRequest.AsObject;
  static toObject(includeInstance: boolean, msg: MarketRequest): MarketRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MarketRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MarketRequest;
  static deserializeBinaryFromReader(message: MarketRequest, reader: jspb.BinaryReader): MarketRequest;
}

export namespace MarketRequest {
  export type AsObject = {
    marketId: string,
  }
}

export class MarketResponse extends jspb.Message {
  hasMarket(): boolean;
  clearMarket(): void;
  getMarket(): DerivativeMarketInfo | undefined;
  setMarket(value?: DerivativeMarketInfo): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MarketResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MarketResponse): MarketResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MarketResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MarketResponse;
  static deserializeBinaryFromReader(message: MarketResponse, reader: jspb.BinaryReader): MarketResponse;
}

export namespace MarketResponse {
  export type AsObject = {
    market?: DerivativeMarketInfo.AsObject,
  }
}

export class StreamMarketRequest extends jspb.Message {
  clearMarketIdsList(): void;
  getMarketIdsList(): Array<string>;
  setMarketIdsList(value: Array<string>): void;
  addMarketIds(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StreamMarketRequest.AsObject;
  static toObject(includeInstance: boolean, msg: StreamMarketRequest): StreamMarketRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StreamMarketRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StreamMarketRequest;
  static deserializeBinaryFromReader(message: StreamMarketRequest, reader: jspb.BinaryReader): StreamMarketRequest;
}

export namespace StreamMarketRequest {
  export type AsObject = {
    marketIdsList: Array<string>,
  }
}

export class StreamMarketResponse extends jspb.Message {
  hasMarket(): boolean;
  clearMarket(): void;
  getMarket(): DerivativeMarketInfo | undefined;
  setMarket(value?: DerivativeMarketInfo): void;

  getOperationType(): string;
  setOperationType(value: string): void;

  getTimestamp(): number;
  setTimestamp(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StreamMarketResponse.AsObject;
  static toObject(includeInstance: boolean, msg: StreamMarketResponse): StreamMarketResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StreamMarketResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StreamMarketResponse;
  static deserializeBinaryFromReader(message: StreamMarketResponse, reader: jspb.BinaryReader): StreamMarketResponse;
}

export namespace StreamMarketResponse {
  export type AsObject = {
    market?: DerivativeMarketInfo.AsObject,
    operationType: string,
    timestamp: number,
  }
}

export class OrderbookRequest extends jspb.Message {
  getMarketId(): string;
  setMarketId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OrderbookRequest.AsObject;
  static toObject(includeInstance: boolean, msg: OrderbookRequest): OrderbookRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OrderbookRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OrderbookRequest;
  static deserializeBinaryFromReader(message: OrderbookRequest, reader: jspb.BinaryReader): OrderbookRequest;
}

export namespace OrderbookRequest {
  export type AsObject = {
    marketId: string,
  }
}

export class OrderbookResponse extends jspb.Message {
  hasOrderbook(): boolean;
  clearOrderbook(): void;
  getOrderbook(): DerivativeLimitOrderbook | undefined;
  setOrderbook(value?: DerivativeLimitOrderbook): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OrderbookResponse.AsObject;
  static toObject(includeInstance: boolean, msg: OrderbookResponse): OrderbookResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OrderbookResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OrderbookResponse;
  static deserializeBinaryFromReader(message: OrderbookResponse, reader: jspb.BinaryReader): OrderbookResponse;
}

export namespace OrderbookResponse {
  export type AsObject = {
    orderbook?: DerivativeLimitOrderbook.AsObject,
  }
}

export class DerivativeLimitOrderbook extends jspb.Message {
  clearBuysList(): void;
  getBuysList(): Array<PriceLevel>;
  setBuysList(value: Array<PriceLevel>): void;
  addBuys(value?: PriceLevel, index?: number): PriceLevel;

  clearSellsList(): void;
  getSellsList(): Array<PriceLevel>;
  setSellsList(value: Array<PriceLevel>): void;
  addSells(value?: PriceLevel, index?: number): PriceLevel;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DerivativeLimitOrderbook.AsObject;
  static toObject(includeInstance: boolean, msg: DerivativeLimitOrderbook): DerivativeLimitOrderbook.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DerivativeLimitOrderbook, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DerivativeLimitOrderbook;
  static deserializeBinaryFromReader(message: DerivativeLimitOrderbook, reader: jspb.BinaryReader): DerivativeLimitOrderbook;
}

export namespace DerivativeLimitOrderbook {
  export type AsObject = {
    buysList: Array<PriceLevel.AsObject>,
    sellsList: Array<PriceLevel.AsObject>,
  }
}

export class PriceLevel extends jspb.Message {
  getPrice(): string;
  setPrice(value: string): void;

  getQuantity(): string;
  setQuantity(value: string): void;

  getTimestamp(): number;
  setTimestamp(value: number): void;

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
    timestamp: number,
  }
}

export class StreamOrderbookRequest extends jspb.Message {
  getMarketId(): string;
  setMarketId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StreamOrderbookRequest.AsObject;
  static toObject(includeInstance: boolean, msg: StreamOrderbookRequest): StreamOrderbookRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StreamOrderbookRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StreamOrderbookRequest;
  static deserializeBinaryFromReader(message: StreamOrderbookRequest, reader: jspb.BinaryReader): StreamOrderbookRequest;
}

export namespace StreamOrderbookRequest {
  export type AsObject = {
    marketId: string,
  }
}

export class StreamOrderbookResponse extends jspb.Message {
  hasOrderbook(): boolean;
  clearOrderbook(): void;
  getOrderbook(): DerivativeLimitOrderbook | undefined;
  setOrderbook(value?: DerivativeLimitOrderbook): void;

  getOperationType(): string;
  setOperationType(value: string): void;

  getTimestamp(): number;
  setTimestamp(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StreamOrderbookResponse.AsObject;
  static toObject(includeInstance: boolean, msg: StreamOrderbookResponse): StreamOrderbookResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StreamOrderbookResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StreamOrderbookResponse;
  static deserializeBinaryFromReader(message: StreamOrderbookResponse, reader: jspb.BinaryReader): StreamOrderbookResponse;
}

export namespace StreamOrderbookResponse {
  export type AsObject = {
    orderbook?: DerivativeLimitOrderbook.AsObject,
    operationType: string,
    timestamp: number,
  }
}

export class OrdersRequest extends jspb.Message {
  getMarketId(): string;
  setMarketId(value: string): void;

  getOrderSide(): string;
  setOrderSide(value: string): void;

  getSubaccountId(): string;
  setSubaccountId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OrdersRequest.AsObject;
  static toObject(includeInstance: boolean, msg: OrdersRequest): OrdersRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OrdersRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OrdersRequest;
  static deserializeBinaryFromReader(message: OrdersRequest, reader: jspb.BinaryReader): OrdersRequest;
}

export namespace OrdersRequest {
  export type AsObject = {
    marketId: string,
    orderSide: string,
    subaccountId: string,
  }
}

export class OrdersResponse extends jspb.Message {
  clearOrdersList(): void;
  getOrdersList(): Array<DerivativeLimitOrder>;
  setOrdersList(value: Array<DerivativeLimitOrder>): void;
  addOrders(value?: DerivativeLimitOrder, index?: number): DerivativeLimitOrder;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OrdersResponse.AsObject;
  static toObject(includeInstance: boolean, msg: OrdersResponse): OrdersResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OrdersResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OrdersResponse;
  static deserializeBinaryFromReader(message: OrdersResponse, reader: jspb.BinaryReader): OrdersResponse;
}

export namespace OrdersResponse {
  export type AsObject = {
    ordersList: Array<DerivativeLimitOrder.AsObject>,
  }
}

export class DerivativeLimitOrder extends jspb.Message {
  getOrderHash(): string;
  setOrderHash(value: string): void;

  getOrderSide(): string;
  setOrderSide(value: string): void;

  getMarketId(): string;
  setMarketId(value: string): void;

  getSubaccountId(): string;
  setSubaccountId(value: string): void;

  getIsReduceOnly(): boolean;
  setIsReduceOnly(value: boolean): void;

  getMargin(): string;
  setMargin(value: string): void;

  getPrice(): string;
  setPrice(value: string): void;

  getQuantity(): string;
  setQuantity(value: string): void;

  getUnfilledQuantity(): string;
  setUnfilledQuantity(value: string): void;

  getTriggerPrice(): string;
  setTriggerPrice(value: string): void;

  getFeeRecipient(): string;
  setFeeRecipient(value: string): void;

  getState(): string;
  setState(value: string): void;

  getCreatedAt(): number;
  setCreatedAt(value: number): void;

  getUpdatedAt(): number;
  setUpdatedAt(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DerivativeLimitOrder.AsObject;
  static toObject(includeInstance: boolean, msg: DerivativeLimitOrder): DerivativeLimitOrder.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DerivativeLimitOrder, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DerivativeLimitOrder;
  static deserializeBinaryFromReader(message: DerivativeLimitOrder, reader: jspb.BinaryReader): DerivativeLimitOrder;
}

export namespace DerivativeLimitOrder {
  export type AsObject = {
    orderHash: string,
    orderSide: string,
    marketId: string,
    subaccountId: string,
    isReduceOnly: boolean,
    margin: string,
    price: string,
    quantity: string,
    unfilledQuantity: string,
    triggerPrice: string,
    feeRecipient: string,
    state: string,
    createdAt: number,
    updatedAt: number,
  }
}

export class PositionsRequest extends jspb.Message {
  getSubaccountId(): string;
  setSubaccountId(value: string): void;

  getMarketId(): string;
  setMarketId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PositionsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PositionsRequest): PositionsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PositionsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PositionsRequest;
  static deserializeBinaryFromReader(message: PositionsRequest, reader: jspb.BinaryReader): PositionsRequest;
}

export namespace PositionsRequest {
  export type AsObject = {
    subaccountId: string,
    marketId: string,
  }
}

export class PositionsResponse extends jspb.Message {
  clearPositionsList(): void;
  getPositionsList(): Array<DerivativePosition>;
  setPositionsList(value: Array<DerivativePosition>): void;
  addPositions(value?: DerivativePosition, index?: number): DerivativePosition;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PositionsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: PositionsResponse): PositionsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PositionsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PositionsResponse;
  static deserializeBinaryFromReader(message: PositionsResponse, reader: jspb.BinaryReader): PositionsResponse;
}

export namespace PositionsResponse {
  export type AsObject = {
    positionsList: Array<DerivativePosition.AsObject>,
  }
}

export class DerivativePosition extends jspb.Message {
  getTicker(): string;
  setTicker(value: string): void;

  getMarketId(): string;
  setMarketId(value: string): void;

  getSubaccountId(): string;
  setSubaccountId(value: string): void;

  getDirection(): string;
  setDirection(value: string): void;

  getQuantity(): string;
  setQuantity(value: string): void;

  getEntryPrice(): string;
  setEntryPrice(value: string): void;

  getMargin(): string;
  setMargin(value: string): void;

  getLiquidationPrice(): string;
  setLiquidationPrice(value: string): void;

  getMarkPrice(): string;
  setMarkPrice(value: string): void;

  getAggregateReduceOnlyQuantity(): string;
  setAggregateReduceOnlyQuantity(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DerivativePosition.AsObject;
  static toObject(includeInstance: boolean, msg: DerivativePosition): DerivativePosition.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DerivativePosition, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DerivativePosition;
  static deserializeBinaryFromReader(message: DerivativePosition, reader: jspb.BinaryReader): DerivativePosition;
}

export namespace DerivativePosition {
  export type AsObject = {
    ticker: string,
    marketId: string,
    subaccountId: string,
    direction: string,
    quantity: string,
    entryPrice: string,
    margin: string,
    liquidationPrice: string,
    markPrice: string,
    aggregateReduceOnlyQuantity: string,
  }
}

export class LiquidablePositionsRequest extends jspb.Message {
  getMarketId(): string;
  setMarketId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LiquidablePositionsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: LiquidablePositionsRequest): LiquidablePositionsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LiquidablePositionsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LiquidablePositionsRequest;
  static deserializeBinaryFromReader(message: LiquidablePositionsRequest, reader: jspb.BinaryReader): LiquidablePositionsRequest;
}

export namespace LiquidablePositionsRequest {
  export type AsObject = {
    marketId: string,
  }
}

export class LiquidablePositionsResponse extends jspb.Message {
  clearPositionsList(): void;
  getPositionsList(): Array<DerivativePosition>;
  setPositionsList(value: Array<DerivativePosition>): void;
  addPositions(value?: DerivativePosition, index?: number): DerivativePosition;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LiquidablePositionsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: LiquidablePositionsResponse): LiquidablePositionsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LiquidablePositionsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LiquidablePositionsResponse;
  static deserializeBinaryFromReader(message: LiquidablePositionsResponse, reader: jspb.BinaryReader): LiquidablePositionsResponse;
}

export namespace LiquidablePositionsResponse {
  export type AsObject = {
    positionsList: Array<DerivativePosition.AsObject>,
  }
}

export class FundingPaymentsRequest extends jspb.Message {
  getSubaccountId(): string;
  setSubaccountId(value: string): void;

  getMarketId(): string;
  setMarketId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FundingPaymentsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: FundingPaymentsRequest): FundingPaymentsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FundingPaymentsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FundingPaymentsRequest;
  static deserializeBinaryFromReader(message: FundingPaymentsRequest, reader: jspb.BinaryReader): FundingPaymentsRequest;
}

export namespace FundingPaymentsRequest {
  export type AsObject = {
    subaccountId: string,
    marketId: string,
  }
}

export class FundingPaymentsResponse extends jspb.Message {
  clearPaymentsList(): void;
  getPaymentsList(): Array<FundingPayment>;
  setPaymentsList(value: Array<FundingPayment>): void;
  addPayments(value?: FundingPayment, index?: number): FundingPayment;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FundingPaymentsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: FundingPaymentsResponse): FundingPaymentsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FundingPaymentsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FundingPaymentsResponse;
  static deserializeBinaryFromReader(message: FundingPaymentsResponse, reader: jspb.BinaryReader): FundingPaymentsResponse;
}

export namespace FundingPaymentsResponse {
  export type AsObject = {
    paymentsList: Array<FundingPayment.AsObject>,
  }
}

export class FundingPayment extends jspb.Message {
  getMarketId(): string;
  setMarketId(value: string): void;

  getSubaccountId(): string;
  setSubaccountId(value: string): void;

  getAmount(): string;
  setAmount(value: string): void;

  getTimestamp(): number;
  setTimestamp(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FundingPayment.AsObject;
  static toObject(includeInstance: boolean, msg: FundingPayment): FundingPayment.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FundingPayment, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FundingPayment;
  static deserializeBinaryFromReader(message: FundingPayment, reader: jspb.BinaryReader): FundingPayment;
}

export namespace FundingPayment {
  export type AsObject = {
    marketId: string,
    subaccountId: string,
    amount: string,
    timestamp: number,
  }
}

export class StreamPositionsRequest extends jspb.Message {
  getSubaccountId(): string;
  setSubaccountId(value: string): void;

  getMarketId(): string;
  setMarketId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StreamPositionsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: StreamPositionsRequest): StreamPositionsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StreamPositionsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StreamPositionsRequest;
  static deserializeBinaryFromReader(message: StreamPositionsRequest, reader: jspb.BinaryReader): StreamPositionsRequest;
}

export namespace StreamPositionsRequest {
  export type AsObject = {
    subaccountId: string,
    marketId: string,
  }
}

export class StreamPositionsResponse extends jspb.Message {
  hasPosition(): boolean;
  clearPosition(): void;
  getPosition(): DerivativePosition | undefined;
  setPosition(value?: DerivativePosition): void;

  getTimestamp(): number;
  setTimestamp(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StreamPositionsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: StreamPositionsResponse): StreamPositionsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StreamPositionsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StreamPositionsResponse;
  static deserializeBinaryFromReader(message: StreamPositionsResponse, reader: jspb.BinaryReader): StreamPositionsResponse;
}

export namespace StreamPositionsResponse {
  export type AsObject = {
    position?: DerivativePosition.AsObject,
    timestamp: number,
  }
}

export class StreamOrdersRequest extends jspb.Message {
  getMarketId(): string;
  setMarketId(value: string): void;

  getOrderSide(): string;
  setOrderSide(value: string): void;

  getSubaccountId(): string;
  setSubaccountId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StreamOrdersRequest.AsObject;
  static toObject(includeInstance: boolean, msg: StreamOrdersRequest): StreamOrdersRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StreamOrdersRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StreamOrdersRequest;
  static deserializeBinaryFromReader(message: StreamOrdersRequest, reader: jspb.BinaryReader): StreamOrdersRequest;
}

export namespace StreamOrdersRequest {
  export type AsObject = {
    marketId: string,
    orderSide: string,
    subaccountId: string,
  }
}

export class StreamOrdersResponse extends jspb.Message {
  hasOrder(): boolean;
  clearOrder(): void;
  getOrder(): DerivativeLimitOrder | undefined;
  setOrder(value?: DerivativeLimitOrder): void;

  getOperationType(): string;
  setOperationType(value: string): void;

  getTimestamp(): number;
  setTimestamp(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StreamOrdersResponse.AsObject;
  static toObject(includeInstance: boolean, msg: StreamOrdersResponse): StreamOrdersResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StreamOrdersResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StreamOrdersResponse;
  static deserializeBinaryFromReader(message: StreamOrdersResponse, reader: jspb.BinaryReader): StreamOrdersResponse;
}

export namespace StreamOrdersResponse {
  export type AsObject = {
    order?: DerivativeLimitOrder.AsObject,
    operationType: string,
    timestamp: number,
  }
}

export class TradesRequest extends jspb.Message {
  getMarketId(): string;
  setMarketId(value: string): void;

  getExecutionSide(): string;
  setExecutionSide(value: string): void;

  getDirection(): string;
  setDirection(value: string): void;

  getSubaccountId(): string;
  setSubaccountId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TradesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: TradesRequest): TradesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TradesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TradesRequest;
  static deserializeBinaryFromReader(message: TradesRequest, reader: jspb.BinaryReader): TradesRequest;
}

export namespace TradesRequest {
  export type AsObject = {
    marketId: string,
    executionSide: string,
    direction: string,
    subaccountId: string,
  }
}

export class TradesResponse extends jspb.Message {
  clearTradesList(): void;
  getTradesList(): Array<DerivativeTrade>;
  setTradesList(value: Array<DerivativeTrade>): void;
  addTrades(value?: DerivativeTrade, index?: number): DerivativeTrade;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TradesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: TradesResponse): TradesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TradesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TradesResponse;
  static deserializeBinaryFromReader(message: TradesResponse, reader: jspb.BinaryReader): TradesResponse;
}

export namespace TradesResponse {
  export type AsObject = {
    tradesList: Array<DerivativeTrade.AsObject>,
  }
}

export class DerivativeTrade extends jspb.Message {
  getOrderHash(): string;
  setOrderHash(value: string): void;

  getSubaccountId(): string;
  setSubaccountId(value: string): void;

  getMarketId(): string;
  setMarketId(value: string): void;

  getTradeExecutionType(): string;
  setTradeExecutionType(value: string): void;

  getIsLiquidation(): boolean;
  setIsLiquidation(value: boolean): void;

  hasPositionDelta(): boolean;
  clearPositionDelta(): void;
  getPositionDelta(): PositionDelta | undefined;
  setPositionDelta(value?: PositionDelta): void;

  getPayout(): string;
  setPayout(value: string): void;

  getFee(): string;
  setFee(value: string): void;

  getExecutedAt(): number;
  setExecutedAt(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DerivativeTrade.AsObject;
  static toObject(includeInstance: boolean, msg: DerivativeTrade): DerivativeTrade.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DerivativeTrade, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DerivativeTrade;
  static deserializeBinaryFromReader(message: DerivativeTrade, reader: jspb.BinaryReader): DerivativeTrade;
}

export namespace DerivativeTrade {
  export type AsObject = {
    orderHash: string,
    subaccountId: string,
    marketId: string,
    tradeExecutionType: string,
    isLiquidation: boolean,
    positionDelta?: PositionDelta.AsObject,
    payout: string,
    fee: string,
    executedAt: number,
  }
}

export class PositionDelta extends jspb.Message {
  getTradeDirection(): string;
  setTradeDirection(value: string): void;

  getExecutionPrice(): string;
  setExecutionPrice(value: string): void;

  getExecutionQuantity(): string;
  setExecutionQuantity(value: string): void;

  getExecutionMargin(): string;
  setExecutionMargin(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PositionDelta.AsObject;
  static toObject(includeInstance: boolean, msg: PositionDelta): PositionDelta.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PositionDelta, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PositionDelta;
  static deserializeBinaryFromReader(message: PositionDelta, reader: jspb.BinaryReader): PositionDelta;
}

export namespace PositionDelta {
  export type AsObject = {
    tradeDirection: string,
    executionPrice: string,
    executionQuantity: string,
    executionMargin: string,
  }
}

export class StreamTradesRequest extends jspb.Message {
  getMarketId(): string;
  setMarketId(value: string): void;

  getExecutionSide(): string;
  setExecutionSide(value: string): void;

  getDirection(): string;
  setDirection(value: string): void;

  getSubaccountId(): string;
  setSubaccountId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StreamTradesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: StreamTradesRequest): StreamTradesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StreamTradesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StreamTradesRequest;
  static deserializeBinaryFromReader(message: StreamTradesRequest, reader: jspb.BinaryReader): StreamTradesRequest;
}

export namespace StreamTradesRequest {
  export type AsObject = {
    marketId: string,
    executionSide: string,
    direction: string,
    subaccountId: string,
  }
}

export class StreamTradesResponse extends jspb.Message {
  hasTrade(): boolean;
  clearTrade(): void;
  getTrade(): DerivativeTrade | undefined;
  setTrade(value?: DerivativeTrade): void;

  getOperationType(): string;
  setOperationType(value: string): void;

  getTimestamp(): number;
  setTimestamp(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StreamTradesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: StreamTradesResponse): StreamTradesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StreamTradesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StreamTradesResponse;
  static deserializeBinaryFromReader(message: StreamTradesResponse, reader: jspb.BinaryReader): StreamTradesResponse;
}

export namespace StreamTradesResponse {
  export type AsObject = {
    trade?: DerivativeTrade.AsObject,
    operationType: string,
    timestamp: number,
  }
}

export class SubaccountOrdersListRequest extends jspb.Message {
  getSubaccountId(): string;
  setSubaccountId(value: string): void;

  getMarketId(): string;
  setMarketId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SubaccountOrdersListRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SubaccountOrdersListRequest): SubaccountOrdersListRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SubaccountOrdersListRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SubaccountOrdersListRequest;
  static deserializeBinaryFromReader(message: SubaccountOrdersListRequest, reader: jspb.BinaryReader): SubaccountOrdersListRequest;
}

export namespace SubaccountOrdersListRequest {
  export type AsObject = {
    subaccountId: string,
    marketId: string,
  }
}

export class SubaccountOrdersListResponse extends jspb.Message {
  clearOrdersList(): void;
  getOrdersList(): Array<DerivativeLimitOrder>;
  setOrdersList(value: Array<DerivativeLimitOrder>): void;
  addOrders(value?: DerivativeLimitOrder, index?: number): DerivativeLimitOrder;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SubaccountOrdersListResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SubaccountOrdersListResponse): SubaccountOrdersListResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SubaccountOrdersListResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SubaccountOrdersListResponse;
  static deserializeBinaryFromReader(message: SubaccountOrdersListResponse, reader: jspb.BinaryReader): SubaccountOrdersListResponse;
}

export namespace SubaccountOrdersListResponse {
  export type AsObject = {
    ordersList: Array<DerivativeLimitOrder.AsObject>,
  }
}

export class SubaccountTradesListRequest extends jspb.Message {
  getSubaccountId(): string;
  setSubaccountId(value: string): void;

  getMarketId(): string;
  setMarketId(value: string): void;

  getExecutionType(): string;
  setExecutionType(value: string): void;

  getDirection(): string;
  setDirection(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SubaccountTradesListRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SubaccountTradesListRequest): SubaccountTradesListRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SubaccountTradesListRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SubaccountTradesListRequest;
  static deserializeBinaryFromReader(message: SubaccountTradesListRequest, reader: jspb.BinaryReader): SubaccountTradesListRequest;
}

export namespace SubaccountTradesListRequest {
  export type AsObject = {
    subaccountId: string,
    marketId: string,
    executionType: string,
    direction: string,
  }
}

export class SubaccountTradesListResponse extends jspb.Message {
  clearTradesList(): void;
  getTradesList(): Array<DerivativeTrade>;
  setTradesList(value: Array<DerivativeTrade>): void;
  addTrades(value?: DerivativeTrade, index?: number): DerivativeTrade;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SubaccountTradesListResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SubaccountTradesListResponse): SubaccountTradesListResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SubaccountTradesListResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SubaccountTradesListResponse;
  static deserializeBinaryFromReader(message: SubaccountTradesListResponse, reader: jspb.BinaryReader): SubaccountTradesListResponse;
}

export namespace SubaccountTradesListResponse {
  export type AsObject = {
    tradesList: Array<DerivativeTrade.AsObject>,
  }
}

