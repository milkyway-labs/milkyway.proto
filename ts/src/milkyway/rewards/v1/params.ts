// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.3.0
//   protoc               unknown
// source: milkyway/rewards/v1/params.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { Coin } from "../../../cosmos/base/v1beta1/coin";

export const protobufPackage = "milkyway.rewards.v1";

/** Params defines the parameters for the module. */
export interface Params {
  /**
   * RewardsPlanCreationFee represents the fee that an account must pay in
   * order to create a rewards plan.
   * The fee is drawn from the MsgCreateRewardsPlan sender's account and
   * transferred to the community pool.
   */
  rewardsPlanCreationFee: Coin[];
}

function createBaseParams(): Params {
  return { rewardsPlanCreationFee: [] };
}

export const Params: MessageFns<Params> = {
  encode(message: Params, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    for (const v of message.rewardsPlanCreationFee) {
      Coin.encode(v!, writer.uint32(10).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): Params {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          message.rewardsPlanCreationFee.push(Coin.decode(reader, reader.uint32()));
          continue;
        }
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Params {
    return {
      rewardsPlanCreationFee: gt.Array.isArray(object?.rewardsPlanCreationFee)
        ? object.rewardsPlanCreationFee.map((e: any) => Coin.fromJSON(e))
        : [],
    };
  },

  toJSON(message: Params): unknown {
    const obj: any = {};
    if (message.rewardsPlanCreationFee?.length) {
      obj.rewardsPlanCreationFee = message.rewardsPlanCreationFee.map((e) => Coin.toJSON(e));
    }
    return obj;
  },

  create(base?: DeepPartial<Params>): Params {
    return Params.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Params>): Params {
    const message = createBaseParams();
    message.rewardsPlanCreationFee = object.rewardsPlanCreationFee?.map((e) => Coin.fromPartial(e)) || [];
    return message;
  },
};

declare const self: any | undefined;
declare const window: any | undefined;
declare const global: any | undefined;
const gt: any = (() => {
  if (typeof globalThis !== "undefined") {
    return globalThis;
  }
  if (typeof self !== "undefined") {
    return self;
  }
  if (typeof window !== "undefined") {
    return window;
  }
  if (typeof global !== "undefined") {
    return global;
  }
  throw "Unable to locate global object";
})();

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

export interface MessageFns<T> {
  encode(message: T, writer?: BinaryWriter): BinaryWriter;
  decode(input: BinaryReader | Uint8Array, length?: number): T;
  fromJSON(object: any): T;
  toJSON(message: T): unknown;
  create(base?: DeepPartial<T>): T;
  fromPartial(object: DeepPartial<T>): T;
}
