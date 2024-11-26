// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.3.0
//   protoc               unknown
// source: milkyway/assets/v1/models.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";

export const protobufPackage = "milkyway.assets.v1";

/** Asset represents an asset that can be registered on the chain. */
export interface Asset {
  /** Denom is the denomination of the asset. */
  denom: string;
  /** Ticker is the ticker of the asset. */
  ticker: string;
  /**
   * Exponent represents power of 10 exponent that one must
   * raise the denom to in order to equal the given ticker.
   * 1 ticker = 10^exponent denom
   */
  exponent: number;
}

function createBaseAsset(): Asset {
  return { denom: "", ticker: "", exponent: 0 };
}

export const Asset: MessageFns<Asset> = {
  encode(message: Asset, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (message.ticker !== "") {
      writer.uint32(18).string(message.ticker);
    }
    if (message.exponent !== 0) {
      writer.uint32(24).uint32(message.exponent);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): Asset {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAsset();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          message.denom = reader.string();
          continue;
        }
        case 2: {
          if (tag !== 18) {
            break;
          }

          message.ticker = reader.string();
          continue;
        }
        case 3: {
          if (tag !== 24) {
            break;
          }

          message.exponent = reader.uint32();
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

  fromJSON(object: any): Asset {
    return {
      denom: isSet(object.denom) ? gt.String(object.denom) : "",
      ticker: isSet(object.ticker) ? gt.String(object.ticker) : "",
      exponent: isSet(object.exponent) ? gt.Number(object.exponent) : 0,
    };
  },

  toJSON(message: Asset): unknown {
    const obj: any = {};
    if (message.denom !== "") {
      obj.denom = message.denom;
    }
    if (message.ticker !== "") {
      obj.ticker = message.ticker;
    }
    if (message.exponent !== 0) {
      obj.exponent = Math.round(message.exponent);
    }
    return obj;
  },

  create(base?: DeepPartial<Asset>): Asset {
    return Asset.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Asset>): Asset {
    const message = createBaseAsset();
    message.denom = object.denom ?? "";
    message.ticker = object.ticker ?? "";
    message.exponent = object.exponent ?? 0;
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