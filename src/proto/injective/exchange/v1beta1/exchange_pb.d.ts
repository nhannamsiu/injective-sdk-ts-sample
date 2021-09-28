// package: injective.exchange.v1beta1
// file: injective/exchange/v1beta1/exchange.proto

import * as jspb from "google-protobuf";
import * as gogoproto_gogo_pb from "../../../gogoproto/gogo_pb";
import * as cosmos_base_v1beta1_coin_pb from "../../../cosmos/base/v1beta1/coin_pb";
import * as injective_oracle_v1beta1_oracle_pb from "../../../injective/oracle/v1beta1/oracle_pb";

export class Params extends jspb.Message {
  hasSpotMarketInstantListingFee(): boolean;
  clearSpotMarketInstantListingFee(): void;
  getSpotMarketInstantListingFee(): cosmos_base_v1beta1_coin_pb.Coin | undefined;
  setSpotMarketInstantListingFee(value?: cosmos_base_v1beta1_coin_pb.Coin): void;

  hasDerivativeMarketInstantListingFee(): boolean;
  clearDerivativeMarketInstantListingFee(): void;
  getDerivativeMarketInstantListingFee(): cosmos_base_v1beta1_coin_pb.Coin | undefined;
  setDerivativeMarketInstantListingFee(value?: cosmos_base_v1beta1_coin_pb.Coin): void;

  getDefaultSpotMakerFeeRate(): string;
  setDefaultSpotMakerFeeRate(value: string): void;

  getDefaultSpotTakerFeeRate(): string;
  setDefaultSpotTakerFeeRate(value: string): void;

  getDefaultDerivativeMakerFeeRate(): string;
  setDefaultDerivativeMakerFeeRate(value: string): void;

  getDefaultDerivativeTakerFeeRate(): string;
  setDefaultDerivativeTakerFeeRate(value: string): void;

  getDefaultInitialMarginRatio(): string;
  setDefaultInitialMarginRatio(value: string): void;

  getDefaultMaintenanceMarginRatio(): string;
  setDefaultMaintenanceMarginRatio(value: string): void;

  getDefaultFundingInterval(): number;
  setDefaultFundingInterval(value: number): void;

  getFundingMultiple(): number;
  setFundingMultiple(value: number): void;

  getRelayerFeeShareRate(): string;
  setRelayerFeeShareRate(value: string): void;

  getDefaultHourlyFundingRateCap(): string;
  setDefaultHourlyFundingRateCap(value: string): void;

  getDefaultHourlyInterestRate(): string;
  setDefaultHourlyInterestRate(value: string): void;

  getMaxDerivativeOrderSideCount(): number;
  setMaxDerivativeOrderSideCount(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Params.AsObject;
  static toObject(includeInstance: boolean, msg: Params): Params.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Params, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Params;
  static deserializeBinaryFromReader(message: Params, reader: jspb.BinaryReader): Params;
}

export namespace Params {
  export type AsObject = {
    spotMarketInstantListingFee?: cosmos_base_v1beta1_coin_pb.Coin.AsObject,
    derivativeMarketInstantListingFee?: cosmos_base_v1beta1_coin_pb.Coin.AsObject,
    defaultSpotMakerFeeRate: string,
    defaultSpotTakerFeeRate: string,
    defaultDerivativeMakerFeeRate: string,
    defaultDerivativeTakerFeeRate: string,
    defaultInitialMarginRatio: string,
    defaultMaintenanceMarginRatio: string,
    defaultFundingInterval: number,
    fundingMultiple: number,
    relayerFeeShareRate: string,
    defaultHourlyFundingRateCap: string,
    defaultHourlyInterestRate: string,
    maxDerivativeOrderSideCount: number,
  }
}

export class DerivativeMarket extends jspb.Message {
  getTicker(): string;
  setTicker(value: string): void;

  getOracleBase(): string;
  setOracleBase(value: string): void;

  getOracleQuote(): string;
  setOracleQuote(value: string): void;

  getOracleType(): injective_oracle_v1beta1_oracle_pb.OracleTypeMap[keyof injective_oracle_v1beta1_oracle_pb.OracleTypeMap];
  setOracleType(value: injective_oracle_v1beta1_oracle_pb.OracleTypeMap[keyof injective_oracle_v1beta1_oracle_pb.OracleTypeMap]): void;

  getOracleScaleFactor(): number;
  setOracleScaleFactor(value: number): void;

  getQuoteDenom(): string;
  setQuoteDenom(value: string): void;

  getMarketId(): string;
  setMarketId(value: string): void;

  getInitialMarginRatio(): string;
  setInitialMarginRatio(value: string): void;

  getMaintenanceMarginRatio(): string;
  setMaintenanceMarginRatio(value: string): void;

  getMakerFeeRate(): string;
  setMakerFeeRate(value: string): void;

  getTakerFeeRate(): string;
  setTakerFeeRate(value: string): void;

  getRelayerFeeShareRate(): string;
  setRelayerFeeShareRate(value: string): void;

  getIsperpetual(): boolean;
  setIsperpetual(value: boolean): void;

  getStatus(): MarketStatusMap[keyof MarketStatusMap];
  setStatus(value: MarketStatusMap[keyof MarketStatusMap]): void;

  getMinPriceTickSize(): string;
  setMinPriceTickSize(value: string): void;

  getMinQuantityTickSize(): string;
  setMinQuantityTickSize(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DerivativeMarket.AsObject;
  static toObject(includeInstance: boolean, msg: DerivativeMarket): DerivativeMarket.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DerivativeMarket, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DerivativeMarket;
  static deserializeBinaryFromReader(message: DerivativeMarket, reader: jspb.BinaryReader): DerivativeMarket;
}

export namespace DerivativeMarket {
  export type AsObject = {
    ticker: string,
    oracleBase: string,
    oracleQuote: string,
    oracleType: injective_oracle_v1beta1_oracle_pb.OracleTypeMap[keyof injective_oracle_v1beta1_oracle_pb.OracleTypeMap],
    oracleScaleFactor: number,
    quoteDenom: string,
    marketId: string,
    initialMarginRatio: string,
    maintenanceMarginRatio: string,
    makerFeeRate: string,
    takerFeeRate: string,
    relayerFeeShareRate: string,
    isperpetual: boolean,
    status: MarketStatusMap[keyof MarketStatusMap],
    minPriceTickSize: string,
    minQuantityTickSize: string,
  }
}

export class ExpiryFuturesMarketInfo extends jspb.Message {
  getMarketId(): string;
  setMarketId(value: string): void;

  getExpirationTimestamp(): number;
  setExpirationTimestamp(value: number): void;

  getTwapStartTimestamp(): number;
  setTwapStartTimestamp(value: number): void;

  getExpirationTwapStartPriceCumulative(): string;
  setExpirationTwapStartPriceCumulative(value: string): void;

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
    marketId: string,
    expirationTimestamp: number,
    twapStartTimestamp: number,
    expirationTwapStartPriceCumulative: string,
    settlementPrice: string,
  }
}

export class PerpetualMarketInfo extends jspb.Message {
  getMarketId(): string;
  setMarketId(value: string): void;

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
    marketId: string,
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

export class DerivativeMarketSettlementInfo extends jspb.Message {
  getMarketId(): string;
  setMarketId(value: string): void;

  getSettlementPrice(): string;
  setSettlementPrice(value: string): void;

  getStartingDeficit(): string;
  setStartingDeficit(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DerivativeMarketSettlementInfo.AsObject;
  static toObject(includeInstance: boolean, msg: DerivativeMarketSettlementInfo): DerivativeMarketSettlementInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DerivativeMarketSettlementInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DerivativeMarketSettlementInfo;
  static deserializeBinaryFromReader(message: DerivativeMarketSettlementInfo, reader: jspb.BinaryReader): DerivativeMarketSettlementInfo;
}

export namespace DerivativeMarketSettlementInfo {
  export type AsObject = {
    marketId: string,
    settlementPrice: string,
    startingDeficit: string,
  }
}

export class NextFundingTimestamp extends jspb.Message {
  getNextTimestamp(): number;
  setNextTimestamp(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NextFundingTimestamp.AsObject;
  static toObject(includeInstance: boolean, msg: NextFundingTimestamp): NextFundingTimestamp.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: NextFundingTimestamp, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NextFundingTimestamp;
  static deserializeBinaryFromReader(message: NextFundingTimestamp, reader: jspb.BinaryReader): NextFundingTimestamp;
}

export namespace NextFundingTimestamp {
  export type AsObject = {
    nextTimestamp: number,
  }
}

export class SpotMarket extends jspb.Message {
  getTicker(): string;
  setTicker(value: string): void;

  getBaseDenom(): string;
  setBaseDenom(value: string): void;

  getQuoteDenom(): string;
  setQuoteDenom(value: string): void;

  getMakerFeeRate(): string;
  setMakerFeeRate(value: string): void;

  getTakerFeeRate(): string;
  setTakerFeeRate(value: string): void;

  getRelayerFeeShareRate(): string;
  setRelayerFeeShareRate(value: string): void;

  getMarketId(): string;
  setMarketId(value: string): void;

  getStatus(): MarketStatusMap[keyof MarketStatusMap];
  setStatus(value: MarketStatusMap[keyof MarketStatusMap]): void;

  getMinPriceTickSize(): string;
  setMinPriceTickSize(value: string): void;

  getMinQuantityTickSize(): string;
  setMinQuantityTickSize(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SpotMarket.AsObject;
  static toObject(includeInstance: boolean, msg: SpotMarket): SpotMarket.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SpotMarket, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SpotMarket;
  static deserializeBinaryFromReader(message: SpotMarket, reader: jspb.BinaryReader): SpotMarket;
}

export namespace SpotMarket {
  export type AsObject = {
    ticker: string,
    baseDenom: string,
    quoteDenom: string,
    makerFeeRate: string,
    takerFeeRate: string,
    relayerFeeShareRate: string,
    marketId: string,
    status: MarketStatusMap[keyof MarketStatusMap],
    minPriceTickSize: string,
    minQuantityTickSize: string,
  }
}

export class Deposit extends jspb.Message {
  getAvailableBalance(): string;
  setAvailableBalance(value: string): void;

  getTotalBalance(): string;
  setTotalBalance(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Deposit.AsObject;
  static toObject(includeInstance: boolean, msg: Deposit): Deposit.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Deposit, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Deposit;
  static deserializeBinaryFromReader(message: Deposit, reader: jspb.BinaryReader): Deposit;
}

export namespace Deposit {
  export type AsObject = {
    availableBalance: string,
    totalBalance: string,
  }
}

export class SubaccountTradeNonce extends jspb.Message {
  getNonce(): number;
  setNonce(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SubaccountTradeNonce.AsObject;
  static toObject(includeInstance: boolean, msg: SubaccountTradeNonce): SubaccountTradeNonce.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SubaccountTradeNonce, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SubaccountTradeNonce;
  static deserializeBinaryFromReader(message: SubaccountTradeNonce, reader: jspb.BinaryReader): SubaccountTradeNonce;
}

export namespace SubaccountTradeNonce {
  export type AsObject = {
    nonce: number,
  }
}

export class OrderInfo extends jspb.Message {
  getSubaccountId(): string;
  setSubaccountId(value: string): void;

  getFeeRecipient(): string;
  setFeeRecipient(value: string): void;

  getPrice(): string;
  setPrice(value: string): void;

  getQuantity(): string;
  setQuantity(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OrderInfo.AsObject;
  static toObject(includeInstance: boolean, msg: OrderInfo): OrderInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OrderInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OrderInfo;
  static deserializeBinaryFromReader(message: OrderInfo, reader: jspb.BinaryReader): OrderInfo;
}

export namespace OrderInfo {
  export type AsObject = {
    subaccountId: string,
    feeRecipient: string,
    price: string,
    quantity: string,
  }
}

export class SpotOrder extends jspb.Message {
  getMarketId(): string;
  setMarketId(value: string): void;

  hasOrderInfo(): boolean;
  clearOrderInfo(): void;
  getOrderInfo(): OrderInfo | undefined;
  setOrderInfo(value?: OrderInfo): void;

  getOrderType(): OrderTypeMap[keyof OrderTypeMap];
  setOrderType(value: OrderTypeMap[keyof OrderTypeMap]): void;

  getTriggerPrice(): string;
  setTriggerPrice(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SpotOrder.AsObject;
  static toObject(includeInstance: boolean, msg: SpotOrder): SpotOrder.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SpotOrder, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SpotOrder;
  static deserializeBinaryFromReader(message: SpotOrder, reader: jspb.BinaryReader): SpotOrder;
}

export namespace SpotOrder {
  export type AsObject = {
    marketId: string,
    orderInfo?: OrderInfo.AsObject,
    orderType: OrderTypeMap[keyof OrderTypeMap],
    triggerPrice: string,
  }
}

export class SpotLimitOrder extends jspb.Message {
  hasOrderInfo(): boolean;
  clearOrderInfo(): void;
  getOrderInfo(): OrderInfo | undefined;
  setOrderInfo(value?: OrderInfo): void;

  getOrderType(): OrderTypeMap[keyof OrderTypeMap];
  setOrderType(value: OrderTypeMap[keyof OrderTypeMap]): void;

  getFillable(): string;
  setFillable(value: string): void;

  getTriggerPrice(): string;
  setTriggerPrice(value: string): void;

  getOrderHash(): Uint8Array | string;
  getOrderHash_asU8(): Uint8Array;
  getOrderHash_asB64(): string;
  setOrderHash(value: Uint8Array | string): void;

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
    orderInfo?: OrderInfo.AsObject,
    orderType: OrderTypeMap[keyof OrderTypeMap],
    fillable: string,
    triggerPrice: string,
    orderHash: Uint8Array | string,
  }
}

export class SpotMarketOrder extends jspb.Message {
  hasOrderInfo(): boolean;
  clearOrderInfo(): void;
  getOrderInfo(): OrderInfo | undefined;
  setOrderInfo(value?: OrderInfo): void;

  getBalanceHold(): string;
  setBalanceHold(value: string): void;

  getOrderHash(): Uint8Array | string;
  getOrderHash_asU8(): Uint8Array;
  getOrderHash_asB64(): string;
  setOrderHash(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SpotMarketOrder.AsObject;
  static toObject(includeInstance: boolean, msg: SpotMarketOrder): SpotMarketOrder.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SpotMarketOrder, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SpotMarketOrder;
  static deserializeBinaryFromReader(message: SpotMarketOrder, reader: jspb.BinaryReader): SpotMarketOrder;
}

export namespace SpotMarketOrder {
  export type AsObject = {
    orderInfo?: OrderInfo.AsObject,
    balanceHold: string,
    orderHash: Uint8Array | string,
  }
}

export class DerivativeOrder extends jspb.Message {
  getMarketId(): string;
  setMarketId(value: string): void;

  hasOrderInfo(): boolean;
  clearOrderInfo(): void;
  getOrderInfo(): OrderInfo | undefined;
  setOrderInfo(value?: OrderInfo): void;

  getOrderType(): OrderTypeMap[keyof OrderTypeMap];
  setOrderType(value: OrderTypeMap[keyof OrderTypeMap]): void;

  getMargin(): string;
  setMargin(value: string): void;

  getTriggerPrice(): string;
  setTriggerPrice(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DerivativeOrder.AsObject;
  static toObject(includeInstance: boolean, msg: DerivativeOrder): DerivativeOrder.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DerivativeOrder, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DerivativeOrder;
  static deserializeBinaryFromReader(message: DerivativeOrder, reader: jspb.BinaryReader): DerivativeOrder;
}

export namespace DerivativeOrder {
  export type AsObject = {
    marketId: string,
    orderInfo?: OrderInfo.AsObject,
    orderType: OrderTypeMap[keyof OrderTypeMap],
    margin: string,
    triggerPrice: string,
  }
}

export class SubaccountOrderbookMetadata extends jspb.Message {
  getVanillaLimitOrderCount(): number;
  setVanillaLimitOrderCount(value: number): void;

  getReduceOnlyLimitOrderCount(): number;
  setReduceOnlyLimitOrderCount(value: number): void;

  getAggregateReduceOnlyQuantity(): string;
  setAggregateReduceOnlyQuantity(value: string): void;

  getAggregateVanillaQuantity(): string;
  setAggregateVanillaQuantity(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SubaccountOrderbookMetadata.AsObject;
  static toObject(includeInstance: boolean, msg: SubaccountOrderbookMetadata): SubaccountOrderbookMetadata.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SubaccountOrderbookMetadata, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SubaccountOrderbookMetadata;
  static deserializeBinaryFromReader(message: SubaccountOrderbookMetadata, reader: jspb.BinaryReader): SubaccountOrderbookMetadata;
}

export namespace SubaccountOrderbookMetadata {
  export type AsObject = {
    vanillaLimitOrderCount: number,
    reduceOnlyLimitOrderCount: number,
    aggregateReduceOnlyQuantity: string,
    aggregateVanillaQuantity: string,
  }
}

export class SubaccountOrder extends jspb.Message {
  getPrice(): string;
  setPrice(value: string): void;

  getQuantity(): string;
  setQuantity(value: string): void;

  getIsreduceonly(): boolean;
  setIsreduceonly(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SubaccountOrder.AsObject;
  static toObject(includeInstance: boolean, msg: SubaccountOrder): SubaccountOrder.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SubaccountOrder, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SubaccountOrder;
  static deserializeBinaryFromReader(message: SubaccountOrder, reader: jspb.BinaryReader): SubaccountOrder;
}

export namespace SubaccountOrder {
  export type AsObject = {
    price: string,
    quantity: string,
    isreduceonly: boolean,
  }
}

export class DerivativeLimitOrder extends jspb.Message {
  hasOrderInfo(): boolean;
  clearOrderInfo(): void;
  getOrderInfo(): OrderInfo | undefined;
  setOrderInfo(value?: OrderInfo): void;

  getOrderType(): OrderTypeMap[keyof OrderTypeMap];
  setOrderType(value: OrderTypeMap[keyof OrderTypeMap]): void;

  getMargin(): string;
  setMargin(value: string): void;

  getFillable(): string;
  setFillable(value: string): void;

  getTriggerPrice(): string;
  setTriggerPrice(value: string): void;

  getOrderHash(): Uint8Array | string;
  getOrderHash_asU8(): Uint8Array;
  getOrderHash_asB64(): string;
  setOrderHash(value: Uint8Array | string): void;

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
    orderInfo?: OrderInfo.AsObject,
    orderType: OrderTypeMap[keyof OrderTypeMap],
    margin: string,
    fillable: string,
    triggerPrice: string,
    orderHash: Uint8Array | string,
  }
}

export class DerivativeMarketOrder extends jspb.Message {
  hasOrderInfo(): boolean;
  clearOrderInfo(): void;
  getOrderInfo(): OrderInfo | undefined;
  setOrderInfo(value?: OrderInfo): void;

  getOrderType(): OrderTypeMap[keyof OrderTypeMap];
  setOrderType(value: OrderTypeMap[keyof OrderTypeMap]): void;

  getMargin(): string;
  setMargin(value: string): void;

  getMarginHold(): string;
  setMarginHold(value: string): void;

  getTriggerPrice(): string;
  setTriggerPrice(value: string): void;

  getOrderHash(): Uint8Array | string;
  getOrderHash_asU8(): Uint8Array;
  getOrderHash_asB64(): string;
  setOrderHash(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DerivativeMarketOrder.AsObject;
  static toObject(includeInstance: boolean, msg: DerivativeMarketOrder): DerivativeMarketOrder.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DerivativeMarketOrder, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DerivativeMarketOrder;
  static deserializeBinaryFromReader(message: DerivativeMarketOrder, reader: jspb.BinaryReader): DerivativeMarketOrder;
}

export namespace DerivativeMarketOrder {
  export type AsObject = {
    orderInfo?: OrderInfo.AsObject,
    orderType: OrderTypeMap[keyof OrderTypeMap],
    margin: string,
    marginHold: string,
    triggerPrice: string,
    orderHash: Uint8Array | string,
  }
}

export class Position extends jspb.Message {
  getIslong(): boolean;
  setIslong(value: boolean): void;

  getQuantity(): string;
  setQuantity(value: string): void;

  getEntryPrice(): string;
  setEntryPrice(value: string): void;

  getMargin(): string;
  setMargin(value: string): void;

  getCumulativeFundingEntry(): string;
  setCumulativeFundingEntry(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Position.AsObject;
  static toObject(includeInstance: boolean, msg: Position): Position.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Position, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Position;
  static deserializeBinaryFromReader(message: Position, reader: jspb.BinaryReader): Position;
}

export namespace Position {
  export type AsObject = {
    islong: boolean,
    quantity: string,
    entryPrice: string,
    margin: string,
    cumulativeFundingEntry: string,
  }
}

export class MarketOrderIndicator extends jspb.Message {
  getMarketId(): string;
  setMarketId(value: string): void;

  getIsbuy(): boolean;
  setIsbuy(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MarketOrderIndicator.AsObject;
  static toObject(includeInstance: boolean, msg: MarketOrderIndicator): MarketOrderIndicator.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MarketOrderIndicator, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MarketOrderIndicator;
  static deserializeBinaryFromReader(message: MarketOrderIndicator, reader: jspb.BinaryReader): MarketOrderIndicator;
}

export namespace MarketOrderIndicator {
  export type AsObject = {
    marketId: string,
    isbuy: boolean,
  }
}

export class TradeLog extends jspb.Message {
  getQuantity(): string;
  setQuantity(value: string): void;

  getPrice(): string;
  setPrice(value: string): void;

  getSubaccountId(): Uint8Array | string;
  getSubaccountId_asU8(): Uint8Array;
  getSubaccountId_asB64(): string;
  setSubaccountId(value: Uint8Array | string): void;

  getFee(): string;
  setFee(value: string): void;

  getOrderHash(): Uint8Array | string;
  getOrderHash_asU8(): Uint8Array;
  getOrderHash_asB64(): string;
  setOrderHash(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TradeLog.AsObject;
  static toObject(includeInstance: boolean, msg: TradeLog): TradeLog.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TradeLog, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TradeLog;
  static deserializeBinaryFromReader(message: TradeLog, reader: jspb.BinaryReader): TradeLog;
}

export namespace TradeLog {
  export type AsObject = {
    quantity: string,
    price: string,
    subaccountId: Uint8Array | string,
    fee: string,
    orderHash: Uint8Array | string,
  }
}

export class PositionDelta extends jspb.Message {
  getIsLong(): boolean;
  setIsLong(value: boolean): void;

  getExecutionQuantity(): string;
  setExecutionQuantity(value: string): void;

  getExecutionMargin(): string;
  setExecutionMargin(value: string): void;

  getExecutionPrice(): string;
  setExecutionPrice(value: string): void;

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
    isLong: boolean,
    executionQuantity: string,
    executionMargin: string,
    executionPrice: string,
  }
}

export class DerivativeTradeLog extends jspb.Message {
  getSubaccountId(): Uint8Array | string;
  getSubaccountId_asU8(): Uint8Array;
  getSubaccountId_asB64(): string;
  setSubaccountId(value: Uint8Array | string): void;

  hasPositionDelta(): boolean;
  clearPositionDelta(): void;
  getPositionDelta(): PositionDelta | undefined;
  setPositionDelta(value?: PositionDelta): void;

  getPayout(): string;
  setPayout(value: string): void;

  getFee(): string;
  setFee(value: string): void;

  getOrderHash(): Uint8Array | string;
  getOrderHash_asU8(): Uint8Array;
  getOrderHash_asB64(): string;
  setOrderHash(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DerivativeTradeLog.AsObject;
  static toObject(includeInstance: boolean, msg: DerivativeTradeLog): DerivativeTradeLog.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DerivativeTradeLog, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DerivativeTradeLog;
  static deserializeBinaryFromReader(message: DerivativeTradeLog, reader: jspb.BinaryReader): DerivativeTradeLog;
}

export namespace DerivativeTradeLog {
  export type AsObject = {
    subaccountId: Uint8Array | string,
    positionDelta?: PositionDelta.AsObject,
    payout: string,
    fee: string,
    orderHash: Uint8Array | string,
  }
}

export class EventBatchSpotExecution extends jspb.Message {
  getMarketId(): string;
  setMarketId(value: string): void;

  getIsBuy(): boolean;
  setIsBuy(value: boolean): void;

  getExecutiontype(): ExecutionTypeMap[keyof ExecutionTypeMap];
  setExecutiontype(value: ExecutionTypeMap[keyof ExecutionTypeMap]): void;

  clearTradesList(): void;
  getTradesList(): Array<TradeLog>;
  setTradesList(value: Array<TradeLog>): void;
  addTrades(value?: TradeLog, index?: number): TradeLog;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EventBatchSpotExecution.AsObject;
  static toObject(includeInstance: boolean, msg: EventBatchSpotExecution): EventBatchSpotExecution.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EventBatchSpotExecution, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EventBatchSpotExecution;
  static deserializeBinaryFromReader(message: EventBatchSpotExecution, reader: jspb.BinaryReader): EventBatchSpotExecution;
}

export namespace EventBatchSpotExecution {
  export type AsObject = {
    marketId: string,
    isBuy: boolean,
    executiontype: ExecutionTypeMap[keyof ExecutionTypeMap],
    tradesList: Array<TradeLog.AsObject>,
  }
}

export class EventBatchDerivativeExecution extends jspb.Message {
  getMarketId(): string;
  setMarketId(value: string): void;

  getIsBuy(): boolean;
  setIsBuy(value: boolean): void;

  getIsLiquidation(): boolean;
  setIsLiquidation(value: boolean): void;

  getCumulativeFunding(): string;
  setCumulativeFunding(value: string): void;

  getExecutiontype(): ExecutionTypeMap[keyof ExecutionTypeMap];
  setExecutiontype(value: ExecutionTypeMap[keyof ExecutionTypeMap]): void;

  clearTradesList(): void;
  getTradesList(): Array<DerivativeTradeLog>;
  setTradesList(value: Array<DerivativeTradeLog>): void;
  addTrades(value?: DerivativeTradeLog, index?: number): DerivativeTradeLog;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EventBatchDerivativeExecution.AsObject;
  static toObject(includeInstance: boolean, msg: EventBatchDerivativeExecution): EventBatchDerivativeExecution.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EventBatchDerivativeExecution, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EventBatchDerivativeExecution;
  static deserializeBinaryFromReader(message: EventBatchDerivativeExecution, reader: jspb.BinaryReader): EventBatchDerivativeExecution;
}

export namespace EventBatchDerivativeExecution {
  export type AsObject = {
    marketId: string,
    isBuy: boolean,
    isLiquidation: boolean,
    cumulativeFunding: string,
    executiontype: ExecutionTypeMap[keyof ExecutionTypeMap],
    tradesList: Array<DerivativeTradeLog.AsObject>,
  }
}

export class SubaccountPosition extends jspb.Message {
  hasPosition(): boolean;
  clearPosition(): void;
  getPosition(): Position | undefined;
  setPosition(value?: Position): void;

  getSubaccountId(): Uint8Array | string;
  getSubaccountId_asU8(): Uint8Array;
  getSubaccountId_asB64(): string;
  setSubaccountId(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SubaccountPosition.AsObject;
  static toObject(includeInstance: boolean, msg: SubaccountPosition): SubaccountPosition.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SubaccountPosition, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SubaccountPosition;
  static deserializeBinaryFromReader(message: SubaccountPosition, reader: jspb.BinaryReader): SubaccountPosition;
}

export namespace SubaccountPosition {
  export type AsObject = {
    position?: Position.AsObject,
    subaccountId: Uint8Array | string,
  }
}

export class EventBatchDerivativePosition extends jspb.Message {
  getMarketId(): string;
  setMarketId(value: string): void;

  clearPositionsList(): void;
  getPositionsList(): Array<SubaccountPosition>;
  setPositionsList(value: Array<SubaccountPosition>): void;
  addPositions(value?: SubaccountPosition, index?: number): SubaccountPosition;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EventBatchDerivativePosition.AsObject;
  static toObject(includeInstance: boolean, msg: EventBatchDerivativePosition): EventBatchDerivativePosition.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EventBatchDerivativePosition, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EventBatchDerivativePosition;
  static deserializeBinaryFromReader(message: EventBatchDerivativePosition, reader: jspb.BinaryReader): EventBatchDerivativePosition;
}

export namespace EventBatchDerivativePosition {
  export type AsObject = {
    marketId: string,
    positionsList: Array<SubaccountPosition.AsObject>,
  }
}

export class EventDerivativeMarketPaused extends jspb.Message {
  getMarketId(): string;
  setMarketId(value: string): void;

  getSettlePrice(): string;
  setSettlePrice(value: string): void;

  getTotalMissingFunds(): string;
  setTotalMissingFunds(value: string): void;

  getMissingFundsRate(): string;
  setMissingFundsRate(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EventDerivativeMarketPaused.AsObject;
  static toObject(includeInstance: boolean, msg: EventDerivativeMarketPaused): EventDerivativeMarketPaused.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EventDerivativeMarketPaused, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EventDerivativeMarketPaused;
  static deserializeBinaryFromReader(message: EventDerivativeMarketPaused, reader: jspb.BinaryReader): EventDerivativeMarketPaused;
}

export namespace EventDerivativeMarketPaused {
  export type AsObject = {
    marketId: string,
    settlePrice: string,
    totalMissingFunds: string,
    missingFundsRate: string,
  }
}

export class EventNewSpotOrders extends jspb.Message {
  getMarketId(): string;
  setMarketId(value: string): void;

  clearBuyOrdersList(): void;
  getBuyOrdersList(): Array<SpotLimitOrder>;
  setBuyOrdersList(value: Array<SpotLimitOrder>): void;
  addBuyOrders(value?: SpotLimitOrder, index?: number): SpotLimitOrder;

  clearSellOrdersList(): void;
  getSellOrdersList(): Array<SpotLimitOrder>;
  setSellOrdersList(value: Array<SpotLimitOrder>): void;
  addSellOrders(value?: SpotLimitOrder, index?: number): SpotLimitOrder;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EventNewSpotOrders.AsObject;
  static toObject(includeInstance: boolean, msg: EventNewSpotOrders): EventNewSpotOrders.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EventNewSpotOrders, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EventNewSpotOrders;
  static deserializeBinaryFromReader(message: EventNewSpotOrders, reader: jspb.BinaryReader): EventNewSpotOrders;
}

export namespace EventNewSpotOrders {
  export type AsObject = {
    marketId: string,
    buyOrdersList: Array<SpotLimitOrder.AsObject>,
    sellOrdersList: Array<SpotLimitOrder.AsObject>,
  }
}

export class EventNewDerivativeOrders extends jspb.Message {
  getMarketId(): string;
  setMarketId(value: string): void;

  clearBuyOrdersList(): void;
  getBuyOrdersList(): Array<DerivativeLimitOrder>;
  setBuyOrdersList(value: Array<DerivativeLimitOrder>): void;
  addBuyOrders(value?: DerivativeLimitOrder, index?: number): DerivativeLimitOrder;

  clearSellOrdersList(): void;
  getSellOrdersList(): Array<DerivativeLimitOrder>;
  setSellOrdersList(value: Array<DerivativeLimitOrder>): void;
  addSellOrders(value?: DerivativeLimitOrder, index?: number): DerivativeLimitOrder;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EventNewDerivativeOrders.AsObject;
  static toObject(includeInstance: boolean, msg: EventNewDerivativeOrders): EventNewDerivativeOrders.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EventNewDerivativeOrders, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EventNewDerivativeOrders;
  static deserializeBinaryFromReader(message: EventNewDerivativeOrders, reader: jspb.BinaryReader): EventNewDerivativeOrders;
}

export namespace EventNewDerivativeOrders {
  export type AsObject = {
    marketId: string,
    buyOrdersList: Array<DerivativeLimitOrder.AsObject>,
    sellOrdersList: Array<DerivativeLimitOrder.AsObject>,
  }
}

export class EventCancelSpotOrder extends jspb.Message {
  getMarketId(): string;
  setMarketId(value: string): void;

  hasOrder(): boolean;
  clearOrder(): void;
  getOrder(): SpotLimitOrder | undefined;
  setOrder(value?: SpotLimitOrder): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EventCancelSpotOrder.AsObject;
  static toObject(includeInstance: boolean, msg: EventCancelSpotOrder): EventCancelSpotOrder.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EventCancelSpotOrder, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EventCancelSpotOrder;
  static deserializeBinaryFromReader(message: EventCancelSpotOrder, reader: jspb.BinaryReader): EventCancelSpotOrder;
}

export namespace EventCancelSpotOrder {
  export type AsObject = {
    marketId: string,
    order?: SpotLimitOrder.AsObject,
  }
}

export class EventSpotMarketUpdate extends jspb.Message {
  hasMarket(): boolean;
  clearMarket(): void;
  getMarket(): SpotMarket | undefined;
  setMarket(value?: SpotMarket): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EventSpotMarketUpdate.AsObject;
  static toObject(includeInstance: boolean, msg: EventSpotMarketUpdate): EventSpotMarketUpdate.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EventSpotMarketUpdate, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EventSpotMarketUpdate;
  static deserializeBinaryFromReader(message: EventSpotMarketUpdate, reader: jspb.BinaryReader): EventSpotMarketUpdate;
}

export namespace EventSpotMarketUpdate {
  export type AsObject = {
    market?: SpotMarket.AsObject,
  }
}

export class EventPerpetualMarketUpdate extends jspb.Message {
  hasMarket(): boolean;
  clearMarket(): void;
  getMarket(): DerivativeMarket | undefined;
  setMarket(value?: DerivativeMarket): void;

  hasPerpetualMarketInfo(): boolean;
  clearPerpetualMarketInfo(): void;
  getPerpetualMarketInfo(): PerpetualMarketInfo | undefined;
  setPerpetualMarketInfo(value?: PerpetualMarketInfo): void;

  hasFunding(): boolean;
  clearFunding(): void;
  getFunding(): PerpetualMarketFunding | undefined;
  setFunding(value?: PerpetualMarketFunding): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EventPerpetualMarketUpdate.AsObject;
  static toObject(includeInstance: boolean, msg: EventPerpetualMarketUpdate): EventPerpetualMarketUpdate.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EventPerpetualMarketUpdate, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EventPerpetualMarketUpdate;
  static deserializeBinaryFromReader(message: EventPerpetualMarketUpdate, reader: jspb.BinaryReader): EventPerpetualMarketUpdate;
}

export namespace EventPerpetualMarketUpdate {
  export type AsObject = {
    market?: DerivativeMarket.AsObject,
    perpetualMarketInfo?: PerpetualMarketInfo.AsObject,
    funding?: PerpetualMarketFunding.AsObject,
  }
}

export class EventExpiryFuturesMarketUpdate extends jspb.Message {
  hasMarket(): boolean;
  clearMarket(): void;
  getMarket(): DerivativeMarket | undefined;
  setMarket(value?: DerivativeMarket): void;

  hasExpiryFuturesMarketInfo(): boolean;
  clearExpiryFuturesMarketInfo(): void;
  getExpiryFuturesMarketInfo(): ExpiryFuturesMarketInfo | undefined;
  setExpiryFuturesMarketInfo(value?: ExpiryFuturesMarketInfo): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EventExpiryFuturesMarketUpdate.AsObject;
  static toObject(includeInstance: boolean, msg: EventExpiryFuturesMarketUpdate): EventExpiryFuturesMarketUpdate.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EventExpiryFuturesMarketUpdate, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EventExpiryFuturesMarketUpdate;
  static deserializeBinaryFromReader(message: EventExpiryFuturesMarketUpdate, reader: jspb.BinaryReader): EventExpiryFuturesMarketUpdate;
}

export namespace EventExpiryFuturesMarketUpdate {
  export type AsObject = {
    market?: DerivativeMarket.AsObject,
    expiryFuturesMarketInfo?: ExpiryFuturesMarketInfo.AsObject,
  }
}

export class EventPerpetualMarketFundingUpdate extends jspb.Message {
  getMarketId(): string;
  setMarketId(value: string): void;

  hasFunding(): boolean;
  clearFunding(): void;
  getFunding(): PerpetualMarketFunding | undefined;
  setFunding(value?: PerpetualMarketFunding): void;

  getIsHourlyFunding(): boolean;
  setIsHourlyFunding(value: boolean): void;

  getFundingRate(): string;
  setFundingRate(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EventPerpetualMarketFundingUpdate.AsObject;
  static toObject(includeInstance: boolean, msg: EventPerpetualMarketFundingUpdate): EventPerpetualMarketFundingUpdate.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EventPerpetualMarketFundingUpdate, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EventPerpetualMarketFundingUpdate;
  static deserializeBinaryFromReader(message: EventPerpetualMarketFundingUpdate, reader: jspb.BinaryReader): EventPerpetualMarketFundingUpdate;
}

export namespace EventPerpetualMarketFundingUpdate {
  export type AsObject = {
    marketId: string,
    funding?: PerpetualMarketFunding.AsObject,
    isHourlyFunding: boolean,
    fundingRate: string,
  }
}

export class EventSubaccountDeposit extends jspb.Message {
  getSrcAddress(): string;
  setSrcAddress(value: string): void;

  getSubaccountId(): Uint8Array | string;
  getSubaccountId_asU8(): Uint8Array;
  getSubaccountId_asB64(): string;
  setSubaccountId(value: Uint8Array | string): void;

  hasAmount(): boolean;
  clearAmount(): void;
  getAmount(): cosmos_base_v1beta1_coin_pb.Coin | undefined;
  setAmount(value?: cosmos_base_v1beta1_coin_pb.Coin): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EventSubaccountDeposit.AsObject;
  static toObject(includeInstance: boolean, msg: EventSubaccountDeposit): EventSubaccountDeposit.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EventSubaccountDeposit, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EventSubaccountDeposit;
  static deserializeBinaryFromReader(message: EventSubaccountDeposit, reader: jspb.BinaryReader): EventSubaccountDeposit;
}

export namespace EventSubaccountDeposit {
  export type AsObject = {
    srcAddress: string,
    subaccountId: Uint8Array | string,
    amount?: cosmos_base_v1beta1_coin_pb.Coin.AsObject,
  }
}

export class EventSubaccountWithdraw extends jspb.Message {
  getSubaccountId(): Uint8Array | string;
  getSubaccountId_asU8(): Uint8Array;
  getSubaccountId_asB64(): string;
  setSubaccountId(value: Uint8Array | string): void;

  getDstAddress(): string;
  setDstAddress(value: string): void;

  hasAmount(): boolean;
  clearAmount(): void;
  getAmount(): cosmos_base_v1beta1_coin_pb.Coin | undefined;
  setAmount(value?: cosmos_base_v1beta1_coin_pb.Coin): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EventSubaccountWithdraw.AsObject;
  static toObject(includeInstance: boolean, msg: EventSubaccountWithdraw): EventSubaccountWithdraw.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EventSubaccountWithdraw, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EventSubaccountWithdraw;
  static deserializeBinaryFromReader(message: EventSubaccountWithdraw, reader: jspb.BinaryReader): EventSubaccountWithdraw;
}

export namespace EventSubaccountWithdraw {
  export type AsObject = {
    subaccountId: Uint8Array | string,
    dstAddress: string,
    amount?: cosmos_base_v1beta1_coin_pb.Coin.AsObject,
  }
}

export class EventSubaccountBalanceTransfer extends jspb.Message {
  getSrcSubaccountId(): string;
  setSrcSubaccountId(value: string): void;

  getDstSubaccountId(): string;
  setDstSubaccountId(value: string): void;

  hasAmount(): boolean;
  clearAmount(): void;
  getAmount(): cosmos_base_v1beta1_coin_pb.Coin | undefined;
  setAmount(value?: cosmos_base_v1beta1_coin_pb.Coin): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EventSubaccountBalanceTransfer.AsObject;
  static toObject(includeInstance: boolean, msg: EventSubaccountBalanceTransfer): EventSubaccountBalanceTransfer.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EventSubaccountBalanceTransfer, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EventSubaccountBalanceTransfer;
  static deserializeBinaryFromReader(message: EventSubaccountBalanceTransfer, reader: jspb.BinaryReader): EventSubaccountBalanceTransfer;
}

export namespace EventSubaccountBalanceTransfer {
  export type AsObject = {
    srcSubaccountId: string,
    dstSubaccountId: string,
    amount?: cosmos_base_v1beta1_coin_pb.Coin.AsObject,
  }
}

export class SubaccountDeposit extends jspb.Message {
  getSubaccountId(): Uint8Array | string;
  getSubaccountId_asU8(): Uint8Array;
  getSubaccountId_asB64(): string;
  setSubaccountId(value: Uint8Array | string): void;

  hasDeposit(): boolean;
  clearDeposit(): void;
  getDeposit(): Deposit | undefined;
  setDeposit(value?: Deposit): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SubaccountDeposit.AsObject;
  static toObject(includeInstance: boolean, msg: SubaccountDeposit): SubaccountDeposit.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SubaccountDeposit, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SubaccountDeposit;
  static deserializeBinaryFromReader(message: SubaccountDeposit, reader: jspb.BinaryReader): SubaccountDeposit;
}

export namespace SubaccountDeposit {
  export type AsObject = {
    subaccountId: Uint8Array | string,
    deposit?: Deposit.AsObject,
  }
}

export class DepositUpdate extends jspb.Message {
  getDenom(): string;
  setDenom(value: string): void;

  clearDepositsList(): void;
  getDepositsList(): Array<SubaccountDeposit>;
  setDepositsList(value: Array<SubaccountDeposit>): void;
  addDeposits(value?: SubaccountDeposit, index?: number): SubaccountDeposit;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DepositUpdate.AsObject;
  static toObject(includeInstance: boolean, msg: DepositUpdate): DepositUpdate.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DepositUpdate, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DepositUpdate;
  static deserializeBinaryFromReader(message: DepositUpdate, reader: jspb.BinaryReader): DepositUpdate;
}

export namespace DepositUpdate {
  export type AsObject = {
    denom: string,
    depositsList: Array<SubaccountDeposit.AsObject>,
  }
}

export class EventBatchDepositUpdate extends jspb.Message {
  clearDepositUpdatesList(): void;
  getDepositUpdatesList(): Array<DepositUpdate>;
  setDepositUpdatesList(value: Array<DepositUpdate>): void;
  addDepositUpdates(value?: DepositUpdate, index?: number): DepositUpdate;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EventBatchDepositUpdate.AsObject;
  static toObject(includeInstance: boolean, msg: EventBatchDepositUpdate): EventBatchDepositUpdate.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EventBatchDepositUpdate, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EventBatchDepositUpdate;
  static deserializeBinaryFromReader(message: EventBatchDepositUpdate, reader: jspb.BinaryReader): EventBatchDepositUpdate;
}

export namespace EventBatchDepositUpdate {
  export type AsObject = {
    depositUpdatesList: Array<DepositUpdate.AsObject>,
  }
}

export class DerivativeMarketOrderCancel extends jspb.Message {
  hasMarketOrder(): boolean;
  clearMarketOrder(): void;
  getMarketOrder(): DerivativeMarketOrder | undefined;
  setMarketOrder(value?: DerivativeMarketOrder): void;

  getCancelQuantity(): string;
  setCancelQuantity(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DerivativeMarketOrderCancel.AsObject;
  static toObject(includeInstance: boolean, msg: DerivativeMarketOrderCancel): DerivativeMarketOrderCancel.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DerivativeMarketOrderCancel, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DerivativeMarketOrderCancel;
  static deserializeBinaryFromReader(message: DerivativeMarketOrderCancel, reader: jspb.BinaryReader): DerivativeMarketOrderCancel;
}

export namespace DerivativeMarketOrderCancel {
  export type AsObject = {
    marketOrder?: DerivativeMarketOrder.AsObject,
    cancelQuantity: string,
  }
}

export class EventCancelDerivativeOrder extends jspb.Message {
  getMarketId(): string;
  setMarketId(value: string): void;

  getIslimitcancel(): boolean;
  setIslimitcancel(value: boolean): void;

  hasLimitOrder(): boolean;
  clearLimitOrder(): void;
  getLimitOrder(): DerivativeLimitOrder | undefined;
  setLimitOrder(value?: DerivativeLimitOrder): void;

  hasMarketOrderCancel(): boolean;
  clearMarketOrderCancel(): void;
  getMarketOrderCancel(): DerivativeMarketOrderCancel | undefined;
  setMarketOrderCancel(value?: DerivativeMarketOrderCancel): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EventCancelDerivativeOrder.AsObject;
  static toObject(includeInstance: boolean, msg: EventCancelDerivativeOrder): EventCancelDerivativeOrder.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EventCancelDerivativeOrder, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EventCancelDerivativeOrder;
  static deserializeBinaryFromReader(message: EventCancelDerivativeOrder, reader: jspb.BinaryReader): EventCancelDerivativeOrder;
}

export namespace EventCancelDerivativeOrder {
  export type AsObject = {
    marketId: string,
    islimitcancel: boolean,
    limitOrder?: DerivativeLimitOrder.AsObject,
    marketOrderCancel?: DerivativeMarketOrderCancel.AsObject,
  }
}

export class LiquidityMiningCampaign extends jspb.Message {
  clearSpotMarketIdsList(): void;
  getSpotMarketIdsList(): Array<string>;
  setSpotMarketIdsList(value: Array<string>): void;
  addSpotMarketIds(value: string, index?: number): string;

  clearSpotMarketWeightsList(): void;
  getSpotMarketWeightsList(): Array<string>;
  setSpotMarketWeightsList(value: Array<string>): void;
  addSpotMarketWeights(value: string, index?: number): string;

  clearDerivativeMarketIdsList(): void;
  getDerivativeMarketIdsList(): Array<string>;
  setDerivativeMarketIdsList(value: Array<string>): void;
  addDerivativeMarketIds(value: string, index?: number): string;

  clearDerivativeMarketWeightsList(): void;
  getDerivativeMarketWeightsList(): Array<string>;
  setDerivativeMarketWeightsList(value: Array<string>): void;
  addDerivativeMarketWeights(value: string, index?: number): string;

  clearMaxEpochRewardsList(): void;
  getMaxEpochRewardsList(): Array<cosmos_base_v1beta1_coin_pb.Coin>;
  setMaxEpochRewardsList(value: Array<cosmos_base_v1beta1_coin_pb.Coin>): void;
  addMaxEpochRewards(value?: cosmos_base_v1beta1_coin_pb.Coin, index?: number): cosmos_base_v1beta1_coin_pb.Coin;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LiquidityMiningCampaign.AsObject;
  static toObject(includeInstance: boolean, msg: LiquidityMiningCampaign): LiquidityMiningCampaign.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LiquidityMiningCampaign, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LiquidityMiningCampaign;
  static deserializeBinaryFromReader(message: LiquidityMiningCampaign, reader: jspb.BinaryReader): LiquidityMiningCampaign;
}

export namespace LiquidityMiningCampaign {
  export type AsObject = {
    spotMarketIdsList: Array<string>,
    spotMarketWeightsList: Array<string>,
    derivativeMarketIdsList: Array<string>,
    derivativeMarketWeightsList: Array<string>,
    maxEpochRewardsList: Array<cosmos_base_v1beta1_coin_pb.Coin.AsObject>,
  }
}

export interface MarketStatusMap {
  UNSPECIFIED: 0;
  ACTIVE: 1;
  PAUSED: 2;
  SUSPENDED: 3;
  DEMOLISHED: 4;
  EXPIRED: 5;
}

export const MarketStatus: MarketStatusMap;

export interface OrderTypeMap {
  UNSPECIFIED: 0;
  BUY: 1;
  SELL: 2;
  STOP_BUY: 3;
  STOP_SELL: 4;
  TAKE_BUY: 5;
  TAKE_SELL: 6;
}

export const OrderType: OrderTypeMap;

export interface ExecutionTypeMap {
  UNSPECIFIEDEXECUTIONTYPE: 0;
  MARKET: 1;
  LIMITFILL: 2;
  LIMITMATCHRESTINGORDER: 3;
  LIMITMATCHNEWORDER: 4;
}

export const ExecutionType: ExecutionTypeMap;

