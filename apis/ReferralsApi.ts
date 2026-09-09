// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi';
import {Configuration} from '../configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile, HttpInfo} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {canConsumeForm, isCodeInRange} from '../util';
import {SecurityAuthentication} from '../auth/auth';


import { AddReferralRequestBody } from '../models/AddReferralRequestBody';
import { AddReferralResponse } from '../models/AddReferralResponse';
import { AuthErrorResponse } from '../models/AuthErrorResponse';
import { CreateResponse } from '../models/CreateResponse';
import { ErrorResponse } from '../models/ErrorResponse';
import { ReferralListResponse } from '../models/ReferralListResponse';
import { ReferralSingleResponse } from '../models/ReferralSingleResponse';
import { ReferralStatusUpdateRequestBody } from '../models/ReferralStatusUpdateRequestBody';
import { SelfReferralRequestBody } from '../models/SelfReferralRequestBody';
import { UpdateResponse } from '../models/UpdateResponse';

/**
 * no description
 */
export class ReferralsApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Creates a new referral in the member\'s PDS targeting a remote service identified by a DSSA UUID. If the member is already connected to the remote DSSA the referral is created with status \'complete\' and the remote service is notified. If the member is not connected the referral is created with status \'pending\' and either an FTC URL is returned (member_present=true) or a notification is sent to the member (member_present=false).
     * Initiates a referral to a remote DSSA.
     * @param connectionToken Member\&#39;s Connection Key
     * @param uid The unique ID of a mydex member
     * @param conId The connection_id is a shared id between a connection and a member. It is a hyphenated combination of the member UID and the Dedicated Connection NID.
     * @param addReferralRequestBody 
     */
    public async addReferral(connectionToken: string, uid: string, conId: string, addReferralRequestBody?: AddReferralRequestBody, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'connectionToken' is not null or undefined
        if (connectionToken === null || connectionToken === undefined) {
            throw new RequiredError("ReferralsApi", "addReferral", "connectionToken");
        }


        // verify required parameter 'uid' is not null or undefined
        if (uid === null || uid === undefined) {
            throw new RequiredError("ReferralsApi", "addReferral", "uid");
        }


        // verify required parameter 'conId' is not null or undefined
        if (conId === null || conId === undefined) {
            throw new RequiredError("ReferralsApi", "addReferral", "conId");
        }



        // Path Params
        const localVarPath = '/referrals/add';

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
            ObjectSerializer.serialize(addReferralRequestBody, "AddReferralRequestBody", ""),
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
     * Returns a list of referrals.
     * Retrieve rall referrals for a given member.
     * @param connectionToken Member\&#39;s Connection Key
     * @param uid The unique ID of a mydex member
     * @param conId The connection_id is a shared id between a connection and a member. It is a hyphenated combination of the member UID and the Dedicated Connection NID.
     */
    public async getAllReferrals(connectionToken: string, uid: string, conId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'connectionToken' is not null or undefined
        if (connectionToken === null || connectionToken === undefined) {
            throw new RequiredError("ReferralsApi", "getAllReferrals", "connectionToken");
        }


        // verify required parameter 'uid' is not null or undefined
        if (uid === null || uid === undefined) {
            throw new RequiredError("ReferralsApi", "getAllReferrals", "uid");
        }


        // verify required parameter 'conId' is not null or undefined
        if (conId === null || conId === undefined) {
            throw new RequiredError("ReferralsApi", "getAllReferrals", "conId");
        }


        // Path Params
        const localVarPath = '/referrals/read-all';

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
     * Returns the requested referral.
     * Retrieve a single referral by id for a given member.
     * @param connectionToken Member\&#39;s Connection Key
     * @param uid The unique ID of a mydex member
     * @param conId The connection_id is a shared id between a connection and a member. It is a hyphenated combination of the member UID and the Dedicated Connection NID.
     * @param id The record id requested.
     */
    public async getSingleReferral(connectionToken: string, uid: string, conId: string, id: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'connectionToken' is not null or undefined
        if (connectionToken === null || connectionToken === undefined) {
            throw new RequiredError("ReferralsApi", "getSingleReferral", "connectionToken");
        }


        // verify required parameter 'uid' is not null or undefined
        if (uid === null || uid === undefined) {
            throw new RequiredError("ReferralsApi", "getSingleReferral", "uid");
        }


        // verify required parameter 'conId' is not null or undefined
        if (conId === null || conId === undefined) {
            throw new RequiredError("ReferralsApi", "getSingleReferral", "conId");
        }


        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("ReferralsApi", "getSingleReferral", "id");
        }


        // Path Params
        const localVarPath = '/referrals/read-single';

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
        if (id !== undefined) {
            requestContext.setQueryParam("id", ObjectSerializer.serialize(id, "string", ""));
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
     * Creates a new referral of type \'Self Referred\' in the member\'s PDS.
     * Supports self-referral.
     * @param connectionToken Member\&#39;s Connection Key
     * @param uid The unique ID of a mydex member
     * @param conId The connection_id is a shared id between a connection and a member. It is a hyphenated combination of the member UID and the Dedicated Connection NID.
     * @param selfReferralRequestBody 
     */
    public async postSelfReferral(connectionToken: string, uid: string, conId: string, selfReferralRequestBody?: SelfReferralRequestBody, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'connectionToken' is not null or undefined
        if (connectionToken === null || connectionToken === undefined) {
            throw new RequiredError("ReferralsApi", "postSelfReferral", "connectionToken");
        }


        // verify required parameter 'uid' is not null or undefined
        if (uid === null || uid === undefined) {
            throw new RequiredError("ReferralsApi", "postSelfReferral", "uid");
        }


        // verify required parameter 'conId' is not null or undefined
        if (conId === null || conId === undefined) {
            throw new RequiredError("ReferralsApi", "postSelfReferral", "conId");
        }



        // Path Params
        const localVarPath = '/referrals/self-refer';

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
            ObjectSerializer.serialize(selfReferralRequestBody, "SelfReferralRequestBody", ""),
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
     * Updates the status of a member\'s referral specified by id. For example, having been referred to a service, the status is set by default to \'Referred\' and this route enables it to be updated to \'Accepted\' or \'Rejected\'
     * Supports updating the status of a referral.
     * @param connectionToken Member\&#39;s Connection Key
     * @param uid The unique ID of a mydex member
     * @param conId The connection_id is a shared id between a connection and a member. It is a hyphenated combination of the member UID and the Dedicated Connection NID.
     * @param referralStatusUpdateRequestBody 
     */
    public async updateReferralStatus(connectionToken: string, uid: string, conId: string, referralStatusUpdateRequestBody?: ReferralStatusUpdateRequestBody, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'connectionToken' is not null or undefined
        if (connectionToken === null || connectionToken === undefined) {
            throw new RequiredError("ReferralsApi", "updateReferralStatus", "connectionToken");
        }


        // verify required parameter 'uid' is not null or undefined
        if (uid === null || uid === undefined) {
            throw new RequiredError("ReferralsApi", "updateReferralStatus", "uid");
        }


        // verify required parameter 'conId' is not null or undefined
        if (conId === null || conId === undefined) {
            throw new RequiredError("ReferralsApi", "updateReferralStatus", "conId");
        }



        // Path Params
        const localVarPath = '/referrals/update-status';

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
            ObjectSerializer.serialize(referralStatusUpdateRequestBody, "ReferralStatusUpdateRequestBody", ""),
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

export class ReferralsApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to addReferral
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async addReferralWithHttpInfo(response: ResponseContext): Promise<HttpInfo<AddReferralResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: AddReferralResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AddReferralResponse", ""
            ) as AddReferralResponse;
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
            const body: AddReferralResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AddReferralResponse", ""
            ) as AddReferralResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getAllReferrals
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getAllReferralsWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ReferralListResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ReferralListResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ReferralListResponse", ""
            ) as ReferralListResponse;
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
            const body: ReferralListResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ReferralListResponse", ""
            ) as ReferralListResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getSingleReferral
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getSingleReferralWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ReferralSingleResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ReferralSingleResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ReferralSingleResponse", ""
            ) as ReferralSingleResponse;
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
            const body: ReferralSingleResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ReferralSingleResponse", ""
            ) as ReferralSingleResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to postSelfReferral
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async postSelfReferralWithHttpInfo(response: ResponseContext): Promise<HttpInfo<CreateResponse >> {
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
     * @params response Response returned by the server for a request to updateReferralStatus
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async updateReferralStatusWithHttpInfo(response: ResponseContext): Promise<HttpInfo<UpdateResponse >> {
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
