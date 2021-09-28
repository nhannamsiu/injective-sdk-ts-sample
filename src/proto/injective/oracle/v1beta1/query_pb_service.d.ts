// package: injective.oracle.v1beta1
// file: injective/oracle/v1beta1/query.proto

import * as injective_oracle_v1beta1_query_pb from "../../../injective/oracle/v1beta1/query_pb";
import {grpc} from "@improbable-eng/grpc-web";

type QueryParams = {
  readonly methodName: string;
  readonly service: typeof Query;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof injective_oracle_v1beta1_query_pb.QueryParamsRequest;
  readonly responseType: typeof injective_oracle_v1beta1_query_pb.QueryParamsResponse;
};

type QueryBandRelayers = {
  readonly methodName: string;
  readonly service: typeof Query;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof injective_oracle_v1beta1_query_pb.QueryBandRelayersRequest;
  readonly responseType: typeof injective_oracle_v1beta1_query_pb.QueryBandRelayersResponse;
};

type QueryBandPriceStates = {
  readonly methodName: string;
  readonly service: typeof Query;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof injective_oracle_v1beta1_query_pb.QueryBandPriceStatesRequest;
  readonly responseType: typeof injective_oracle_v1beta1_query_pb.QueryBandPriceStatesResponse;
};

type QueryBandIBCPriceStates = {
  readonly methodName: string;
  readonly service: typeof Query;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof injective_oracle_v1beta1_query_pb.QueryBandIBCPriceStatesRequest;
  readonly responseType: typeof injective_oracle_v1beta1_query_pb.QueryBandIBCPriceStatesResponse;
};

type QueryPriceFeedPriceStates = {
  readonly methodName: string;
  readonly service: typeof Query;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof injective_oracle_v1beta1_query_pb.QueryPriceFeedPriceStatesRequest;
  readonly responseType: typeof injective_oracle_v1beta1_query_pb.QueryPriceFeedPriceStatesResponse;
};

type QueryCoinbasePriceStates = {
  readonly methodName: string;
  readonly service: typeof Query;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof injective_oracle_v1beta1_query_pb.QueryCoinbasePriceStatesRequest;
  readonly responseType: typeof injective_oracle_v1beta1_query_pb.QueryCoinbasePriceStatesResponse;
};

type QueryOracleModuleState = {
  readonly methodName: string;
  readonly service: typeof Query;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof injective_oracle_v1beta1_query_pb.QueryModuleStateRequest;
  readonly responseType: typeof injective_oracle_v1beta1_query_pb.QueryModuleStateResponse;
};

export class Query {
  static readonly serviceName: string;
  static readonly Params: QueryParams;
  static readonly BandRelayers: QueryBandRelayers;
  static readonly BandPriceStates: QueryBandPriceStates;
  static readonly BandIBCPriceStates: QueryBandIBCPriceStates;
  static readonly PriceFeedPriceStates: QueryPriceFeedPriceStates;
  static readonly CoinbasePriceStates: QueryCoinbasePriceStates;
  static readonly OracleModuleState: QueryOracleModuleState;
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

export class QueryClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  params(
    requestMessage: injective_oracle_v1beta1_query_pb.QueryParamsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: injective_oracle_v1beta1_query_pb.QueryParamsResponse|null) => void
  ): UnaryResponse;
  params(
    requestMessage: injective_oracle_v1beta1_query_pb.QueryParamsRequest,
    callback: (error: ServiceError|null, responseMessage: injective_oracle_v1beta1_query_pb.QueryParamsResponse|null) => void
  ): UnaryResponse;
  bandRelayers(
    requestMessage: injective_oracle_v1beta1_query_pb.QueryBandRelayersRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: injective_oracle_v1beta1_query_pb.QueryBandRelayersResponse|null) => void
  ): UnaryResponse;
  bandRelayers(
    requestMessage: injective_oracle_v1beta1_query_pb.QueryBandRelayersRequest,
    callback: (error: ServiceError|null, responseMessage: injective_oracle_v1beta1_query_pb.QueryBandRelayersResponse|null) => void
  ): UnaryResponse;
  bandPriceStates(
    requestMessage: injective_oracle_v1beta1_query_pb.QueryBandPriceStatesRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: injective_oracle_v1beta1_query_pb.QueryBandPriceStatesResponse|null) => void
  ): UnaryResponse;
  bandPriceStates(
    requestMessage: injective_oracle_v1beta1_query_pb.QueryBandPriceStatesRequest,
    callback: (error: ServiceError|null, responseMessage: injective_oracle_v1beta1_query_pb.QueryBandPriceStatesResponse|null) => void
  ): UnaryResponse;
  bandIBCPriceStates(
    requestMessage: injective_oracle_v1beta1_query_pb.QueryBandIBCPriceStatesRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: injective_oracle_v1beta1_query_pb.QueryBandIBCPriceStatesResponse|null) => void
  ): UnaryResponse;
  bandIBCPriceStates(
    requestMessage: injective_oracle_v1beta1_query_pb.QueryBandIBCPriceStatesRequest,
    callback: (error: ServiceError|null, responseMessage: injective_oracle_v1beta1_query_pb.QueryBandIBCPriceStatesResponse|null) => void
  ): UnaryResponse;
  priceFeedPriceStates(
    requestMessage: injective_oracle_v1beta1_query_pb.QueryPriceFeedPriceStatesRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: injective_oracle_v1beta1_query_pb.QueryPriceFeedPriceStatesResponse|null) => void
  ): UnaryResponse;
  priceFeedPriceStates(
    requestMessage: injective_oracle_v1beta1_query_pb.QueryPriceFeedPriceStatesRequest,
    callback: (error: ServiceError|null, responseMessage: injective_oracle_v1beta1_query_pb.QueryPriceFeedPriceStatesResponse|null) => void
  ): UnaryResponse;
  coinbasePriceStates(
    requestMessage: injective_oracle_v1beta1_query_pb.QueryCoinbasePriceStatesRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: injective_oracle_v1beta1_query_pb.QueryCoinbasePriceStatesResponse|null) => void
  ): UnaryResponse;
  coinbasePriceStates(
    requestMessage: injective_oracle_v1beta1_query_pb.QueryCoinbasePriceStatesRequest,
    callback: (error: ServiceError|null, responseMessage: injective_oracle_v1beta1_query_pb.QueryCoinbasePriceStatesResponse|null) => void
  ): UnaryResponse;
  oracleModuleState(
    requestMessage: injective_oracle_v1beta1_query_pb.QueryModuleStateRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: injective_oracle_v1beta1_query_pb.QueryModuleStateResponse|null) => void
  ): UnaryResponse;
  oracleModuleState(
    requestMessage: injective_oracle_v1beta1_query_pb.QueryModuleStateRequest,
    callback: (error: ServiceError|null, responseMessage: injective_oracle_v1beta1_query_pb.QueryModuleStateResponse|null) => void
  ): UnaryResponse;
}

