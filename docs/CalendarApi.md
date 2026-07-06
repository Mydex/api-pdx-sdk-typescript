# .CalendarApi

All URIs are relative to *https://api.mydex.org*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteCalendarEvent**](CalendarApi.md#deleteCalendarEvent) | **DELETE** /calendar/delete-event | Supports deleting a calendar-event.
[**getCalendarAppointments**](CalendarApi.md#getCalendarAppointments) | **GET** /calendar/get-appointments | Retrieve appointments for a given context
[**getCalendarEvents**](CalendarApi.md#getCalendarEvents) | **GET** /calendar/get-events | Retrieve calendar events
[**postCalendarAppointment**](CalendarApi.md#postCalendarAppointment) | **POST** /calendar/add-appointment | Supports adding a calendar-appointment.
[**postCalendarEvent**](CalendarApi.md#postCalendarEvent) | **POST** /calendar/add-event | Supports adding a calendar-event.
[**putCalendarEvent**](CalendarApi.md#putCalendarEvent) | **PUT** /calendar/update-event | Supports updating a calendar-event.


# **deleteCalendarEvent**
> DeleteResponse deleteCalendarEvent()

Deletes an event in the user\'s calendar.

### Example


```typescript
import { createConfiguration, CalendarApi } from '';
import type { CalendarApiDeleteCalendarEventRequest } from '';

const configuration = createConfiguration();
const apiInstance = new CalendarApi(configuration);

const request: CalendarApiDeleteCalendarEventRequest = {
    // Member\'s Connection Key
  connectionToken: "abc123xyz456",
    // The unique ID of a mydex member
  uid: "1234",
    // The connection_id is a shared id between a connection and a member. It is a hyphenated combination of the member UID and the Dedicated Connection NID.
  conId: "1234-67890",
  
  calendarEventDeleteRequestBody: {
    id: 123,
  },
};

const data = await apiInstance.deleteCalendarEvent(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **calendarEventDeleteRequestBody** | **CalendarEventDeleteRequestBody**|  |
 **connectionToken** | [**string**] | Member\&#39;s Connection Key | defaults to undefined
 **uid** | [**string**] | The unique ID of a mydex member | defaults to undefined
 **conId** | [**string**] | The connection_id is a shared id between a connection and a member. It is a hyphenated combination of the member UID and the Dedicated Connection NID. | defaults to undefined


### Return type

**DeleteResponse**

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

# **getCalendarAppointments**
> GetAppointmentsResponse getCalendarAppointments()

Returns a list of appointments filtered by context and context_id.

### Example


```typescript
import { createConfiguration, CalendarApi } from '';
import type { CalendarApiGetCalendarAppointmentsRequest } from '';

const configuration = createConfiguration();
const apiInstance = new CalendarApi(configuration);

const request: CalendarApiGetCalendarAppointmentsRequest = {
    // Member\'s Connection Key
  connectionToken: "abc123xyz456",
    // The unique ID of a mydex member
  uid: "1234",
    // The connection_id is a shared id between a connection and a member. It is a hyphenated combination of the member UID and the Dedicated Connection NID.
  conId: "1234-67890",
    // The context this belongs to
  context: "referral",
    // The specific ID of the context record
  contextId: 123,
};

const data = await apiInstance.getCalendarAppointments(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **connectionToken** | [**string**] | Member\&#39;s Connection Key | defaults to undefined
 **uid** | [**string**] | The unique ID of a mydex member | defaults to undefined
 **conId** | [**string**] | The connection_id is a shared id between a connection and a member. It is a hyphenated combination of the member UID and the Dedicated Connection NID. | defaults to undefined
 **context** | [**string**] | The context this belongs to | defaults to undefined
 **contextId** | [**number**] | The specific ID of the context record | defaults to undefined


### Return type

**GetAppointmentsResponse**

### Authorization

[oauth2](README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getCalendarEvents**
> GetEventsResponse getCalendarEvents()

Returns a list of calendar events.

### Example


```typescript
import { createConfiguration, CalendarApi } from '';
import type { CalendarApiGetCalendarEventsRequest } from '';

const configuration = createConfiguration();
const apiInstance = new CalendarApi(configuration);

const request: CalendarApiGetCalendarEventsRequest = {
    // Member\'s Connection Key
  connectionToken: "abc123xyz456",
    // The unique ID of a mydex member
  uid: "1234",
    // The connection_id is a shared id between a connection and a member. It is a hyphenated combination of the member UID and the Dedicated Connection NID.
  conId: "1234-67890",
};

const data = await apiInstance.getCalendarEvents(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **connectionToken** | [**string**] | Member\&#39;s Connection Key | defaults to undefined
 **uid** | [**string**] | The unique ID of a mydex member | defaults to undefined
 **conId** | [**string**] | The connection_id is a shared id between a connection and a member. It is a hyphenated combination of the member UID and the Dedicated Connection NID. | defaults to undefined


### Return type

**GetEventsResponse**

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

# **postCalendarAppointment**
> CreateResponse postCalendarAppointment()

Creates a new appointment in the user\'s calendar. An appointment must be made within a specified context e.g. a \'Referral\'

### Example


```typescript
import { createConfiguration, CalendarApi } from '';
import type { CalendarApiPostCalendarAppointmentRequest } from '';

const configuration = createConfiguration();
const apiInstance = new CalendarApi(configuration);

const request: CalendarApiPostCalendarAppointmentRequest = {
    // Member\'s Connection Key
  connectionToken: "abc123xyz456",
    // The unique ID of a mydex member
  uid: "1234",
    // The connection_id is a shared id between a connection and a member. It is a hyphenated combination of the member UID and the Dedicated Connection NID.
  conId: "1234-67890",
  
  calendarAppointmentCreateRequestBody: null,
};

const data = await apiInstance.postCalendarAppointment(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **calendarAppointmentCreateRequestBody** | **CalendarAppointmentCreateRequestBody**|  |
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

# **postCalendarEvent**
> CreateResponse postCalendarEvent()

Creates a new event in the user\'s calendar.

### Example


```typescript
import { createConfiguration, CalendarApi } from '';
import type { CalendarApiPostCalendarEventRequest } from '';

const configuration = createConfiguration();
const apiInstance = new CalendarApi(configuration);

const request: CalendarApiPostCalendarEventRequest = {
    // Member\'s Connection Key
  connectionToken: "abc123xyz456",
    // The unique ID of a mydex member
  uid: "1234",
    // The connection_id is a shared id between a connection and a member. It is a hyphenated combination of the member UID and the Dedicated Connection NID.
  conId: "1234-67890",
  
  calendarEventCreateRequestBody: null,
};

const data = await apiInstance.postCalendarEvent(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **calendarEventCreateRequestBody** | **CalendarEventCreateRequestBody**|  |
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

# **putCalendarEvent**
> UpdateResponse putCalendarEvent()

Updates an event in the user\'s calendar. For example, updating the \'status\' from \'INVITED\' to \'CONFIRMED\' when a user accepts the invitation to an appointment.

### Example


```typescript
import { createConfiguration, CalendarApi } from '';
import type { CalendarApiPutCalendarEventRequest } from '';

const configuration = createConfiguration();
const apiInstance = new CalendarApi(configuration);

const request: CalendarApiPutCalendarEventRequest = {
    // Member\'s Connection Key
  connectionToken: "abc123xyz456",
    // The unique ID of a mydex member
  uid: "1234",
    // The connection_id is a shared id between a connection and a member. It is a hyphenated combination of the member UID and the Dedicated Connection NID.
  conId: "1234-67890",
  
  calendarEventUpdateRequestBody: null,
};

const data = await apiInstance.putCalendarEvent(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **calendarEventUpdateRequestBody** | **CalendarEventUpdateRequestBody**|  |
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


