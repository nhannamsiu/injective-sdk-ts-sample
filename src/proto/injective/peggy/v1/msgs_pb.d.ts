// package: injective.peggy.v1
// file: injective/peggy/v1/msgs.proto

import * as jspb from "google-protobuf";
import * as cosmos_base_v1beta1_coin_pb from "../../../cosmos/base/v1beta1/coin_pb";
import * as gogoproto_gogo_pb from "../../../gogoproto/gogo_pb";
import * as google_api_annotations_pb from "../../../google/api/annotations_pb";
import * as injective_peggy_v1_types_pb from "../../../injective/peggy/v1/types_pb";
import * as google_protobuf_any_pb from "google-protobuf/google/protobuf/any_pb";

export class MsgSetOrchestratorAddresses extends jspb.Message {
  getSender(): string;
  setSender(value: string): void;

  getOrchestrator(): string;
  setOrchestrator(value: string): void;

  getEthAddress(): string;
  setEthAddress(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgSetOrchestratorAddresses.AsObject;
  static toObject(includeInstance: boolean, msg: MsgSetOrchestratorAddresses): MsgSetOrchestratorAddresses.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MsgSetOrchestratorAddresses, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgSetOrchestratorAddresses;
  static deserializeBinaryFromReader(message: MsgSetOrchestratorAddresses, reader: jspb.BinaryReader): MsgSetOrchestratorAddresses;
}

export namespace MsgSetOrchestratorAddresses {
  export type AsObject = {
    sender: string,
    orchestrator: string,
    ethAddress: string,
  }
}

export class MsgSetOrchestratorAddressesResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgSetOrchestratorAddressesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MsgSetOrchestratorAddressesResponse): MsgSetOrchestratorAddressesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MsgSetOrchestratorAddressesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgSetOrchestratorAddressesResponse;
  static deserializeBinaryFromReader(message: MsgSetOrchestratorAddressesResponse, reader: jspb.BinaryReader): MsgSetOrchestratorAddressesResponse;
}

export namespace MsgSetOrchestratorAddressesResponse {
  export type AsObject = {
  }
}

export class MsgValsetConfirm extends jspb.Message {
  getNonce(): number;
  setNonce(value: number): void;

  getOrchestrator(): string;
  setOrchestrator(value: string): void;

  getEthAddress(): string;
  setEthAddress(value: string): void;

  getSignature(): string;
  setSignature(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgValsetConfirm.AsObject;
  static toObject(includeInstance: boolean, msg: MsgValsetConfirm): MsgValsetConfirm.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MsgValsetConfirm, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgValsetConfirm;
  static deserializeBinaryFromReader(message: MsgValsetConfirm, reader: jspb.BinaryReader): MsgValsetConfirm;
}

export namespace MsgValsetConfirm {
  export type AsObject = {
    nonce: number,
    orchestrator: string,
    ethAddress: string,
    signature: string,
  }
}

export class MsgValsetConfirmResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgValsetConfirmResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MsgValsetConfirmResponse): MsgValsetConfirmResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MsgValsetConfirmResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgValsetConfirmResponse;
  static deserializeBinaryFromReader(message: MsgValsetConfirmResponse, reader: jspb.BinaryReader): MsgValsetConfirmResponse;
}

export namespace MsgValsetConfirmResponse {
  export type AsObject = {
  }
}

export class MsgSendToEth extends jspb.Message {
  getSender(): string;
  setSender(value: string): void;

  getEthDest(): string;
  setEthDest(value: string): void;

  hasAmount(): boolean;
  clearAmount(): void;
  getAmount(): cosmos_base_v1beta1_coin_pb.Coin | undefined;
  setAmount(value?: cosmos_base_v1beta1_coin_pb.Coin): void;

  hasBridgeFee(): boolean;
  clearBridgeFee(): void;
  getBridgeFee(): cosmos_base_v1beta1_coin_pb.Coin | undefined;
  setBridgeFee(value?: cosmos_base_v1beta1_coin_pb.Coin): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgSendToEth.AsObject;
  static toObject(includeInstance: boolean, msg: MsgSendToEth): MsgSendToEth.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MsgSendToEth, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgSendToEth;
  static deserializeBinaryFromReader(message: MsgSendToEth, reader: jspb.BinaryReader): MsgSendToEth;
}

export namespace MsgSendToEth {
  export type AsObject = {
    sender: string,
    ethDest: string,
    amount?: cosmos_base_v1beta1_coin_pb.Coin.AsObject,
    bridgeFee?: cosmos_base_v1beta1_coin_pb.Coin.AsObject,
  }
}

export class MsgSendToEthResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgSendToEthResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MsgSendToEthResponse): MsgSendToEthResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MsgSendToEthResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgSendToEthResponse;
  static deserializeBinaryFromReader(message: MsgSendToEthResponse, reader: jspb.BinaryReader): MsgSendToEthResponse;
}

export namespace MsgSendToEthResponse {
  export type AsObject = {
  }
}

export class MsgRequestBatch extends jspb.Message {
  getOrchestrator(): string;
  setOrchestrator(value: string): void;

  getDenom(): string;
  setDenom(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgRequestBatch.AsObject;
  static toObject(includeInstance: boolean, msg: MsgRequestBatch): MsgRequestBatch.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MsgRequestBatch, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgRequestBatch;
  static deserializeBinaryFromReader(message: MsgRequestBatch, reader: jspb.BinaryReader): MsgRequestBatch;
}

export namespace MsgRequestBatch {
  export type AsObject = {
    orchestrator: string,
    denom: string,
  }
}

export class MsgRequestBatchResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgRequestBatchResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MsgRequestBatchResponse): MsgRequestBatchResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MsgRequestBatchResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgRequestBatchResponse;
  static deserializeBinaryFromReader(message: MsgRequestBatchResponse, reader: jspb.BinaryReader): MsgRequestBatchResponse;
}

export namespace MsgRequestBatchResponse {
  export type AsObject = {
  }
}

export class MsgConfirmBatch extends jspb.Message {
  getNonce(): number;
  setNonce(value: number): void;

  getTokenContract(): string;
  setTokenContract(value: string): void;

  getEthSigner(): string;
  setEthSigner(value: string): void;

  getOrchestrator(): string;
  setOrchestrator(value: string): void;

  getSignature(): string;
  setSignature(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgConfirmBatch.AsObject;
  static toObject(includeInstance: boolean, msg: MsgConfirmBatch): MsgConfirmBatch.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MsgConfirmBatch, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgConfirmBatch;
  static deserializeBinaryFromReader(message: MsgConfirmBatch, reader: jspb.BinaryReader): MsgConfirmBatch;
}

export namespace MsgConfirmBatch {
  export type AsObject = {
    nonce: number,
    tokenContract: string,
    ethSigner: string,
    orchestrator: string,
    signature: string,
  }
}

export class MsgConfirmBatchResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgConfirmBatchResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MsgConfirmBatchResponse): MsgConfirmBatchResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MsgConfirmBatchResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgConfirmBatchResponse;
  static deserializeBinaryFromReader(message: MsgConfirmBatchResponse, reader: jspb.BinaryReader): MsgConfirmBatchResponse;
}

export namespace MsgConfirmBatchResponse {
  export type AsObject = {
  }
}

export class MsgDepositClaim extends jspb.Message {
  getEventNonce(): number;
  setEventNonce(value: number): void;

  getBlockHeight(): number;
  setBlockHeight(value: number): void;

  getTokenContract(): string;
  setTokenContract(value: string): void;

  getAmount(): string;
  setAmount(value: string): void;

  getEthereumSender(): string;
  setEthereumSender(value: string): void;

  getCosmosReceiver(): string;
  setCosmosReceiver(value: string): void;

  getOrchestrator(): string;
  setOrchestrator(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgDepositClaim.AsObject;
  static toObject(includeInstance: boolean, msg: MsgDepositClaim): MsgDepositClaim.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MsgDepositClaim, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgDepositClaim;
  static deserializeBinaryFromReader(message: MsgDepositClaim, reader: jspb.BinaryReader): MsgDepositClaim;
}

export namespace MsgDepositClaim {
  export type AsObject = {
    eventNonce: number,
    blockHeight: number,
    tokenContract: string,
    amount: string,
    ethereumSender: string,
    cosmosReceiver: string,
    orchestrator: string,
  }
}

export class MsgDepositClaimResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgDepositClaimResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MsgDepositClaimResponse): MsgDepositClaimResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MsgDepositClaimResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgDepositClaimResponse;
  static deserializeBinaryFromReader(message: MsgDepositClaimResponse, reader: jspb.BinaryReader): MsgDepositClaimResponse;
}

export namespace MsgDepositClaimResponse {
  export type AsObject = {
  }
}

export class MsgWithdrawClaim extends jspb.Message {
  getEventNonce(): number;
  setEventNonce(value: number): void;

  getBlockHeight(): number;
  setBlockHeight(value: number): void;

  getBatchNonce(): number;
  setBatchNonce(value: number): void;

  getTokenContract(): string;
  setTokenContract(value: string): void;

  getOrchestrator(): string;
  setOrchestrator(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgWithdrawClaim.AsObject;
  static toObject(includeInstance: boolean, msg: MsgWithdrawClaim): MsgWithdrawClaim.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MsgWithdrawClaim, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgWithdrawClaim;
  static deserializeBinaryFromReader(message: MsgWithdrawClaim, reader: jspb.BinaryReader): MsgWithdrawClaim;
}

export namespace MsgWithdrawClaim {
  export type AsObject = {
    eventNonce: number,
    blockHeight: number,
    batchNonce: number,
    tokenContract: string,
    orchestrator: string,
  }
}

export class MsgWithdrawClaimResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgWithdrawClaimResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MsgWithdrawClaimResponse): MsgWithdrawClaimResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MsgWithdrawClaimResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgWithdrawClaimResponse;
  static deserializeBinaryFromReader(message: MsgWithdrawClaimResponse, reader: jspb.BinaryReader): MsgWithdrawClaimResponse;
}

export namespace MsgWithdrawClaimResponse {
  export type AsObject = {
  }
}

export class MsgERC20DeployedClaim extends jspb.Message {
  getEventNonce(): number;
  setEventNonce(value: number): void;

  getBlockHeight(): number;
  setBlockHeight(value: number): void;

  getCosmosDenom(): string;
  setCosmosDenom(value: string): void;

  getTokenContract(): string;
  setTokenContract(value: string): void;

  getName(): string;
  setName(value: string): void;

  getSymbol(): string;
  setSymbol(value: string): void;

  getDecimals(): number;
  setDecimals(value: number): void;

  getOrchestrator(): string;
  setOrchestrator(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgERC20DeployedClaim.AsObject;
  static toObject(includeInstance: boolean, msg: MsgERC20DeployedClaim): MsgERC20DeployedClaim.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MsgERC20DeployedClaim, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgERC20DeployedClaim;
  static deserializeBinaryFromReader(message: MsgERC20DeployedClaim, reader: jspb.BinaryReader): MsgERC20DeployedClaim;
}

export namespace MsgERC20DeployedClaim {
  export type AsObject = {
    eventNonce: number,
    blockHeight: number,
    cosmosDenom: string,
    tokenContract: string,
    name: string,
    symbol: string,
    decimals: number,
    orchestrator: string,
  }
}

export class MsgERC20DeployedClaimResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgERC20DeployedClaimResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MsgERC20DeployedClaimResponse): MsgERC20DeployedClaimResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MsgERC20DeployedClaimResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgERC20DeployedClaimResponse;
  static deserializeBinaryFromReader(message: MsgERC20DeployedClaimResponse, reader: jspb.BinaryReader): MsgERC20DeployedClaimResponse;
}

export namespace MsgERC20DeployedClaimResponse {
  export type AsObject = {
  }
}

export class MsgCancelSendToEth extends jspb.Message {
  getTransactionId(): number;
  setTransactionId(value: number): void;

  getSender(): string;
  setSender(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgCancelSendToEth.AsObject;
  static toObject(includeInstance: boolean, msg: MsgCancelSendToEth): MsgCancelSendToEth.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MsgCancelSendToEth, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgCancelSendToEth;
  static deserializeBinaryFromReader(message: MsgCancelSendToEth, reader: jspb.BinaryReader): MsgCancelSendToEth;
}

export namespace MsgCancelSendToEth {
  export type AsObject = {
    transactionId: number,
    sender: string,
  }
}

export class MsgCancelSendToEthResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgCancelSendToEthResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MsgCancelSendToEthResponse): MsgCancelSendToEthResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MsgCancelSendToEthResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgCancelSendToEthResponse;
  static deserializeBinaryFromReader(message: MsgCancelSendToEthResponse, reader: jspb.BinaryReader): MsgCancelSendToEthResponse;
}

export namespace MsgCancelSendToEthResponse {
  export type AsObject = {
  }
}

export class MsgSubmitBadSignatureEvidence extends jspb.Message {
  hasSubject(): boolean;
  clearSubject(): void;
  getSubject(): google_protobuf_any_pb.Any | undefined;
  setSubject(value?: google_protobuf_any_pb.Any): void;

  getSignature(): string;
  setSignature(value: string): void;

  getSender(): string;
  setSender(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgSubmitBadSignatureEvidence.AsObject;
  static toObject(includeInstance: boolean, msg: MsgSubmitBadSignatureEvidence): MsgSubmitBadSignatureEvidence.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MsgSubmitBadSignatureEvidence, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgSubmitBadSignatureEvidence;
  static deserializeBinaryFromReader(message: MsgSubmitBadSignatureEvidence, reader: jspb.BinaryReader): MsgSubmitBadSignatureEvidence;
}

export namespace MsgSubmitBadSignatureEvidence {
  export type AsObject = {
    subject?: google_protobuf_any_pb.Any.AsObject,
    signature: string,
    sender: string,
  }
}

export class MsgSubmitBadSignatureEvidenceResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgSubmitBadSignatureEvidenceResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MsgSubmitBadSignatureEvidenceResponse): MsgSubmitBadSignatureEvidenceResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MsgSubmitBadSignatureEvidenceResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgSubmitBadSignatureEvidenceResponse;
  static deserializeBinaryFromReader(message: MsgSubmitBadSignatureEvidenceResponse, reader: jspb.BinaryReader): MsgSubmitBadSignatureEvidenceResponse;
}

export namespace MsgSubmitBadSignatureEvidenceResponse {
  export type AsObject = {
  }
}

export class MsgValsetUpdatedClaim extends jspb.Message {
  getEventNonce(): number;
  setEventNonce(value: number): void;

  getValsetNonce(): number;
  setValsetNonce(value: number): void;

  getBlockHeight(): number;
  setBlockHeight(value: number): void;

  clearMembersList(): void;
  getMembersList(): Array<injective_peggy_v1_types_pb.BridgeValidator>;
  setMembersList(value: Array<injective_peggy_v1_types_pb.BridgeValidator>): void;
  addMembers(value?: injective_peggy_v1_types_pb.BridgeValidator, index?: number): injective_peggy_v1_types_pb.BridgeValidator;

  getRewardAmount(): string;
  setRewardAmount(value: string): void;

  getRewardToken(): string;
  setRewardToken(value: string): void;

  getOrchestrator(): string;
  setOrchestrator(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgValsetUpdatedClaim.AsObject;
  static toObject(includeInstance: boolean, msg: MsgValsetUpdatedClaim): MsgValsetUpdatedClaim.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MsgValsetUpdatedClaim, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgValsetUpdatedClaim;
  static deserializeBinaryFromReader(message: MsgValsetUpdatedClaim, reader: jspb.BinaryReader): MsgValsetUpdatedClaim;
}

export namespace MsgValsetUpdatedClaim {
  export type AsObject = {
    eventNonce: number,
    valsetNonce: number,
    blockHeight: number,
    membersList: Array<injective_peggy_v1_types_pb.BridgeValidator.AsObject>,
    rewardAmount: string,
    rewardToken: string,
    orchestrator: string,
  }
}

export class MsgValsetUpdatedClaimResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgValsetUpdatedClaimResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MsgValsetUpdatedClaimResponse): MsgValsetUpdatedClaimResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MsgValsetUpdatedClaimResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgValsetUpdatedClaimResponse;
  static deserializeBinaryFromReader(message: MsgValsetUpdatedClaimResponse, reader: jspb.BinaryReader): MsgValsetUpdatedClaimResponse;
}

export namespace MsgValsetUpdatedClaimResponse {
  export type AsObject = {
  }
}

