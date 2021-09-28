// package: injective_accounts_rpc
// file: exchange/injective_accounts_rpc.proto

import * as jspb from "google-protobuf";

export class SubaccountsListRequest extends jspb.Message {
  getAccountAddress(): string;
  setAccountAddress(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SubaccountsListRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SubaccountsListRequest): SubaccountsListRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SubaccountsListRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SubaccountsListRequest;
  static deserializeBinaryFromReader(message: SubaccountsListRequest, reader: jspb.BinaryReader): SubaccountsListRequest;
}

export namespace SubaccountsListRequest {
  export type AsObject = {
    accountAddress: string,
  }
}

export class SubaccountsListResponse extends jspb.Message {
  clearSubaccountsList(): void;
  getSubaccountsList(): Array<string>;
  setSubaccountsList(value: Array<string>): void;
  addSubaccounts(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SubaccountsListResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SubaccountsListResponse): SubaccountsListResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SubaccountsListResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SubaccountsListResponse;
  static deserializeBinaryFromReader(message: SubaccountsListResponse, reader: jspb.BinaryReader): SubaccountsListResponse;
}

export namespace SubaccountsListResponse {
  export type AsObject = {
    subaccountsList: Array<string>,
  }
}

export class SubaccountBalancesListRequest extends jspb.Message {
  getSubaccountId(): string;
  setSubaccountId(value: string): void;

  clearDenomsList(): void;
  getDenomsList(): Array<string>;
  setDenomsList(value: Array<string>): void;
  addDenoms(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SubaccountBalancesListRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SubaccountBalancesListRequest): SubaccountBalancesListRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SubaccountBalancesListRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SubaccountBalancesListRequest;
  static deserializeBinaryFromReader(message: SubaccountBalancesListRequest, reader: jspb.BinaryReader): SubaccountBalancesListRequest;
}

export namespace SubaccountBalancesListRequest {
  export type AsObject = {
    subaccountId: string,
    denomsList: Array<string>,
  }
}

export class SubaccountBalancesListResponse extends jspb.Message {
  clearBalancesList(): void;
  getBalancesList(): Array<SubaccountBalance>;
  setBalancesList(value: Array<SubaccountBalance>): void;
  addBalances(value?: SubaccountBalance, index?: number): SubaccountBalance;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SubaccountBalancesListResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SubaccountBalancesListResponse): SubaccountBalancesListResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SubaccountBalancesListResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SubaccountBalancesListResponse;
  static deserializeBinaryFromReader(message: SubaccountBalancesListResponse, reader: jspb.BinaryReader): SubaccountBalancesListResponse;
}

export namespace SubaccountBalancesListResponse {
  export type AsObject = {
    balancesList: Array<SubaccountBalance.AsObject>,
  }
}

export class SubaccountBalance extends jspb.Message {
  getSubaccountId(): string;
  setSubaccountId(value: string): void;

  getAccountAddress(): string;
  setAccountAddress(value: string): void;

  getDenom(): string;
  setDenom(value: string): void;

  hasDeposit(): boolean;
  clearDeposit(): void;
  getDeposit(): SubaccountDeposit | undefined;
  setDeposit(value?: SubaccountDeposit): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SubaccountBalance.AsObject;
  static toObject(includeInstance: boolean, msg: SubaccountBalance): SubaccountBalance.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SubaccountBalance, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SubaccountBalance;
  static deserializeBinaryFromReader(message: SubaccountBalance, reader: jspb.BinaryReader): SubaccountBalance;
}

export namespace SubaccountBalance {
  export type AsObject = {
    subaccountId: string,
    accountAddress: string,
    denom: string,
    deposit?: SubaccountDeposit.AsObject,
  }
}

export class SubaccountDeposit extends jspb.Message {
  getTotalBalance(): string;
  setTotalBalance(value: string): void;

  getAvailableBalance(): string;
  setAvailableBalance(value: string): void;

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
    totalBalance: string,
    availableBalance: string,
  }
}

export class SubaccountBalanceRequest extends jspb.Message {
  getSubaccountId(): string;
  setSubaccountId(value: string): void;

  getDenom(): string;
  setDenom(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SubaccountBalanceRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SubaccountBalanceRequest): SubaccountBalanceRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SubaccountBalanceRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SubaccountBalanceRequest;
  static deserializeBinaryFromReader(message: SubaccountBalanceRequest, reader: jspb.BinaryReader): SubaccountBalanceRequest;
}

export namespace SubaccountBalanceRequest {
  export type AsObject = {
    subaccountId: string,
    denom: string,
  }
}

export class SubaccountBalanceResponse extends jspb.Message {
  hasBalance(): boolean;
  clearBalance(): void;
  getBalance(): SubaccountBalance | undefined;
  setBalance(value?: SubaccountBalance): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SubaccountBalanceResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SubaccountBalanceResponse): SubaccountBalanceResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SubaccountBalanceResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SubaccountBalanceResponse;
  static deserializeBinaryFromReader(message: SubaccountBalanceResponse, reader: jspb.BinaryReader): SubaccountBalanceResponse;
}

export namespace SubaccountBalanceResponse {
  export type AsObject = {
    balance?: SubaccountBalance.AsObject,
  }
}

export class StreamSubaccountBalanceRequest extends jspb.Message {
  getSubaccountId(): string;
  setSubaccountId(value: string): void;

  clearDenomsList(): void;
  getDenomsList(): Array<string>;
  setDenomsList(value: Array<string>): void;
  addDenoms(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StreamSubaccountBalanceRequest.AsObject;
  static toObject(includeInstance: boolean, msg: StreamSubaccountBalanceRequest): StreamSubaccountBalanceRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StreamSubaccountBalanceRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StreamSubaccountBalanceRequest;
  static deserializeBinaryFromReader(message: StreamSubaccountBalanceRequest, reader: jspb.BinaryReader): StreamSubaccountBalanceRequest;
}

export namespace StreamSubaccountBalanceRequest {
  export type AsObject = {
    subaccountId: string,
    denomsList: Array<string>,
  }
}

export class StreamSubaccountBalanceResponse extends jspb.Message {
  hasBalance(): boolean;
  clearBalance(): void;
  getBalance(): SubaccountBalance | undefined;
  setBalance(value?: SubaccountBalance): void;

  getTimestamp(): number;
  setTimestamp(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StreamSubaccountBalanceResponse.AsObject;
  static toObject(includeInstance: boolean, msg: StreamSubaccountBalanceResponse): StreamSubaccountBalanceResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StreamSubaccountBalanceResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StreamSubaccountBalanceResponse;
  static deserializeBinaryFromReader(message: StreamSubaccountBalanceResponse, reader: jspb.BinaryReader): StreamSubaccountBalanceResponse;
}

export namespace StreamSubaccountBalanceResponse {
  export type AsObject = {
    balance?: SubaccountBalance.AsObject,
    timestamp: number,
  }
}

export class SubaccountHistoryRequest extends jspb.Message {
  getSubaccountId(): string;
  setSubaccountId(value: string): void;

  getDenom(): string;
  setDenom(value: string): void;

  clearTransferTypesList(): void;
  getTransferTypesList(): Array<string>;
  setTransferTypesList(value: Array<string>): void;
  addTransferTypes(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SubaccountHistoryRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SubaccountHistoryRequest): SubaccountHistoryRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SubaccountHistoryRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SubaccountHistoryRequest;
  static deserializeBinaryFromReader(message: SubaccountHistoryRequest, reader: jspb.BinaryReader): SubaccountHistoryRequest;
}

export namespace SubaccountHistoryRequest {
  export type AsObject = {
    subaccountId: string,
    denom: string,
    transferTypesList: Array<string>,
  }
}

export class SubaccountHistoryResponse extends jspb.Message {
  clearTransfersList(): void;
  getTransfersList(): Array<SubaccountBalanceTransfer>;
  setTransfersList(value: Array<SubaccountBalanceTransfer>): void;
  addTransfers(value?: SubaccountBalanceTransfer, index?: number): SubaccountBalanceTransfer;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SubaccountHistoryResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SubaccountHistoryResponse): SubaccountHistoryResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SubaccountHistoryResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SubaccountHistoryResponse;
  static deserializeBinaryFromReader(message: SubaccountHistoryResponse, reader: jspb.BinaryReader): SubaccountHistoryResponse;
}

export namespace SubaccountHistoryResponse {
  export type AsObject = {
    transfersList: Array<SubaccountBalanceTransfer.AsObject>,
  }
}

export class SubaccountBalanceTransfer extends jspb.Message {
  getTransferType(): string;
  setTransferType(value: string): void;

  getSrcSubaccountId(): string;
  setSrcSubaccountId(value: string): void;

  getSrcAccountAddress(): string;
  setSrcAccountAddress(value: string): void;

  getDstSubaccountId(): string;
  setDstSubaccountId(value: string): void;

  getDstAccountAddress(): string;
  setDstAccountAddress(value: string): void;

  hasAmount(): boolean;
  clearAmount(): void;
  getAmount(): CosmosCoin | undefined;
  setAmount(value?: CosmosCoin): void;

  getExecutedAt(): number;
  setExecutedAt(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SubaccountBalanceTransfer.AsObject;
  static toObject(includeInstance: boolean, msg: SubaccountBalanceTransfer): SubaccountBalanceTransfer.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SubaccountBalanceTransfer, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SubaccountBalanceTransfer;
  static deserializeBinaryFromReader(message: SubaccountBalanceTransfer, reader: jspb.BinaryReader): SubaccountBalanceTransfer;
}

export namespace SubaccountBalanceTransfer {
  export type AsObject = {
    transferType: string,
    srcSubaccountId: string,
    srcAccountAddress: string,
    dstSubaccountId: string,
    dstAccountAddress: string,
    amount?: CosmosCoin.AsObject,
    executedAt: number,
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

export class SubaccountOrderSummaryRequest extends jspb.Message {
  getSubaccountId(): string;
  setSubaccountId(value: string): void;

  getMarketId(): string;
  setMarketId(value: string): void;

  getOrderDirection(): string;
  setOrderDirection(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SubaccountOrderSummaryRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SubaccountOrderSummaryRequest): SubaccountOrderSummaryRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SubaccountOrderSummaryRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SubaccountOrderSummaryRequest;
  static deserializeBinaryFromReader(message: SubaccountOrderSummaryRequest, reader: jspb.BinaryReader): SubaccountOrderSummaryRequest;
}

export namespace SubaccountOrderSummaryRequest {
  export type AsObject = {
    subaccountId: string,
    marketId: string,
    orderDirection: string,
  }
}

export class SubaccountOrderSummaryResponse extends jspb.Message {
  getSpotOrdersTotal(): number;
  setSpotOrdersTotal(value: number): void;

  getDerivativeOrdersTotal(): number;
  setDerivativeOrdersTotal(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SubaccountOrderSummaryResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SubaccountOrderSummaryResponse): SubaccountOrderSummaryResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SubaccountOrderSummaryResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SubaccountOrderSummaryResponse;
  static deserializeBinaryFromReader(message: SubaccountOrderSummaryResponse, reader: jspb.BinaryReader): SubaccountOrderSummaryResponse;
}

export namespace SubaccountOrderSummaryResponse {
  export type AsObject = {
    spotOrdersTotal: number,
    derivativeOrdersTotal: number,
  }
}

