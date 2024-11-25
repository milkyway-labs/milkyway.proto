// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.3.0
//   protoc               unknown
// source: milkyway/operators/v1/models.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { Coin, DecCoin } from "../../../cosmos/base/v1beta1/coin";

export const protobufPackage = "milkyway.operators.v1";

/** OperatorStatus defines the possible statuses of an operator */
export enum OperatorStatus {
  /** OPERATOR_STATUS_UNSPECIFIED - OPERATOR_STATUS_UNSPECIFIED defines an unspecified status */
  OPERATOR_STATUS_UNSPECIFIED = 0,
  /**
   * OPERATOR_STATUS_ACTIVE - OPERATOR_STATUS_ACTIVE identifies an active validator which is providing
   * services
   */
  OPERATOR_STATUS_ACTIVE = 1,
  /**
   * OPERATOR_STATUS_INACTIVATING - OPERATOR_STATUS_INACTIVATING identifies an operator that is in the process
   * of becoming inactive
   */
  OPERATOR_STATUS_INACTIVATING = 2,
  /**
   * OPERATOR_STATUS_INACTIVE - OPERATOR_STATUS_INACTIVE defines an inactive operator that is not providing
   * services
   */
  OPERATOR_STATUS_INACTIVE = 3,
  UNRECOGNIZED = -1,
}

export function operatorStatusFromJSON(object: any): OperatorStatus {
  switch (object) {
    case 0:
    case "OPERATOR_STATUS_UNSPECIFIED":
      return OperatorStatus.OPERATOR_STATUS_UNSPECIFIED;
    case 1:
    case "OPERATOR_STATUS_ACTIVE":
      return OperatorStatus.OPERATOR_STATUS_ACTIVE;
    case 2:
    case "OPERATOR_STATUS_INACTIVATING":
      return OperatorStatus.OPERATOR_STATUS_INACTIVATING;
    case 3:
    case "OPERATOR_STATUS_INACTIVE":
      return OperatorStatus.OPERATOR_STATUS_INACTIVE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return OperatorStatus.UNRECOGNIZED;
  }
}

export function operatorStatusToJSON(object: OperatorStatus): string {
  switch (object) {
    case OperatorStatus.OPERATOR_STATUS_UNSPECIFIED:
      return "OPERATOR_STATUS_UNSPECIFIED";
    case OperatorStatus.OPERATOR_STATUS_ACTIVE:
      return "OPERATOR_STATUS_ACTIVE";
    case OperatorStatus.OPERATOR_STATUS_INACTIVATING:
      return "OPERATOR_STATUS_INACTIVATING";
    case OperatorStatus.OPERATOR_STATUS_INACTIVE:
      return "OPERATOR_STATUS_INACTIVE";
    case OperatorStatus.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

/** Operator defines the fields of an operator */
export interface Operator {
  /** ID is the auto-generated unique identifier for the operator */
  id: number;
  /** Status is the status of the operator */
  status: OperatorStatus;
  /** Admin is the address of the user that can manage the operator */
  admin: string;
  /** Moniker is the identifier of the operator */
  moniker: string;
  /** Website is the website of the operator */
  website: string;
  /** PictureURL is the URL of the picture of the operator */
  pictureUrl: string;
  /**
   * Address is the address of the account associated to the operator.
   * This will be used to store tokens that are delegated to this operator.
   */
  address: string;
  /** Tokens define the delegated tokens. */
  tokens: Coin[];
  /** DelegatorShares define the total shares issued to an operator's delegators. */
  delegatorShares: DecCoin[];
}

/**
 * OperatorParams represent the params that have been set for an individual
 * operator.
 */
export interface OperatorParams {
  /**
   * CommissionRate defines the commission rate charged to delegators, as a
   * fraction.
   */
  commissionRate: string;
}

function createBaseOperator(): Operator {
  return {
    id: 0,
    status: 0,
    admin: "",
    moniker: "",
    website: "",
    pictureUrl: "",
    address: "",
    tokens: [],
    delegatorShares: [],
  };
}

export const Operator: MessageFns<Operator> = {
  encode(message: Operator, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.id !== 0) {
      writer.uint32(8).uint32(message.id);
    }
    if (message.status !== 0) {
      writer.uint32(16).int32(message.status);
    }
    if (message.admin !== "") {
      writer.uint32(26).string(message.admin);
    }
    if (message.moniker !== "") {
      writer.uint32(34).string(message.moniker);
    }
    if (message.website !== "") {
      writer.uint32(42).string(message.website);
    }
    if (message.pictureUrl !== "") {
      writer.uint32(50).string(message.pictureUrl);
    }
    if (message.address !== "") {
      writer.uint32(58).string(message.address);
    }
    for (const v of message.tokens) {
      Coin.encode(v!, writer.uint32(66).fork()).join();
    }
    for (const v of message.delegatorShares) {
      DecCoin.encode(v!, writer.uint32(74).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): Operator {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOperator();
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
          if (tag !== 16) {
            break;
          }

          message.status = reader.int32() as any;
          continue;
        }
        case 3: {
          if (tag !== 26) {
            break;
          }

          message.admin = reader.string();
          continue;
        }
        case 4: {
          if (tag !== 34) {
            break;
          }

          message.moniker = reader.string();
          continue;
        }
        case 5: {
          if (tag !== 42) {
            break;
          }

          message.website = reader.string();
          continue;
        }
        case 6: {
          if (tag !== 50) {
            break;
          }

          message.pictureUrl = reader.string();
          continue;
        }
        case 7: {
          if (tag !== 58) {
            break;
          }

          message.address = reader.string();
          continue;
        }
        case 8: {
          if (tag !== 66) {
            break;
          }

          message.tokens.push(Coin.decode(reader, reader.uint32()));
          continue;
        }
        case 9: {
          if (tag !== 74) {
            break;
          }

          message.delegatorShares.push(DecCoin.decode(reader, reader.uint32()));
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

  fromJSON(object: any): Operator {
    return {
      id: isSet(object.id) ? gt.Number(object.id) : 0,
      status: isSet(object.status) ? operatorStatusFromJSON(object.status) : 0,
      admin: isSet(object.admin) ? gt.String(object.admin) : "",
      moniker: isSet(object.moniker) ? gt.String(object.moniker) : "",
      website: isSet(object.website) ? gt.String(object.website) : "",
      pictureUrl: isSet(object.pictureUrl) ? gt.String(object.pictureUrl) : "",
      address: isSet(object.address) ? gt.String(object.address) : "",
      tokens: gt.Array.isArray(object?.tokens) ? object.tokens.map((e: any) => Coin.fromJSON(e)) : [],
      delegatorShares: gt.Array.isArray(object?.delegatorShares)
        ? object.delegatorShares.map((e: any) => DecCoin.fromJSON(e))
        : [],
    };
  },

  toJSON(message: Operator): unknown {
    const obj: any = {};
    if (message.id !== 0) {
      obj.id = Math.round(message.id);
    }
    if (message.status !== 0) {
      obj.status = operatorStatusToJSON(message.status);
    }
    if (message.admin !== "") {
      obj.admin = message.admin;
    }
    if (message.moniker !== "") {
      obj.moniker = message.moniker;
    }
    if (message.website !== "") {
      obj.website = message.website;
    }
    if (message.pictureUrl !== "") {
      obj.pictureUrl = message.pictureUrl;
    }
    if (message.address !== "") {
      obj.address = message.address;
    }
    if (message.tokens?.length) {
      obj.tokens = message.tokens.map((e) => Coin.toJSON(e));
    }
    if (message.delegatorShares?.length) {
      obj.delegatorShares = message.delegatorShares.map((e) => DecCoin.toJSON(e));
    }
    return obj;
  },

  create(base?: DeepPartial<Operator>): Operator {
    return Operator.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Operator>): Operator {
    const message = createBaseOperator();
    message.id = object.id ?? 0;
    message.status = object.status ?? 0;
    message.admin = object.admin ?? "";
    message.moniker = object.moniker ?? "";
    message.website = object.website ?? "";
    message.pictureUrl = object.pictureUrl ?? "";
    message.address = object.address ?? "";
    message.tokens = object.tokens?.map((e) => Coin.fromPartial(e)) || [];
    message.delegatorShares = object.delegatorShares?.map((e) => DecCoin.fromPartial(e)) || [];
    return message;
  },
};

function createBaseOperatorParams(): OperatorParams {
  return { commissionRate: "" };
}

export const OperatorParams: MessageFns<OperatorParams> = {
  encode(message: OperatorParams, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.commissionRate !== "") {
      writer.uint32(10).string(message.commissionRate);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): OperatorParams {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOperatorParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          message.commissionRate = reader.string();
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

  fromJSON(object: any): OperatorParams {
    return { commissionRate: isSet(object.commissionRate) ? gt.String(object.commissionRate) : "" };
  },

  toJSON(message: OperatorParams): unknown {
    const obj: any = {};
    if (message.commissionRate !== "") {
      obj.commissionRate = message.commissionRate;
    }
    return obj;
  },

  create(base?: DeepPartial<OperatorParams>): OperatorParams {
    return OperatorParams.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<OperatorParams>): OperatorParams {
    const message = createBaseOperatorParams();
    message.commissionRate = object.commissionRate ?? "";
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
