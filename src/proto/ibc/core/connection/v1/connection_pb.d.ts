// package: ibc.core.connection.v1
// file: ibc/core/connection/v1/connection.proto

import * as jspb from "google-protobuf";
import * as gogoproto_gogo_pb from "../../../../gogoproto/gogo_pb";
import * as google_protobuf_any_pb from "google-protobuf/google/protobuf/any_pb";
import * as ibc_core_commitment_v1_commitment_pb from "../../../../ibc/core/commitment/v1/commitment_pb";
import * as ibc_core_client_v1_client_pb from "../../../../ibc/core/client/v1/client_pb";

export class MsgConnectionOpenInit extends jspb.Message {
  getClientId(): string;
  setClientId(value: string): void;

  getConnectionId(): string;
  setConnectionId(value: string): void;

  hasCounterparty(): boolean;
  clearCounterparty(): void;
  getCounterparty(): Counterparty | undefined;
  setCounterparty(value?: Counterparty): void;

  getVersion(): string;
  setVersion(value: string): void;

  getSigner(): string;
  setSigner(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgConnectionOpenInit.AsObject;
  static toObject(includeInstance: boolean, msg: MsgConnectionOpenInit): MsgConnectionOpenInit.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MsgConnectionOpenInit, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgConnectionOpenInit;
  static deserializeBinaryFromReader(message: MsgConnectionOpenInit, reader: jspb.BinaryReader): MsgConnectionOpenInit;
}

export namespace MsgConnectionOpenInit {
  export type AsObject = {
    clientId: string,
    connectionId: string,
    counterparty?: Counterparty.AsObject,
    version: string,
    signer: string,
  }
}

export class MsgConnectionOpenTry extends jspb.Message {
  getClientId(): string;
  setClientId(value: string): void;

  getDesiredConnectionId(): string;
  setDesiredConnectionId(value: string): void;

  getCounterpartyChosenConnectionId(): string;
  setCounterpartyChosenConnectionId(value: string): void;

  hasClientState(): boolean;
  clearClientState(): void;
  getClientState(): google_protobuf_any_pb.Any | undefined;
  setClientState(value?: google_protobuf_any_pb.Any): void;

  hasCounterparty(): boolean;
  clearCounterparty(): void;
  getCounterparty(): Counterparty | undefined;
  setCounterparty(value?: Counterparty): void;

  clearCounterpartyVersionsList(): void;
  getCounterpartyVersionsList(): Array<string>;
  setCounterpartyVersionsList(value: Array<string>): void;
  addCounterpartyVersions(value: string, index?: number): string;

  hasProofHeight(): boolean;
  clearProofHeight(): void;
  getProofHeight(): ibc_core_client_v1_client_pb.Height | undefined;
  setProofHeight(value?: ibc_core_client_v1_client_pb.Height): void;

  getProofInit(): Uint8Array | string;
  getProofInit_asU8(): Uint8Array;
  getProofInit_asB64(): string;
  setProofInit(value: Uint8Array | string): void;

  getProofClient(): Uint8Array | string;
  getProofClient_asU8(): Uint8Array;
  getProofClient_asB64(): string;
  setProofClient(value: Uint8Array | string): void;

  getProofConsensus(): Uint8Array | string;
  getProofConsensus_asU8(): Uint8Array;
  getProofConsensus_asB64(): string;
  setProofConsensus(value: Uint8Array | string): void;

  hasConsensusHeight(): boolean;
  clearConsensusHeight(): void;
  getConsensusHeight(): ibc_core_client_v1_client_pb.Height | undefined;
  setConsensusHeight(value?: ibc_core_client_v1_client_pb.Height): void;

  getSigner(): string;
  setSigner(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgConnectionOpenTry.AsObject;
  static toObject(includeInstance: boolean, msg: MsgConnectionOpenTry): MsgConnectionOpenTry.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MsgConnectionOpenTry, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgConnectionOpenTry;
  static deserializeBinaryFromReader(message: MsgConnectionOpenTry, reader: jspb.BinaryReader): MsgConnectionOpenTry;
}

export namespace MsgConnectionOpenTry {
  export type AsObject = {
    clientId: string,
    desiredConnectionId: string,
    counterpartyChosenConnectionId: string,
    clientState?: google_protobuf_any_pb.Any.AsObject,
    counterparty?: Counterparty.AsObject,
    counterpartyVersionsList: Array<string>,
    proofHeight?: ibc_core_client_v1_client_pb.Height.AsObject,
    proofInit: Uint8Array | string,
    proofClient: Uint8Array | string,
    proofConsensus: Uint8Array | string,
    consensusHeight?: ibc_core_client_v1_client_pb.Height.AsObject,
    signer: string,
  }
}

export class MsgConnectionOpenAck extends jspb.Message {
  getConnectionId(): string;
  setConnectionId(value: string): void;

  getCounterpartyConnectionId(): string;
  setCounterpartyConnectionId(value: string): void;

  getVersion(): string;
  setVersion(value: string): void;

  hasClientState(): boolean;
  clearClientState(): void;
  getClientState(): google_protobuf_any_pb.Any | undefined;
  setClientState(value?: google_protobuf_any_pb.Any): void;

  hasProofHeight(): boolean;
  clearProofHeight(): void;
  getProofHeight(): ibc_core_client_v1_client_pb.Height | undefined;
  setProofHeight(value?: ibc_core_client_v1_client_pb.Height): void;

  getProofTry(): Uint8Array | string;
  getProofTry_asU8(): Uint8Array;
  getProofTry_asB64(): string;
  setProofTry(value: Uint8Array | string): void;

  getProofClient(): Uint8Array | string;
  getProofClient_asU8(): Uint8Array;
  getProofClient_asB64(): string;
  setProofClient(value: Uint8Array | string): void;

  getProofConsensus(): Uint8Array | string;
  getProofConsensus_asU8(): Uint8Array;
  getProofConsensus_asB64(): string;
  setProofConsensus(value: Uint8Array | string): void;

  hasConsensusHeight(): boolean;
  clearConsensusHeight(): void;
  getConsensusHeight(): ibc_core_client_v1_client_pb.Height | undefined;
  setConsensusHeight(value?: ibc_core_client_v1_client_pb.Height): void;

  getSigner(): string;
  setSigner(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgConnectionOpenAck.AsObject;
  static toObject(includeInstance: boolean, msg: MsgConnectionOpenAck): MsgConnectionOpenAck.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MsgConnectionOpenAck, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgConnectionOpenAck;
  static deserializeBinaryFromReader(message: MsgConnectionOpenAck, reader: jspb.BinaryReader): MsgConnectionOpenAck;
}

export namespace MsgConnectionOpenAck {
  export type AsObject = {
    connectionId: string,
    counterpartyConnectionId: string,
    version: string,
    clientState?: google_protobuf_any_pb.Any.AsObject,
    proofHeight?: ibc_core_client_v1_client_pb.Height.AsObject,
    proofTry: Uint8Array | string,
    proofClient: Uint8Array | string,
    proofConsensus: Uint8Array | string,
    consensusHeight?: ibc_core_client_v1_client_pb.Height.AsObject,
    signer: string,
  }
}

export class MsgConnectionOpenConfirm extends jspb.Message {
  getConnectionId(): string;
  setConnectionId(value: string): void;

  getProofAck(): Uint8Array | string;
  getProofAck_asU8(): Uint8Array;
  getProofAck_asB64(): string;
  setProofAck(value: Uint8Array | string): void;

  hasProofHeight(): boolean;
  clearProofHeight(): void;
  getProofHeight(): ibc_core_client_v1_client_pb.Height | undefined;
  setProofHeight(value?: ibc_core_client_v1_client_pb.Height): void;

  getSigner(): string;
  setSigner(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgConnectionOpenConfirm.AsObject;
  static toObject(includeInstance: boolean, msg: MsgConnectionOpenConfirm): MsgConnectionOpenConfirm.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MsgConnectionOpenConfirm, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgConnectionOpenConfirm;
  static deserializeBinaryFromReader(message: MsgConnectionOpenConfirm, reader: jspb.BinaryReader): MsgConnectionOpenConfirm;
}

export namespace MsgConnectionOpenConfirm {
  export type AsObject = {
    connectionId: string,
    proofAck: Uint8Array | string,
    proofHeight?: ibc_core_client_v1_client_pb.Height.AsObject,
    signer: string,
  }
}

export class ConnectionEnd extends jspb.Message {
  getClientId(): string;
  setClientId(value: string): void;

  clearVersionsList(): void;
  getVersionsList(): Array<string>;
  setVersionsList(value: Array<string>): void;
  addVersions(value: string, index?: number): string;

  getState(): StateMap[keyof StateMap];
  setState(value: StateMap[keyof StateMap]): void;

  hasCounterparty(): boolean;
  clearCounterparty(): void;
  getCounterparty(): Counterparty | undefined;
  setCounterparty(value?: Counterparty): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConnectionEnd.AsObject;
  static toObject(includeInstance: boolean, msg: ConnectionEnd): ConnectionEnd.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ConnectionEnd, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConnectionEnd;
  static deserializeBinaryFromReader(message: ConnectionEnd, reader: jspb.BinaryReader): ConnectionEnd;
}

export namespace ConnectionEnd {
  export type AsObject = {
    clientId: string,
    versionsList: Array<string>,
    state: StateMap[keyof StateMap],
    counterparty?: Counterparty.AsObject,
  }
}

export class IdentifiedConnection extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getClientId(): string;
  setClientId(value: string): void;

  clearVersionsList(): void;
  getVersionsList(): Array<string>;
  setVersionsList(value: Array<string>): void;
  addVersions(value: string, index?: number): string;

  getState(): StateMap[keyof StateMap];
  setState(value: StateMap[keyof StateMap]): void;

  hasCounterparty(): boolean;
  clearCounterparty(): void;
  getCounterparty(): Counterparty | undefined;
  setCounterparty(value?: Counterparty): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IdentifiedConnection.AsObject;
  static toObject(includeInstance: boolean, msg: IdentifiedConnection): IdentifiedConnection.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: IdentifiedConnection, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IdentifiedConnection;
  static deserializeBinaryFromReader(message: IdentifiedConnection, reader: jspb.BinaryReader): IdentifiedConnection;
}

export namespace IdentifiedConnection {
  export type AsObject = {
    id: string,
    clientId: string,
    versionsList: Array<string>,
    state: StateMap[keyof StateMap],
    counterparty?: Counterparty.AsObject,
  }
}

export class Counterparty extends jspb.Message {
  getClientId(): string;
  setClientId(value: string): void;

  getConnectionId(): string;
  setConnectionId(value: string): void;

  hasPrefix(): boolean;
  clearPrefix(): void;
  getPrefix(): ibc_core_commitment_v1_commitment_pb.MerklePrefix | undefined;
  setPrefix(value?: ibc_core_commitment_v1_commitment_pb.MerklePrefix): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Counterparty.AsObject;
  static toObject(includeInstance: boolean, msg: Counterparty): Counterparty.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Counterparty, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Counterparty;
  static deserializeBinaryFromReader(message: Counterparty, reader: jspb.BinaryReader): Counterparty;
}

export namespace Counterparty {
  export type AsObject = {
    clientId: string,
    connectionId: string,
    prefix?: ibc_core_commitment_v1_commitment_pb.MerklePrefix.AsObject,
  }
}

export class ClientPaths extends jspb.Message {
  clearPathsList(): void;
  getPathsList(): Array<string>;
  setPathsList(value: Array<string>): void;
  addPaths(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ClientPaths.AsObject;
  static toObject(includeInstance: boolean, msg: ClientPaths): ClientPaths.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ClientPaths, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ClientPaths;
  static deserializeBinaryFromReader(message: ClientPaths, reader: jspb.BinaryReader): ClientPaths;
}

export namespace ClientPaths {
  export type AsObject = {
    pathsList: Array<string>,
  }
}

export class ConnectionPaths extends jspb.Message {
  getClientId(): string;
  setClientId(value: string): void;

  clearPathsList(): void;
  getPathsList(): Array<string>;
  setPathsList(value: Array<string>): void;
  addPaths(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConnectionPaths.AsObject;
  static toObject(includeInstance: boolean, msg: ConnectionPaths): ConnectionPaths.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ConnectionPaths, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConnectionPaths;
  static deserializeBinaryFromReader(message: ConnectionPaths, reader: jspb.BinaryReader): ConnectionPaths;
}

export namespace ConnectionPaths {
  export type AsObject = {
    clientId: string,
    pathsList: Array<string>,
  }
}

export class Version extends jspb.Message {
  getIdentifier(): string;
  setIdentifier(value: string): void;

  clearFeaturesList(): void;
  getFeaturesList(): Array<string>;
  setFeaturesList(value: Array<string>): void;
  addFeatures(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Version.AsObject;
  static toObject(includeInstance: boolean, msg: Version): Version.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Version, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Version;
  static deserializeBinaryFromReader(message: Version, reader: jspb.BinaryReader): Version;
}

export namespace Version {
  export type AsObject = {
    identifier: string,
    featuresList: Array<string>,
  }
}

export interface StateMap {
  STATE_UNINITIALIZED_UNSPECIFIED: 0;
  STATE_INIT: 1;
  STATE_TRYOPEN: 2;
  STATE_OPEN: 3;
}

export const State: StateMap;

