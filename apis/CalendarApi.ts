// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi';
import {Configuration} from '../configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile, HttpInfo} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {canConsumeForm, isCodeInRange} from '../util';
import {SecurityAuthentication} from '../auth/auth';


import { AuthErrorResponse } from '../models/AuthErrorResponse';
import { CalendarAppointmentCreateRequestBody } from '../models/CalendarAppointmentCreateRequestBody';
import { CalendarEventCreateRequestBody } from '../models/CalendarEventCreateRequestBody';
import { CalendarEventDeleteRequestBody } from '../models/CalendarEventDeleteRequestBody';
import { CalendarEventUpdateRequestBody } from '../models/CalendarEventUpdateRequestBody';
import { CreateResponse } from '../models/CreateResponse';
import { DeleteResponse } from '../models/DeleteResponse';
import { ErrorResponse } from '../models/ErrorResponse';
import { GetAppointmentsResponse } from '../models/GetAppointmentsResponse';
import { GetEventsResponse } from '../models/GetEventsResponse';
import { UpdateResponse } from '../models/UpdateResponse';

/**
 * no description
 */
export class CalendarApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Deletes an event in the user\'s calendar.
     * Supports deleting a calendar-event.
     * @param connectionToken Member\&#39;s Connection Key
     * @param uid The unique ID of a mydex member
     * @param conId The connection_id is a shared id between a connection and a member. It is a hyphenated combination of the member UID and the Dedicated Connection NID.
     * @param calendarEventDeleteRequestBody 
     */
    public async deleteCalendarEvent(connectionToken: string, uid: string, conId: string, calendarEventDeleteRequestBody?: CalendarEventDeleteRequestBody, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'connectionToken' is not null or undefined
        if (connectionToken === null || connectionToken === undefined) {
            throw new RequiredError("CalendarApi", "deleteCalendarEvent", "connectionToken");
        }


        // verify required parameter 'uid' is not null or undefined
        if (uid === null || uid === undefined) {
            throw new RequiredError("CalendarApi", "deleteCalendarEvent", "uid");
        }


        // verify required parameter 'conId' is not null or undefined
        if (conId === null || conId === undefined) {
            throw new RequiredError("CalendarApi", "deleteCalendarEvent", "conId");
        }



        // Path Params
        const localVarPath = '/calendar/delete-event';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.DELETE);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (uid !== undefined) {
            requestContext.setQueryParam("uid", ObjectSerializer.serialize(uid, "string", ""));
        }

        // Query Params
        if (conId !== undefined) {
            requestContext.setQueryParam("con_id", ObjectSerializer.serialize(conId, "string", ""));
        }

        // Header Params
        requestContext.setHeaderParam("Connection-Token", ObjectSerializer.serialize(connectionToken, "string", ""));


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(calendarEventDeleteRequestBody, "CalendarEventDeleteRequestBody", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["oauth2"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _config?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
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
    public async getCalendarAppointments(connectionToken: string, uid: string, conId: string, context: string, contextId: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'connectionToken' is not null or undefined
        if (connectionToken === null || connectionToken === undefined) {
            throw new RequiredError("CalendarApi", "getCalendarAppointments", "connectionToken");
        }


        // verify required parameter 'uid' is not null or undefined
        if (uid === null || uid === undefined) {
            throw new RequiredError("CalendarApi", "getCalendarAppointments", "uid");
        }


        // verify required parameter 'conId' is not null or undefined
        if (conId === null || conId === undefined) {
            throw new RequiredError("CalendarApi", "getCalendarAppointments", "conId");
        }


        // verify required parameter 'context' is not null or undefined
        if (context === null || context === undefined) {
            throw new RequiredError("CalendarApi", "getCalendarAppointments", "context");
        }


        // verify required parameter 'contextId' is not null or undefined
        if (contextId === null || contextId === undefined) {
            throw new RequiredError("CalendarApi", "getCalendarAppointments", "contextId");
        }


        // Path Params
        const localVarPath = '/calendar/get-appointments';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (uid !== undefined) {
            requestContext.setQueryParam("uid", ObjectSerializer.serialize(uid, "string", ""));
        }

        // Query Params
        if (conId !== undefined) {
            requestContext.setQueryParam("con_id", ObjectSerializer.serialize(conId, "string", ""));
        }

        // Query Params
        if (context !== undefined) {
            requestContext.setQueryParam("context", ObjectSerializer.serialize(context, "string", ""));
        }

        // Query Params
        if (contextId !== undefined) {
            requestContext.setQueryParam("context_id", ObjectSerializer.serialize(contextId, "number", ""));
        }

        // Header Params
        requestContext.setHeaderParam("Connection-Token", ObjectSerializer.serialize(connectionToken, "string", ""));


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["oauth2"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _config?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Returns a list of calendar events.
     * Retrieve calendar events
     * @param connectionToken Member\&#39;s Connection Key
     * @param uid The unique ID of a mydex member
     * @param conId The connection_id is a shared id between a connection and a member. It is a hyphenated combination of the member UID and the Dedicated Connection NID.
     */
    public async getCalendarEvents(connectionToken: string, uid: string, conId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'connectionToken' is not null or undefined
        if (connectionToken === null || connectionToken === undefined) {
            throw new RequiredError("CalendarApi", "getCalendarEvents", "connectionToken");
        }


        // verify required parameter 'uid' is not null or undefined
        if (uid === null || uid === undefined) {
            throw new RequiredError("CalendarApi", "getCalendarEvents", "uid");
        }


        // verify required parameter 'conId' is not null or undefined
        if (conId === null || conId === undefined) {
            throw new RequiredError("CalendarApi", "getCalendarEvents", "conId");
        }


        // Path Params
        const localVarPath = '/calendar/get-events';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (uid !== undefined) {
            requestContext.setQueryParam("uid", ObjectSerializer.serialize(uid, "string", ""));
        }

        // Query Params
        if (conId !== undefined) {
            requestContext.setQueryParam("con_id", ObjectSerializer.serialize(conId, "string", ""));
        }

        // Header Params
        requestContext.setHeaderParam("Connection-Token", ObjectSerializer.serialize(connectionToken, "string", ""));


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["oauth2"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _config?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Creates a new appointment in the user\'s calendar. An appointment must be made within a specified context e.g. a \'Referral\'
     * Supports adding a calendar-appointment.
     * @param connectionToken Member\&#39;s Connection Key
     * @param uid The unique ID of a mydex member
     * @param conId The connection_id is a shared id between a connection and a member. It is a hyphenated combination of the member UID and the Dedicated Connection NID.
     * @param calendarAppointmentCreateRequestBody 
     */
    public async postCalendarAppointment(connectionToken: string, uid: string, conId: string, calendarAppointmentCreateRequestBody?: CalendarAppointmentCreateRequestBody, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'connectionToken' is not null or undefined
        if (connectionToken === null || connectionToken === undefined) {
            throw new RequiredError("CalendarApi", "postCalendarAppointment", "connectionToken");
        }


        // verify required parameter 'uid' is not null or undefined
        if (uid === null || uid === undefined) {
            throw new RequiredError("CalendarApi", "postCalendarAppointment", "uid");
        }


        // verify required parameter 'conId' is not null or undefined
        if (conId === null || conId === undefined) {
            throw new RequiredError("CalendarApi", "postCalendarAppointment", "conId");
        }



        // Path Params
        const localVarPath = '/calendar/add-appointment';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (uid !== undefined) {
            requestContext.setQueryParam("uid", ObjectSerializer.serialize(uid, "string", ""));
        }

        // Query Params
        if (conId !== undefined) {
            requestContext.setQueryParam("con_id", ObjectSerializer.serialize(conId, "string", ""));
        }

        // Header Params
        requestContext.setHeaderParam("Connection-Token", ObjectSerializer.serialize(connectionToken, "string", ""));


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(calendarAppointmentCreateRequestBody, "CalendarAppointmentCreateRequestBody", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["oauth2"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _config?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Creates a new event in the user\'s calendar.
     * Supports adding a calendar-event.
     * @param connectionToken Member\&#39;s Connection Key
     * @param uid The unique ID of a mydex member
     * @param conId The connection_id is a shared id between a connection and a member. It is a hyphenated combination of the member UID and the Dedicated Connection NID.
     * @param calendarEventCreateRequestBody 
     */
    public async postCalendarEvent(connectionToken: string, uid: string, conId: string, calendarEventCreateRequestBody?: CalendarEventCreateRequestBody, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'connectionToken' is not null or undefined
        if (connectionToken === null || connectionToken === undefined) {
            throw new RequiredError("CalendarApi", "postCalendarEvent", "connectionToken");
        }


        // verify required parameter 'uid' is not null or undefined
        if (uid === null || uid === undefined) {
            throw new RequiredError("CalendarApi", "postCalendarEvent", "uid");
        }


        // verify required parameter 'conId' is not null or undefined
        if (conId === null || conId === undefined) {
            throw new RequiredError("CalendarApi", "postCalendarEvent", "conId");
        }



        // Path Params
        const localVarPath = '/calendar/add-event';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (uid !== undefined) {
            requestContext.setQueryParam("uid", ObjectSerializer.serialize(uid, "string", ""));
        }

        // Query Params
        if (conId !== undefined) {
            requestContext.setQueryParam("con_id", ObjectSerializer.serialize(conId, "string", ""));
        }

        // Header Params
        requestContext.setHeaderParam("Connection-Token", ObjectSerializer.serialize(connectionToken, "string", ""));


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(calendarEventCreateRequestBody, "CalendarEventCreateRequestBody", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["oauth2"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _config?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Updates an event in the user\'s calendar. For example, updating the \'status\' from \'INVITED\' to \'CONFIRMED\' when a user accepts the invitation to an appointment.
     * Supports updating a calendar-event.
     * @param connectionToken Member\&#39;s Connection Key
     * @param uid The unique ID of a mydex member
     * @param conId The connection_id is a shared id between a connection and a member. It is a hyphenated combination of the member UID and the Dedicated Connection NID.
     * @param calendarEventUpdateRequestBody 
     */
    public async putCalendarEvent(connectionToken: string, uid: string, conId: string, calendarEventUpdateRequestBody?: CalendarEventUpdateRequestBody, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'connectionToken' is not null or undefined
        if (connectionToken === null || connectionToken === undefined) {
            throw new RequiredError("CalendarApi", "putCalendarEvent", "connectionToken");
        }


        // verify required parameter 'uid' is not null or undefined
        if (uid === null || uid === undefined) {
            throw new RequiredError("CalendarApi", "putCalendarEvent", "uid");
        }


        // verify required parameter 'conId' is not null or undefined
        if (conId === null || conId === undefined) {
            throw new RequiredError("CalendarApi", "putCalendarEvent", "conId");
        }



        // Path Params
        const localVarPath = '/calendar/update-event';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.PUT);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (uid !== undefined) {
            requestContext.setQueryParam("uid", ObjectSerializer.serialize(uid, "string", ""));
        }

        // Query Params
        if (conId !== undefined) {
            requestContext.setQueryParam("con_id", ObjectSerializer.serialize(conId, "string", ""));
        }

        // Header Params
        requestContext.setHeaderParam("Connection-Token", ObjectSerializer.serialize(connectionToken, "string", ""));


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(calendarEventUpdateRequestBody, "CalendarEventUpdateRequestBody", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["oauth2"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _config?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

}

export class CalendarApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteCalendarEvent
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async deleteCalendarEventWithHttpInfo(response: ResponseContext): Promise<HttpInfo<DeleteResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: DeleteResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "DeleteResponse", ""
            ) as DeleteResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: ErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ErrorResponse", ""
            ) as ErrorResponse;
            throw new ApiException<ErrorResponse>(response.httpStatusCode, "Bad Request", body, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: AuthErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AuthErrorResponse", ""
            ) as AuthErrorResponse;
            throw new ApiException<AuthErrorResponse>(response.httpStatusCode, "Unauthorized", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: DeleteResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "DeleteResponse", ""
            ) as DeleteResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getCalendarAppointments
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getCalendarAppointmentsWithHttpInfo(response: ResponseContext): Promise<HttpInfo<GetAppointmentsResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: GetAppointmentsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GetAppointmentsResponse", ""
            ) as GetAppointmentsResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: ErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ErrorResponse", ""
            ) as ErrorResponse;
            throw new ApiException<ErrorResponse>(response.httpStatusCode, "Bad Request", body, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: AuthErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AuthErrorResponse", ""
            ) as AuthErrorResponse;
            throw new ApiException<AuthErrorResponse>(response.httpStatusCode, "Unauthorized", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: GetAppointmentsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GetAppointmentsResponse", ""
            ) as GetAppointmentsResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getCalendarEvents
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getCalendarEventsWithHttpInfo(response: ResponseContext): Promise<HttpInfo<GetEventsResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: GetEventsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GetEventsResponse", ""
            ) as GetEventsResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: AuthErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AuthErrorResponse", ""
            ) as AuthErrorResponse;
            throw new ApiException<AuthErrorResponse>(response.httpStatusCode, "Unauthorized", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: GetEventsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GetEventsResponse", ""
            ) as GetEventsResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to postCalendarAppointment
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async postCalendarAppointmentWithHttpInfo(response: ResponseContext): Promise<HttpInfo<CreateResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: CreateResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CreateResponse", ""
            ) as CreateResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: ErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ErrorResponse", ""
            ) as ErrorResponse;
            throw new ApiException<ErrorResponse>(response.httpStatusCode, "Bad Request", body, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: AuthErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AuthErrorResponse", ""
            ) as AuthErrorResponse;
            throw new ApiException<AuthErrorResponse>(response.httpStatusCode, "Unauthorized", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: CreateResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CreateResponse", ""
            ) as CreateResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to postCalendarEvent
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async postCalendarEventWithHttpInfo(response: ResponseContext): Promise<HttpInfo<CreateResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: CreateResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CreateResponse", ""
            ) as CreateResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: ErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ErrorResponse", ""
            ) as ErrorResponse;
            throw new ApiException<ErrorResponse>(response.httpStatusCode, "Bad Request", body, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: AuthErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AuthErrorResponse", ""
            ) as AuthErrorResponse;
            throw new ApiException<AuthErrorResponse>(response.httpStatusCode, "Unauthorized", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: CreateResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CreateResponse", ""
            ) as CreateResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to putCalendarEvent
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async putCalendarEventWithHttpInfo(response: ResponseContext): Promise<HttpInfo<UpdateResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: UpdateResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "UpdateResponse", ""
            ) as UpdateResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: ErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ErrorResponse", ""
            ) as ErrorResponse;
            throw new ApiException<ErrorResponse>(response.httpStatusCode, "Bad Request", body, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: AuthErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AuthErrorResponse", ""
            ) as AuthErrorResponse;
            throw new ApiException<AuthErrorResponse>(response.httpStatusCode, "Unauthorized", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: UpdateResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "UpdateResponse", ""
            ) as UpdateResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
