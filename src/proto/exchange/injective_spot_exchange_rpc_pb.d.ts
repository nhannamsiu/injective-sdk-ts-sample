// package: injective_spot_exchange_rpc
// file: exchange/injective_spot_exchange_rpc.proto

import * as jspb from "google-protobuf";

export class MarketsRequest extends jspb.Message {
  getMarketStatus(): string;
  setMarketStatus(value: string): void;

  getBaseDenom(): string;
  setBaseDenom(value: string): void;

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
    baseDenom: string,
    quoteDenom: string,
  }
}

export class MarketsResponse extends jspb.Message {
  clearMarketsList(): void;
  getMarketsList(): Array<SpotMarketInfo>;
  setMarketsList(value: Array<SpotMarketInfo>): void;
  addMarkets(value?: SpotMarketInfo, index?: number): SpotMarketInfo;

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
    marketsList: Array<SpotMarketInfo.AsObject>,
  }
}

export class SpotMarketInfo extends jspb.Message {
  getMarketId(): string;
  setMarketId(value: string): void;

  getMarketStatus(): string;
  setMarketStatus(value: string): void;

  getTicker(): string;
  setTicker(value: string): void;

  getBaseDenom(): string;
  setBaseDenom(value: string): void;

  hasBaseTokenMeta(): boolean;
  clearBaseTokenMeta(): void;
  getBaseTokenMeta(): TokenMeta | undefined;
  setBaseTokenMeta(value?: TokenMeta): void;

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

  getMinPriceTickSize(): string;
  setMinPriceTickSize(value: string): void;

  getMinQuantityTickSize(): string;
  setMinQuantityTickSize(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SpotMarketInfo.AsObject;
  static toObject(includeInstance: boolean, msg: SpotMarketInfo): SpotMarketInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SpotMarketInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SpotMarketInfo;
  static deserializeBinaryFromReader(message: SpotMarketInfo, reader: jspb.BinaryReader): SpotMarketInfo;
}

export namespace SpotMarketInfo {
  export type AsObject = {
    marketId: string,
    marketStatus: string,
    ticker: string,
    baseDenom: string,
    baseTokenMeta?: TokenMeta.AsObject,
    quoteDenom: string,
    quoteTokenMeta?: TokenMeta.AsObject,
    makerFeeRate: string,
    takerFeeRate: string,
    serviceProviderFee: string,
    minPriceTickSize: string,
    minQuantityTickSize: string,
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
  getMarket(): SpotMarketInfo | undefined;
  setMarket(value?: SpotMarketInfo): void;

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
    market?: SpotMarketInfo.AsObject,
  }
}

export class StreamMarketsRequest extends jspb.Message {
  clearMarketIdsList(): void;
  getMarketIdsList(): Array<string>;
  setMarketIdsList(value: Array<string>): void;
  addMarketIds(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StreamMarketsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: StreamMarketsRequest): StreamMarketsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StreamMarketsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StreamMarketsRequest;
  static deserializeBinaryFromReader(message: StreamMarketsRequest, reader: jspb.BinaryReader): StreamMarketsRequest;
}

export namespace StreamMarketsRequest {
  export type AsObject = {
    marketIdsList: Array<string>,
  }
}

export class StreamMarketsResponse extends jspb.Message {
  hasMarket(): boolean;
  clearMarket(): void;
  getMarket(): SpotMarketInfo | undefined;
  setMarket(value?: SpotMarketInfo): void;

  getOperationType(): string;
  setOperationType(value: string): void;

  getTimestamp(): number;
  setTimestamp(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StreamMarketsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: StreamMarketsResponse): StreamMarketsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StreamMarketsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StreamMarketsResponse;
  static deserializeBinaryFromReader(message: StreamMarketsResponse, reader: jspb.BinaryReader): StreamMarketsResponse;
}

export namespace StreamMarketsResponse {
  export type AsObject = {
    market?: SpotMarketInfo.AsObject,
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
  getOrderbook(): SpotLimitOrderbook | undefined;
  setOrderbook(value?: SpotLimitOrderbook): void;

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
    orderbook?: SpotLimitOrderbook.AsObject,
  }
}

export class SpotLimitOrderbook extends jspb.Message {
  clearBuysList(): void;
  getBuysList(): Array<PriceLevel>;
  setBuysList(value: Array<PriceLevel>): void;
  addBuys(value?: PriceLevel, index?: number): PriceLevel;

  clearSellsList(): void;
  getSellsList(): Array<PriceLevel>;
  setSellsList(value: Array<PriceLevel>): void;
  addSells(value?: PriceLevel, index?: number): PriceLevel;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SpotLimitOrderbook.AsObject;
  static toObject(includeInstance: boolean, msg: SpotLimitOrderbook): SpotLimitOrderbook.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SpotLimitOrderbook, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SpotLimitOrderbook;
  static deserializeBinaryFromReader(message: SpotLimitOrderbook, reader: jspb.BinaryReader): SpotLimitOrderbook;
}

export namespace SpotLimitOrderbook {
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
  getOrderbook(): SpotLimitOrderbook | undefined;
  setOrderbook(value?: SpotLimitOrderbook): void;

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
    orderbook?: SpotLimitOrderbook.AsObject,
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
  getOrdersList(): Array<SpotLimitOrder>;
  setOrdersList(value: Array<SpotLimitOrder>): void;
  addOrders(value?: SpotLimitOrder, index?: number): SpotLimitOrder;

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
    ordersList: Array<SpotLimitOrder.AsObject>,
  }
}

export class SpotLimitOrder extends jspb.Message {
  getOrderHash(): string;
  setOrderHash(value: string): void;

  getOrderSide(): string;
  setOrderSide(value: string): void;

  getMarketId(): string;
  setMarketId(value: string): void;

  getSubaccountId(): string;
  setSubaccountId(value: string): void;

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
  toObject(includeInstance?: boolean): SpotLimitOrder.AsObject;
  static toObject(includeInstance: boolean, msg: SpotLimitOrder): SpotLimitOrder.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SpotLimitOrder, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SpotLimitOrder;
  static deserializeBinaryFromReader(message: SpotLimitOrder, reader: jspb.BinaryReader): SpotLimitOrder;
}

export namespace SpotLimitOrder {
  export type AsObject = {
    orderHash: string,
    orderSide: string,
    marketId: string,
    subaccountId: string,
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
  getOrder(): SpotLimitOrder | undefined;
  setOrder(value?: SpotLimitOrder): void;

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
    order?: SpotLimitOrder.AsObject,
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
  getTradesList(): Array<SpotTrade>;
  setTradesList(value: Array<SpotTrade>): void;
  addTrades(value?: SpotTrade, index?: number): SpotTrade;

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
    tradesList: Array<SpotTrade.AsObject>,
  }
}

export class SpotTrade extends jspb.Message {
  getOrderHash(): string;
  setOrderHash(value: string): void;

  getSubaccountId(): string;
  setSubaccountId(value: string): void;

  getMarketId(): string;
  setMarketId(value: string): void;

  getTradeExecutionType(): string;
  setTradeExecutionType(value: string): void;

  getTradeDirection(): string;
  setTradeDirection(value: string): void;

  hasPrice(): boolean;
  clearPrice(): void;
  getPrice(): PriceLevel | undefined;
  setPrice(value?: PriceLevel): void;

  getFee(): string;
  setFee(value: string): void;

  getExecutedAt(): number;
  setExecutedAt(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SpotTrade.AsObject;
  static toObject(includeInstance: boolean, msg: SpotTrade): SpotTrade.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SpotTrade, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SpotTrade;
  static deserializeBinaryFromReader(message: SpotTrade, reader: jspb.BinaryReader): SpotTrade;
}

export namespace SpotTrade {
  export type AsObject = {
    orderHash: string,
    subaccountId: string,
    marketId: string,
    tradeExecutionType: string,
    tradeDirection: string,
    price?: PriceLevel.AsObject,
    fee: string,
    executedAt: number,
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
  getTrade(): SpotTrade | undefined;
  setTrade(value?: SpotTrade): void;

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
    trade?: SpotTrade.AsObject,
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
  getOrdersList(): Array<SpotLimitOrder>;
  setOrdersList(value: Array<SpotLimitOrder>): void;
  addOrders(value?: SpotLimitOrder, index?: number): SpotLimitOrder;

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
    ordersList: Array<SpotLimitOrder.AsObject>,
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
  getTradesList(): Array<SpotTrade>;
  setTradesList(value: Array<SpotTrade>): void;
  addTrades(value?: SpotTrade, index?: number): SpotTrade;

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
    tradesList: Array<SpotTrade.AsObject>,
  }
}

