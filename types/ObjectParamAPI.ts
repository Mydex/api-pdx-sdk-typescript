import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../http/http';
import { Configuration, ConfigurationOptions } from '../configuration'
import type { Middleware } from '../middleware';

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

import { ObservableCalendarApi } from "./ObservableAPI";
import { CalendarApiRequestFactory, CalendarApiResponseProcessor} from "../apis/CalendarApi";

export interface CalendarApiDeleteCalendarEventRequest {
    /**
     * Member\&#39;s Connection Key
     * Defaults to: undefined
     * @type string
     * @memberof CalendarApideleteCalendarEvent
     */
    connectionToken: string
    /**
     * The unique ID of a mydex member
     * Defaults to: undefined
     * @type string
     * @memberof CalendarApideleteCalendarEvent
     */
    uid: string
    /**
     * The connection_id is a shared id between a connection and a member. It is a hyphenated combination of the member UID and the Dedicated Connection NID.
     * Defaults to: undefined
     * @type string
     * @memberof CalendarApideleteCalendarEvent
     */
    conId: string
    /**
     * 
     * @type CalendarEventDeleteRequestBody
     * @memberof CalendarApideleteCalendarEvent
     */
    calendarEventDeleteRequestBody?: CalendarEventDeleteRequestBody
}

export interface CalendarApiGetCalendarAppointmentsRequest {
    /**
     * Member\&#39;s Connection Key
     * Defaults to: undefined
     * @type string
     * @memberof CalendarApigetCalendarAppointments
     */
    connectionToken: string
    /**
     * The unique ID of a mydex member
     * Defaults to: undefined
     * @type string
     * @memberof CalendarApigetCalendarAppointments
     */
    uid: string
    /**
     * The connection_id is a shared id between a connection and a member. It is a hyphenated combination of the member UID and the Dedicated Connection NID.
     * Defaults to: undefined
     * @type string
     * @memberof CalendarApigetCalendarAppointments
     */
    conId: string
    /**
     * The context this belongs to
     * Defaults to: undefined
     * @type string
     * @memberof CalendarApigetCalendarAppointments
     */
    context: string
    /**
     * The specific ID of the context record
     * Defaults to: undefined
     * @type number
     * @memberof CalendarApigetCalendarAppointments
     */
    contextId: number
}

export interface CalendarApiGetCalendarEventsRequest {
    /**
     * Member\&#39;s Connection Key
     * Defaults to: undefined
     * @type string
     * @memberof CalendarApigetCalendarEvents
     */
    connectionToken: string
    /**
     * The unique ID of a mydex member
     * Defaults to: undefined
     * @type string
     * @memberof CalendarApigetCalendarEvents
     */
    uid: string
    /**
     * The connection_id is a shared id between a connection and a member. It is a hyphenated combination of the member UID and the Dedicated Connection NID.
     * Defaults to: undefined
     * @type string
     * @memberof CalendarApigetCalendarEvents
     */
    conId: string
}

export interface CalendarApiPostCalendarAppointmentRequest {
    /**
     * Member\&#39;s Connection Key
     * Defaults to: undefined
     * @type string
     * @memberof CalendarApipostCalendarAppointment
     */
    connectionToken: string
    /**
     * The unique ID of a mydex member
     * Defaults to: undefined
     * @type string
     * @memberof CalendarApipostCalendarAppointment
     */
    uid: string
    /**
     * The connection_id is a shared id between a connection and a member. It is a hyphenated combination of the member UID and the Dedicated Connection NID.
     * Defaults to: undefined
     * @type string
     * @memberof CalendarApipostCalendarAppointment
     */
    conId: string
    /**
     * 
     * @type CalendarAppointmentCreateRequestBody
     * @memberof CalendarApipostCalendarAppointment
     */
    calendarAppointmentCreateRequestBody?: CalendarAppointmentCreateRequestBody
}

export interface CalendarApiPostCalendarEventRequest {
    /**
     * Member\&#39;s Connection Key
     * Defaults to: undefined
     * @type string
     * @memberof CalendarApipostCalendarEvent
     */
    connectionToken: string
    /**
     * The unique ID of a mydex member
     * Defaults to: undefined
     * @type string
     * @memberof CalendarApipostCalendarEvent
     */
    uid: string
    /**
     * The connection_id is a shared id between a connection and a member. It is a hyphenated combination of the member UID and the Dedicated Connection NID.
     * Defaults to: undefined
     * @type string
     * @memberof CalendarApipostCalendarEvent
     */
    conId: string
    /**
     * 
     * @type CalendarEventCreateRequestBody
     * @memberof CalendarApipostCalendarEvent
     */
    calendarEventCreateRequestBody?: CalendarEventCreateRequestBody
}

export interface CalendarApiPutCalendarEventRequest {
    /**
     * Member\&#39;s Connection Key
     * Defaults to: undefined
     * @type string
     * @memberof CalendarApiputCalendarEvent
     */
    connectionToken: string
    /**
     * The unique ID of a mydex member
     * Defaults to: undefined
     * @type string
     * @memberof CalendarApiputCalendarEvent
     */
    uid: string
    /**
     * The connection_id is a shared id between a connection and a member. It is a hyphenated combination of the member UID and the Dedicated Connection NID.
     * Defaults to: undefined
     * @type string
     * @memberof CalendarApiputCalendarEvent
     */
    conId: string
    /**
     * 
     * @type CalendarEventUpdateRequestBody
     * @memberof CalendarApiputCalendarEvent
     */
    calendarEventUpdateRequestBody?: CalendarEventUpdateRequestBody
}

export class ObjectCalendarApi {
    private api: ObservableCalendarApi

    public constructor(configuration: Configuration, requestFactory?: CalendarApiRequestFactory, responseProcessor?: CalendarApiResponseProcessor) {
        this.api = new ObservableCalendarApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Deletes an event in the user\'s calendar.
     * Supports deleting a calendar-event.
     * @param param the request object
     */
    public deleteCalendarEventWithHttpInfo(param: CalendarApiDeleteCalendarEventRequest, options?: ConfigurationOptions): Promise<HttpInfo<DeleteResponse>> {
        return this.api.deleteCalendarEventWithHttpInfo(param.connectionToken, param.uid, param.conId, param.calendarEventDeleteRequestBody,  options).toPromise();
    }

    /**
     * Deletes an event in the user\'s calendar.
     * Supports deleting a calendar-event.
     * @param param the request object
     */
    public deleteCalendarEvent(param: CalendarApiDeleteCalendarEventRequest, options?: ConfigurationOptions): Promise<DeleteResponse> {
        return this.api.deleteCalendarEvent(param.connectionToken, param.uid, param.conId, param.calendarEventDeleteRequestBody,  options).toPromise();
    }

    /**
     * Returns a list of appointments filtered by context and context_id.
     * Retrieve appointments for a given context
     * @param param the request object
     */
    public getCalendarAppointmentsWithHttpInfo(param: CalendarApiGetCalendarAppointmentsRequest, options?: ConfigurationOptions): Promise<HttpInfo<GetAppointmentsResponse>> {
        return this.api.getCalendarAppointmentsWithHttpInfo(param.connectionToken, param.uid, param.conId, param.context, param.contextId,  options).toPromise();
    }

    /**
     * Returns a list of appointments filtered by context and context_id.
     * Retrieve appointments for a given context
     * @param param the request object
     */
    public getCalendarAppointments(param: CalendarApiGetCalendarAppointmentsRequest, options?: ConfigurationOptions): Promise<GetAppointmentsResponse> {
        return this.api.getCalendarAppointments(param.connectionToken, param.uid, param.conId, param.context, param.contextId,  options).toPromise();
    }

    /**
     * Returns a list of calendar events.
     * Retrieve calendar events
     * @param param the request object
     */
    public getCalendarEventsWithHttpInfo(param: CalendarApiGetCalendarEventsRequest, options?: ConfigurationOptions): Promise<HttpInfo<GetEventsResponse>> {
        return this.api.getCalendarEventsWithHttpInfo(param.connectionToken, param.uid, param.conId,  options).toPromise();
    }

    /**
     * Returns a list of calendar events.
     * Retrieve calendar events
     * @param param the request object
     */
    public getCalendarEvents(param: CalendarApiGetCalendarEventsRequest, options?: ConfigurationOptions): Promise<GetEventsResponse> {
        return this.api.getCalendarEvents(param.connectionToken, param.uid, param.conId,  options).toPromise();
    }

    /**
     * Creates a new appointment in the user\'s calendar. An appointment must be made within a specified context e.g. a \'Referral\'
     * Supports adding a calendar-appointment.
     * @param param the request object
     */
    public postCalendarAppointmentWithHttpInfo(param: CalendarApiPostCalendarAppointmentRequest, options?: ConfigurationOptions): Promise<HttpInfo<CreateResponse>> {
        return this.api.postCalendarAppointmentWithHttpInfo(param.connectionToken, param.uid, param.conId, param.calendarAppointmentCreateRequestBody,  options).toPromise();
    }

    /**
     * Creates a new appointment in the user\'s calendar. An appointment must be made within a specified context e.g. a \'Referral\'
     * Supports adding a calendar-appointment.
     * @param param the request object
     */
    public postCalendarAppointment(param: CalendarApiPostCalendarAppointmentRequest, options?: ConfigurationOptions): Promise<CreateResponse> {
        return this.api.postCalendarAppointment(param.connectionToken, param.uid, param.conId, param.calendarAppointmentCreateRequestBody,  options).toPromise();
    }

    /**
     * Creates a new event in the user\'s calendar.
     * Supports adding a calendar-event.
     * @param param the request object
     */
    public postCalendarEventWithHttpInfo(param: CalendarApiPostCalendarEventRequest, options?: ConfigurationOptions): Promise<HttpInfo<CreateResponse>> {
        return this.api.postCalendarEventWithHttpInfo(param.connectionToken, param.uid, param.conId, param.calendarEventCreateRequestBody,  options).toPromise();
    }

    /**
     * Creates a new event in the user\'s calendar.
     * Supports adding a calendar-event.
     * @param param the request object
     */
    public postCalendarEvent(param: CalendarApiPostCalendarEventRequest, options?: ConfigurationOptions): Promise<CreateResponse> {
        return this.api.postCalendarEvent(param.connectionToken, param.uid, param.conId, param.calendarEventCreateRequestBody,  options).toPromise();
    }

    /**
     * Updates an event in the user\'s calendar. For example, updating the \'status\' from \'INVITED\' to \'CONFIRMED\' when a user accepts the invitation to an appointment.
     * Supports updating a calendar-event.
     * @param param the request object
     */
    public putCalendarEventWithHttpInfo(param: CalendarApiPutCalendarEventRequest, options?: ConfigurationOptions): Promise<HttpInfo<UpdateResponse>> {
        return this.api.putCalendarEventWithHttpInfo(param.connectionToken, param.uid, param.conId, param.calendarEventUpdateRequestBody,  options).toPromise();
    }

    /**
     * Updates an event in the user\'s calendar. For example, updating the \'status\' from \'INVITED\' to \'CONFIRMED\' when a user accepts the invitation to an appointment.
     * Supports updating a calendar-event.
     * @param param the request object
     */
    public putCalendarEvent(param: CalendarApiPutCalendarEventRequest, options?: ConfigurationOptions): Promise<UpdateResponse> {
        return this.api.putCalendarEvent(param.connectionToken, param.uid, param.conId, param.calendarEventUpdateRequestBody,  options).toPromise();
    }

}

import { ObservableReferralsApi } from "./ObservableAPI";
import { ReferralsApiRequestFactory, ReferralsApiResponseProcessor} from "../apis/ReferralsApi";

export interface ReferralsApiAddReferralRequest {
    /**
     * Member\&#39;s Connection Key
     * Defaults to: undefined
     * @type string
     * @memberof ReferralsApiaddReferral
     */
    connectionToken: string
    /**
     * The unique ID of a mydex member
     * Defaults to: undefined
     * @type string
     * @memberof ReferralsApiaddReferral
     */
    uid: string
    /**
     * The connection_id is a shared id between a connection and a member. It is a hyphenated combination of the member UID and the Dedicated Connection NID.
     * Defaults to: undefined
     * @type string
     * @memberof ReferralsApiaddReferral
     */
    conId: string
    /**
     * 
     * @type AddReferralRequestBody
     * @memberof ReferralsApiaddReferral
     */
    addReferralRequestBody?: AddReferralRequestBody
}

export interface ReferralsApiGetAllReferralsRequest {
    /**
     * Member\&#39;s Connection Key
     * Defaults to: undefined
     * @type string
     * @memberof ReferralsApigetAllReferrals
     */
    connectionToken: string
    /**
     * The unique ID of a mydex member
     * Defaults to: undefined
     * @type string
     * @memberof ReferralsApigetAllReferrals
     */
    uid: string
    /**
     * The connection_id is a shared id between a connection and a member. It is a hyphenated combination of the member UID and the Dedicated Connection NID.
     * Defaults to: undefined
     * @type string
     * @memberof ReferralsApigetAllReferrals
     */
    conId: string
}

export interface ReferralsApiGetSingleReferralRequest {
    /**
     * Member\&#39;s Connection Key
     * Defaults to: undefined
     * @type string
     * @memberof ReferralsApigetSingleReferral
     */
    connectionToken: string
    /**
     * The unique ID of a mydex member
     * Defaults to: undefined
     * @type string
     * @memberof ReferralsApigetSingleReferral
     */
    uid: string
    /**
     * The connection_id is a shared id between a connection and a member. It is a hyphenated combination of the member UID and the Dedicated Connection NID.
     * Defaults to: undefined
     * @type string
     * @memberof ReferralsApigetSingleReferral
     */
    conId: string
    /**
     * The record id requested.
     * Defaults to: undefined
     * @type string
     * @memberof ReferralsApigetSingleReferral
     */
    id: string
}

export interface ReferralsApiPostSelfReferralRequest {
    /**
     * Member\&#39;s Connection Key
     * Defaults to: undefined
     * @type string
     * @memberof ReferralsApipostSelfReferral
     */
    connectionToken: string
    /**
     * The unique ID of a mydex member
     * Defaults to: undefined
     * @type string
     * @memberof ReferralsApipostSelfReferral
     */
    uid: string
    /**
     * The connection_id is a shared id between a connection and a member. It is a hyphenated combination of the member UID and the Dedicated Connection NID.
     * Defaults to: undefined
     * @type string
     * @memberof ReferralsApipostSelfReferral
     */
    conId: string
    /**
     * 
     * @type SelfReferralRequestBody
     * @memberof ReferralsApipostSelfReferral
     */
    selfReferralRequestBody?: SelfReferralRequestBody
}

export interface ReferralsApiUpdateReferralStatusRequest {
    /**
     * Member\&#39;s Connection Key
     * Defaults to: undefined
     * @type string
     * @memberof ReferralsApiupdateReferralStatus
     */
    connectionToken: string
    /**
     * The unique ID of a mydex member
     * Defaults to: undefined
     * @type string
     * @memberof ReferralsApiupdateReferralStatus
     */
    uid: string
    /**
     * The connection_id is a shared id between a connection and a member. It is a hyphenated combination of the member UID and the Dedicated Connection NID.
     * Defaults to: undefined
     * @type string
     * @memberof ReferralsApiupdateReferralStatus
     */
    conId: string
    /**
     * 
     * @type ReferralStatusUpdateRequestBody
     * @memberof ReferralsApiupdateReferralStatus
     */
    referralStatusUpdateRequestBody?: ReferralStatusUpdateRequestBody
}

export class ObjectReferralsApi {
    private api: ObservableReferralsApi

    public constructor(configuration: Configuration, requestFactory?: ReferralsApiRequestFactory, responseProcessor?: ReferralsApiResponseProcessor) {
        this.api = new ObservableReferralsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Creates a new referral in the member\'s PDS targeting a remote service identified by a DSSA UUID. If the member is already connected to the remote DSSA the referral is created with status \'complete\' and the remote service is notified. If the member is not connected the referral is created with status \'pending\' and either an FTC URL is returned (member_present=true) or a notification is sent to the member (member_present=false).
     * Initiates a referral to a remote DSSA.
     * @param param the request object
     */
    public addReferralWithHttpInfo(param: ReferralsApiAddReferralRequest, options?: ConfigurationOptions): Promise<HttpInfo<AddReferralResponse>> {
        return this.api.addReferralWithHttpInfo(param.connectionToken, param.uid, param.conId, param.addReferralRequestBody,  options).toPromise();
    }

    /**
     * Creates a new referral in the member\'s PDS targeting a remote service identified by a DSSA UUID. If the member is already connected to the remote DSSA the referral is created with status \'complete\' and the remote service is notified. If the member is not connected the referral is created with status \'pending\' and either an FTC URL is returned (member_present=true) or a notification is sent to the member (member_present=false).
     * Initiates a referral to a remote DSSA.
     * @param param the request object
     */
    public addReferral(param: ReferralsApiAddReferralRequest, options?: ConfigurationOptions): Promise<AddReferralResponse> {
        return this.api.addReferral(param.connectionToken, param.uid, param.conId, param.addReferralRequestBody,  options).toPromise();
    }

    /**
     * Returns a list of referrals.
     * Retrieve rall referrals for a given member.
     * @param param the request object
     */
    public getAllReferralsWithHttpInfo(param: ReferralsApiGetAllReferralsRequest, options?: ConfigurationOptions): Promise<HttpInfo<ReferralListResponse>> {
        return this.api.getAllReferralsWithHttpInfo(param.connectionToken, param.uid, param.conId,  options).toPromise();
    }

    /**
     * Returns a list of referrals.
     * Retrieve rall referrals for a given member.
     * @param param the request object
     */
    public getAllReferrals(param: ReferralsApiGetAllReferralsRequest, options?: ConfigurationOptions): Promise<ReferralListResponse> {
        return this.api.getAllReferrals(param.connectionToken, param.uid, param.conId,  options).toPromise();
    }

    /**
     * Returns the requested referral.
     * Retrieve a single referral by id for a given member.
     * @param param the request object
     */
    public getSingleReferralWithHttpInfo(param: ReferralsApiGetSingleReferralRequest, options?: ConfigurationOptions): Promise<HttpInfo<ReferralSingleResponse>> {
        return this.api.getSingleReferralWithHttpInfo(param.connectionToken, param.uid, param.conId, param.id,  options).toPromise();
    }

    /**
     * Returns the requested referral.
     * Retrieve a single referral by id for a given member.
     * @param param the request object
     */
    public getSingleReferral(param: ReferralsApiGetSingleReferralRequest, options?: ConfigurationOptions): Promise<ReferralSingleResponse> {
        return this.api.getSingleReferral(param.connectionToken, param.uid, param.conId, param.id,  options).toPromise();
    }

    /**
     * Creates a new referral of type \'Self Referred\' in the member\'s PDS.
     * Supports self-referral.
     * @param param the request object
     */
    public postSelfReferralWithHttpInfo(param: ReferralsApiPostSelfReferralRequest, options?: ConfigurationOptions): Promise<HttpInfo<CreateResponse>> {
        return this.api.postSelfReferralWithHttpInfo(param.connectionToken, param.uid, param.conId, param.selfReferralRequestBody,  options).toPromise();
    }

    /**
     * Creates a new referral of type \'Self Referred\' in the member\'s PDS.
     * Supports self-referral.
     * @param param the request object
     */
    public postSelfReferral(param: ReferralsApiPostSelfReferralRequest, options?: ConfigurationOptions): Promise<CreateResponse> {
        return this.api.postSelfReferral(param.connectionToken, param.uid, param.conId, param.selfReferralRequestBody,  options).toPromise();
    }

    /**
     * Updates the status of a member\'s referral specified by id. For example, having been referred to a service, the status is set by default to \'Referred\' and this route enables it to be updated to \'Accepted\' or \'Rejected\'
     * Supports updating the status of a referral.
     * @param param the request object
     */
    public updateReferralStatusWithHttpInfo(param: ReferralsApiUpdateReferralStatusRequest, options?: ConfigurationOptions): Promise<HttpInfo<UpdateResponse>> {
        return this.api.updateReferralStatusWithHttpInfo(param.connectionToken, param.uid, param.conId, param.referralStatusUpdateRequestBody,  options).toPromise();
    }

    /**
     * Updates the status of a member\'s referral specified by id. For example, having been referred to a service, the status is set by default to \'Referred\' and this route enables it to be updated to \'Accepted\' or \'Rejected\'
     * Supports updating the status of a referral.
     * @param param the request object
     */
    public updateReferralStatus(param: ReferralsApiUpdateReferralStatusRequest, options?: ConfigurationOptions): Promise<UpdateResponse> {
        return this.api.updateReferralStatus(param.connectionToken, param.uid, param.conId, param.referralStatusUpdateRequestBody,  options).toPromise();
    }

}

import { ObservableSecureMessagesApi } from "./ObservableAPI";
import { SecureMessagesApiRequestFactory, SecureMessagesApiResponseProcessor} from "../apis/SecureMessagesApi";

export interface SecureMessagesApiGetSecureMessageConversationRequest {
    /**
     * Member\&#39;s Connection Key
     * Defaults to: undefined
     * @type string
     * @memberof SecureMessagesApigetSecureMessageConversation
     */
    connectionToken: string
    /**
     * The unique ID of a mydex member
     * Defaults to: undefined
     * @type string
     * @memberof SecureMessagesApigetSecureMessageConversation
     */
    uid: string
    /**
     * The connection_id is a shared id between a connection and a member. It is a hyphenated combination of the member UID and the Dedicated Connection NID.
     * Defaults to: undefined
     * @type string
     * @memberof SecureMessagesApigetSecureMessageConversation
     */
    conId: string
    /**
     * The specific ID of the conversation that groups messages together
     * Defaults to: undefined
     * @type string
     * @memberof SecureMessagesApigetSecureMessageConversation
     */
    conversationId: string
}

export interface SecureMessagesApiPostSecureMessageReceiveRequest {
    /**
     * Member\&#39;s Connection Key
     * Defaults to: undefined
     * @type string
     * @memberof SecureMessagesApipostSecureMessageReceive
     */
    connectionToken: string
    /**
     * The unique ID of a mydex member
     * Defaults to: undefined
     * @type string
     * @memberof SecureMessagesApipostSecureMessageReceive
     */
    uid: string
    /**
     * The connection_id is a shared id between a connection and a member. It is a hyphenated combination of the member UID and the Dedicated Connection NID.
     * Defaults to: undefined
     * @type string
     * @memberof SecureMessagesApipostSecureMessageReceive
     */
    conId: string
    /**
     * 
     * @type SecureMessageReceiveRequest
     * @memberof SecureMessagesApipostSecureMessageReceive
     */
    secureMessageReceiveRequest?: SecureMessageReceiveRequest
}

export interface SecureMessagesApiPostSecureMessageSendRequest {
    /**
     * Member\&#39;s Connection Key
     * Defaults to: undefined
     * @type string
     * @memberof SecureMessagesApipostSecureMessageSend
     */
    connectionToken: string
    /**
     * The unique ID of a mydex member
     * Defaults to: undefined
     * @type string
     * @memberof SecureMessagesApipostSecureMessageSend
     */
    uid: string
    /**
     * The connection_id is a shared id between a connection and a member. It is a hyphenated combination of the member UID and the Dedicated Connection NID.
     * Defaults to: undefined
     * @type string
     * @memberof SecureMessagesApipostSecureMessageSend
     */
    conId: string
    /**
     * 
     * @type SecureMessageSendRequest
     * @memberof SecureMessagesApipostSecureMessageSend
     */
    secureMessageSendRequest?: SecureMessageSendRequest
}

export class ObjectSecureMessagesApi {
    private api: ObservableSecureMessagesApi

    public constructor(configuration: Configuration, requestFactory?: SecureMessagesApiRequestFactory, responseProcessor?: SecureMessagesApiResponseProcessor) {
        this.api = new ObservableSecureMessagesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Returns a list of secure messages that form part of a conversation.
     * Retrieve all secure messages for a given conversation.
     * @param param the request object
     */
    public getSecureMessageConversationWithHttpInfo(param: SecureMessagesApiGetSecureMessageConversationRequest, options?: ConfigurationOptions): Promise<HttpInfo<SecureMessageConversationResponse>> {
        return this.api.getSecureMessageConversationWithHttpInfo(param.connectionToken, param.uid, param.conId, param.conversationId,  options).toPromise();
    }

    /**
     * Returns a list of secure messages that form part of a conversation.
     * Retrieve all secure messages for a given conversation.
     * @param param the request object
     */
    public getSecureMessageConversation(param: SecureMessagesApiGetSecureMessageConversationRequest, options?: ConfigurationOptions): Promise<SecureMessageConversationResponse> {
        return this.api.getSecureMessageConversation(param.connectionToken, param.uid, param.conId, param.conversationId,  options).toPromise();
    }

    /**
     * Creates a new received message in the member\'s PDS.
     * Supports sending a message to the member\'s PDS.
     * @param param the request object
     */
    public postSecureMessageReceiveWithHttpInfo(param: SecureMessagesApiPostSecureMessageReceiveRequest, options?: ConfigurationOptions): Promise<HttpInfo<CreateResponse>> {
        return this.api.postSecureMessageReceiveWithHttpInfo(param.connectionToken, param.uid, param.conId, param.secureMessageReceiveRequest,  options).toPromise();
    }

    /**
     * Creates a new received message in the member\'s PDS.
     * Supports sending a message to the member\'s PDS.
     * @param param the request object
     */
    public postSecureMessageReceive(param: SecureMessagesApiPostSecureMessageReceiveRequest, options?: ConfigurationOptions): Promise<CreateResponse> {
        return this.api.postSecureMessageReceive(param.connectionToken, param.uid, param.conId, param.secureMessageReceiveRequest,  options).toPromise();
    }

    /**
     * Creates a new sent message in the member\'s PDS.
     * Supports sending a message from the member\'s PDS.
     * @param param the request object
     */
    public postSecureMessageSendWithHttpInfo(param: SecureMessagesApiPostSecureMessageSendRequest, options?: ConfigurationOptions): Promise<HttpInfo<CreateResponse>> {
        return this.api.postSecureMessageSendWithHttpInfo(param.connectionToken, param.uid, param.conId, param.secureMessageSendRequest,  options).toPromise();
    }

    /**
     * Creates a new sent message in the member\'s PDS.
     * Supports sending a message from the member\'s PDS.
     * @param param the request object
     */
    public postSecureMessageSend(param: SecureMessagesApiPostSecureMessageSendRequest, options?: ConfigurationOptions): Promise<CreateResponse> {
        return this.api.postSecureMessageSend(param.connectionToken, param.uid, param.conId, param.secureMessageSendRequest,  options).toPromise();
    }

}

import { ObservableTimelineApi } from "./ObservableAPI";
import { TimelineApiRequestFactory, TimelineApiResponseProcessor} from "../apis/TimelineApi";

export interface TimelineApiGetTimelineRequest {
    /**
     * Member\&#39;s Connection Key
     * Defaults to: undefined
     * @type string
     * @memberof TimelineApigetTimeline
     */
    connectionToken: string
    /**
     * The unique ID of a mydex member
     * Defaults to: undefined
     * @type string
     * @memberof TimelineApigetTimeline
     */
    uid: string
    /**
     * The connection_id is a shared id between a connection and a member. It is a hyphenated combination of the member UID and the Dedicated Connection NID.
     * Defaults to: undefined
     * @type string
     * @memberof TimelineApigetTimeline
     */
    conId: string
}

export interface TimelineApiGetTimelineItemRequest {
    /**
     * Member\&#39;s Connection Key
     * Defaults to: undefined
     * @type string
     * @memberof TimelineApigetTimelineItem
     */
    connectionToken: string
    /**
     * The unique ID of a mydex member
     * Defaults to: undefined
     * @type string
     * @memberof TimelineApigetTimelineItem
     */
    uid: string
    /**
     * The connection_id is a shared id between a connection and a member. It is a hyphenated combination of the member UID and the Dedicated Connection NID.
     * Defaults to: undefined
     * @type string
     * @memberof TimelineApigetTimelineItem
     */
    conId: string
    /**
     * The feature block the teimline item belongs to
     * Defaults to: undefined
     * @type &#39;referrals&#39; | &#39;secure_messages&#39; | &#39;calendar&#39;
     * @memberof TimelineApigetTimelineItem
     */
    featureBlock: 'referrals' | 'secure_messages' | 'calendar'
    /**
     * The specific ID of the record within the specified feature block e.g. if \&#39;referrals\&#39; is the feature block, then this should be a specific referral id
     * Defaults to: undefined
     * @type number
     * @memberof TimelineApigetTimelineItem
     */
    featureBlockId: number
}

export class ObjectTimelineApi {
    private api: ObservableTimelineApi

    public constructor(configuration: Configuration, requestFactory?: TimelineApiRequestFactory, responseProcessor?: TimelineApiResponseProcessor) {
        this.api = new ObservableTimelineApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Returns a list of timeline items which includes: referrals, calendar events and secure messages.
     * Retrieve list of timeline items.
     * @param param the request object
     */
    public getTimelineWithHttpInfo(param: TimelineApiGetTimelineRequest, options?: ConfigurationOptions): Promise<HttpInfo<TimelineResponse>> {
        return this.api.getTimelineWithHttpInfo(param.connectionToken, param.uid, param.conId,  options).toPromise();
    }

    /**
     * Returns a list of timeline items which includes: referrals, calendar events and secure messages.
     * Retrieve list of timeline items.
     * @param param the request object
     */
    public getTimeline(param: TimelineApiGetTimelineRequest, options?: ConfigurationOptions): Promise<TimelineResponse> {
        return this.api.getTimeline(param.connectionToken, param.uid, param.conId,  options).toPromise();
    }

    /**
     * Returns a single timeline item based on feature block and feature block id requested e.g. a \'referral\' with id 123.
     * Retrieve a single timeline item.
     * @param param the request object
     */
    public getTimelineItemWithHttpInfo(param: TimelineApiGetTimelineItemRequest, options?: ConfigurationOptions): Promise<HttpInfo<TimelineSingleItemResponse>> {
        return this.api.getTimelineItemWithHttpInfo(param.connectionToken, param.uid, param.conId, param.featureBlock, param.featureBlockId,  options).toPromise();
    }

    /**
     * Returns a single timeline item based on feature block and feature block id requested e.g. a \'referral\' with id 123.
     * Retrieve a single timeline item.
     * @param param the request object
     */
    public getTimelineItem(param: TimelineApiGetTimelineItemRequest, options?: ConfigurationOptions): Promise<TimelineSingleItemResponse> {
        return this.api.getTimelineItem(param.connectionToken, param.uid, param.conId, param.featureBlock, param.featureBlockId,  options).toPromise();
    }

}
