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
import * as thisProto from './datetime.pb';
import { GRPC_DATE_TIME_CLIENT_SETTINGS } from './datetime.pbconf';
/**
 * Service client implementation for datetime.DateTime
 */
@Injectable({ providedIn: 'any' })
export class DateTimeClient {
  private client: GrpcClient<any>;

  /**
   * Raw RPC implementation for each service client method.
   * The raw methods provide more control on the incoming data and events. E.g. they can be useful to read status `OK` metadata.
   * Attention: these methods do not throw errors when non-zero status codes are received.
   */
  $raw = {
    /**
     * Unary RPC for /datetime.DateTime/GetTime
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.TimeReply>>
     */
    getTime: (
      requestData: thisProto.TimeRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.TimeReply>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/datetime.DateTime/GetTime',
        requestData,
        requestMetadata,
        requestClass: thisProto.TimeRequest,
        responseClass: thisProto.TimeReply
      });
    },
    /**
     * Unary RPC for /datetime.DateTime/GetDate
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.DateReply>>
     */
    getDate: (
      requestData: thisProto.DateRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.DateReply>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/datetime.DateTime/GetDate',
        requestData,
        requestMetadata,
        requestClass: thisProto.DateRequest,
        responseClass: thisProto.DateReply
      });
    }
  };

  constructor(
    @Optional() @Inject(GRPC_DATE_TIME_CLIENT_SETTINGS) settings: any,
    @Inject(GRPC_CLIENT_FACTORY) clientFactory: GrpcClientFactory<any>,
    private handler: GrpcHandler
  ) {
    this.client = clientFactory.createClient('datetime.DateTime', settings);
  }

  /**
   * Unary RPC for /datetime.DateTime/GetTime
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.TimeReply>
   */
  getTime(
    requestData: thisProto.TimeRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.TimeReply> {
    return this.$raw
      .getTime(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary RPC for /datetime.DateTime/GetDate
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.DateReply>
   */
  getDate(
    requestData: thisProto.DateRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.DateReply> {
    return this.$raw
      .getDate(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }
}
