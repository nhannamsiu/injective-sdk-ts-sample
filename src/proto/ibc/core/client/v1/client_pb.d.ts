// package: ibc.core.client.v1
// file: ibc/core/client/v1/client.proto

import * as jspb from "google-protobuf";
import * as gogoproto_gogo_pb from "../../../../gogoproto/gogo_pb";
import * as google_protobuf_any_pb from "google-protobuf/google/protobuf/any_pb";

export class IdentifiedClientState extends jspb.Message {
  getClientId(): string;
  setClientId(value: string): void;

  hasClientState(): boolean;
  clearClientState(): void;
  getClientState(): google_protobuf_any_pb.Any | undefined;
  setClientState(value?: google_protobuf_any_pb.Any): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IdentifiedClientState.AsObject;
  static toObject(includeInstance: boolean, msg: IdentifiedClientState): IdentifiedClientState.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: IdentifiedClientState, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IdentifiedClientState;
  static deserializeBinaryFromReader(message: IdentifiedClientState, reader: jspb.BinaryReader): IdentifiedClientState;
}

export namespace IdentifiedClientState {
  export type AsObject = {
    clientId: string,
    clientState?: google_protobuf_any_pb.Any.AsObject,
  }
}

export class ConsensusStateWithHeight extends jspb.Message {
  hasHeight(): boolean;
  clearHeight(): void;
  getHeight(): Height | undefined;
  setHeight(value?: Height): void;

  hasConsensusState(): boolean;
  clearConsensusState(): void;
  getConsensusState(): google_protobuf_any_pb.Any | undefined;
  setConsensusState(value?: google_protobuf_any_pb.Any): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConsensusStateWithHeight.AsObject;
  static toObject(includeInstance: boolean, msg: ConsensusStateWithHeight): ConsensusStateWithHeight.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ConsensusStateWithHeight, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConsensusStateWithHeight;
  static deserializeBinaryFromReader(message: ConsensusStateWithHeight, reader: jspb.BinaryReader): ConsensusStateWithHeight;
}

export namespace ConsensusStateWithHeight {
  export type AsObject = {
    height?: Height.AsObject,
    consensusState?: google_protobuf_any_pb.Any.AsObject,
  }
}

export class ClientConsensusStates extends jspb.Message {
  getClientId(): string;
  setClientId(value: string): void;

  clearConsensusStatesList(): void;
  getConsensusStatesList(): Array<ConsensusStateWithHeight>;
  setConsensusStatesList(value: Array<ConsensusStateWithHeight>): void;
  addConsensusStates(value?: ConsensusStateWithHeight, index?: number): ConsensusStateWithHeight;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ClientConsensusStates.AsObject;
  static toObject(includeInstance: boolean, msg: ClientConsensusStates): ClientConsensusStates.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ClientConsensusStates, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ClientConsensusStates;
  static deserializeBinaryFromReader(message: ClientConsensusStates, reader: jspb.BinaryReader): ClientConsensusStates;
}

export namespace ClientConsensusStates {
  export type AsObject = {
    clientId: string,
    consensusStatesList: Array<ConsensusStateWithHeight.AsObject>,
  }
}

export class ClientUpdateProposal extends jspb.Message {
  getTitle(): string;
  setTitle(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  getClientId(): string;
  setClientId(value: string): void;

  hasHeader(): boolean;
  clearHeader(): void;
  getHeader(): google_protobuf_any_pb.Any | undefined;
  setHeader(value?: google_protobuf_any_pb.Any): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ClientUpdateProposal.AsObject;
  static toObject(includeInstance: boolean, msg: ClientUpdateProposal): ClientUpdateProposal.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ClientUpdateProposal, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ClientUpdateProposal;
  static deserializeBinaryFromReader(message: ClientUpdateProposal, reader: jspb.BinaryReader): ClientUpdateProposal;
}

export namespace ClientUpdateProposal {
  export type AsObject = {
    title: string,
    description: string,
    clientId: string,
    header?: google_protobuf_any_pb.Any.AsObject,
  }
}

export class MsgCreateClient extends jspb.Message {
  getClientId(): string;
  setClientId(value: string): void;

  hasClientState(): boolean;
  clearClientState(): void;
  getClientState(): google_protobuf_any_pb.Any | undefined;
  setClientState(value?: google_protobuf_any_pb.Any): void;

  hasConsensusState(): boolean;
  clearConsensusState(): void;
  getConsensusState(): google_protobuf_any_pb.Any | undefined;
  setConsensusState(value?: google_protobuf_any_pb.Any): void;

  getSigner(): string;
  setSigner(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgCreateClient.AsObject;
  static toObject(includeInstance: boolean, msg: MsgCreateClient): MsgCreateClient.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MsgCreateClient, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgCreateClient;
  static deserializeBinaryFromReader(message: MsgCreateClient, reader: jspb.BinaryReader): MsgCreateClient;
}

export namespace MsgCreateClient {
  export type AsObject = {
    clientId: string,
    clientState?: google_protobuf_any_pb.Any.AsObject,
    consensusState?: google_protobuf_any_pb.Any.AsObject,
    signer: string,
  }
}

export class MsgUpdateClient extends jspb.Message {
  getClientId(): string;
  setClientId(value: string): void;

  hasHeader(): boolean;
  clearHeader(): void;
  getHeader(): google_protobuf_any_pb.Any | undefined;
  setHeader(value?: google_protobuf_any_pb.Any): void;

  getSigner(): string;
  setSigner(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgUpdateClient.AsObject;
  static toObject(includeInstance: boolean, msg: MsgUpdateClient): MsgUpdateClient.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MsgUpdateClient, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgUpdateClient;
  static deserializeBinaryFromReader(message: MsgUpdateClient, reader: jspb.BinaryReader): MsgUpdateClient;
}

export namespace MsgUpdateClient {
  export type AsObject = {
    clientId: string,
    header?: google_protobuf_any_pb.Any.AsObject,
    signer: string,
  }
}

export class MsgUpgradeClient extends jspb.Message {
  getClientId(): string;
  setClientId(value: string): void;

  hasClientState(): boolean;
  clearClientState(): void;
  getClientState(): google_protobuf_any_pb.Any | undefined;
  setClientState(value?: google_protobuf_any_pb.Any): void;

  hasUpgradeHeight(): boolean;
  clearUpgradeHeight(): void;
  getUpgradeHeight(): Height | undefined;
  setUpgradeHeight(value?: Height): void;

  getProofUpgrade(): Uint8Array | string;
  getProofUpgrade_asU8(): Uint8Array;
  getProofUpgrade_asB64(): string;
  setProofUpgrade(value: Uint8Array | string): void;

  getSigner(): string;
  setSigner(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgUpgradeClient.AsObject;
  static toObject(includeInstance: boolean, msg: MsgUpgradeClient): MsgUpgradeClient.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MsgUpgradeClient, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgUpgradeClient;
  static deserializeBinaryFromReader(message: MsgUpgradeClient, reader: jspb.BinaryReader): MsgUpgradeClient;
}

export namespace MsgUpgradeClient {
  export type AsObject = {
    clientId: string,
    clientState?: google_protobuf_any_pb.Any.AsObject,
    upgradeHeight?: Height.AsObject,
    proofUpgrade: Uint8Array | string,
    signer: string,
  }
}

export class MsgSubmitMisbehaviour extends jspb.Message {
  getClientId(): string;
  setClientId(value: string): void;

  hasMisbehaviour(): boolean;
  clearMisbehaviour(): void;
  getMisbehaviour(): google_protobuf_any_pb.Any | undefined;
  setMisbehaviour(value?: google_protobuf_any_pb.Any): void;

  getSigner(): string;
  setSigner(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgSubmitMisbehaviour.AsObject;
  static toObject(includeInstance: boolean, msg: MsgSubmitMisbehaviour): MsgSubmitMisbehaviour.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MsgSubmitMisbehaviour, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgSubmitMisbehaviour;
  static deserializeBinaryFromReader(message: MsgSubmitMisbehaviour, reader: jspb.BinaryReader): MsgSubmitMisbehaviour;
}

export namespace MsgSubmitMisbehaviour {
  export type AsObject = {
    clientId: string,
    misbehaviour?: google_protobuf_any_pb.Any.AsObject,
    signer: string,
  }
}

export class Height extends jspb.Message {
  getVersionNumber(): number;
  setVersionNumber(value: number): void;

  getVersionHeight(): number;
  setVersionHeight(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Height.AsObject;
  static toObject(includeInstance: boolean, msg: Height): Height.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Height, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Height;
  static deserializeBinaryFromReader(message: Height, reader: jspb.BinaryReader): Height;
}

export namespace Height {
  export type AsObject = {
    versionNumber: number,
    versionHeight: number,
  }
}

