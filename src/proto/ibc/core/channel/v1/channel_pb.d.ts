// package: ibc.core.channel.v1
// file: ibc/core/channel/v1/channel.proto

import * as jspb from "google-protobuf";
import * as gogoproto_gogo_pb from "../../../../gogoproto/gogo_pb";
import * as ibc_core_client_v1_client_pb from "../../../../ibc/core/client/v1/client_pb";

export class MsgChannelOpenInit extends jspb.Message {
  getPortId(): string;
  setPortId(value: string): void;

  getChannelId(): string;
  setChannelId(value: string): void;

  hasChannel(): boolean;
  clearChannel(): void;
  getChannel(): Channel | undefined;
  setChannel(value?: Channel): void;

  getSigner(): string;
  setSigner(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgChannelOpenInit.AsObject;
  static toObject(includeInstance: boolean, msg: MsgChannelOpenInit): MsgChannelOpenInit.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MsgChannelOpenInit, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgChannelOpenInit;
  static deserializeBinaryFromReader(message: MsgChannelOpenInit, reader: jspb.BinaryReader): MsgChannelOpenInit;
}

export namespace MsgChannelOpenInit {
  export type AsObject = {
    portId: string,
    channelId: string,
    channel?: Channel.AsObject,
    signer: string,
  }
}

export class MsgChannelOpenTry extends jspb.Message {
  getPortId(): string;
  setPortId(value: string): void;

  getDesiredChannelId(): string;
  setDesiredChannelId(value: string): void;

  getCounterpartyChosenChannelId(): string;
  setCounterpartyChosenChannelId(value: string): void;

  hasChannel(): boolean;
  clearChannel(): void;
  getChannel(): Channel | undefined;
  setChannel(value?: Channel): void;

  getCounterpartyVersion(): string;
  setCounterpartyVersion(value: string): void;

  getProofInit(): Uint8Array | string;
  getProofInit_asU8(): Uint8Array;
  getProofInit_asB64(): string;
  setProofInit(value: Uint8Array | string): void;

  hasProofHeight(): boolean;
  clearProofHeight(): void;
  getProofHeight(): ibc_core_client_v1_client_pb.Height | undefined;
  setProofHeight(value?: ibc_core_client_v1_client_pb.Height): void;

  getSigner(): string;
  setSigner(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgChannelOpenTry.AsObject;
  static toObject(includeInstance: boolean, msg: MsgChannelOpenTry): MsgChannelOpenTry.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MsgChannelOpenTry, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgChannelOpenTry;
  static deserializeBinaryFromReader(message: MsgChannelOpenTry, reader: jspb.BinaryReader): MsgChannelOpenTry;
}

export namespace MsgChannelOpenTry {
  export type AsObject = {
    portId: string,
    desiredChannelId: string,
    counterpartyChosenChannelId: string,
    channel?: Channel.AsObject,
    counterpartyVersion: string,
    proofInit: Uint8Array | string,
    proofHeight?: ibc_core_client_v1_client_pb.Height.AsObject,
    signer: string,
  }
}

export class MsgChannelOpenAck extends jspb.Message {
  getPortId(): string;
  setPortId(value: string): void;

  getChannelId(): string;
  setChannelId(value: string): void;

  getCounterpartyChannelId(): string;
  setCounterpartyChannelId(value: string): void;

  getCounterpartyVersion(): string;
  setCounterpartyVersion(value: string): void;

  getProofTry(): Uint8Array | string;
  getProofTry_asU8(): Uint8Array;
  getProofTry_asB64(): string;
  setProofTry(value: Uint8Array | string): void;

  hasProofHeight(): boolean;
  clearProofHeight(): void;
  getProofHeight(): ibc_core_client_v1_client_pb.Height | undefined;
  setProofHeight(value?: ibc_core_client_v1_client_pb.Height): void;

  getSigner(): string;
  setSigner(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgChannelOpenAck.AsObject;
  static toObject(includeInstance: boolean, msg: MsgChannelOpenAck): MsgChannelOpenAck.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MsgChannelOpenAck, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgChannelOpenAck;
  static deserializeBinaryFromReader(message: MsgChannelOpenAck, reader: jspb.BinaryReader): MsgChannelOpenAck;
}

export namespace MsgChannelOpenAck {
  export type AsObject = {
    portId: string,
    channelId: string,
    counterpartyChannelId: string,
    counterpartyVersion: string,
    proofTry: Uint8Array | string,
    proofHeight?: ibc_core_client_v1_client_pb.Height.AsObject,
    signer: string,
  }
}

export class MsgChannelOpenConfirm extends jspb.Message {
  getPortId(): string;
  setPortId(value: string): void;

  getChannelId(): string;
  setChannelId(value: string): void;

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
  toObject(includeInstance?: boolean): MsgChannelOpenConfirm.AsObject;
  static toObject(includeInstance: boolean, msg: MsgChannelOpenConfirm): MsgChannelOpenConfirm.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MsgChannelOpenConfirm, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgChannelOpenConfirm;
  static deserializeBinaryFromReader(message: MsgChannelOpenConfirm, reader: jspb.BinaryReader): MsgChannelOpenConfirm;
}

export namespace MsgChannelOpenConfirm {
  export type AsObject = {
    portId: string,
    channelId: string,
    proofAck: Uint8Array | string,
    proofHeight?: ibc_core_client_v1_client_pb.Height.AsObject,
    signer: string,
  }
}

export class MsgChannelCloseInit extends jspb.Message {
  getPortId(): string;
  setPortId(value: string): void;

  getChannelId(): string;
  setChannelId(value: string): void;

  getSigner(): string;
  setSigner(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgChannelCloseInit.AsObject;
  static toObject(includeInstance: boolean, msg: MsgChannelCloseInit): MsgChannelCloseInit.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MsgChannelCloseInit, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgChannelCloseInit;
  static deserializeBinaryFromReader(message: MsgChannelCloseInit, reader: jspb.BinaryReader): MsgChannelCloseInit;
}

export namespace MsgChannelCloseInit {
  export type AsObject = {
    portId: string,
    channelId: string,
    signer: string,
  }
}

export class MsgChannelCloseConfirm extends jspb.Message {
  getPortId(): string;
  setPortId(value: string): void;

  getChannelId(): string;
  setChannelId(value: string): void;

  getProofInit(): Uint8Array | string;
  getProofInit_asU8(): Uint8Array;
  getProofInit_asB64(): string;
  setProofInit(value: Uint8Array | string): void;

  hasProofHeight(): boolean;
  clearProofHeight(): void;
  getProofHeight(): ibc_core_client_v1_client_pb.Height | undefined;
  setProofHeight(value?: ibc_core_client_v1_client_pb.Height): void;

  getSigner(): string;
  setSigner(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgChannelCloseConfirm.AsObject;
  static toObject(includeInstance: boolean, msg: MsgChannelCloseConfirm): MsgChannelCloseConfirm.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MsgChannelCloseConfirm, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgChannelCloseConfirm;
  static deserializeBinaryFromReader(message: MsgChannelCloseConfirm, reader: jspb.BinaryReader): MsgChannelCloseConfirm;
}

export namespace MsgChannelCloseConfirm {
  export type AsObject = {
    portId: string,
    channelId: string,
    proofInit: Uint8Array | string,
    proofHeight?: ibc_core_client_v1_client_pb.Height.AsObject,
    signer: string,
  }
}

export class MsgRecvPacket extends jspb.Message {
  hasPacket(): boolean;
  clearPacket(): void;
  getPacket(): Packet | undefined;
  setPacket(value?: Packet): void;

  getProof(): Uint8Array | string;
  getProof_asU8(): Uint8Array;
  getProof_asB64(): string;
  setProof(value: Uint8Array | string): void;

  hasProofHeight(): boolean;
  clearProofHeight(): void;
  getProofHeight(): ibc_core_client_v1_client_pb.Height | undefined;
  setProofHeight(value?: ibc_core_client_v1_client_pb.Height): void;

  getSigner(): string;
  setSigner(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgRecvPacket.AsObject;
  static toObject(includeInstance: boolean, msg: MsgRecvPacket): MsgRecvPacket.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MsgRecvPacket, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgRecvPacket;
  static deserializeBinaryFromReader(message: MsgRecvPacket, reader: jspb.BinaryReader): MsgRecvPacket;
}

export namespace MsgRecvPacket {
  export type AsObject = {
    packet?: Packet.AsObject,
    proof: Uint8Array | string,
    proofHeight?: ibc_core_client_v1_client_pb.Height.AsObject,
    signer: string,
  }
}

export class MsgTimeout extends jspb.Message {
  hasPacket(): boolean;
  clearPacket(): void;
  getPacket(): Packet | undefined;
  setPacket(value?: Packet): void;

  getProof(): Uint8Array | string;
  getProof_asU8(): Uint8Array;
  getProof_asB64(): string;
  setProof(value: Uint8Array | string): void;

  hasProofHeight(): boolean;
  clearProofHeight(): void;
  getProofHeight(): ibc_core_client_v1_client_pb.Height | undefined;
  setProofHeight(value?: ibc_core_client_v1_client_pb.Height): void;

  getNextSequenceRecv(): number;
  setNextSequenceRecv(value: number): void;

  getSigner(): string;
  setSigner(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgTimeout.AsObject;
  static toObject(includeInstance: boolean, msg: MsgTimeout): MsgTimeout.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MsgTimeout, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgTimeout;
  static deserializeBinaryFromReader(message: MsgTimeout, reader: jspb.BinaryReader): MsgTimeout;
}

export namespace MsgTimeout {
  export type AsObject = {
    packet?: Packet.AsObject,
    proof: Uint8Array | string,
    proofHeight?: ibc_core_client_v1_client_pb.Height.AsObject,
    nextSequenceRecv: number,
    signer: string,
  }
}

export class MsgTimeoutOnClose extends jspb.Message {
  hasPacket(): boolean;
  clearPacket(): void;
  getPacket(): Packet | undefined;
  setPacket(value?: Packet): void;

  getProof(): Uint8Array | string;
  getProof_asU8(): Uint8Array;
  getProof_asB64(): string;
  setProof(value: Uint8Array | string): void;

  getProofClose(): Uint8Array | string;
  getProofClose_asU8(): Uint8Array;
  getProofClose_asB64(): string;
  setProofClose(value: Uint8Array | string): void;

  hasProofHeight(): boolean;
  clearProofHeight(): void;
  getProofHeight(): ibc_core_client_v1_client_pb.Height | undefined;
  setProofHeight(value?: ibc_core_client_v1_client_pb.Height): void;

  getNextSequenceRecv(): number;
  setNextSequenceRecv(value: number): void;

  getSigner(): string;
  setSigner(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgTimeoutOnClose.AsObject;
  static toObject(includeInstance: boolean, msg: MsgTimeoutOnClose): MsgTimeoutOnClose.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MsgTimeoutOnClose, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgTimeoutOnClose;
  static deserializeBinaryFromReader(message: MsgTimeoutOnClose, reader: jspb.BinaryReader): MsgTimeoutOnClose;
}

export namespace MsgTimeoutOnClose {
  export type AsObject = {
    packet?: Packet.AsObject,
    proof: Uint8Array | string,
    proofClose: Uint8Array | string,
    proofHeight?: ibc_core_client_v1_client_pb.Height.AsObject,
    nextSequenceRecv: number,
    signer: string,
  }
}

export class MsgAcknowledgement extends jspb.Message {
  hasPacket(): boolean;
  clearPacket(): void;
  getPacket(): Packet | undefined;
  setPacket(value?: Packet): void;

  getAcknowledgement(): Uint8Array | string;
  getAcknowledgement_asU8(): Uint8Array;
  getAcknowledgement_asB64(): string;
  setAcknowledgement(value: Uint8Array | string): void;

  getProof(): Uint8Array | string;
  getProof_asU8(): Uint8Array;
  getProof_asB64(): string;
  setProof(value: Uint8Array | string): void;

  hasProofHeight(): boolean;
  clearProofHeight(): void;
  getProofHeight(): ibc_core_client_v1_client_pb.Height | undefined;
  setProofHeight(value?: ibc_core_client_v1_client_pb.Height): void;

  getSigner(): string;
  setSigner(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgAcknowledgement.AsObject;
  static toObject(includeInstance: boolean, msg: MsgAcknowledgement): MsgAcknowledgement.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MsgAcknowledgement, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgAcknowledgement;
  static deserializeBinaryFromReader(message: MsgAcknowledgement, reader: jspb.BinaryReader): MsgAcknowledgement;
}

export namespace MsgAcknowledgement {
  export type AsObject = {
    packet?: Packet.AsObject,
    acknowledgement: Uint8Array | string,
    proof: Uint8Array | string,
    proofHeight?: ibc_core_client_v1_client_pb.Height.AsObject,
    signer: string,
  }
}

export class Channel extends jspb.Message {
  getState(): StateMap[keyof StateMap];
  setState(value: StateMap[keyof StateMap]): void;

  getOrdering(): OrderMap[keyof OrderMap];
  setOrdering(value: OrderMap[keyof OrderMap]): void;

  hasCounterparty(): boolean;
  clearCounterparty(): void;
  getCounterparty(): Counterparty | undefined;
  setCounterparty(value?: Counterparty): void;

  clearConnectionHopsList(): void;
  getConnectionHopsList(): Array<string>;
  setConnectionHopsList(value: Array<string>): void;
  addConnectionHops(value: string, index?: number): string;

  getVersion(): string;
  setVersion(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Channel.AsObject;
  static toObject(includeInstance: boolean, msg: Channel): Channel.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Channel, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Channel;
  static deserializeBinaryFromReader(message: Channel, reader: jspb.BinaryReader): Channel;
}

export namespace Channel {
  export type AsObject = {
    state: StateMap[keyof StateMap],
    ordering: OrderMap[keyof OrderMap],
    counterparty?: Counterparty.AsObject,
    connectionHopsList: Array<string>,
    version: string,
  }
}

export class IdentifiedChannel extends jspb.Message {
  getState(): StateMap[keyof StateMap];
  setState(value: StateMap[keyof StateMap]): void;

  getOrdering(): OrderMap[keyof OrderMap];
  setOrdering(value: OrderMap[keyof OrderMap]): void;

  hasCounterparty(): boolean;
  clearCounterparty(): void;
  getCounterparty(): Counterparty | undefined;
  setCounterparty(value?: Counterparty): void;

  clearConnectionHopsList(): void;
  getConnectionHopsList(): Array<string>;
  setConnectionHopsList(value: Array<string>): void;
  addConnectionHops(value: string, index?: number): string;

  getVersion(): string;
  setVersion(value: string): void;

  getPortId(): string;
  setPortId(value: string): void;

  getChannelId(): string;
  setChannelId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IdentifiedChannel.AsObject;
  static toObject(includeInstance: boolean, msg: IdentifiedChannel): IdentifiedChannel.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: IdentifiedChannel, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IdentifiedChannel;
  static deserializeBinaryFromReader(message: IdentifiedChannel, reader: jspb.BinaryReader): IdentifiedChannel;
}

export namespace IdentifiedChannel {
  export type AsObject = {
    state: StateMap[keyof StateMap],
    ordering: OrderMap[keyof OrderMap],
    counterparty?: Counterparty.AsObject,
    connectionHopsList: Array<string>,
    version: string,
    portId: string,
    channelId: string,
  }
}

export class Counterparty extends jspb.Message {
  getPortId(): string;
  setPortId(value: string): void;

  getChannelId(): string;
  setChannelId(value: string): void;

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
    portId: string,
    channelId: string,
  }
}

export class Packet extends jspb.Message {
  getSequence(): number;
  setSequence(value: number): void;

  getSourcePort(): string;
  setSourcePort(value: string): void;

  getSourceChannel(): string;
  setSourceChannel(value: string): void;

  getDestinationPort(): string;
  setDestinationPort(value: string): void;

  getDestinationChannel(): string;
  setDestinationChannel(value: string): void;

  getData(): Uint8Array | string;
  getData_asU8(): Uint8Array;
  getData_asB64(): string;
  setData(value: Uint8Array | string): void;

  hasTimeoutHeight(): boolean;
  clearTimeoutHeight(): void;
  getTimeoutHeight(): ibc_core_client_v1_client_pb.Height | undefined;
  setTimeoutHeight(value?: ibc_core_client_v1_client_pb.Height): void;

  getTimeoutTimestamp(): number;
  setTimeoutTimestamp(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Packet.AsObject;
  static toObject(includeInstance: boolean, msg: Packet): Packet.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Packet, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Packet;
  static deserializeBinaryFromReader(message: Packet, reader: jspb.BinaryReader): Packet;
}

export namespace Packet {
  export type AsObject = {
    sequence: number,
    sourcePort: string,
    sourceChannel: string,
    destinationPort: string,
    destinationChannel: string,
    data: Uint8Array | string,
    timeoutHeight?: ibc_core_client_v1_client_pb.Height.AsObject,
    timeoutTimestamp: number,
  }
}

export class PacketAckCommitment extends jspb.Message {
  getPortId(): string;
  setPortId(value: string): void;

  getChannelId(): string;
  setChannelId(value: string): void;

  getSequence(): number;
  setSequence(value: number): void;

  getHash(): Uint8Array | string;
  getHash_asU8(): Uint8Array;
  getHash_asB64(): string;
  setHash(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PacketAckCommitment.AsObject;
  static toObject(includeInstance: boolean, msg: PacketAckCommitment): PacketAckCommitment.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PacketAckCommitment, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PacketAckCommitment;
  static deserializeBinaryFromReader(message: PacketAckCommitment, reader: jspb.BinaryReader): PacketAckCommitment;
}

export namespace PacketAckCommitment {
  export type AsObject = {
    portId: string,
    channelId: string,
    sequence: number,
    hash: Uint8Array | string,
  }
}

export class Acknowledgement extends jspb.Message {
  hasResult(): boolean;
  clearResult(): void;
  getResult(): Uint8Array | string;
  getResult_asU8(): Uint8Array;
  getResult_asB64(): string;
  setResult(value: Uint8Array | string): void;

  hasError(): boolean;
  clearError(): void;
  getError(): string;
  setError(value: string): void;

  getResponseCase(): Acknowledgement.ResponseCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Acknowledgement.AsObject;
  static toObject(includeInstance: boolean, msg: Acknowledgement): Acknowledgement.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Acknowledgement, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Acknowledgement;
  static deserializeBinaryFromReader(message: Acknowledgement, reader: jspb.BinaryReader): Acknowledgement;
}

export namespace Acknowledgement {
  export type AsObject = {
    result: Uint8Array | string,
    error: string,
  }

  export enum ResponseCase {
    RESPONSE_NOT_SET = 0,
    RESULT = 21,
    ERROR = 22,
  }
}

export interface StateMap {
  STATE_UNINITIALIZED_UNSPECIFIED: 0;
  STATE_INIT: 1;
  STATE_TRYOPEN: 2;
  STATE_OPEN: 3;
  STATE_CLOSED: 4;
}

export const State: StateMap;

export interface OrderMap {
  ORDER_NONE_UNSPECIFIED: 0;
  ORDER_UNORDERED: 1;
  ORDER_ORDERED: 2;
}

export const Order: OrderMap;

