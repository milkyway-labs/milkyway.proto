// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.3.0
//   protoc               unknown
// source: milkyway/liquidvesting/v1/models.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { Timestamp } from "../../../google/protobuf/timestamp";

export const protobufPackage = "milkyway.liquidvesting.v1";

/** UserInsuranceFund defines a user's insurance fund. */
export interface UserInsuranceFund {
  /** Amount of coins deposited into the user's insurance fund. */
  balance: Coin[];
  /**
   * Amount in the user's insurance that is being used to secure the
   * restaked toknes. For example an user has 10 TIA in their insurance fund,
   * the insurance percentage is 1% so they can restake 1000 TIA.
   * The user restakes only 100 TIA, in this case the balance is 10 TIA and used
   * is 1 TIA.
   */
  used: Coin[];
}

/**
 * BurnCoins is a struct that contains the information about the coins to burn
 * once the unbonding period of the vested representation tokens ends.
 */
export interface BurnCoins {
  /** Address of who has delegated the coins. */
  delegatorAddress: string;
  /** CompletionTime is the unix time for unbonding completion. */
  completionTime:
    | Date
    | undefined;
  /** Amount of coins to be burned from the delegator address. */
  amount: Coin[];
}

/** BurnCoinsList represents a list of BurnCoins. */
export interface BurnCoinsList {
  data: BurnCoins[];
}

/** UserInsuranceFundState represents a user's insurance fund. */
export interface UserInsuranceFundState {
  /** Address of who owns the insurance fund. */
  userAddress: string;
  /** InsuranceFund represents the user's insurance fund. */
  insuranceFund: UserInsuranceFund | undefined;
}

function createBaseUserInsuranceFund(): UserInsuranceFund {
  return { balance: [], used: [] };
}

export const UserInsuranceFund: MessageFns<UserInsuranceFund> = {
  encode(message: UserInsuranceFund, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    for (const v of message.balance) {
      Coin.encode(v!, writer.uint32(10).fork()).join();
    }
    for (const v of message.used) {
      Coin.encode(v!, writer.uint32(18).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): UserInsuranceFund {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUserInsuranceFund();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          message.balance.push(Coin.decode(reader, reader.uint32()));
          continue;
        }
        case 2: {
          if (tag !== 18) {
            break;
          }

          message.used.push(Coin.decode(reader, reader.uint32()));
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

  fromJSON(object: any): UserInsuranceFund {
    return {
      balance: gt.Array.isArray(object?.balance) ? object.balance.map((e: any) => Coin.fromJSON(e)) : [],
      used: gt.Array.isArray(object?.used) ? object.used.map((e: any) => Coin.fromJSON(e)) : [],
    };
  },

  toJSON(message: UserInsuranceFund): unknown {
    const obj: any = {};
    if (message.balance?.length) {
      obj.balance = message.balance.map((e) => Coin.toJSON(e));
    }
    if (message.used?.length) {
      obj.used = message.used.map((e) => Coin.toJSON(e));
    }
    return obj;
  },

  create(base?: DeepPartial<UserInsuranceFund>): UserInsuranceFund {
    return UserInsuranceFund.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<UserInsuranceFund>): UserInsuranceFund {
    const message = createBaseUserInsuranceFund();
    message.balance = object.balance?.map((e) => Coin.fromPartial(e)) || [];
    message.used = object.used?.map((e) => Coin.fromPartial(e)) || [];
    return message;
  },
};

function createBaseBurnCoins(): BurnCoins {
  return { delegatorAddress: "", completionTime: undefined, amount: [] };
}

export const BurnCoins: MessageFns<BurnCoins> = {
  encode(message: BurnCoins, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.delegatorAddress !== "") {
      writer.uint32(10).string(message.delegatorAddress);
    }
    if (message.completionTime !== undefined) {
      Timestamp.encode(toTimestamp(message.completionTime), writer.uint32(18).fork()).join();
    }
    for (const v of message.amount) {
      Coin.encode(v!, writer.uint32(26).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): BurnCoins {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBurnCoins();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          message.delegatorAddress = reader.string();
          continue;
        }
        case 2: {
          if (tag !== 18) {
            break;
          }

          message.completionTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        }
        case 3: {
          if (tag !== 26) {
            break;
          }

          message.amount.push(Coin.decode(reader, reader.uint32()));
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

  fromJSON(object: any): BurnCoins {
    return {
      delegatorAddress: isSet(object.delegatorAddress) ? gt.String(object.delegatorAddress) : "",
      completionTime: isSet(object.completionTime) ? fromJsonTimestamp(object.completionTime) : undefined,
      amount: gt.Array.isArray(object?.amount) ? object.amount.map((e: any) => Coin.fromJSON(e)) : [],
    };
  },

  toJSON(message: BurnCoins): unknown {
    const obj: any = {};
    if (message.delegatorAddress !== "") {
      obj.delegatorAddress = message.delegatorAddress;
    }
    if (message.completionTime !== undefined) {
      obj.completionTime = message.completionTime.toISOString();
    }
    if (message.amount?.length) {
      obj.amount = message.amount.map((e) => Coin.toJSON(e));
    }
    return obj;
  },

  create(base?: DeepPartial<BurnCoins>): BurnCoins {
    return BurnCoins.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<BurnCoins>): BurnCoins {
    const message = createBaseBurnCoins();
    message.delegatorAddress = object.delegatorAddress ?? "";
    message.completionTime = object.completionTime ?? undefined;
    message.amount = object.amount?.map((e) => Coin.fromPartial(e)) || [];
    return message;
  },
};

function createBaseBurnCoinsList(): BurnCoinsList {
  return { data: [] };
}

export const BurnCoinsList: MessageFns<BurnCoinsList> = {
  encode(message: BurnCoinsList, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    for (const v of message.data) {
      BurnCoins.encode(v!, writer.uint32(10).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): BurnCoinsList {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBurnCoinsList();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          message.data.push(BurnCoins.decode(reader, reader.uint32()));
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

  fromJSON(object: any): BurnCoinsList {
    return { data: gt.Array.isArray(object?.data) ? object.data.map((e: any) => BurnCoins.fromJSON(e)) : [] };
  },

  toJSON(message: BurnCoinsList): unknown {
    const obj: any = {};
    if (message.data?.length) {
      obj.data = message.data.map((e) => BurnCoins.toJSON(e));
    }
    return obj;
  },

  create(base?: DeepPartial<BurnCoinsList>): BurnCoinsList {
    return BurnCoinsList.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<BurnCoinsList>): BurnCoinsList {
    const message = createBaseBurnCoinsList();
    message.data = object.data?.map((e) => BurnCoins.fromPartial(e)) || [];
    return message;
  },
};

function createBaseUserInsuranceFundState(): UserInsuranceFundState {
  return { userAddress: "", insuranceFund: undefined };
}

export const UserInsuranceFundState: MessageFns<UserInsuranceFundState> = {
  encode(message: UserInsuranceFundState, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.userAddress !== "") {
      writer.uint32(10).string(message.userAddress);
    }
    if (message.insuranceFund !== undefined) {
      UserInsuranceFund.encode(message.insuranceFund, writer.uint32(18).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): UserInsuranceFundState {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUserInsuranceFundState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          message.userAddress = reader.string();
          continue;
        }
        case 2: {
          if (tag !== 18) {
            break;
          }

          message.insuranceFund = UserInsuranceFund.decode(reader, reader.uint32());
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

  fromJSON(object: any): UserInsuranceFundState {
    return {
      userAddress: isSet(object.userAddress) ? gt.String(object.userAddress) : "",
      insuranceFund: isSet(object.insuranceFund) ? UserInsuranceFund.fromJSON(object.insuranceFund) : undefined,
    };
  },

  toJSON(message: UserInsuranceFundState): unknown {
    const obj: any = {};
    if (message.userAddress !== "") {
      obj.userAddress = message.userAddress;
    }
    if (message.insuranceFund !== undefined) {
      obj.insuranceFund = UserInsuranceFund.toJSON(message.insuranceFund);
    }
    return obj;
  },

  create(base?: DeepPartial<UserInsuranceFundState>): UserInsuranceFundState {
    return UserInsuranceFundState.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<UserInsuranceFundState>): UserInsuranceFundState {
    const message = createBaseUserInsuranceFundState();
    message.userAddress = object.userAddress ?? "";
    message.insuranceFund = (object.insuranceFund !== undefined && object.insuranceFund !== null)
      ? UserInsuranceFund.fromPartial(object.insuranceFund)
      : undefined;
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

function toTimestamp(date: Date): Timestamp {
  const seconds = Math.trunc(date.getTime() / 1_000);
  const nanos = (date.getTime() % 1_000) * 1_000_000;
  return { seconds, nanos };
}

function fromTimestamp(t: Timestamp): Date {
  let millis = (t.seconds || 0) * 1_000;
  millis += (t.nanos || 0) / 1_000_000;
  return new gt.Date(millis);
}

function fromJsonTimestamp(o: any): Date {
  if (o instanceof gt.Date) {
    return o;
  } else if (typeof o === "string") {
    return new gt.Date(o);
  } else {
    return fromTimestamp(Timestamp.fromJSON(o));
  }
}

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
