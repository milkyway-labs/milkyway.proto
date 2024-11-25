// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.3.0
//   protoc               unknown
// source: milkyway/restaking/v1/genesis.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { Delegation, UnbondingDelegation, UserPreferences } from "./models";
import { Params } from "./params";

export const protobufPackage = "milkyway.restaking.v1";

/**
 * OperatorJoinedServicesRecord represents the services joined by a
 * individual operator.
 */
export interface OperatorJoinedServices {
  /** OperatorID is the ID of the operator. */
  operatorId: number;
  /** ServiceIDs represents the list of services joined by the operator. */
  serviceIds: number[];
}

/**
 * ServiceAllowedOperators represents the operators allowed to secure a
 * a service.
 */
export interface ServiceAllowedOperators {
  /** ServiceID is the ID of the service. */
  serviceId: number;
  /** OperatorIDs defines the allowed operator IDs. */
  operatorIds: number[];
}

/**
 * ServiceSecuringPools represents the list pools from which a service can
 * borrow security
 */
export interface ServiceSecuringPools {
  /** ServiceID is the ID of the service. */
  serviceId: number;
  /**
   * PoolIDs defines the IDs of the pools from which the service can borrow
   * security.
   */
  poolIds: number[];
}

/** UserPreferencesEntry represents the user preferences. */
export interface UserPreferencesEntry {
  /** UserAddress is the encoded address of the user. */
  userAddress: string;
  /** Preferences is the user preferences. */
  preferences: UserPreferences | undefined;
}

/** GenesisState defines the restaking module's genesis state. */
export interface GenesisState {
  /** Params defines the parameters of the module. */
  params:
    | Params
    | undefined;
  /**
   * OperatorsJoinedServices defines the list of the services that each operator
   * has joined.
   */
  operatorsJoinedServices: OperatorJoinedServices[];
  /**
   * ServiceAllowedOperators defines the operators allowed to secure each
   * service.
   */
  servicesAllowedOperators: ServiceAllowedOperators[];
  /** ServicesSecuringPools defines the whitelisted pools for each service. */
  servicesSecuringPools: ServiceSecuringPools[];
  /** Delegations represents the delegations. */
  delegations: Delegation[];
  /** UnbondingDelegations represents the unbonding delegations. */
  unbondingDelegations: UnbondingDelegation[];
  /** UserPreferences represents the user preferences. */
  usersPreferences: UserPreferencesEntry[];
}

function createBaseOperatorJoinedServices(): OperatorJoinedServices {
  return { operatorId: 0, serviceIds: [] };
}

export const OperatorJoinedServices: MessageFns<OperatorJoinedServices> = {
  encode(message: OperatorJoinedServices, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.operatorId !== 0) {
      writer.uint32(8).uint32(message.operatorId);
    }
    writer.uint32(18).fork();
    for (const v of message.serviceIds) {
      writer.uint32(v);
    }
    writer.join();
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): OperatorJoinedServices {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOperatorJoinedServices();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 8) {
            break;
          }

          message.operatorId = reader.uint32();
          continue;
        }
        case 2: {
          if (tag === 16) {
            message.serviceIds.push(reader.uint32());

            continue;
          }

          if (tag === 18) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.serviceIds.push(reader.uint32());
            }

            continue;
          }

          break;
        }
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): OperatorJoinedServices {
    return {
      operatorId: isSet(object.operatorId) ? gt.Number(object.operatorId) : 0,
      serviceIds: gt.Array.isArray(object?.serviceIds) ? object.serviceIds.map((e: any) => gt.Number(e)) : [],
    };
  },

  toJSON(message: OperatorJoinedServices): unknown {
    const obj: any = {};
    if (message.operatorId !== 0) {
      obj.operatorId = Math.round(message.operatorId);
    }
    if (message.serviceIds?.length) {
      obj.serviceIds = message.serviceIds.map((e) => Math.round(e));
    }
    return obj;
  },

  create(base?: DeepPartial<OperatorJoinedServices>): OperatorJoinedServices {
    return OperatorJoinedServices.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<OperatorJoinedServices>): OperatorJoinedServices {
    const message = createBaseOperatorJoinedServices();
    message.operatorId = object.operatorId ?? 0;
    message.serviceIds = object.serviceIds?.map((e) => e) || [];
    return message;
  },
};

function createBaseServiceAllowedOperators(): ServiceAllowedOperators {
  return { serviceId: 0, operatorIds: [] };
}

export const ServiceAllowedOperators: MessageFns<ServiceAllowedOperators> = {
  encode(message: ServiceAllowedOperators, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.serviceId !== 0) {
      writer.uint32(8).uint32(message.serviceId);
    }
    writer.uint32(18).fork();
    for (const v of message.operatorIds) {
      writer.uint32(v);
    }
    writer.join();
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): ServiceAllowedOperators {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseServiceAllowedOperators();
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
        case 2: {
          if (tag === 16) {
            message.operatorIds.push(reader.uint32());

            continue;
          }

          if (tag === 18) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.operatorIds.push(reader.uint32());
            }

            continue;
          }

          break;
        }
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ServiceAllowedOperators {
    return {
      serviceId: isSet(object.serviceId) ? gt.Number(object.serviceId) : 0,
      operatorIds: gt.Array.isArray(object?.operatorIds) ? object.operatorIds.map((e: any) => gt.Number(e)) : [],
    };
  },

  toJSON(message: ServiceAllowedOperators): unknown {
    const obj: any = {};
    if (message.serviceId !== 0) {
      obj.serviceId = Math.round(message.serviceId);
    }
    if (message.operatorIds?.length) {
      obj.operatorIds = message.operatorIds.map((e) => Math.round(e));
    }
    return obj;
  },

  create(base?: DeepPartial<ServiceAllowedOperators>): ServiceAllowedOperators {
    return ServiceAllowedOperators.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ServiceAllowedOperators>): ServiceAllowedOperators {
    const message = createBaseServiceAllowedOperators();
    message.serviceId = object.serviceId ?? 0;
    message.operatorIds = object.operatorIds?.map((e) => e) || [];
    return message;
  },
};

function createBaseServiceSecuringPools(): ServiceSecuringPools {
  return { serviceId: 0, poolIds: [] };
}

export const ServiceSecuringPools: MessageFns<ServiceSecuringPools> = {
  encode(message: ServiceSecuringPools, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.serviceId !== 0) {
      writer.uint32(8).uint32(message.serviceId);
    }
    writer.uint32(18).fork();
    for (const v of message.poolIds) {
      writer.uint32(v);
    }
    writer.join();
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): ServiceSecuringPools {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseServiceSecuringPools();
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
        case 2: {
          if (tag === 16) {
            message.poolIds.push(reader.uint32());

            continue;
          }

          if (tag === 18) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.poolIds.push(reader.uint32());
            }

            continue;
          }

          break;
        }
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ServiceSecuringPools {
    return {
      serviceId: isSet(object.serviceId) ? gt.Number(object.serviceId) : 0,
      poolIds: gt.Array.isArray(object?.poolIds) ? object.poolIds.map((e: any) => gt.Number(e)) : [],
    };
  },

  toJSON(message: ServiceSecuringPools): unknown {
    const obj: any = {};
    if (message.serviceId !== 0) {
      obj.serviceId = Math.round(message.serviceId);
    }
    if (message.poolIds?.length) {
      obj.poolIds = message.poolIds.map((e) => Math.round(e));
    }
    return obj;
  },

  create(base?: DeepPartial<ServiceSecuringPools>): ServiceSecuringPools {
    return ServiceSecuringPools.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ServiceSecuringPools>): ServiceSecuringPools {
    const message = createBaseServiceSecuringPools();
    message.serviceId = object.serviceId ?? 0;
    message.poolIds = object.poolIds?.map((e) => e) || [];
    return message;
  },
};

function createBaseUserPreferencesEntry(): UserPreferencesEntry {
  return { userAddress: "", preferences: undefined };
}

export const UserPreferencesEntry: MessageFns<UserPreferencesEntry> = {
  encode(message: UserPreferencesEntry, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.userAddress !== "") {
      writer.uint32(10).string(message.userAddress);
    }
    if (message.preferences !== undefined) {
      UserPreferences.encode(message.preferences, writer.uint32(18).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): UserPreferencesEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUserPreferencesEntry();
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

          message.preferences = UserPreferences.decode(reader, reader.uint32());
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

  fromJSON(object: any): UserPreferencesEntry {
    return {
      userAddress: isSet(object.userAddress) ? gt.String(object.userAddress) : "",
      preferences: isSet(object.preferences) ? UserPreferences.fromJSON(object.preferences) : undefined,
    };
  },

  toJSON(message: UserPreferencesEntry): unknown {
    const obj: any = {};
    if (message.userAddress !== "") {
      obj.userAddress = message.userAddress;
    }
    if (message.preferences !== undefined) {
      obj.preferences = UserPreferences.toJSON(message.preferences);
    }
    return obj;
  },

  create(base?: DeepPartial<UserPreferencesEntry>): UserPreferencesEntry {
    return UserPreferencesEntry.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<UserPreferencesEntry>): UserPreferencesEntry {
    const message = createBaseUserPreferencesEntry();
    message.userAddress = object.userAddress ?? "";
    message.preferences = (object.preferences !== undefined && object.preferences !== null)
      ? UserPreferences.fromPartial(object.preferences)
      : undefined;
    return message;
  },
};

function createBaseGenesisState(): GenesisState {
  return {
    params: undefined,
    operatorsJoinedServices: [],
    servicesAllowedOperators: [],
    servicesSecuringPools: [],
    delegations: [],
    unbondingDelegations: [],
    usersPreferences: [],
  };
}

export const GenesisState: MessageFns<GenesisState> = {
  encode(message: GenesisState, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).join();
    }
    for (const v of message.operatorsJoinedServices) {
      OperatorJoinedServices.encode(v!, writer.uint32(18).fork()).join();
    }
    for (const v of message.servicesAllowedOperators) {
      ServiceAllowedOperators.encode(v!, writer.uint32(26).fork()).join();
    }
    for (const v of message.servicesSecuringPools) {
      ServiceSecuringPools.encode(v!, writer.uint32(34).fork()).join();
    }
    for (const v of message.delegations) {
      Delegation.encode(v!, writer.uint32(42).fork()).join();
    }
    for (const v of message.unbondingDelegations) {
      UnbondingDelegation.encode(v!, writer.uint32(50).fork()).join();
    }
    for (const v of message.usersPreferences) {
      UserPreferencesEntry.encode(v!, writer.uint32(58).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();
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
        case 2: {
          if (tag !== 18) {
            break;
          }

          message.operatorsJoinedServices.push(OperatorJoinedServices.decode(reader, reader.uint32()));
          continue;
        }
        case 3: {
          if (tag !== 26) {
            break;
          }

          message.servicesAllowedOperators.push(ServiceAllowedOperators.decode(reader, reader.uint32()));
          continue;
        }
        case 4: {
          if (tag !== 34) {
            break;
          }

          message.servicesSecuringPools.push(ServiceSecuringPools.decode(reader, reader.uint32()));
          continue;
        }
        case 5: {
          if (tag !== 42) {
            break;
          }

          message.delegations.push(Delegation.decode(reader, reader.uint32()));
          continue;
        }
        case 6: {
          if (tag !== 50) {
            break;
          }

          message.unbondingDelegations.push(UnbondingDelegation.decode(reader, reader.uint32()));
          continue;
        }
        case 7: {
          if (tag !== 58) {
            break;
          }

          message.usersPreferences.push(UserPreferencesEntry.decode(reader, reader.uint32()));
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

  fromJSON(object: any): GenesisState {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
      operatorsJoinedServices: gt.Array.isArray(object?.operatorsJoinedServices)
        ? object.operatorsJoinedServices.map((e: any) => OperatorJoinedServices.fromJSON(e))
        : [],
      servicesAllowedOperators: gt.Array.isArray(object?.servicesAllowedOperators)
        ? object.servicesAllowedOperators.map((e: any) => ServiceAllowedOperators.fromJSON(e))
        : [],
      servicesSecuringPools: gt.Array.isArray(object?.servicesSecuringPools)
        ? object.servicesSecuringPools.map((e: any) => ServiceSecuringPools.fromJSON(e))
        : [],
      delegations: gt.Array.isArray(object?.delegations)
        ? object.delegations.map((e: any) => Delegation.fromJSON(e))
        : [],
      unbondingDelegations: gt.Array.isArray(object?.unbondingDelegations)
        ? object.unbondingDelegations.map((e: any) => UnbondingDelegation.fromJSON(e))
        : [],
      usersPreferences: gt.Array.isArray(object?.usersPreferences)
        ? object.usersPreferences.map((e: any) => UserPreferencesEntry.fromJSON(e))
        : [],
    };
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    if (message.params !== undefined) {
      obj.params = Params.toJSON(message.params);
    }
    if (message.operatorsJoinedServices?.length) {
      obj.operatorsJoinedServices = message.operatorsJoinedServices.map((e) => OperatorJoinedServices.toJSON(e));
    }
    if (message.servicesAllowedOperators?.length) {
      obj.servicesAllowedOperators = message.servicesAllowedOperators.map((e) => ServiceAllowedOperators.toJSON(e));
    }
    if (message.servicesSecuringPools?.length) {
      obj.servicesSecuringPools = message.servicesSecuringPools.map((e) => ServiceSecuringPools.toJSON(e));
    }
    if (message.delegations?.length) {
      obj.delegations = message.delegations.map((e) => Delegation.toJSON(e));
    }
    if (message.unbondingDelegations?.length) {
      obj.unbondingDelegations = message.unbondingDelegations.map((e) => UnbondingDelegation.toJSON(e));
    }
    if (message.usersPreferences?.length) {
      obj.usersPreferences = message.usersPreferences.map((e) => UserPreferencesEntry.toJSON(e));
    }
    return obj;
  },

  create(base?: DeepPartial<GenesisState>): GenesisState {
    return GenesisState.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.params = (object.params !== undefined && object.params !== null)
      ? Params.fromPartial(object.params)
      : undefined;
    message.operatorsJoinedServices =
      object.operatorsJoinedServices?.map((e) => OperatorJoinedServices.fromPartial(e)) || [];
    message.servicesAllowedOperators =
      object.servicesAllowedOperators?.map((e) => ServiceAllowedOperators.fromPartial(e)) || [];
    message.servicesSecuringPools = object.servicesSecuringPools?.map((e) => ServiceSecuringPools.fromPartial(e)) || [];
    message.delegations = object.delegations?.map((e) => Delegation.fromPartial(e)) || [];
    message.unbondingDelegations = object.unbondingDelegations?.map((e) => UnbondingDelegation.fromPartial(e)) || [];
    message.usersPreferences = object.usersPreferences?.map((e) => UserPreferencesEntry.fromPartial(e)) || [];
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
