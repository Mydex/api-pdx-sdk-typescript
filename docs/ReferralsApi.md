# .ReferralsApi

All URIs are relative to *https://api.mydex.org*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getAllReferrals**](ReferralsApi.md#getAllReferrals) | **GET** /referrals/read-all | Retrieve rall referrals for a given member.
[**getSingleReferral**](ReferralsApi.md#getSingleReferral) | **GET** /referrals/read-single | Retrieve a single referral by id for a given member.
[**postSelfReferral**](ReferralsApi.md#postSelfReferral) | **POST** /referrals/self-refer | Supports self-referral.
[**updateReferralStatus**](ReferralsApi.md#updateReferralStatus) | **PUT** /referrals/update-status | Supports updating the status of a referral.


# **getAllReferrals**
> ReferralListResponse getAllReferrals()

Returns a list of referrals.

### Example


```typescript
import { createConfiguration, ReferralsApi } from '';
import type { ReferralsApiGetAllReferralsRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ReferralsApi(configuration);

const request: ReferralsApiGetAllReferralsRequest = {
    // Member\'s Connection Key
  connectionToken: "abc123xyz456",
    // The unique ID of a mydex member
  uid: "1234",
    // The connection_id is a shared id between a connection and a member. It is a hyphenated combination of the member UID and the Dedicated Connection NID.
  conId: "1234-67890",
};

const data = await apiInstance.getAllReferrals(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **connectionToken** | [**string**] | Member\&#39;s Connection Key | defaults to undefined
 **uid** | [**string**] | The unique ID of a mydex member | defaults to undefined
 **conId** | [**string**] | The connection_id is a shared id between a connection and a member. It is a hyphenated combination of the member UID and the Dedicated Connection NID. | defaults to undefined


### Return type

**ReferralListResponse**

### Authorization

[oauth2](README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |
**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getSingleReferral**
> ReferralSingleResponse getSingleReferral()

Returns the requested referral.

### Example


```typescript
import { createConfiguration, ReferralsApi } from '';
import type { ReferralsApiGetSingleReferralRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ReferralsApi(configuration);

const request: ReferralsApiGetSingleReferralRequest = {
    // Member\'s Connection Key
  connectionToken: "abc123xyz456",
    // The unique ID of a mydex member
  uid: "1234",
    // The connection_id is a shared id between a connection and a member. It is a hyphenated combination of the member UID and the Dedicated Connection NID.
  conId: "1234-67890",
    // The record id requested.
  id: "1234",
};

const data = await apiInstance.getSingleReferral(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **connectionToken** | [**string**] | Member\&#39;s Connection Key | defaults to undefined
 **uid** | [**string**] | The unique ID of a mydex member | defaults to undefined
 **conId** | [**string**] | The connection_id is a shared id between a connection and a member. It is a hyphenated combination of the member UID and the Dedicated Connection NID. | defaults to undefined
 **id** | [**string**] | The record id requested. | defaults to undefined


### Return type

**ReferralSingleResponse**

### Authorization

[oauth2](README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |
**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **postSelfReferral**
> CreateResponse postSelfReferral()

Creates a new referral of type \'Self Referred\' in the member\'s PDS.

### Example


```typescript
import { createConfiguration, ReferralsApi } from '';
import type { ReferralsApiPostSelfReferralRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ReferralsApi(configuration);

const request: ReferralsApiPostSelfReferralRequest = {
    // Member\'s Connection Key
  connectionToken: "abc123xyz456",
    // The unique ID of a mydex member
  uid: "1234",
    // The connection_id is a shared id between a connection and a member. It is a hyphenated combination of the member UID and the Dedicated Connection NID.
  conId: "1234-67890",
  
  selfReferralRequestBody: null,
};

const data = await apiInstance.postSelfReferral(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **selfReferralRequestBody** | **SelfReferralRequestBody**|  |
 **connectionToken** | [**string**] | Member\&#39;s Connection Key | defaults to undefined
 **uid** | [**string**] | The unique ID of a mydex member | defaults to undefined
 **conId** | [**string**] | The connection_id is a shared id between a connection and a member. It is a hyphenated combination of the member UID and the Dedicated Connection NID. | defaults to undefined


### Return type

**CreateResponse**

### Authorization

[oauth2](README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully created record. |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **updateReferralStatus**
> UpdateResponse updateReferralStatus()

Updates the status of a member\'s referral specified by id. For example, having been referred to a service, the status is set by default to \'Referred\' and this route enables it to be updated to \'Accepted\' or \'Rejected\'

### Example


```typescript
import { createConfiguration, ReferralsApi } from '';
import type { ReferralsApiUpdateReferralStatusRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ReferralsApi(configuration);

const request: ReferralsApiUpdateReferralStatusRequest = {
    // Member\'s Connection Key
  connectionToken: "abc123xyz456",
    // The unique ID of a mydex member
  uid: "1234",
    // The connection_id is a shared id between a connection and a member. It is a hyphenated combination of the member UID and the Dedicated Connection NID.
  conId: "1234-67890",
  
  referralStatusUpdateRequestBody: {
    id: 123,
    status: "Rejected",
  },
};

const data = await apiInstance.updateReferralStatus(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **referralStatusUpdateRequestBody** | **ReferralStatusUpdateRequestBody**|  |
 **connectionToken** | [**string**] | Member\&#39;s Connection Key | defaults to undefined
 **uid** | [**string**] | The unique ID of a mydex member | defaults to undefined
 **conId** | [**string**] | The connection_id is a shared id between a connection and a member. It is a hyphenated combination of the member UID and the Dedicated Connection NID. | defaults to undefined


### Return type

**UpdateResponse**

### Authorization

[oauth2](README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully created record. |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


