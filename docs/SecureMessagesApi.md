# .SecureMessagesApi

All URIs are relative to *https://api.mydex.org*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getSecureMessageConversation**](SecureMessagesApi.md#getSecureMessageConversation) | **GET** /secure-messages/conversation | Retrieve all secure messages for a given conversation.
[**postSecureMessageReceive**](SecureMessagesApi.md#postSecureMessageReceive) | **POST** /secure-messages/receive | Supports sending a message to the member\&#39;s PDS.
[**postSecureMessageSend**](SecureMessagesApi.md#postSecureMessageSend) | **POST** /secure-messages/send | Supports sending a message from the member\&#39;s PDS.


# **getSecureMessageConversation**
> SecureMessageConversationResponse getSecureMessageConversation()

Returns a list of secure messages that form part of a conversation.

### Example


```typescript
import { createConfiguration, SecureMessagesApi } from '';
import type { SecureMessagesApiGetSecureMessageConversationRequest } from '';

const configuration = createConfiguration();
const apiInstance = new SecureMessagesApi(configuration);

const request: SecureMessagesApiGetSecureMessageConversationRequest = {
    // Member\'s Connection Key
  connectionToken: "abc123xyz456",
    // The unique ID of a mydex member
  uid: "1234",
    // The connection_id is a shared id between a connection and a member. It is a hyphenated combination of the member UID and the Dedicated Connection NID.
  conId: "1234-67890",
    // The specific ID of the conversation that groups messages together
  conversationId: "referral-123",
};

const data = await apiInstance.getSecureMessageConversation(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **connectionToken** | [**string**] | Member\&#39;s Connection Key | defaults to undefined
 **uid** | [**string**] | The unique ID of a mydex member | defaults to undefined
 **conId** | [**string**] | The connection_id is a shared id between a connection and a member. It is a hyphenated combination of the member UID and the Dedicated Connection NID. | defaults to undefined
 **conversationId** | [**string**] | The specific ID of the conversation that groups messages together | defaults to undefined


### Return type

**SecureMessageConversationResponse**

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

# **postSecureMessageReceive**
> CreateResponse postSecureMessageReceive()

Creates a new received message in the member\'s PDS.

### Example


```typescript
import { createConfiguration, SecureMessagesApi } from '';
import type { SecureMessagesApiPostSecureMessageReceiveRequest } from '';

const configuration = createConfiguration();
const apiInstance = new SecureMessagesApi(configuration);

const request: SecureMessagesApiPostSecureMessageReceiveRequest = {
    // Member\'s Connection Key
  connectionToken: "abc123xyz456",
    // The unique ID of a mydex member
  uid: "1234",
    // The connection_id is a shared id between a connection and a member. It is a hyphenated combination of the member UID and the Dedicated Connection NID.
  conId: "1234-67890",
  
  secureMessageReceiveRequest: null,
};

const data = await apiInstance.postSecureMessageReceive(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **secureMessageReceiveRequest** | **SecureMessageReceiveRequest**|  |
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

# **postSecureMessageSend**
> CreateResponse postSecureMessageSend()

Creates a new sent message in the member\'s PDS.

### Example


```typescript
import { createConfiguration, SecureMessagesApi } from '';
import type { SecureMessagesApiPostSecureMessageSendRequest } from '';

const configuration = createConfiguration();
const apiInstance = new SecureMessagesApi(configuration);

const request: SecureMessagesApiPostSecureMessageSendRequest = {
    // Member\'s Connection Key
  connectionToken: "abc123xyz456",
    // The unique ID of a mydex member
  uid: "1234",
    // The connection_id is a shared id between a connection and a member. It is a hyphenated combination of the member UID and the Dedicated Connection NID.
  conId: "1234-67890",
  
  secureMessageSendRequest: null,
};

const data = await apiInstance.postSecureMessageSend(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **secureMessageSendRequest** | **SecureMessageSendRequest**|  |
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


