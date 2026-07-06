// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi';
import {Configuration} from '../configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile, HttpInfo} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {canConsumeForm, isCodeInRange} from '../util';
import {SecurityAuthentication} from '../auth/auth';


import { AuthErrorResponse } from '../models/AuthErrorResponse';
import { TimelineResponse } from '../models/TimelineResponse';
import { TimelineSingleItemResponse } from '../models/TimelineSingleItemResponse';

/**
 * no description
 */
export class TimelineApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Returns a list of timeline items which includes: referrals, calendar events and secure messages.
     * Retrieve list of timeline items.
     * @param connectionToken Member\&#39;s Connection Key
     * @param uid The unique ID of a mydex member
     * @param conId The connection_id is a shared id between a connection and a member. It is a hyphenated combination of the member UID and the Dedicated Connection NID.
     */
    public async getTimeline(connectionToken: string, uid: string, conId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'connectionToken' is not null or undefined
        if (connectionToken === null || connectionToken === undefined) {
            throw new RequiredError("TimelineApi", "getTimeline", "connectionToken");
        }


        // verify required parameter 'uid' is not null or undefined
        if (uid === null || uid === undefined) {
            throw new RequiredError("TimelineApi", "getTimeline", "uid");
        }


        // verify required parameter 'conId' is not null or undefined
        if (conId === null || conId === undefined) {
            throw new RequiredError("TimelineApi", "getTimeline", "conId");
        }


        // Path Params
        const localVarPath = '/timeline';

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
     * Returns a single timeline item based on feature block and feature block id requested e.g. a \'referral\' with id 123.
     * Retrieve a single timeline item.
     * @param connectionToken Member\&#39;s Connection Key
     * @param uid The unique ID of a mydex member
     * @param conId The connection_id is a shared id between a connection and a member. It is a hyphenated combination of the member UID and the Dedicated Connection NID.
     * @param featureBlock The feature block the teimline item belongs to
     * @param featureBlockId The specific ID of the record within the specified feature block e.g. if \&#39;referrals\&#39; is the feature block, then this should be a specific referral id
     */
    public async getTimelineItem(connectionToken: string, uid: string, conId: string, featureBlock: 'referrals' | 'secure_messages' | 'calendar', featureBlockId: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'connectionToken' is not null or undefined
        if (connectionToken === null || connectionToken === undefined) {
            throw new RequiredError("TimelineApi", "getTimelineItem", "connectionToken");
        }


        // verify required parameter 'uid' is not null or undefined
        if (uid === null || uid === undefined) {
            throw new RequiredError("TimelineApi", "getTimelineItem", "uid");
        }


        // verify required parameter 'conId' is not null or undefined
        if (conId === null || conId === undefined) {
            throw new RequiredError("TimelineApi", "getTimelineItem", "conId");
        }


        // verify required parameter 'featureBlock' is not null or undefined
        if (featureBlock === null || featureBlock === undefined) {
            throw new RequiredError("TimelineApi", "getTimelineItem", "featureBlock");
        }


        // verify required parameter 'featureBlockId' is not null or undefined
        if (featureBlockId === null || featureBlockId === undefined) {
            throw new RequiredError("TimelineApi", "getTimelineItem", "featureBlockId");
        }


        // Path Params
        const localVarPath = '/timeline/single-item';

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
        if (featureBlock !== undefined) {
            requestContext.setQueryParam("feature_block", ObjectSerializer.serialize(featureBlock, "'referrals' | 'secure_messages' | 'calendar'", ""));
        }

        // Query Params
        if (featureBlockId !== undefined) {
            requestContext.setQueryParam("feature_block_id", ObjectSerializer.serialize(featureBlockId, "number", ""));
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

}

export class TimelineApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getTimeline
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getTimelineWithHttpInfo(response: ResponseContext): Promise<HttpInfo<TimelineResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: TimelineResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "TimelineResponse", ""
            ) as TimelineResponse;
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
            const body: TimelineResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "TimelineResponse", ""
            ) as TimelineResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getTimelineItem
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getTimelineItemWithHttpInfo(response: ResponseContext): Promise<HttpInfo<TimelineSingleItemResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: TimelineSingleItemResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "TimelineSingleItemResponse", ""
            ) as TimelineSingleItemResponse;
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
            const body: TimelineSingleItemResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "TimelineSingleItemResponse", ""
            ) as TimelineSingleItemResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
