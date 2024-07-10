// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v1.178.0
//   protoc               unknown
// source: stride/stakeibc/address_unbonding.proto

/* eslint-disable */
import * as _m0 from "protobufjs/minimal";
import Long = require("long");

export const protobufPackage = "stride.stakeibc";

export interface AddressUnbonding {
  address: string;
  receiver: string;
  unbondingEstimatedTime: string;
  amount: string;
  denom: string;
  claimIsPending: boolean;
  epochNumber: number;
}

function createBaseAddressUnbonding(): AddressUnbonding {
  return {
    address: "",
    receiver: "",
    unbondingEstimatedTime: "",
    amount: "",
    denom: "",
    claimIsPending: false,
    epochNumber: 0,
  };
}

export const AddressUnbonding = {
  encode(message: AddressUnbonding, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.receiver !== "") {
      writer.uint32(18).string(message.receiver);
    }
    if (message.unbondingEstimatedTime !== "") {
      writer.uint32(26).string(message.unbondingEstimatedTime);
    }
    if (message.amount !== "") {
      writer.uint32(34).string(message.amount);
    }
    if (message.denom !== "") {
      writer.uint32(42).string(message.denom);
    }
    if (message.claimIsPending !== false) {
      writer.uint32(64).bool(message.claimIsPending);
    }
    if (message.epochNumber !== 0) {
      writer.uint32(72).uint64(message.epochNumber);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AddressUnbonding {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAddressUnbonding();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.address = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.receiver = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.unbondingEstimatedTime = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.amount = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.denom = reader.string();
          continue;
        case 8:
          if (tag !== 64) {
            break;
          }

          message.claimIsPending = reader.bool();
          continue;
        case 9:
          if (tag !== 72) {
            break;
          }

          message.epochNumber = longToNumber(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AddressUnbonding {
    return {
      address: isSet(object.address) ? gt.String(object.address) : "",
      receiver: isSet(object.receiver) ? gt.String(object.receiver) : "",
      unbondingEstimatedTime: isSet(object.unbondingEstimatedTime) ? gt.String(object.unbondingEstimatedTime) : "",
      amount: isSet(object.amount) ? gt.String(object.amount) : "",
      denom: isSet(object.denom) ? gt.String(object.denom) : "",
      claimIsPending: isSet(object.claimIsPending) ? gt.Boolean(object.claimIsPending) : false,
      epochNumber: isSet(object.epochNumber) ? gt.Number(object.epochNumber) : 0,
    };
  },

  toJSON(message: AddressUnbonding): unknown {
    const obj: any = {};
    if (message.address !== "") {
      obj.address = message.address;
    }
    if (message.receiver !== "") {
      obj.receiver = message.receiver;
    }
    if (message.unbondingEstimatedTime !== "") {
      obj.unbondingEstimatedTime = message.unbondingEstimatedTime;
    }
    if (message.amount !== "") {
      obj.amount = message.amount;
    }
    if (message.denom !== "") {
      obj.denom = message.denom;
    }
    if (message.claimIsPending !== false) {
      obj.claimIsPending = message.claimIsPending;
    }
    if (message.epochNumber !== 0) {
      obj.epochNumber = Math.round(message.epochNumber);
    }
    return obj;
  },

  create(base?: DeepPartial<AddressUnbonding>): AddressUnbonding {
    return AddressUnbonding.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<AddressUnbonding>): AddressUnbonding {
    const message = createBaseAddressUnbonding();
    message.address = object.address ?? "";
    message.receiver = object.receiver ?? "";
    message.unbondingEstimatedTime = object.unbondingEstimatedTime ?? "";
    message.amount = object.amount ?? "";
    message.denom = object.denom ?? "";
    message.claimIsPending = object.claimIsPending ?? false;
    message.epochNumber = object.epochNumber ?? 0;
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

function longToNumber(long: Long): number {
  if (long.gt(gt.Number.MAX_SAFE_INTEGER)) {
    throw new gt.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  if (long.lt(gt.Number.MIN_SAFE_INTEGER)) {
    throw new gt.Error("Value is smaller than Number.MIN_SAFE_INTEGER");
  }
  return long.toNumber();
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
