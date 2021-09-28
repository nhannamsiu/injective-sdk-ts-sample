// package: injective.insurance.v1beta1
// file: injective/insurance/v1beta1/tx.proto

import * as jspb from "google-protobuf";
import * as gogoproto_gogo_pb from "../../../gogoproto/gogo_pb";
import * as cosmos_base_v1beta1_coin_pb from "../../../cosmos/base/v1beta1/coin_pb";
import * as injective_oracle_v1beta1_oracle_pb from "../../../injective/oracle/v1beta1/oracle_pb";
import * as injective_insurance_v1beta1_insurance_pb from "../../../injective/insurance/v1beta1/insurance_pb";

export class MsgCreateInsuranceFund extends jspb.Message {
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

  getExpiry(): number;
  setExpiry(value: number): void;

  hasInitialDeposit(): boolean;
  clearInitialDeposit(): void;
  getInitialDeposit(): cosmos_base_v1beta1_coin_pb.Coin | undefined;
  setInitialDeposit(value?: cosmos_base_v1beta1_coin_pb.Coin): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgCreateInsuranceFund.AsObject;
  static toObject(includeInstance: boolean, msg: MsgCreateInsuranceFund): MsgCreateInsuranceFund.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MsgCreateInsuranceFund, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgCreateInsuranceFund;
  static deserializeBinaryFromReader(message: MsgCreateInsuranceFund, reader: jspb.BinaryReader): MsgCreateInsuranceFund;
}

export namespace MsgCreateInsuranceFund {
  export type AsObject = {
    sender: string,
    ticker: string,
    quoteDenom: string,
    oracleBase: string,
    oracleQuote: string,
    oracleType: injective_oracle_v1beta1_oracle_pb.OracleTypeMap[keyof injective_oracle_v1beta1_oracle_pb.OracleTypeMap],
    expiry: number,
    initialDeposit?: cosmos_base_v1beta1_coin_pb.Coin.AsObject,
  }
}

export class MsgCreateInsuranceFundResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgCreateInsuranceFundResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MsgCreateInsuranceFundResponse): MsgCreateInsuranceFundResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MsgCreateInsuranceFundResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgCreateInsuranceFundResponse;
  static deserializeBinaryFromReader(message: MsgCreateInsuranceFundResponse, reader: jspb.BinaryReader): MsgCreateInsuranceFundResponse;
}

export namespace MsgCreateInsuranceFundResponse {
  export type AsObject = {
  }
}

export class MsgUnderwrite extends jspb.Message {
  getSender(): string;
  setSender(value: string): void;

  getMarketId(): string;
  setMarketId(value: string): void;

  hasDeposit(): boolean;
  clearDeposit(): void;
  getDeposit(): cosmos_base_v1beta1_coin_pb.Coin | undefined;
  setDeposit(value?: cosmos_base_v1beta1_coin_pb.Coin): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgUnderwrite.AsObject;
  static toObject(includeInstance: boolean, msg: MsgUnderwrite): MsgUnderwrite.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MsgUnderwrite, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgUnderwrite;
  static deserializeBinaryFromReader(message: MsgUnderwrite, reader: jspb.BinaryReader): MsgUnderwrite;
}

export namespace MsgUnderwrite {
  export type AsObject = {
    sender: string,
    marketId: string,
    deposit?: cosmos_base_v1beta1_coin_pb.Coin.AsObject,
  }
}

export class MsgUnderwriteResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgUnderwriteResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MsgUnderwriteResponse): MsgUnderwriteResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MsgUnderwriteResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgUnderwriteResponse;
  static deserializeBinaryFromReader(message: MsgUnderwriteResponse, reader: jspb.BinaryReader): MsgUnderwriteResponse;
}

export namespace MsgUnderwriteResponse {
  export type AsObject = {
  }
}

export class MsgRequestRedemption extends jspb.Message {
  getSender(): string;
  setSender(value: string): void;

  getMarketId(): string;
  setMarketId(value: string): void;

  hasAmount(): boolean;
  clearAmount(): void;
  getAmount(): cosmos_base_v1beta1_coin_pb.Coin | undefined;
  setAmount(value?: cosmos_base_v1beta1_coin_pb.Coin): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgRequestRedemption.AsObject;
  static toObject(includeInstance: boolean, msg: MsgRequestRedemption): MsgRequestRedemption.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MsgRequestRedemption, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgRequestRedemption;
  static deserializeBinaryFromReader(message: MsgRequestRedemption, reader: jspb.BinaryReader): MsgRequestRedemption;
}

export namespace MsgRequestRedemption {
  export type AsObject = {
    sender: string,
    marketId: string,
    amount?: cosmos_base_v1beta1_coin_pb.Coin.AsObject,
  }
}

export class MsgRequestRedemptionResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgRequestRedemptionResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MsgRequestRedemptionResponse): MsgRequestRedemptionResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MsgRequestRedemptionResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgRequestRedemptionResponse;
  static deserializeBinaryFromReader(message: MsgRequestRedemptionResponse, reader: jspb.BinaryReader): MsgRequestRedemptionResponse;
}

export namespace MsgRequestRedemptionResponse {
  export type AsObject = {
  }
}

