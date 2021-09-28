// package: injective.exchange.v1beta1
// file: injective/exchange/v1beta1/genesis.proto

import * as jspb from "google-protobuf";
import * as injective_exchange_v1beta1_exchange_pb from "../../../injective/exchange/v1beta1/exchange_pb";
import * as gogoproto_gogo_pb from "../../../gogoproto/gogo_pb";

export class GenesisState extends jspb.Message {
  hasParams(): boolean;
  clearParams(): void;
  getParams(): injective_exchange_v1beta1_exchange_pb.Params | undefined;
  setParams(value?: injective_exchange_v1beta1_exchange_pb.Params): void;

  clearSpotMarketsList(): void;
  getSpotMarketsList(): Array<injective_exchange_v1beta1_exchange_pb.SpotMarket>;
  setSpotMarketsList(value: Array<injective_exchange_v1beta1_exchange_pb.SpotMarket>): void;
  addSpotMarkets(value?: injective_exchange_v1beta1_exchange_pb.SpotMarket, index?: number): injective_exchange_v1beta1_exchange_pb.SpotMarket;

  clearDerivativeMarketsList(): void;
  getDerivativeMarketsList(): Array<injective_exchange_v1beta1_exchange_pb.DerivativeMarket>;
  setDerivativeMarketsList(value: Array<injective_exchange_v1beta1_exchange_pb.DerivativeMarket>): void;
  addDerivativeMarkets(value?: injective_exchange_v1beta1_exchange_pb.DerivativeMarket, index?: number): injective_exchange_v1beta1_exchange_pb.DerivativeMarket;

  clearSpotOrderbookList(): void;
  getSpotOrderbookList(): Array<SpotOrderBook>;
  setSpotOrderbookList(value: Array<SpotOrderBook>): void;
  addSpotOrderbook(value?: SpotOrderBook, index?: number): SpotOrderBook;

  clearDerivativeOrderbookList(): void;
  getDerivativeOrderbookList(): Array<DerivativeOrderBook>;
  setDerivativeOrderbookList(value: Array<DerivativeOrderBook>): void;
  addDerivativeOrderbook(value?: DerivativeOrderBook, index?: number): DerivativeOrderBook;

  clearBalancesList(): void;
  getBalancesList(): Array<Balance>;
  setBalancesList(value: Array<Balance>): void;
  addBalances(value?: Balance, index?: number): Balance;

  clearPositionsList(): void;
  getPositionsList(): Array<DerivativePosition>;
  setPositionsList(value: Array<DerivativePosition>): void;
  addPositions(value?: DerivativePosition, index?: number): DerivativePosition;

  clearSubaccountTradeNoncesList(): void;
  getSubaccountTradeNoncesList(): Array<SubaccountNonce>;
  setSubaccountTradeNoncesList(value: Array<SubaccountNonce>): void;
  addSubaccountTradeNonces(value?: SubaccountNonce, index?: number): SubaccountNonce;

  clearExpiryFuturesMarketInfoStateList(): void;
  getExpiryFuturesMarketInfoStateList(): Array<ExpiryFuturesMarketInfoState>;
  setExpiryFuturesMarketInfoStateList(value: Array<ExpiryFuturesMarketInfoState>): void;
  addExpiryFuturesMarketInfoState(value?: ExpiryFuturesMarketInfoState, index?: number): ExpiryFuturesMarketInfoState;

  clearPerpetualMarketInfoList(): void;
  getPerpetualMarketInfoList(): Array<injective_exchange_v1beta1_exchange_pb.PerpetualMarketInfo>;
  setPerpetualMarketInfoList(value: Array<injective_exchange_v1beta1_exchange_pb.PerpetualMarketInfo>): void;
  addPerpetualMarketInfo(value?: injective_exchange_v1beta1_exchange_pb.PerpetualMarketInfo, index?: number): injective_exchange_v1beta1_exchange_pb.PerpetualMarketInfo;

  clearPerpetualMarketFundingStateList(): void;
  getPerpetualMarketFundingStateList(): Array<PerpetualMarketFundingState>;
  setPerpetualMarketFundingStateList(value: Array<PerpetualMarketFundingState>): void;
  addPerpetualMarketFundingState(value?: PerpetualMarketFundingState, index?: number): PerpetualMarketFundingState;

  clearDerivativeMarketSettlementScheduledList(): void;
  getDerivativeMarketSettlementScheduledList(): Array<injective_exchange_v1beta1_exchange_pb.DerivativeMarketSettlementInfo>;
  setDerivativeMarketSettlementScheduledList(value: Array<injective_exchange_v1beta1_exchange_pb.DerivativeMarketSettlementInfo>): void;
  addDerivativeMarketSettlementScheduled(value?: injective_exchange_v1beta1_exchange_pb.DerivativeMarketSettlementInfo, index?: number): injective_exchange_v1beta1_exchange_pb.DerivativeMarketSettlementInfo;

  getIsSpotExchangeEnabled(): boolean;
  setIsSpotExchangeEnabled(value: boolean): void;

  getIsDerivativesExchangeEnabled(): boolean;
  setIsDerivativesExchangeEnabled(value: boolean): void;

  clearLiquidityMiningAccountPointsList(): void;
  getLiquidityMiningAccountPointsList(): Array<LiquidityMiningAccountPoints>;
  setLiquidityMiningAccountPointsList(value: Array<LiquidityMiningAccountPoints>): void;
  addLiquidityMiningAccountPoints(value?: LiquidityMiningAccountPoints, index?: number): LiquidityMiningAccountPoints;

  hasCurrentLiquidityMiningCampaign(): boolean;
  clearCurrentLiquidityMiningCampaign(): void;
  getCurrentLiquidityMiningCampaign(): injective_exchange_v1beta1_exchange_pb.LiquidityMiningCampaign | undefined;
  setCurrentLiquidityMiningCampaign(value?: injective_exchange_v1beta1_exchange_pb.LiquidityMiningCampaign): void;

  hasUpcomingLiquidityMiningCampaign(): boolean;
  clearUpcomingLiquidityMiningCampaign(): void;
  getUpcomingLiquidityMiningCampaign(): injective_exchange_v1beta1_exchange_pb.LiquidityMiningCampaign | undefined;
  setUpcomingLiquidityMiningCampaign(value?: injective_exchange_v1beta1_exchange_pb.LiquidityMiningCampaign): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GenesisState.AsObject;
  static toObject(includeInstance: boolean, msg: GenesisState): GenesisState.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GenesisState, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GenesisState;
  static deserializeBinaryFromReader(message: GenesisState, reader: jspb.BinaryReader): GenesisState;
}

export namespace GenesisState {
  export type AsObject = {
    params?: injective_exchange_v1beta1_exchange_pb.Params.AsObject,
    spotMarketsList: Array<injective_exchange_v1beta1_exchange_pb.SpotMarket.AsObject>,
    derivativeMarketsList: Array<injective_exchange_v1beta1_exchange_pb.DerivativeMarket.AsObject>,
    spotOrderbookList: Array<SpotOrderBook.AsObject>,
    derivativeOrderbookList: Array<DerivativeOrderBook.AsObject>,
    balancesList: Array<Balance.AsObject>,
    positionsList: Array<DerivativePosition.AsObject>,
    subaccountTradeNoncesList: Array<SubaccountNonce.AsObject>,
    expiryFuturesMarketInfoStateList: Array<ExpiryFuturesMarketInfoState.AsObject>,
    perpetualMarketInfoList: Array<injective_exchange_v1beta1_exchange_pb.PerpetualMarketInfo.AsObject>,
    perpetualMarketFundingStateList: Array<PerpetualMarketFundingState.AsObject>,
    derivativeMarketSettlementScheduledList: Array<injective_exchange_v1beta1_exchange_pb.DerivativeMarketSettlementInfo.AsObject>,
    isSpotExchangeEnabled: boolean,
    isDerivativesExchangeEnabled: boolean,
    liquidityMiningAccountPointsList: Array<LiquidityMiningAccountPoints.AsObject>,
    currentLiquidityMiningCampaign?: injective_exchange_v1beta1_exchange_pb.LiquidityMiningCampaign.AsObject,
    upcomingLiquidityMiningCampaign?: injective_exchange_v1beta1_exchange_pb.LiquidityMiningCampaign.AsObject,
  }
}

export class SpotOrderBook extends jspb.Message {
  getMarketId(): string;
  setMarketId(value: string): void;

  getIsbuyside(): boolean;
  setIsbuyside(value: boolean): void;

  clearOrdersList(): void;
  getOrdersList(): Array<injective_exchange_v1beta1_exchange_pb.SpotLimitOrder>;
  setOrdersList(value: Array<injective_exchange_v1beta1_exchange_pb.SpotLimitOrder>): void;
  addOrders(value?: injective_exchange_v1beta1_exchange_pb.SpotLimitOrder, index?: number): injective_exchange_v1beta1_exchange_pb.SpotLimitOrder;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SpotOrderBook.AsObject;
  static toObject(includeInstance: boolean, msg: SpotOrderBook): SpotOrderBook.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SpotOrderBook, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SpotOrderBook;
  static deserializeBinaryFromReader(message: SpotOrderBook, reader: jspb.BinaryReader): SpotOrderBook;
}

export namespace SpotOrderBook {
  export type AsObject = {
    marketId: string,
    isbuyside: boolean,
    ordersList: Array<injective_exchange_v1beta1_exchange_pb.SpotLimitOrder.AsObject>,
  }
}

export class DerivativeOrderBook extends jspb.Message {
  getMarketId(): string;
  setMarketId(value: string): void;

  getIsbuyside(): boolean;
  setIsbuyside(value: boolean): void;

  clearOrdersList(): void;
  getOrdersList(): Array<injective_exchange_v1beta1_exchange_pb.DerivativeLimitOrder>;
  setOrdersList(value: Array<injective_exchange_v1beta1_exchange_pb.DerivativeLimitOrder>): void;
  addOrders(value?: injective_exchange_v1beta1_exchange_pb.DerivativeLimitOrder, index?: number): injective_exchange_v1beta1_exchange_pb.DerivativeLimitOrder;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DerivativeOrderBook.AsObject;
  static toObject(includeInstance: boolean, msg: DerivativeOrderBook): DerivativeOrderBook.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DerivativeOrderBook, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DerivativeOrderBook;
  static deserializeBinaryFromReader(message: DerivativeOrderBook, reader: jspb.BinaryReader): DerivativeOrderBook;
}

export namespace DerivativeOrderBook {
  export type AsObject = {
    marketId: string,
    isbuyside: boolean,
    ordersList: Array<injective_exchange_v1beta1_exchange_pb.DerivativeLimitOrder.AsObject>,
  }
}

export class Balance extends jspb.Message {
  getSubaccountId(): string;
  setSubaccountId(value: string): void;

  getDenom(): string;
  setDenom(value: string): void;

  hasDeposits(): boolean;
  clearDeposits(): void;
  getDeposits(): injective_exchange_v1beta1_exchange_pb.Deposit | undefined;
  setDeposits(value?: injective_exchange_v1beta1_exchange_pb.Deposit): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Balance.AsObject;
  static toObject(includeInstance: boolean, msg: Balance): Balance.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Balance, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Balance;
  static deserializeBinaryFromReader(message: Balance, reader: jspb.BinaryReader): Balance;
}

export namespace Balance {
  export type AsObject = {
    subaccountId: string,
    denom: string,
    deposits?: injective_exchange_v1beta1_exchange_pb.Deposit.AsObject,
  }
}

export class DerivativePosition extends jspb.Message {
  getSubaccountId(): string;
  setSubaccountId(value: string): void;

  getMarketId(): string;
  setMarketId(value: string): void;

  hasPosition(): boolean;
  clearPosition(): void;
  getPosition(): injective_exchange_v1beta1_exchange_pb.Position | undefined;
  setPosition(value?: injective_exchange_v1beta1_exchange_pb.Position): void;

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
    subaccountId: string,
    marketId: string,
    position?: injective_exchange_v1beta1_exchange_pb.Position.AsObject,
  }
}

export class SubaccountNonce extends jspb.Message {
  getSubaccountId(): string;
  setSubaccountId(value: string): void;

  hasSubaccountTradeNonce(): boolean;
  clearSubaccountTradeNonce(): void;
  getSubaccountTradeNonce(): injective_exchange_v1beta1_exchange_pb.SubaccountTradeNonce | undefined;
  setSubaccountTradeNonce(value?: injective_exchange_v1beta1_exchange_pb.SubaccountTradeNonce): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SubaccountNonce.AsObject;
  static toObject(includeInstance: boolean, msg: SubaccountNonce): SubaccountNonce.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SubaccountNonce, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SubaccountNonce;
  static deserializeBinaryFromReader(message: SubaccountNonce, reader: jspb.BinaryReader): SubaccountNonce;
}

export namespace SubaccountNonce {
  export type AsObject = {
    subaccountId: string,
    subaccountTradeNonce?: injective_exchange_v1beta1_exchange_pb.SubaccountTradeNonce.AsObject,
  }
}

export class ExpiryFuturesMarketInfoState extends jspb.Message {
  getMarketId(): string;
  setMarketId(value: string): void;

  hasMarketInfo(): boolean;
  clearMarketInfo(): void;
  getMarketInfo(): injective_exchange_v1beta1_exchange_pb.ExpiryFuturesMarketInfo | undefined;
  setMarketInfo(value?: injective_exchange_v1beta1_exchange_pb.ExpiryFuturesMarketInfo): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExpiryFuturesMarketInfoState.AsObject;
  static toObject(includeInstance: boolean, msg: ExpiryFuturesMarketInfoState): ExpiryFuturesMarketInfoState.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExpiryFuturesMarketInfoState, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExpiryFuturesMarketInfoState;
  static deserializeBinaryFromReader(message: ExpiryFuturesMarketInfoState, reader: jspb.BinaryReader): ExpiryFuturesMarketInfoState;
}

export namespace ExpiryFuturesMarketInfoState {
  export type AsObject = {
    marketId: string,
    marketInfo?: injective_exchange_v1beta1_exchange_pb.ExpiryFuturesMarketInfo.AsObject,
  }
}

export class PerpetualMarketFundingState extends jspb.Message {
  getMarketId(): string;
  setMarketId(value: string): void;

  hasFunding(): boolean;
  clearFunding(): void;
  getFunding(): injective_exchange_v1beta1_exchange_pb.PerpetualMarketFunding | undefined;
  setFunding(value?: injective_exchange_v1beta1_exchange_pb.PerpetualMarketFunding): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PerpetualMarketFundingState.AsObject;
  static toObject(includeInstance: boolean, msg: PerpetualMarketFundingState): PerpetualMarketFundingState.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PerpetualMarketFundingState, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PerpetualMarketFundingState;
  static deserializeBinaryFromReader(message: PerpetualMarketFundingState, reader: jspb.BinaryReader): PerpetualMarketFundingState;
}

export namespace PerpetualMarketFundingState {
  export type AsObject = {
    marketId: string,
    funding?: injective_exchange_v1beta1_exchange_pb.PerpetualMarketFunding.AsObject,
  }
}

export class LiquidityMiningAccountPoints extends jspb.Message {
  getAccount(): string;
  setAccount(value: string): void;

  getPoints(): string;
  setPoints(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LiquidityMiningAccountPoints.AsObject;
  static toObject(includeInstance: boolean, msg: LiquidityMiningAccountPoints): LiquidityMiningAccountPoints.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LiquidityMiningAccountPoints, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LiquidityMiningAccountPoints;
  static deserializeBinaryFromReader(message: LiquidityMiningAccountPoints, reader: jspb.BinaryReader): LiquidityMiningAccountPoints;
}

export namespace LiquidityMiningAccountPoints {
  export type AsObject = {
    account: string,
    points: string,
  }
}

