// package: injective.peggy.v1
// file: injective/peggy/v1/genesis.proto

import * as jspb from "google-protobuf";
import * as gogoproto_gogo_pb from "../../../gogoproto/gogo_pb";
import * as injective_peggy_v1_types_pb from "../../../injective/peggy/v1/types_pb";
import * as injective_peggy_v1_msgs_pb from "../../../injective/peggy/v1/msgs_pb";
import * as injective_peggy_v1_batch_pb from "../../../injective/peggy/v1/batch_pb";
import * as injective_peggy_v1_attestation_pb from "../../../injective/peggy/v1/attestation_pb";
import * as cosmos_base_v1beta1_coin_pb from "../../../cosmos/base/v1beta1/coin_pb";

export class Params extends jspb.Message {
  getPeggyId(): string;
  setPeggyId(value: string): void;

  getContractSourceHash(): string;
  setContractSourceHash(value: string): void;

  getBridgeEthereumAddress(): string;
  setBridgeEthereumAddress(value: string): void;

  getBridgeChainId(): number;
  setBridgeChainId(value: number): void;

  getSignedValsetsWindow(): number;
  setSignedValsetsWindow(value: number): void;

  getSignedBatchesWindow(): number;
  setSignedBatchesWindow(value: number): void;

  getSignedClaimsWindow(): number;
  setSignedClaimsWindow(value: number): void;

  getTargetBatchTimeout(): number;
  setTargetBatchTimeout(value: number): void;

  getAverageBlockTime(): number;
  setAverageBlockTime(value: number): void;

  getAverageEthereumBlockTime(): number;
  setAverageEthereumBlockTime(value: number): void;

  getSlashFractionValset(): Uint8Array | string;
  getSlashFractionValset_asU8(): Uint8Array;
  getSlashFractionValset_asB64(): string;
  setSlashFractionValset(value: Uint8Array | string): void;

  getSlashFractionBatch(): Uint8Array | string;
  getSlashFractionBatch_asU8(): Uint8Array;
  getSlashFractionBatch_asB64(): string;
  setSlashFractionBatch(value: Uint8Array | string): void;

  getSlashFractionClaim(): Uint8Array | string;
  getSlashFractionClaim_asU8(): Uint8Array;
  getSlashFractionClaim_asB64(): string;
  setSlashFractionClaim(value: Uint8Array | string): void;

  getSlashFractionConflictingClaim(): Uint8Array | string;
  getSlashFractionConflictingClaim_asU8(): Uint8Array;
  getSlashFractionConflictingClaim_asB64(): string;
  setSlashFractionConflictingClaim(value: Uint8Array | string): void;

  getUnbondSlashingValsetsWindow(): number;
  setUnbondSlashingValsetsWindow(value: number): void;

  getSlashFractionBadEthSignature(): Uint8Array | string;
  getSlashFractionBadEthSignature_asU8(): Uint8Array;
  getSlashFractionBadEthSignature_asB64(): string;
  setSlashFractionBadEthSignature(value: Uint8Array | string): void;

  getCosmosCoinDenom(): string;
  setCosmosCoinDenom(value: string): void;

  getCosmosCoinErc20Contract(): string;
  setCosmosCoinErc20Contract(value: string): void;

  getClaimSlashingEnabled(): boolean;
  setClaimSlashingEnabled(value: boolean): void;

  getBridgeContractStartHeight(): number;
  setBridgeContractStartHeight(value: number): void;

  hasValsetReward(): boolean;
  clearValsetReward(): void;
  getValsetReward(): cosmos_base_v1beta1_coin_pb.Coin | undefined;
  setValsetReward(value?: cosmos_base_v1beta1_coin_pb.Coin): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Params.AsObject;
  static toObject(includeInstance: boolean, msg: Params): Params.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Params, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Params;
  static deserializeBinaryFromReader(message: Params, reader: jspb.BinaryReader): Params;
}

export namespace Params {
  export type AsObject = {
    peggyId: string,
    contractSourceHash: string,
    bridgeEthereumAddress: string,
    bridgeChainId: number,
    signedValsetsWindow: number,
    signedBatchesWindow: number,
    signedClaimsWindow: number,
    targetBatchTimeout: number,
    averageBlockTime: number,
    averageEthereumBlockTime: number,
    slashFractionValset: Uint8Array | string,
    slashFractionBatch: Uint8Array | string,
    slashFractionClaim: Uint8Array | string,
    slashFractionConflictingClaim: Uint8Array | string,
    unbondSlashingValsetsWindow: number,
    slashFractionBadEthSignature: Uint8Array | string,
    cosmosCoinDenom: string,
    cosmosCoinErc20Contract: string,
    claimSlashingEnabled: boolean,
    bridgeContractStartHeight: number,
    valsetReward?: cosmos_base_v1beta1_coin_pb.Coin.AsObject,
  }
}

export class GenesisState extends jspb.Message {
  hasParams(): boolean;
  clearParams(): void;
  getParams(): Params | undefined;
  setParams(value?: Params): void;

  getLastObservedNonce(): number;
  setLastObservedNonce(value: number): void;

  clearValsetsList(): void;
  getValsetsList(): Array<injective_peggy_v1_types_pb.Valset>;
  setValsetsList(value: Array<injective_peggy_v1_types_pb.Valset>): void;
  addValsets(value?: injective_peggy_v1_types_pb.Valset, index?: number): injective_peggy_v1_types_pb.Valset;

  clearValsetConfirmsList(): void;
  getValsetConfirmsList(): Array<injective_peggy_v1_msgs_pb.MsgValsetConfirm>;
  setValsetConfirmsList(value: Array<injective_peggy_v1_msgs_pb.MsgValsetConfirm>): void;
  addValsetConfirms(value?: injective_peggy_v1_msgs_pb.MsgValsetConfirm, index?: number): injective_peggy_v1_msgs_pb.MsgValsetConfirm;

  clearBatchesList(): void;
  getBatchesList(): Array<injective_peggy_v1_batch_pb.OutgoingTxBatch>;
  setBatchesList(value: Array<injective_peggy_v1_batch_pb.OutgoingTxBatch>): void;
  addBatches(value?: injective_peggy_v1_batch_pb.OutgoingTxBatch, index?: number): injective_peggy_v1_batch_pb.OutgoingTxBatch;

  clearBatchConfirmsList(): void;
  getBatchConfirmsList(): Array<injective_peggy_v1_msgs_pb.MsgConfirmBatch>;
  setBatchConfirmsList(value: Array<injective_peggy_v1_msgs_pb.MsgConfirmBatch>): void;
  addBatchConfirms(value?: injective_peggy_v1_msgs_pb.MsgConfirmBatch, index?: number): injective_peggy_v1_msgs_pb.MsgConfirmBatch;

  clearAttestationsList(): void;
  getAttestationsList(): Array<injective_peggy_v1_attestation_pb.Attestation>;
  setAttestationsList(value: Array<injective_peggy_v1_attestation_pb.Attestation>): void;
  addAttestations(value?: injective_peggy_v1_attestation_pb.Attestation, index?: number): injective_peggy_v1_attestation_pb.Attestation;

  clearOrchestratorAddressesList(): void;
  getOrchestratorAddressesList(): Array<injective_peggy_v1_msgs_pb.MsgSetOrchestratorAddresses>;
  setOrchestratorAddressesList(value: Array<injective_peggy_v1_msgs_pb.MsgSetOrchestratorAddresses>): void;
  addOrchestratorAddresses(value?: injective_peggy_v1_msgs_pb.MsgSetOrchestratorAddresses, index?: number): injective_peggy_v1_msgs_pb.MsgSetOrchestratorAddresses;

  clearErc20ToDenomsList(): void;
  getErc20ToDenomsList(): Array<injective_peggy_v1_types_pb.ERC20ToDenom>;
  setErc20ToDenomsList(value: Array<injective_peggy_v1_types_pb.ERC20ToDenom>): void;
  addErc20ToDenoms(value?: injective_peggy_v1_types_pb.ERC20ToDenom, index?: number): injective_peggy_v1_types_pb.ERC20ToDenom;

  clearUnbatchedTransfersList(): void;
  getUnbatchedTransfersList(): Array<injective_peggy_v1_batch_pb.OutgoingTransferTx>;
  setUnbatchedTransfersList(value: Array<injective_peggy_v1_batch_pb.OutgoingTransferTx>): void;
  addUnbatchedTransfers(value?: injective_peggy_v1_batch_pb.OutgoingTransferTx, index?: number): injective_peggy_v1_batch_pb.OutgoingTransferTx;

  getLastObservedEthereumHeight(): number;
  setLastObservedEthereumHeight(value: number): void;

  getLastOutgoingBatchId(): number;
  setLastOutgoingBatchId(value: number): void;

  getLastOutgoingPoolId(): number;
  setLastOutgoingPoolId(value: number): void;

  hasLastObservedValset(): boolean;
  clearLastObservedValset(): void;
  getLastObservedValset(): injective_peggy_v1_types_pb.Valset | undefined;
  setLastObservedValset(value?: injective_peggy_v1_types_pb.Valset): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GenesisState.AsObject;
  static toObject(includeInstance: boolean, msg: GenesisState): GenesisState.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GenesisState, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GenesisState;
  static deserializeBinaryFromReader(message: GenesisState, reader: jspb.BinaryReader): GenesisState;
}

export namespace GenesisState {
  export type AsObject = {
    params?: Params.AsObject,
    lastObservedNonce: number,
    valsetsList: Array<injective_peggy_v1_types_pb.Valset.AsObject>,
    valsetConfirmsList: Array<injective_peggy_v1_msgs_pb.MsgValsetConfirm.AsObject>,
    batchesList: Array<injective_peggy_v1_batch_pb.OutgoingTxBatch.AsObject>,
    batchConfirmsList: Array<injective_peggy_v1_msgs_pb.MsgConfirmBatch.AsObject>,
    attestationsList: Array<injective_peggy_v1_attestation_pb.Attestation.AsObject>,
    orchestratorAddressesList: Array<injective_peggy_v1_msgs_pb.MsgSetOrchestratorAddresses.AsObject>,
    erc20ToDenomsList: Array<injective_peggy_v1_types_pb.ERC20ToDenom.AsObject>,
    unbatchedTransfersList: Array<injective_peggy_v1_batch_pb.OutgoingTransferTx.AsObject>,
    lastObservedEthereumHeight: number,
    lastOutgoingBatchId: number,
    lastOutgoingPoolId: number,
    lastObservedValset?: injective_peggy_v1_types_pb.Valset.AsObject,
  }
}

