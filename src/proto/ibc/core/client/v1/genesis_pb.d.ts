// package: ibc.core.client.v1
// file: ibc/core/client/v1/genesis.proto

import * as jspb from "google-protobuf";
import * as ibc_core_client_v1_client_pb from "../../../../ibc/core/client/v1/client_pb";
import * as gogoproto_gogo_pb from "../../../../gogoproto/gogo_pb";

export class GenesisState extends jspb.Message {
  clearClientsList(): void;
  getClientsList(): Array<ibc_core_client_v1_client_pb.IdentifiedClientState>;
  setClientsList(value: Array<ibc_core_client_v1_client_pb.IdentifiedClientState>): void;
  addClients(value?: ibc_core_client_v1_client_pb.IdentifiedClientState, index?: number): ibc_core_client_v1_client_pb.IdentifiedClientState;

  clearClientsConsensusList(): void;
  getClientsConsensusList(): Array<ibc_core_client_v1_client_pb.ClientConsensusStates>;
  setClientsConsensusList(value: Array<ibc_core_client_v1_client_pb.ClientConsensusStates>): void;
  addClientsConsensus(value?: ibc_core_client_v1_client_pb.ClientConsensusStates, index?: number): ibc_core_client_v1_client_pb.ClientConsensusStates;

  getCreateLocalhost(): boolean;
  setCreateLocalhost(value: boolean): void;

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
    clientsList: Array<ibc_core_client_v1_client_pb.IdentifiedClientState.AsObject>,
    clientsConsensusList: Array<ibc_core_client_v1_client_pb.ClientConsensusStates.AsObject>,
    createLocalhost: boolean,
  }
}

