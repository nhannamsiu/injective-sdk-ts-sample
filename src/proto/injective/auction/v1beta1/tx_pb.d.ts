// package: injective.auction.v1beta1
// file: injective/auction/v1beta1/tx.proto

import * as jspb from "google-protobuf";
import * as gogoproto_gogo_pb from "../../../gogoproto/gogo_pb";
import * as cosmos_base_v1beta1_coin_pb from "../../../cosmos/base/v1beta1/coin_pb";
import * as injective_auction_v1beta1_auction_pb from "../../../injective/auction/v1beta1/auction_pb";

export class MsgBid extends jspb.Message {
  getSender(): string;
  setSender(value: string): void;

  hasBidAmount(): boolean;
  clearBidAmount(): void;
  getBidAmount(): cosmos_base_v1beta1_coin_pb.Coin | undefined;
  setBidAmount(value?: cosmos_base_v1beta1_coin_pb.Coin): void;

  getRound(): number;
  setRound(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgBid.AsObject;
  static toObject(includeInstance: boolean, msg: MsgBid): MsgBid.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MsgBid, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgBid;
  static deserializeBinaryFromReader(message: MsgBid, reader: jspb.BinaryReader): MsgBid;
}

export namespace MsgBid {
  export type AsObject = {
    sender: string,
    bidAmount?: cosmos_base_v1beta1_coin_pb.Coin.AsObject,
    round: number,
  }
}

export class MsgBidResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MsgBidResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MsgBidResponse): MsgBidResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MsgBidResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MsgBidResponse;
  static deserializeBinaryFromReader(message: MsgBidResponse, reader: jspb.BinaryReader): MsgBidResponse;
}

export namespace MsgBidResponse {
  export type AsObject = {
  }
}

