// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.3.0
//   protoc               unknown
// source: milkyway/liquidvesting/v1/params.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";

export const protobufPackage = "milkyway.liquidvesting.v1";

/** Params defines the parameters for the module. */
export interface Params {
  /**
   * This value represents the percentage that needs to be sent to the
   * insurance fund in order to restake a certain amount of locked tokens.
   * For example, if this value is 2%, a user must send 2 tokens to
   * the insurance fund to restake 100 locked tokens
   */
  insurancePercentage: string;
  /**
   * This value represents the list of users who are authorized to execute the
   * MsgBurnLockedRepresentation.
   */
  burners: string[];
  /**
   * This value represents the list of users who are authorized to execute the
   * MsgMintLockedRepresentation.
   */
  minters: string[];
  /**
   * TrustedDelegates represents the list of users who are allowed to deposit
   * on the insurance fund.
   */
  trustedDelegates: string[];
  /**
   * List of channels from which is allowed to receive deposits to the insurance
   * fund.
   */
  allowedChannels: string[];
}

function createBaseParams(): Params {
  return { insurancePercentage: "", burners: [], minters: [], trustedDelegates: [], allowedChannels: [] };
}

export const Params: MessageFns<Params> = {
  encode(message: Params, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.insurancePercentage !== "") {
      writer.uint32(10).string(message.insurancePercentage);
    }
    for (const v of message.burners) {
      writer.uint32(18).string(v!);
    }
    for (const v of message.minters) {
      writer.uint32(26).string(v!);
    }
    for (const v of message.trustedDelegates) {
      writer.uint32(34).string(v!);
    }
    for (const v of message.allowedChannels) {
      writer.uint32(42).string(v!);
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

          message.insurancePercentage = reader.string();
          continue;
        }
        case 2: {
          if (tag !== 18) {
            break;
          }

          message.burners.push(reader.string());
          continue;
        }
        case 3: {
          if (tag !== 26) {
            break;
          }

          message.minters.push(reader.string());
          continue;
        }
        case 4: {
          if (tag !== 34) {
            break;
          }

          message.trustedDelegates.push(reader.string());
          continue;
        }
        case 5: {
          if (tag !== 42) {
            break;
          }

          message.allowedChannels.push(reader.string());
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
      insurancePercentage: isSet(object.insurancePercentage) ? gt.String(object.insurancePercentage) : "",
      burners: gt.Array.isArray(object?.burners) ? object.burners.map((e: any) => gt.String(e)) : [],
      minters: gt.Array.isArray(object?.minters) ? object.minters.map((e: any) => gt.String(e)) : [],
      trustedDelegates: gt.Array.isArray(object?.trustedDelegates)
        ? object.trustedDelegates.map((e: any) => gt.String(e))
        : [],
      allowedChannels: gt.Array.isArray(object?.allowedChannels)
        ? object.allowedChannels.map((e: any) => gt.String(e))
        : [],
    };
  },

  toJSON(message: Params): unknown {
    const obj: any = {};
    if (message.insurancePercentage !== "") {
      obj.insurancePercentage = message.insurancePercentage;
    }
    if (message.burners?.length) {
      obj.burners = message.burners;
    }
    if (message.minters?.length) {
      obj.minters = message.minters;
    }
    if (message.trustedDelegates?.length) {
      obj.trustedDelegates = message.trustedDelegates;
    }
    if (message.allowedChannels?.length) {
      obj.allowedChannels = message.allowedChannels;
    }
    return obj;
  },

  create(base?: DeepPartial<Params>): Params {
    return Params.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Params>): Params {
    const message = createBaseParams();
    message.insurancePercentage = object.insurancePercentage ?? "";
    message.burners = object.burners?.map((e) => e) || [];
    message.minters = object.minters?.map((e) => e) || [];
    message.trustedDelegates = object.trustedDelegates?.map((e) => e) || [];
    message.allowedChannels = object.allowedChannels?.map((e) => e) || [];
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