// package: injective_derivative_exchange_rpc
// file: exchange/injective_derivative_exchange_rpc.proto

import * as exchange_injective_derivative_exchange_rpc_pb from "../exchange/injective_derivative_exchange_rpc_pb";
import {grpc} from "@improbable-eng/grpc-web";

type InjectiveDerivativeExchangeRPCMarkets = {
  readonly methodName: string;
  readonly service: typeof InjectiveDerivativeExchangeRPC;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof exchange_injective_derivative_exchange_rpc_pb.MarketsRequest;
  readonly responseType: typeof exchange_injective_derivative_exchange_rpc_pb.MarketsResponse;
};

type InjectiveDerivativeExchangeRPCMarket = {
  readonly methodName: string;
  readonly service: typeof InjectiveDerivativeExchangeRPC;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof exchange_injective_derivative_exchange_rpc_pb.MarketRequest;
  readonly responseType: typeof exchange_injective_derivative_exchange_rpc_pb.MarketResponse;
};

type InjectiveDerivativeExchangeRPCStreamMarket = {
  readonly methodName: string;
  readonly service: typeof InjectiveDerivativeExchangeRPC;
  readonly requestStream: false;
  readonly responseStream: true;
  readonly requestType: typeof exchange_injective_derivative_exchange_rpc_pb.StreamMarketRequest;
  readonly responseType: typeof exchange_injective_derivative_exchange_rpc_pb.StreamMarketResponse;
};

type InjectiveDerivativeExchangeRPCOrderbook = {
  readonly methodName: string;
  readonly service: typeof InjectiveDerivativeExchangeRPC;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof exchange_injective_derivative_exchange_rpc_pb.OrderbookRequest;
  readonly responseType: typeof exchange_injective_derivative_exchange_rpc_pb.OrderbookResponse;
};

type InjectiveDerivativeExchangeRPCStreamOrderbook = {
  readonly methodName: string;
  readonly service: typeof InjectiveDerivativeExchangeRPC;
  readonly requestStream: false;
  readonly responseStream: true;
  readonly requestType: typeof exchange_injective_derivative_exchange_rpc_pb.StreamOrderbookRequest;
  readonly responseType: typeof exchange_injective_derivative_exchange_rpc_pb.StreamOrderbookResponse;
};

type InjectiveDerivativeExchangeRPCOrders = {
  readonly methodName: string;
  readonly service: typeof InjectiveDerivativeExchangeRPC;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof exchange_injective_derivative_exchange_rpc_pb.OrdersRequest;
  readonly responseType: typeof exchange_injective_derivative_exchange_rpc_pb.OrdersResponse;
};

type InjectiveDerivativeExchangeRPCPositions = {
  readonly methodName: string;
  readonly service: typeof InjectiveDerivativeExchangeRPC;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof exchange_injective_derivative_exchange_rpc_pb.PositionsRequest;
  readonly responseType: typeof exchange_injective_derivative_exchange_rpc_pb.PositionsResponse;
};

type InjectiveDerivativeExchangeRPCLiquidablePositions = {
  readonly methodName: string;
  readonly service: typeof InjectiveDerivativeExchangeRPC;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof exchange_injective_derivative_exchange_rpc_pb.LiquidablePositionsRequest;
  readonly responseType: typeof exchange_injective_derivative_exchange_rpc_pb.LiquidablePositionsResponse;
};

type InjectiveDerivativeExchangeRPCFundingPayments = {
  readonly methodName: string;
  readonly service: typeof InjectiveDerivativeExchangeRPC;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof exchange_injective_derivative_exchange_rpc_pb.FundingPaymentsRequest;
  readonly responseType: typeof exchange_injective_derivative_exchange_rpc_pb.FundingPaymentsResponse;
};

type InjectiveDerivativeExchangeRPCStreamPositions = {
  readonly methodName: string;
  readonly service: typeof InjectiveDerivativeExchangeRPC;
  readonly requestStream: false;
  readonly responseStream: true;
  readonly requestType: typeof exchange_injective_derivative_exchange_rpc_pb.StreamPositionsRequest;
  readonly responseType: typeof exchange_injective_derivative_exchange_rpc_pb.StreamPositionsResponse;
};

type InjectiveDerivativeExchangeRPCStreamOrders = {
  readonly methodName: string;
  readonly service: typeof InjectiveDerivativeExchangeRPC;
  readonly requestStream: false;
  readonly responseStream: true;
  readonly requestType: typeof exchange_injective_derivative_exchange_rpc_pb.StreamOrdersRequest;
  readonly responseType: typeof exchange_injective_derivative_exchange_rpc_pb.StreamOrdersResponse;
};

type InjectiveDerivativeExchangeRPCTrades = {
  readonly methodName: string;
  readonly service: typeof InjectiveDerivativeExchangeRPC;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof exchange_injective_derivative_exchange_rpc_pb.TradesRequest;
  readonly responseType: typeof exchange_injective_derivative_exchange_rpc_pb.TradesResponse;
};

type InjectiveDerivativeExchangeRPCStreamTrades = {
  readonly methodName: string;
  readonly service: typeof InjectiveDerivativeExchangeRPC;
  readonly requestStream: false;
  readonly responseStream: true;
  readonly requestType: typeof exchange_injective_derivative_exchange_rpc_pb.StreamTradesRequest;
  readonly responseType: typeof exchange_injective_derivative_exchange_rpc_pb.StreamTradesResponse;
};

type InjectiveDerivativeExchangeRPCSubaccountOrdersList = {
  readonly methodName: string;
  readonly service: typeof InjectiveDerivativeExchangeRPC;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof exchange_injective_derivative_exchange_rpc_pb.SubaccountOrdersListRequest;
  readonly responseType: typeof exchange_injective_derivative_exchange_rpc_pb.SubaccountOrdersListResponse;
};

type InjectiveDerivativeExchangeRPCSubaccountTradesList = {
  readonly methodName: string;
  readonly service: typeof InjectiveDerivativeExchangeRPC;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof exchange_injective_derivative_exchange_rpc_pb.SubaccountTradesListRequest;
  readonly responseType: typeof exchange_injective_derivative_exchange_rpc_pb.SubaccountTradesListResponse;
};

export class InjectiveDerivativeExchangeRPC {
  static readonly serviceName: string;
  static readonly Markets: InjectiveDerivativeExchangeRPCMarkets;
  static readonly Market: InjectiveDerivativeExchangeRPCMarket;
  static readonly StreamMarket: InjectiveDerivativeExchangeRPCStreamMarket;
  static readonly Orderbook: InjectiveDerivativeExchangeRPCOrderbook;
  static readonly StreamOrderbook: InjectiveDerivativeExchangeRPCStreamOrderbook;
  static readonly Orders: InjectiveDerivativeExchangeRPCOrders;
  static readonly Positions: InjectiveDerivativeExchangeRPCPositions;
  static readonly LiquidablePositions: InjectiveDerivativeExchangeRPCLiquidablePositions;
  static readonly FundingPayments: InjectiveDerivativeExchangeRPCFundingPayments;
  static readonly StreamPositions: InjectiveDerivativeExchangeRPCStreamPositions;
  static readonly StreamOrders: InjectiveDerivativeExchangeRPCStreamOrders;
  static readonly Trades: InjectiveDerivativeExchangeRPCTrades;
  static readonly StreamTrades: InjectiveDerivativeExchangeRPCStreamTrades;
  static readonly SubaccountOrdersList: InjectiveDerivativeExchangeRPCSubaccountOrdersList;
  static readonly SubaccountTradesList: InjectiveDerivativeExchangeRPCSubaccountTradesList;
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

export class InjectiveDerivativeExchangeRPCClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  markets(
    requestMessage: exchange_injective_derivative_exchange_rpc_pb.MarketsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: exchange_injective_derivative_exchange_rpc_pb.MarketsResponse|null) => void
  ): UnaryResponse;
  markets(
    requestMessage: exchange_injective_derivative_exchange_rpc_pb.MarketsRequest,
    callback: (error: ServiceError|null, responseMessage: exchange_injective_derivative_exchange_rpc_pb.MarketsResponse|null) => void
  ): UnaryResponse;
  market(
    requestMessage: exchange_injective_derivative_exchange_rpc_pb.MarketRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: exchange_injective_derivative_exchange_rpc_pb.MarketResponse|null) => void
  ): UnaryResponse;
  market(
    requestMessage: exchange_injective_derivative_exchange_rpc_pb.MarketRequest,
    callback: (error: ServiceError|null, responseMessage: exchange_injective_derivative_exchange_rpc_pb.MarketResponse|null) => void
  ): UnaryResponse;
  streamMarket(requestMessage: exchange_injective_derivative_exchange_rpc_pb.StreamMarketRequest, metadata?: grpc.Metadata): ResponseStream<exchange_injective_derivative_exchange_rpc_pb.StreamMarketResponse>;
  orderbook(
    requestMessage: exchange_injective_derivative_exchange_rpc_pb.OrderbookRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: exchange_injective_derivative_exchange_rpc_pb.OrderbookResponse|null) => void
  ): UnaryResponse;
  orderbook(
    requestMessage: exchange_injective_derivative_exchange_rpc_pb.OrderbookRequest,
    callback: (error: ServiceError|null, responseMessage: exchange_injective_derivative_exchange_rpc_pb.OrderbookResponse|null) => void
  ): UnaryResponse;
  streamOrderbook(requestMessage: exchange_injective_derivative_exchange_rpc_pb.StreamOrderbookRequest, metadata?: grpc.Metadata): ResponseStream<exchange_injective_derivative_exchange_rpc_pb.StreamOrderbookResponse>;
  orders(
    requestMessage: exchange_injective_derivative_exchange_rpc_pb.OrdersRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: exchange_injective_derivative_exchange_rpc_pb.OrdersResponse|null) => void
  ): UnaryResponse;
  orders(
    requestMessage: exchange_injective_derivative_exchange_rpc_pb.OrdersRequest,
    callback: (error: ServiceError|null, responseMessage: exchange_injective_derivative_exchange_rpc_pb.OrdersResponse|null) => void
  ): UnaryResponse;
  positions(
    requestMessage: exchange_injective_derivative_exchange_rpc_pb.PositionsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: exchange_injective_derivative_exchange_rpc_pb.PositionsResponse|null) => void
  ): UnaryResponse;
  positions(
    requestMessage: exchange_injective_derivative_exchange_rpc_pb.PositionsRequest,
    callback: (error: ServiceError|null, responseMessage: exchange_injective_derivative_exchange_rpc_pb.PositionsResponse|null) => void
  ): UnaryResponse;
  liquidablePositions(
    requestMessage: exchange_injective_derivative_exchange_rpc_pb.LiquidablePositionsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: exchange_injective_derivative_exchange_rpc_pb.LiquidablePositionsResponse|null) => void
  ): UnaryResponse;
  liquidablePositions(
    requestMessage: exchange_injective_derivative_exchange_rpc_pb.LiquidablePositionsRequest,
    callback: (error: ServiceError|null, responseMessage: exchange_injective_derivative_exchange_rpc_pb.LiquidablePositionsResponse|null) => void
  ): UnaryResponse;
  fundingPayments(
    requestMessage: exchange_injective_derivative_exchange_rpc_pb.FundingPaymentsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: exchange_injective_derivative_exchange_rpc_pb.FundingPaymentsResponse|null) => void
  ): UnaryResponse;
  fundingPayments(
    requestMessage: exchange_injective_derivative_exchange_rpc_pb.FundingPaymentsRequest,
    callback: (error: ServiceError|null, responseMessage: exchange_injective_derivative_exchange_rpc_pb.FundingPaymentsResponse|null) => void
  ): UnaryResponse;
  streamPositions(requestMessage: exchange_injective_derivative_exchange_rpc_pb.StreamPositionsRequest, metadata?: grpc.Metadata): ResponseStream<exchange_injective_derivative_exchange_rpc_pb.StreamPositionsResponse>;
  streamOrders(requestMessage: exchange_injective_derivative_exchange_rpc_pb.StreamOrdersRequest, metadata?: grpc.Metadata): ResponseStream<exchange_injective_derivative_exchange_rpc_pb.StreamOrdersResponse>;
  trades(
    requestMessage: exchange_injective_derivative_exchange_rpc_pb.TradesRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: exchange_injective_derivative_exchange_rpc_pb.TradesResponse|null) => void
  ): UnaryResponse;
  trades(
    requestMessage: exchange_injective_derivative_exchange_rpc_pb.TradesRequest,
    callback: (error: ServiceError|null, responseMessage: exchange_injective_derivative_exchange_rpc_pb.TradesResponse|null) => void
  ): UnaryResponse;
  streamTrades(requestMessage: exchange_injective_derivative_exchange_rpc_pb.StreamTradesRequest, metadata?: grpc.Metadata): ResponseStream<exchange_injective_derivative_exchange_rpc_pb.StreamTradesResponse>;
  subaccountOrdersList(
    requestMessage: exchange_injective_derivative_exchange_rpc_pb.SubaccountOrdersListRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: exchange_injective_derivative_exchange_rpc_pb.SubaccountOrdersListResponse|null) => void
  ): UnaryResponse;
  subaccountOrdersList(
    requestMessage: exchange_injective_derivative_exchange_rpc_pb.SubaccountOrdersListRequest,
    callback: (error: ServiceError|null, responseMessage: exchange_injective_derivative_exchange_rpc_pb.SubaccountOrdersListResponse|null) => void
  ): UnaryResponse;
  subaccountTradesList(
    requestMessage: exchange_injective_derivative_exchange_rpc_pb.SubaccountTradesListRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: exchange_injective_derivative_exchange_rpc_pb.SubaccountTradesListResponse|null) => void
  ): UnaryResponse;
  subaccountTradesList(
    requestMessage: exchange_injective_derivative_exchange_rpc_pb.SubaccountTradesListRequest,
    callback: (error: ServiceError|null, responseMessage: exchange_injective_derivative_exchange_rpc_pb.SubaccountTradesListResponse|null) => void
  ): UnaryResponse;
}

