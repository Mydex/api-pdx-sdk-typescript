import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../http/http';
import { Configuration, ConfigurationOptions, mergeConfiguration } from '../configuration'
import type { Middleware } from '../middleware';
import { Observable, of, from } from '../rxjsStub';
import {mergeMap, map} from  '../rxjsStub';
import { AuthErrorResponse } from '../models/AuthErrorResponse';
import { AuthErrorResponseError } from '../models/AuthErrorResponseError';
import { CalendarAppointmentCreateRequestBody } from '../models/CalendarAppointmentCreateRequestBody';
import { CalendarEvent } from '../models/CalendarEvent';
import { CalendarEventCommonRequestBodyFields } from '../models/CalendarEventCommonRequestBodyFields';
import { CalendarEventCreateRequestBody } from '../models/CalendarEventCreateRequestBody';
import { CalendarEventDeleteRequestBody } from '../models/CalendarEventDeleteRequestBody';
import { CalendarEventUpdateRequestBody } from '../models/CalendarEventUpdateRequestBody';
import { CreateResponse } from '../models/CreateResponse';
import { DeleteResponse } from '../models/DeleteResponse';
import { ErrorResponse } from '../models/ErrorResponse';
import { GetAppointmentsResponse } from '../models/GetAppointmentsResponse';
import { GetEventsResponse } from '../models/GetEventsResponse';
import { ReferralCommonRequestBodyFields } from '../models/ReferralCommonRequestBodyFields';
import { ReferralCommonRequestBodyFieldsReferreeAvailability } from '../models/ReferralCommonRequestBodyFieldsReferreeAvailability';
import { ReferralListResponse } from '../models/ReferralListResponse';
import { ReferralListResponseReferralsInner } from '../models/ReferralListResponseReferralsInner';
import { ReferralSingleResponse } from '../models/ReferralSingleResponse';
import { ReferralSingleResponseReferral } from '../models/ReferralSingleResponseReferral';
import { ReferralStatusUpdateRequestBody } from '../models/ReferralStatusUpdateRequestBody';
import { SecureMessage } from '../models/SecureMessage';
import { SecureMessageCommonFields } from '../models/SecureMessageCommonFields';
import { SecureMessageConversationResponse } from '../models/SecureMessageConversationResponse';
import { SecureMessageReceiveRequest } from '../models/SecureMessageReceiveRequest';
import { SecureMessageSendRequest } from '../models/SecureMessageSendRequest';
import { SelfReferralRequestBody } from '../models/SelfReferralRequestBody';
import { TimelineItemCalendarEvent } from '../models/TimelineItemCalendarEvent';
import { TimelineItemReferral } from '../models/TimelineItemReferral';
import { TimelineItemSecureMessage } from '../models/TimelineItemSecureMessage';
import { TimelineResponse } from '../models/TimelineResponse';
import { TimelineResponseTimelineInner } from '../models/TimelineResponseTimelineInner';
import { TimelineResponseTimelineInnerOneOf } from '../models/TimelineResponseTimelineInnerOneOf';
import { TimelineResponseTimelineInnerOneOf1 } from '../models/TimelineResponseTimelineInnerOneOf1';
import { TimelineResponseTimelineInnerOneOf2 } from '../models/TimelineResponseTimelineInnerOneOf2';
import { TimelineSingleItemResponse } from '../models/TimelineSingleItemResponse';
import { TimelineSingleItemResponseTimelineItem } from '../models/TimelineSingleItemResponseTimelineItem';
import { UpdateResponse } from '../models/UpdateResponse';

import { CalendarApiRequestFactory, CalendarApiResponseProcessor} from "../apis/CalendarApi";
export class ObservableCalendarApi {
    private requestFactory: CalendarApiRequestFactory;
    private responseProcessor: CalendarApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: CalendarApiRequestFactory,
        responseProcessor?: CalendarApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new CalendarApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new CalendarApiResponseProcessor();
    }

    /**
     * Deletes an event in the user\'s calendar.
     * Supports deleting a calendar-event.
     * @param connectionToken Member\&#39;s Connection Key
     * @param uid The unique ID of a mydex member
     * @param conId The connection_id is a shared id between a connection and a member. It is a hyphenated combination of the member UID and the Dedicated Connection NID.
     * @param [calendarEventDeleteRequestBody]
     */
    public deleteCalendarEventWithHttpInfo(connectionToken: string, uid: string, conId: string, calendarEventDeleteRequestBody?: CalendarEventDeleteRequestBody, _options?: ConfigurationOptions): Observable<HttpInfo<DeleteResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.deleteCalendarEvent(connectionToken, uid, conId, calendarEventDeleteRequestBody, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteCalendarEventWithHttpInfo(rsp)));
            }));
    }

    /**
     * Deletes an event in the user\'s calendar.
     * Supports deleting a calendar-event.
     * @param connectionToken Member\&#39;s Connection Key
     * @param uid The unique ID of a mydex member
     * @param conId The connection_id is a shared id between a connection and a member. It is a hyphenated combination of the member UID and the Dedicated Connection NID.
     * @param [calendarEventDeleteRequestBody]
     */
    public deleteCalendarEvent(connectionToken: string, uid: string, conId: string, calendarEventDeleteRequestBody?: CalendarEventDeleteRequestBody, _options?: ConfigurationOptions): Observable<DeleteResponse> {
        return this.deleteCalendarEventWithHttpInfo(connectionToken, uid, conId, calendarEventDeleteRequestBody, _options).pipe(map((apiResponse: HttpInfo<DeleteResponse>) => apiResponse.data));
    }

    /**
     * Returns a list of appointments filtered by context and context_id.
     * Retrieve appointments for a given context
     * @param connectionToken Member\&#39;s Connection Key
     * @param uid The unique ID of a mydex member
     * @param conId The connection_id is a shared id between a connection and a member. It is a hyphenated combination of the member UID and the Dedicated Connection NID.
     * @param context The context this belongs to
     * @param contextId The specific ID of the context record
     */
    public getCalendarAppointmentsWithHttpInfo(connectionToken: string, uid: string, conId: string, context: string, contextId: number, _options?: ConfigurationOptions): Observable<HttpInfo<GetAppointmentsResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getCalendarAppointments(connectionToken, uid, conId, context, contextId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getCalendarAppointmentsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns a list of appointments filtered by context and context_id.
     * Retrieve appointments for a given context
     * @param connectionToken Member\&#39;s Connection Key
     * @param uid The unique ID of a mydex member
     * @param conId The connection_id is a shared id between a connection and a member. It is a hyphenated combination of the member UID and the Dedicated Connection NID.
     * @param context The context this belongs to
     * @param contextId The specific ID of the context record
     */
    public getCalendarAppointments(connectionToken: string, uid: string, conId: string, context: string, contextId: number, _options?: ConfigurationOptions): Observable<GetAppointmentsResponse> {
        return this.getCalendarAppointmentsWithHttpInfo(connectionToken, uid, conId, context, contextId, _options).pipe(map((apiResponse: HttpInfo<GetAppointmentsResponse>) => apiResponse.data));
    }

    /**
     * Returns a list of calendar events.
     * Retrieve calendar events
     * @param connectionToken Member\&#39;s Connection Key
     * @param uid The unique ID of a mydex member
     * @param conId The connection_id is a shared id between a connection and a member. It is a hyphenated combination of the member UID and the Dedicated Connection NID.
     */
    public getCalendarEventsWithHttpInfo(connectionToken: string, uid: string, conId: string, _options?: ConfigurationOptions): Observable<HttpInfo<GetEventsResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getCalendarEvents(connectionToken, uid, conId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getCalendarEventsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns a list of calendar events.
     * Retrieve calendar events
     * @param connectionToken Member\&#39;s Connection Key
     * @param uid The unique ID of a mydex member
     * @param conId The connection_id is a shared id between a connection and a member. It is a hyphenated combination of the member UID and the Dedicated Connection NID.
     */
    public getCalendarEvents(connectionToken: string, uid: string, conId: string, _options?: ConfigurationOptions): Observable<GetEventsResponse> {
        return this.getCalendarEventsWithHttpInfo(connectionToken, uid, conId, _options).pipe(map((apiResponse: HttpInfo<GetEventsResponse>) => apiResponse.data));
    }

    /**
     * Creates a new appointment in the user\'s calendar. An appointment must be made within a specified context e.g. a \'Referral\'
     * Supports adding a calendar-appointment.
     * @param connectionToken Member\&#39;s Connection Key
     * @param uid The unique ID of a mydex member
     * @param conId The connection_id is a shared id between a connection and a member. It is a hyphenated combination of the member UID and the Dedicated Connection NID.
     * @param [calendarAppointmentCreateRequestBody]
     */
    public postCalendarAppointmentWithHttpInfo(connectionToken: string, uid: string, conId: string, calendarAppointmentCreateRequestBody?: CalendarAppointmentCreateRequestBody, _options?: ConfigurationOptions): Observable<HttpInfo<CreateResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.postCalendarAppointment(connectionToken, uid, conId, calendarAppointmentCreateRequestBody, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.postCalendarAppointmentWithHttpInfo(rsp)));
            }));
    }

    /**
     * Creates a new appointment in the user\'s calendar. An appointment must be made within a specified context e.g. a \'Referral\'
     * Supports adding a calendar-appointment.
     * @param connectionToken Member\&#39;s Connection Key
     * @param uid The unique ID of a mydex member
     * @param conId The connection_id is a shared id between a connection and a member. It is a hyphenated combination of the member UID and the Dedicated Connection NID.
     * @param [calendarAppointmentCreateRequestBody]
     */
    public postCalendarAppointment(connectionToken: string, uid: string, conId: string, calendarAppointmentCreateRequestBody?: CalendarAppointmentCreateRequestBody, _options?: ConfigurationOptions): Observable<CreateResponse> {
        return this.postCalendarAppointmentWithHttpInfo(connectionToken, uid, conId, calendarAppointmentCreateRequestBody, _options).pipe(map((apiResponse: HttpInfo<CreateResponse>) => apiResponse.data));
    }

    /**
     * Creates a new event in the user\'s calendar.
     * Supports adding a calendar-event.
     * @param connectionToken Member\&#39;s Connection Key
     * @param uid The unique ID of a mydex member
     * @param conId The connection_id is a shared id between a connection and a member. It is a hyphenated combination of the member UID and the Dedicated Connection NID.
     * @param [calendarEventCreateRequestBody]
     */
    public postCalendarEventWithHttpInfo(connectionToken: string, uid: string, conId: string, calendarEventCreateRequestBody?: CalendarEventCreateRequestBody, _options?: ConfigurationOptions): Observable<HttpInfo<CreateResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.postCalendarEvent(connectionToken, uid, conId, calendarEventCreateRequestBody, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.postCalendarEventWithHttpInfo(rsp)));
            }));
    }

    /**
     * Creates a new event in the user\'s calendar.
     * Supports adding a calendar-event.
     * @param connectionToken Member\&#39;s Connection Key
     * @param uid The unique ID of a mydex member
     * @param conId The connection_id is a shared id between a connection and a member. It is a hyphenated combination of the member UID and the Dedicated Connection NID.
     * @param [calendarEventCreateRequestBody]
     */
    public postCalendarEvent(connectionToken: string, uid: string, conId: string, calendarEventCreateRequestBody?: CalendarEventCreateRequestBody, _options?: ConfigurationOptions): Observable<CreateResponse> {
        return this.postCalendarEventWithHttpInfo(connectionToken, uid, conId, calendarEventCreateRequestBody, _options).pipe(map((apiResponse: HttpInfo<CreateResponse>) => apiResponse.data));
    }

    /**
     * Updates an event in the user\'s calendar. For example, updating the \'status\' from \'INVITED\' to \'CONFIRMED\' when a user accepts the invitation to an appointment.
     * Supports updating a calendar-event.
     * @param connectionToken Member\&#39;s Connection Key
     * @param uid The unique ID of a mydex member
     * @param conId The connection_id is a shared id between a connection and a member. It is a hyphenated combination of the member UID and the Dedicated Connection NID.
     * @param [calendarEventUpdateRequestBody]
     */
    public putCalendarEventWithHttpInfo(connectionToken: string, uid: string, conId: string, calendarEventUpdateRequestBody?: CalendarEventUpdateRequestBody, _options?: ConfigurationOptions): Observable<HttpInfo<UpdateResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.putCalendarEvent(connectionToken, uid, conId, calendarEventUpdateRequestBody, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.putCalendarEventWithHttpInfo(rsp)));
            }));
    }

    /**
     * Updates an event in the user\'s calendar. For example, updating the \'status\' from \'INVITED\' to \'CONFIRMED\' when a user accepts the invitation to an appointment.
     * Supports updating a calendar-event.
     * @param connectionToken Member\&#39;s Connection Key
     * @param uid The unique ID of a mydex member
     * @param conId The connection_id is a shared id between a connection and a member. It is a hyphenated combination of the member UID and the Dedicated Connection NID.
     * @param [calendarEventUpdateRequestBody]
     */
    public putCalendarEvent(connectionToken: string, uid: string, conId: string, calendarEventUpdateRequestBody?: CalendarEventUpdateRequestBody, _options?: ConfigurationOptions): Observable<UpdateResponse> {
        return this.putCalendarEventWithHttpInfo(connectionToken, uid, conId, calendarEventUpdateRequestBody, _options).pipe(map((apiResponse: HttpInfo<UpdateResponse>) => apiResponse.data));
    }

}

import { ReferralsApiRequestFactory, ReferralsApiResponseProcessor} from "../apis/ReferralsApi";
export class ObservableReferralsApi {
    private requestFactory: ReferralsApiRequestFactory;
    private responseProcessor: ReferralsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: ReferralsApiRequestFactory,
        responseProcessor?: ReferralsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new ReferralsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new ReferralsApiResponseProcessor();
    }

    /**
     * Returns a list of referrals.
     * Retrieve rall referrals for a given member.
     * @param connectionToken Member\&#39;s Connection Key
     * @param uid The unique ID of a mydex member
     * @param conId The connection_id is a shared id between a connection and a member. It is a hyphenated combination of the member UID and the Dedicated Connection NID.
     */
    public getAllReferralsWithHttpInfo(connectionToken: string, uid: string, conId: string, _options?: ConfigurationOptions): Observable<HttpInfo<ReferralListResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getAllReferrals(connectionToken, uid, conId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAllReferralsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns a list of referrals.
     * Retrieve rall referrals for a given member.
     * @param connectionToken Member\&#39;s Connection Key
     * @param uid The unique ID of a mydex member
     * @param conId The connection_id is a shared id between a connection and a member. It is a hyphenated combination of the member UID and the Dedicated Connection NID.
     */
    public getAllReferrals(connectionToken: string, uid: string, conId: string, _options?: ConfigurationOptions): Observable<ReferralListResponse> {
        return this.getAllReferralsWithHttpInfo(connectionToken, uid, conId, _options).pipe(map((apiResponse: HttpInfo<ReferralListResponse>) => apiResponse.data));
    }

    /**
     * Returns the requested referral.
     * Retrieve a single referral by id for a given member.
     * @param connectionToken Member\&#39;s Connection Key
     * @param uid The unique ID of a mydex member
     * @param conId The connection_id is a shared id between a connection and a member. It is a hyphenated combination of the member UID and the Dedicated Connection NID.
     * @param id The record id requested.
     */
    public getSingleReferralWithHttpInfo(connectionToken: string, uid: string, conId: string, id: string, _options?: ConfigurationOptions): Observable<HttpInfo<ReferralSingleResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getSingleReferral(connectionToken, uid, conId, id, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getSingleReferralWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns the requested referral.
     * Retrieve a single referral by id for a given member.
     * @param connectionToken Member\&#39;s Connection Key
     * @param uid The unique ID of a mydex member
     * @param conId The connection_id is a shared id between a connection and a member. It is a hyphenated combination of the member UID and the Dedicated Connection NID.
     * @param id The record id requested.
     */
    public getSingleReferral(connectionToken: string, uid: string, conId: string, id: string, _options?: ConfigurationOptions): Observable<ReferralSingleResponse> {
        return this.getSingleReferralWithHttpInfo(connectionToken, uid, conId, id, _options).pipe(map((apiResponse: HttpInfo<ReferralSingleResponse>) => apiResponse.data));
    }

    /**
     * Creates a new referral of type \'Self Referred\' in the member\'s PDS.
     * Supports self-referral.
     * @param connectionToken Member\&#39;s Connection Key
     * @param uid The unique ID of a mydex member
     * @param conId The connection_id is a shared id between a connection and a member. It is a hyphenated combination of the member UID and the Dedicated Connection NID.
     * @param [selfReferralRequestBody]
     */
    public postSelfReferralWithHttpInfo(connectionToken: string, uid: string, conId: string, selfReferralRequestBody?: SelfReferralRequestBody, _options?: ConfigurationOptions): Observable<HttpInfo<CreateResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.postSelfReferral(connectionToken, uid, conId, selfReferralRequestBody, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.postSelfReferralWithHttpInfo(rsp)));
            }));
    }

    /**
     * Creates a new referral of type \'Self Referred\' in the member\'s PDS.
     * Supports self-referral.
     * @param connectionToken Member\&#39;s Connection Key
     * @param uid The unique ID of a mydex member
     * @param conId The connection_id is a shared id between a connection and a member. It is a hyphenated combination of the member UID and the Dedicated Connection NID.
     * @param [selfReferralRequestBody]
     */
    public postSelfReferral(connectionToken: string, uid: string, conId: string, selfReferralRequestBody?: SelfReferralRequestBody, _options?: ConfigurationOptions): Observable<CreateResponse> {
        return this.postSelfReferralWithHttpInfo(connectionToken, uid, conId, selfReferralRequestBody, _options).pipe(map((apiResponse: HttpInfo<CreateResponse>) => apiResponse.data));
    }

    /**
     * Updates the status of a member\'s referral specified by id. For example, having been referred to a service, the status is set by default to \'Referred\' and this route enables it to be updated to \'Accepted\' or \'Rejected\'
     * Supports updating the status of a referral.
     * @param connectionToken Member\&#39;s Connection Key
     * @param uid The unique ID of a mydex member
     * @param conId The connection_id is a shared id between a connection and a member. It is a hyphenated combination of the member UID and the Dedicated Connection NID.
     * @param [referralStatusUpdateRequestBody]
     */
    public updateReferralStatusWithHttpInfo(connectionToken: string, uid: string, conId: string, referralStatusUpdateRequestBody?: ReferralStatusUpdateRequestBody, _options?: ConfigurationOptions): Observable<HttpInfo<UpdateResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.updateReferralStatus(connectionToken, uid, conId, referralStatusUpdateRequestBody, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateReferralStatusWithHttpInfo(rsp)));
            }));
    }

    /**
     * Updates the status of a member\'s referral specified by id. For example, having been referred to a service, the status is set by default to \'Referred\' and this route enables it to be updated to \'Accepted\' or \'Rejected\'
     * Supports updating the status of a referral.
     * @param connectionToken Member\&#39;s Connection Key
     * @param uid The unique ID of a mydex member
     * @param conId The connection_id is a shared id between a connection and a member. It is a hyphenated combination of the member UID and the Dedicated Connection NID.
     * @param [referralStatusUpdateRequestBody]
     */
    public updateReferralStatus(connectionToken: string, uid: string, conId: string, referralStatusUpdateRequestBody?: ReferralStatusUpdateRequestBody, _options?: ConfigurationOptions): Observable<UpdateResponse> {
        return this.updateReferralStatusWithHttpInfo(connectionToken, uid, conId, referralStatusUpdateRequestBody, _options).pipe(map((apiResponse: HttpInfo<UpdateResponse>) => apiResponse.data));
    }

}

import { SecureMessagesApiRequestFactory, SecureMessagesApiResponseProcessor} from "../apis/SecureMessagesApi";
export class ObservableSecureMessagesApi {
    private requestFactory: SecureMessagesApiRequestFactory;
    private responseProcessor: SecureMessagesApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: SecureMessagesApiRequestFactory,
        responseProcessor?: SecureMessagesApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new SecureMessagesApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new SecureMessagesApiResponseProcessor();
    }

    /**
     * Returns a list of secure messages that form part of a conversation.
     * Retrieve all secure messages for a given conversation.
     * @param connectionToken Member\&#39;s Connection Key
     * @param uid The unique ID of a mydex member
     * @param conId The connection_id is a shared id between a connection and a member. It is a hyphenated combination of the member UID and the Dedicated Connection NID.
     * @param conversationId The specific ID of the conversation that groups messages together
     */
    public getSecureMessageConversationWithHttpInfo(connectionToken: string, uid: string, conId: string, conversationId: string, _options?: ConfigurationOptions): Observable<HttpInfo<SecureMessageConversationResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getSecureMessageConversation(connectionToken, uid, conId, conversationId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getSecureMessageConversationWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns a list of secure messages that form part of a conversation.
     * Retrieve all secure messages for a given conversation.
     * @param connectionToken Member\&#39;s Connection Key
     * @param uid The unique ID of a mydex member
     * @param conId The connection_id is a shared id between a connection and a member. It is a hyphenated combination of the member UID and the Dedicated Connection NID.
     * @param conversationId The specific ID of the conversation that groups messages together
     */
    public getSecureMessageConversation(connectionToken: string, uid: string, conId: string, conversationId: string, _options?: ConfigurationOptions): Observable<SecureMessageConversationResponse> {
        return this.getSecureMessageConversationWithHttpInfo(connectionToken, uid, conId, conversationId, _options).pipe(map((apiResponse: HttpInfo<SecureMessageConversationResponse>) => apiResponse.data));
    }

    /**
     * Creates a new received message in the member\'s PDS.
     * Supports sending a message to the member\'s PDS.
     * @param connectionToken Member\&#39;s Connection Key
     * @param uid The unique ID of a mydex member
     * @param conId The connection_id is a shared id between a connection and a member. It is a hyphenated combination of the member UID and the Dedicated Connection NID.
     * @param [secureMessageReceiveRequest]
     */
    public postSecureMessageReceiveWithHttpInfo(connectionToken: string, uid: string, conId: string, secureMessageReceiveRequest?: SecureMessageReceiveRequest, _options?: ConfigurationOptions): Observable<HttpInfo<CreateResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.postSecureMessageReceive(connectionToken, uid, conId, secureMessageReceiveRequest, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.postSecureMessageReceiveWithHttpInfo(rsp)));
            }));
    }

    /**
     * Creates a new received message in the member\'s PDS.
     * Supports sending a message to the member\'s PDS.
     * @param connectionToken Member\&#39;s Connection Key
     * @param uid The unique ID of a mydex member
     * @param conId The connection_id is a shared id between a connection and a member. It is a hyphenated combination of the member UID and the Dedicated Connection NID.
     * @param [secureMessageReceiveRequest]
     */
    public postSecureMessageReceive(connectionToken: string, uid: string, conId: string, secureMessageReceiveRequest?: SecureMessageReceiveRequest, _options?: ConfigurationOptions): Observable<CreateResponse> {
        return this.postSecureMessageReceiveWithHttpInfo(connectionToken, uid, conId, secureMessageReceiveRequest, _options).pipe(map((apiResponse: HttpInfo<CreateResponse>) => apiResponse.data));
    }

    /**
     * Creates a new sent message in the member\'s PDS.
     * Supports sending a message from the member\'s PDS.
     * @param connectionToken Member\&#39;s Connection Key
     * @param uid The unique ID of a mydex member
     * @param conId The connection_id is a shared id between a connection and a member. It is a hyphenated combination of the member UID and the Dedicated Connection NID.
     * @param [secureMessageSendRequest]
     */
    public postSecureMessageSendWithHttpInfo(connectionToken: string, uid: string, conId: string, secureMessageSendRequest?: SecureMessageSendRequest, _options?: ConfigurationOptions): Observable<HttpInfo<CreateResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.postSecureMessageSend(connectionToken, uid, conId, secureMessageSendRequest, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.postSecureMessageSendWithHttpInfo(rsp)));
            }));
    }

    /**
     * Creates a new sent message in the member\'s PDS.
     * Supports sending a message from the member\'s PDS.
     * @param connectionToken Member\&#39;s Connection Key
     * @param uid The unique ID of a mydex member
     * @param conId The connection_id is a shared id between a connection and a member. It is a hyphenated combination of the member UID and the Dedicated Connection NID.
     * @param [secureMessageSendRequest]
     */
    public postSecureMessageSend(connectionToken: string, uid: string, conId: string, secureMessageSendRequest?: SecureMessageSendRequest, _options?: ConfigurationOptions): Observable<CreateResponse> {
        return this.postSecureMessageSendWithHttpInfo(connectionToken, uid, conId, secureMessageSendRequest, _options).pipe(map((apiResponse: HttpInfo<CreateResponse>) => apiResponse.data));
    }

}

import { TimelineApiRequestFactory, TimelineApiResponseProcessor} from "../apis/TimelineApi";
export class ObservableTimelineApi {
    private requestFactory: TimelineApiRequestFactory;
    private responseProcessor: TimelineApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: TimelineApiRequestFactory,
        responseProcessor?: TimelineApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new TimelineApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new TimelineApiResponseProcessor();
    }

    /**
     * Returns a list of timeline items which includes: referrals, calendar events and secure messages.
     * Retrieve list of timeline items.
     * @param connectionToken Member\&#39;s Connection Key
     * @param uid The unique ID of a mydex member
     * @param conId The connection_id is a shared id between a connection and a member. It is a hyphenated combination of the member UID and the Dedicated Connection NID.
     */
    public getTimelineWithHttpInfo(connectionToken: string, uid: string, conId: string, _options?: ConfigurationOptions): Observable<HttpInfo<TimelineResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getTimeline(connectionToken, uid, conId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getTimelineWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns a list of timeline items which includes: referrals, calendar events and secure messages.
     * Retrieve list of timeline items.
     * @param connectionToken Member\&#39;s Connection Key
     * @param uid The unique ID of a mydex member
     * @param conId The connection_id is a shared id between a connection and a member. It is a hyphenated combination of the member UID and the Dedicated Connection NID.
     */
    public getTimeline(connectionToken: string, uid: string, conId: string, _options?: ConfigurationOptions): Observable<TimelineResponse> {
        return this.getTimelineWithHttpInfo(connectionToken, uid, conId, _options).pipe(map((apiResponse: HttpInfo<TimelineResponse>) => apiResponse.data));
    }

    /**
     * Returns a single timeline item based on feature block and feature block id requested e.g. a \'referral\' with id 123.
     * Retrieve a single timeline item.
     * @param connectionToken Member\&#39;s Connection Key
     * @param uid The unique ID of a mydex member
     * @param conId The connection_id is a shared id between a connection and a member. It is a hyphenated combination of the member UID and the Dedicated Connection NID.
     * @param featureBlock The feature block the teimline item belongs to
     * @param featureBlockId The specific ID of the record within the specified feature block e.g. if \&#39;referrals\&#39; is the feature block, then this should be a specific referral id
     */
    public getTimelineItemWithHttpInfo(connectionToken: string, uid: string, conId: string, featureBlock: 'referrals' | 'secure_messages' | 'calendar', featureBlockId: number, _options?: ConfigurationOptions): Observable<HttpInfo<TimelineSingleItemResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getTimelineItem(connectionToken, uid, conId, featureBlock, featureBlockId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getTimelineItemWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns a single timeline item based on feature block and feature block id requested e.g. a \'referral\' with id 123.
     * Retrieve a single timeline item.
     * @param connectionToken Member\&#39;s Connection Key
     * @param uid The unique ID of a mydex member
     * @param conId The connection_id is a shared id between a connection and a member. It is a hyphenated combination of the member UID and the Dedicated Connection NID.
     * @param featureBlock The feature block the teimline item belongs to
     * @param featureBlockId The specific ID of the record within the specified feature block e.g. if \&#39;referrals\&#39; is the feature block, then this should be a specific referral id
     */
    public getTimelineItem(connectionToken: string, uid: string, conId: string, featureBlock: 'referrals' | 'secure_messages' | 'calendar', featureBlockId: number, _options?: ConfigurationOptions): Observable<TimelineSingleItemResponse> {
        return this.getTimelineItemWithHttpInfo(connectionToken, uid, conId, featureBlock, featureBlockId, _options).pipe(map((apiResponse: HttpInfo<TimelineSingleItemResponse>) => apiResponse.data));
    }

}
