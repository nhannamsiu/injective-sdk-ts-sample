// package: injective.exchange.v1beta1
// file: injective/exchange/v1beta1/tx.proto

import * as injective_exchange_v1beta1_tx_pb from "../../../injective/exchange/v1beta1/tx_pb";
import {grpc} from "@improbable-eng/grpc-web";

type MsgDeposit = {
  readonly methodName: string;
  readonly service: typeof Msg;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof injective_exchange_v1beta1_tx_pb.MsgDeposit;
  readonly responseType: typeof injective_exchange_v1beta1_tx_pb.MsgDepositResponse;
};

type MsgWithdraw = {
  readonly methodName: string;
  readonly service: typeof Msg;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof injective_exchange_v1beta1_tx_pb.MsgWithdraw;
  readonly responseType: typeof injective_exchange_v1beta1_tx_pb.MsgWithdrawResponse;
};

type MsgInstantSpotMarketLaunch = {
  readonly methodName: string;
  readonly service: typeof Msg;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof injective_exchange_v1beta1_tx_pb.MsgInstantSpotMarketLaunch;
  readonly responseType: typeof injective_exchange_v1beta1_tx_pb.MsgInstantSpotMarketLaunchResponse;
};

type MsgInstantPerpetualMarketLaunch = {
  readonly methodName: string;
  readonly service: typeof Msg;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof injective_exchange_v1beta1_tx_pb.MsgInstantPerpetualMarketLaunch;
  readonly responseType: typeof injective_exchange_v1beta1_tx_pb.MsgInstantPerpetualMarketLaunchResponse;
};

type MsgInstantExpiryFuturesMarketLaunch = {
  readonly methodName: string;
  readonly service: typeof Msg;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof injective_exchange_v1beta1_tx_pb.MsgInstantExpiryFuturesMarketLaunch;
  readonly responseType: typeof injective_exchange_v1beta1_tx_pb.MsgInstantExpiryFuturesMarketLaunchResponse;
};

type MsgCreateSpotLimitOrder = {
  readonly methodName: string;
  readonly service: typeof Msg;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof injective_exchange_v1beta1_tx_pb.MsgCreateSpotLimitOrder;
  readonly responseType: typeof injective_exchange_v1beta1_tx_pb.MsgCreateSpotLimitOrderResponse;
};

type MsgBatchCreateSpotLimitOrders = {
  readonly methodName: string;
  readonly service: typeof Msg;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof injective_exchange_v1beta1_tx_pb.MsgBatchCreateSpotLimitOrders;
  readonly responseType: typeof injective_exchange_v1beta1_tx_pb.MsgBatchCreateSpotLimitOrdersResponse;
};

type MsgCreateSpotMarketOrder = {
  readonly methodName: string;
  readonly service: typeof Msg;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof injective_exchange_v1beta1_tx_pb.MsgCreateSpotMarketOrder;
  readonly responseType: typeof injective_exchange_v1beta1_tx_pb.MsgCreateSpotMarketOrderResponse;
};

type MsgCancelSpotOrder = {
  readonly methodName: string;
  readonly service: typeof Msg;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof injective_exchange_v1beta1_tx_pb.MsgCancelSpotOrder;
  readonly responseType: typeof injective_exchange_v1beta1_tx_pb.MsgCancelSpotOrderResponse;
};

type MsgBatchCancelSpotOrders = {
  readonly methodName: string;
  readonly service: typeof Msg;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof injective_exchange_v1beta1_tx_pb.MsgBatchCancelSpotOrders;
  readonly responseType: typeof injective_exchange_v1beta1_tx_pb.MsgBatchCancelSpotOrdersResponse;
};

type MsgCreateDerivativeLimitOrder = {
  readonly methodName: string;
  readonly service: typeof Msg;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof injective_exchange_v1beta1_tx_pb.MsgCreateDerivativeLimitOrder;
  readonly responseType: typeof injective_exchange_v1beta1_tx_pb.MsgCreateDerivativeLimitOrderResponse;
};

type MsgBatchCreateDerivativeLimitOrders = {
  readonly methodName: string;
  readonly service: typeof Msg;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof injective_exchange_v1beta1_tx_pb.MsgBatchCreateDerivativeLimitOrders;
  readonly responseType: typeof injective_exchange_v1beta1_tx_pb.MsgBatchCreateDerivativeLimitOrdersResponse;
};

type MsgCreateDerivativeMarketOrder = {
  readonly methodName: string;
  readonly service: typeof Msg;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof injective_exchange_v1beta1_tx_pb.MsgCreateDerivativeMarketOrder;
  readonly responseType: typeof injective_exchange_v1beta1_tx_pb.MsgCreateDerivativeMarketOrderResponse;
};

type MsgCancelDerivativeOrder = {
  readonly methodName: string;
  readonly service: typeof Msg;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof injective_exchange_v1beta1_tx_pb.MsgCancelDerivativeOrder;
  readonly responseType: typeof injective_exchange_v1beta1_tx_pb.MsgCancelDerivativeOrderResponse;
};

type MsgBatchCancelDerivativeOrders = {
  readonly methodName: string;
  readonly service: typeof Msg;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof injective_exchange_v1beta1_tx_pb.MsgBatchCancelDerivativeOrders;
  readonly responseType: typeof injective_exchange_v1beta1_tx_pb.MsgBatchCancelDerivativeOrdersResponse;
};

type MsgSubaccountTransfer = {
  readonly methodName: string;
  readonly service: typeof Msg;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof injective_exchange_v1beta1_tx_pb.MsgSubaccountTransfer;
  readonly responseType: typeof injective_exchange_v1beta1_tx_pb.MsgSubaccountTransferResponse;
};

type MsgExternalTransfer = {
  readonly methodName: string;
  readonly service: typeof Msg;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof injective_exchange_v1beta1_tx_pb.MsgExternalTransfer;
  readonly responseType: typeof injective_exchange_v1beta1_tx_pb.MsgExternalTransferResponse;
};

type MsgLiquidatePosition = {
  readonly methodName: string;
  readonly service: typeof Msg;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof injective_exchange_v1beta1_tx_pb.MsgLiquidatePosition;
  readonly responseType: typeof injective_exchange_v1beta1_tx_pb.MsgLiquidatePositionResponse;
};

type MsgIncreasePositionMargin = {
  readonly methodName: string;
  readonly service: typeof Msg;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof injective_exchange_v1beta1_tx_pb.MsgIncreasePositionMargin;
  readonly responseType: typeof injective_exchange_v1beta1_tx_pb.MsgIncreasePositionMarginResponse;
};

export class Msg {
  static readonly serviceName: string;
  static readonly Deposit: MsgDeposit;
  static readonly Withdraw: MsgWithdraw;
  static readonly InstantSpotMarketLaunch: MsgInstantSpotMarketLaunch;
  static readonly InstantPerpetualMarketLaunch: MsgInstantPerpetualMarketLaunch;
  static readonly InstantExpiryFuturesMarketLaunch: MsgInstantExpiryFuturesMarketLaunch;
  static readonly CreateSpotLimitOrder: MsgCreateSpotLimitOrder;
  static readonly BatchCreateSpotLimitOrders: MsgBatchCreateSpotLimitOrders;
  static readonly CreateSpotMarketOrder: MsgCreateSpotMarketOrder;
  static readonly CancelSpotOrder: MsgCancelSpotOrder;
  static readonly BatchCancelSpotOrders: MsgBatchCancelSpotOrders;
  static readonly CreateDerivativeLimitOrder: MsgCreateDerivativeLimitOrder;
  static readonly BatchCreateDerivativeLimitOrders: MsgBatchCreateDerivativeLimitOrders;
  static readonly CreateDerivativeMarketOrder: MsgCreateDerivativeMarketOrder;
  static readonly CancelDerivativeOrder: MsgCancelDerivativeOrder;
  static readonly BatchCancelDerivativeOrders: MsgBatchCancelDerivativeOrders;
  static readonly SubaccountTransfer: MsgSubaccountTransfer;
  static readonly ExternalTransfer: MsgExternalTransfer;
  static readonly LiquidatePosition: MsgLiquidatePosition;
  static readonly IncreasePositionMargin: MsgIncreasePositionMargin;
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
  deposit(
    requestMessage: injective_exchange_v1beta1_tx_pb.MsgDeposit,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: injective_exchange_v1beta1_tx_pb.MsgDepositResponse|null) => void
  ): UnaryResponse;
  deposit(
    requestMessage: injective_exchange_v1beta1_tx_pb.MsgDeposit,
    callback: (error: ServiceError|null, responseMessage: injective_exchange_v1beta1_tx_pb.MsgDepositResponse|null) => void
  ): UnaryResponse;
  withdraw(
    requestMessage: injective_exchange_v1beta1_tx_pb.MsgWithdraw,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: injective_exchange_v1beta1_tx_pb.MsgWithdrawResponse|null) => void
  ): UnaryResponse;
  withdraw(
    requestMessage: injective_exchange_v1beta1_tx_pb.MsgWithdraw,
    callback: (error: ServiceError|null, responseMessage: injective_exchange_v1beta1_tx_pb.MsgWithdrawResponse|null) => void
  ): UnaryResponse;
  instantSpotMarketLaunch(
    requestMessage: injective_exchange_v1beta1_tx_pb.MsgInstantSpotMarketLaunch,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: injective_exchange_v1beta1_tx_pb.MsgInstantSpotMarketLaunchResponse|null) => void
  ): UnaryResponse;
  instantSpotMarketLaunch(
    requestMessage: injective_exchange_v1beta1_tx_pb.MsgInstantSpotMarketLaunch,
    callback: (error: ServiceError|null, responseMessage: injective_exchange_v1beta1_tx_pb.MsgInstantSpotMarketLaunchResponse|null) => void
  ): UnaryResponse;
  instantPerpetualMarketLaunch(
    requestMessage: injective_exchange_v1beta1_tx_pb.MsgInstantPerpetualMarketLaunch,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: injective_exchange_v1beta1_tx_pb.MsgInstantPerpetualMarketLaunchResponse|null) => void
  ): UnaryResponse;
  instantPerpetualMarketLaunch(
    requestMessage: injective_exchange_v1beta1_tx_pb.MsgInstantPerpetualMarketLaunch,
    callback: (error: ServiceError|null, responseMessage: injective_exchange_v1beta1_tx_pb.MsgInstantPerpetualMarketLaunchResponse|null) => void
  ): UnaryResponse;
  instantExpiryFuturesMarketLaunch(
    requestMessage: injective_exchange_v1beta1_tx_pb.MsgInstantExpiryFuturesMarketLaunch,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: injective_exchange_v1beta1_tx_pb.MsgInstantExpiryFuturesMarketLaunchResponse|null) => void
  ): UnaryResponse;
  instantExpiryFuturesMarketLaunch(
    requestMessage: injective_exchange_v1beta1_tx_pb.MsgInstantExpiryFuturesMarketLaunch,
    callback: (error: ServiceError|null, responseMessage: injective_exchange_v1beta1_tx_pb.MsgInstantExpiryFuturesMarketLaunchResponse|null) => void
  ): UnaryResponse;
  createSpotLimitOrder(
    requestMessage: injective_exchange_v1beta1_tx_pb.MsgCreateSpotLimitOrder,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: injective_exchange_v1beta1_tx_pb.MsgCreateSpotLimitOrderResponse|null) => void
  ): UnaryResponse;
  createSpotLimitOrder(
    requestMessage: injective_exchange_v1beta1_tx_pb.MsgCreateSpotLimitOrder,
    callback: (error: ServiceError|null, responseMessage: injective_exchange_v1beta1_tx_pb.MsgCreateSpotLimitOrderResponse|null) => void
  ): UnaryResponse;
  batchCreateSpotLimitOrders(
    requestMessage: injective_exchange_v1beta1_tx_pb.MsgBatchCreateSpotLimitOrders,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: injective_exchange_v1beta1_tx_pb.MsgBatchCreateSpotLimitOrdersResponse|null) => void
  ): UnaryResponse;
  batchCreateSpotLimitOrders(
    requestMessage: injective_exchange_v1beta1_tx_pb.MsgBatchCreateSpotLimitOrders,
    callback: (error: ServiceError|null, responseMessage: injective_exchange_v1beta1_tx_pb.MsgBatchCreateSpotLimitOrdersResponse|null) => void
  ): UnaryResponse;
  createSpotMarketOrder(
    requestMessage: injective_exchange_v1beta1_tx_pb.MsgCreateSpotMarketOrder,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: injective_exchange_v1beta1_tx_pb.MsgCreateSpotMarketOrderResponse|null) => void
  ): UnaryResponse;
  createSpotMarketOrder(
    requestMessage: injective_exchange_v1beta1_tx_pb.MsgCreateSpotMarketOrder,
    callback: (error: ServiceError|null, responseMessage: injective_exchange_v1beta1_tx_pb.MsgCreateSpotMarketOrderResponse|null) => void
  ): UnaryResponse;
  cancelSpotOrder(
    requestMessage: injective_exchange_v1beta1_tx_pb.MsgCancelSpotOrder,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: injective_exchange_v1beta1_tx_pb.MsgCancelSpotOrderResponse|null) => void
  ): UnaryResponse;
  cancelSpotOrder(
    requestMessage: injective_exchange_v1beta1_tx_pb.MsgCancelSpotOrder,
    callback: (error: ServiceError|null, responseMessage: injective_exchange_v1beta1_tx_pb.MsgCancelSpotOrderResponse|null) => void
  ): UnaryResponse;
  batchCancelSpotOrders(
    requestMessage: injective_exchange_v1beta1_tx_pb.MsgBatchCancelSpotOrders,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: injective_exchange_v1beta1_tx_pb.MsgBatchCancelSpotOrdersResponse|null) => void
  ): UnaryResponse;
  batchCancelSpotOrders(
    requestMessage: injective_exchange_v1beta1_tx_pb.MsgBatchCancelSpotOrders,
    callback: (error: ServiceError|null, responseMessage: injective_exchange_v1beta1_tx_pb.MsgBatchCancelSpotOrdersResponse|null) => void
  ): UnaryResponse;
  createDerivativeLimitOrder(
    requestMessage: injective_exchange_v1beta1_tx_pb.MsgCreateDerivativeLimitOrder,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: injective_exchange_v1beta1_tx_pb.MsgCreateDerivativeLimitOrderResponse|null) => void
  ): UnaryResponse;
  createDerivativeLimitOrder(
    requestMessage: injective_exchange_v1beta1_tx_pb.MsgCreateDerivativeLimitOrder,
    callback: (error: ServiceError|null, responseMessage: injective_exchange_v1beta1_tx_pb.MsgCreateDerivativeLimitOrderResponse|null) => void
  ): UnaryResponse;
  batchCreateDerivativeLimitOrders(
    requestMessage: injective_exchange_v1beta1_tx_pb.MsgBatchCreateDerivativeLimitOrders,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: injective_exchange_v1beta1_tx_pb.MsgBatchCreateDerivativeLimitOrdersResponse|null) => void
  ): UnaryResponse;
  batchCreateDerivativeLimitOrders(
    requestMessage: injective_exchange_v1beta1_tx_pb.MsgBatchCreateDerivativeLimitOrders,
    callback: (error: ServiceError|null, responseMessage: injective_exchange_v1beta1_tx_pb.MsgBatchCreateDerivativeLimitOrdersResponse|null) => void
  ): UnaryResponse;
  createDerivativeMarketOrder(
    requestMessage: injective_exchange_v1beta1_tx_pb.MsgCreateDerivativeMarketOrder,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: injective_exchange_v1beta1_tx_pb.MsgCreateDerivativeMarketOrderResponse|null) => void
  ): UnaryResponse;
  createDerivativeMarketOrder(
    requestMessage: injective_exchange_v1beta1_tx_pb.MsgCreateDerivativeMarketOrder,
    callback: (error: ServiceError|null, responseMessage: injective_exchange_v1beta1_tx_pb.MsgCreateDerivativeMarketOrderResponse|null) => void
  ): UnaryResponse;
  cancelDerivativeOrder(
    requestMessage: injective_exchange_v1beta1_tx_pb.MsgCancelDerivativeOrder,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: injective_exchange_v1beta1_tx_pb.MsgCancelDerivativeOrderResponse|null) => void
  ): UnaryResponse;
  cancelDerivativeOrder(
    requestMessage: injective_exchange_v1beta1_tx_pb.MsgCancelDerivativeOrder,
    callback: (error: ServiceError|null, responseMessage: injective_exchange_v1beta1_tx_pb.MsgCancelDerivativeOrderResponse|null) => void
  ): UnaryResponse;
  batchCancelDerivativeOrders(
    requestMessage: injective_exchange_v1beta1_tx_pb.MsgBatchCancelDerivativeOrders,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: injective_exchange_v1beta1_tx_pb.MsgBatchCancelDerivativeOrdersResponse|null) => void
  ): UnaryResponse;
  batchCancelDerivativeOrders(
    requestMessage: injective_exchange_v1beta1_tx_pb.MsgBatchCancelDerivativeOrders,
    callback: (error: ServiceError|null, responseMessage: injective_exchange_v1beta1_tx_pb.MsgBatchCancelDerivativeOrdersResponse|null) => void
  ): UnaryResponse;
  subaccountTransfer(
    requestMessage: injective_exchange_v1beta1_tx_pb.MsgSubaccountTransfer,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: injective_exchange_v1beta1_tx_pb.MsgSubaccountTransferResponse|null) => void
  ): UnaryResponse;
  subaccountTransfer(
    requestMessage: injective_exchange_v1beta1_tx_pb.MsgSubaccountTransfer,
    callback: (error: ServiceError|null, responseMessage: injective_exchange_v1beta1_tx_pb.MsgSubaccountTransferResponse|null) => void
  ): UnaryResponse;
  externalTransfer(
    requestMessage: injective_exchange_v1beta1_tx_pb.MsgExternalTransfer,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: injective_exchange_v1beta1_tx_pb.MsgExternalTransferResponse|null) => void
  ): UnaryResponse;
  externalTransfer(
    requestMessage: injective_exchange_v1beta1_tx_pb.MsgExternalTransfer,
    callback: (error: ServiceError|null, responseMessage: injective_exchange_v1beta1_tx_pb.MsgExternalTransferResponse|null) => void
  ): UnaryResponse;
  liquidatePosition(
    requestMessage: injective_exchange_v1beta1_tx_pb.MsgLiquidatePosition,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: injective_exchange_v1beta1_tx_pb.MsgLiquidatePositionResponse|null) => void
  ): UnaryResponse;
  liquidatePosition(
    requestMessage: injective_exchange_v1beta1_tx_pb.MsgLiquidatePosition,
    callback: (error: ServiceError|null, responseMessage: injective_exchange_v1beta1_tx_pb.MsgLiquidatePositionResponse|null) => void
  ): UnaryResponse;
  increasePositionMargin(
    requestMessage: injective_exchange_v1beta1_tx_pb.MsgIncreasePositionMargin,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: injective_exchange_v1beta1_tx_pb.MsgIncreasePositionMarginResponse|null) => void
  ): UnaryResponse;
  increasePositionMargin(
    requestMessage: injective_exchange_v1beta1_tx_pb.MsgIncreasePositionMargin,
    callback: (error: ServiceError|null, responseMessage: injective_exchange_v1beta1_tx_pb.MsgIncreasePositionMarginResponse|null) => void
  ): UnaryResponse;
}

