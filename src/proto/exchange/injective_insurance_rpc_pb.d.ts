// package: injective_insurance_rpc
// file: exchange/injective_insurance_rpc.proto

import * as jspb from "google-protobuf";

export class FundsRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FundsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: FundsRequest): FundsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FundsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FundsRequest;
  static deserializeBinaryFromReader(message: FundsRequest, reader: jspb.BinaryReader): FundsRequest;
}

export namespace FundsRequest {
  export type AsObject = {
  }
}

export class FundsResponse extends jspb.Message {
  clearFundsList(): void;
  getFundsList(): Array<InsuranceFund>;
  setFundsList(value: Array<InsuranceFund>): void;
  addFunds(value?: InsuranceFund, index?: number): InsuranceFund;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FundsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: FundsResponse): FundsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FundsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FundsResponse;
  static deserializeBinaryFromReader(message: FundsResponse, reader: jspb.BinaryReader): FundsResponse;
}

export namespace FundsResponse {
  export type AsObject = {
    fundsList: Array<InsuranceFund.AsObject>,
  }
}

export class InsuranceFund extends jspb.Message {
  getMarketTicker(): string;
  setMarketTicker(value: string): void;

  getMarketId(): string;
  setMarketId(value: string): void;

  getDepositDenom(): string;
  setDepositDenom(value: string): void;

  getPoolTokenDenom(): string;
  setPoolTokenDenom(value: string): void;

  getRedemptionNoticePeriodDuration(): number;
  setRedemptionNoticePeriodDuration(value: number): void;

  getBalance(): string;
  setBalance(value: string): void;

  getTotalShare(): string;
  setTotalShare(value: string): void;

  getOracleBase(): string;
  setOracleBase(value: string): void;

  getOracleQuote(): string;
  setOracleQuote(value: string): void;

  getOracleType(): string;
  setOracleType(value: string): void;

  getExpiry(): number;
  setExpiry(value: number): void;

  hasDepositTokenMeta(): boolean;
  clearDepositTokenMeta(): void;
  getDepositTokenMeta(): TokenMeta | undefined;
  setDepositTokenMeta(value?: TokenMeta): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InsuranceFund.AsObject;
  static toObject(includeInstance: boolean, msg: InsuranceFund): InsuranceFund.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: InsuranceFund, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InsuranceFund;
  static deserializeBinaryFromReader(message: InsuranceFund, reader: jspb.BinaryReader): InsuranceFund;
}

export namespace InsuranceFund {
  export type AsObject = {
    marketTicker: string,
    marketId: string,
    depositDenom: string,
    poolTokenDenom: string,
    redemptionNoticePeriodDuration: number,
    balance: string,
    totalShare: string,
    oracleBase: string,
    oracleQuote: string,
    oracleType: string,
    expiry: number,
    depositTokenMeta?: TokenMeta.AsObject,
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

export class RedemptionsRequest extends jspb.Message {
  getRedeemer(): string;
  setRedeemer(value: string): void;

  getRedemptionDenom(): string;
  setRedemptionDenom(value: string): void;

  getStatus(): string;
  setStatus(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RedemptionsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RedemptionsRequest): RedemptionsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RedemptionsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RedemptionsRequest;
  static deserializeBinaryFromReader(message: RedemptionsRequest, reader: jspb.BinaryReader): RedemptionsRequest;
}

export namespace RedemptionsRequest {
  export type AsObject = {
    redeemer: string,
    redemptionDenom: string,
    status: string,
  }
}

export class RedemptionsResponse extends jspb.Message {
  clearRedemptionSchedulesList(): void;
  getRedemptionSchedulesList(): Array<RedemptionSchedule>;
  setRedemptionSchedulesList(value: Array<RedemptionSchedule>): void;
  addRedemptionSchedules(value?: RedemptionSchedule, index?: number): RedemptionSchedule;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RedemptionsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: RedemptionsResponse): RedemptionsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RedemptionsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RedemptionsResponse;
  static deserializeBinaryFromReader(message: RedemptionsResponse, reader: jspb.BinaryReader): RedemptionsResponse;
}

export namespace RedemptionsResponse {
  export type AsObject = {
    redemptionSchedulesList: Array<RedemptionSchedule.AsObject>,
  }
}

export class RedemptionSchedule extends jspb.Message {
  getRedemptionId(): number;
  setRedemptionId(value: number): void;

  getStatus(): string;
  setStatus(value: string): void;

  getRedeemer(): string;
  setRedeemer(value: string): void;

  getClaimableRedemptionTime(): number;
  setClaimableRedemptionTime(value: number): void;

  getRedemptionAmount(): string;
  setRedemptionAmount(value: string): void;

  getRedemptionDenom(): string;
  setRedemptionDenom(value: string): void;

  getRequestedAt(): number;
  setRequestedAt(value: number): void;

  getDisbursedAmount(): string;
  setDisbursedAmount(value: string): void;

  getDisbursedDenom(): string;
  setDisbursedDenom(value: string): void;

  getDisbursedAt(): number;
  setDisbursedAt(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RedemptionSchedule.AsObject;
  static toObject(includeInstance: boolean, msg: RedemptionSchedule): RedemptionSchedule.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RedemptionSchedule, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RedemptionSchedule;
  static deserializeBinaryFromReader(message: RedemptionSchedule, reader: jspb.BinaryReader): RedemptionSchedule;
}

export namespace RedemptionSchedule {
  export type AsObject = {
    redemptionId: number,
    status: string,
    redeemer: string,
    claimableRedemptionTime: number,
    redemptionAmount: string,
    redemptionDenom: string,
    requestedAt: number,
    disbursedAmount: string,
    disbursedDenom: string,
    disbursedAt: number,
  }
}

