/* tslint:disable */
/* eslint-disable */
// @ts-nocheck
//
// THIS IS A GENERATED FILE
// DO NOT MODIFY IT! YOUR CHANGES WILL BE LOST
import { Inject, Injectable, Optional } from '@angular/core';
import {
  GrpcCallType,
  GrpcClient,
  GrpcClientFactory,
  GrpcEvent,
  GrpcMetadata
} from '@ngx-grpc/common';
import {
  GRPC_CLIENT_FACTORY,
  GrpcHandler,
  takeMessages,
  throwStatusErrors
} from '@ngx-grpc/core';
import { Observable } from 'rxjs';
import * as thisProto from './pet.pb';
import { GRPC_PET_CLIENT_SETTINGS } from './pet.pbconf';
/**
 * Service client implementation for pet.Pet
 */
@Injectable({ providedIn: 'any' })
export class PetClient {
  private client: GrpcClient<any>;

  /**
   * Raw RPC implementation for each service client method.
   * The raw methods provide more control on the incoming data and events. E.g. they can be useful to read status `OK` metadata.
   * Attention: these methods do not throw errors when non-zero status codes are received.
   */
  $raw = {
    /**
     * Unary RPC for /pet.Pet/GetPet
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.PetResponse>>
     */
    getPet: (
      requestData: thisProto.PetRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.PetResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/pet.Pet/GetPet',
        requestData,
        requestMetadata,
        requestClass: thisProto.PetRequest,
        responseClass: thisProto.PetResponse
      });
    },
    /**
     * Unary RPC for /pet.Pet/GetPetSound
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.PetSoundResponse>>
     */
    getPetSound: (
      requestData: thisProto.PetSoundRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.PetSoundResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/pet.Pet/GetPetSound',
        requestData,
        requestMetadata,
        requestClass: thisProto.PetSoundRequest,
        responseClass: thisProto.PetSoundResponse
      });
    }
  };

  constructor(
    @Optional() @Inject(GRPC_PET_CLIENT_SETTINGS) settings: any,
    @Inject(GRPC_CLIENT_FACTORY) clientFactory: GrpcClientFactory<any>,
    private handler: GrpcHandler
  ) {
    this.client = clientFactory.createClient('pet.Pet', settings);
  }

  /**
   * Unary RPC for /pet.Pet/GetPet
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.PetResponse>
   */
  getPet(
    requestData: thisProto.PetRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.PetResponse> {
    return this.$raw
      .getPet(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary RPC for /pet.Pet/GetPetSound
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.PetSoundResponse>
   */
  getPetSound(
    requestData: thisProto.PetSoundRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.PetSoundResponse> {
    return this.$raw
      .getPetSound(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }
}
