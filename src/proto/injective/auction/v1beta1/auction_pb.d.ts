// package: injective.auction.v1beta1
// file: injective/auction/v1beta1/auction.proto

import * as jspb from "google-protobuf";
import * as gogoproto_gogo_pb from "../../../gogoproto/gogo_pb";
import * as cosmos_base_v1beta1_coin_pb from "../../../cosmos/base/v1beta1/coin_pb";

export class Params extends jspb.Message {
  getAuctionPeriod(): number;
  setAuctionPeriod(value: number): void;

  getMinNextBidIncrementRate(): string;
  setMinNextBidIncrementRate(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Params.AsObject;
  static toObject(includeInstance: boolean, msg: Params): Params.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Params, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Params;
  static deserializeBinaryFromReader(message: Params, reader: jspb.BinaryReader): Params;
}

export namespace Params {
  export type AsObject = {
    auctionPeriod: number,
    minNextBidIncrementRate: string,
  }
}

export class Bid extends jspb.Message {
  getBidder(): string;
  setBidder(value: string): void;

  getAmount(): string;
  setAmount(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Bid.AsObject;
  static toObject(includeInstance: boolean, msg: Bid): Bid.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Bid, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Bid;
  static deserializeBinaryFromReader(message: Bid, reader: jspb.BinaryReader): Bid;
}

export namespace Bid {
  export type AsObject = {
    bidder: string,
    amount: string,
  }
}

export class EventBid extends jspb.Message {
  getBidder(): string;
  setBidder(value: string): void;

  getAmount(): string;
  setAmount(value: string): void;

  getRound(): number;
  setRound(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EventBid.AsObject;
  static toObject(includeInstance: boolean, msg: EventBid): EventBid.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EventBid, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EventBid;
  static deserializeBinaryFromReader(message: EventBid, reader: jspb.BinaryReader): EventBid;
}

export namespace EventBid {
  export type AsObject = {
    bidder: string,
    amount: string,
    round: number,
  }
}

export class EventAuctionResult extends jspb.Message {
  getWinner(): string;
  setWinner(value: string): void;

  getAmount(): string;
  setAmount(value: string): void;

  getRound(): number;
  setRound(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EventAuctionResult.AsObject;
  static toObject(includeInstance: boolean, msg: EventAuctionResult): EventAuctionResult.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EventAuctionResult, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EventAuctionResult;
  static deserializeBinaryFromReader(message: EventAuctionResult, reader: jspb.BinaryReader): EventAuctionResult;
}

export namespace EventAuctionResult {
  export type AsObject = {
    winner: string,
    amount: string,
    round: number,
  }
}

