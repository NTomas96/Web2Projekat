/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { LoginResponse } from '../models/login-response';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class UsersService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiUsersRegisterPost
   */
  static readonly ApiUsersRegisterPostPath = '/api/Users/register';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `register$Json()` instead.
   *
   * This method sends `application/json-patch+json` and handles request body of type `application/json-patch+json`.
   */
  register$Json$Response(params?: {

    body?: User
  }): Observable<StrictHttpResponse<User>> {

    const rb = new RequestBuilder(this.rootUrl, UsersService.ApiUsersRegisterPostPath, 'post');
    if (params) {


      rb.body(params.body, 'application/json-patch+json');
    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<User>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `register$Json$Response()` instead.
   *
   * This method sends `application/json-patch+json` and handles request body of type `application/json-patch+json`.
   */
  register$Json(params?: {

    body?: User
  }): Observable<User> {

    return this.register$Json$Response(params).pipe(
      map((r: StrictHttpResponse<User>) => r.body as User)
    );
  }

  /**
   * Path part for operation apiUsersLoginPost
   */
  static readonly ApiUsersLoginPostPath = '/api/Users/login';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `login$Json()` instead.
   *
   * This method sends `application/json-patch+json` and handles request body of type `application/json-patch+json`.
   */
  login$Json$Response(params?: {

    body?: User
  }): Observable<StrictHttpResponse<LoginResponse>> {

    const rb = new RequestBuilder(this.rootUrl, UsersService.ApiUsersLoginPostPath, 'post');
    if (params) {


      rb.body(params.body, 'application/json-patch+json');
    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<LoginResponse>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `login$Json$Response()` instead.
   *
   * This method sends `application/json-patch+json` and handles request body of type `application/json-patch+json`.
   */
  login$Json(params?: {

    body?: User
  }): Observable<LoginResponse> {

    return this.login$Json$Response(params).pipe(
      map((r: StrictHttpResponse<LoginResponse>) => r.body as LoginResponse)
    );
  }

  /**
   * Path part for operation apiUsersEditprofilePost
   */
  static readonly ApiUsersEditprofilePostPath = '/api/Users/editprofile';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `editProfile$Json()` instead.
   *
   * This method sends `application/json-patch+json` and handles request body of type `application/json-patch+json`.
   */
  editProfile$Json$Response(params?: {

    body?: User
  }): Observable<StrictHttpResponse<boolean>> {

    const rb = new RequestBuilder(this.rootUrl, UsersService.ApiUsersEditprofilePostPath, 'post');
    if (params) {


      rb.body(params.body, 'application/json-patch+json');
    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: String((r as HttpResponse<any>).body) === 'true' }) as StrictHttpResponse<boolean>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `editProfile$Json$Response()` instead.
   *
   * This method sends `application/json-patch+json` and handles request body of type `application/json-patch+json`.
   */
  editProfile$Json(params?: {

    body?: User
  }): Observable<boolean> {

    return this.editProfile$Json$Response(params).pipe(
      map((r: StrictHttpResponse<boolean>) => r.body as boolean)
    );
  }

  /**
   * Path part for operation apiUsersMeGet
   */
  static readonly ApiUsersMeGetPath = '/api/Users/me';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getMe()` instead.
   *
   * This method doesn't expect any request body.
   */
  getMe$Response(params?: {

  }): Observable<StrictHttpResponse<User>> {

    const rb = new RequestBuilder(this.rootUrl, UsersService.ApiUsersMeGetPath, 'get');
    if (params) {


    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<User>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getMe$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getMe(params?: {

  }): Observable<User> {

    return this.getMe$Response(params).pipe(
      map((r: StrictHttpResponse<User>) => r.body as User)
    );
  }

  /**
   * Path part for operation apiUsersUnverifiedGet
   */
  static readonly ApiUsersUnverifiedGetPath = '/api/Users/unverified';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getUnverified()` instead.
   *
   * This method doesn't expect any request body.
   */
  getUnverified$Response(params?: {

  }): Observable<StrictHttpResponse<Array<User>>> {

    const rb = new RequestBuilder(this.rootUrl, UsersService.ApiUsersUnverifiedGetPath, 'get');
    if (params) {


    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<User>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getUnverified$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getUnverified(params?: {

  }): Observable<Array<User>> {

    return this.getUnverified$Response(params).pipe(
      map((r: StrictHttpResponse<Array<User>>) => r.body as Array<User>)
    );
  }

  /**
   * Path part for operation apiUsersVerifyAcceptUserIdPost
   */
  static readonly ApiUsersVerifyAcceptUserIdPostPath = '/api/Users/verify/accept/{userId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `accept()` instead.
   *
   * This method doesn't expect any request body.
   */
  accept$Response(params: {
    userId: number;

  }): Observable<StrictHttpResponse<boolean>> {

    const rb = new RequestBuilder(this.rootUrl, UsersService.ApiUsersVerifyAcceptUserIdPostPath, 'post');
    if (params) {

      rb.path('userId', params.userId);

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: String((r as HttpResponse<any>).body) === 'true' }) as StrictHttpResponse<boolean>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `accept$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  accept(params: {
    userId: number;

  }): Observable<boolean> {

    return this.accept$Response(params).pipe(
      map((r: StrictHttpResponse<boolean>) => r.body as boolean)
    );
  }

  /**
   * Path part for operation apiUsersVerifyDenyUserIdPost
   */
  static readonly ApiUsersVerifyDenyUserIdPostPath = '/api/Users/verify/deny/{userId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deny()` instead.
   *
   * This method doesn't expect any request body.
   */
  deny$Response(params: {
    userId: number;

  }): Observable<StrictHttpResponse<boolean>> {

    const rb = new RequestBuilder(this.rootUrl, UsersService.ApiUsersVerifyDenyUserIdPostPath, 'post');
    if (params) {

      rb.path('userId', params.userId);

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: String((r as HttpResponse<any>).body) === 'true' }) as StrictHttpResponse<boolean>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `deny$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deny(params: {
    userId: number;

  }): Observable<boolean> {

    return this.deny$Response(params).pipe(
      map((r: StrictHttpResponse<boolean>) => r.body as boolean)
    );
  }

  /**
   * Path part for operation apiUsersCheckTicketTicketNumberPost
   */
  static readonly ApiUsersCheckTicketTicketNumberPostPath = '/api/Users/checkTicket/{ticketNumber}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `checkTicket()` instead.
   *
   * This method doesn't expect any request body.
   */
  checkTicket$Response(params: {
    ticketNumber: string;

  }): Observable<StrictHttpResponse<boolean>> {

    const rb = new RequestBuilder(this.rootUrl, UsersService.ApiUsersCheckTicketTicketNumberPostPath, 'post');
    if (params) {

      rb.path('ticketNumber', params.ticketNumber);

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: String((r as HttpResponse<any>).body) === 'true' }) as StrictHttpResponse<boolean>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `checkTicket$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  checkTicket(params: {
    ticketNumber: string;

  }): Observable<boolean> {

    return this.checkTicket$Response(params).pipe(
      map((r: StrictHttpResponse<boolean>) => r.body as boolean)
    );
  }

}
