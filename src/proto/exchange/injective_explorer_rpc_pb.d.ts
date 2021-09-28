// package: injective_explorer_rpc
// file: exchange/injective_explorer_rpc.proto

import * as jspb from "google-protobuf";

export class GetAccountRequest extends jspb.Message {
  getAddress(): string;
  setAddress(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAccountRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetAccountRequest): GetAccountRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAccountRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAccountRequest;
  static deserializeBinaryFromReader(message: GetAccountRequest, reader: jspb.BinaryReader): GetAccountRequest;
}

export namespace GetAccountRequest {
  export type AsObject = {
    address: string,
  }
}

export class GetAccountResponse extends jspb.Message {
  getAddress(): string;
  setAddress(value: string): void;

  getPublicKey(): Uint8Array | string;
  getPublicKey_asU8(): Uint8Array;
  getPublicKey_asB64(): string;
  setPublicKey(value: Uint8Array | string): void;

  getAccountNumber(): number;
  setAccountNumber(value: number): void;

  getSequence(): number;
  setSequence(value: number): void;

  getFlags(): number;
  setFlags(value: number): void;

  clearBalancesList(): void;
  getBalancesList(): Array<Balance>;
  setBalancesList(value: Array<Balance>): void;
  addBalances(value?: Balance, index?: number): Balance;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAccountResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetAccountResponse): GetAccountResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAccountResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAccountResponse;
  static deserializeBinaryFromReader(message: GetAccountResponse, reader: jspb.BinaryReader): GetAccountResponse;
}

export namespace GetAccountResponse {
  export type AsObject = {
    address: string,
    publicKey: Uint8Array | string,
    accountNumber: number,
    sequence: number,
    flags: number,
    balancesList: Array<Balance.AsObject>,
  }
}

export class Balance extends jspb.Message {
  getSymbol(): string;
  setSymbol(value: string): void;

  getFree(): string;
  setFree(value: string): void;

  getLocked(): string;
  setLocked(value: string): void;

  getFrozen(): string;
  setFrozen(value: string): void;

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
    symbol: string,
    free: string,
    locked: string,
    frozen: string,
  }
}

export class GetAccountTxsRequest extends jspb.Message {
  getAddress(): string;
  setAddress(value: string): void;

  getLimit(): number;
  setLimit(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAccountTxsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetAccountTxsRequest): GetAccountTxsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAccountTxsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAccountTxsRequest;
  static deserializeBinaryFromReader(message: GetAccountTxsRequest, reader: jspb.BinaryReader): GetAccountTxsRequest;
}

export namespace GetAccountTxsRequest {
  export type AsObject = {
    address: string,
    limit: number,
  }
}

export class GetAccountTxsResponse extends jspb.Message {
  clearFieldList(): void;
  getFieldList(): Array<TxData>;
  setFieldList(value: Array<TxData>): void;
  addField(value?: TxData, index?: number): TxData;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAccountTxsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetAccountTxsResponse): GetAccountTxsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAccountTxsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAccountTxsResponse;
  static deserializeBinaryFromReader(message: GetAccountTxsResponse, reader: jspb.BinaryReader): GetAccountTxsResponse;
}

export namespace GetAccountTxsResponse {
  export type AsObject = {
    fieldList: Array<TxData.AsObject>,
  }
}

export class TxData extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getBlockNumber(): number;
  setBlockNumber(value: number): void;

  getBlockTimestamp(): string;
  setBlockTimestamp(value: string): void;

  getHash(): string;
  setHash(value: string): void;

  getCode(): number;
  setCode(value: number): void;

  getData(): Uint8Array | string;
  getData_asU8(): Uint8Array;
  getData_asB64(): string;
  setData(value: Uint8Array | string): void;

  getInfo(): string;
  setInfo(value: string): void;

  getGasWanted(): number;
  setGasWanted(value: number): void;

  getGasUsed(): number;
  setGasUsed(value: number): void;

  getCodespace(): string;
  setCodespace(value: string): void;

  clearEventsList(): void;
  getEventsList(): Array<Event>;
  setEventsList(value: Array<Event>): void;
  addEvents(value?: Event, index?: number): Event;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TxData.AsObject;
  static toObject(includeInstance: boolean, msg: TxData): TxData.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TxData, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TxData;
  static deserializeBinaryFromReader(message: TxData, reader: jspb.BinaryReader): TxData;
}

export namespace TxData {
  export type AsObject = {
    id: string,
    blockNumber: number,
    blockTimestamp: string,
    hash: string,
    code: number,
    data: Uint8Array | string,
    info: string,
    gasWanted: number,
    gasUsed: number,
    codespace: string,
    eventsList: Array<Event.AsObject>,
  }
}

export class Event extends jspb.Message {
  getType(): string;
  setType(value: string): void;

  getAttributesMap(): jspb.Map<string, string>;
  clearAttributesMap(): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Event.AsObject;
  static toObject(includeInstance: boolean, msg: Event): Event.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Event, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Event;
  static deserializeBinaryFromReader(message: Event, reader: jspb.BinaryReader): Event;
}

export namespace Event {
  export type AsObject = {
    type: string,
    attributesMap: Array<[string, string]>,
  }
}

export class StreamTxsRequest extends jspb.Message {
  getBefore(): number;
  setBefore(value: number): void;

  getAfter(): number;
  setAfter(value: number): void;

  getLimit(): number;
  setLimit(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StreamTxsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: StreamTxsRequest): StreamTxsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StreamTxsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StreamTxsRequest;
  static deserializeBinaryFromReader(message: StreamTxsRequest, reader: jspb.BinaryReader): StreamTxsRequest;
}

export namespace StreamTxsRequest {
  export type AsObject = {
    before: number,
    after: number,
    limit: number,
  }
}

export class StreamTxsResponse extends jspb.Message {
  clearFieldList(): void;
  getFieldList(): Array<TxData>;
  setFieldList(value: Array<TxData>): void;
  addField(value?: TxData, index?: number): TxData;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StreamTxsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: StreamTxsResponse): StreamTxsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StreamTxsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StreamTxsResponse;
  static deserializeBinaryFromReader(message: StreamTxsResponse, reader: jspb.BinaryReader): StreamTxsResponse;
}

export namespace StreamTxsResponse {
  export type AsObject = {
    fieldList: Array<TxData.AsObject>,
  }
}

export class StreamBlocksRequest extends jspb.Message {
  getBefore(): number;
  setBefore(value: number): void;

  getAfter(): number;
  setAfter(value: number): void;

  getLimit(): number;
  setLimit(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StreamBlocksRequest.AsObject;
  static toObject(includeInstance: boolean, msg: StreamBlocksRequest): StreamBlocksRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StreamBlocksRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StreamBlocksRequest;
  static deserializeBinaryFromReader(message: StreamBlocksRequest, reader: jspb.BinaryReader): StreamBlocksRequest;
}

export namespace StreamBlocksRequest {
  export type AsObject = {
    before: number,
    after: number,
    limit: number,
  }
}

export class StreamBlocksResponse extends jspb.Message {
  clearFieldList(): void;
  getFieldList(): Array<BlockData>;
  setFieldList(value: Array<BlockData>): void;
  addField(value?: BlockData, index?: number): BlockData;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StreamBlocksResponse.AsObject;
  static toObject(includeInstance: boolean, msg: StreamBlocksResponse): StreamBlocksResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StreamBlocksResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StreamBlocksResponse;
  static deserializeBinaryFromReader(message: StreamBlocksResponse, reader: jspb.BinaryReader): StreamBlocksResponse;
}

export namespace StreamBlocksResponse {
  export type AsObject = {
    fieldList: Array<BlockData.AsObject>,
  }
}

export class BlockData extends jspb.Message {
  getHeight(): number;
  setHeight(value: number): void;

  getProposer(): string;
  setProposer(value: string): void;

  getMoniker(): string;
  setMoniker(value: string): void;

  getBlockHash(): string;
  setBlockHash(value: string): void;

  getParentHash(): string;
  setParentHash(value: string): void;

  getNumPreCommits(): number;
  setNumPreCommits(value: number): void;

  getNumTxs(): number;
  setNumTxs(value: number): void;

  getTotalTxs(): number;
  setTotalTxs(value: number): void;

  clearTxsList(): void;
  getTxsList(): Array<TxData>;
  setTxsList(value: Array<TxData>): void;
  addTxs(value?: TxData, index?: number): TxData;

  getTimestamp(): string;
  setTimestamp(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BlockData.AsObject;
  static toObject(includeInstance: boolean, msg: BlockData): BlockData.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BlockData, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BlockData;
  static deserializeBinaryFromReader(message: BlockData, reader: jspb.BinaryReader): BlockData;
}

export namespace BlockData {
  export type AsObject = {
    height: number,
    proposer: string,
    moniker: string,
    blockHash: string,
    parentHash: string,
    numPreCommits: number,
    numTxs: number,
    totalTxs: number,
    txsList: Array<TxData.AsObject>,
    timestamp: string,
  }
}

