// package: injective_exchange_rpc
// file: exchange/injective_exchange_rpc.proto

import * as exchange_injective_exchange_rpc_pb from "../exchange/injective_exchange_rpc_pb";
import {grpc} from "@improbable-eng/grpc-web";

type InjectiveExchangeRPCPing = {
  readonly methodName: string;
  readonly service: typeof InjectiveExchangeRPC;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof exchange_injective_exchange_rpc_pb.PingRequest;
  readonly responseType: typeof exchange_injective_exchange_rpc_pb.PingResponse;
};

type InjectiveExchangeRPCVersion = {
  readonly methodName: string;
  readonly service: typeof InjectiveExchangeRPC;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof exchange_injective_exchange_rpc_pb.VersionRequest;
  readonly responseType: typeof exchange_injective_exchange_rpc_pb.VersionResponse;
};

type InjectiveExchangeRPCGetTx = {
  readonly methodName: string;
  readonly service: typeof InjectiveExchangeRPC;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof exchange_injective_exchange_rpc_pb.GetTxRequest;
  readonly responseType: typeof exchange_injective_exchange_rpc_pb.GetTxResponse;
};

type InjectiveExchangeRPCPrepareTx = {
  readonly methodName: string;
  readonly service: typeof InjectiveExchangeRPC;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof exchange_injective_exchange_rpc_pb.PrepareTxRequest;
  readonly responseType: typeof exchange_injective_exchange_rpc_pb.PrepareTxResponse;
};

type InjectiveExchangeRPCBroadcastTx = {
  readonly methodName: string;
  readonly service: typeof InjectiveExchangeRPC;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof exchange_injective_exchange_rpc_pb.BroadcastTxRequest;
  readonly responseType: typeof exchange_injective_exchange_rpc_pb.BroadcastTxResponse;
};

export class InjectiveExchangeRPC {
  static readonly serviceName: string;
  static readonly Ping: InjectiveExchangeRPCPing;
  static readonly Version: InjectiveExchangeRPCVersion;
  static readonly GetTx: InjectiveExchangeRPCGetTx;
  static readonly PrepareTx: InjectiveExchangeRPCPrepareTx;
  static readonly BroadcastTx: InjectiveExchangeRPCBroadcastTx;
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

export class InjectiveExchangeRPCClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  ping(
    requestMessage: exchange_injective_exchange_rpc_pb.PingRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: exchange_injective_exchange_rpc_pb.PingResponse|null) => void
  ): UnaryResponse;
  ping(
    requestMessage: exchange_injective_exchange_rpc_pb.PingRequest,
    callback: (error: ServiceError|null, responseMessage: exchange_injective_exchange_rpc_pb.PingResponse|null) => void
  ): UnaryResponse;
  version(
    requestMessage: exchange_injective_exchange_rpc_pb.VersionRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: exchange_injective_exchange_rpc_pb.VersionResponse|null) => void
  ): UnaryResponse;
  version(
    requestMessage: exchange_injective_exchange_rpc_pb.VersionRequest,
    callback: (error: ServiceError|null, responseMessage: exchange_injective_exchange_rpc_pb.VersionResponse|null) => void
  ): UnaryResponse;
  getTx(
    requestMessage: exchange_injective_exchange_rpc_pb.GetTxRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: exchange_injective_exchange_rpc_pb.GetTxResponse|null) => void
  ): UnaryResponse;
  getTx(
    requestMessage: exchange_injective_exchange_rpc_pb.GetTxRequest,
    callback: (error: ServiceError|null, responseMessage: exchange_injective_exchange_rpc_pb.GetTxResponse|null) => void
  ): UnaryResponse;
  prepareTx(
    requestMessage: exchange_injective_exchange_rpc_pb.PrepareTxRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: exchange_injective_exchange_rpc_pb.PrepareTxResponse|null) => void
  ): UnaryResponse;
  prepareTx(
    requestMessage: exchange_injective_exchange_rpc_pb.PrepareTxRequest,
    callback: (error: ServiceError|null, responseMessage: exchange_injective_exchange_rpc_pb.PrepareTxResponse|null) => void
  ): UnaryResponse;
  broadcastTx(
    requestMessage: exchange_injective_exchange_rpc_pb.BroadcastTxRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: exchange_injective_exchange_rpc_pb.BroadcastTxResponse|null) => void
  ): UnaryResponse;
  broadcastTx(
    requestMessage: exchange_injective_exchange_rpc_pb.BroadcastTxRequest,
    callback: (error: ServiceError|null, responseMessage: exchange_injective_exchange_rpc_pb.BroadcastTxResponse|null) => void
  ): UnaryResponse;
}

