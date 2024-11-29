import * as _135 from "./api/http";
import * as _136 from "./protobuf/descriptor";
import * as _137 from "./protobuf/any";
import * as _138 from "./protobuf/timestamp";
import * as _139 from "./protobuf/duration";
export declare namespace google {
    const api: {
        Http: {
            typeUrl: string;
            encode(message: _135.Http, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _135.Http;
            fromPartial(object: Partial<_135.Http>): _135.Http;
            fromAmino(object: _135.HttpAmino): _135.Http;
            toAmino(message: _135.Http): _135.HttpAmino;
            fromAminoMsg(object: _135.HttpAminoMsg): _135.Http;
            fromProtoMsg(message: _135.HttpProtoMsg): _135.Http;
            toProto(message: _135.Http): Uint8Array;
            toProtoMsg(message: _135.Http): _135.HttpProtoMsg;
        };
        HttpRule: {
            typeUrl: string;
            encode(message: _135.HttpRule, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _135.HttpRule;
            fromPartial(object: Partial<_135.HttpRule>): _135.HttpRule;
            fromAmino(object: _135.HttpRuleAmino): _135.HttpRule;
            toAmino(message: _135.HttpRule): _135.HttpRuleAmino;
            fromAminoMsg(object: _135.HttpRuleAminoMsg): _135.HttpRule;
            fromProtoMsg(message: _135.HttpRuleProtoMsg): _135.HttpRule;
            toProto(message: _135.HttpRule): Uint8Array;
            toProtoMsg(message: _135.HttpRule): _135.HttpRuleProtoMsg;
        };
        CustomHttpPattern: {
            typeUrl: string;
            encode(message: _135.CustomHttpPattern, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _135.CustomHttpPattern;
            fromPartial(object: Partial<_135.CustomHttpPattern>): _135.CustomHttpPattern;
            fromAmino(object: _135.CustomHttpPatternAmino): _135.CustomHttpPattern;
            toAmino(message: _135.CustomHttpPattern): _135.CustomHttpPatternAmino;
            fromAminoMsg(object: _135.CustomHttpPatternAminoMsg): _135.CustomHttpPattern;
            fromProtoMsg(message: _135.CustomHttpPatternProtoMsg): _135.CustomHttpPattern;
            toProto(message: _135.CustomHttpPattern): Uint8Array;
            toProtoMsg(message: _135.CustomHttpPattern): _135.CustomHttpPatternProtoMsg;
        };
    };
    const protobuf: {
        Duration: {
            typeUrl: string;
            encode(message: _139.Duration, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _139.Duration;
            fromPartial(object: Partial<_139.Duration>): _139.Duration;
            fromAmino(object: string): _139.Duration;
            toAmino(message: _139.Duration): string;
            fromAminoMsg(object: _139.DurationAminoMsg): _139.Duration;
            fromProtoMsg(message: _139.DurationProtoMsg): _139.Duration;
            toProto(message: _139.Duration): Uint8Array;
            toProtoMsg(message: _139.Duration): _139.DurationProtoMsg;
        };
        Timestamp: {
            typeUrl: string;
            encode(message: _138.Timestamp, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _138.Timestamp;
            fromPartial(object: Partial<_138.Timestamp>): _138.Timestamp;
            fromAmino(object: string): _138.Timestamp;
            toAmino(message: _138.Timestamp): string;
            fromAminoMsg(object: _138.TimestampAminoMsg): _138.Timestamp;
            fromProtoMsg(message: _138.TimestampProtoMsg): _138.Timestamp;
            toProto(message: _138.Timestamp): Uint8Array;
            toProtoMsg(message: _138.Timestamp): _138.TimestampProtoMsg;
        };
        Any: {
            typeUrl: string;
            encode(message: _137.Any, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _137.Any;
            fromPartial(object: Partial<_137.Any>): _137.Any;
            fromAmino(object: _137.AnyAmino): _137.Any;
            toAmino(message: _137.Any): _137.AnyAmino;
            fromAminoMsg(object: _137.AnyAminoMsg): _137.Any;
            fromProtoMsg(message: _137.AnyProtoMsg): _137.Any;
            toProto(message: _137.Any): Uint8Array;
            toProtoMsg(message: _137.Any): _137.AnyProtoMsg;
        };
        fieldDescriptorProto_TypeFromJSON(object: any): _136.FieldDescriptorProto_Type;
        fieldDescriptorProto_TypeToJSON(object: _136.FieldDescriptorProto_Type): string;
        fieldDescriptorProto_LabelFromJSON(object: any): _136.FieldDescriptorProto_Label;
        fieldDescriptorProto_LabelToJSON(object: _136.FieldDescriptorProto_Label): string;
        fileOptions_OptimizeModeFromJSON(object: any): _136.FileOptions_OptimizeMode;
        fileOptions_OptimizeModeToJSON(object: _136.FileOptions_OptimizeMode): string;
        fieldOptions_CTypeFromJSON(object: any): _136.FieldOptions_CType;
        fieldOptions_CTypeToJSON(object: _136.FieldOptions_CType): string;
        fieldOptions_JSTypeFromJSON(object: any): _136.FieldOptions_JSType;
        fieldOptions_JSTypeToJSON(object: _136.FieldOptions_JSType): string;
        methodOptions_IdempotencyLevelFromJSON(object: any): _136.MethodOptions_IdempotencyLevel;
        methodOptions_IdempotencyLevelToJSON(object: _136.MethodOptions_IdempotencyLevel): string;
        FieldDescriptorProto_Type: typeof _136.FieldDescriptorProto_Type;
        FieldDescriptorProto_TypeSDKType: typeof _136.FieldDescriptorProto_Type;
        FieldDescriptorProto_TypeAmino: typeof _136.FieldDescriptorProto_Type;
        FieldDescriptorProto_Label: typeof _136.FieldDescriptorProto_Label;
        FieldDescriptorProto_LabelSDKType: typeof _136.FieldDescriptorProto_Label;
        FieldDescriptorProto_LabelAmino: typeof _136.FieldDescriptorProto_Label;
        FileOptions_OptimizeMode: typeof _136.FileOptions_OptimizeMode;
        FileOptions_OptimizeModeSDKType: typeof _136.FileOptions_OptimizeMode;
        FileOptions_OptimizeModeAmino: typeof _136.FileOptions_OptimizeMode;
        FieldOptions_CType: typeof _136.FieldOptions_CType;
        FieldOptions_CTypeSDKType: typeof _136.FieldOptions_CType;
        FieldOptions_CTypeAmino: typeof _136.FieldOptions_CType;
        FieldOptions_JSType: typeof _136.FieldOptions_JSType;
        FieldOptions_JSTypeSDKType: typeof _136.FieldOptions_JSType;
        FieldOptions_JSTypeAmino: typeof _136.FieldOptions_JSType;
        MethodOptions_IdempotencyLevel: typeof _136.MethodOptions_IdempotencyLevel;
        MethodOptions_IdempotencyLevelSDKType: typeof _136.MethodOptions_IdempotencyLevel;
        MethodOptions_IdempotencyLevelAmino: typeof _136.MethodOptions_IdempotencyLevel;
        FileDescriptorSet: {
            typeUrl: string;
            encode(message: _136.FileDescriptorSet, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _136.FileDescriptorSet;
            fromPartial(object: Partial<_136.FileDescriptorSet>): _136.FileDescriptorSet;
            fromAmino(object: _136.FileDescriptorSetAmino): _136.FileDescriptorSet;
            toAmino(message: _136.FileDescriptorSet): _136.FileDescriptorSetAmino;
            fromAminoMsg(object: _136.FileDescriptorSetAminoMsg): _136.FileDescriptorSet;
            fromProtoMsg(message: _136.FileDescriptorSetProtoMsg): _136.FileDescriptorSet;
            toProto(message: _136.FileDescriptorSet): Uint8Array;
            toProtoMsg(message: _136.FileDescriptorSet): _136.FileDescriptorSetProtoMsg;
        };
        FileDescriptorProto: {
            typeUrl: string;
            encode(message: _136.FileDescriptorProto, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _136.FileDescriptorProto;
            fromPartial(object: Partial<_136.FileDescriptorProto>): _136.FileDescriptorProto;
            fromAmino(object: _136.FileDescriptorProtoAmino): _136.FileDescriptorProto;
            toAmino(message: _136.FileDescriptorProto): _136.FileDescriptorProtoAmino;
            fromAminoMsg(object: _136.FileDescriptorProtoAminoMsg): _136.FileDescriptorProto;
            fromProtoMsg(message: _136.FileDescriptorProtoProtoMsg): _136.FileDescriptorProto;
            toProto(message: _136.FileDescriptorProto): Uint8Array;
            toProtoMsg(message: _136.FileDescriptorProto): _136.FileDescriptorProtoProtoMsg;
        };
        DescriptorProto: {
            typeUrl: string;
            encode(message: _136.DescriptorProto, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _136.DescriptorProto;
            fromPartial(object: Partial<_136.DescriptorProto>): _136.DescriptorProto;
            fromAmino(object: _136.DescriptorProtoAmino): _136.DescriptorProto;
            toAmino(message: _136.DescriptorProto): _136.DescriptorProtoAmino;
            fromAminoMsg(object: _136.DescriptorProtoAminoMsg): _136.DescriptorProto;
            fromProtoMsg(message: _136.DescriptorProtoProtoMsg): _136.DescriptorProto;
            toProto(message: _136.DescriptorProto): Uint8Array;
            toProtoMsg(message: _136.DescriptorProto): _136.DescriptorProtoProtoMsg;
        };
        DescriptorProto_ExtensionRange: {
            typeUrl: string;
            encode(message: _136.DescriptorProto_ExtensionRange, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _136.DescriptorProto_ExtensionRange;
            fromPartial(object: Partial<_136.DescriptorProto_ExtensionRange>): _136.DescriptorProto_ExtensionRange;
            fromAmino(object: _136.DescriptorProto_ExtensionRangeAmino): _136.DescriptorProto_ExtensionRange;
            toAmino(message: _136.DescriptorProto_ExtensionRange): _136.DescriptorProto_ExtensionRangeAmino;
            fromAminoMsg(object: _136.DescriptorProto_ExtensionRangeAminoMsg): _136.DescriptorProto_ExtensionRange;
            fromProtoMsg(message: _136.DescriptorProto_ExtensionRangeProtoMsg): _136.DescriptorProto_ExtensionRange;
            toProto(message: _136.DescriptorProto_ExtensionRange): Uint8Array;
            toProtoMsg(message: _136.DescriptorProto_ExtensionRange): _136.DescriptorProto_ExtensionRangeProtoMsg;
        };
        DescriptorProto_ReservedRange: {
            typeUrl: string;
            encode(message: _136.DescriptorProto_ReservedRange, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _136.DescriptorProto_ReservedRange;
            fromPartial(object: Partial<_136.DescriptorProto_ReservedRange>): _136.DescriptorProto_ReservedRange;
            fromAmino(object: _136.DescriptorProto_ReservedRangeAmino): _136.DescriptorProto_ReservedRange;
            toAmino(message: _136.DescriptorProto_ReservedRange): _136.DescriptorProto_ReservedRangeAmino;
            fromAminoMsg(object: _136.DescriptorProto_ReservedRangeAminoMsg): _136.DescriptorProto_ReservedRange;
            fromProtoMsg(message: _136.DescriptorProto_ReservedRangeProtoMsg): _136.DescriptorProto_ReservedRange;
            toProto(message: _136.DescriptorProto_ReservedRange): Uint8Array;
            toProtoMsg(message: _136.DescriptorProto_ReservedRange): _136.DescriptorProto_ReservedRangeProtoMsg;
        };
        ExtensionRangeOptions: {
            typeUrl: string;
            encode(message: _136.ExtensionRangeOptions, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _136.ExtensionRangeOptions;
            fromPartial(object: Partial<_136.ExtensionRangeOptions>): _136.ExtensionRangeOptions;
            fromAmino(object: _136.ExtensionRangeOptionsAmino): _136.ExtensionRangeOptions;
            toAmino(message: _136.ExtensionRangeOptions): _136.ExtensionRangeOptionsAmino;
            fromAminoMsg(object: _136.ExtensionRangeOptionsAminoMsg): _136.ExtensionRangeOptions;
            fromProtoMsg(message: _136.ExtensionRangeOptionsProtoMsg): _136.ExtensionRangeOptions;
            toProto(message: _136.ExtensionRangeOptions): Uint8Array;
            toProtoMsg(message: _136.ExtensionRangeOptions): _136.ExtensionRangeOptionsProtoMsg;
        };
        FieldDescriptorProto: {
            typeUrl: string;
            encode(message: _136.FieldDescriptorProto, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _136.FieldDescriptorProto;
            fromPartial(object: Partial<_136.FieldDescriptorProto>): _136.FieldDescriptorProto;
            fromAmino(object: _136.FieldDescriptorProtoAmino): _136.FieldDescriptorProto;
            toAmino(message: _136.FieldDescriptorProto): _136.FieldDescriptorProtoAmino;
            fromAminoMsg(object: _136.FieldDescriptorProtoAminoMsg): _136.FieldDescriptorProto;
            fromProtoMsg(message: _136.FieldDescriptorProtoProtoMsg): _136.FieldDescriptorProto;
            toProto(message: _136.FieldDescriptorProto): Uint8Array;
            toProtoMsg(message: _136.FieldDescriptorProto): _136.FieldDescriptorProtoProtoMsg;
        };
        OneofDescriptorProto: {
            typeUrl: string;
            encode(message: _136.OneofDescriptorProto, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _136.OneofDescriptorProto;
            fromPartial(object: Partial<_136.OneofDescriptorProto>): _136.OneofDescriptorProto;
            fromAmino(object: _136.OneofDescriptorProtoAmino): _136.OneofDescriptorProto;
            toAmino(message: _136.OneofDescriptorProto): _136.OneofDescriptorProtoAmino;
            fromAminoMsg(object: _136.OneofDescriptorProtoAminoMsg): _136.OneofDescriptorProto;
            fromProtoMsg(message: _136.OneofDescriptorProtoProtoMsg): _136.OneofDescriptorProto;
            toProto(message: _136.OneofDescriptorProto): Uint8Array;
            toProtoMsg(message: _136.OneofDescriptorProto): _136.OneofDescriptorProtoProtoMsg;
        };
        EnumDescriptorProto: {
            typeUrl: string;
            encode(message: _136.EnumDescriptorProto, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _136.EnumDescriptorProto;
            fromPartial(object: Partial<_136.EnumDescriptorProto>): _136.EnumDescriptorProto;
            fromAmino(object: _136.EnumDescriptorProtoAmino): _136.EnumDescriptorProto;
            toAmino(message: _136.EnumDescriptorProto): _136.EnumDescriptorProtoAmino;
            fromAminoMsg(object: _136.EnumDescriptorProtoAminoMsg): _136.EnumDescriptorProto;
            fromProtoMsg(message: _136.EnumDescriptorProtoProtoMsg): _136.EnumDescriptorProto;
            toProto(message: _136.EnumDescriptorProto): Uint8Array;
            toProtoMsg(message: _136.EnumDescriptorProto): _136.EnumDescriptorProtoProtoMsg;
        };
        EnumDescriptorProto_EnumReservedRange: {
            typeUrl: string;
            encode(message: _136.EnumDescriptorProto_EnumReservedRange, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _136.EnumDescriptorProto_EnumReservedRange;
            fromPartial(object: Partial<_136.EnumDescriptorProto_EnumReservedRange>): _136.EnumDescriptorProto_EnumReservedRange;
            fromAmino(object: _136.EnumDescriptorProto_EnumReservedRangeAmino): _136.EnumDescriptorProto_EnumReservedRange;
            toAmino(message: _136.EnumDescriptorProto_EnumReservedRange): _136.EnumDescriptorProto_EnumReservedRangeAmino;
            fromAminoMsg(object: _136.EnumDescriptorProto_EnumReservedRangeAminoMsg): _136.EnumDescriptorProto_EnumReservedRange;
            fromProtoMsg(message: _136.EnumDescriptorProto_EnumReservedRangeProtoMsg): _136.EnumDescriptorProto_EnumReservedRange;
            toProto(message: _136.EnumDescriptorProto_EnumReservedRange): Uint8Array;
            toProtoMsg(message: _136.EnumDescriptorProto_EnumReservedRange): _136.EnumDescriptorProto_EnumReservedRangeProtoMsg;
        };
        EnumValueDescriptorProto: {
            typeUrl: string;
            encode(message: _136.EnumValueDescriptorProto, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _136.EnumValueDescriptorProto;
            fromPartial(object: Partial<_136.EnumValueDescriptorProto>): _136.EnumValueDescriptorProto;
            fromAmino(object: _136.EnumValueDescriptorProtoAmino): _136.EnumValueDescriptorProto;
            toAmino(message: _136.EnumValueDescriptorProto): _136.EnumValueDescriptorProtoAmino;
            fromAminoMsg(object: _136.EnumValueDescriptorProtoAminoMsg): _136.EnumValueDescriptorProto;
            fromProtoMsg(message: _136.EnumValueDescriptorProtoProtoMsg): _136.EnumValueDescriptorProto;
            toProto(message: _136.EnumValueDescriptorProto): Uint8Array;
            toProtoMsg(message: _136.EnumValueDescriptorProto): _136.EnumValueDescriptorProtoProtoMsg;
        };
        ServiceDescriptorProto: {
            typeUrl: string;
            encode(message: _136.ServiceDescriptorProto, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _136.ServiceDescriptorProto;
            fromPartial(object: Partial<_136.ServiceDescriptorProto>): _136.ServiceDescriptorProto;
            fromAmino(object: _136.ServiceDescriptorProtoAmino): _136.ServiceDescriptorProto;
            toAmino(message: _136.ServiceDescriptorProto): _136.ServiceDescriptorProtoAmino;
            fromAminoMsg(object: _136.ServiceDescriptorProtoAminoMsg): _136.ServiceDescriptorProto;
            fromProtoMsg(message: _136.ServiceDescriptorProtoProtoMsg): _136.ServiceDescriptorProto;
            toProto(message: _136.ServiceDescriptorProto): Uint8Array;
            toProtoMsg(message: _136.ServiceDescriptorProto): _136.ServiceDescriptorProtoProtoMsg;
        };
        MethodDescriptorProto: {
            typeUrl: string;
            encode(message: _136.MethodDescriptorProto, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _136.MethodDescriptorProto;
            fromPartial(object: Partial<_136.MethodDescriptorProto>): _136.MethodDescriptorProto;
            fromAmino(object: _136.MethodDescriptorProtoAmino): _136.MethodDescriptorProto;
            toAmino(message: _136.MethodDescriptorProto): _136.MethodDescriptorProtoAmino;
            fromAminoMsg(object: _136.MethodDescriptorProtoAminoMsg): _136.MethodDescriptorProto;
            fromProtoMsg(message: _136.MethodDescriptorProtoProtoMsg): _136.MethodDescriptorProto;
            toProto(message: _136.MethodDescriptorProto): Uint8Array;
            toProtoMsg(message: _136.MethodDescriptorProto): _136.MethodDescriptorProtoProtoMsg;
        };
        FileOptions: {
            typeUrl: string;
            encode(message: _136.FileOptions, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _136.FileOptions;
            fromPartial(object: Partial<_136.FileOptions>): _136.FileOptions;
            fromAmino(object: _136.FileOptionsAmino): _136.FileOptions;
            toAmino(message: _136.FileOptions): _136.FileOptionsAmino;
            fromAminoMsg(object: _136.FileOptionsAminoMsg): _136.FileOptions;
            fromProtoMsg(message: _136.FileOptionsProtoMsg): _136.FileOptions;
            toProto(message: _136.FileOptions): Uint8Array;
            toProtoMsg(message: _136.FileOptions): _136.FileOptionsProtoMsg;
        };
        MessageOptions: {
            typeUrl: string;
            encode(message: _136.MessageOptions, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _136.MessageOptions;
            fromPartial(object: Partial<_136.MessageOptions>): _136.MessageOptions;
            fromAmino(object: _136.MessageOptionsAmino): _136.MessageOptions;
            toAmino(message: _136.MessageOptions): _136.MessageOptionsAmino;
            fromAminoMsg(object: _136.MessageOptionsAminoMsg): _136.MessageOptions;
            fromProtoMsg(message: _136.MessageOptionsProtoMsg): _136.MessageOptions;
            toProto(message: _136.MessageOptions): Uint8Array;
            toProtoMsg(message: _136.MessageOptions): _136.MessageOptionsProtoMsg;
        };
        FieldOptions: {
            typeUrl: string;
            encode(message: _136.FieldOptions, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _136.FieldOptions;
            fromPartial(object: Partial<_136.FieldOptions>): _136.FieldOptions;
            fromAmino(object: _136.FieldOptionsAmino): _136.FieldOptions;
            toAmino(message: _136.FieldOptions): _136.FieldOptionsAmino;
            fromAminoMsg(object: _136.FieldOptionsAminoMsg): _136.FieldOptions;
            fromProtoMsg(message: _136.FieldOptionsProtoMsg): _136.FieldOptions;
            toProto(message: _136.FieldOptions): Uint8Array;
            toProtoMsg(message: _136.FieldOptions): _136.FieldOptionsProtoMsg;
        };
        OneofOptions: {
            typeUrl: string;
            encode(message: _136.OneofOptions, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _136.OneofOptions;
            fromPartial(object: Partial<_136.OneofOptions>): _136.OneofOptions;
            fromAmino(object: _136.OneofOptionsAmino): _136.OneofOptions;
            toAmino(message: _136.OneofOptions): _136.OneofOptionsAmino;
            fromAminoMsg(object: _136.OneofOptionsAminoMsg): _136.OneofOptions;
            fromProtoMsg(message: _136.OneofOptionsProtoMsg): _136.OneofOptions;
            toProto(message: _136.OneofOptions): Uint8Array;
            toProtoMsg(message: _136.OneofOptions): _136.OneofOptionsProtoMsg;
        };
        EnumOptions: {
            typeUrl: string;
            encode(message: _136.EnumOptions, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _136.EnumOptions;
            fromPartial(object: Partial<_136.EnumOptions>): _136.EnumOptions;
            fromAmino(object: _136.EnumOptionsAmino): _136.EnumOptions;
            toAmino(message: _136.EnumOptions): _136.EnumOptionsAmino;
            fromAminoMsg(object: _136.EnumOptionsAminoMsg): _136.EnumOptions;
            fromProtoMsg(message: _136.EnumOptionsProtoMsg): _136.EnumOptions;
            toProto(message: _136.EnumOptions): Uint8Array;
            toProtoMsg(message: _136.EnumOptions): _136.EnumOptionsProtoMsg;
        };
        EnumValueOptions: {
            typeUrl: string;
            encode(message: _136.EnumValueOptions, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _136.EnumValueOptions;
            fromPartial(object: Partial<_136.EnumValueOptions>): _136.EnumValueOptions;
            fromAmino(object: _136.EnumValueOptionsAmino): _136.EnumValueOptions;
            toAmino(message: _136.EnumValueOptions): _136.EnumValueOptionsAmino;
            fromAminoMsg(object: _136.EnumValueOptionsAminoMsg): _136.EnumValueOptions;
            fromProtoMsg(message: _136.EnumValueOptionsProtoMsg): _136.EnumValueOptions;
            toProto(message: _136.EnumValueOptions): Uint8Array;
            toProtoMsg(message: _136.EnumValueOptions): _136.EnumValueOptionsProtoMsg;
        };
        ServiceOptions: {
            typeUrl: string;
            encode(message: _136.ServiceOptions, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _136.ServiceOptions;
            fromPartial(object: Partial<_136.ServiceOptions>): _136.ServiceOptions;
            fromAmino(object: _136.ServiceOptionsAmino): _136.ServiceOptions;
            toAmino(message: _136.ServiceOptions): _136.ServiceOptionsAmino;
            fromAminoMsg(object: _136.ServiceOptionsAminoMsg): _136.ServiceOptions;
            fromProtoMsg(message: _136.ServiceOptionsProtoMsg): _136.ServiceOptions;
            toProto(message: _136.ServiceOptions): Uint8Array;
            toProtoMsg(message: _136.ServiceOptions): _136.ServiceOptionsProtoMsg;
        };
        MethodOptions: {
            typeUrl: string;
            encode(message: _136.MethodOptions, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _136.MethodOptions;
            fromPartial(object: Partial<_136.MethodOptions>): _136.MethodOptions;
            fromAmino(object: _136.MethodOptionsAmino): _136.MethodOptions;
            toAmino(message: _136.MethodOptions): _136.MethodOptionsAmino;
            fromAminoMsg(object: _136.MethodOptionsAminoMsg): _136.MethodOptions;
            fromProtoMsg(message: _136.MethodOptionsProtoMsg): _136.MethodOptions;
            toProto(message: _136.MethodOptions): Uint8Array;
            toProtoMsg(message: _136.MethodOptions): _136.MethodOptionsProtoMsg;
        };
        UninterpretedOption: {
            typeUrl: string;
            encode(message: _136.UninterpretedOption, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _136.UninterpretedOption;
            fromPartial(object: Partial<_136.UninterpretedOption>): _136.UninterpretedOption;
            fromAmino(object: _136.UninterpretedOptionAmino): _136.UninterpretedOption;
            toAmino(message: _136.UninterpretedOption): _136.UninterpretedOptionAmino;
            fromAminoMsg(object: _136.UninterpretedOptionAminoMsg): _136.UninterpretedOption;
            fromProtoMsg(message: _136.UninterpretedOptionProtoMsg): _136.UninterpretedOption;
            toProto(message: _136.UninterpretedOption): Uint8Array;
            toProtoMsg(message: _136.UninterpretedOption): _136.UninterpretedOptionProtoMsg;
        };
        UninterpretedOption_NamePart: {
            typeUrl: string;
            encode(message: _136.UninterpretedOption_NamePart, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _136.UninterpretedOption_NamePart;
            fromPartial(object: Partial<_136.UninterpretedOption_NamePart>): _136.UninterpretedOption_NamePart;
            fromAmino(object: _136.UninterpretedOption_NamePartAmino): _136.UninterpretedOption_NamePart;
            toAmino(message: _136.UninterpretedOption_NamePart): _136.UninterpretedOption_NamePartAmino;
            fromAminoMsg(object: _136.UninterpretedOption_NamePartAminoMsg): _136.UninterpretedOption_NamePart;
            fromProtoMsg(message: _136.UninterpretedOption_NamePartProtoMsg): _136.UninterpretedOption_NamePart;
            toProto(message: _136.UninterpretedOption_NamePart): Uint8Array;
            toProtoMsg(message: _136.UninterpretedOption_NamePart): _136.UninterpretedOption_NamePartProtoMsg;
        };
        SourceCodeInfo: {
            typeUrl: string;
            encode(message: _136.SourceCodeInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _136.SourceCodeInfo;
            fromPartial(object: Partial<_136.SourceCodeInfo>): _136.SourceCodeInfo;
            fromAmino(object: _136.SourceCodeInfoAmino): _136.SourceCodeInfo;
            toAmino(message: _136.SourceCodeInfo): _136.SourceCodeInfoAmino;
            fromAminoMsg(object: _136.SourceCodeInfoAminoMsg): _136.SourceCodeInfo;
            fromProtoMsg(message: _136.SourceCodeInfoProtoMsg): _136.SourceCodeInfo;
            toProto(message: _136.SourceCodeInfo): Uint8Array;
            toProtoMsg(message: _136.SourceCodeInfo): _136.SourceCodeInfoProtoMsg;
        };
        SourceCodeInfo_Location: {
            typeUrl: string;
            encode(message: _136.SourceCodeInfo_Location, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _136.SourceCodeInfo_Location;
            fromPartial(object: Partial<_136.SourceCodeInfo_Location>): _136.SourceCodeInfo_Location;
            fromAmino(object: _136.SourceCodeInfo_LocationAmino): _136.SourceCodeInfo_Location;
            toAmino(message: _136.SourceCodeInfo_Location): _136.SourceCodeInfo_LocationAmino;
            fromAminoMsg(object: _136.SourceCodeInfo_LocationAminoMsg): _136.SourceCodeInfo_Location;
            fromProtoMsg(message: _136.SourceCodeInfo_LocationProtoMsg): _136.SourceCodeInfo_Location;
            toProto(message: _136.SourceCodeInfo_Location): Uint8Array;
            toProtoMsg(message: _136.SourceCodeInfo_Location): _136.SourceCodeInfo_LocationProtoMsg;
        };
        GeneratedCodeInfo: {
            typeUrl: string;
            encode(message: _136.GeneratedCodeInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _136.GeneratedCodeInfo;
            fromPartial(object: Partial<_136.GeneratedCodeInfo>): _136.GeneratedCodeInfo;
            fromAmino(object: _136.GeneratedCodeInfoAmino): _136.GeneratedCodeInfo;
            toAmino(message: _136.GeneratedCodeInfo): _136.GeneratedCodeInfoAmino;
            fromAminoMsg(object: _136.GeneratedCodeInfoAminoMsg): _136.GeneratedCodeInfo;
            fromProtoMsg(message: _136.GeneratedCodeInfoProtoMsg): _136.GeneratedCodeInfo;
            toProto(message: _136.GeneratedCodeInfo): Uint8Array;
            toProtoMsg(message: _136.GeneratedCodeInfo): _136.GeneratedCodeInfoProtoMsg;
        };
        GeneratedCodeInfo_Annotation: {
            typeUrl: string;
            encode(message: _136.GeneratedCodeInfo_Annotation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _136.GeneratedCodeInfo_Annotation;
            fromPartial(object: Partial<_136.GeneratedCodeInfo_Annotation>): _136.GeneratedCodeInfo_Annotation;
            fromAmino(object: _136.GeneratedCodeInfo_AnnotationAmino): _136.GeneratedCodeInfo_Annotation;
            toAmino(message: _136.GeneratedCodeInfo_Annotation): _136.GeneratedCodeInfo_AnnotationAmino;
            fromAminoMsg(object: _136.GeneratedCodeInfo_AnnotationAminoMsg): _136.GeneratedCodeInfo_Annotation;
            fromProtoMsg(message: _136.GeneratedCodeInfo_AnnotationProtoMsg): _136.GeneratedCodeInfo_Annotation;
            toProto(message: _136.GeneratedCodeInfo_Annotation): Uint8Array;
            toProtoMsg(message: _136.GeneratedCodeInfo_Annotation): _136.GeneratedCodeInfo_AnnotationProtoMsg;
        };
    };
}
