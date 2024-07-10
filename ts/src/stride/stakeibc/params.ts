// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v1.178.0
//   protoc               unknown
// source: stride/stakeibc/params.proto

/* eslint-disable */
import * as _m0 from "protobufjs/minimal";
import Long = require("long");

export const protobufPackage = "stride.stakeibc";

/**
 * Params defines the parameters for the module.
 * next id: 20
 */
export interface Params {
  /** define epoch lengths, in stride_epochs */
  rewardsInterval: number;
  delegateInterval: number;
  depositInterval: number;
  redemptionRateInterval: number;
  strideCommission: number;
  reinvestInterval: number;
  icaTimeoutNanos: number;
  bufferSize: number;
  ibcTimeoutBlocks: number;
  feeTransferTimeoutNanos: number;
  maxStakeIcaCallsPerEpoch: number;
  defaultMinRedemptionRateThreshold: number;
  defaultMaxRedemptionRateThreshold: number;
  ibcTransferTimeoutNanos: number;
  validatorSlashQueryThreshold: number;
  validatorWeightCap: number;
}

function createBaseParams(): Params {
  return {
    rewardsInterval: 0,
    delegateInterval: 0,
    depositInterval: 0,
    redemptionRateInterval: 0,
    strideCommission: 0,
    reinvestInterval: 0,
    icaTimeoutNanos: 0,
    bufferSize: 0,
    ibcTimeoutBlocks: 0,
    feeTransferTimeoutNanos: 0,
    maxStakeIcaCallsPerEpoch: 0,
    defaultMinRedemptionRateThreshold: 0,
    defaultMaxRedemptionRateThreshold: 0,
    ibcTransferTimeoutNanos: 0,
    validatorSlashQueryThreshold: 0,
    validatorWeightCap: 0,
  };
}

export const Params = {
  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.rewardsInterval !== 0) {
      writer.uint32(8).uint64(message.rewardsInterval);
    }
    if (message.delegateInterval !== 0) {
      writer.uint32(48).uint64(message.delegateInterval);
    }
    if (message.depositInterval !== 0) {
      writer.uint32(16).uint64(message.depositInterval);
    }
    if (message.redemptionRateInterval !== 0) {
      writer.uint32(24).uint64(message.redemptionRateInterval);
    }
    if (message.strideCommission !== 0) {
      writer.uint32(32).uint64(message.strideCommission);
    }
    if (message.reinvestInterval !== 0) {
      writer.uint32(56).uint64(message.reinvestInterval);
    }
    if (message.icaTimeoutNanos !== 0) {
      writer.uint32(72).uint64(message.icaTimeoutNanos);
    }
    if (message.bufferSize !== 0) {
      writer.uint32(80).uint64(message.bufferSize);
    }
    if (message.ibcTimeoutBlocks !== 0) {
      writer.uint32(88).uint64(message.ibcTimeoutBlocks);
    }
    if (message.feeTransferTimeoutNanos !== 0) {
      writer.uint32(96).uint64(message.feeTransferTimeoutNanos);
    }
    if (message.maxStakeIcaCallsPerEpoch !== 0) {
      writer.uint32(104).uint64(message.maxStakeIcaCallsPerEpoch);
    }
    if (message.defaultMinRedemptionRateThreshold !== 0) {
      writer.uint32(112).uint64(message.defaultMinRedemptionRateThreshold);
    }
    if (message.defaultMaxRedemptionRateThreshold !== 0) {
      writer.uint32(120).uint64(message.defaultMaxRedemptionRateThreshold);
    }
    if (message.ibcTransferTimeoutNanos !== 0) {
      writer.uint32(128).uint64(message.ibcTransferTimeoutNanos);
    }
    if (message.validatorSlashQueryThreshold !== 0) {
      writer.uint32(152).uint64(message.validatorSlashQueryThreshold);
    }
    if (message.validatorWeightCap !== 0) {
      writer.uint32(160).uint64(message.validatorWeightCap);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Params {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.rewardsInterval = longToNumber(reader.uint64() as Long);
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.delegateInterval = longToNumber(reader.uint64() as Long);
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.depositInterval = longToNumber(reader.uint64() as Long);
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.redemptionRateInterval = longToNumber(reader.uint64() as Long);
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.strideCommission = longToNumber(reader.uint64() as Long);
          continue;
        case 7:
          if (tag !== 56) {
            break;
          }

          message.reinvestInterval = longToNumber(reader.uint64() as Long);
          continue;
        case 9:
          if (tag !== 72) {
            break;
          }

          message.icaTimeoutNanos = longToNumber(reader.uint64() as Long);
          continue;
        case 10:
          if (tag !== 80) {
            break;
          }

          message.bufferSize = longToNumber(reader.uint64() as Long);
          continue;
        case 11:
          if (tag !== 88) {
            break;
          }

          message.ibcTimeoutBlocks = longToNumber(reader.uint64() as Long);
          continue;
        case 12:
          if (tag !== 96) {
            break;
          }

          message.feeTransferTimeoutNanos = longToNumber(reader.uint64() as Long);
          continue;
        case 13:
          if (tag !== 104) {
            break;
          }

          message.maxStakeIcaCallsPerEpoch = longToNumber(reader.uint64() as Long);
          continue;
        case 14:
          if (tag !== 112) {
            break;
          }

          message.defaultMinRedemptionRateThreshold = longToNumber(reader.uint64() as Long);
          continue;
        case 15:
          if (tag !== 120) {
            break;
          }

          message.defaultMaxRedemptionRateThreshold = longToNumber(reader.uint64() as Long);
          continue;
        case 16:
          if (tag !== 128) {
            break;
          }

          message.ibcTransferTimeoutNanos = longToNumber(reader.uint64() as Long);
          continue;
        case 19:
          if (tag !== 152) {
            break;
          }

          message.validatorSlashQueryThreshold = longToNumber(reader.uint64() as Long);
          continue;
        case 20:
          if (tag !== 160) {
            break;
          }

          message.validatorWeightCap = longToNumber(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Params {
    return {
      rewardsInterval: isSet(object.rewardsInterval) ? gt.Number(object.rewardsInterval) : 0,
      delegateInterval: isSet(object.delegateInterval) ? gt.Number(object.delegateInterval) : 0,
      depositInterval: isSet(object.depositInterval) ? gt.Number(object.depositInterval) : 0,
      redemptionRateInterval: isSet(object.redemptionRateInterval) ? gt.Number(object.redemptionRateInterval) : 0,
      strideCommission: isSet(object.strideCommission) ? gt.Number(object.strideCommission) : 0,
      reinvestInterval: isSet(object.reinvestInterval) ? gt.Number(object.reinvestInterval) : 0,
      icaTimeoutNanos: isSet(object.icaTimeoutNanos) ? gt.Number(object.icaTimeoutNanos) : 0,
      bufferSize: isSet(object.bufferSize) ? gt.Number(object.bufferSize) : 0,
      ibcTimeoutBlocks: isSet(object.ibcTimeoutBlocks) ? gt.Number(object.ibcTimeoutBlocks) : 0,
      feeTransferTimeoutNanos: isSet(object.feeTransferTimeoutNanos) ? gt.Number(object.feeTransferTimeoutNanos) : 0,
      maxStakeIcaCallsPerEpoch: isSet(object.maxStakeIcaCallsPerEpoch) ? gt.Number(object.maxStakeIcaCallsPerEpoch) : 0,
      defaultMinRedemptionRateThreshold: isSet(object.defaultMinRedemptionRateThreshold)
        ? gt.Number(object.defaultMinRedemptionRateThreshold)
        : 0,
      defaultMaxRedemptionRateThreshold: isSet(object.defaultMaxRedemptionRateThreshold)
        ? gt.Number(object.defaultMaxRedemptionRateThreshold)
        : 0,
      ibcTransferTimeoutNanos: isSet(object.ibcTransferTimeoutNanos) ? gt.Number(object.ibcTransferTimeoutNanos) : 0,
      validatorSlashQueryThreshold: isSet(object.validatorSlashQueryThreshold)
        ? gt.Number(object.validatorSlashQueryThreshold)
        : 0,
      validatorWeightCap: isSet(object.validatorWeightCap) ? gt.Number(object.validatorWeightCap) : 0,
    };
  },

  toJSON(message: Params): unknown {
    const obj: any = {};
    if (message.rewardsInterval !== 0) {
      obj.rewardsInterval = Math.round(message.rewardsInterval);
    }
    if (message.delegateInterval !== 0) {
      obj.delegateInterval = Math.round(message.delegateInterval);
    }
    if (message.depositInterval !== 0) {
      obj.depositInterval = Math.round(message.depositInterval);
    }
    if (message.redemptionRateInterval !== 0) {
      obj.redemptionRateInterval = Math.round(message.redemptionRateInterval);
    }
    if (message.strideCommission !== 0) {
      obj.strideCommission = Math.round(message.strideCommission);
    }
    if (message.reinvestInterval !== 0) {
      obj.reinvestInterval = Math.round(message.reinvestInterval);
    }
    if (message.icaTimeoutNanos !== 0) {
      obj.icaTimeoutNanos = Math.round(message.icaTimeoutNanos);
    }
    if (message.bufferSize !== 0) {
      obj.bufferSize = Math.round(message.bufferSize);
    }
    if (message.ibcTimeoutBlocks !== 0) {
      obj.ibcTimeoutBlocks = Math.round(message.ibcTimeoutBlocks);
    }
    if (message.feeTransferTimeoutNanos !== 0) {
      obj.feeTransferTimeoutNanos = Math.round(message.feeTransferTimeoutNanos);
    }
    if (message.maxStakeIcaCallsPerEpoch !== 0) {
      obj.maxStakeIcaCallsPerEpoch = Math.round(message.maxStakeIcaCallsPerEpoch);
    }
    if (message.defaultMinRedemptionRateThreshold !== 0) {
      obj.defaultMinRedemptionRateThreshold = Math.round(message.defaultMinRedemptionRateThreshold);
    }
    if (message.defaultMaxRedemptionRateThreshold !== 0) {
      obj.defaultMaxRedemptionRateThreshold = Math.round(message.defaultMaxRedemptionRateThreshold);
    }
    if (message.ibcTransferTimeoutNanos !== 0) {
      obj.ibcTransferTimeoutNanos = Math.round(message.ibcTransferTimeoutNanos);
    }
    if (message.validatorSlashQueryThreshold !== 0) {
      obj.validatorSlashQueryThreshold = Math.round(message.validatorSlashQueryThreshold);
    }
    if (message.validatorWeightCap !== 0) {
      obj.validatorWeightCap = Math.round(message.validatorWeightCap);
    }
    return obj;
  },

  create(base?: DeepPartial<Params>): Params {
    return Params.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Params>): Params {
    const message = createBaseParams();
    message.rewardsInterval = object.rewardsInterval ?? 0;
    message.delegateInterval = object.delegateInterval ?? 0;
    message.depositInterval = object.depositInterval ?? 0;
    message.redemptionRateInterval = object.redemptionRateInterval ?? 0;
    message.strideCommission = object.strideCommission ?? 0;
    message.reinvestInterval = object.reinvestInterval ?? 0;
    message.icaTimeoutNanos = object.icaTimeoutNanos ?? 0;
    message.bufferSize = object.bufferSize ?? 0;
    message.ibcTimeoutBlocks = object.ibcTimeoutBlocks ?? 0;
    message.feeTransferTimeoutNanos = object.feeTransferTimeoutNanos ?? 0;
    message.maxStakeIcaCallsPerEpoch = object.maxStakeIcaCallsPerEpoch ?? 0;
    message.defaultMinRedemptionRateThreshold = object.defaultMinRedemptionRateThreshold ?? 0;
    message.defaultMaxRedemptionRateThreshold = object.defaultMaxRedemptionRateThreshold ?? 0;
    message.ibcTransferTimeoutNanos = object.ibcTransferTimeoutNanos ?? 0;
    message.validatorSlashQueryThreshold = object.validatorSlashQueryThreshold ?? 0;
    message.validatorWeightCap = object.validatorWeightCap ?? 0;
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
