import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../http/http';
import { Configuration, PromiseConfigurationOptions, wrapOptions } from '../configuration'
import { PromiseMiddleware, Middleware, PromiseMiddlewareWrapper } from '../middleware';

import { AddReferralData } from '../models/AddReferralData';
import { AddReferralRequestBody } from '../models/AddReferralRequestBody';
import { AddReferralResponse } from '../models/AddReferralResponse';
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
import { ObservableCalendarApi } from './ObservableAPI';

import { CalendarApiRequestFactory, CalendarApiResponseProcessor} from "../apis/CalendarApi";
export class PromiseCalendarApi {
    private api: ObservableCalendarApi

    public constructor(
        configuration: Configuration,
        requestFactory?: CalendarApiRequestFactory,
        responseProcessor?: CalendarApiResponseProcessor
    ) {
        this.api = new ObservableCalendarApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Deletes an event in the user\'s calendar.
     * Supports deleting a calendar-event.
     * @param connectionToken Member\&#39;s Connection Key
     * @param uid The unique ID of a mydex member
     * @param conId The connection_id is a shared id between a connection and a member. It is a hyphenated combination of the member UID and the Dedicated Connection NID.
     * @param [calendarEventDeleteRequestBody]
     */
    public deleteCalendarEventWithHttpInfo(connectionToken: string, uid: string, conId: string, calendarEventDeleteRequestBody?: CalendarEventDeleteRequestBody, _options?: PromiseConfigurationOptions): Promise<HttpInfo<DeleteResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteCalendarEventWithHttpInfo(connectionToken, uid, conId, calendarEventDeleteRequestBody, observableOptions);
        return result.toPromise();
    }

    /**
     * Deletes an event in the user\'s calendar.
     * Supports deleting a calendar-event.
     * @param connectionToken Member\&#39;s Connection Key
     * @param uid The unique ID of a mydex member
     * @param conId The connection_id is a shared id between a connection and a member. It is a hyphenated combination of the member UID and the Dedicated Connection NID.
     * @param [calendarEventDeleteRequestBody]
     */
    public deleteCalendarEvent(connectionToken: string, uid: string, conId: string, calendarEventDeleteRequestBody?: CalendarEventDeleteRequestBody, _options?: PromiseConfigurationOptions): Promise<DeleteResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deleteCalendarEvent(connectionToken, uid, conId, calendarEventDeleteRequestBody, observableOptions);
        return result.toPromise();
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
    public getCalendarAppointmentsWithHttpInfo(connectionToken: string, uid: string, conId: string, context: string, contextId: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<GetAppointmentsResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getCalendarAppointmentsWithHttpInfo(connectionToken, uid, conId, context, contextId, observableOptions);
        return result.toPromise();
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
    public getCalendarAppointments(connectionToken: string, uid: string, conId: string, context: string, contextId: number, _options?: PromiseConfigurationOptions): Promise<GetAppointmentsResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getCalendarAppointments(connectionToken, uid, conId, context, contextId, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns a list of calendar events.
     * Retrieve calendar events
     * @param connectionToken Member\&#39;s Connection Key
     * @param uid The unique ID of a mydex member
     * @param conId The connection_id is a shared id between a connection and a member. It is a hyphenated combination of the member UID and the Dedicated Connection NID.
     */
    public getCalendarEventsWithHttpInfo(connectionToken: string, uid: string, conId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<GetEventsResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getCalendarEventsWithHttpInfo(connectionToken, uid, conId, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns a list of calendar events.
     * Retrieve calendar events
     * @param connectionToken Member\&#39;s Connection Key
     * @param uid The unique ID of a mydex member
     * @param conId The connection_id is a shared id between a connection and a member. It is a hyphenated combination of the member UID and the Dedicated Connection NID.
     */
    public getCalendarEvents(connectionToken: string, uid: string, conId: string, _options?: PromiseConfigurationOptions): Promise<GetEventsResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getCalendarEvents(connectionToken, uid, conId, observableOptions);
        return result.toPromise();
    }

    /**
     * Creates a new appointment in the user\'s calendar. An appointment must be made within a specified context e.g. a \'Referral\'
     * Supports adding a calendar-appointment.
     * @param connectionToken Member\&#39;s Connection Key
     * @param uid The unique ID of a mydex member
     * @param conId The connection_id is a shared id between a connection and a member. It is a hyphenated combination of the member UID and the Dedicated Connection NID.
     * @param [calendarAppointmentCreateRequestBody]
     */
    public postCalendarAppointmentWithHttpInfo(connectionToken: string, uid: string, conId: string, calendarAppointmentCreateRequestBody?: CalendarAppointmentCreateRequestBody, _options?: PromiseConfigurationOptions): Promise<HttpInfo<CreateResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.postCalendarAppointmentWithHttpInfo(connectionToken, uid, conId, calendarAppointmentCreateRequestBody, observableOptions);
        return result.toPromise();
    }

    /**
     * Creates a new appointment in the user\'s calendar. An appointment must be made within a specified context e.g. a \'Referral\'
     * Supports adding a calendar-appointment.
     * @param connectionToken Member\&#39;s Connection Key
     * @param uid The unique ID of a mydex member
     * @param conId The connection_id is a shared id between a connection and a member. It is a hyphenated combination of the member UID and the Dedicated Connection NID.
     * @param [calendarAppointmentCreateRequestBody]
     */
    public postCalendarAppointment(connectionToken: string, uid: string, conId: string, calendarAppointmentCreateRequestBody?: CalendarAppointmentCreateRequestBody, _options?: PromiseConfigurationOptions): Promise<CreateResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.postCalendarAppointment(connectionToken, uid, conId, calendarAppointmentCreateRequestBody, observableOptions);
        return result.toPromise();
    }

    /**
     * Creates a new event in the user\'s calendar.
     * Supports adding a calendar-event.
     * @param connectionToken Member\&#39;s Connection Key
     * @param uid The unique ID of a mydex member
     * @param conId The connection_id is a shared id between a connection and a member. It is a hyphenated combination of the member UID and the Dedicated Connection NID.
     * @param [calendarEventCreateRequestBody]
     */
    public postCalendarEventWithHttpInfo(connectionToken: string, uid: string, conId: string, calendarEventCreateRequestBody?: CalendarEventCreateRequestBody, _options?: PromiseConfigurationOptions): Promise<HttpInfo<CreateResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.postCalendarEventWithHttpInfo(connectionToken, uid, conId, calendarEventCreateRequestBody, observableOptions);
        return result.toPromise();
    }

    /**
     * Creates a new event in the user\'s calendar.
     * Supports adding a calendar-event.
     * @param connectionToken Member\&#39;s Connection Key
     * @param uid The unique ID of a mydex member
     * @param conId The connection_id is a shared id between a connection and a member. It is a hyphenated combination of the member UID and the Dedicated Connection NID.
     * @param [calendarEventCreateRequestBody]
     */
    public postCalendarEvent(connectionToken: string, uid: string, conId: string, calendarEventCreateRequestBody?: CalendarEventCreateRequestBody, _options?: PromiseConfigurationOptions): Promise<CreateResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.postCalendarEvent(connectionToken, uid, conId, calendarEventCreateRequestBody, observableOptions);
        return result.toPromise();
    }

    /**
     * Updates an event in the user\'s calendar. For example, updating the \'status\' from \'INVITED\' to \'CONFIRMED\' when a user accepts the invitation to an appointment.
     * Supports updating a calendar-event.
     * @param connectionToken Member\&#39;s Connection Key
     * @param uid The unique ID of a mydex member
     * @param conId The connection_id is a shared id between a connection and a member. It is a hyphenated combination of the member UID and the Dedicated Connection NID.
     * @param [calendarEventUpdateRequestBody]
     */
    public putCalendarEventWithHttpInfo(connectionToken: string, uid: string, conId: string, calendarEventUpdateRequestBody?: CalendarEventUpdateRequestBody, _options?: PromiseConfigurationOptions): Promise<HttpInfo<UpdateResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.putCalendarEventWithHttpInfo(connectionToken, uid, conId, calendarEventUpdateRequestBody, observableOptions);
        return result.toPromise();
    }

    /**
     * Updates an event in the user\'s calendar. For example, updating the \'status\' from \'INVITED\' to \'CONFIRMED\' when a user accepts the invitation to an appointment.
     * Supports updating a calendar-event.
     * @param connectionToken Member\&#39;s Connection Key
     * @param uid The unique ID of a mydex member
     * @param conId The connection_id is a shared id between a connection and a member. It is a hyphenated combination of the member UID and the Dedicated Connection NID.
     * @param [calendarEventUpdateRequestBody]
     */
    public putCalendarEvent(connectionToken: string, uid: string, conId: string, calendarEventUpdateRequestBody?: CalendarEventUpdateRequestBody, _options?: PromiseConfigurationOptions): Promise<UpdateResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.putCalendarEvent(connectionToken, uid, conId, calendarEventUpdateRequestBody, observableOptions);
        return result.toPromise();
    }


}



import { ObservableReferralsApi } from './ObservableAPI';

import { ReferralsApiRequestFactory, ReferralsApiResponseProcessor} from "../apis/ReferralsApi";
export class PromiseReferralsApi {
    private api: ObservableReferralsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: ReferralsApiRequestFactory,
        responseProcessor?: ReferralsApiResponseProcessor
    ) {
        this.api = new ObservableReferralsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Creates a new referral in the member\'s PDS targeting a remote service identified by a DSSA UUID. If the member is already connected to the remote DSSA the referral is created with status \'complete\' and the remote service is notified. If the member is not connected the referral is created with status \'pending\' and either an FTC URL is returned (member_present=true) or a notification is sent to the member (member_present=false).
     * Initiates a referral to a remote DSSA.
     * @param connectionToken Member\&#39;s Connection Key
     * @param uid The unique ID of a mydex member
     * @param conId The connection_id is a shared id between a connection and a member. It is a hyphenated combination of the member UID and the Dedicated Connection NID.
     * @param [addReferralRequestBody]
     */
    public addReferralWithHttpInfo(connectionToken: string, uid: string, conId: string, addReferralRequestBody?: AddReferralRequestBody, _options?: PromiseConfigurationOptions): Promise<HttpInfo<AddReferralResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.addReferralWithHttpInfo(connectionToken, uid, conId, addReferralRequestBody, observableOptions);
        return result.toPromise();
    }

    /**
     * Creates a new referral in the member\'s PDS targeting a remote service identified by a DSSA UUID. If the member is already connected to the remote DSSA the referral is created with status \'complete\' and the remote service is notified. If the member is not connected the referral is created with status \'pending\' and either an FTC URL is returned (member_present=true) or a notification is sent to the member (member_present=false).
     * Initiates a referral to a remote DSSA.
     * @param connectionToken Member\&#39;s Connection Key
     * @param uid The unique ID of a mydex member
     * @param conId The connection_id is a shared id between a connection and a member. It is a hyphenated combination of the member UID and the Dedicated Connection NID.
     * @param [addReferralRequestBody]
     */
    public addReferral(connectionToken: string, uid: string, conId: string, addReferralRequestBody?: AddReferralRequestBody, _options?: PromiseConfigurationOptions): Promise<AddReferralResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.addReferral(connectionToken, uid, conId, addReferralRequestBody, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns a list of referrals.
     * Retrieve rall referrals for a given member.
     * @param connectionToken Member\&#39;s Connection Key
     * @param uid The unique ID of a mydex member
     * @param conId The connection_id is a shared id between a connection and a member. It is a hyphenated combination of the member UID and the Dedicated Connection NID.
     */
    public getAllReferralsWithHttpInfo(connectionToken: string, uid: string, conId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ReferralListResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getAllReferralsWithHttpInfo(connectionToken, uid, conId, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns a list of referrals.
     * Retrieve rall referrals for a given member.
     * @param connectionToken Member\&#39;s Connection Key
     * @param uid The unique ID of a mydex member
     * @param conId The connection_id is a shared id between a connection and a member. It is a hyphenated combination of the member UID and the Dedicated Connection NID.
     */
    public getAllReferrals(connectionToken: string, uid: string, conId: string, _options?: PromiseConfigurationOptions): Promise<ReferralListResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getAllReferrals(connectionToken, uid, conId, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns the requested referral.
     * Retrieve a single referral by id for a given member.
     * @param connectionToken Member\&#39;s Connection Key
     * @param uid The unique ID of a mydex member
     * @param conId The connection_id is a shared id between a connection and a member. It is a hyphenated combination of the member UID and the Dedicated Connection NID.
     * @param id The record id requested.
     */
    public getSingleReferralWithHttpInfo(connectionToken: string, uid: string, conId: string, id: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ReferralSingleResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getSingleReferralWithHttpInfo(connectionToken, uid, conId, id, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns the requested referral.
     * Retrieve a single referral by id for a given member.
     * @param connectionToken Member\&#39;s Connection Key
     * @param uid The unique ID of a mydex member
     * @param conId The connection_id is a shared id between a connection and a member. It is a hyphenated combination of the member UID and the Dedicated Connection NID.
     * @param id The record id requested.
     */
    public getSingleReferral(connectionToken: string, uid: string, conId: string, id: string, _options?: PromiseConfigurationOptions): Promise<ReferralSingleResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getSingleReferral(connectionToken, uid, conId, id, observableOptions);
        return result.toPromise();
    }

    /**
     * Creates a new referral of type \'Self Referred\' in the member\'s PDS.
     * Supports self-referral.
     * @param connectionToken Member\&#39;s Connection Key
     * @param uid The unique ID of a mydex member
     * @param conId The connection_id is a shared id between a connection and a member. It is a hyphenated combination of the member UID and the Dedicated Connection NID.
     * @param [selfReferralRequestBody]
     */
    public postSelfReferralWithHttpInfo(connectionToken: string, uid: string, conId: string, selfReferralRequestBody?: SelfReferralRequestBody, _options?: PromiseConfigurationOptions): Promise<HttpInfo<CreateResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.postSelfReferralWithHttpInfo(connectionToken, uid, conId, selfReferralRequestBody, observableOptions);
        return result.toPromise();
    }

    /**
     * Creates a new referral of type \'Self Referred\' in the member\'s PDS.
     * Supports self-referral.
     * @param connectionToken Member\&#39;s Connection Key
     * @param uid The unique ID of a mydex member
     * @param conId The connection_id is a shared id between a connection and a member. It is a hyphenated combination of the member UID and the Dedicated Connection NID.
     * @param [selfReferralRequestBody]
     */
    public postSelfReferral(connectionToken: string, uid: string, conId: string, selfReferralRequestBody?: SelfReferralRequestBody, _options?: PromiseConfigurationOptions): Promise<CreateResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.postSelfReferral(connectionToken, uid, conId, selfReferralRequestBody, observableOptions);
        return result.toPromise();
    }

    /**
     * Updates the status of a member\'s referral specified by id. For example, having been referred to a service, the status is set by default to \'Referred\' and this route enables it to be updated to \'Accepted\' or \'Rejected\'
     * Supports updating the status of a referral.
     * @param connectionToken Member\&#39;s Connection Key
     * @param uid The unique ID of a mydex member
     * @param conId The connection_id is a shared id between a connection and a member. It is a hyphenated combination of the member UID and the Dedicated Connection NID.
     * @param [referralStatusUpdateRequestBody]
     */
    public updateReferralStatusWithHttpInfo(connectionToken: string, uid: string, conId: string, referralStatusUpdateRequestBody?: ReferralStatusUpdateRequestBody, _options?: PromiseConfigurationOptions): Promise<HttpInfo<UpdateResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateReferralStatusWithHttpInfo(connectionToken, uid, conId, referralStatusUpdateRequestBody, observableOptions);
        return result.toPromise();
    }

    /**
     * Updates the status of a member\'s referral specified by id. For example, having been referred to a service, the status is set by default to \'Referred\' and this route enables it to be updated to \'Accepted\' or \'Rejected\'
     * Supports updating the status of a referral.
     * @param connectionToken Member\&#39;s Connection Key
     * @param uid The unique ID of a mydex member
     * @param conId The connection_id is a shared id between a connection and a member. It is a hyphenated combination of the member UID and the Dedicated Connection NID.
     * @param [referralStatusUpdateRequestBody]
     */
    public updateReferralStatus(connectionToken: string, uid: string, conId: string, referralStatusUpdateRequestBody?: ReferralStatusUpdateRequestBody, _options?: PromiseConfigurationOptions): Promise<UpdateResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.updateReferralStatus(connectionToken, uid, conId, referralStatusUpdateRequestBody, observableOptions);
        return result.toPromise();
    }


}



import { ObservableSecureMessagesApi } from './ObservableAPI';

import { SecureMessagesApiRequestFactory, SecureMessagesApiResponseProcessor} from "../apis/SecureMessagesApi";
export class PromiseSecureMessagesApi {
    private api: ObservableSecureMessagesApi

    public constructor(
        configuration: Configuration,
        requestFactory?: SecureMessagesApiRequestFactory,
        responseProcessor?: SecureMessagesApiResponseProcessor
    ) {
        this.api = new ObservableSecureMessagesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Returns a list of secure messages that form part of a conversation.
     * Retrieve all secure messages for a given conversation.
     * @param connectionToken Member\&#39;s Connection Key
     * @param uid The unique ID of a mydex member
     * @param conId The connection_id is a shared id between a connection and a member. It is a hyphenated combination of the member UID and the Dedicated Connection NID.
     * @param conversationId The specific ID of the conversation that groups messages together
     */
    public getSecureMessageConversationWithHttpInfo(connectionToken: string, uid: string, conId: string, conversationId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<SecureMessageConversationResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getSecureMessageConversationWithHttpInfo(connectionToken, uid, conId, conversationId, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns a list of secure messages that form part of a conversation.
     * Retrieve all secure messages for a given conversation.
     * @param connectionToken Member\&#39;s Connection Key
     * @param uid The unique ID of a mydex member
     * @param conId The connection_id is a shared id between a connection and a member. It is a hyphenated combination of the member UID and the Dedicated Connection NID.
     * @param conversationId The specific ID of the conversation that groups messages together
     */
    public getSecureMessageConversation(connectionToken: string, uid: string, conId: string, conversationId: string, _options?: PromiseConfigurationOptions): Promise<SecureMessageConversationResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getSecureMessageConversation(connectionToken, uid, conId, conversationId, observableOptions);
        return result.toPromise();
    }

    /**
     * Creates a new received message in the member\'s PDS.
     * Supports sending a message to the member\'s PDS.
     * @param connectionToken Member\&#39;s Connection Key
     * @param uid The unique ID of a mydex member
     * @param conId The connection_id is a shared id between a connection and a member. It is a hyphenated combination of the member UID and the Dedicated Connection NID.
     * @param [secureMessageReceiveRequest]
     */
    public postSecureMessageReceiveWithHttpInfo(connectionToken: string, uid: string, conId: string, secureMessageReceiveRequest?: SecureMessageReceiveRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<CreateResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.postSecureMessageReceiveWithHttpInfo(connectionToken, uid, conId, secureMessageReceiveRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Creates a new received message in the member\'s PDS.
     * Supports sending a message to the member\'s PDS.
     * @param connectionToken Member\&#39;s Connection Key
     * @param uid The unique ID of a mydex member
     * @param conId The connection_id is a shared id between a connection and a member. It is a hyphenated combination of the member UID and the Dedicated Connection NID.
     * @param [secureMessageReceiveRequest]
     */
    public postSecureMessageReceive(connectionToken: string, uid: string, conId: string, secureMessageReceiveRequest?: SecureMessageReceiveRequest, _options?: PromiseConfigurationOptions): Promise<CreateResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.postSecureMessageReceive(connectionToken, uid, conId, secureMessageReceiveRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Creates a new sent message in the member\'s PDS.
     * Supports sending a message from the member\'s PDS.
     * @param connectionToken Member\&#39;s Connection Key
     * @param uid The unique ID of a mydex member
     * @param conId The connection_id is a shared id between a connection and a member. It is a hyphenated combination of the member UID and the Dedicated Connection NID.
     * @param [secureMessageSendRequest]
     */
    public postSecureMessageSendWithHttpInfo(connectionToken: string, uid: string, conId: string, secureMessageSendRequest?: SecureMessageSendRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<CreateResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.postSecureMessageSendWithHttpInfo(connectionToken, uid, conId, secureMessageSendRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Creates a new sent message in the member\'s PDS.
     * Supports sending a message from the member\'s PDS.
     * @param connectionToken Member\&#39;s Connection Key
     * @param uid The unique ID of a mydex member
     * @param conId The connection_id is a shared id between a connection and a member. It is a hyphenated combination of the member UID and the Dedicated Connection NID.
     * @param [secureMessageSendRequest]
     */
    public postSecureMessageSend(connectionToken: string, uid: string, conId: string, secureMessageSendRequest?: SecureMessageSendRequest, _options?: PromiseConfigurationOptions): Promise<CreateResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.postSecureMessageSend(connectionToken, uid, conId, secureMessageSendRequest, observableOptions);
        return result.toPromise();
    }


}



import { ObservableTimelineApi } from './ObservableAPI';

import { TimelineApiRequestFactory, TimelineApiResponseProcessor} from "../apis/TimelineApi";
export class PromiseTimelineApi {
    private api: ObservableTimelineApi

    public constructor(
        configuration: Configuration,
        requestFactory?: TimelineApiRequestFactory,
        responseProcessor?: TimelineApiResponseProcessor
    ) {
        this.api = new ObservableTimelineApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Returns a list of timeline items which includes: referrals, calendar events and secure messages.
     * Retrieve list of timeline items.
     * @param connectionToken Member\&#39;s Connection Key
     * @param uid The unique ID of a mydex member
     * @param conId The connection_id is a shared id between a connection and a member. It is a hyphenated combination of the member UID and the Dedicated Connection NID.
     */
    public getTimelineWithHttpInfo(connectionToken: string, uid: string, conId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<TimelineResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getTimelineWithHttpInfo(connectionToken, uid, conId, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns a list of timeline items which includes: referrals, calendar events and secure messages.
     * Retrieve list of timeline items.
     * @param connectionToken Member\&#39;s Connection Key
     * @param uid The unique ID of a mydex member
     * @param conId The connection_id is a shared id between a connection and a member. It is a hyphenated combination of the member UID and the Dedicated Connection NID.
     */
    public getTimeline(connectionToken: string, uid: string, conId: string, _options?: PromiseConfigurationOptions): Promise<TimelineResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getTimeline(connectionToken, uid, conId, observableOptions);
        return result.toPromise();
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
    public getTimelineItemWithHttpInfo(connectionToken: string, uid: string, conId: string, featureBlock: 'referrals' | 'secure_messages' | 'calendar', featureBlockId: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<TimelineSingleItemResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getTimelineItemWithHttpInfo(connectionToken, uid, conId, featureBlock, featureBlockId, observableOptions);
        return result.toPromise();
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
    public getTimelineItem(connectionToken: string, uid: string, conId: string, featureBlock: 'referrals' | 'secure_messages' | 'calendar', featureBlockId: number, _options?: PromiseConfigurationOptions): Promise<TimelineSingleItemResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getTimelineItem(connectionToken, uid, conId, featureBlock, featureBlockId, observableOptions);
        return result.toPromise();
    }


}



