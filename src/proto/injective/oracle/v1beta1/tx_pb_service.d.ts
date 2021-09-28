// package: injective.oracle.v1beta1
// file: injective/oracle/v1beta1/tx.proto

import * as injective_oracle_v1beta1_tx_pb from "../../../injective/oracle/v1beta1/tx_pb";
import {grpc} from "@improbable-eng/grpc-web";

type MsgRelayPriceFeedPrice = {
  readonly methodName: string;
  readonly service: typeof Msg;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof injective_oracle_v1beta1_tx_pb.MsgRelayPriceFeedPrice;
  readonly responseType: typeof injective_oracle_v1beta1_tx_pb.MsgRelayPriceFeedPriceResponse;
};

type MsgRelayBandRates = {
  readonly methodName: string;
  readonly service: typeof Msg;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof injective_oracle_v1beta1_tx_pb.MsgRelayBandRates;
  readonly responseType: typeof injective_oracle_v1beta1_tx_pb.MsgRelayBandRatesResponse;
};

type MsgRequestBandIBCRates = {
  readonly methodName: string;
  readonly service: typeof Msg;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof injective_oracle_v1beta1_tx_pb.MsgRequestBandIBCRates;
  readonly responseType: typeof injective_oracle_v1beta1_tx_pb.MsgRequestBandIBCRatesResponse;
};

type MsgRelayCoinbaseMessages = {
  readonly methodName: string;
  readonly service: typeof Msg;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof injective_oracle_v1beta1_tx_pb.MsgRelayCoinbaseMessages;
  readonly responseType: typeof injective_oracle_v1beta1_tx_pb.MsgRelayCoinbaseMessagesResponse;
};

export class Msg {
  static readonly serviceName: string;
  static readonly RelayPriceFeedPrice: MsgRelayPriceFeedPrice;
  static readonly RelayBandRates: MsgRelayBandRates;
  static readonly RequestBandIBCRates: MsgRequestBandIBCRates;
  static readonly RelayCoinbaseMessages: MsgRelayCoinbaseMessages;
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

export class MsgClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  relayPriceFeedPrice(
    requestMessage: injective_oracle_v1beta1_tx_pb.MsgRelayPriceFeedPrice,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: injective_oracle_v1beta1_tx_pb.MsgRelayPriceFeedPriceResponse|null) => void
  ): UnaryResponse;
  relayPriceFeedPrice(
    requestMessage: injective_oracle_v1beta1_tx_pb.MsgRelayPriceFeedPrice,
    callback: (error: ServiceError|null, responseMessage: injective_oracle_v1beta1_tx_pb.MsgRelayPriceFeedPriceResponse|null) => void
  ): UnaryResponse;
  relayBandRates(
    requestMessage: injective_oracle_v1beta1_tx_pb.MsgRelayBandRates,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: injective_oracle_v1beta1_tx_pb.MsgRelayBandRatesResponse|null) => void
  ): UnaryResponse;
  relayBandRates(
    requestMessage: injective_oracle_v1beta1_tx_pb.MsgRelayBandRates,
    callback: (error: ServiceError|null, responseMessage: injective_oracle_v1beta1_tx_pb.MsgRelayBandRatesResponse|null) => void
  ): UnaryResponse;
  requestBandIBCRates(
    requestMessage: injective_oracle_v1beta1_tx_pb.MsgRequestBandIBCRates,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: injective_oracle_v1beta1_tx_pb.MsgRequestBandIBCRatesResponse|null) => void
  ): UnaryResponse;
  requestBandIBCRates(
    requestMessage: injective_oracle_v1beta1_tx_pb.MsgRequestBandIBCRates,
    callback: (error: ServiceError|null, responseMessage: injective_oracle_v1beta1_tx_pb.MsgRequestBandIBCRatesResponse|null) => void
  ): UnaryResponse;
  relayCoinbaseMessages(
    requestMessage: injective_oracle_v1beta1_tx_pb.MsgRelayCoinbaseMessages,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: injective_oracle_v1beta1_tx_pb.MsgRelayCoinbaseMessagesResponse|null) => void
  ): UnaryResponse;
  relayCoinbaseMessages(
    requestMessage: injective_oracle_v1beta1_tx_pb.MsgRelayCoinbaseMessages,
    callback: (error: ServiceError|null, responseMessage: injective_oracle_v1beta1_tx_pb.MsgRelayCoinbaseMessagesResponse|null) => void
  ): UnaryResponse;
}

