// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.3.0
//   protoc               unknown
// source: milkyway/services/v1/query.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { PageRequest, PageResponse } from "../../../cosmos/base/query/v1beta1/pagination";
import { Service, ServiceParams } from "./models";
import { Params } from "./params";

export const protobufPackage = "milkyway.services.v1";

/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
}

/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  params: Params | undefined;
}

/** QueryServicesRequest is the request type for the Query/Services RPC method. */
export interface QueryServicesRequest {
  pagination: PageRequest | undefined;
}

/** QueryServicesResponse is the response type for the Query/Services RPC method. */
export interface QueryServicesResponse {
  /** Services services defines the list of actively validates services */
  services: Service[];
  /** Pagination defines the pagination response */
  pagination: PageResponse | undefined;
}

/** QueryServiceRequest is the request type for the Query/Service RPC method. */
export interface QueryServiceRequest {
  /** ServiceID is the ID of the service to query */
  serviceId: number;
}

/** QueryServiceResponse is the response type for the Query/Service RPC method. */
export interface QueryServiceResponse {
  service: Service | undefined;
}

/**
 * QueryServiceParamsRequest is the request type for the Query/ServiceParams RPC
 * method.
 */
export interface QueryServiceParamsRequest {
  serviceId: number;
}

/**
 * QueryServiceParamsResponse is the response type for the Query/ServiceParams
 * RPC method.
 */
export interface QueryServiceParamsResponse {
  serviceParams: ServiceParams | undefined;
}

function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}

export const QueryParamsRequest: MessageFns<QueryParamsRequest> = {
  encode(_: QueryParamsRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): QueryParamsRequest {
    return {};
  },

  toJSON(_: QueryParamsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<QueryParamsRequest>): QueryParamsRequest {
    return QueryParamsRequest.fromPartial(base ?? {});
  },
  fromPartial(_: DeepPartial<QueryParamsRequest>): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
};

function createBaseQueryParamsResponse(): QueryParamsResponse {
  return { params: undefined };
}

export const QueryParamsResponse: MessageFns<QueryParamsResponse> = {
  encode(message: QueryParamsResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          message.params = Params.decode(reader, reader.uint32());
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

  fromJSON(object: any): QueryParamsResponse {
    return { params: isSet(object.params) ? Params.fromJSON(object.params) : undefined };
  },

  toJSON(message: QueryParamsResponse): unknown {
    const obj: any = {};
    if (message.params !== undefined) {
      obj.params = Params.toJSON(message.params);
    }
    return obj;
  },

  create(base?: DeepPartial<QueryParamsResponse>): QueryParamsResponse {
    return QueryParamsResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<QueryParamsResponse>): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    message.params = (object.params !== undefined && object.params !== null)
      ? Params.fromPartial(object.params)
      : undefined;
    return message;
  },
};

function createBaseQueryServicesRequest(): QueryServicesRequest {
  return { pagination: undefined };
}

export const QueryServicesRequest: MessageFns<QueryServicesRequest> = {
  encode(message: QueryServicesRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): QueryServicesRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryServicesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
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

  fromJSON(object: any): QueryServicesRequest {
    return { pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined };
  },

  toJSON(message: QueryServicesRequest): unknown {
    const obj: any = {};
    if (message.pagination !== undefined) {
      obj.pagination = PageRequest.toJSON(message.pagination);
    }
    return obj;
  },

  create(base?: DeepPartial<QueryServicesRequest>): QueryServicesRequest {
    return QueryServicesRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<QueryServicesRequest>): QueryServicesRequest {
    const message = createBaseQueryServicesRequest();
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryServicesResponse(): QueryServicesResponse {
  return { services: [], pagination: undefined };
}

export const QueryServicesResponse: MessageFns<QueryServicesResponse> = {
  encode(message: QueryServicesResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    for (const v of message.services) {
      Service.encode(v!, writer.uint32(10).fork()).join();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): QueryServicesResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryServicesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          message.services.push(Service.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryServicesResponse {
    return {
      services: gt.Array.isArray(object?.services) ? object.services.map((e: any) => Service.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryServicesResponse): unknown {
    const obj: any = {};
    if (message.services?.length) {
      obj.services = message.services.map((e) => Service.toJSON(e));
    }
    if (message.pagination !== undefined) {
      obj.pagination = PageResponse.toJSON(message.pagination);
    }
    return obj;
  },

  create(base?: DeepPartial<QueryServicesResponse>): QueryServicesResponse {
    return QueryServicesResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<QueryServicesResponse>): QueryServicesResponse {
    const message = createBaseQueryServicesResponse();
    message.services = object.services?.map((e) => Service.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryServiceRequest(): QueryServiceRequest {
  return { serviceId: 0 };
}

export const QueryServiceRequest: MessageFns<QueryServiceRequest> = {
  encode(message: QueryServiceRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.serviceId !== 0) {
      writer.uint32(8).uint32(message.serviceId);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): QueryServiceRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryServiceRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 8) {
            break;
          }

          message.serviceId = reader.uint32();
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

  fromJSON(object: any): QueryServiceRequest {
    return { serviceId: isSet(object.serviceId) ? gt.Number(object.serviceId) : 0 };
  },

  toJSON(message: QueryServiceRequest): unknown {
    const obj: any = {};
    if (message.serviceId !== 0) {
      obj.serviceId = Math.round(message.serviceId);
    }
    return obj;
  },

  create(base?: DeepPartial<QueryServiceRequest>): QueryServiceRequest {
    return QueryServiceRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<QueryServiceRequest>): QueryServiceRequest {
    const message = createBaseQueryServiceRequest();
    message.serviceId = object.serviceId ?? 0;
    return message;
  },
};

function createBaseQueryServiceResponse(): QueryServiceResponse {
  return { service: undefined };
}

export const QueryServiceResponse: MessageFns<QueryServiceResponse> = {
  encode(message: QueryServiceResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.service !== undefined) {
      Service.encode(message.service, writer.uint32(10).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): QueryServiceResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryServiceResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          message.service = Service.decode(reader, reader.uint32());
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

  fromJSON(object: any): QueryServiceResponse {
    return { service: isSet(object.service) ? Service.fromJSON(object.service) : undefined };
  },

  toJSON(message: QueryServiceResponse): unknown {
    const obj: any = {};
    if (message.service !== undefined) {
      obj.service = Service.toJSON(message.service);
    }
    return obj;
  },

  create(base?: DeepPartial<QueryServiceResponse>): QueryServiceResponse {
    return QueryServiceResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<QueryServiceResponse>): QueryServiceResponse {
    const message = createBaseQueryServiceResponse();
    message.service = (object.service !== undefined && object.service !== null)
      ? Service.fromPartial(object.service)
      : undefined;
    return message;
  },
};

function createBaseQueryServiceParamsRequest(): QueryServiceParamsRequest {
  return { serviceId: 0 };
}

export const QueryServiceParamsRequest: MessageFns<QueryServiceParamsRequest> = {
  encode(message: QueryServiceParamsRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.serviceId !== 0) {
      writer.uint32(8).uint32(message.serviceId);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): QueryServiceParamsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryServiceParamsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 8) {
            break;
          }

          message.serviceId = reader.uint32();
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

  fromJSON(object: any): QueryServiceParamsRequest {
    return { serviceId: isSet(object.serviceId) ? gt.Number(object.serviceId) : 0 };
  },

  toJSON(message: QueryServiceParamsRequest): unknown {
    const obj: any = {};
    if (message.serviceId !== 0) {
      obj.serviceId = Math.round(message.serviceId);
    }
    return obj;
  },

  create(base?: DeepPartial<QueryServiceParamsRequest>): QueryServiceParamsRequest {
    return QueryServiceParamsRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<QueryServiceParamsRequest>): QueryServiceParamsRequest {
    const message = createBaseQueryServiceParamsRequest();
    message.serviceId = object.serviceId ?? 0;
    return message;
  },
};

function createBaseQueryServiceParamsResponse(): QueryServiceParamsResponse {
  return { serviceParams: undefined };
}

export const QueryServiceParamsResponse: MessageFns<QueryServiceParamsResponse> = {
  encode(message: QueryServiceParamsResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.serviceParams !== undefined) {
      ServiceParams.encode(message.serviceParams, writer.uint32(10).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): QueryServiceParamsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryServiceParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          message.serviceParams = ServiceParams.decode(reader, reader.uint32());
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

  fromJSON(object: any): QueryServiceParamsResponse {
    return { serviceParams: isSet(object.serviceParams) ? ServiceParams.fromJSON(object.serviceParams) : undefined };
  },

  toJSON(message: QueryServiceParamsResponse): unknown {
    const obj: any = {};
    if (message.serviceParams !== undefined) {
      obj.serviceParams = ServiceParams.toJSON(message.serviceParams);
    }
    return obj;
  },

  create(base?: DeepPartial<QueryServiceParamsResponse>): QueryServiceParamsResponse {
    return QueryServiceParamsResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<QueryServiceParamsResponse>): QueryServiceParamsResponse {
    const message = createBaseQueryServiceParamsResponse();
    message.serviceParams = (object.serviceParams !== undefined && object.serviceParams !== null)
      ? ServiceParams.fromPartial(object.serviceParams)
      : undefined;
    return message;
  },
};

/** Query defines the gRPC querier service. */
export interface Query {
  /**
   * Service defines a gRPC query method that returns the service by the given
   * service id.
   */
  Service(request: QueryServiceRequest): Promise<QueryServiceResponse>;
  /**
   * Services defines a gRPC query method that returns the actively validates
   * services currently registered in the module.
   */
  Services(request: QueryServicesRequest): Promise<QueryServicesResponse>;
  /**
   * ServiceParams defines a gRPC query method that returns the parameters of
   * service.
   */
  ServiceParams(request: QueryServiceParamsRequest): Promise<QueryServiceParamsResponse>;
  /**
   * Params defines a gRPC query method that returns the parameters of the
   * module.
   */
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
}

export const QueryServiceName = "milkyway.services.v1.Query";
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || QueryServiceName;
    this.rpc = rpc;
    this.Service = this.Service.bind(this);
    this.Services = this.Services.bind(this);
    this.ServiceParams = this.ServiceParams.bind(this);
    this.Params = this.Params.bind(this);
  }
  Service(request: QueryServiceRequest): Promise<QueryServiceResponse> {
    const data = QueryServiceRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "Service", data);
    return promise.then((data) => QueryServiceResponse.decode(new BinaryReader(data)));
  }

  Services(request: QueryServicesRequest): Promise<QueryServicesResponse> {
    const data = QueryServicesRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "Services", data);
    return promise.then((data) => QueryServicesResponse.decode(new BinaryReader(data)));
  }

  ServiceParams(request: QueryServiceParamsRequest): Promise<QueryServiceParamsResponse> {
    const data = QueryServiceParamsRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "ServiceParams", data);
    return promise.then((data) => QueryServiceParamsResponse.decode(new BinaryReader(data)));
  }

  Params(request: QueryParamsRequest): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "Params", data);
    return promise.then((data) => QueryParamsResponse.decode(new BinaryReader(data)));
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