// package: injective.oracle.v1beta1
// file: injective/oracle/v1beta1/oracle.proto

import * as jspb from "google-protobuf";
import * as gogoproto_gogo_pb from "../../../gogoproto/gogo_pb";
import * as cosmos_base_v1beta1_coin_pb from "../../../cosmos/base/v1beta1/coin_pb";

export class Params extends jspb.Message {
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
  }
}

export class BandPriceState extends jspb.Message {
  getSymbol(): string;
  setSymbol(value: string): void;

  getRate(): string;
  setRate(value: string): void;

  getResolveTime(): number;
  setResolveTime(value: number): void;

  getRequestId(): number;
  setRequestId(value: number): void;

  hasPriceState(): boolean;
  clearPriceState(): void;
  getPriceState(): PriceState | undefined;
  setPriceState(value?: PriceState): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BandPriceState.AsObject;
  static toObject(includeInstance: boolean, msg: BandPriceState): BandPriceState.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BandPriceState, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BandPriceState;
  static deserializeBinaryFromReader(message: BandPriceState, reader: jspb.BinaryReader): BandPriceState;
}

export namespace BandPriceState {
  export type AsObject = {
    symbol: string,
    rate: string,
    resolveTime: number,
    requestId: number,
    priceState?: PriceState.AsObject,
  }
}

export class SetBandPriceEvent extends jspb.Message {
  getRelayer(): string;
  setRelayer(value: string): void;

  getSymbol(): string;
  setSymbol(value: string): void;

  getPrice(): string;
  setPrice(value: string): void;

  getResolveTime(): number;
  setResolveTime(value: number): void;

  getRequestId(): number;
  setRequestId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetBandPriceEvent.AsObject;
  static toObject(includeInstance: boolean, msg: SetBandPriceEvent): SetBandPriceEvent.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SetBandPriceEvent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetBandPriceEvent;
  static deserializeBinaryFromReader(message: SetBandPriceEvent, reader: jspb.BinaryReader): SetBandPriceEvent;
}

export namespace SetBandPriceEvent {
  export type AsObject = {
    relayer: string,
    symbol: string,
    price: string,
    resolveTime: number,
    requestId: number,
  }
}

export class SetBandIBCPriceEvent extends jspb.Message {
  getRelayer(): string;
  setRelayer(value: string): void;

  getSymbol(): string;
  setSymbol(value: string): void;

  getPrice(): string;
  setPrice(value: string): void;

  getResolveTime(): number;
  setResolveTime(value: number): void;

  getRequestId(): number;
  setRequestId(value: number): void;

  getClientId(): number;
  setClientId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetBandIBCPriceEvent.AsObject;
  static toObject(includeInstance: boolean, msg: SetBandIBCPriceEvent): SetBandIBCPriceEvent.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SetBandIBCPriceEvent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetBandIBCPriceEvent;
  static deserializeBinaryFromReader(message: SetBandIBCPriceEvent, reader: jspb.BinaryReader): SetBandIBCPriceEvent;
}

export namespace SetBandIBCPriceEvent {
  export type AsObject = {
    relayer: string,
    symbol: string,
    price: string,
    resolveTime: number,
    requestId: number,
    clientId: number,
  }
}

export class EventBandIBCAckSuccess extends jspb.Message {
  getAckResult(): string;
  setAckResult(value: string): void;

  getClientId(): number;
  setClientId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EventBandIBCAckSuccess.AsObject;
  static toObject(includeInstance: boolean, msg: EventBandIBCAckSuccess): EventBandIBCAckSuccess.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EventBandIBCAckSuccess, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EventBandIBCAckSuccess;
  static deserializeBinaryFromReader(message: EventBandIBCAckSuccess, reader: jspb.BinaryReader): EventBandIBCAckSuccess;
}

export namespace EventBandIBCAckSuccess {
  export type AsObject = {
    ackResult: string,
    clientId: number,
  }
}

export class EventBandIBCAckError extends jspb.Message {
  getAckError(): string;
  setAckError(value: string): void;

  getClientId(): number;
  setClientId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EventBandIBCAckError.AsObject;
  static toObject(includeInstance: boolean, msg: EventBandIBCAckError): EventBandIBCAckError.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EventBandIBCAckError, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EventBandIBCAckError;
  static deserializeBinaryFromReader(message: EventBandIBCAckError, reader: jspb.BinaryReader): EventBandIBCAckError;
}

export namespace EventBandIBCAckError {
  export type AsObject = {
    ackError: string,
    clientId: number,
  }
}

export class EventBandIBCResponseTimeout extends jspb.Message {
  getClientId(): number;
  setClientId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EventBandIBCResponseTimeout.AsObject;
  static toObject(includeInstance: boolean, msg: EventBandIBCResponseTimeout): EventBandIBCResponseTimeout.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EventBandIBCResponseTimeout, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EventBandIBCResponseTimeout;
  static deserializeBinaryFromReader(message: EventBandIBCResponseTimeout, reader: jspb.BinaryReader): EventBandIBCResponseTimeout;
}

export namespace EventBandIBCResponseTimeout {
  export type AsObject = {
    clientId: number,
  }
}

export class GetReferenceData extends jspb.Message {
  getBaseQuoteSymbol(): string;
  setBaseQuoteSymbol(value: string): void;

  getBaseQuoteRate(): string;
  setBaseQuoteRate(value: string): void;

  getLastUpdateBase(): string;
  setLastUpdateBase(value: string): void;

  getLastUpdateQuote(): string;
  setLastUpdateQuote(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetReferenceData.AsObject;
  static toObject(includeInstance: boolean, msg: GetReferenceData): GetReferenceData.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetReferenceData, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetReferenceData;
  static deserializeBinaryFromReader(message: GetReferenceData, reader: jspb.BinaryReader): GetReferenceData;
}

export namespace GetReferenceData {
  export type AsObject = {
    baseQuoteSymbol: string,
    baseQuoteRate: string,
    lastUpdateBase: string,
    lastUpdateQuote: string,
  }
}

export class GrantBandOraclePrivilegeProposal extends jspb.Message {
  getTitle(): string;
  setTitle(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  clearRelayersList(): void;
  getRelayersList(): Array<string>;
  setRelayersList(value: Array<string>): void;
  addRelayers(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GrantBandOraclePrivilegeProposal.AsObject;
  static toObject(includeInstance: boolean, msg: GrantBandOraclePrivilegeProposal): GrantBandOraclePrivilegeProposal.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GrantBandOraclePrivilegeProposal, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GrantBandOraclePrivilegeProposal;
  static deserializeBinaryFromReader(message: GrantBandOraclePrivilegeProposal, reader: jspb.BinaryReader): GrantBandOraclePrivilegeProposal;
}

export namespace GrantBandOraclePrivilegeProposal {
  export type AsObject = {
    title: string,
    description: string,
    relayersList: Array<string>,
  }
}

export class RevokeBandOraclePrivilegeProposal extends jspb.Message {
  getTitle(): string;
  setTitle(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  clearRelayersList(): void;
  getRelayersList(): Array<string>;
  setRelayersList(value: Array<string>): void;
  addRelayers(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RevokeBandOraclePrivilegeProposal.AsObject;
  static toObject(includeInstance: boolean, msg: RevokeBandOraclePrivilegeProposal): RevokeBandOraclePrivilegeProposal.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RevokeBandOraclePrivilegeProposal, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RevokeBandOraclePrivilegeProposal;
  static deserializeBinaryFromReader(message: RevokeBandOraclePrivilegeProposal, reader: jspb.BinaryReader): RevokeBandOraclePrivilegeProposal;
}

export namespace RevokeBandOraclePrivilegeProposal {
  export type AsObject = {
    title: string,
    description: string,
    relayersList: Array<string>,
  }
}

export class GrantPriceFeederPrivilegeProposal extends jspb.Message {
  getTitle(): string;
  setTitle(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  getBase(): string;
  setBase(value: string): void;

  getQuote(): string;
  setQuote(value: string): void;

  clearRelayersList(): void;
  getRelayersList(): Array<string>;
  setRelayersList(value: Array<string>): void;
  addRelayers(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GrantPriceFeederPrivilegeProposal.AsObject;
  static toObject(includeInstance: boolean, msg: GrantPriceFeederPrivilegeProposal): GrantPriceFeederPrivilegeProposal.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GrantPriceFeederPrivilegeProposal, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GrantPriceFeederPrivilegeProposal;
  static deserializeBinaryFromReader(message: GrantPriceFeederPrivilegeProposal, reader: jspb.BinaryReader): GrantPriceFeederPrivilegeProposal;
}

export namespace GrantPriceFeederPrivilegeProposal {
  export type AsObject = {
    title: string,
    description: string,
    base: string,
    quote: string,
    relayersList: Array<string>,
  }
}

export class RevokePriceFeederPrivilegeProposal extends jspb.Message {
  getTitle(): string;
  setTitle(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  getBase(): string;
  setBase(value: string): void;

  getQuote(): string;
  setQuote(value: string): void;

  clearRelayersList(): void;
  getRelayersList(): Array<string>;
  setRelayersList(value: Array<string>): void;
  addRelayers(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RevokePriceFeederPrivilegeProposal.AsObject;
  static toObject(includeInstance: boolean, msg: RevokePriceFeederPrivilegeProposal): RevokePriceFeederPrivilegeProposal.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RevokePriceFeederPrivilegeProposal, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RevokePriceFeederPrivilegeProposal;
  static deserializeBinaryFromReader(message: RevokePriceFeederPrivilegeProposal, reader: jspb.BinaryReader): RevokePriceFeederPrivilegeProposal;
}

export namespace RevokePriceFeederPrivilegeProposal {
  export type AsObject = {
    title: string,
    description: string,
    base: string,
    quote: string,
    relayersList: Array<string>,
  }
}

export class PriceFeedState extends jspb.Message {
  getBase(): string;
  setBase(value: string): void;

  getQuote(): string;
  setQuote(value: string): void;

  hasPriceState(): boolean;
  clearPriceState(): void;
  getPriceState(): PriceState | undefined;
  setPriceState(value?: PriceState): void;

  clearRelayersList(): void;
  getRelayersList(): Array<string>;
  setRelayersList(value: Array<string>): void;
  addRelayers(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PriceFeedState.AsObject;
  static toObject(includeInstance: boolean, msg: PriceFeedState): PriceFeedState.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PriceFeedState, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PriceFeedState;
  static deserializeBinaryFromReader(message: PriceFeedState, reader: jspb.BinaryReader): PriceFeedState;
}

export namespace PriceFeedState {
  export type AsObject = {
    base: string,
    quote: string,
    priceState?: PriceState.AsObject,
    relayersList: Array<string>,
  }
}

export class PriceFeedInfo extends jspb.Message {
  getBase(): string;
  setBase(value: string): void;

  getQuote(): string;
  setQuote(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PriceFeedInfo.AsObject;
  static toObject(includeInstance: boolean, msg: PriceFeedInfo): PriceFeedInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PriceFeedInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PriceFeedInfo;
  static deserializeBinaryFromReader(message: PriceFeedInfo, reader: jspb.BinaryReader): PriceFeedInfo;
}

export namespace PriceFeedInfo {
  export type AsObject = {
    base: string,
    quote: string,
  }
}

export class PriceFeedPrice extends jspb.Message {
  getPrice(): string;
  setPrice(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PriceFeedPrice.AsObject;
  static toObject(includeInstance: boolean, msg: PriceFeedPrice): PriceFeedPrice.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PriceFeedPrice, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PriceFeedPrice;
  static deserializeBinaryFromReader(message: PriceFeedPrice, reader: jspb.BinaryReader): PriceFeedPrice;
}

export namespace PriceFeedPrice {
  export type AsObject = {
    price: string,
  }
}

export class SetPriceFeedPriceEvent extends jspb.Message {
  getRelayer(): string;
  setRelayer(value: string): void;

  getBase(): string;
  setBase(value: string): void;

  getQuote(): string;
  setQuote(value: string): void;

  getPrice(): string;
  setPrice(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetPriceFeedPriceEvent.AsObject;
  static toObject(includeInstance: boolean, msg: SetPriceFeedPriceEvent): SetPriceFeedPriceEvent.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SetPriceFeedPriceEvent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetPriceFeedPriceEvent;
  static deserializeBinaryFromReader(message: SetPriceFeedPriceEvent, reader: jspb.BinaryReader): SetPriceFeedPriceEvent;
}

export namespace SetPriceFeedPriceEvent {
  export type AsObject = {
    relayer: string,
    base: string,
    quote: string,
    price: string,
  }
}

export class CoinbasePriceState extends jspb.Message {
  getKind(): string;
  setKind(value: string): void;

  getTimestamp(): number;
  setTimestamp(value: number): void;

  getKey(): string;
  setKey(value: string): void;

  getValue(): number;
  setValue(value: number): void;

  hasPriceState(): boolean;
  clearPriceState(): void;
  getPriceState(): PriceState | undefined;
  setPriceState(value?: PriceState): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CoinbasePriceState.AsObject;
  static toObject(includeInstance: boolean, msg: CoinbasePriceState): CoinbasePriceState.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CoinbasePriceState, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CoinbasePriceState;
  static deserializeBinaryFromReader(message: CoinbasePriceState, reader: jspb.BinaryReader): CoinbasePriceState;
}

export namespace CoinbasePriceState {
  export type AsObject = {
    kind: string,
    timestamp: number,
    key: string,
    value: number,
    priceState?: PriceState.AsObject,
  }
}

export class SetCoinbasePriceEvent extends jspb.Message {
  getSymbol(): string;
  setSymbol(value: string): void;

  getPrice(): string;
  setPrice(value: string): void;

  getTimestamp(): number;
  setTimestamp(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetCoinbasePriceEvent.AsObject;
  static toObject(includeInstance: boolean, msg: SetCoinbasePriceEvent): SetCoinbasePriceEvent.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SetCoinbasePriceEvent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetCoinbasePriceEvent;
  static deserializeBinaryFromReader(message: SetCoinbasePriceEvent, reader: jspb.BinaryReader): SetCoinbasePriceEvent;
}

export namespace SetCoinbasePriceEvent {
  export type AsObject = {
    symbol: string,
    price: string,
    timestamp: number,
  }
}

export class PriceState extends jspb.Message {
  getPrice(): string;
  setPrice(value: string): void;

  getCumulativePrice(): string;
  setCumulativePrice(value: string): void;

  getTimestamp(): number;
  setTimestamp(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PriceState.AsObject;
  static toObject(includeInstance: boolean, msg: PriceState): PriceState.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PriceState, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PriceState;
  static deserializeBinaryFromReader(message: PriceState, reader: jspb.BinaryReader): PriceState;
}

export namespace PriceState {
  export type AsObject = {
    price: string,
    cumulativePrice: string,
    timestamp: number,
  }
}

export class AuthorizeBandOracleRequestProposal extends jspb.Message {
  getTitle(): string;
  setTitle(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  hasRequest(): boolean;
  clearRequest(): void;
  getRequest(): BandOracleRequest | undefined;
  setRequest(value?: BandOracleRequest): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AuthorizeBandOracleRequestProposal.AsObject;
  static toObject(includeInstance: boolean, msg: AuthorizeBandOracleRequestProposal): AuthorizeBandOracleRequestProposal.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AuthorizeBandOracleRequestProposal, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AuthorizeBandOracleRequestProposal;
  static deserializeBinaryFromReader(message: AuthorizeBandOracleRequestProposal, reader: jspb.BinaryReader): AuthorizeBandOracleRequestProposal;
}

export namespace AuthorizeBandOracleRequestProposal {
  export type AsObject = {
    title: string,
    description: string,
    request?: BandOracleRequest.AsObject,
  }
}

export class UpdateBandOracleRequestProposal extends jspb.Message {
  getTitle(): string;
  setTitle(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  getDeleteRequestId(): number;
  setDeleteRequestId(value: number): void;

  hasUpdateOracleRequest(): boolean;
  clearUpdateOracleRequest(): void;
  getUpdateOracleRequest(): BandOracleRequest | undefined;
  setUpdateOracleRequest(value?: BandOracleRequest): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateBandOracleRequestProposal.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateBandOracleRequestProposal): UpdateBandOracleRequestProposal.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateBandOracleRequestProposal, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateBandOracleRequestProposal;
  static deserializeBinaryFromReader(message: UpdateBandOracleRequestProposal, reader: jspb.BinaryReader): UpdateBandOracleRequestProposal;
}

export namespace UpdateBandOracleRequestProposal {
  export type AsObject = {
    title: string,
    description: string,
    deleteRequestId: number,
    updateOracleRequest?: BandOracleRequest.AsObject,
  }
}

export class EnableBandIBCProposal extends jspb.Message {
  getTitle(): string;
  setTitle(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  hasBandIbcParams(): boolean;
  clearBandIbcParams(): void;
  getBandIbcParams(): BandIBCParams | undefined;
  setBandIbcParams(value?: BandIBCParams): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EnableBandIBCProposal.AsObject;
  static toObject(includeInstance: boolean, msg: EnableBandIBCProposal): EnableBandIBCProposal.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EnableBandIBCProposal, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EnableBandIBCProposal;
  static deserializeBinaryFromReader(message: EnableBandIBCProposal, reader: jspb.BinaryReader): EnableBandIBCProposal;
}

export namespace EnableBandIBCProposal {
  export type AsObject = {
    title: string,
    description: string,
    bandIbcParams?: BandIBCParams.AsObject,
  }
}

export class BandOracleRequest extends jspb.Message {
  getRequestId(): number;
  setRequestId(value: number): void;

  getOracleScriptId(): number;
  setOracleScriptId(value: number): void;

  clearSymbolsList(): void;
  getSymbolsList(): Array<string>;
  setSymbolsList(value: Array<string>): void;
  addSymbols(value: string, index?: number): string;

  getAskCount(): number;
  setAskCount(value: number): void;

  getMinCount(): number;
  setMinCount(value: number): void;

  clearFeeLimitList(): void;
  getFeeLimitList(): Array<cosmos_base_v1beta1_coin_pb.Coin>;
  setFeeLimitList(value: Array<cosmos_base_v1beta1_coin_pb.Coin>): void;
  addFeeLimit(value?: cosmos_base_v1beta1_coin_pb.Coin, index?: number): cosmos_base_v1beta1_coin_pb.Coin;

  getPrepareGas(): number;
  setPrepareGas(value: number): void;

  getExecuteGas(): number;
  setExecuteGas(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BandOracleRequest.AsObject;
  static toObject(includeInstance: boolean, msg: BandOracleRequest): BandOracleRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BandOracleRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BandOracleRequest;
  static deserializeBinaryFromReader(message: BandOracleRequest, reader: jspb.BinaryReader): BandOracleRequest;
}

export namespace BandOracleRequest {
  export type AsObject = {
    requestId: number,
    oracleScriptId: number,
    symbolsList: Array<string>,
    askCount: number,
    minCount: number,
    feeLimitList: Array<cosmos_base_v1beta1_coin_pb.Coin.AsObject>,
    prepareGas: number,
    executeGas: number,
  }
}

export class BandIBCParams extends jspb.Message {
  getBandIbcEnabled(): boolean;
  setBandIbcEnabled(value: boolean): void;

  getIbcRequestInterval(): number;
  setIbcRequestInterval(value: number): void;

  getIbcSourceChannel(): string;
  setIbcSourceChannel(value: string): void;

  getIbcVersion(): string;
  setIbcVersion(value: string): void;

  getIbcPortId(): string;
  setIbcPortId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BandIBCParams.AsObject;
  static toObject(includeInstance: boolean, msg: BandIBCParams): BandIBCParams.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BandIBCParams, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BandIBCParams;
  static deserializeBinaryFromReader(message: BandIBCParams, reader: jspb.BinaryReader): BandIBCParams;
}

export namespace BandIBCParams {
  export type AsObject = {
    bandIbcEnabled: boolean,
    ibcRequestInterval: number,
    ibcSourceChannel: string,
    ibcVersion: string,
    ibcPortId: string,
  }
}

export interface OracleTypeMap {
  UNSPECIFIED: 0;
  BAND: 1;
  PRICEFEED: 2;
  COINBASE: 3;
  CHAINLINK: 4;
  RAZOR: 5;
  DIA: 6;
  API3: 7;
  UMA: 8;
  PYTH: 9;
  BANDIBC: 10;
}

export const OracleType: OracleTypeMap;

