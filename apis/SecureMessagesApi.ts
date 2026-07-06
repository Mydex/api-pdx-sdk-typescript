// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi';
import {Configuration} from '../configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile, HttpInfo} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {canConsumeForm, isCodeInRange} from '../util';
import {SecurityAuthentication} from '../auth/auth';


import { AuthErrorResponse } from '../models/AuthErrorResponse';
import { CreateResponse } from '../models/CreateResponse';
import { ErrorResponse } from '../models/ErrorResponse';
import { SecureMessageConversationResponse } from '../models/SecureMessageConversationResponse';
import { SecureMessageReceiveRequest } from '../models/SecureMessageReceiveRequest';
import { SecureMessageSendRequest } from '../models/SecureMessageSendRequest';

/**
 * no description
 */
export class SecureMessagesApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Returns a list of secure messages that form part of a conversation.
     * Retrieve all secure messages for a given conversation.
     * @param connectionToken Member\&#39;s Connection Key
     * @param uid The unique ID of a mydex member
     * @param conId The connection_id is a shared id between a connection and a member. It is a hyphenated combination of the member UID and the Dedicated Connection NID.
     * @param conversationId The specific ID of the conversation that groups messages together
     */
    public async getSecureMessageConversation(connectionToken: string, uid: string, conId: string, conversationId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'connectionToken' is not null or undefined
        if (connectionToken === null || connectionToken === undefined) {
            throw new RequiredError("SecureMessagesApi", "getSecureMessageConversation", "connectionToken");
        }


        // verify required parameter 'uid' is not null or undefined
        if (uid === null || uid === undefined) {
            throw new RequiredError("SecureMessagesApi", "getSecureMessageConversation", "uid");
        }


        // verify required parameter 'conId' is not null or undefined
        if (conId === null || conId === undefined) {
            throw new RequiredError("SecureMessagesApi", "getSecureMessageConversation", "conId");
        }


        // verify required parameter 'conversationId' is not null or undefined
        if (conversationId === null || conversationId === undefined) {
            throw new RequiredError("SecureMessagesApi", "getSecureMessageConversation", "conversationId");
        }


        // Path Params
        const localVarPath = '/secure-messages/conversation';

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
        if (conversationId !== undefined) {
            requestContext.setQueryParam("conversation_id", ObjectSerializer.serialize(conversationId, "string", ""));
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
     * Creates a new received message in the member\'s PDS.
     * Supports sending a message to the member\'s PDS.
     * @param connectionToken Member\&#39;s Connection Key
     * @param uid The unique ID of a mydex member
     * @param conId The connection_id is a shared id between a connection and a member. It is a hyphenated combination of the member UID and the Dedicated Connection NID.
     * @param secureMessageReceiveRequest 
     */
    public async postSecureMessageReceive(connectionToken: string, uid: string, conId: string, secureMessageReceiveRequest?: SecureMessageReceiveRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'connectionToken' is not null or undefined
        if (connectionToken === null || connectionToken === undefined) {
            throw new RequiredError("SecureMessagesApi", "postSecureMessageReceive", "connectionToken");
        }


        // verify required parameter 'uid' is not null or undefined
        if (uid === null || uid === undefined) {
            throw new RequiredError("SecureMessagesApi", "postSecureMessageReceive", "uid");
        }


        // verify required parameter 'conId' is not null or undefined
        if (conId === null || conId === undefined) {
            throw new RequiredError("SecureMessagesApi", "postSecureMessageReceive", "conId");
        }



        // Path Params
        const localVarPath = '/secure-messages/receive';

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
            ObjectSerializer.serialize(secureMessageReceiveRequest, "SecureMessageReceiveRequest", ""),
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
     * Creates a new sent message in the member\'s PDS.
     * Supports sending a message from the member\'s PDS.
     * @param connectionToken Member\&#39;s Connection Key
     * @param uid The unique ID of a mydex member
     * @param conId The connection_id is a shared id between a connection and a member. It is a hyphenated combination of the member UID and the Dedicated Connection NID.
     * @param secureMessageSendRequest 
     */
    public async postSecureMessageSend(connectionToken: string, uid: string, conId: string, secureMessageSendRequest?: SecureMessageSendRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'connectionToken' is not null or undefined
        if (connectionToken === null || connectionToken === undefined) {
            throw new RequiredError("SecureMessagesApi", "postSecureMessageSend", "connectionToken");
        }


        // verify required parameter 'uid' is not null or undefined
        if (uid === null || uid === undefined) {
            throw new RequiredError("SecureMessagesApi", "postSecureMessageSend", "uid");
        }


        // verify required parameter 'conId' is not null or undefined
        if (conId === null || conId === undefined) {
            throw new RequiredError("SecureMessagesApi", "postSecureMessageSend", "conId");
        }



        // Path Params
        const localVarPath = '/secure-messages/send';

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
            ObjectSerializer.serialize(secureMessageSendRequest, "SecureMessageSendRequest", ""),
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

export class SecureMessagesApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getSecureMessageConversation
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getSecureMessageConversationWithHttpInfo(response: ResponseContext): Promise<HttpInfo<SecureMessageConversationResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: SecureMessageConversationResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SecureMessageConversationResponse", ""
            ) as SecureMessageConversationResponse;
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
            const body: SecureMessageConversationResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SecureMessageConversationResponse", ""
            ) as SecureMessageConversationResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to postSecureMessageReceive
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async postSecureMessageReceiveWithHttpInfo(response: ResponseContext): Promise<HttpInfo<CreateResponse >> {
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
     * @params response Response returned by the server for a request to postSecureMessageSend
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async postSecureMessageSendWithHttpInfo(response: ResponseContext): Promise<HttpInfo<CreateResponse >> {
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

}
