// package: injective.peggy.v1
// file: injective/peggy/v1/types.proto

import * as jspb from "google-protobuf";
import * as cosmos_base_v1beta1_coin_pb from "../../../cosmos/base/v1beta1/coin_pb";
import * as gogoproto_gogo_pb from "../../../gogoproto/gogo_pb";

export class BridgeValidator extends jspb.Message {
  getPower(): number;
  setPower(value: number): void;

  getEthereumAddress(): string;
  setEthereumAddress(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BridgeValidator.AsObject;
  static toObject(includeInstance: boolean, msg: BridgeValidator): BridgeValidator.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BridgeValidator, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BridgeValidator;
  static deserializeBinaryFromReader(message: BridgeValidator, reader: jspb.BinaryReader): BridgeValidator;
}

export namespace BridgeValidator {
  export type AsObject = {
    power: number,
    ethereumAddress: string,
  }
}

export class Valset extends jspb.Message {
  getNonce(): number;
  setNonce(value: number): void;

  clearMembersList(): void;
  getMembersList(): Array<BridgeValidator>;
  setMembersList(value: Array<BridgeValidator>): void;
  addMembers(value?: BridgeValidator, index?: number): BridgeValidator;

  getHeight(): number;
  setHeight(value: number): void;

  getRewardAmount(): string;
  setRewardAmount(value: string): void;

  getRewardToken(): string;
  setRewardToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Valset.AsObject;
  static toObject(includeInstance: boolean, msg: Valset): Valset.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Valset, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Valset;
  static deserializeBinaryFromReader(message: Valset, reader: jspb.BinaryReader): Valset;
}

export namespace Valset {
  export type AsObject = {
    nonce: number,
    membersList: Array<BridgeValidator.AsObject>,
    height: number,
    rewardAmount: string,
    rewardToken: string,
  }
}

export class LastObservedEthereumBlockHeight extends jspb.Message {
  getCosmosBlockHeight(): number;
  setCosmosBlockHeight(value: number): void;

  getEthereumBlockHeight(): number;
  setEthereumBlockHeight(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LastObservedEthereumBlockHeight.AsObject;
  static toObject(includeInstance: boolean, msg: LastObservedEthereumBlockHeight): LastObservedEthereumBlockHeight.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LastObservedEthereumBlockHeight, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LastObservedEthereumBlockHeight;
  static deserializeBinaryFromReader(message: LastObservedEthereumBlockHeight, reader: jspb.BinaryReader): LastObservedEthereumBlockHeight;
}

export namespace LastObservedEthereumBlockHeight {
  export type AsObject = {
    cosmosBlockHeight: number,
    ethereumBlockHeight: number,
  }
}

export class LastClaimEvent extends jspb.Message {
  getEthereumEventNonce(): number;
  setEthereumEventNonce(value: number): void;

  getEthereumEventHeight(): number;
  setEthereumEventHeight(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LastClaimEvent.AsObject;
  static toObject(includeInstance: boolean, msg: LastClaimEvent): LastClaimEvent.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LastClaimEvent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LastClaimEvent;
  static deserializeBinaryFromReader(message: LastClaimEvent, reader: jspb.BinaryReader): LastClaimEvent;
}

export namespace LastClaimEvent {
  export type AsObject = {
    ethereumEventNonce: number,
    ethereumEventHeight: number,
  }
}

export class ERC20ToDenom extends jspb.Message {
  getErc20(): string;
  setErc20(value: string): void;

  getDenom(): string;
  setDenom(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ERC20ToDenom.AsObject;
  static toObject(includeInstance: boolean, msg: ERC20ToDenom): ERC20ToDenom.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ERC20ToDenom, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ERC20ToDenom;
  static deserializeBinaryFromReader(message: ERC20ToDenom, reader: jspb.BinaryReader): ERC20ToDenom;
}

export namespace ERC20ToDenom {
  export type AsObject = {
    erc20: string,
    denom: string,
  }
}

