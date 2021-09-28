// package: injective.peggy.v1
// file: injective/peggy/v1/events.proto

import * as jspb from "google-protobuf";
import * as injective_peggy_v1_attestation_pb from "../../../injective/peggy/v1/attestation_pb";

export class EventAttestationObserved extends jspb.Message {
  getAttestationType(): injective_peggy_v1_attestation_pb.ClaimTypeMap[keyof injective_peggy_v1_attestation_pb.ClaimTypeMap];
  setAttestationType(value: injective_peggy_v1_attestation_pb.ClaimTypeMap[keyof injective_peggy_v1_attestation_pb.ClaimTypeMap]): void;

  getBridgeContract(): string;
  setBridgeContract(value: string): void;

  getBridgeChainId(): number;
  setBridgeChainId(value: number): void;

  getAttestationId(): Uint8Array | string;
  getAttestationId_asU8(): Uint8Array;
  getAttestationId_asB64(): string;
  setAttestationId(value: Uint8Array | string): void;

  getNonce(): number;
  setNonce(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EventAttestationObserved.AsObject;
  static toObject(includeInstance: boolean, msg: EventAttestationObserved): EventAttestationObserved.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EventAttestationObserved, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EventAttestationObserved;
  static deserializeBinaryFromReader(message: EventAttestationObserved, reader: jspb.BinaryReader): EventAttestationObserved;
}

export namespace EventAttestationObserved {
  export type AsObject = {
    attestationType: injective_peggy_v1_attestation_pb.ClaimTypeMap[keyof injective_peggy_v1_attestation_pb.ClaimTypeMap],
    bridgeContract: string,
    bridgeChainId: number,
    attestationId: Uint8Array | string,
    nonce: number,
  }
}

export class EventBridgeWithdrawCanceled extends jspb.Message {
  getBridgeContract(): string;
  setBridgeContract(value: string): void;

  getBridgeChainId(): number;
  setBridgeChainId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EventBridgeWithdrawCanceled.AsObject;
  static toObject(includeInstance: boolean, msg: EventBridgeWithdrawCanceled): EventBridgeWithdrawCanceled.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EventBridgeWithdrawCanceled, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EventBridgeWithdrawCanceled;
  static deserializeBinaryFromReader(message: EventBridgeWithdrawCanceled, reader: jspb.BinaryReader): EventBridgeWithdrawCanceled;
}

export namespace EventBridgeWithdrawCanceled {
  export type AsObject = {
    bridgeContract: string,
    bridgeChainId: number,
  }
}

export class EventBridgeWithdrawalReceived extends jspb.Message {
  getBridgeContract(): string;
  setBridgeContract(value: string): void;

  getBridgeChainId(): number;
  setBridgeChainId(value: number): void;

  getOutgoingTxId(): number;
  setOutgoingTxId(value: number): void;

  getNonce(): number;
  setNonce(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EventBridgeWithdrawalReceived.AsObject;
  static toObject(includeInstance: boolean, msg: EventBridgeWithdrawalReceived): EventBridgeWithdrawalReceived.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EventBridgeWithdrawalReceived, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EventBridgeWithdrawalReceived;
  static deserializeBinaryFromReader(message: EventBridgeWithdrawalReceived, reader: jspb.BinaryReader): EventBridgeWithdrawalReceived;
}

export namespace EventBridgeWithdrawalReceived {
  export type AsObject = {
    bridgeContract: string,
    bridgeChainId: number,
    outgoingTxId: number,
    nonce: number,
  }
}

export class EventOutgoingBatch extends jspb.Message {
  getBridgeContract(): string;
  setBridgeContract(value: string): void;

  getBridgeChainId(): number;
  setBridgeChainId(value: number): void;

  getBatchId(): number;
  setBatchId(value: number): void;

  getNonce(): number;
  setNonce(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EventOutgoingBatch.AsObject;
  static toObject(includeInstance: boolean, msg: EventOutgoingBatch): EventOutgoingBatch.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EventOutgoingBatch, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EventOutgoingBatch;
  static deserializeBinaryFromReader(message: EventOutgoingBatch, reader: jspb.BinaryReader): EventOutgoingBatch;
}

export namespace EventOutgoingBatch {
  export type AsObject = {
    bridgeContract: string,
    bridgeChainId: number,
    batchId: number,
    nonce: number,
  }
}

export class EventOutgoingBatchCanceled extends jspb.Message {
  getBridgeContract(): string;
  setBridgeContract(value: string): void;

  getBridgeChainId(): number;
  setBridgeChainId(value: number): void;

  getBatchId(): number;
  setBatchId(value: number): void;

  getNonce(): number;
  setNonce(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EventOutgoingBatchCanceled.AsObject;
  static toObject(includeInstance: boolean, msg: EventOutgoingBatchCanceled): EventOutgoingBatchCanceled.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EventOutgoingBatchCanceled, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EventOutgoingBatchCanceled;
  static deserializeBinaryFromReader(message: EventOutgoingBatchCanceled, reader: jspb.BinaryReader): EventOutgoingBatchCanceled;
}

export namespace EventOutgoingBatchCanceled {
  export type AsObject = {
    bridgeContract: string,
    bridgeChainId: number,
    batchId: number,
    nonce: number,
  }
}

export class EventMultisigUpdateRequest extends jspb.Message {
  getBridgeContract(): string;
  setBridgeContract(value: string): void;

  getBridgeChainId(): number;
  setBridgeChainId(value: number): void;

  getMultisigId(): number;
  setMultisigId(value: number): void;

  getNonce(): number;
  setNonce(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EventMultisigUpdateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: EventMultisigUpdateRequest): EventMultisigUpdateRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EventMultisigUpdateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EventMultisigUpdateRequest;
  static deserializeBinaryFromReader(message: EventMultisigUpdateRequest, reader: jspb.BinaryReader): EventMultisigUpdateRequest;
}

export namespace EventMultisigUpdateRequest {
  export type AsObject = {
    bridgeContract: string,
    bridgeChainId: number,
    multisigId: number,
    nonce: number,
  }
}

export class EventSetOrchestratorAddresses extends jspb.Message {
  getSetOperatorAddress(): Uint8Array | string;
  getSetOperatorAddress_asU8(): Uint8Array;
  getSetOperatorAddress_asB64(): string;
  setSetOperatorAddress(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EventSetOrchestratorAddresses.AsObject;
  static toObject(includeInstance: boolean, msg: EventSetOrchestratorAddresses): EventSetOrchestratorAddresses.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EventSetOrchestratorAddresses, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EventSetOrchestratorAddresses;
  static deserializeBinaryFromReader(message: EventSetOrchestratorAddresses, reader: jspb.BinaryReader): EventSetOrchestratorAddresses;
}

export namespace EventSetOrchestratorAddresses {
  export type AsObject = {
    setOperatorAddress: Uint8Array | string,
  }
}

export class EventValsetConfirm extends jspb.Message {
  getValsetConfirmKey(): Uint8Array | string;
  getValsetConfirmKey_asU8(): Uint8Array;
  getValsetConfirmKey_asB64(): string;
  setValsetConfirmKey(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EventValsetConfirm.AsObject;
  static toObject(includeInstance: boolean, msg: EventValsetConfirm): EventValsetConfirm.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EventValsetConfirm, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EventValsetConfirm;
  static deserializeBinaryFromReader(message: EventValsetConfirm, reader: jspb.BinaryReader): EventValsetConfirm;
}

export namespace EventValsetConfirm {
  export type AsObject = {
    valsetConfirmKey: Uint8Array | string,
  }
}

export class EventSendToEth extends jspb.Message {
  getOutgoingTxId(): number;
  setOutgoingTxId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EventSendToEth.AsObject;
  static toObject(includeInstance: boolean, msg: EventSendToEth): EventSendToEth.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EventSendToEth, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EventSendToEth;
  static deserializeBinaryFromReader(message: EventSendToEth, reader: jspb.BinaryReader): EventSendToEth;
}

export namespace EventSendToEth {
  export type AsObject = {
    outgoingTxId: number,
  }
}

export class EventRequestBatch extends jspb.Message {
  getBatchNonce(): number;
  setBatchNonce(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EventRequestBatch.AsObject;
  static toObject(includeInstance: boolean, msg: EventRequestBatch): EventRequestBatch.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EventRequestBatch, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EventRequestBatch;
  static deserializeBinaryFromReader(message: EventRequestBatch, reader: jspb.BinaryReader): EventRequestBatch;
}

export namespace EventRequestBatch {
  export type AsObject = {
    batchNonce: number,
  }
}

export class EventConfirmBatch extends jspb.Message {
  getBatchConfirmKey(): Uint8Array | string;
  getBatchConfirmKey_asU8(): Uint8Array;
  getBatchConfirmKey_asB64(): string;
  setBatchConfirmKey(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EventConfirmBatch.AsObject;
  static toObject(includeInstance: boolean, msg: EventConfirmBatch): EventConfirmBatch.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EventConfirmBatch, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EventConfirmBatch;
  static deserializeBinaryFromReader(message: EventConfirmBatch, reader: jspb.BinaryReader): EventConfirmBatch;
}

export namespace EventConfirmBatch {
  export type AsObject = {
    batchConfirmKey: Uint8Array | string,
  }
}

export class EventDepositClaim extends jspb.Message {
  getAttestationId(): Uint8Array | string;
  getAttestationId_asU8(): Uint8Array;
  getAttestationId_asB64(): string;
  setAttestationId(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EventDepositClaim.AsObject;
  static toObject(includeInstance: boolean, msg: EventDepositClaim): EventDepositClaim.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EventDepositClaim, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EventDepositClaim;
  static deserializeBinaryFromReader(message: EventDepositClaim, reader: jspb.BinaryReader): EventDepositClaim;
}

export namespace EventDepositClaim {
  export type AsObject = {
    attestationId: Uint8Array | string,
  }
}

export class EventWithdrawClaim extends jspb.Message {
  getAttestationId(): Uint8Array | string;
  getAttestationId_asU8(): Uint8Array;
  getAttestationId_asB64(): string;
  setAttestationId(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EventWithdrawClaim.AsObject;
  static toObject(includeInstance: boolean, msg: EventWithdrawClaim): EventWithdrawClaim.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EventWithdrawClaim, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EventWithdrawClaim;
  static deserializeBinaryFromReader(message: EventWithdrawClaim, reader: jspb.BinaryReader): EventWithdrawClaim;
}

export namespace EventWithdrawClaim {
  export type AsObject = {
    attestationId: Uint8Array | string,
  }
}

export class EventERC20DeployedClaim extends jspb.Message {
  getAttestationId(): Uint8Array | string;
  getAttestationId_asU8(): Uint8Array;
  getAttestationId_asB64(): string;
  setAttestationId(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EventERC20DeployedClaim.AsObject;
  static toObject(includeInstance: boolean, msg: EventERC20DeployedClaim): EventERC20DeployedClaim.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EventERC20DeployedClaim, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EventERC20DeployedClaim;
  static deserializeBinaryFromReader(message: EventERC20DeployedClaim, reader: jspb.BinaryReader): EventERC20DeployedClaim;
}

export namespace EventERC20DeployedClaim {
  export type AsObject = {
    attestationId: Uint8Array | string,
  }
}

export class EventValsetUpdateClaim extends jspb.Message {
  getAttestationId(): Uint8Array | string;
  getAttestationId_asU8(): Uint8Array;
  getAttestationId_asB64(): string;
  setAttestationId(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EventValsetUpdateClaim.AsObject;
  static toObject(includeInstance: boolean, msg: EventValsetUpdateClaim): EventValsetUpdateClaim.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EventValsetUpdateClaim, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EventValsetUpdateClaim;
  static deserializeBinaryFromReader(message: EventValsetUpdateClaim, reader: jspb.BinaryReader): EventValsetUpdateClaim;
}

export namespace EventValsetUpdateClaim {
  export type AsObject = {
    attestationId: Uint8Array | string,
  }
}

export class EventCancelSendToEth extends jspb.Message {
  getOutgoingTxId(): number;
  setOutgoingTxId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EventCancelSendToEth.AsObject;
  static toObject(includeInstance: boolean, msg: EventCancelSendToEth): EventCancelSendToEth.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EventCancelSendToEth, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EventCancelSendToEth;
  static deserializeBinaryFromReader(message: EventCancelSendToEth, reader: jspb.BinaryReader): EventCancelSendToEth;
}

export namespace EventCancelSendToEth {
  export type AsObject = {
    outgoingTxId: number,
  }
}

export class EventSubmitBadSignatureEvidence extends jspb.Message {
  getBadEthSignature(): string;
  setBadEthSignature(value: string): void;

  getBadEthSignatureSubject(): string;
  setBadEthSignatureSubject(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EventSubmitBadSignatureEvidence.AsObject;
  static toObject(includeInstance: boolean, msg: EventSubmitBadSignatureEvidence): EventSubmitBadSignatureEvidence.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EventSubmitBadSignatureEvidence, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EventSubmitBadSignatureEvidence;
  static deserializeBinaryFromReader(message: EventSubmitBadSignatureEvidence, reader: jspb.BinaryReader): EventSubmitBadSignatureEvidence;
}

export namespace EventSubmitBadSignatureEvidence {
  export type AsObject = {
    badEthSignature: string,
    badEthSignatureSubject: string,
  }
}

