// package: injective_explorer_rpc
// file: exchange/injective_explorer_rpc.proto

import * as exchange_injective_explorer_rpc_pb from "../exchange/injective_explorer_rpc_pb";
import {grpc} from "@improbable-eng/grpc-web";

type InjectiveExplorerRPCGetAccount = {
  readonly methodName: string;
  readonly service: typeof InjectiveExplorerRPC;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof exchange_injective_explorer_rpc_pb.GetAccountRequest;
  readonly responseType: typeof exchange_injective_explorer_rpc_pb.GetAccountResponse;
};

type InjectiveExplorerRPCGetAccountTxs = {
  readonly methodName: string;
  readonly service: typeof InjectiveExplorerRPC;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof exchange_injective_explorer_rpc_pb.GetAccountTxsRequest;
  readonly responseType: typeof exchange_injective_explorer_rpc_pb.GetAccountTxsResponse;
};

type InjectiveExplorerRPCStreamTxs = {
  readonly methodName: string;
  readonly service: typeof InjectiveExplorerRPC;
  readonly requestStream: false;
  readonly responseStream: true;
  readonly requestType: typeof exchange_injective_explorer_rpc_pb.StreamTxsRequest;
  readonly responseType: typeof exchange_injective_explorer_rpc_pb.StreamTxsResponse;
};

type InjectiveExplorerRPCStreamBlocks = {
  readonly methodName: string;
  readonly service: typeof InjectiveExplorerRPC;
  readonly requestStream: false;
  readonly responseStream: true;
  readonly requestType: typeof exchange_injective_explorer_rpc_pb.StreamBlocksRequest;
  readonly responseType: typeof exchange_injective_explorer_rpc_pb.StreamBlocksResponse;
};

export class InjectiveExplorerRPC {
  static readonly serviceName: string;
  static readonly GetAccount: InjectiveExplorerRPCGetAccount;
  static readonly GetAccountTxs: InjectiveExplorerRPCGetAccountTxs;
  static readonly StreamTxs: InjectiveExplorerRPCStreamTxs;
  static readonly StreamBlocks: InjectiveExplorerRPCStreamBlocks;
}

export type ServiceError = { message: string, code: number; metadata: grpc.Metadata }
export type Status = { details: string, code: number; metadata: grpc.Metadata }

interface UnaryResponse {
  cancel(): void;
}
interface ResponseStream<T> {
  cancel(): void;
  on(type: 'data', handler: (message: T) => void): ResponseStream<T>;
  on(type: 'end', handler: (status?: Status) => void): ResponseStream<T>;
  on(type: 'status', handler: (status: Status) => void): ResponseStream<T>;
}
interface RequestStream<T> {
  write(message: T): RequestStream<T>;
  end(): void;
  cancel(): void;
  on(type: 'end', handler: (status?: Status) => void): RequestStream<T>;
  on(type: 'status', handler: (status: Status) => void): RequestStream<T>;
}
interface BidirectionalStream<ReqT, ResT> {
  write(message: ReqT): BidirectionalStream<ReqT, ResT>;
  end(): void;
  cancel(): void;
  on(type: 'data', handler: (message: ResT) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'end', handler: (status?: Status) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'status', handler: (status: Status) => void): BidirectionalStream<ReqT, ResT>;
}

export class InjectiveExplorerRPCClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  getAccount(
    requestMessage: exchange_injective_explorer_rpc_pb.GetAccountRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: exchange_injective_explorer_rpc_pb.GetAccountResponse|null) => void
  ): UnaryResponse;
  getAccount(
    requestMessage: exchange_injective_explorer_rpc_pb.GetAccountRequest,
    callback: (error: ServiceError|null, responseMessage: exchange_injective_explorer_rpc_pb.GetAccountResponse|null) => void
  ): UnaryResponse;
  getAccountTxs(
    requestMessage: exchange_injective_explorer_rpc_pb.GetAccountTxsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: exchange_injective_explorer_rpc_pb.GetAccountTxsResponse|null) => void
  ): UnaryResponse;
  getAccountTxs(
    requestMessage: exchange_injective_explorer_rpc_pb.GetAccountTxsRequest,
    callback: (error: ServiceError|null, responseMessage: exchange_injective_explorer_rpc_pb.GetAccountTxsResponse|null) => void
  ): UnaryResponse;
  streamTxs(requestMessage: exchange_injective_explorer_rpc_pb.StreamTxsRequest, metadata?: grpc.Metadata): ResponseStream<exchange_injective_explorer_rpc_pb.StreamTxsResponse>;
  streamBlocks(requestMessage: exchange_injective_explorer_rpc_pb.StreamBlocksRequest, metadata?: grpc.Metadata): ResponseStream<exchange_injective_explorer_rpc_pb.StreamBlocksResponse>;
}

