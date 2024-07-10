// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v1.178.0
//   protoc               unknown
// source: stride/icacallbacks/packet.proto

/* eslint-disable */
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "stride.icacallbacks";

export interface IcacallbacksPacketData {
  /** this line is used by starport scaffolding # ibc/packet/proto/field */
  noData?: NoData | undefined;
}

export interface NoData {
}

function createBaseIcacallbacksPacketData(): IcacallbacksPacketData {
  return { noData: undefined };
}

export const IcacallbacksPacketData = {
  encode(message: IcacallbacksPacketData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.noData !== undefined) {
      NoData.encode(message.noData, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): IcacallbacksPacketData {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseIcacallbacksPacketData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.noData = NoData.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): IcacallbacksPacketData {
    return { noData: isSet(object.noData) ? NoData.fromJSON(object.noData) : undefined };
  },

  toJSON(message: IcacallbacksPacketData): unknown {
    const obj: any = {};
    if (message.noData !== undefined) {
      obj.noData = NoData.toJSON(message.noData);
    }
    return obj;
  },

  create(base?: DeepPartial<IcacallbacksPacketData>): IcacallbacksPacketData {
    return IcacallbacksPacketData.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<IcacallbacksPacketData>): IcacallbacksPacketData {
    const message = createBaseIcacallbacksPacketData();
    message.noData = (object.noData !== undefined && object.noData !== null)
      ? NoData.fromPartial(object.noData)
      : undefined;
    return message;
  },
};

function createBaseNoData(): NoData {
  return {};
}

export const NoData = {
  encode(_: NoData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): NoData {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNoData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): NoData {
    return {};
  },

  toJSON(_: NoData): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<NoData>): NoData {
    return NoData.fromPartial(base ?? {});
  },
  fromPartial(_: DeepPartial<NoData>): NoData {
    const message = createBaseNoData();
    return message;
  },
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
