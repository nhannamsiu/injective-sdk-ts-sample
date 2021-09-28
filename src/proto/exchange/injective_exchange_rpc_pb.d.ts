// package: injective_exchange_rpc
// file: exchange/injective_exchange_rpc.proto

import * as jspb from "google-protobuf";

export class PingRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PingRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PingRequest): PingRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PingRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PingRequest;
  static deserializeBinaryFromReader(message: PingRequest, reader: jspb.BinaryReader): PingRequest;
}

export namespace PingRequest {
  export type AsObject = {
  }
}

export class PingResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PingResponse.AsObject;
  static toObject(includeInstance: boolean, msg: PingResponse): PingResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PingResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PingResponse;
  static deserializeBinaryFromReader(message: PingResponse, reader: jspb.BinaryReader): PingResponse;
}

export namespace PingResponse {
  export type AsObject = {
  }
}

export class VersionRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VersionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: VersionRequest): VersionRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: VersionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VersionRequest;
  static deserializeBinaryFromReader(message: VersionRequest, reader: jspb.BinaryReader): VersionRequest;
}

export namespace VersionRequest {
  export type AsObject = {
  }
}

export class VersionResponse extends jspb.Message {
  getVersion(): string;
  setVersion(value: string): void;

  getMetaDataMap(): jspb.Map<string, string>;
  clearMetaDataMap(): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VersionResponse.AsObject;
  static toObject(includeInstance: boolean, msg: VersionResponse): VersionResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: VersionResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VersionResponse;
  static deserializeBinaryFromReader(message: VersionResponse, reader: jspb.BinaryReader): VersionResponse;
}

export namespace VersionResponse {
  export type AsObject = {
    version: string,
    metaDataMap: Array<[string, string]>,
  }
}

export class GetTxRequest extends jspb.Message {
  getHash(): string;
  setHash(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetTxRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetTxRequest): GetTxRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetTxRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetTxRequest;
  static deserializeBinaryFromReader(message: GetTxRequest, reader: jspb.BinaryReader): GetTxRequest;
}

export namespace GetTxRequest {
  export type AsObject = {
    hash: string,
  }
}

export class GetTxResponse extends jspb.Message {
  getTxHash(): string;
  setTxHash(value: string): void;

  getHeight(): number;
  setHeight(value: number): void;

  getIndex(): number;
  setIndex(value: number): void;

  getCodespace(): string;
  setCodespace(value: string): void;

  getCode(): number;
  setCode(value: number): void;

  getData(): Uint8Array | string;
  getData_asU8(): Uint8Array;
  getData_asB64(): string;
  setData(value: Uint8Array | string): void;

  getRawLog(): string;
  setRawLog(value: string): void;

  getTimestamp(): string;
  setTimestamp(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetTxResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetTxResponse): GetTxResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetTxResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetTxResponse;
  static deserializeBinaryFromReader(message: GetTxResponse, reader: jspb.BinaryReader): GetTxResponse;
}

export namespace GetTxResponse {
  export type AsObject = {
    txHash: string,
    height: number,
    index: number,
    codespace: string,
    code: number,
    data: Uint8Array | string,
    rawLog: string,
    timestamp: string,
  }
}

export class PrepareTxRequest extends jspb.Message {
  getChainId(): number;
  setChainId(value: number): void;

  getSignerAddress(): string;
  setSignerAddress(value: string): void;

  getSequence(): number;
  setSequence(value: number): void;

  getMemo(): string;
  setMemo(value: string): void;

  getTimeoutHeight(): number;
  setTimeoutHeight(value: number): void;

  hasFee(): boolean;
  clearFee(): void;
  getFee(): CosmosTxFee | undefined;
  setFee(value?: CosmosTxFee): void;

  clearMsgsList(): void;
  getMsgsList(): Array<Uint8Array | string>;
  getMsgsList_asU8(): Array<Uint8Array>;
  getMsgsList_asB64(): Array<string>;
  setMsgsList(value: Array<Uint8Array | string>): void;
  addMsgs(value: Uint8Array | string, index?: number): Uint8Array | string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PrepareTxRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PrepareTxRequest): PrepareTxRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PrepareTxRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PrepareTxRequest;
  static deserializeBinaryFromReader(message: PrepareTxRequest, reader: jspb.BinaryReader): PrepareTxRequest;
}

export namespace PrepareTxRequest {
  export type AsObject = {
    chainId: number,
    signerAddress: string,
    sequence: number,
    memo: string,
    timeoutHeight: number,
    fee?: CosmosTxFee.AsObject,
    msgsList: Array<Uint8Array | string>,
  }
}

export class CosmosTxFee extends jspb.Message {
  clearPriceList(): void;
  getPriceList(): Array<CosmosCoin>;
  setPriceList(value: Array<CosmosCoin>): void;
  addPrice(value?: CosmosCoin, index?: number): CosmosCoin;

  getGas(): number;
  setGas(value: number): void;

  getDelegateFee(): boolean;
  setDelegateFee(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CosmosTxFee.AsObject;
  static toObject(includeInstance: boolean, msg: CosmosTxFee): CosmosTxFee.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CosmosTxFee, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CosmosTxFee;
  static deserializeBinaryFromReader(message: CosmosTxFee, reader: jspb.BinaryReader): CosmosTxFee;
}

export namespace CosmosTxFee {
  export type AsObject = {
    priceList: Array<CosmosCoin.AsObject>,
    gas: number,
    delegateFee: boolean,
  }
}

export class CosmosCoin extends jspb.Message {
  getDenom(): string;
  setDenom(value: string): void;

  getAmount(): string;
  setAmount(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CosmosCoin.AsObject;
  static toObject(includeInstance: boolean, msg: CosmosCoin): CosmosCoin.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CosmosCoin, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CosmosCoin;
  static deserializeBinaryFromReader(message: CosmosCoin, reader: jspb.BinaryReader): CosmosCoin;
}

export namespace CosmosCoin {
  export type AsObject = {
    denom: string,
    amount: string,
  }
}

export class PrepareTxResponse extends jspb.Message {
  getData(): string;
  setData(value: string): void;

  getSequence(): number;
  setSequence(value: number): void;

  getSignMode(): string;
  setSignMode(value: string): void;

  getPubKeyType(): string;
  setPubKeyType(value: string): void;

  getFeePayer(): string;
  setFeePayer(value: string): void;

  getFeePayerSig(): string;
  setFeePayerSig(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PrepareTxResponse.AsObject;
  static toObject(includeInstance: boolean, msg: PrepareTxResponse): PrepareTxResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PrepareTxResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PrepareTxResponse;
  static deserializeBinaryFromReader(message: PrepareTxResponse, reader: jspb.BinaryReader): PrepareTxResponse;
}

export namespace PrepareTxResponse {
  export type AsObject = {
    data: string,
    sequence: number,
    signMode: string,
    pubKeyType: string,
    feePayer: string,
    feePayerSig: string,
  }
}

export class BroadcastTxRequest extends jspb.Message {
  getChainId(): number;
  setChainId(value: number): void;

  getTx(): Uint8Array | string;
  getTx_asU8(): Uint8Array;
  getTx_asB64(): string;
  setTx(value: Uint8Array | string): void;

  clearMsgsList(): void;
  getMsgsList(): Array<Uint8Array | string>;
  getMsgsList_asU8(): Array<Uint8Array>;
  getMsgsList_asB64(): Array<string>;
  setMsgsList(value: Array<Uint8Array | string>): void;
  addMsgs(value: Uint8Array | string, index?: number): Uint8Array | string;

  hasPubKey(): boolean;
  clearPubKey(): void;
  getPubKey(): CosmosPubKey | undefined;
  setPubKey(value?: CosmosPubKey): void;

  getSignature(): string;
  setSignature(value: string): void;

  getFeePayer(): string;
  setFeePayer(value: string): void;

  getFeePayerSig(): string;
  setFeePayerSig(value: string): void;

  getMode(): string;
  setMode(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BroadcastTxRequest.AsObject;
  static toObject(includeInstance: boolean, msg: BroadcastTxRequest): BroadcastTxRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BroadcastTxRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BroadcastTxRequest;
  static deserializeBinaryFromReader(message: BroadcastTxRequest, reader: jspb.BinaryReader): BroadcastTxRequest;
}

export namespace BroadcastTxRequest {
  export type AsObject = {
    chainId: number,
    tx: Uint8Array | string,
    msgsList: Array<Uint8Array | string>,
    pubKey?: CosmosPubKey.AsObject,
    signature: string,
    feePayer: string,
    feePayerSig: string,
    mode: string,
  }
}

export class CosmosPubKey extends jspb.Message {
  getType(): string;
  setType(value: string): void;

  getKey(): string;
  setKey(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CosmosPubKey.AsObject;
  static toObject(includeInstance: boolean, msg: CosmosPubKey): CosmosPubKey.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CosmosPubKey, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CosmosPubKey;
  static deserializeBinaryFromReader(message: CosmosPubKey, reader: jspb.BinaryReader): CosmosPubKey;
}

export namespace CosmosPubKey {
  export type AsObject = {
    type: string,
    key: string,
  }
}

export class BroadcastTxResponse extends jspb.Message {
  getTxHash(): string;
  setTxHash(value: string): void;

  getHeight(): number;
  setHeight(value: number): void;

  getIndex(): number;
  setIndex(value: number): void;

  getCodespace(): string;
  setCodespace(value: string): void;

  getCode(): number;
  setCode(value: number): void;

  getData(): Uint8Array | string;
  getData_asU8(): Uint8Array;
  getData_asB64(): string;
  setData(value: Uint8Array | string): void;

  getRawLog(): string;
  setRawLog(value: string): void;

  getTimestamp(): string;
  setTimestamp(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BroadcastTxResponse.AsObject;
  static toObject(includeInstance: boolean, msg: BroadcastTxResponse): BroadcastTxResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BroadcastTxResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BroadcastTxResponse;
  static deserializeBinaryFromReader(message: BroadcastTxResponse, reader: jspb.BinaryReader): BroadcastTxResponse;
}

export namespace BroadcastTxResponse {
  export type AsObject = {
    txHash: string,
    height: number,
    index: number,
    codespace: string,
    code: number,
    data: Uint8Array | string,
    rawLog: string,
    timestamp: string,
  }
}

