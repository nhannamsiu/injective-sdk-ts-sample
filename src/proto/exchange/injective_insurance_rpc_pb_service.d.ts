// package: injective_insurance_rpc
// file: exchange/injective_insurance_rpc.proto

import * as exchange_injective_insurance_rpc_pb from "../exchange/injective_insurance_rpc_pb";
import {grpc} from "@improbable-eng/grpc-web";

type InjectiveInsuranceRPCFunds = {
  readonly methodName: string;
  readonly service: typeof InjectiveInsuranceRPC;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof exchange_injective_insurance_rpc_pb.FundsRequest;
  readonly responseType: typeof exchange_injective_insurance_rpc_pb.FundsResponse;
};

type InjectiveInsuranceRPCRedemptions = {
  readonly methodName: string;
  readonly service: typeof InjectiveInsuranceRPC;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof exchange_injective_insurance_rpc_pb.RedemptionsRequest;
  readonly responseType: typeof exchange_injective_insurance_rpc_pb.RedemptionsResponse;
};

export class InjectiveInsuranceRPC {
  static readonly serviceName: string;
  static readonly Funds: InjectiveInsuranceRPCFunds;
  static readonly Redemptions: InjectiveInsuranceRPCRedemptions;
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

export class InjectiveInsuranceRPCClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  funds(
    requestMessage: exchange_injective_insurance_rpc_pb.FundsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: exchange_injective_insurance_rpc_pb.FundsResponse|null) => void
  ): UnaryResponse;
  funds(
    requestMessage: exchange_injective_insurance_rpc_pb.FundsRequest,
    callback: (error: ServiceError|null, responseMessage: exchange_injective_insurance_rpc_pb.FundsResponse|null) => void
  ): UnaryResponse;
  redemptions(
    requestMessage: exchange_injective_insurance_rpc_pb.RedemptionsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: exchange_injective_insurance_rpc_pb.RedemptionsResponse|null) => void
  ): UnaryResponse;
  redemptions(
    requestMessage: exchange_injective_insurance_rpc_pb.RedemptionsRequest,
    callback: (error: ServiceError|null, responseMessage: exchange_injective_insurance_rpc_pb.RedemptionsResponse|null) => void
  ): UnaryResponse;
}

