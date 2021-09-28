// package: ibc.core.commitment.v1
// file: ibc/core/commitment/v1/commitment.proto

import * as jspb from "google-protobuf";
import * as gogoproto_gogo_pb from "../../../../gogoproto/gogo_pb";
import * as tendermint_crypto_proof_pb from "../../../../tendermint/crypto/proof_pb";

export class MerkleRoot extends jspb.Message {
  getHash(): Uint8Array | string;
  getHash_asU8(): Uint8Array;
  getHash_asB64(): string;
  setHash(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MerkleRoot.AsObject;
  static toObject(includeInstance: boolean, msg: MerkleRoot): MerkleRoot.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MerkleRoot, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MerkleRoot;
  static deserializeBinaryFromReader(message: MerkleRoot, reader: jspb.BinaryReader): MerkleRoot;
}

export namespace MerkleRoot {
  export type AsObject = {
    hash: Uint8Array | string,
  }
}

export class MerklePrefix extends jspb.Message {
  getKeyPrefix(): Uint8Array | string;
  getKeyPrefix_asU8(): Uint8Array;
  getKeyPrefix_asB64(): string;
  setKeyPrefix(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MerklePrefix.AsObject;
  static toObject(includeInstance: boolean, msg: MerklePrefix): MerklePrefix.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MerklePrefix, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MerklePrefix;
  static deserializeBinaryFromReader(message: MerklePrefix, reader: jspb.BinaryReader): MerklePrefix;
}

export namespace MerklePrefix {
  export type AsObject = {
    keyPrefix: Uint8Array | string,
  }
}

export class MerklePath extends jspb.Message {
  hasKeyPath(): boolean;
  clearKeyPath(): void;
  getKeyPath(): KeyPath | undefined;
  setKeyPath(value?: KeyPath): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MerklePath.AsObject;
  static toObject(includeInstance: boolean, msg: MerklePath): MerklePath.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MerklePath, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MerklePath;
  static deserializeBinaryFromReader(message: MerklePath, reader: jspb.BinaryReader): MerklePath;
}

export namespace MerklePath {
  export type AsObject = {
    keyPath?: KeyPath.AsObject,
  }
}

export class MerkleProof extends jspb.Message {
  hasProof(): boolean;
  clearProof(): void;
  getProof(): tendermint_crypto_proof_pb.ProofOps | undefined;
  setProof(value?: tendermint_crypto_proof_pb.ProofOps): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MerkleProof.AsObject;
  static toObject(includeInstance: boolean, msg: MerkleProof): MerkleProof.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MerkleProof, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MerkleProof;
  static deserializeBinaryFromReader(message: MerkleProof, reader: jspb.BinaryReader): MerkleProof;
}

export namespace MerkleProof {
  export type AsObject = {
    proof?: tendermint_crypto_proof_pb.ProofOps.AsObject,
  }
}

export class KeyPath extends jspb.Message {
  clearKeysList(): void;
  getKeysList(): Array<Key>;
  setKeysList(value: Array<Key>): void;
  addKeys(value?: Key, index?: number): Key;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): KeyPath.AsObject;
  static toObject(includeInstance: boolean, msg: KeyPath): KeyPath.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: KeyPath, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): KeyPath;
  static deserializeBinaryFromReader(message: KeyPath, reader: jspb.BinaryReader): KeyPath;
}

export namespace KeyPath {
  export type AsObject = {
    keysList: Array<Key.AsObject>,
  }
}

export class Key extends jspb.Message {
  getName(): Uint8Array | string;
  getName_asU8(): Uint8Array;
  getName_asB64(): string;
  setName(value: Uint8Array | string): void;

  getEnc(): KeyEncodingMap[keyof KeyEncodingMap];
  setEnc(value: KeyEncodingMap[keyof KeyEncodingMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Key.AsObject;
  static toObject(includeInstance: boolean, msg: Key): Key.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Key, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Key;
  static deserializeBinaryFromReader(message: Key, reader: jspb.BinaryReader): Key;
}

export namespace Key {
  export type AsObject = {
    name: Uint8Array | string,
    enc: KeyEncodingMap[keyof KeyEncodingMap],
  }
}

export interface KeyEncodingMap {
  KEY_ENCODING_URL_UNSPECIFIED: 0;
  KEY_ENCODING_HEX: 1;
}

export const KeyEncoding: KeyEncodingMap;

