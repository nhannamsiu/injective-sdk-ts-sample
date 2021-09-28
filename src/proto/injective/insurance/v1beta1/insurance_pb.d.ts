// package: injective.insurance.v1beta1
// file: injective/insurance/v1beta1/insurance.proto

import * as jspb from "google-protobuf";
import * as gogoproto_gogo_pb from "../../../gogoproto/gogo_pb";
import * as google_protobuf_duration_pb from "google-protobuf/google/protobuf/duration_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as cosmos_base_v1beta1_coin_pb from "../../../cosmos/base/v1beta1/coin_pb";
import * as injective_oracle_v1beta1_oracle_pb from "../../../injective/oracle/v1beta1/oracle_pb";

export class Params extends jspb.Message {
  hasDefaultRedemptionNoticePeriodDuration(): boolean;
  clearDefaultRedemptionNoticePeriodDuration(): void;
  getDefaultRedemptionNoticePeriodDuration(): google_protobuf_duration_pb.Duration | undefined;
  setDefaultRedemptionNoticePeriodDuration(value?: google_protobuf_duration_pb.Duration): void;

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
    defaultRedemptionNoticePeriodDuration?: google_protobuf_duration_pb.Duration.AsObject,
  }
}

export class InsuranceFund extends jspb.Message {
  getDepositDenom(): string;
  setDepositDenom(value: string): void;

  getInsurancePoolTokenDenom(): string;
  setInsurancePoolTokenDenom(value: string): void;

  hasRedemptionNoticePeriodDuration(): boolean;
  clearRedemptionNoticePeriodDuration(): void;
  getRedemptionNoticePeriodDuration(): google_protobuf_duration_pb.Duration | undefined;
  setRedemptionNoticePeriodDuration(value?: google_protobuf_duration_pb.Duration): void;

  getBalance(): string;
  setBalance(value: string): void;

  getTotalShare(): string;
  setTotalShare(value: string): void;

  getMarketId(): string;
  setMarketId(value: string): void;

  getMarketTicker(): string;
  setMarketTicker(value: string): void;

  getOracleBase(): string;
  setOracleBase(value: string): void;

  getOracleQuote(): string;
  setOracleQuote(value: string): void;

  getOracleType(): injective_oracle_v1beta1_oracle_pb.OracleTypeMap[keyof injective_oracle_v1beta1_oracle_pb.OracleTypeMap];
  setOracleType(value: injective_oracle_v1beta1_oracle_pb.OracleTypeMap[keyof injective_oracle_v1beta1_oracle_pb.OracleTypeMap]): void;

  getExpiry(): number;
  setExpiry(value: number): void;

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
    depositDenom: string,
    insurancePoolTokenDenom: string,
    redemptionNoticePeriodDuration?: google_protobuf_duration_pb.Duration.AsObject,
    balance: string,
    totalShare: string,
    marketId: string,
    marketTicker: string,
    oracleBase: string,
    oracleQuote: string,
    oracleType: injective_oracle_v1beta1_oracle_pb.OracleTypeMap[keyof injective_oracle_v1beta1_oracle_pb.OracleTypeMap],
    expiry: number,
  }
}

export class RedemptionSchedule extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  getMarketid(): string;
  setMarketid(value: string): void;

  getRedeemer(): string;
  setRedeemer(value: string): void;

  hasClaimableRedemptionTime(): boolean;
  clearClaimableRedemptionTime(): void;
  getClaimableRedemptionTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setClaimableRedemptionTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasRedemptionAmount(): boolean;
  clearRedemptionAmount(): void;
  getRedemptionAmount(): cosmos_base_v1beta1_coin_pb.Coin | undefined;
  setRedemptionAmount(value?: cosmos_base_v1beta1_coin_pb.Coin): void;

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
    id: number,
    marketid: string,
    redeemer: string,
    claimableRedemptionTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    redemptionAmount?: cosmos_base_v1beta1_coin_pb.Coin.AsObject,
  }
}

export class EventInsuranceFundUpdate extends jspb.Message {
  hasFund(): boolean;
  clearFund(): void;
  getFund(): InsuranceFund | undefined;
  setFund(value?: InsuranceFund): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EventInsuranceFundUpdate.AsObject;
  static toObject(includeInstance: boolean, msg: EventInsuranceFundUpdate): EventInsuranceFundUpdate.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EventInsuranceFundUpdate, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EventInsuranceFundUpdate;
  static deserializeBinaryFromReader(message: EventInsuranceFundUpdate, reader: jspb.BinaryReader): EventInsuranceFundUpdate;
}

export namespace EventInsuranceFundUpdate {
  export type AsObject = {
    fund?: InsuranceFund.AsObject,
  }
}

export class EventRequestRedemption extends jspb.Message {
  hasSchedule(): boolean;
  clearSchedule(): void;
  getSchedule(): RedemptionSchedule | undefined;
  setSchedule(value?: RedemptionSchedule): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EventRequestRedemption.AsObject;
  static toObject(includeInstance: boolean, msg: EventRequestRedemption): EventRequestRedemption.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EventRequestRedemption, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EventRequestRedemption;
  static deserializeBinaryFromReader(message: EventRequestRedemption, reader: jspb.BinaryReader): EventRequestRedemption;
}

export namespace EventRequestRedemption {
  export type AsObject = {
    schedule?: RedemptionSchedule.AsObject,
  }
}

export class EventWithdrawRedemption extends jspb.Message {
  hasSchedule(): boolean;
  clearSchedule(): void;
  getSchedule(): RedemptionSchedule | undefined;
  setSchedule(value?: RedemptionSchedule): void;

  hasRedeemCoin(): boolean;
  clearRedeemCoin(): void;
  getRedeemCoin(): cosmos_base_v1beta1_coin_pb.Coin | undefined;
  setRedeemCoin(value?: cosmos_base_v1beta1_coin_pb.Coin): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EventWithdrawRedemption.AsObject;
  static toObject(includeInstance: boolean, msg: EventWithdrawRedemption): EventWithdrawRedemption.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EventWithdrawRedemption, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EventWithdrawRedemption;
  static deserializeBinaryFromReader(message: EventWithdrawRedemption, reader: jspb.BinaryReader): EventWithdrawRedemption;
}

export namespace EventWithdrawRedemption {
  export type AsObject = {
    schedule?: RedemptionSchedule.AsObject,
    redeemCoin?: cosmos_base_v1beta1_coin_pb.Coin.AsObject,
  }
}

