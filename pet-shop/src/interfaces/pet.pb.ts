/* tslint:disable */
/* eslint-disable */
// @ts-nocheck
//
// THIS IS A GENERATED FILE
// DO NOT MODIFY IT! YOUR CHANGES WILL BE LOST
import {
  GrpcMessage,
  RecursivePartial,
  ToProtobufJSONOptions
} from '@ngx-grpc/common';
import { BinaryReader, BinaryWriter, ByteSource } from 'google-protobuf';

/**
 * Message implementation for pet.PetRequest
 */
export class PetRequest implements GrpcMessage {
  static id = 'pet.PetRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new PetRequest();
    PetRequest.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: PetRequest) {
    _instance.size = _instance.size || 0;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: PetRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.size = _reader.readEnum();
          break;
        default:
          _reader.skipField();
      }
    }

    PetRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(_instance: PetRequest, _writer: BinaryWriter) {
    if (_instance.size) {
      _writer.writeEnum(1, _instance.size);
    }
  }

  private _size?: PetRequest.Size;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of PetRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<PetRequest.AsObject>) {
    _value = _value || {};
    this.size = _value.size;
    PetRequest.refineValues(this);
  }
  get size(): PetRequest.Size | undefined {
    return this._size;
  }
  set size(value: PetRequest.Size | undefined) {
    this._size = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    PetRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): PetRequest.AsObject {
    return {
      size: this.size
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): PetRequest.AsProtobufJSON {
    return {
      size:
        PetRequest.Size[
          this.size === null || this.size === undefined ? 0 : this.size
        ]
    };
  }
}
export module PetRequest {
  /**
   * Standard JavaScript object representation for PetRequest
   */
  export interface AsObject {
    size?: PetRequest.Size;
  }

  /**
   * Protobuf JSON representation for PetRequest
   */
  export interface AsProtobufJSON {
    size?: string;
  }
  export enum Size {
    SMALL = 0,
    MEDIUM = 1,
    LARGE = 2
  }
}

/**
 * Message implementation for pet.PetResponse
 */
export class PetResponse implements GrpcMessage {
  static id = 'pet.PetResponse';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new PetResponse();
    PetResponse.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: PetResponse) {
    _instance.petType = _instance.petType || '';
    _instance.name = _instance.name || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: PetResponse,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.petType = _reader.readString();
          break;
        case 2:
          _instance.name = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    PetResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: PetResponse,
    _writer: BinaryWriter
  ) {
    if (_instance.petType) {
      _writer.writeString(1, _instance.petType);
    }
    if (_instance.name) {
      _writer.writeString(2, _instance.name);
    }
  }

  private _petType?: string;
  private _name?: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of PetResponse to deeply clone from
   */
  constructor(_value?: RecursivePartial<PetResponse.AsObject>) {
    _value = _value || {};
    this.petType = _value.petType;
    this.name = _value.name;
    PetResponse.refineValues(this);
  }
  get petType(): string | undefined {
    return this._petType;
  }
  set petType(value: string | undefined) {
    this._petType = value;
  }
  get name(): string | undefined {
    return this._name;
  }
  set name(value: string | undefined) {
    this._name = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    PetResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): PetResponse.AsObject {
    return {
      petType: this.petType,
      name: this.name
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): PetResponse.AsProtobufJSON {
    return {
      petType: this.petType,
      name: this.name
    };
  }
}
export module PetResponse {
  /**
   * Standard JavaScript object representation for PetResponse
   */
  export interface AsObject {
    petType?: string;
    name?: string;
  }

  /**
   * Protobuf JSON representation for PetResponse
   */
  export interface AsProtobufJSON {
    petType?: string;
    name?: string;
  }
}

/**
 * Message implementation for pet.PetSoundRequest
 */
export class PetSoundRequest implements GrpcMessage {
  static id = 'pet.PetSoundRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new PetSoundRequest();
    PetSoundRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: PetSoundRequest) {
    _instance.petType = _instance.petType || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: PetSoundRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.petType = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    PetSoundRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: PetSoundRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.petType) {
      _writer.writeString(1, _instance.petType);
    }
  }

  private _petType?: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of PetSoundRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<PetSoundRequest.AsObject>) {
    _value = _value || {};
    this.petType = _value.petType;
    PetSoundRequest.refineValues(this);
  }
  get petType(): string | undefined {
    return this._petType;
  }
  set petType(value: string | undefined) {
    this._petType = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    PetSoundRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): PetSoundRequest.AsObject {
    return {
      petType: this.petType
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): PetSoundRequest.AsProtobufJSON {
    return {
      petType: this.petType
    };
  }
}
export module PetSoundRequest {
  /**
   * Standard JavaScript object representation for PetSoundRequest
   */
  export interface AsObject {
    petType?: string;
  }

  /**
   * Protobuf JSON representation for PetSoundRequest
   */
  export interface AsProtobufJSON {
    petType?: string;
  }
}

/**
 * Message implementation for pet.PetSoundResponse
 */
export class PetSoundResponse implements GrpcMessage {
  static id = 'pet.PetSoundResponse';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new PetSoundResponse();
    PetSoundResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: PetSoundResponse) {
    _instance.sound = _instance.sound || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: PetSoundResponse,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.sound = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    PetSoundResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: PetSoundResponse,
    _writer: BinaryWriter
  ) {
    if (_instance.sound) {
      _writer.writeString(1, _instance.sound);
    }
  }

  private _sound?: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of PetSoundResponse to deeply clone from
   */
  constructor(_value?: RecursivePartial<PetSoundResponse.AsObject>) {
    _value = _value || {};
    this.sound = _value.sound;
    PetSoundResponse.refineValues(this);
  }
  get sound(): string | undefined {
    return this._sound;
  }
  set sound(value: string | undefined) {
    this._sound = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    PetSoundResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): PetSoundResponse.AsObject {
    return {
      sound: this.sound
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): PetSoundResponse.AsProtobufJSON {
    return {
      sound: this.sound
    };
  }
}
export module PetSoundResponse {
  /**
   * Standard JavaScript object representation for PetSoundResponse
   */
  export interface AsObject {
    sound?: string;
  }

  /**
   * Protobuf JSON representation for PetSoundResponse
   */
  export interface AsProtobufJSON {
    sound?: string;
  }
}
