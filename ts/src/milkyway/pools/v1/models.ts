// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.3.0
//   protoc               unknown
// source: milkyway/pools/v1/models.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";

export const protobufPackage = "milkyway.pools.v1";

/** Pool defines the structure of a restaking pool */
export interface Pool {
  /** ID is the auto-generated unique identifier for the pool */
  id: number;
  /** Denom represents the denomination of the tokens that are staked in the pool */
  denom: string;
  /**
   * Address represents the address of the account that is associated with this
   * pool. This will be used to store tokens that users delegate to this pool.
   */
  address: string;
  /** Tokens define the delegated tokens. */
  tokens: string;
  /** DelegatorShares defines total shares issued to a pool's delegators. */
  delegatorShares: string;
}

function createBasePool(): Pool {
  return { id: 0, denom: "", address: "", tokens: "", delegatorShares: "" };
}

export const Pool: MessageFns<Pool> = {
  encode(message: Pool, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.id !== 0) {
      writer.uint32(8).uint32(message.id);
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    if (message.address !== "") {
      writer.uint32(26).string(message.address);
    }
    if (message.tokens !== "") {
      writer.uint32(34).string(message.tokens);
    }
    if (message.delegatorShares !== "") {
      writer.uint32(42).string(message.delegatorShares);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): Pool {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePool();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 8) {
            break;
          }

          message.id = reader.uint32();
          continue;
        }
        case 2: {
          if (tag !== 18) {
            break;
          }

          message.denom = reader.string();
          continue;
        }
        case 3: {
          if (tag !== 26) {
            break;
          }

          message.address = reader.string();
          continue;
        }
        case 4: {
          if (tag !== 34) {
            break;
          }

          message.tokens = reader.string();
          continue;
        }
        case 5: {
          if (tag !== 42) {
            break;
          }

          message.delegatorShares = reader.string();
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

  fromJSON(object: any): Pool {
    return {
      id: isSet(object.id) ? gt.Number(object.id) : 0,
      denom: isSet(object.denom) ? gt.String(object.denom) : "",
      address: isSet(object.address) ? gt.String(object.address) : "",
      tokens: isSet(object.tokens) ? gt.String(object.tokens) : "",
      delegatorShares: isSet(object.delegatorShares) ? gt.String(object.delegatorShares) : "",
    };
  },

  toJSON(message: Pool): unknown {
    const obj: any = {};
    if (message.id !== 0) {
      obj.id = Math.round(message.id);
    }
    if (message.denom !== "") {
      obj.denom = message.denom;
    }
    if (message.address !== "") {
      obj.address = message.address;
    }
    if (message.tokens !== "") {
      obj.tokens = message.tokens;
    }
    if (message.delegatorShares !== "") {
      obj.delegatorShares = message.delegatorShares;
    }
    return obj;
  },

  create(base?: DeepPartial<Pool>): Pool {
    return Pool.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Pool>): Pool {
    const message = createBasePool();
    message.id = object.id ?? 0;
    message.denom = object.denom ?? "";
    message.address = object.address ?? "";
    message.tokens = object.tokens ?? "";
    message.delegatorShares = object.delegatorShares ?? "";
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

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}

export interface MessageFns<T> {
  encode(message: T, writer?: BinaryWriter): BinaryWriter;
  decode(input: BinaryReader | Uint8Array, length?: number): T;
  fromJSON(object: any): T;
  toJSON(message: T): unknown;
  create(base?: DeepPartial<T>): T;
  fromPartial(object: DeepPartial<T>): T;
}
