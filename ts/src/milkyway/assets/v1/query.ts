// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.3.0
//   protoc               unknown
// source: milkyway/assets/v1/query.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { PageRequest, PageResponse } from "../../../cosmos/base/query/v1beta1/pagination";
import { Asset } from "./models";

export const protobufPackage = "milkyway.assets.v1";

/** QueryAssetsRequest is the request type for the Query/Assets RPC method. */
export interface QueryAssetsRequest {
  /**
   * Ticker defines an optional filter parameter to query assets with the given
   * ticker.
   */
  ticker: string;
  /** Pagination defines an optional pagination for the request. */
  pagination: PageRequest | undefined;
}

/** QueryAssetsResponse is the response type for the Query/Assets RPC method. */
export interface QueryAssetsResponse {
  /** Assets represents all the assets registered. */
  assets: Asset[];
  /** Pagination defines the pagination in the response. */
  pagination: PageResponse | undefined;
}

/** QueryAssetRequest is the request type for the Query/Asset RPC method. */
export interface QueryAssetRequest {
  /** Denom is the token denomination for which the ticker is to be queried. */
  denom: string;
}

/** QueryAssetResponse is the response type for the Query/Asset RPC method. */
export interface QueryAssetResponse {
  /** Asset is the asset associated with the token denomination. */
  asset: Asset | undefined;
}

function createBaseQueryAssetsRequest(): QueryAssetsRequest {
  return { ticker: "", pagination: undefined };
}

export const QueryAssetsRequest: MessageFns<QueryAssetsRequest> = {
  encode(message: QueryAssetsRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.ticker !== "") {
      writer.uint32(10).string(message.ticker);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): QueryAssetsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAssetsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          message.ticker = reader.string();
          continue;
        }
        case 2: {
          if (tag !== 18) {
            break;
          }

          message.pagination = PageRequest.decode(reader, reader.uint32());
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

  fromJSON(object: any): QueryAssetsRequest {
    return {
      ticker: isSet(object.ticker) ? gt.String(object.ticker) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryAssetsRequest): unknown {
    const obj: any = {};
    if (message.ticker !== "") {
      obj.ticker = message.ticker;
    }
    if (message.pagination !== undefined) {
      obj.pagination = PageRequest.toJSON(message.pagination);
    }
    return obj;
  },

  create(base?: DeepPartial<QueryAssetsRequest>): QueryAssetsRequest {
    return QueryAssetsRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<QueryAssetsRequest>): QueryAssetsRequest {
    const message = createBaseQueryAssetsRequest();
    message.ticker = object.ticker ?? "";
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryAssetsResponse(): QueryAssetsResponse {
  return { assets: [], pagination: undefined };
}

export const QueryAssetsResponse: MessageFns<QueryAssetsResponse> = {
  encode(message: QueryAssetsResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    for (const v of message.assets) {
      Asset.encode(v!, writer.uint32(10).fork()).join();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): QueryAssetsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAssetsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          message.assets.push(Asset.decode(reader, reader.uint32()));
          continue;
        }
        case 2: {
          if (tag !== 18) {
            break;
          }

          message.pagination = PageResponse.decode(reader, reader.uint32());
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

  fromJSON(object: any): QueryAssetsResponse {
    return {
      assets: gt.Array.isArray(object?.assets) ? object.assets.map((e: any) => Asset.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryAssetsResponse): unknown {
    const obj: any = {};
    if (message.assets?.length) {
      obj.assets = message.assets.map((e) => Asset.toJSON(e));
    }
    if (message.pagination !== undefined) {
      obj.pagination = PageResponse.toJSON(message.pagination);
    }
    return obj;
  },

  create(base?: DeepPartial<QueryAssetsResponse>): QueryAssetsResponse {
    return QueryAssetsResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<QueryAssetsResponse>): QueryAssetsResponse {
    const message = createBaseQueryAssetsResponse();
    message.assets = object.assets?.map((e) => Asset.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryAssetRequest(): QueryAssetRequest {
  return { denom: "" };
}

export const QueryAssetRequest: MessageFns<QueryAssetRequest> = {
  encode(message: QueryAssetRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): QueryAssetRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAssetRequest();
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
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryAssetRequest {
    return { denom: isSet(object.denom) ? gt.String(object.denom) : "" };
  },

  toJSON(message: QueryAssetRequest): unknown {
    const obj: any = {};
    if (message.denom !== "") {
      obj.denom = message.denom;
    }
    return obj;
  },

  create(base?: DeepPartial<QueryAssetRequest>): QueryAssetRequest {
    return QueryAssetRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<QueryAssetRequest>): QueryAssetRequest {
    const message = createBaseQueryAssetRequest();
    message.denom = object.denom ?? "";
    return message;
  },
};

function createBaseQueryAssetResponse(): QueryAssetResponse {
  return { asset: undefined };
}

export const QueryAssetResponse: MessageFns<QueryAssetResponse> = {
  encode(message: QueryAssetResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.asset !== undefined) {
      Asset.encode(message.asset, writer.uint32(10).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): QueryAssetResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAssetResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          message.asset = Asset.decode(reader, reader.uint32());
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

  fromJSON(object: any): QueryAssetResponse {
    return { asset: isSet(object.asset) ? Asset.fromJSON(object.asset) : undefined };
  },

  toJSON(message: QueryAssetResponse): unknown {
    const obj: any = {};
    if (message.asset !== undefined) {
      obj.asset = Asset.toJSON(message.asset);
    }
    return obj;
  },

  create(base?: DeepPartial<QueryAssetResponse>): QueryAssetResponse {
    return QueryAssetResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<QueryAssetResponse>): QueryAssetResponse {
    const message = createBaseQueryAssetResponse();
    message.asset = (object.asset !== undefined && object.asset !== null) ? Asset.fromPartial(object.asset) : undefined;
    return message;
  },
};

/** Query defines the gRPC querier service. */
export interface Query {
  /** Assets defined a gRPC query method that returns all assets registered. */
  Assets(request: QueryAssetsRequest): Promise<QueryAssetsResponse>;
  /**
   * Asset defines a gRPC query method that returns the asset associated with
   * the given token denomination.
   */
  Asset(request: QueryAssetRequest): Promise<QueryAssetResponse>;
}

export const QueryServiceName = "milkyway.assets.v1.Query";
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || QueryServiceName;
    this.rpc = rpc;
    this.Assets = this.Assets.bind(this);
    this.Asset = this.Asset.bind(this);
  }
  Assets(request: QueryAssetsRequest): Promise<QueryAssetsResponse> {
    const data = QueryAssetsRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "Assets", data);
    return promise.then((data) => QueryAssetsResponse.decode(new BinaryReader(data)));
  }

  Asset(request: QueryAssetRequest): Promise<QueryAssetResponse> {
    const data = QueryAssetRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "Asset", data);
    return promise.then((data) => QueryAssetResponse.decode(new BinaryReader(data)));
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}

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
