// package: injective.exchange.v1beta1
// file: injective/exchange/v1beta1/tx.proto

import * as jspb from "google-protobuf";
import * as gogoproto_gogo_pb from "../../../gogoproto/gogo_pb";
import * as injective_oracle_v1beta1_oracle_pb from "../../../injective/oracle/v1beta1/oracle_pb";
import * as injective_exchange_v1beta1_exchange_pb from "../../../injective/exchange/v1beta1/exchange_pb";
import * as cosmos_base_v1beta1_coin_pb from "../../../cosmos/base/v1beta1/coin_pb";

export class MsgDeposit extends jspb.Message {
  getSender(): string;
  setSender(value: string): void;

  getSubaccountId(): string;
  setSubaccountId(value: string): void;

  hasAmount(): boolean;
  clearAmount(): void;
  getAmount(): cosmos_base_v1beta1_coin_pb.Coin | undefined;
  setAmount(value?: cosmos_base_v1beta1_coin_pb.Coin): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgDeposit.AsObject;
  static toObject(includeInstance: boolean, msg: MsgDeposit): MsgDeposit.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MsgDeposit, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgDeposit;
  static deserializeBinaryFromReader(message: MsgDeposit, reader: jspb.BinaryReader): MsgDeposit;
}

export namespace MsgDeposit {
  export type AsObject = {
    sender: string,
    subaccountId: string,
    amount?: cosmos_base_v1beta1_coin_pb.Coin.AsObject,
  }
}

export class MsgDepositResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgDepositResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MsgDepositResponse): MsgDepositResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MsgDepositResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgDepositResponse;
  static deserializeBinaryFromReader(message: MsgDepositResponse, reader: jspb.BinaryReader): MsgDepositResponse;
}

export namespace MsgDepositResponse {
  export type AsObject = {
  }
}

export class MsgWithdraw extends jspb.Message {
  getSender(): string;
  setSender(value: string): void;

  getSubaccountId(): string;
  setSubaccountId(value: string): void;

  hasAmount(): boolean;
  clearAmount(): void;
  getAmount(): cosmos_base_v1beta1_coin_pb.Coin | undefined;
  setAmount(value?: cosmos_base_v1beta1_coin_pb.Coin): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgWithdraw.AsObject;
  static toObject(includeInstance: boolean, msg: MsgWithdraw): MsgWithdraw.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MsgWithdraw, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgWithdraw;
  static deserializeBinaryFromReader(message: MsgWithdraw, reader: jspb.BinaryReader): MsgWithdraw;
}

export namespace MsgWithdraw {
  export type AsObject = {
    sender: string,
    subaccountId: string,
    amount?: cosmos_base_v1beta1_coin_pb.Coin.AsObject,
  }
}

export class MsgWithdrawResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgWithdrawResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MsgWithdrawResponse): MsgWithdrawResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MsgWithdrawResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgWithdrawResponse;
  static deserializeBinaryFromReader(message: MsgWithdrawResponse, reader: jspb.BinaryReader): MsgWithdrawResponse;
}

export namespace MsgWithdrawResponse {
  export type AsObject = {
  }
}

export class MsgCreateSpotLimitOrder extends jspb.Message {
  getSender(): string;
  setSender(value: string): void;

  hasOrder(): boolean;
  clearOrder(): void;
  getOrder(): injective_exchange_v1beta1_exchange_pb.SpotOrder | undefined;
  setOrder(value?: injective_exchange_v1beta1_exchange_pb.SpotOrder): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgCreateSpotLimitOrder.AsObject;
  static toObject(includeInstance: boolean, msg: MsgCreateSpotLimitOrder): MsgCreateSpotLimitOrder.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MsgCreateSpotLimitOrder, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgCreateSpotLimitOrder;
  static deserializeBinaryFromReader(message: MsgCreateSpotLimitOrder, reader: jspb.BinaryReader): MsgCreateSpotLimitOrder;
}

export namespace MsgCreateSpotLimitOrder {
  export type AsObject = {
    sender: string,
    order?: injective_exchange_v1beta1_exchange_pb.SpotOrder.AsObject,
  }
}

export class MsgCreateSpotLimitOrderResponse extends jspb.Message {
  getOrderHash(): string;
  setOrderHash(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgCreateSpotLimitOrderResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MsgCreateSpotLimitOrderResponse): MsgCreateSpotLimitOrderResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MsgCreateSpotLimitOrderResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgCreateSpotLimitOrderResponse;
  static deserializeBinaryFromReader(message: MsgCreateSpotLimitOrderResponse, reader: jspb.BinaryReader): MsgCreateSpotLimitOrderResponse;
}

export namespace MsgCreateSpotLimitOrderResponse {
  export type AsObject = {
    orderHash: string,
  }
}

export class MsgBatchCreateSpotLimitOrders extends jspb.Message {
  getSender(): string;
  setSender(value: string): void;

  clearOrdersList(): void;
  getOrdersList(): Array<injective_exchange_v1beta1_exchange_pb.SpotOrder>;
  setOrdersList(value: Array<injective_exchange_v1beta1_exchange_pb.SpotOrder>): void;
  addOrders(value?: injective_exchange_v1beta1_exchange_pb.SpotOrder, index?: number): injective_exchange_v1beta1_exchange_pb.SpotOrder;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgBatchCreateSpotLimitOrders.AsObject;
  static toObject(includeInstance: boolean, msg: MsgBatchCreateSpotLimitOrders): MsgBatchCreateSpotLimitOrders.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MsgBatchCreateSpotLimitOrders, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgBatchCreateSpotLimitOrders;
  static deserializeBinaryFromReader(message: MsgBatchCreateSpotLimitOrders, reader: jspb.BinaryReader): MsgBatchCreateSpotLimitOrders;
}

export namespace MsgBatchCreateSpotLimitOrders {
  export type AsObject = {
    sender: string,
    ordersList: Array<injective_exchange_v1beta1_exchange_pb.SpotOrder.AsObject>,
  }
}

export class MsgBatchCreateSpotLimitOrdersResponse extends jspb.Message {
  clearOrderHashesList(): void;
  getOrderHashesList(): Array<string>;
  setOrderHashesList(value: Array<string>): void;
  addOrderHashes(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgBatchCreateSpotLimitOrdersResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MsgBatchCreateSpotLimitOrdersResponse): MsgBatchCreateSpotLimitOrdersResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MsgBatchCreateSpotLimitOrdersResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgBatchCreateSpotLimitOrdersResponse;
  static deserializeBinaryFromReader(message: MsgBatchCreateSpotLimitOrdersResponse, reader: jspb.BinaryReader): MsgBatchCreateSpotLimitOrdersResponse;
}

export namespace MsgBatchCreateSpotLimitOrdersResponse {
  export type AsObject = {
    orderHashesList: Array<string>,
  }
}

export class MsgInstantSpotMarketLaunch extends jspb.Message {
  getSender(): string;
  setSender(value: string): void;

  getTicker(): string;
  setTicker(value: string): void;

  getBaseDenom(): string;
  setBaseDenom(value: string): void;

  getQuoteDenom(): string;
  setQuoteDenom(value: string): void;

  getMinPriceTickSize(): string;
  setMinPriceTickSize(value: string): void;

  getMinQuantityTickSize(): string;
  setMinQuantityTickSize(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgInstantSpotMarketLaunch.AsObject;
  static toObject(includeInstance: boolean, msg: MsgInstantSpotMarketLaunch): MsgInstantSpotMarketLaunch.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MsgInstantSpotMarketLaunch, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgInstantSpotMarketLaunch;
  static deserializeBinaryFromReader(message: MsgInstantSpotMarketLaunch, reader: jspb.BinaryReader): MsgInstantSpotMarketLaunch;
}

export namespace MsgInstantSpotMarketLaunch {
  export type AsObject = {
    sender: string,
    ticker: string,
    baseDenom: string,
    quoteDenom: string,
    minPriceTickSize: string,
    minQuantityTickSize: string,
  }
}

export class MsgInstantSpotMarketLaunchResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgInstantSpotMarketLaunchResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MsgInstantSpotMarketLaunchResponse): MsgInstantSpotMarketLaunchResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MsgInstantSpotMarketLaunchResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgInstantSpotMarketLaunchResponse;
  static deserializeBinaryFromReader(message: MsgInstantSpotMarketLaunchResponse, reader: jspb.BinaryReader): MsgInstantSpotMarketLaunchResponse;
}

export namespace MsgInstantSpotMarketLaunchResponse {
  export type AsObject = {
  }
}

export class MsgInstantPerpetualMarketLaunch extends jspb.Message {
  getSender(): string;
  setSender(value: string): void;

  getTicker(): string;
  setTicker(value: string): void;

  getQuoteDenom(): string;
  setQuoteDenom(value: string): void;

  getOracleBase(): string;
  setOracleBase(value: string): void;

  getOracleQuote(): string;
  setOracleQuote(value: string): void;

  getOracleScaleFactor(): number;
  setOracleScaleFactor(value: number): void;

  getOracleType(): injective_oracle_v1beta1_oracle_pb.OracleTypeMap[keyof injective_oracle_v1beta1_oracle_pb.OracleTypeMap];
  setOracleType(value: injective_oracle_v1beta1_oracle_pb.OracleTypeMap[keyof injective_oracle_v1beta1_oracle_pb.OracleTypeMap]): void;

  getMakerFeeRate(): string;
  setMakerFeeRate(value: string): void;

  getTakerFeeRate(): string;
  setTakerFeeRate(value: string): void;

  getInitialMarginRatio(): string;
  setInitialMarginRatio(value: string): void;

  getMaintenanceMarginRatio(): string;
  setMaintenanceMarginRatio(value: string): void;

  getMinPriceTickSize(): string;
  setMinPriceTickSize(value: string): void;

  getMinQuantityTickSize(): string;
  setMinQuantityTickSize(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgInstantPerpetualMarketLaunch.AsObject;
  static toObject(includeInstance: boolean, msg: MsgInstantPerpetualMarketLaunch): MsgInstantPerpetualMarketLaunch.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MsgInstantPerpetualMarketLaunch, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgInstantPerpetualMarketLaunch;
  static deserializeBinaryFromReader(message: MsgInstantPerpetualMarketLaunch, reader: jspb.BinaryReader): MsgInstantPerpetualMarketLaunch;
}

export namespace MsgInstantPerpetualMarketLaunch {
  export type AsObject = {
    sender: string,
    ticker: string,
    quoteDenom: string,
    oracleBase: string,
    oracleQuote: string,
    oracleScaleFactor: number,
    oracleType: injective_oracle_v1beta1_oracle_pb.OracleTypeMap[keyof injective_oracle_v1beta1_oracle_pb.OracleTypeMap],
    makerFeeRate: string,
    takerFeeRate: string,
    initialMarginRatio: string,
    maintenanceMarginRatio: string,
    minPriceTickSize: string,
    minQuantityTickSize: string,
  }
}

export class MsgInstantPerpetualMarketLaunchResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgInstantPerpetualMarketLaunchResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MsgInstantPerpetualMarketLaunchResponse): MsgInstantPerpetualMarketLaunchResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MsgInstantPerpetualMarketLaunchResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgInstantPerpetualMarketLaunchResponse;
  static deserializeBinaryFromReader(message: MsgInstantPerpetualMarketLaunchResponse, reader: jspb.BinaryReader): MsgInstantPerpetualMarketLaunchResponse;
}

export namespace MsgInstantPerpetualMarketLaunchResponse {
  export type AsObject = {
  }
}

export class MsgInstantExpiryFuturesMarketLaunch extends jspb.Message {
  getSender(): string;
  setSender(value: string): void;

  getTicker(): string;
  setTicker(value: string): void;

  getQuoteDenom(): string;
  setQuoteDenom(value: string): void;

  getOracleBase(): string;
  setOracleBase(value: string): void;

  getOracleQuote(): string;
  setOracleQuote(value: string): void;

  getOracleType(): injective_oracle_v1beta1_oracle_pb.OracleTypeMap[keyof injective_oracle_v1beta1_oracle_pb.OracleTypeMap];
  setOracleType(value: injective_oracle_v1beta1_oracle_pb.OracleTypeMap[keyof injective_oracle_v1beta1_oracle_pb.OracleTypeMap]): void;

  getOracleScaleFactor(): number;
  setOracleScaleFactor(value: number): void;

  getExpiry(): number;
  setExpiry(value: number): void;

  getMakerFeeRate(): string;
  setMakerFeeRate(value: string): void;

  getTakerFeeRate(): string;
  setTakerFeeRate(value: string): void;

  getInitialMarginRatio(): string;
  setInitialMarginRatio(value: string): void;

  getMaintenanceMarginRatio(): string;
  setMaintenanceMarginRatio(value: string): void;

  getMinPriceTickSize(): string;
  setMinPriceTickSize(value: string): void;

  getMinQuantityTickSize(): string;
  setMinQuantityTickSize(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgInstantExpiryFuturesMarketLaunch.AsObject;
  static toObject(includeInstance: boolean, msg: MsgInstantExpiryFuturesMarketLaunch): MsgInstantExpiryFuturesMarketLaunch.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MsgInstantExpiryFuturesMarketLaunch, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgInstantExpiryFuturesMarketLaunch;
  static deserializeBinaryFromReader(message: MsgInstantExpiryFuturesMarketLaunch, reader: jspb.BinaryReader): MsgInstantExpiryFuturesMarketLaunch;
}

export namespace MsgInstantExpiryFuturesMarketLaunch {
  export type AsObject = {
    sender: string,
    ticker: string,
    quoteDenom: string,
    oracleBase: string,
    oracleQuote: string,
    oracleType: injective_oracle_v1beta1_oracle_pb.OracleTypeMap[keyof injective_oracle_v1beta1_oracle_pb.OracleTypeMap],
    oracleScaleFactor: number,
    expiry: number,
    makerFeeRate: string,
    takerFeeRate: string,
    initialMarginRatio: string,
    maintenanceMarginRatio: string,
    minPriceTickSize: string,
    minQuantityTickSize: string,
  }
}

export class MsgInstantExpiryFuturesMarketLaunchResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgInstantExpiryFuturesMarketLaunchResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MsgInstantExpiryFuturesMarketLaunchResponse): MsgInstantExpiryFuturesMarketLaunchResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MsgInstantExpiryFuturesMarketLaunchResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgInstantExpiryFuturesMarketLaunchResponse;
  static deserializeBinaryFromReader(message: MsgInstantExpiryFuturesMarketLaunchResponse, reader: jspb.BinaryReader): MsgInstantExpiryFuturesMarketLaunchResponse;
}

export namespace MsgInstantExpiryFuturesMarketLaunchResponse {
  export type AsObject = {
  }
}

export class MsgCreateSpotMarketOrder extends jspb.Message {
  getSender(): string;
  setSender(value: string): void;

  hasOrder(): boolean;
  clearOrder(): void;
  getOrder(): injective_exchange_v1beta1_exchange_pb.SpotOrder | undefined;
  setOrder(value?: injective_exchange_v1beta1_exchange_pb.SpotOrder): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgCreateSpotMarketOrder.AsObject;
  static toObject(includeInstance: boolean, msg: MsgCreateSpotMarketOrder): MsgCreateSpotMarketOrder.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MsgCreateSpotMarketOrder, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgCreateSpotMarketOrder;
  static deserializeBinaryFromReader(message: MsgCreateSpotMarketOrder, reader: jspb.BinaryReader): MsgCreateSpotMarketOrder;
}

export namespace MsgCreateSpotMarketOrder {
  export type AsObject = {
    sender: string,
    order?: injective_exchange_v1beta1_exchange_pb.SpotOrder.AsObject,
  }
}

export class MsgCreateSpotMarketOrderResponse extends jspb.Message {
  getOrderHash(): string;
  setOrderHash(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgCreateSpotMarketOrderResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MsgCreateSpotMarketOrderResponse): MsgCreateSpotMarketOrderResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MsgCreateSpotMarketOrderResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgCreateSpotMarketOrderResponse;
  static deserializeBinaryFromReader(message: MsgCreateSpotMarketOrderResponse, reader: jspb.BinaryReader): MsgCreateSpotMarketOrderResponse;
}

export namespace MsgCreateSpotMarketOrderResponse {
  export type AsObject = {
    orderHash: string,
  }
}

export class MsgCreateDerivativeLimitOrder extends jspb.Message {
  getSender(): string;
  setSender(value: string): void;

  hasOrder(): boolean;
  clearOrder(): void;
  getOrder(): injective_exchange_v1beta1_exchange_pb.DerivativeOrder | undefined;
  setOrder(value?: injective_exchange_v1beta1_exchange_pb.DerivativeOrder): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgCreateDerivativeLimitOrder.AsObject;
  static toObject(includeInstance: boolean, msg: MsgCreateDerivativeLimitOrder): MsgCreateDerivativeLimitOrder.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MsgCreateDerivativeLimitOrder, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgCreateDerivativeLimitOrder;
  static deserializeBinaryFromReader(message: MsgCreateDerivativeLimitOrder, reader: jspb.BinaryReader): MsgCreateDerivativeLimitOrder;
}

export namespace MsgCreateDerivativeLimitOrder {
  export type AsObject = {
    sender: string,
    order?: injective_exchange_v1beta1_exchange_pb.DerivativeOrder.AsObject,
  }
}

export class MsgCreateDerivativeLimitOrderResponse extends jspb.Message {
  getOrderHash(): string;
  setOrderHash(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgCreateDerivativeLimitOrderResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MsgCreateDerivativeLimitOrderResponse): MsgCreateDerivativeLimitOrderResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MsgCreateDerivativeLimitOrderResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgCreateDerivativeLimitOrderResponse;
  static deserializeBinaryFromReader(message: MsgCreateDerivativeLimitOrderResponse, reader: jspb.BinaryReader): MsgCreateDerivativeLimitOrderResponse;
}

export namespace MsgCreateDerivativeLimitOrderResponse {
  export type AsObject = {
    orderHash: string,
  }
}

export class MsgBatchCreateDerivativeLimitOrders extends jspb.Message {
  getSender(): string;
  setSender(value: string): void;

  clearOrdersList(): void;
  getOrdersList(): Array<injective_exchange_v1beta1_exchange_pb.DerivativeOrder>;
  setOrdersList(value: Array<injective_exchange_v1beta1_exchange_pb.DerivativeOrder>): void;
  addOrders(value?: injective_exchange_v1beta1_exchange_pb.DerivativeOrder, index?: number): injective_exchange_v1beta1_exchange_pb.DerivativeOrder;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgBatchCreateDerivativeLimitOrders.AsObject;
  static toObject(includeInstance: boolean, msg: MsgBatchCreateDerivativeLimitOrders): MsgBatchCreateDerivativeLimitOrders.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MsgBatchCreateDerivativeLimitOrders, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgBatchCreateDerivativeLimitOrders;
  static deserializeBinaryFromReader(message: MsgBatchCreateDerivativeLimitOrders, reader: jspb.BinaryReader): MsgBatchCreateDerivativeLimitOrders;
}

export namespace MsgBatchCreateDerivativeLimitOrders {
  export type AsObject = {
    sender: string,
    ordersList: Array<injective_exchange_v1beta1_exchange_pb.DerivativeOrder.AsObject>,
  }
}

export class MsgBatchCreateDerivativeLimitOrdersResponse extends jspb.Message {
  clearOrderHashesList(): void;
  getOrderHashesList(): Array<string>;
  setOrderHashesList(value: Array<string>): void;
  addOrderHashes(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgBatchCreateDerivativeLimitOrdersResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MsgBatchCreateDerivativeLimitOrdersResponse): MsgBatchCreateDerivativeLimitOrdersResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MsgBatchCreateDerivativeLimitOrdersResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgBatchCreateDerivativeLimitOrdersResponse;
  static deserializeBinaryFromReader(message: MsgBatchCreateDerivativeLimitOrdersResponse, reader: jspb.BinaryReader): MsgBatchCreateDerivativeLimitOrdersResponse;
}

export namespace MsgBatchCreateDerivativeLimitOrdersResponse {
  export type AsObject = {
    orderHashesList: Array<string>,
  }
}

export class MsgCancelSpotOrder extends jspb.Message {
  getSender(): string;
  setSender(value: string): void;

  getMarketId(): string;
  setMarketId(value: string): void;

  getSubaccountId(): string;
  setSubaccountId(value: string): void;

  getOrderHash(): string;
  setOrderHash(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgCancelSpotOrder.AsObject;
  static toObject(includeInstance: boolean, msg: MsgCancelSpotOrder): MsgCancelSpotOrder.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MsgCancelSpotOrder, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgCancelSpotOrder;
  static deserializeBinaryFromReader(message: MsgCancelSpotOrder, reader: jspb.BinaryReader): MsgCancelSpotOrder;
}

export namespace MsgCancelSpotOrder {
  export type AsObject = {
    sender: string,
    marketId: string,
    subaccountId: string,
    orderHash: string,
  }
}

export class MsgCancelSpotOrderResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgCancelSpotOrderResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MsgCancelSpotOrderResponse): MsgCancelSpotOrderResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MsgCancelSpotOrderResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgCancelSpotOrderResponse;
  static deserializeBinaryFromReader(message: MsgCancelSpotOrderResponse, reader: jspb.BinaryReader): MsgCancelSpotOrderResponse;
}

export namespace MsgCancelSpotOrderResponse {
  export type AsObject = {
  }
}

export class MsgBatchCancelSpotOrders extends jspb.Message {
  getSender(): string;
  setSender(value: string): void;

  clearDataList(): void;
  getDataList(): Array<OrderData>;
  setDataList(value: Array<OrderData>): void;
  addData(value?: OrderData, index?: number): OrderData;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgBatchCancelSpotOrders.AsObject;
  static toObject(includeInstance: boolean, msg: MsgBatchCancelSpotOrders): MsgBatchCancelSpotOrders.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MsgBatchCancelSpotOrders, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgBatchCancelSpotOrders;
  static deserializeBinaryFromReader(message: MsgBatchCancelSpotOrders, reader: jspb.BinaryReader): MsgBatchCancelSpotOrders;
}

export namespace MsgBatchCancelSpotOrders {
  export type AsObject = {
    sender: string,
    dataList: Array<OrderData.AsObject>,
  }
}

export class MsgBatchCancelSpotOrdersResponse extends jspb.Message {
  clearSuccessList(): void;
  getSuccessList(): Array<boolean>;
  setSuccessList(value: Array<boolean>): void;
  addSuccess(value: boolean, index?: number): boolean;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgBatchCancelSpotOrdersResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MsgBatchCancelSpotOrdersResponse): MsgBatchCancelSpotOrdersResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MsgBatchCancelSpotOrdersResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgBatchCancelSpotOrdersResponse;
  static deserializeBinaryFromReader(message: MsgBatchCancelSpotOrdersResponse, reader: jspb.BinaryReader): MsgBatchCancelSpotOrdersResponse;
}

export namespace MsgBatchCancelSpotOrdersResponse {
  export type AsObject = {
    successList: Array<boolean>,
  }
}

export class MsgCreateDerivativeMarketOrder extends jspb.Message {
  getSender(): string;
  setSender(value: string): void;

  hasOrder(): boolean;
  clearOrder(): void;
  getOrder(): injective_exchange_v1beta1_exchange_pb.DerivativeOrder | undefined;
  setOrder(value?: injective_exchange_v1beta1_exchange_pb.DerivativeOrder): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgCreateDerivativeMarketOrder.AsObject;
  static toObject(includeInstance: boolean, msg: MsgCreateDerivativeMarketOrder): MsgCreateDerivativeMarketOrder.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MsgCreateDerivativeMarketOrder, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgCreateDerivativeMarketOrder;
  static deserializeBinaryFromReader(message: MsgCreateDerivativeMarketOrder, reader: jspb.BinaryReader): MsgCreateDerivativeMarketOrder;
}

export namespace MsgCreateDerivativeMarketOrder {
  export type AsObject = {
    sender: string,
    order?: injective_exchange_v1beta1_exchange_pb.DerivativeOrder.AsObject,
  }
}

export class MsgCreateDerivativeMarketOrderResponse extends jspb.Message {
  getOrderHash(): string;
  setOrderHash(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgCreateDerivativeMarketOrderResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MsgCreateDerivativeMarketOrderResponse): MsgCreateDerivativeMarketOrderResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MsgCreateDerivativeMarketOrderResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgCreateDerivativeMarketOrderResponse;
  static deserializeBinaryFromReader(message: MsgCreateDerivativeMarketOrderResponse, reader: jspb.BinaryReader): MsgCreateDerivativeMarketOrderResponse;
}

export namespace MsgCreateDerivativeMarketOrderResponse {
  export type AsObject = {
    orderHash: string,
  }
}

export class MsgCancelDerivativeOrder extends jspb.Message {
  getSender(): string;
  setSender(value: string): void;

  getMarketId(): string;
  setMarketId(value: string): void;

  getSubaccountId(): string;
  setSubaccountId(value: string): void;

  getOrderHash(): string;
  setOrderHash(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgCancelDerivativeOrder.AsObject;
  static toObject(includeInstance: boolean, msg: MsgCancelDerivativeOrder): MsgCancelDerivativeOrder.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MsgCancelDerivativeOrder, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgCancelDerivativeOrder;
  static deserializeBinaryFromReader(message: MsgCancelDerivativeOrder, reader: jspb.BinaryReader): MsgCancelDerivativeOrder;
}

export namespace MsgCancelDerivativeOrder {
  export type AsObject = {
    sender: string,
    marketId: string,
    subaccountId: string,
    orderHash: string,
  }
}

export class MsgCancelDerivativeOrderResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgCancelDerivativeOrderResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MsgCancelDerivativeOrderResponse): MsgCancelDerivativeOrderResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MsgCancelDerivativeOrderResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgCancelDerivativeOrderResponse;
  static deserializeBinaryFromReader(message: MsgCancelDerivativeOrderResponse, reader: jspb.BinaryReader): MsgCancelDerivativeOrderResponse;
}

export namespace MsgCancelDerivativeOrderResponse {
  export type AsObject = {
  }
}

export class OrderData extends jspb.Message {
  getMarketId(): string;
  setMarketId(value: string): void;

  getSubaccountId(): string;
  setSubaccountId(value: string): void;

  getOrderHash(): string;
  setOrderHash(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OrderData.AsObject;
  static toObject(includeInstance: boolean, msg: OrderData): OrderData.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OrderData, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OrderData;
  static deserializeBinaryFromReader(message: OrderData, reader: jspb.BinaryReader): OrderData;
}

export namespace OrderData {
  export type AsObject = {
    marketId: string,
    subaccountId: string,
    orderHash: string,
  }
}

export class MsgBatchCancelDerivativeOrders extends jspb.Message {
  getSender(): string;
  setSender(value: string): void;

  clearDataList(): void;
  getDataList(): Array<OrderData>;
  setDataList(value: Array<OrderData>): void;
  addData(value?: OrderData, index?: number): OrderData;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgBatchCancelDerivativeOrders.AsObject;
  static toObject(includeInstance: boolean, msg: MsgBatchCancelDerivativeOrders): MsgBatchCancelDerivativeOrders.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MsgBatchCancelDerivativeOrders, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgBatchCancelDerivativeOrders;
  static deserializeBinaryFromReader(message: MsgBatchCancelDerivativeOrders, reader: jspb.BinaryReader): MsgBatchCancelDerivativeOrders;
}

export namespace MsgBatchCancelDerivativeOrders {
  export type AsObject = {
    sender: string,
    dataList: Array<OrderData.AsObject>,
  }
}

export class MsgBatchCancelDerivativeOrdersResponse extends jspb.Message {
  clearSuccessList(): void;
  getSuccessList(): Array<boolean>;
  setSuccessList(value: Array<boolean>): void;
  addSuccess(value: boolean, index?: number): boolean;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgBatchCancelDerivativeOrdersResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MsgBatchCancelDerivativeOrdersResponse): MsgBatchCancelDerivativeOrdersResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MsgBatchCancelDerivativeOrdersResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgBatchCancelDerivativeOrdersResponse;
  static deserializeBinaryFromReader(message: MsgBatchCancelDerivativeOrdersResponse, reader: jspb.BinaryReader): MsgBatchCancelDerivativeOrdersResponse;
}

export namespace MsgBatchCancelDerivativeOrdersResponse {
  export type AsObject = {
    successList: Array<boolean>,
  }
}

export class MsgSubaccountTransfer extends jspb.Message {
  getSender(): string;
  setSender(value: string): void;

  getSourceSubaccountId(): string;
  setSourceSubaccountId(value: string): void;

  getDestinationSubaccountId(): string;
  setDestinationSubaccountId(value: string): void;

  hasAmount(): boolean;
  clearAmount(): void;
  getAmount(): cosmos_base_v1beta1_coin_pb.Coin | undefined;
  setAmount(value?: cosmos_base_v1beta1_coin_pb.Coin): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgSubaccountTransfer.AsObject;
  static toObject(includeInstance: boolean, msg: MsgSubaccountTransfer): MsgSubaccountTransfer.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MsgSubaccountTransfer, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgSubaccountTransfer;
  static deserializeBinaryFromReader(message: MsgSubaccountTransfer, reader: jspb.BinaryReader): MsgSubaccountTransfer;
}

export namespace MsgSubaccountTransfer {
  export type AsObject = {
    sender: string,
    sourceSubaccountId: string,
    destinationSubaccountId: string,
    amount?: cosmos_base_v1beta1_coin_pb.Coin.AsObject,
  }
}

export class MsgSubaccountTransferResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgSubaccountTransferResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MsgSubaccountTransferResponse): MsgSubaccountTransferResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MsgSubaccountTransferResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgSubaccountTransferResponse;
  static deserializeBinaryFromReader(message: MsgSubaccountTransferResponse, reader: jspb.BinaryReader): MsgSubaccountTransferResponse;
}

export namespace MsgSubaccountTransferResponse {
  export type AsObject = {
  }
}

export class MsgExternalTransfer extends jspb.Message {
  getSender(): string;
  setSender(value: string): void;

  getSourceSubaccountId(): string;
  setSourceSubaccountId(value: string): void;

  getDestinationSubaccountId(): string;
  setDestinationSubaccountId(value: string): void;

  hasAmount(): boolean;
  clearAmount(): void;
  getAmount(): cosmos_base_v1beta1_coin_pb.Coin | undefined;
  setAmount(value?: cosmos_base_v1beta1_coin_pb.Coin): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgExternalTransfer.AsObject;
  static toObject(includeInstance: boolean, msg: MsgExternalTransfer): MsgExternalTransfer.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MsgExternalTransfer, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgExternalTransfer;
  static deserializeBinaryFromReader(message: MsgExternalTransfer, reader: jspb.BinaryReader): MsgExternalTransfer;
}

export namespace MsgExternalTransfer {
  export type AsObject = {
    sender: string,
    sourceSubaccountId: string,
    destinationSubaccountId: string,
    amount?: cosmos_base_v1beta1_coin_pb.Coin.AsObject,
  }
}

export class MsgExternalTransferResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgExternalTransferResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MsgExternalTransferResponse): MsgExternalTransferResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MsgExternalTransferResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgExternalTransferResponse;
  static deserializeBinaryFromReader(message: MsgExternalTransferResponse, reader: jspb.BinaryReader): MsgExternalTransferResponse;
}

export namespace MsgExternalTransferResponse {
  export type AsObject = {
  }
}

export class MsgLiquidatePosition extends jspb.Message {
  getSender(): string;
  setSender(value: string): void;

  getSubaccountId(): string;
  setSubaccountId(value: string): void;

  getMarketId(): string;
  setMarketId(value: string): void;

  hasOrder(): boolean;
  clearOrder(): void;
  getOrder(): injective_exchange_v1beta1_exchange_pb.DerivativeOrder | undefined;
  setOrder(value?: injective_exchange_v1beta1_exchange_pb.DerivativeOrder): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgLiquidatePosition.AsObject;
  static toObject(includeInstance: boolean, msg: MsgLiquidatePosition): MsgLiquidatePosition.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MsgLiquidatePosition, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgLiquidatePosition;
  static deserializeBinaryFromReader(message: MsgLiquidatePosition, reader: jspb.BinaryReader): MsgLiquidatePosition;
}

export namespace MsgLiquidatePosition {
  export type AsObject = {
    sender: string,
    subaccountId: string,
    marketId: string,
    order?: injective_exchange_v1beta1_exchange_pb.DerivativeOrder.AsObject,
  }
}

export class MsgLiquidatePositionResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgLiquidatePositionResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MsgLiquidatePositionResponse): MsgLiquidatePositionResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MsgLiquidatePositionResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgLiquidatePositionResponse;
  static deserializeBinaryFromReader(message: MsgLiquidatePositionResponse, reader: jspb.BinaryReader): MsgLiquidatePositionResponse;
}

export namespace MsgLiquidatePositionResponse {
  export type AsObject = {
  }
}

export class MsgIncreasePositionMargin extends jspb.Message {
  getSender(): string;
  setSender(value: string): void;

  getSourceSubaccountId(): string;
  setSourceSubaccountId(value: string): void;

  getDestinationSubaccountId(): string;
  setDestinationSubaccountId(value: string): void;

  getMarketId(): string;
  setMarketId(value: string): void;

  getAmount(): string;
  setAmount(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgIncreasePositionMargin.AsObject;
  static toObject(includeInstance: boolean, msg: MsgIncreasePositionMargin): MsgIncreasePositionMargin.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MsgIncreasePositionMargin, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgIncreasePositionMargin;
  static deserializeBinaryFromReader(message: MsgIncreasePositionMargin, reader: jspb.BinaryReader): MsgIncreasePositionMargin;
}

export namespace MsgIncreasePositionMargin {
  export type AsObject = {
    sender: string,
    sourceSubaccountId: string,
    destinationSubaccountId: string,
    marketId: string,
    amount: string,
  }
}

export class MsgIncreasePositionMarginResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgIncreasePositionMarginResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MsgIncreasePositionMarginResponse): MsgIncreasePositionMarginResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MsgIncreasePositionMarginResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgIncreasePositionMarginResponse;
  static deserializeBinaryFromReader(message: MsgIncreasePositionMarginResponse, reader: jspb.BinaryReader): MsgIncreasePositionMarginResponse;
}

export namespace MsgIncreasePositionMarginResponse {
  export type AsObject = {
  }
}

export class SpotMarketParamUpdateProposal extends jspb.Message {
  getTitle(): string;
  setTitle(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  getMarketId(): string;
  setMarketId(value: string): void;

  getMakerFeeRate(): string;
  setMakerFeeRate(value: string): void;

  getTakerFeeRate(): string;
  setTakerFeeRate(value: string): void;

  getRelayerFeeShareRate(): string;
  setRelayerFeeShareRate(value: string): void;

  getMinPriceTickSize(): string;
  setMinPriceTickSize(value: string): void;

  getMinQuantityTickSize(): string;
  setMinQuantityTickSize(value: string): void;

  getStatus(): injective_exchange_v1beta1_exchange_pb.MarketStatusMap[keyof injective_exchange_v1beta1_exchange_pb.MarketStatusMap];
  setStatus(value: injective_exchange_v1beta1_exchange_pb.MarketStatusMap[keyof injective_exchange_v1beta1_exchange_pb.MarketStatusMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SpotMarketParamUpdateProposal.AsObject;
  static toObject(includeInstance: boolean, msg: SpotMarketParamUpdateProposal): SpotMarketParamUpdateProposal.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SpotMarketParamUpdateProposal, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SpotMarketParamUpdateProposal;
  static deserializeBinaryFromReader(message: SpotMarketParamUpdateProposal, reader: jspb.BinaryReader): SpotMarketParamUpdateProposal;
}

export namespace SpotMarketParamUpdateProposal {
  export type AsObject = {
    title: string,
    description: string,
    marketId: string,
    makerFeeRate: string,
    takerFeeRate: string,
    relayerFeeShareRate: string,
    minPriceTickSize: string,
    minQuantityTickSize: string,
    status: injective_exchange_v1beta1_exchange_pb.MarketStatusMap[keyof injective_exchange_v1beta1_exchange_pb.MarketStatusMap],
  }
}

export class ExchangeEnableProposal extends jspb.Message {
  getTitle(): string;
  setTitle(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  getExchangetype(): ExchangeTypeMap[keyof ExchangeTypeMap];
  setExchangetype(value: ExchangeTypeMap[keyof ExchangeTypeMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExchangeEnableProposal.AsObject;
  static toObject(includeInstance: boolean, msg: ExchangeEnableProposal): ExchangeEnableProposal.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExchangeEnableProposal, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExchangeEnableProposal;
  static deserializeBinaryFromReader(message: ExchangeEnableProposal, reader: jspb.BinaryReader): ExchangeEnableProposal;
}

export namespace ExchangeEnableProposal {
  export type AsObject = {
    title: string,
    description: string,
    exchangetype: ExchangeTypeMap[keyof ExchangeTypeMap],
  }
}

export class SpotMarketLaunchProposal extends jspb.Message {
  getTitle(): string;
  setTitle(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  getTicker(): string;
  setTicker(value: string): void;

  getBaseDenom(): string;
  setBaseDenom(value: string): void;

  getQuoteDenom(): string;
  setQuoteDenom(value: string): void;

  getMinPriceTickSize(): string;
  setMinPriceTickSize(value: string): void;

  getMinQuantityTickSize(): string;
  setMinQuantityTickSize(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SpotMarketLaunchProposal.AsObject;
  static toObject(includeInstance: boolean, msg: SpotMarketLaunchProposal): SpotMarketLaunchProposal.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SpotMarketLaunchProposal, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SpotMarketLaunchProposal;
  static deserializeBinaryFromReader(message: SpotMarketLaunchProposal, reader: jspb.BinaryReader): SpotMarketLaunchProposal;
}

export namespace SpotMarketLaunchProposal {
  export type AsObject = {
    title: string,
    description: string,
    ticker: string,
    baseDenom: string,
    quoteDenom: string,
    minPriceTickSize: string,
    minQuantityTickSize: string,
  }
}

export class PerpetualMarketLaunchProposal extends jspb.Message {
  getTitle(): string;
  setTitle(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  getTicker(): string;
  setTicker(value: string): void;

  getQuoteDenom(): string;
  setQuoteDenom(value: string): void;

  getOracleBase(): string;
  setOracleBase(value: string): void;

  getOracleQuote(): string;
  setOracleQuote(value: string): void;

  getOracleScaleFactor(): number;
  setOracleScaleFactor(value: number): void;

  getOracleType(): injective_oracle_v1beta1_oracle_pb.OracleTypeMap[keyof injective_oracle_v1beta1_oracle_pb.OracleTypeMap];
  setOracleType(value: injective_oracle_v1beta1_oracle_pb.OracleTypeMap[keyof injective_oracle_v1beta1_oracle_pb.OracleTypeMap]): void;

  getInitialMarginRatio(): string;
  setInitialMarginRatio(value: string): void;

  getMaintenanceMarginRatio(): string;
  setMaintenanceMarginRatio(value: string): void;

  getMakerFeeRate(): string;
  setMakerFeeRate(value: string): void;

  getTakerFeeRate(): string;
  setTakerFeeRate(value: string): void;

  getMinPriceTickSize(): string;
  setMinPriceTickSize(value: string): void;

  getMinQuantityTickSize(): string;
  setMinQuantityTickSize(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PerpetualMarketLaunchProposal.AsObject;
  static toObject(includeInstance: boolean, msg: PerpetualMarketLaunchProposal): PerpetualMarketLaunchProposal.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PerpetualMarketLaunchProposal, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PerpetualMarketLaunchProposal;
  static deserializeBinaryFromReader(message: PerpetualMarketLaunchProposal, reader: jspb.BinaryReader): PerpetualMarketLaunchProposal;
}

export namespace PerpetualMarketLaunchProposal {
  export type AsObject = {
    title: string,
    description: string,
    ticker: string,
    quoteDenom: string,
    oracleBase: string,
    oracleQuote: string,
    oracleScaleFactor: number,
    oracleType: injective_oracle_v1beta1_oracle_pb.OracleTypeMap[keyof injective_oracle_v1beta1_oracle_pb.OracleTypeMap],
    initialMarginRatio: string,
    maintenanceMarginRatio: string,
    makerFeeRate: string,
    takerFeeRate: string,
    minPriceTickSize: string,
    minQuantityTickSize: string,
  }
}

export class ExpiryFuturesMarketLaunchProposal extends jspb.Message {
  getTitle(): string;
  setTitle(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  getTicker(): string;
  setTicker(value: string): void;

  getQuoteDenom(): string;
  setQuoteDenom(value: string): void;

  getOracleBase(): string;
  setOracleBase(value: string): void;

  getOracleQuote(): string;
  setOracleQuote(value: string): void;

  getOracleScaleFactor(): number;
  setOracleScaleFactor(value: number): void;

  getOracleType(): injective_oracle_v1beta1_oracle_pb.OracleTypeMap[keyof injective_oracle_v1beta1_oracle_pb.OracleTypeMap];
  setOracleType(value: injective_oracle_v1beta1_oracle_pb.OracleTypeMap[keyof injective_oracle_v1beta1_oracle_pb.OracleTypeMap]): void;

  getExpiry(): number;
  setExpiry(value: number): void;

  getInitialMarginRatio(): string;
  setInitialMarginRatio(value: string): void;

  getMaintenanceMarginRatio(): string;
  setMaintenanceMarginRatio(value: string): void;

  getMakerFeeRate(): string;
  setMakerFeeRate(value: string): void;

  getTakerFeeRate(): string;
  setTakerFeeRate(value: string): void;

  getMinPriceTickSize(): string;
  setMinPriceTickSize(value: string): void;

  getMinQuantityTickSize(): string;
  setMinQuantityTickSize(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExpiryFuturesMarketLaunchProposal.AsObject;
  static toObject(includeInstance: boolean, msg: ExpiryFuturesMarketLaunchProposal): ExpiryFuturesMarketLaunchProposal.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExpiryFuturesMarketLaunchProposal, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExpiryFuturesMarketLaunchProposal;
  static deserializeBinaryFromReader(message: ExpiryFuturesMarketLaunchProposal, reader: jspb.BinaryReader): ExpiryFuturesMarketLaunchProposal;
}

export namespace ExpiryFuturesMarketLaunchProposal {
  export type AsObject = {
    title: string,
    description: string,
    ticker: string,
    quoteDenom: string,
    oracleBase: string,
    oracleQuote: string,
    oracleScaleFactor: number,
    oracleType: injective_oracle_v1beta1_oracle_pb.OracleTypeMap[keyof injective_oracle_v1beta1_oracle_pb.OracleTypeMap],
    expiry: number,
    initialMarginRatio: string,
    maintenanceMarginRatio: string,
    makerFeeRate: string,
    takerFeeRate: string,
    minPriceTickSize: string,
    minQuantityTickSize: string,
  }
}

export class DerivativeMarketParamUpdateProposal extends jspb.Message {
  getTitle(): string;
  setTitle(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

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

  getMinPriceTickSize(): string;
  setMinPriceTickSize(value: string): void;

  getMinQuantityTickSize(): string;
  setMinQuantityTickSize(value: string): void;

  getHourlyinterestrate(): string;
  setHourlyinterestrate(value: string): void;

  getHourlyfundingratecap(): string;
  setHourlyfundingratecap(value: string): void;

  getStatus(): injective_exchange_v1beta1_exchange_pb.MarketStatusMap[keyof injective_exchange_v1beta1_exchange_pb.MarketStatusMap];
  setStatus(value: injective_exchange_v1beta1_exchange_pb.MarketStatusMap[keyof injective_exchange_v1beta1_exchange_pb.MarketStatusMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DerivativeMarketParamUpdateProposal.AsObject;
  static toObject(includeInstance: boolean, msg: DerivativeMarketParamUpdateProposal): DerivativeMarketParamUpdateProposal.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DerivativeMarketParamUpdateProposal, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DerivativeMarketParamUpdateProposal;
  static deserializeBinaryFromReader(message: DerivativeMarketParamUpdateProposal, reader: jspb.BinaryReader): DerivativeMarketParamUpdateProposal;
}

export namespace DerivativeMarketParamUpdateProposal {
  export type AsObject = {
    title: string,
    description: string,
    marketId: string,
    initialMarginRatio: string,
    maintenanceMarginRatio: string,
    makerFeeRate: string,
    takerFeeRate: string,
    relayerFeeShareRate: string,
    minPriceTickSize: string,
    minQuantityTickSize: string,
    hourlyinterestrate: string,
    hourlyfundingratecap: string,
    status: injective_exchange_v1beta1_exchange_pb.MarketStatusMap[keyof injective_exchange_v1beta1_exchange_pb.MarketStatusMap],
  }
}

export class DerivativeMarketBandOraclePromotionProposal extends jspb.Message {
  getTitle(): string;
  setTitle(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  getMarketId(): string;
  setMarketId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DerivativeMarketBandOraclePromotionProposal.AsObject;
  static toObject(includeInstance: boolean, msg: DerivativeMarketBandOraclePromotionProposal): DerivativeMarketBandOraclePromotionProposal.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DerivativeMarketBandOraclePromotionProposal, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DerivativeMarketBandOraclePromotionProposal;
  static deserializeBinaryFromReader(message: DerivativeMarketBandOraclePromotionProposal, reader: jspb.BinaryReader): DerivativeMarketBandOraclePromotionProposal;
}

export namespace DerivativeMarketBandOraclePromotionProposal {
  export type AsObject = {
    title: string,
    description: string,
    marketId: string,
  }
}

export class LiquidityMiningCampaignProposal extends jspb.Message {
  getTitle(): string;
  setTitle(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  hasCampaign(): boolean;
  clearCampaign(): void;
  getCampaign(): injective_exchange_v1beta1_exchange_pb.LiquidityMiningCampaign | undefined;
  setCampaign(value?: injective_exchange_v1beta1_exchange_pb.LiquidityMiningCampaign): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LiquidityMiningCampaignProposal.AsObject;
  static toObject(includeInstance: boolean, msg: LiquidityMiningCampaignProposal): LiquidityMiningCampaignProposal.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LiquidityMiningCampaignProposal, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LiquidityMiningCampaignProposal;
  static deserializeBinaryFromReader(message: LiquidityMiningCampaignProposal, reader: jspb.BinaryReader): LiquidityMiningCampaignProposal;
}

export namespace LiquidityMiningCampaignProposal {
  export type AsObject = {
    title: string,
    description: string,
    campaign?: injective_exchange_v1beta1_exchange_pb.LiquidityMiningCampaign.AsObject,
  }
}

export interface ExchangeTypeMap {
  EXCHANGE_UNSPECIFIED: 0;
  SPOT: 1;
  DERIVATIVES: 2;
}

export const ExchangeType: ExchangeTypeMap;

