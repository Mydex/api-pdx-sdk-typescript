# .TimelineApi

All URIs are relative to *https://api.mydex.org*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getTimeline**](TimelineApi.md#getTimeline) | **GET** /timeline | Retrieve list of timeline items.
[**getTimelineItem**](TimelineApi.md#getTimelineItem) | **GET** /timeline/single-item | Retrieve a single timeline item.


# **getTimeline**
> TimelineResponse getTimeline()

Returns a list of timeline items which includes: referrals, calendar events and secure messages.

### Example


```typescript
import { createConfiguration, TimelineApi } from '';
import type { TimelineApiGetTimelineRequest } from '';

const configuration = createConfiguration();
const apiInstance = new TimelineApi(configuration);

const request: TimelineApiGetTimelineRequest = {
    // Member\'s Connection Key
  connectionToken: "abc123xyz456",
    // The unique ID of a mydex member
  uid: "1234",
    // The connection_id is a shared id between a connection and a member. It is a hyphenated combination of the member UID and the Dedicated Connection NID.
  conId: "1234-67890",
};

const data = await apiInstance.getTimeline(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **connectionToken** | [**string**] | Member\&#39;s Connection Key | defaults to undefined
 **uid** | [**string**] | The unique ID of a mydex member | defaults to undefined
 **conId** | [**string**] | The connection_id is a shared id between a connection and a member. It is a hyphenated combination of the member UID and the Dedicated Connection NID. | defaults to undefined


### Return type

**TimelineResponse**

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

# **getTimelineItem**
> TimelineSingleItemResponse getTimelineItem()

Returns a single timeline item based on feature block and feature block id requested e.g. a \'referral\' with id 123.

### Example


```typescript
import { createConfiguration, TimelineApi } from '';
import type { TimelineApiGetTimelineItemRequest } from '';

const configuration = createConfiguration();
const apiInstance = new TimelineApi(configuration);

const request: TimelineApiGetTimelineItemRequest = {
    // Member\'s Connection Key
  connectionToken: "abc123xyz456",
    // The unique ID of a mydex member
  uid: "1234",
    // The connection_id is a shared id between a connection and a member. It is a hyphenated combination of the member UID and the Dedicated Connection NID.
  conId: "1234-67890",
    // The feature block the teimline item belongs to
  featureBlock: "referrals",
    // The specific ID of the record within the specified feature block e.g. if \'referrals\' is the feature block, then this should be a specific referral id
  featureBlockId: 123,
};

const data = await apiInstance.getTimelineItem(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **connectionToken** | [**string**] | Member\&#39;s Connection Key | defaults to undefined
 **uid** | [**string**] | The unique ID of a mydex member | defaults to undefined
 **conId** | [**string**] | The connection_id is a shared id between a connection and a member. It is a hyphenated combination of the member UID and the Dedicated Connection NID. | defaults to undefined
 **featureBlock** | [**&#39;referrals&#39; | &#39;secure_messages&#39; | &#39;calendar&#39;**]**Array<&#39;referrals&#39; &#124; &#39;secure_messages&#39; &#124; &#39;calendar&#39; &#124; &#39;11184809&#39;>** | The feature block the teimline item belongs to | defaults to undefined
 **featureBlockId** | [**number**] | The specific ID of the record within the specified feature block e.g. if \&#39;referrals\&#39; is the feature block, then this should be a specific referral id | defaults to undefined


### Return type

**TimelineSingleItemResponse**

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


