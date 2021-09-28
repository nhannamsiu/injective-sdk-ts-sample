// package: injective_spot_exchange_rpc
// file: exchange/injective_spot_exchange_rpc.proto

import * as exchange_injective_spot_exchange_rpc_pb from "../exchange/injective_spot_exchange_rpc_pb";
import {grpc} from "@improbable-eng/grpc-web";

type InjectiveSpotExchangeRPCMarkets = {
  readonly methodName: string;
  readonly service: typeof InjectiveSpotExchangeRPC;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof exchange_injective_spot_exchange_rpc_pb.MarketsRequest;
  readonly responseType: typeof exchange_injective_spot_exchange_rpc_pb.MarketsResponse;
};

type InjectiveSpotExchangeRPCMarket = {
  readonly methodName: string;
  readonly service: typeof InjectiveSpotExchangeRPC;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof exchange_injective_spot_exchange_rpc_pb.MarketRequest;
  readonly responseType: typeof exchange_injective_spot_exchange_rpc_pb.MarketResponse;
};

type InjectiveSpotExchangeRPCStreamMarkets = {
  readonly methodName: string;
  readonly service: typeof InjectiveSpotExchangeRPC;
  readonly requestStream: false;
  readonly responseStream: true;
  readonly requestType: typeof exchange_injective_spot_exchange_rpc_pb.StreamMarketsRequest;
  readonly responseType: typeof exchange_injective_spot_exchange_rpc_pb.StreamMarketsResponse;
};

type InjectiveSpotExchangeRPCOrderbook = {
  readonly methodName: string;
  readonly service: typeof InjectiveSpotExchangeRPC;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof exchange_injective_spot_exchange_rpc_pb.OrderbookRequest;
  readonly responseType: typeof exchange_injective_spot_exchange_rpc_pb.OrderbookResponse;
};

type InjectiveSpotExchangeRPCStreamOrderbook = {
  readonly methodName: string;
  readonly service: typeof InjectiveSpotExchangeRPC;
  readonly requestStream: false;
  readonly responseStream: true;
  readonly requestType: typeof exchange_injective_spot_exchange_rpc_pb.StreamOrderbookRequest;
  readonly responseType: typeof exchange_injective_spot_exchange_rpc_pb.StreamOrderbookResponse;
};

type InjectiveSpotExchangeRPCOrders = {
  readonly methodName: string;
  readonly service: typeof InjectiveSpotExchangeRPC;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof exchange_injective_spot_exchange_rpc_pb.OrdersRequest;
  readonly responseType: typeof exchange_injective_spot_exchange_rpc_pb.OrdersResponse;
};

type InjectiveSpotExchangeRPCStreamOrders = {
  readonly methodName: string;
  readonly service: typeof InjectiveSpotExchangeRPC;
  readonly requestStream: false;
  readonly responseStream: true;
  readonly requestType: typeof exchange_injective_spot_exchange_rpc_pb.StreamOrdersRequest;
  readonly responseType: typeof exchange_injective_spot_exchange_rpc_pb.StreamOrdersResponse;
};

type InjectiveSpotExchangeRPCTrades = {
  readonly methodName: string;
  readonly service: typeof InjectiveSpotExchangeRPC;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof exchange_injective_spot_exchange_rpc_pb.TradesRequest;
  readonly responseType: typeof exchange_injective_spot_exchange_rpc_pb.TradesResponse;
};

type InjectiveSpotExchangeRPCStreamTrades = {
  readonly methodName: string;
  readonly service: typeof InjectiveSpotExchangeRPC;
  readonly requestStream: false;
  readonly responseStream: true;
  readonly requestType: typeof exchange_injective_spot_exchange_rpc_pb.StreamTradesRequest;
  readonly responseType: typeof exchange_injective_spot_exchange_rpc_pb.StreamTradesResponse;
};

type InjectiveSpotExchangeRPCSubaccountOrdersList = {
  readonly methodName: string;
  readonly service: typeof InjectiveSpotExchangeRPC;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof exchange_injective_spot_exchange_rpc_pb.SubaccountOrdersListRequest;
  readonly responseType: typeof exchange_injective_spot_exchange_rpc_pb.SubaccountOrdersListResponse;
};

type InjectiveSpotExchangeRPCSubaccountTradesList = {
  readonly methodName: string;
  readonly service: typeof InjectiveSpotExchangeRPC;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof exchange_injective_spot_exchange_rpc_pb.SubaccountTradesListRequest;
  readonly responseType: typeof exchange_injective_spot_exchange_rpc_pb.SubaccountTradesListResponse;
};

export class InjectiveSpotExchangeRPC {
  static readonly serviceName: string;
  static readonly Markets: InjectiveSpotExchangeRPCMarkets;
  static readonly Market: InjectiveSpotExchangeRPCMarket;
  static readonly StreamMarkets: InjectiveSpotExchangeRPCStreamMarkets;
  static readonly Orderbook: InjectiveSpotExchangeRPCOrderbook;
  static readonly StreamOrderbook: InjectiveSpotExchangeRPCStreamOrderbook;
  static readonly Orders: InjectiveSpotExchangeRPCOrders;
  static readonly StreamOrders: InjectiveSpotExchangeRPCStreamOrders;
  static readonly Trades: InjectiveSpotExchangeRPCTrades;
  static readonly StreamTrades: InjectiveSpotExchangeRPCStreamTrades;
  static readonly SubaccountOrdersList: InjectiveSpotExchangeRPCSubaccountOrdersList;
  static readonly SubaccountTradesList: InjectiveSpotExchangeRPCSubaccountTradesList;
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

export class InjectiveSpotExchangeRPCClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  markets(
    requestMessage: exchange_injective_spot_exchange_rpc_pb.MarketsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: exchange_injective_spot_exchange_rpc_pb.MarketsResponse|null) => void
  ): UnaryResponse;
  markets(
    requestMessage: exchange_injective_spot_exchange_rpc_pb.MarketsRequest,
    callback: (error: ServiceError|null, responseMessage: exchange_injective_spot_exchange_rpc_pb.MarketsResponse|null) => void
  ): UnaryResponse;
  market(
    requestMessage: exchange_injective_spot_exchange_rpc_pb.MarketRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: exchange_injective_spot_exchange_rpc_pb.MarketResponse|null) => void
  ): UnaryResponse;
  market(
    requestMessage: exchange_injective_spot_exchange_rpc_pb.MarketRequest,
    callback: (error: ServiceError|null, responseMessage: exchange_injective_spot_exchange_rpc_pb.MarketResponse|null) => void
  ): UnaryResponse;
  streamMarkets(requestMessage: exchange_injective_spot_exchange_rpc_pb.StreamMarketsRequest, metadata?: grpc.Metadata): ResponseStream<exchange_injective_spot_exchange_rpc_pb.StreamMarketsResponse>;
  orderbook(
    requestMessage: exchange_injective_spot_exchange_rpc_pb.OrderbookRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: exchange_injective_spot_exchange_rpc_pb.OrderbookResponse|null) => void
  ): UnaryResponse;
  orderbook(
    requestMessage: exchange_injective_spot_exchange_rpc_pb.OrderbookRequest,
    callback: (error: ServiceError|null, responseMessage: exchange_injective_spot_exchange_rpc_pb.OrderbookResponse|null) => void
  ): UnaryResponse;
  streamOrderbook(requestMessage: exchange_injective_spot_exchange_rpc_pb.StreamOrderbookRequest, metadata?: grpc.Metadata): ResponseStream<exchange_injective_spot_exchange_rpc_pb.StreamOrderbookResponse>;
  orders(
    requestMessage: exchange_injective_spot_exchange_rpc_pb.OrdersRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: exchange_injective_spot_exchange_rpc_pb.OrdersResponse|null) => void
  ): UnaryResponse;
  orders(
    requestMessage: exchange_injective_spot_exchange_rpc_pb.OrdersRequest,
    callback: (error: ServiceError|null, responseMessage: exchange_injective_spot_exchange_rpc_pb.OrdersResponse|null) => void
  ): UnaryResponse;
  streamOrders(requestMessage: exchange_injective_spot_exchange_rpc_pb.StreamOrdersRequest, metadata?: grpc.Metadata): ResponseStream<exchange_injective_spot_exchange_rpc_pb.StreamOrdersResponse>;
  trades(
    requestMessage: exchange_injective_spot_exchange_rpc_pb.TradesRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: exchange_injective_spot_exchange_rpc_pb.TradesResponse|null) => void
  ): UnaryResponse;
  trades(
    requestMessage: exchange_injective_spot_exchange_rpc_pb.TradesRequest,
    callback: (error: ServiceError|null, responseMessage: exchange_injective_spot_exchange_rpc_pb.TradesResponse|null) => void
  ): UnaryResponse;
  streamTrades(requestMessage: exchange_injective_spot_exchange_rpc_pb.StreamTradesRequest, metadata?: grpc.Metadata): ResponseStream<exchange_injective_spot_exchange_rpc_pb.StreamTradesResponse>;
  subaccountOrdersList(
    requestMessage: exchange_injective_spot_exchange_rpc_pb.SubaccountOrdersListRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: exchange_injective_spot_exchange_rpc_pb.SubaccountOrdersListResponse|null) => void
  ): UnaryResponse;
  subaccountOrdersList(
    requestMessage: exchange_injective_spot_exchange_rpc_pb.SubaccountOrdersListRequest,
    callback: (error: ServiceError|null, responseMessage: exchange_injective_spot_exchange_rpc_pb.SubaccountOrdersListResponse|null) => void
  ): UnaryResponse;
  subaccountTradesList(
    requestMessage: exchange_injective_spot_exchange_rpc_pb.SubaccountTradesListRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: exchange_injective_spot_exchange_rpc_pb.SubaccountTradesListResponse|null) => void
  ): UnaryResponse;
  subaccountTradesList(
    requestMessage: exchange_injective_spot_exchange_rpc_pb.SubaccountTradesListRequest,
    callback: (error: ServiceError|null, responseMessage: exchange_injective_spot_exchange_rpc_pb.SubaccountTradesListResponse|null) => void
  ): UnaryResponse;
}

