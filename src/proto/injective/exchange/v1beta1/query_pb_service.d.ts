// package: injective.exchange.v1beta1
// file: injective/exchange/v1beta1/query.proto

import * as injective_exchange_v1beta1_query_pb from "../../../injective/exchange/v1beta1/query_pb";
import {grpc} from "@improbable-eng/grpc-web";

type QueryQueryExchangeParams = {
  readonly methodName: string;
  readonly service: typeof Query;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof injective_exchange_v1beta1_query_pb.QueryExchangeParamsRequest;
  readonly responseType: typeof injective_exchange_v1beta1_query_pb.QueryExchangeParamsResponse;
};

type QuerySubaccountDeposits = {
  readonly methodName: string;
  readonly service: typeof Query;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof injective_exchange_v1beta1_query_pb.QuerySubaccountDepositsRequest;
  readonly responseType: typeof injective_exchange_v1beta1_query_pb.QuerySubaccountDepositsResponse;
};

type QuerySubaccountDeposit = {
  readonly methodName: string;
  readonly service: typeof Query;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof injective_exchange_v1beta1_query_pb.QuerySubaccountDepositRequest;
  readonly responseType: typeof injective_exchange_v1beta1_query_pb.QuerySubaccountDepositResponse;
};

type QueryExchangeBalances = {
  readonly methodName: string;
  readonly service: typeof Query;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof injective_exchange_v1beta1_query_pb.QueryExchangeBalancesRequest;
  readonly responseType: typeof injective_exchange_v1beta1_query_pb.QueryExchangeBalancesResponse;
};

type QuerySpotMarkets = {
  readonly methodName: string;
  readonly service: typeof Query;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof injective_exchange_v1beta1_query_pb.QuerySpotMarketsRequest;
  readonly responseType: typeof injective_exchange_v1beta1_query_pb.QuerySpotMarketsResponse;
};

type QuerySpotMarket = {
  readonly methodName: string;
  readonly service: typeof Query;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof injective_exchange_v1beta1_query_pb.QuerySpotMarketRequest;
  readonly responseType: typeof injective_exchange_v1beta1_query_pb.QuerySpotMarketResponse;
};

type QuerySpotOrderbook = {
  readonly methodName: string;
  readonly service: typeof Query;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof injective_exchange_v1beta1_query_pb.QuerySpotOrderbookRequest;
  readonly responseType: typeof injective_exchange_v1beta1_query_pb.QuerySpotOrderbookResponse;
};

type QueryTraderSpotOrders = {
  readonly methodName: string;
  readonly service: typeof Query;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof injective_exchange_v1beta1_query_pb.QueryTraderSpotOrdersRequest;
  readonly responseType: typeof injective_exchange_v1beta1_query_pb.QueryTraderSpotOrdersResponse;
};

type QueryDerivativeOrderbook = {
  readonly methodName: string;
  readonly service: typeof Query;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof injective_exchange_v1beta1_query_pb.QueryDerivativeOrderbookRequest;
  readonly responseType: typeof injective_exchange_v1beta1_query_pb.QueryDerivativeOrderbookResponse;
};

type QueryTraderDerivativeOrders = {
  readonly methodName: string;
  readonly service: typeof Query;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof injective_exchange_v1beta1_query_pb.QueryTraderDerivativeOrdersRequest;
  readonly responseType: typeof injective_exchange_v1beta1_query_pb.QueryTraderDerivativeOrdersResponse;
};

type QueryDerivativeMarkets = {
  readonly methodName: string;
  readonly service: typeof Query;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof injective_exchange_v1beta1_query_pb.QueryDerivativeMarketsRequest;
  readonly responseType: typeof injective_exchange_v1beta1_query_pb.QueryDerivativeMarketsResponse;
};

type QueryDerivativeMarket = {
  readonly methodName: string;
  readonly service: typeof Query;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof injective_exchange_v1beta1_query_pb.QueryDerivativeMarketRequest;
  readonly responseType: typeof injective_exchange_v1beta1_query_pb.QueryDerivativeMarketResponse;
};

type QuerySubaccountTradeNonce = {
  readonly methodName: string;
  readonly service: typeof Query;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof injective_exchange_v1beta1_query_pb.QuerySubaccountTradeNonceRequest;
  readonly responseType: typeof injective_exchange_v1beta1_query_pb.QuerySubaccountTradeNonceResponse;
};

type QueryExchangeModuleState = {
  readonly methodName: string;
  readonly service: typeof Query;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof injective_exchange_v1beta1_query_pb.QueryModuleStateRequest;
  readonly responseType: typeof injective_exchange_v1beta1_query_pb.QueryModuleStateResponse;
};

type QueryPositions = {
  readonly methodName: string;
  readonly service: typeof Query;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof injective_exchange_v1beta1_query_pb.QueryPositionsRequest;
  readonly responseType: typeof injective_exchange_v1beta1_query_pb.QueryPositionsResponse;
};

type QueryLiquidityMiningPoints = {
  readonly methodName: string;
  readonly service: typeof Query;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof injective_exchange_v1beta1_query_pb.QueryLiquidityMiningPointsRequest;
  readonly responseType: typeof injective_exchange_v1beta1_query_pb.QueryLiquidityMiningPointsResponse;
};

export class Query {
  static readonly serviceName: string;
  static readonly QueryExchangeParams: QueryQueryExchangeParams;
  static readonly SubaccountDeposits: QuerySubaccountDeposits;
  static readonly SubaccountDeposit: QuerySubaccountDeposit;
  static readonly ExchangeBalances: QueryExchangeBalances;
  static readonly SpotMarkets: QuerySpotMarkets;
  static readonly SpotMarket: QuerySpotMarket;
  static readonly SpotOrderbook: QuerySpotOrderbook;
  static readonly TraderSpotOrders: QueryTraderSpotOrders;
  static readonly DerivativeOrderbook: QueryDerivativeOrderbook;
  static readonly TraderDerivativeOrders: QueryTraderDerivativeOrders;
  static readonly DerivativeMarkets: QueryDerivativeMarkets;
  static readonly DerivativeMarket: QueryDerivativeMarket;
  static readonly SubaccountTradeNonce: QuerySubaccountTradeNonce;
  static readonly ExchangeModuleState: QueryExchangeModuleState;
  static readonly Positions: QueryPositions;
  static readonly LiquidityMiningPoints: QueryLiquidityMiningPoints;
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
  queryExchangeParams(
    requestMessage: injective_exchange_v1beta1_query_pb.QueryExchangeParamsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: injective_exchange_v1beta1_query_pb.QueryExchangeParamsResponse|null) => void
  ): UnaryResponse;
  queryExchangeParams(
    requestMessage: injective_exchange_v1beta1_query_pb.QueryExchangeParamsRequest,
    callback: (error: ServiceError|null, responseMessage: injective_exchange_v1beta1_query_pb.QueryExchangeParamsResponse|null) => void
  ): UnaryResponse;
  subaccountDeposits(
    requestMessage: injective_exchange_v1beta1_query_pb.QuerySubaccountDepositsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: injective_exchange_v1beta1_query_pb.QuerySubaccountDepositsResponse|null) => void
  ): UnaryResponse;
  subaccountDeposits(
    requestMessage: injective_exchange_v1beta1_query_pb.QuerySubaccountDepositsRequest,
    callback: (error: ServiceError|null, responseMessage: injective_exchange_v1beta1_query_pb.QuerySubaccountDepositsResponse|null) => void
  ): UnaryResponse;
  subaccountDeposit(
    requestMessage: injective_exchange_v1beta1_query_pb.QuerySubaccountDepositRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: injective_exchange_v1beta1_query_pb.QuerySubaccountDepositResponse|null) => void
  ): UnaryResponse;
  subaccountDeposit(
    requestMessage: injective_exchange_v1beta1_query_pb.QuerySubaccountDepositRequest,
    callback: (error: ServiceError|null, responseMessage: injective_exchange_v1beta1_query_pb.QuerySubaccountDepositResponse|null) => void
  ): UnaryResponse;
  exchangeBalances(
    requestMessage: injective_exchange_v1beta1_query_pb.QueryExchangeBalancesRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: injective_exchange_v1beta1_query_pb.QueryExchangeBalancesResponse|null) => void
  ): UnaryResponse;
  exchangeBalances(
    requestMessage: injective_exchange_v1beta1_query_pb.QueryExchangeBalancesRequest,
    callback: (error: ServiceError|null, responseMessage: injective_exchange_v1beta1_query_pb.QueryExchangeBalancesResponse|null) => void
  ): UnaryResponse;
  spotMarkets(
    requestMessage: injective_exchange_v1beta1_query_pb.QuerySpotMarketsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: injective_exchange_v1beta1_query_pb.QuerySpotMarketsResponse|null) => void
  ): UnaryResponse;
  spotMarkets(
    requestMessage: injective_exchange_v1beta1_query_pb.QuerySpotMarketsRequest,
    callback: (error: ServiceError|null, responseMessage: injective_exchange_v1beta1_query_pb.QuerySpotMarketsResponse|null) => void
  ): UnaryResponse;
  spotMarket(
    requestMessage: injective_exchange_v1beta1_query_pb.QuerySpotMarketRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: injective_exchange_v1beta1_query_pb.QuerySpotMarketResponse|null) => void
  ): UnaryResponse;
  spotMarket(
    requestMessage: injective_exchange_v1beta1_query_pb.QuerySpotMarketRequest,
    callback: (error: ServiceError|null, responseMessage: injective_exchange_v1beta1_query_pb.QuerySpotMarketResponse|null) => void
  ): UnaryResponse;
  spotOrderbook(
    requestMessage: injective_exchange_v1beta1_query_pb.QuerySpotOrderbookRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: injective_exchange_v1beta1_query_pb.QuerySpotOrderbookResponse|null) => void
  ): UnaryResponse;
  spotOrderbook(
    requestMessage: injective_exchange_v1beta1_query_pb.QuerySpotOrderbookRequest,
    callback: (error: ServiceError|null, responseMessage: injective_exchange_v1beta1_query_pb.QuerySpotOrderbookResponse|null) => void
  ): UnaryResponse;
  traderSpotOrders(
    requestMessage: injective_exchange_v1beta1_query_pb.QueryTraderSpotOrdersRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: injective_exchange_v1beta1_query_pb.QueryTraderSpotOrdersResponse|null) => void
  ): UnaryResponse;
  traderSpotOrders(
    requestMessage: injective_exchange_v1beta1_query_pb.QueryTraderSpotOrdersRequest,
    callback: (error: ServiceError|null, responseMessage: injective_exchange_v1beta1_query_pb.QueryTraderSpotOrdersResponse|null) => void
  ): UnaryResponse;
  derivativeOrderbook(
    requestMessage: injective_exchange_v1beta1_query_pb.QueryDerivativeOrderbookRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: injective_exchange_v1beta1_query_pb.QueryDerivativeOrderbookResponse|null) => void
  ): UnaryResponse;
  derivativeOrderbook(
    requestMessage: injective_exchange_v1beta1_query_pb.QueryDerivativeOrderbookRequest,
    callback: (error: ServiceError|null, responseMessage: injective_exchange_v1beta1_query_pb.QueryDerivativeOrderbookResponse|null) => void
  ): UnaryResponse;
  traderDerivativeOrders(
    requestMessage: injective_exchange_v1beta1_query_pb.QueryTraderDerivativeOrdersRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: injective_exchange_v1beta1_query_pb.QueryTraderDerivativeOrdersResponse|null) => void
  ): UnaryResponse;
  traderDerivativeOrders(
    requestMessage: injective_exchange_v1beta1_query_pb.QueryTraderDerivativeOrdersRequest,
    callback: (error: ServiceError|null, responseMessage: injective_exchange_v1beta1_query_pb.QueryTraderDerivativeOrdersResponse|null) => void
  ): UnaryResponse;
  derivativeMarkets(
    requestMessage: injective_exchange_v1beta1_query_pb.QueryDerivativeMarketsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: injective_exchange_v1beta1_query_pb.QueryDerivativeMarketsResponse|null) => void
  ): UnaryResponse;
  derivativeMarkets(
    requestMessage: injective_exchange_v1beta1_query_pb.QueryDerivativeMarketsRequest,
    callback: (error: ServiceError|null, responseMessage: injective_exchange_v1beta1_query_pb.QueryDerivativeMarketsResponse|null) => void
  ): UnaryResponse;
  derivativeMarket(
    requestMessage: injective_exchange_v1beta1_query_pb.QueryDerivativeMarketRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: injective_exchange_v1beta1_query_pb.QueryDerivativeMarketResponse|null) => void
  ): UnaryResponse;
  derivativeMarket(
    requestMessage: injective_exchange_v1beta1_query_pb.QueryDerivativeMarketRequest,
    callback: (error: ServiceError|null, responseMessage: injective_exchange_v1beta1_query_pb.QueryDerivativeMarketResponse|null) => void
  ): UnaryResponse;
  subaccountTradeNonce(
    requestMessage: injective_exchange_v1beta1_query_pb.QuerySubaccountTradeNonceRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: injective_exchange_v1beta1_query_pb.QuerySubaccountTradeNonceResponse|null) => void
  ): UnaryResponse;
  subaccountTradeNonce(
    requestMessage: injective_exchange_v1beta1_query_pb.QuerySubaccountTradeNonceRequest,
    callback: (error: ServiceError|null, responseMessage: injective_exchange_v1beta1_query_pb.QuerySubaccountTradeNonceResponse|null) => void
  ): UnaryResponse;
  exchangeModuleState(
    requestMessage: injective_exchange_v1beta1_query_pb.QueryModuleStateRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: injective_exchange_v1beta1_query_pb.QueryModuleStateResponse|null) => void
  ): UnaryResponse;
  exchangeModuleState(
    requestMessage: injective_exchange_v1beta1_query_pb.QueryModuleStateRequest,
    callback: (error: ServiceError|null, responseMessage: injective_exchange_v1beta1_query_pb.QueryModuleStateResponse|null) => void
  ): UnaryResponse;
  positions(
    requestMessage: injective_exchange_v1beta1_query_pb.QueryPositionsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: injective_exchange_v1beta1_query_pb.QueryPositionsResponse|null) => void
  ): UnaryResponse;
  positions(
    requestMessage: injective_exchange_v1beta1_query_pb.QueryPositionsRequest,
    callback: (error: ServiceError|null, responseMessage: injective_exchange_v1beta1_query_pb.QueryPositionsResponse|null) => void
  ): UnaryResponse;
  liquidityMiningPoints(
    requestMessage: injective_exchange_v1beta1_query_pb.QueryLiquidityMiningPointsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: injective_exchange_v1beta1_query_pb.QueryLiquidityMiningPointsResponse|null) => void
  ): UnaryResponse;
  liquidityMiningPoints(
    requestMessage: injective_exchange_v1beta1_query_pb.QueryLiquidityMiningPointsRequest,
    callback: (error: ServiceError|null, responseMessage: injective_exchange_v1beta1_query_pb.QueryLiquidityMiningPointsResponse|null) => void
  ): UnaryResponse;
}

