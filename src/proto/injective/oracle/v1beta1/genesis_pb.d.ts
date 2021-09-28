// package: injective.oracle.v1beta1
// file: injective/oracle/v1beta1/genesis.proto

import * as jspb from "google-protobuf";
import * as injective_oracle_v1beta1_oracle_pb from "../../../injective/oracle/v1beta1/oracle_pb";
import * as gogoproto_gogo_pb from "../../../gogoproto/gogo_pb";

export class GenesisState extends jspb.Message {
  hasParams(): boolean;
  clearParams(): void;
  getParams(): injective_oracle_v1beta1_oracle_pb.Params | undefined;
  setParams(value?: injective_oracle_v1beta1_oracle_pb.Params): void;

  clearBandRelayersList(): void;
  getBandRelayersList(): Array<string>;
  setBandRelayersList(value: Array<string>): void;
  addBandRelayers(value: string, index?: number): string;

  clearBandPriceStatesList(): void;
  getBandPriceStatesList(): Array<injective_oracle_v1beta1_oracle_pb.BandPriceState>;
  setBandPriceStatesList(value: Array<injective_oracle_v1beta1_oracle_pb.BandPriceState>): void;
  addBandPriceStates(value?: injective_oracle_v1beta1_oracle_pb.BandPriceState, index?: number): injective_oracle_v1beta1_oracle_pb.BandPriceState;

  clearPriceFeedPriceStatesList(): void;
  getPriceFeedPriceStatesList(): Array<injective_oracle_v1beta1_oracle_pb.PriceFeedState>;
  setPriceFeedPriceStatesList(value: Array<injective_oracle_v1beta1_oracle_pb.PriceFeedState>): void;
  addPriceFeedPriceStates(value?: injective_oracle_v1beta1_oracle_pb.PriceFeedState, index?: number): injective_oracle_v1beta1_oracle_pb.PriceFeedState;

  clearCoinbasePriceStatesList(): void;
  getCoinbasePriceStatesList(): Array<injective_oracle_v1beta1_oracle_pb.CoinbasePriceState>;
  setCoinbasePriceStatesList(value: Array<injective_oracle_v1beta1_oracle_pb.CoinbasePriceState>): void;
  addCoinbasePriceStates(value?: injective_oracle_v1beta1_oracle_pb.CoinbasePriceState, index?: number): injective_oracle_v1beta1_oracle_pb.CoinbasePriceState;

  clearBandIbcPriceStatesList(): void;
  getBandIbcPriceStatesList(): Array<injective_oracle_v1beta1_oracle_pb.BandPriceState>;
  setBandIbcPriceStatesList(value: Array<injective_oracle_v1beta1_oracle_pb.BandPriceState>): void;
  addBandIbcPriceStates(value?: injective_oracle_v1beta1_oracle_pb.BandPriceState, index?: number): injective_oracle_v1beta1_oracle_pb.BandPriceState;

  clearBandIbcOracleRequestsList(): void;
  getBandIbcOracleRequestsList(): Array<injective_oracle_v1beta1_oracle_pb.BandOracleRequest>;
  setBandIbcOracleRequestsList(value: Array<injective_oracle_v1beta1_oracle_pb.BandOracleRequest>): void;
  addBandIbcOracleRequests(value?: injective_oracle_v1beta1_oracle_pb.BandOracleRequest, index?: number): injective_oracle_v1beta1_oracle_pb.BandOracleRequest;

  hasBandIbcParams(): boolean;
  clearBandIbcParams(): void;
  getBandIbcParams(): injective_oracle_v1beta1_oracle_pb.BandIBCParams | undefined;
  setBandIbcParams(value?: injective_oracle_v1beta1_oracle_pb.BandIBCParams): void;

  getBandIbcLatestClientId(): number;
  setBandIbcLatestClientId(value: number): void;

  clearCalldataRecordsList(): void;
  getCalldataRecordsList(): Array<CalldataRecord>;
  setCalldataRecordsList(value: Array<CalldataRecord>): void;
  addCalldataRecords(value?: CalldataRecord, index?: number): CalldataRecord;

  getBandIbcLatestRequestId(): number;
  setBandIbcLatestRequestId(value: number): void;

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
    params?: injective_oracle_v1beta1_oracle_pb.Params.AsObject,
    bandRelayersList: Array<string>,
    bandPriceStatesList: Array<injective_oracle_v1beta1_oracle_pb.BandPriceState.AsObject>,
    priceFeedPriceStatesList: Array<injective_oracle_v1beta1_oracle_pb.PriceFeedState.AsObject>,
    coinbasePriceStatesList: Array<injective_oracle_v1beta1_oracle_pb.CoinbasePriceState.AsObject>,
    bandIbcPriceStatesList: Array<injective_oracle_v1beta1_oracle_pb.BandPriceState.AsObject>,
    bandIbcOracleRequestsList: Array<injective_oracle_v1beta1_oracle_pb.BandOracleRequest.AsObject>,
    bandIbcParams?: injective_oracle_v1beta1_oracle_pb.BandIBCParams.AsObject,
    bandIbcLatestClientId: number,
    calldataRecordsList: Array<CalldataRecord.AsObject>,
    bandIbcLatestRequestId: number,
  }
}

export class CalldataRecord extends jspb.Message {
  getClientId(): number;
  setClientId(value: number): void;

  getCalldata(): Uint8Array | string;
  getCalldata_asU8(): Uint8Array;
  getCalldata_asB64(): string;
  setCalldata(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CalldataRecord.AsObject;
  static toObject(includeInstance: boolean, msg: CalldataRecord): CalldataRecord.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CalldataRecord, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CalldataRecord;
  static deserializeBinaryFromReader(message: CalldataRecord, reader: jspb.BinaryReader): CalldataRecord;
}

export namespace CalldataRecord {
  export type AsObject = {
    clientId: number,
    calldata: Uint8Array | string,
  }
}

