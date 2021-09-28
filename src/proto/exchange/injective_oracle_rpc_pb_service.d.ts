// package: injective_oracle_rpc
// file: exchange/injective_oracle_rpc.proto

import * as exchange_injective_oracle_rpc_pb from "../exchange/injective_oracle_rpc_pb";
import {grpc} from "@improbable-eng/grpc-web";

type InjectiveOracleRPCOracleList = {
  readonly methodName: string;
  readonly service: typeof InjectiveOracleRPC;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof exchange_injective_oracle_rpc_pb.OracleListRequest;
  readonly responseType: typeof exchange_injective_oracle_rpc_pb.OracleListResponse;
};

type InjectiveOracleRPCPrice = {
  readonly methodName: string;
  readonly service: typeof InjectiveOracleRPC;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof exchange_injective_oracle_rpc_pb.PriceRequest;
  readonly responseType: typeof exchange_injective_oracle_rpc_pb.PriceResponse;
};

type InjectiveOracleRPCStreamPrices = {
  readonly methodName: string;
  readonly service: typeof InjectiveOracleRPC;
  readonly requestStream: false;
  readonly responseStream: true;
  readonly requestType: typeof exchange_injective_oracle_rpc_pb.StreamPricesRequest;
  readonly responseType: typeof exchange_injective_oracle_rpc_pb.StreamPricesResponse;
};

export class InjectiveOracleRPC {
  static readonly serviceName: string;
  static readonly OracleList: InjectiveOracleRPCOracleList;
  static readonly Price: InjectiveOracleRPCPrice;
  static readonly StreamPrices: InjectiveOracleRPCStreamPrices;
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

export class InjectiveOracleRPCClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  oracleList(
    requestMessage: exchange_injective_oracle_rpc_pb.OracleListRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: exchange_injective_oracle_rpc_pb.OracleListResponse|null) => void
  ): UnaryResponse;
  oracleList(
    requestMessage: exchange_injective_oracle_rpc_pb.OracleListRequest,
    callback: (error: ServiceError|null, responseMessage: exchange_injective_oracle_rpc_pb.OracleListResponse|null) => void
  ): UnaryResponse;
  price(
    requestMessage: exchange_injective_oracle_rpc_pb.PriceRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: exchange_injective_oracle_rpc_pb.PriceResponse|null) => void
  ): UnaryResponse;
  price(
    requestMessage: exchange_injective_oracle_rpc_pb.PriceRequest,
    callback: (error: ServiceError|null, responseMessage: exchange_injective_oracle_rpc_pb.PriceResponse|null) => void
  ): UnaryResponse;
  streamPrices(requestMessage: exchange_injective_oracle_rpc_pb.StreamPricesRequest, metadata?: grpc.Metadata): ResponseStream<exchange_injective_oracle_rpc_pb.StreamPricesResponse>;
}

