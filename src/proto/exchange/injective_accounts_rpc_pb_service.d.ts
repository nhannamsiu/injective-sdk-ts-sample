// package: injective_accounts_rpc
// file: exchange/injective_accounts_rpc.proto

import * as exchange_injective_accounts_rpc_pb from "../exchange/injective_accounts_rpc_pb";
import {grpc} from "@improbable-eng/grpc-web";

type InjectiveAccountsRPCSubaccountsList = {
  readonly methodName: string;
  readonly service: typeof InjectiveAccountsRPC;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof exchange_injective_accounts_rpc_pb.SubaccountsListRequest;
  readonly responseType: typeof exchange_injective_accounts_rpc_pb.SubaccountsListResponse;
};

type InjectiveAccountsRPCSubaccountBalancesList = {
  readonly methodName: string;
  readonly service: typeof InjectiveAccountsRPC;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof exchange_injective_accounts_rpc_pb.SubaccountBalancesListRequest;
  readonly responseType: typeof exchange_injective_accounts_rpc_pb.SubaccountBalancesListResponse;
};

type InjectiveAccountsRPCSubaccountBalanceEndpoint = {
  readonly methodName: string;
  readonly service: typeof InjectiveAccountsRPC;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof exchange_injective_accounts_rpc_pb.SubaccountBalanceRequest;
  readonly responseType: typeof exchange_injective_accounts_rpc_pb.SubaccountBalanceResponse;
};

type InjectiveAccountsRPCStreamSubaccountBalance = {
  readonly methodName: string;
  readonly service: typeof InjectiveAccountsRPC;
  readonly requestStream: false;
  readonly responseStream: true;
  readonly requestType: typeof exchange_injective_accounts_rpc_pb.StreamSubaccountBalanceRequest;
  readonly responseType: typeof exchange_injective_accounts_rpc_pb.StreamSubaccountBalanceResponse;
};

type InjectiveAccountsRPCSubaccountHistory = {
  readonly methodName: string;
  readonly service: typeof InjectiveAccountsRPC;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof exchange_injective_accounts_rpc_pb.SubaccountHistoryRequest;
  readonly responseType: typeof exchange_injective_accounts_rpc_pb.SubaccountHistoryResponse;
};

type InjectiveAccountsRPCSubaccountOrderSummary = {
  readonly methodName: string;
  readonly service: typeof InjectiveAccountsRPC;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof exchange_injective_accounts_rpc_pb.SubaccountOrderSummaryRequest;
  readonly responseType: typeof exchange_injective_accounts_rpc_pb.SubaccountOrderSummaryResponse;
};

export class InjectiveAccountsRPC {
  static readonly serviceName: string;
  static readonly SubaccountsList: InjectiveAccountsRPCSubaccountsList;
  static readonly SubaccountBalancesList: InjectiveAccountsRPCSubaccountBalancesList;
  static readonly SubaccountBalanceEndpoint: InjectiveAccountsRPCSubaccountBalanceEndpoint;
  static readonly StreamSubaccountBalance: InjectiveAccountsRPCStreamSubaccountBalance;
  static readonly SubaccountHistory: InjectiveAccountsRPCSubaccountHistory;
  static readonly SubaccountOrderSummary: InjectiveAccountsRPCSubaccountOrderSummary;
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

export class InjectiveAccountsRPCClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  subaccountsList(
    requestMessage: exchange_injective_accounts_rpc_pb.SubaccountsListRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: exchange_injective_accounts_rpc_pb.SubaccountsListResponse|null) => void
  ): UnaryResponse;
  subaccountsList(
    requestMessage: exchange_injective_accounts_rpc_pb.SubaccountsListRequest,
    callback: (error: ServiceError|null, responseMessage: exchange_injective_accounts_rpc_pb.SubaccountsListResponse|null) => void
  ): UnaryResponse;
  subaccountBalancesList(
    requestMessage: exchange_injective_accounts_rpc_pb.SubaccountBalancesListRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: exchange_injective_accounts_rpc_pb.SubaccountBalancesListResponse|null) => void
  ): UnaryResponse;
  subaccountBalancesList(
    requestMessage: exchange_injective_accounts_rpc_pb.SubaccountBalancesListRequest,
    callback: (error: ServiceError|null, responseMessage: exchange_injective_accounts_rpc_pb.SubaccountBalancesListResponse|null) => void
  ): UnaryResponse;
  subaccountBalanceEndpoint(
    requestMessage: exchange_injective_accounts_rpc_pb.SubaccountBalanceRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: exchange_injective_accounts_rpc_pb.SubaccountBalanceResponse|null) => void
  ): UnaryResponse;
  subaccountBalanceEndpoint(
    requestMessage: exchange_injective_accounts_rpc_pb.SubaccountBalanceRequest,
    callback: (error: ServiceError|null, responseMessage: exchange_injective_accounts_rpc_pb.SubaccountBalanceResponse|null) => void
  ): UnaryResponse;
  streamSubaccountBalance(requestMessage: exchange_injective_accounts_rpc_pb.StreamSubaccountBalanceRequest, metadata?: grpc.Metadata): ResponseStream<exchange_injective_accounts_rpc_pb.StreamSubaccountBalanceResponse>;
  subaccountHistory(
    requestMessage: exchange_injective_accounts_rpc_pb.SubaccountHistoryRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: exchange_injective_accounts_rpc_pb.SubaccountHistoryResponse|null) => void
  ): UnaryResponse;
  subaccountHistory(
    requestMessage: exchange_injective_accounts_rpc_pb.SubaccountHistoryRequest,
    callback: (error: ServiceError|null, responseMessage: exchange_injective_accounts_rpc_pb.SubaccountHistoryResponse|null) => void
  ): UnaryResponse;
  subaccountOrderSummary(
    requestMessage: exchange_injective_accounts_rpc_pb.SubaccountOrderSummaryRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: exchange_injective_accounts_rpc_pb.SubaccountOrderSummaryResponse|null) => void
  ): UnaryResponse;
  subaccountOrderSummary(
    requestMessage: exchange_injective_accounts_rpc_pb.SubaccountOrderSummaryRequest,
    callback: (error: ServiceError|null, responseMessage: exchange_injective_accounts_rpc_pb.SubaccountOrderSummaryResponse|null) => void
  ): UnaryResponse;
}

