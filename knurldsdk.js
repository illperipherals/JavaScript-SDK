"use strict";var KnurldSDK=KnurldSDK||{};KnurldSDK.init=function(n){var l={};return l.initialized=!0,KnurldSDKUtil.isValidObj(n)&&"host"in n&&KnurldSDK.setHostUrl(n.host),l},KnurldSDK.setHostUrl=function(n){KnurldConstants.HOST=n,KnurldSDKUtil.setupURL()},KnurldSDK.getHostUrl=function(){return KnurldConstants.HOST},KnurldSDK.setConsumer=function(n){KnurldConstants.IS_CONSUMER=n},KnurldSDK.isConsumer=function(){return KnurldConstants.IS_CONSUMER},KnurldSDK.uploadFile=function(n,l,t,e){var r={},s=KnurldSDKUtil.getAPIParams(r,t,e);return KnurldSDKUtil.isValidObj(n)?(s.contentType=KnurldConstants.CONTENT_TYPE_MULTIPART_FORM_DATA,s.requestType=KnurldConstants.POST,KnurldHttpRequest.uploadFile(n,l,s)):KnurldResponse.invalidInputResponse("invalid inputs",s)},KnurldSDK.clearInterval=function(n){KnurldSDKUtil.isValidObj(n)&&clearInterval(n)},KnurldSDK.setDevID=function(n){KnurldConstants.DEV_ID=n},KnurldSDK.getDevID=function(){return KnurldConstants.DEV_ID},KnurldSDK.setConsumerDevID=function(n){KnurldConstants.CONSUMER_DEV_ID=n},KnurldSDK.getConsumerDevID=function(){return KnurldConstants.CONSUMER_DEV_ID},KnurldSDK.setAccessToken=function(n){KnurldConstants.ACCESS_TOKEN=n},KnurldSDK.getAccessToken=function(){return KnurldConstants.ACCESS_TOKEN},KnurldSDK.auth=function(){return{accesstoken:function(n,l,t,e){var r=n.isTimer;if(KnurldSDKUtil.isValidObj(r)&&r){var s=KnurldConstants.LOGIN_TIMER;KnurldSDKUtil.isValidObj(s)&&(s=KnurldConstants.GLOBAL_TIMER),setInterval(function(){KnurldAuthImpl.accesstoken(n,KnurldSDKUtil.commonCallBack,KnurldSDKUtil.commonCallBack,e)},s)}return KnurldAuthImpl.accesstoken(n,l,t,e)},status:function(n,l,t){return KnurldAuthImpl.status(n,l,t)}}}(""),KnurldSDK.appModel=function(){return{create:function(n,l,t,e){return KnurldAppModelImpl.post(n,l,t,e)},update:function(n,l,t,e){return KnurldAppModelImpl.post(n,l,t,e)},get:function(n,l,t,e){var r,s=n.isTimer;if(KnurldSDKUtil.isValidObj(s)&&s){var u=n.interval;KnurldSDKUtil.isValidObj(u)&&(u=KnurldConstants.GLOBAL_TIMER),r=setInterval(function(){KnurldAppModelImpl.get(n,l,t)},u)}else r=KnurldAppModelImpl.get(n,l,t,e);return r},getAll:function(n,l,t,e){var r,s=n.isTimer;if(KnurldSDKUtil.isValidObj(s)&&s){var u=n.interval;KnurldSDKUtil.isValidObj(u)&&(u=KnurldConstants.GLOBAL_TIMER),r=setInterval(function(){KnurldAppModelImpl.getAll(n,l,t)},u)}else r=KnurldAppModelImpl.getAll(n,l,t,e);return r},getAllInOneCall:function(n,l,t,e){var r,s=n.isTimer;if(KnurldSDKUtil.isValidObj(s)&&s){var u=n.interval;KnurldSDKUtil.isValidObj(u)&&(u=KnurldConstants.GLOBAL_TIMER_FOR_GET_ALL_CALL),r=setInterval(function(){KnurldAppModelImpl.getAll(n,l,t)},u)}else r=KnurldAppModelImpl.getAllInOneCall(n,l,t,e);return r},del:function(n,l,t,e){return KnurldAppModelImpl.del(n,l,t,e)}}}(""),KnurldSDK.consumer=function(){return{create:function(n,l,t,e){return KnurldConsumerImpl.post(n,l,t,e)},update:function(n,l,t,e){return KnurldConsumerImpl.post(n,l,t,e)},get:function(n,l,t,e){var r,s=n.isTimer;if(KnurldSDKUtil.isValidObj(s)&&s){var u=n.interval;KnurldSDKUtil.isValidObj(u)&&(u=KnurldConstants.GLOBAL_TIMER),r=setInterval(function(){KnurldConsumerImpl.get(n,l,t)},u)}else r=KnurldConsumerImpl.get(n,l,t,e);return r},getAll:function(n,l,t,e){var r,s=n.isTimer;if(KnurldSDKUtil.isValidObj(s)&&s){var u=n.interval;KnurldSDKUtil.isValidObj(u)&&(u=KnurldConstants.GLOBAL_TIMER),r=setInterval(function(){KnurldConsumerImpl.getAll(n,l,t)},u)}else r=KnurldConsumerImpl.getAll(n,l,t,e);return r},getAllInOneCall:function(n,l,t,e){var r,s=n.isTimer;if(KnurldSDKUtil.isValidObj(s)&&s){var u=n.interval;KnurldSDKUtil.isValidObj(u)&&(u=KnurldConstants.GLOBAL_TIMER_FOR_GET_ALL_CALL),r=setInterval(function(){KnurldAppModelImpl.getAll(n,l,t)},u)}else r=KnurldConsumerImpl.getAllInOneCall(n,l,t,e);return r},del:function(n,l,t,e){return KnurldConsumerImpl.del(n,l,t,e)},token:function(n,l,t,e){return KnurldConsumerImpl.token(n,l,t,e)}}}(""),KnurldSDK.enrollment=function(){return{create:function(n,l,t,e){return KnurldEnrollmentImpl.post(n,l,t,e)},update:function(n,l,t,e){return KnurldEnrollmentImpl.post(n,l,t,e)},postWithFile:function(n,l,t,e){return KnurldEnrollmentImpl.postWithFile(n,l,t,e)},createAndUpdate:function(n,l,t,e){return KnurldEnrollmentImpl.createAndPost(n,l,t,e)},get:function(n,l,t,e){var r,s=n.isTimer;if(KnurldSDKUtil.isValidObj(s)&&s){var u=n.interval;KnurldSDKUtil.isValidObj(u)&&(u=KnurldConstants.GLOBAL_TIMER),r=setInterval(function(){KnurldEnrollmentImpl.get(n,l,t)},u)}else r=KnurldEnrollmentImpl.get(n,l,t,e);return r},getAll:function(n,l,t,e){var r,s=n.isTimer;if(KnurldSDKUtil.isValidObj(s)&&s){var u=n.interval;KnurldSDKUtil.isValidObj(u)&&(u=KnurldConstants.GLOBAL_TIMER),r=setInterval(function(){KnurldEnrollmentImpl.getAll(n,l,t)},u)}else r=KnurldEnrollmentImpl.getAll(n,l,t,e);return r},del:function(n,l,t,e){return KnurldEnrollmentImpl.del(n,l,t,e)}}}(""),KnurldSDK.verification=function(){return{create:function(n,l,t,e){return KnurldVerificationImpl.post(n,l,t,e)},update:function(n,l,t,e){return KnurldVerificationImpl.post(n,l,t,e)},get:function(n,l,t,e){var r,s=n.isTimer;if(KnurldSDKUtil.isValidObj(s)&&s){var u=n.interval;KnurldSDKUtil.isValidObj(u)&&(u=KnurldConstants.GLOBAL_TIMER),r=setInterval(function(){KnurldVerificationImpl.get(n,l,t)},u)}else r=KnurldVerificationImpl.get(n,l,t,e);return r},getAll:function(n,l,t,e){var r,s=n.isTimer;if(KnurldSDKUtil.isValidObj(s)&&s){var u=n.interval;KnurldSDKUtil.isValidObj(u)&&(u=KnurldConstants.GLOBAL_TIMER),r=setInterval(function(){KnurldVerificationImpl.getAll(n,l,t)},u)}else r=KnurldVerificationImpl.getAll(n,l,t,e);return r},del:function(n,l,t,e){return KnurldVerificationImpl.del(n,l,t,e)}}}(""),KnurldSDK.call=function(){return{create:function(n,l,t,e){return KnurldCallImpl.post(n,l,t,e)},update:function(n,l,t,e){return KnurldCallImpl.post(n,l,t,e)},get:function(n,l,t,e){return KnurldCallImpl.get(n,l,t,e)},del:function(n,l,t,e){return KnurldCallImpl.del(n,l,t,e)}}}(""),KnurldSDK.analytics=function(){return{file:function(n,l,t,e){return KnurldAnalysisImpl.file(n,l,t,e)},get:function(n,l,t,e){var r,s=n.isTimer;if(KnurldSDKUtil.isValidObj(s)&&s){var u=n.interval;KnurldSDKUtil.isValidObj(u)&&(u=KnurldConstants.GLOBAL_TIMER),r=setInterval(function(){KnurldAnalysisImpl.get(n,l,t)},u)}else r=KnurldAnalysisImpl.get(n,l,t,e);return r},url:function(n,l,t,e){return KnurldAnalysisImpl.url(n,l,t,e)}}}("");var KnurldConstants=KnurldConstants||{};KnurldConstants.HOST,KnurldConstants.POST="POST",KnurldConstants.GET="GET",KnurldConstants.PUT="PUT",KnurldConstants.DELETE="DELETE",KnurldConstants.CONSUMER="consumer",KnurldConstants.APPLICATION="app-models",KnurldConstants.URL_SEPR="/",KnurldConstants.V1="v1/",KnurldConstants.APP_URL,KnurldConstants.GLOBAL_TIMER=2e3,KnurldConstants.CONSUMER_URL,KnurldConstants.ACCESS_TOKEN="",KnurldConstants.DEV_ID,KnurldConstants.CONSUMER_DEV_ID,KnurldConstants.ISV1=!0,KnurldConstants.CONTENT_TYPE_APPLICATION_JSON="application/json",KnurldConstants.CONTENT_TYPE_FORM_ENCODED_URL="application/x-www-form-urlencoded",KnurldConstants.CONTENT_TYPE_MULTIPART_FORM_DATA="multipart/form-data",KnurldConstants.FETCH_ALL_OFFSET=50,KnurldConstants.LOGIN_TIMER=162e6,KnurldConstants.GLOBAL_TIMER_FOR_GET_ALL_CALL=18e6,KnurldConstants.IS_CONSUMER=!1,KnurldConstants.ENDPOINT_LOGIN="oauth/client_credential/accesstoken?grant_type=client_credentials",KnurldConstants.ENDPOINT_STATUS="status",KnurldConstants.INVALID_INPUT="invalid inputs",KnurldConstants.CLIENT_ID="client_id",KnurldConstants.CLIENT_SECRET="client_secret",KnurldConstants.ID="id";var KnurldAnalysisImpl=KnurldAnalysisImpl||{};KnurldAnalysisImpl.get=function(n,l,t,e){var r=KnurldSDKUtil.getAPIParams(e,l,t);if(!KnurldSDKUtil.isValidObj(n))return KnurldResponse.invalidInputResponse(KnurldConstants.INVALID_INPUT,r);if(!KnurldSDKUtil.isValidObj(n.id))return KnurldResponse.invalidInputResponse("id",r);var s=KnurldSDKUtil.buildUrl("endpointAnalysis/"+n.id,KnurldConstants.ISV1);return KnurldHttpRequest.sendRequest(s,null,r)},KnurldAnalysisImpl.file=function(n,l,t,e){var r=KnurldSDKUtil.getAPIParams(e,l,t);if(!KnurldSDKUtil.isValidObj(n))return KnurldResponse.invalidInputResponse(KnurldConstants.INVALID_INPUT,r);var s={};KnurldSDKUtil.isValidObj(n.num_words)&&(s.num_words=n.num_words),s.fileData=n.fileData,r.requestType=KnurldConstants.POST;var u=KnurldSDKUtil.buildUrl("endpointAnalysis/file",KnurldConstants.ISV1);return r.contentType=KnurldConstants.CONTENT_TYPE_MULTIPART_FORM_DATA,KnurldHttpRequest.sendRequest(u,s,r)},KnurldAnalysisImpl.url=function(n,l,t,e){var r=KnurldSDKUtil.getAPIParams(e,l,t);if(!KnurldSDKUtil.isValidObj(n))return KnurldResponse.invalidInputResponse(KnurldConstants.INVALID_INPUT,r);if(!KnurldSDKUtil.isEmpty(n.audioUrl))return KnurldResponse.invalidInputResponse("audioUrl",r);var s={};KnurldSDKUtil.isValidObj(n.num_words)&&(s.num_words=n.num_words),s.audioUrl=n.audioUrl,r.requestType=KnurldConstants.POST;var u=KnurldSDKUtil.buildUrl("endpointAnalysis/url",KnurldConstants.ISV1);return KnurldHttpRequest.sendRequest(u,s,r)};var KnurldAppModelImpl=KnurldAppModelImpl||{};KnurldAppModelImpl.post=function(n,l,t,e){var r=KnurldSDKUtil.getAPIParams(e,l,t);if(!KnurldSDKUtil.isValidObj(n))return KnurldResponse.invalidInputResponse(KnurldConstants.INVALID_INPUT,r);if(!KnurldSDKUtil.isValidObj(n.enrollmentRepeats))return KnurldResponse.invalidInputResponse("enrollmentRepeats",r);if(!KnurldSDKUtil.isValidObj(n.verificationLength))return KnurldResponse.invalidInputResponse("verificationLength",r);var s;r.requestType=KnurldConstants.POST;var u={};if(u.enrollmentRepeats=n.enrollmentRepeats,u.verificationLength=n.verificationLength,u.vocabulary=n.vocabulary,KnurldSDKUtil.isValidObj(n.appModelId)){if(!KnurldSDKUtil.isValidObj(n.threshold))return KnurldResponse.invalidInputResponse("threshold",r);u.threshold=n.threshold,s=KnurldSDKUtil.buildUrl("app-models/"+n.appModelId,KnurldConstants.ISV1)}else{if(s=KnurldSDKUtil.buildUrl("app-models",KnurldConstants.ISV1),!KnurldSDKUtil.isValidObj(n.vocabulary))return KnurldResponse.invalidInputResponse("vocabulary",r);u.enrollmentRepeats=n.enrollmentRepeats,KnurldSDKUtil.isValidObj(n.threshold)&&(u.threshold=n.threshold),KnurldSDKUtil.isValidObj(n.autoThresholdEnable)&&(u.autoThresholdEnable=n.autoThresholdEnable),KnurldSDKUtil.isValidObj(n.autoThresholdClearance)&&(u.autoThresholdClearance=n.autoThresholdClearance),KnurldSDKUtil.isValidObj(n.autoThresholdMaxRise)&&(u.autoThresholdMaxRise=n.autoThresholdMaxRise),KnurldSDKUtil.isValidObj(n.useModelUpdate)&&(u.useModelUpdate=n.useModelUpdate),KnurldSDKUtil.isValidObj(n.modelUpdateDailyLimit)&&(u.modelUpdateDailyLimit=n.modelUpdateDailyLimit)}return KnurldHttpRequest.sendRequest(s,u,r)},KnurldAppModelImpl.get=function(n,l,t,e){var r,s=KnurldSDKUtil.getAPIParams(e,l,t),u={};return KnurldSDKUtil.isValidObj(n.appModelId)?r=KnurldSDKUtil.buildUrl("app-models/"+n.appModelId,KnurldConstants.ISV1):(KnurldSDKUtil.isValidObj(n.limit)&&(u.limit=n.limit),KnurldSDKUtil.isValidObj(n.offset)&&(u.offset=n.offset),r=KnurldSDKUtil.buildUrl("app-models",KnurldConstants.ISV1)),KnurldHttpRequest.sendRequest(r,u,s)},KnurldAppModelImpl.getAllInOneCall=function(n,l,t,e){var r=KnurldSDKUtil.getAPIParams(e,l,t),s={};s.limit=1e3,s.offset=0;var u=KnurldSDKUtil.buildUrl("app-models",KnurldConstants.ISV1);return KnurldHttpRequest.sendRequest(u,s,r)},KnurldAppModelImpl.getAll=function(n,l,t,e){var e={},r=[],s=0;KnurldAppModelImpl.get(n,function(n){if(KnurldSDKUtil.isValidObj(n))if(n.length<=10)l(n);else{var t=n.items;for(var u in t)r[r.length]=t[u];for(i=10;i<n.total;i+=KnurldConstants.FETCH_ALL_OFFSET){var d={};d.limit=KnurldConstants.FETCH_ALL_OFFSET,d.offset=i,KnurldAppModelImpl.get(d,function(n){var t=n.items;for(var e in t)r[r.length]=t[e];r.length>=n.total-s*KnurldConstants.FETCH_ALL_OFFSET&&l(r)},function(n){console.log(n),s++},e)}}},function(n){t(n)},e)},KnurldAppModelImpl.del=function(n,l,t,e){if(!KnurldSDKUtil.isValidObj(n.appModelId))return KnurldResponse.invalidInputResponse("modelId",r);var r=KnurldSDKUtil.getAPIParams(e,l,t),s=KnurldSDKUtil.buildUrl("app-models/"+n.appModelId,KnurldConstants.ISV1);return r.requestType=KnurldConstants.DELETE,KnurldHttpRequest.sendRequest(s,null,r)};var KnurldAuthImpl=KnurldAuthImpl||{};KnurldAuthImpl.accesstoken=function(n,l,t,e){var r=KnurldSDKUtil.getAPIParams(e,l,t);if(r.localSuccessHandler=KnurldAuthImpl.catchAccessTokenSuccessCallBack,!KnurldSDKUtil.isValidObj(n))return KnurldResponse.invalidInputResponse(KnurldConstants.INVALID_INPUT,r);if(!KnurldSDKUtil.isEmpty(n.client_id))return KnurldResponse.invalidInputResponse(KnurldConstants.CLIENT_ID,r);if(!KnurldSDKUtil.isEmpty(n.client_secret))return KnurldResponse.invalidInputResponse(KnurldConstants.CLIENT_SECRET,r);KnurldSDKUtil.isValidObj(n.developer_id)&&(KnurldConstants.DEV_ID=devId);var s=KnurldSDKUtil.buildUrl(KnurldConstants.ENDPOINT_LOGIN,!KnurldConstants.ISV1);r.requestType=KnurldConstants.POST;var u={};return u.client_id=n.client_id,u.client_secret=n.client_secret,r.sendAccessToken=!1,r.sendDevID=!1,r.contentType=KnurldConstants.CONTENT_TYPE_FORM_ENCODED_URL,KnurldHttpRequest.sendRequest(s,u,r)},KnurldAuthImpl.catchAccessTokenSuccessCallBack=function(n,l){KnurldConstants.ACCESS_TOKEN=n.access_token,l(n)},KnurldAuthImpl.status=function(n,l,t){var e=KnurldSDKUtil.getAPIParams(t,n,l),r=KnurldSDKUtil.buildUrl(KnurldConstants.ENDPOINT_STATUS,KnurldConstants.ISV1);return KnurldHttpRequest.sendRequest(r,null,e)};var KnurldCallImpl=KnurldCallImpl||{};KnurldCallImpl.post=function(n,l,t,e){var r=KnurldSDKUtil.getAPIParams(e,l,t);if(!KnurldSDKUtil.isValidObj(n))return KnurldResponse.invalidInputResponse(KnurldConstants.INVALID_INPUT,r);var s;r.requestType=KnurldConstants.POST;var u={};if(u.number=n.number,KnurldSDKUtil.isValidObj(n.callId))s=KnurldSDKUtil.buildUrl("calls/"+n.callId,KnurldConstants.ISV1);else{if(!KnurldSDKUtil.isEmpty(n.number))return KnurldResponse.invalidInputResponse("number",r);s=KnurldSDKUtil.buildUrl("calls",KnurldConstants.ISV1)}return KnurldHttpRequest.sendRequest(s,u,r)},KnurldCallImpl.get=function(n,l,t,e){var r,s={},u=KnurldSDKUtil.getAPIParams(e,l,t);return KnurldSDKUtil.isValidObj(n.callId)?r=KnurldSDKUtil.buildUrl("calls/"+n.callId,KnurldConstants.ISV1):(r=KnurldSDKUtil.buildUrl("calls",KnurldConstants.ISV1),KnurldSDKUtil.isValidObj(n.limit)&&(s.limit=n.limit),KnurldSDKUtil.isValidObj(n.offset)&&(s.offset=n.offset)),KnurldHttpRequest.sendRequest(r,s,u)},KnurldCallImpl.del=function(n,l,t,e){if(!KnurldSDKUtil.isValidObj(n.callId))return KnurldResponse.invalidInputResponse("callId",r);var r=KnurldSDKUtil.getAPIParams(e,l,t),s=KnurldSDKUtil.buildUrl("calls/"+n.callId,KnurldConstants.ISV1);return r.requestType=KnurldConstants.DELETE,KnurldHttpRequest.sendRequest(s,null,r)};var KnurldConsumerImpl=KnurldConsumerImpl||{};KnurldConsumerImpl.post=function(n,l,t,e){var r=KnurldSDKUtil.getAPIParams(e,l,t);if(!KnurldSDKUtil.isValidObj(n))return KnurldResponse.invalidInputResponse(KnurldConstants.INVALID_INPUT,r);if(!KnurldSDKUtil.isValidObj(n.password))return KnurldResponse.invalidInputResponse("password",r);var s;r.requestType=KnurldConstants.POST;var u={};if(u.password=n.password,KnurldSDKUtil.isValidObj(n.consumerId))s=KnurldSDKUtil.buildUrl("consumers/"+n.consumerId,KnurldConstants.ISV1);else{if(s=KnurldSDKUtil.buildUrl("consumers",KnurldConstants.ISV1),!KnurldSDKUtil.isEmpty(n.Gender))return KnurldResponse.invalidInputResponse("Gender",r);if(!KnurldSDKUtil.isValidObj(n.username))return KnurldResponse.invalidInputResponse("username",r);u.gender=n.Gender,u.username=n.username}return KnurldHttpRequest.sendRequest(s,u,r)},KnurldConsumerImpl.get=function(n,l,t,e){var r,s={},u=KnurldSDKUtil.getAPIParams(e,l,t);return KnurldSDKUtil.isValidObj(n.consumerId)?r=KnurldSDKUtil.buildUrl("consumers/"+n.consumerId,KnurldConstants.ISV1):(r=KnurldSDKUtil.buildUrl("consumers",KnurldConstants.ISV1),KnurldSDKUtil.isValidObj(n.limit)&&(s.limit=n.limit),KnurldSDKUtil.isValidObj(n.offset)&&(s.offset=n.offset)),KnurldHttpRequest.sendRequest(r,s,u)},KnurldConsumerImpl.getAll=function(n,l,t,e){var e={},r=[],s=0;KnurldConsumerImpl.get(n,function(n){if(KnurldSDKUtil.isValidObj(n))if(n.length<=10)l(n);else{var t=n.items;for(var u in t)r[r.length]=t[u];for(i=10;i<n.total;i+=KnurldConstants.FETCH_ALL_OFFSET){var d={};d.limit=KnurldConstants.FETCH_ALL_OFFSET,d.offset=i,KnurldConsumerImpl.get(d,function(n){var t=n.items;for(var e in t)r[r.length]=t[e];r.length>=n.total-s*KnurldConstants.FETCH_ALL_OFFSET&&l(r)},function(n){console.log(n),s++},e)}}},function(n){t(n)},e)},KnurldConsumerImpl.getAllInOneCall=function(n,l,t,e){var r=KnurldSDKUtil.getAPIParams(e,l,t),s={};s.limit=1e3,s.offset=0;var u=KnurldSDKUtil.buildUrl("consumers",KnurldConstants.ISV1);return KnurldHttpRequest.sendRequest(u,s,r)},KnurldConsumerImpl.del=function(n,l,t,e){var r=KnurldSDKUtil.getAPIParams(e,l,t);if(!KnurldSDKUtil.isValidObj(n.consumerId))return KnurldResponse.invalidInputResponse("consumerId",r);var s=KnurldSDKUtil.buildUrl("consumers/"+n.consumerId,KnurldConstants.ISV1);return r.requestType=KnurldConstants.DELETE,KnurldHttpRequest.sendRequest(s,null,r)},KnurldConsumerImpl.token=function(n,l,t,e){var r=KnurldSDKUtil.getAPIParams(e,l,t);if(r.forceAdmin=!0,r.localSuccessHandler=KnurldConsumerImpl.catchAccessTokenSuccessCallBack,!KnurldSDKUtil.isValidObj(n.username))return KnurldResponse.invalidInputResponse("username",r);if(!KnurldSDKUtil.isValidObj(n.password))return KnurldResponse.invalidInputResponse("password",r);var s=KnurldSDKUtil.buildUrl("consumers/token",KnurldConstants.ISV1),u={};return r.requestType=KnurldConstants.POST,u.username=n.username,u.password=n.password,KnurldHttpRequest.sendRequest(s,u,r)},KnurldConsumerImpl.catchAccessTokenSuccessCallBack=function(n,l){KnurldSDK.setConsumerDevID("Bearer: "+n.token),l(n)};var KnurldEnrollmentImpl=KnurldEnrollmentImpl||{};KnurldEnrollmentImpl.post=function(n,l,t,e){var r=KnurldSDKUtil.getAPIParams(e,l,t);if(!KnurldSDKUtil.isValidObj(n))return KnurldResponse.invalidInputResponse(KnurldConstants.INVALID_INPUT,r);var s;r.requestType=KnurldConstants.POST;var u={};if(KnurldSDKUtil.isValidObj(n.enrollmentId)){if(s=KnurldSDKUtil.buildUrl("enrollments/"+n.enrollmentId,KnurldConstants.ISV1),!KnurldSDKUtil.isValidObj(n.enrollmentUrl))return KnurldResponse.invalidInputResponse("enrollmentUrl",r);if(!KnurldSDKUtil.isValidObj(n.intervals))return KnurldResponse.invalidInputResponse("intervals",r);u["enrollment.wav"]=n.enrollmentUrl,u.intervals=n.intervals}else{if(!KnurldSDKUtil.isEmpty(n.consumerId))return KnurldResponse.invalidInputResponse("consumerId",r);if(!KnurldSDKUtil.isEmpty(n.applicationId))return KnurldResponse.invalidInputResponse("applicationId",r);s=KnurldSDKUtil.buildUrl("enrollments",KnurldConstants.ISV1),u.application=KnurldSDKUtil.buildApplicationIdUrl(n.applicationId),u.consumer=KnurldSDKUtil.buildConsumerIdUrl(n.consumerId)}return KnurldHttpRequest.sendRequest(s,u,r)},KnurldEnrollmentImpl.createAndPost=function(n,l,t,e){var r={},s=KnurldSDKUtil.getAPIParams(e,function(r){var s=KnurldSDKUtil.getAPIParams(e,l,t);s.requestType=KnurldConstants.POST;var i={};if(u=r.href,!KnurldSDKUtil.isValidObj(n.enrollmentUrl))return KnurldResponse.invalidInputResponse("enrollmentUrl",s);if(KnurldSDKUtil.isValidObj(n.intervals))KnurldEnrollmentImpl.executeEnroll(u,n,i,s);else if(KnurldSDKUtil.isValidObj(n.vocabulary)&&KnurldSDKUtil.isValidObj(n.enrollmentRepeats))KnurldEnrollmentImpl.addIntervals(u,n,i,s,t);else{var d={};d.appModelId=n.applicationId,KnurldAppModelImpl.get(d,function(l){n.enrollmentRepeats=l.enrollmentRepeats,n.vocabulary=l.vocabulary,KnurldEnrollmentImpl.addIntervals(u,n,i,s,t)},t)}},t);if(!KnurldSDKUtil.isValidObj(n))return KnurldResponse.invalidInputResponse(KnurldConstants.INVALID_INPUT,s);if(!KnurldSDKUtil.isEmpty(n.consumerId))return KnurldResponse.invalidInputResponse("consumerId",s);if(!KnurldSDKUtil.isEmpty(n.applicationId))return KnurldResponse.invalidInputResponse("applicationId",s);if(!KnurldSDKUtil.isValidObj(n.enrollmentUrl))return KnurldResponse.invalidInputResponse("enrollmentUrl",s);var u=KnurldSDKUtil.buildUrl("enrollments",KnurldConstants.ISV1);r.application=KnurldSDKUtil.buildApplicationIdUrl(n.applicationId),r.consumer=KnurldSDKUtil.buildConsumerIdUrl(n.consumerId),s.requestType=KnurldConstants.POST,KnurldHttpRequest.sendRequest(u,r,s)},KnurldEnrollmentImpl.executeEnroll=function(n,l,t,e){return KnurldSDKUtil.isValidObj(l.intervals)?(t["enrollment.wav"]=l.enrollmentUrl,t.intervals=l.intervals,void KnurldHttpRequest.sendRequest(n,t,e)):KnurldResponse.invalidInputResponse("intervals",e)},KnurldEnrollmentImpl.addIntervals=function(n,l,t,e,r){var s={};s.audioUrl=l.enrollmentUrl;for(var u=new Array(0),i=0;i<l.vocabulary.length;i++)for(var d=0;d<l.enrollmentRepeats;d++)u.push(l.vocabulary[i]);KnurldEnrollmentImpl.executeUpload(n,l,s,t,e,u,r)},KnurldEnrollmentImpl.executeUpload=function(n,l,t,e,r,s,u){KnurldSDK.analytics.url(t,function(t){var i=(t.taskName,{});i.isTimer=!0,i.interval=100,i.id=t.taskName;var d=KnurldSDK.analytics.get(i,function(t){if("completed"==t.taskStatus){var i=t.intervals,a=0;angular.isUndefined(s)||angular.forEach(i,function(n,t){var e=Math.floor(a/l.enrollmentRepeats);angular.isUndefined(e)||(n.phrase=s[e]),a++})}else u("invalid audio please upload new one");KnurldSDK.clearInterval(d),l.intervals=i,KnurldEnrollmentImpl.executeEnroll(n,l,e,r)},u)})},KnurldEnrollmentImpl.postWithFile=function(n,l,t,e){var r=KnurldSDKUtil.getAPIParams(e,l,t);if(!KnurldSDKUtil.isValidObj(n))return KnurldResponse.invalidInputResponse(KnurldConstants.INVALID_INPUT,r);r.contentType=KnurldConstants.CONTENT_TYPE_MULTIPART_FORM_DATA,r.requestType=KnurldConstants.POST;var s={},u=KnurldSDKUtil.buildUrl("enrollments/"+n.enrollmentId,KnurldConstants.ISV1);return s["enrollment.wav"]=n["enrollment.wav"],s.name="1.wav",KnurldHttpRequest.uploadFile(u,s,r)},KnurldEnrollmentImpl.get=function(n,l,t,e){var r,s={},u=KnurldSDKUtil.getAPIParams(e,l,t);return KnurldSDKUtil.isValidObj(n.enrollmentId)?r=KnurldSDKUtil.buildUrl("enrollments/"+n.enrollmentId,KnurldConstants.ISV1):(r=KnurldSDKUtil.buildUrl("enrollments",KnurldConstants.ISV1),KnurldSDKUtil.isValidObj(n.limit)&&(s.limit=n.limit),KnurldSDKUtil.isValidObj(n.offset)&&(s.offset=n.offset)),KnurldHttpRequest.sendRequest(r,s,u)},KnurldEnrollmentImpl.getAll=function(n,l,t,e){var e={},r=[],s=0;KnurldEnrollmentImpl.get(n,function(n){if(KnurldSDKUtil.isValidObj(n))if(n.length<=10)l(n);else{var t=n.items;for(var u in t)r[r.length]=t[u];for(i=10;i<n.total;i+=KnurldConstants.FETCH_ALL_OFFSET){var d={};d.limit=KnurldConstants.FETCH_ALL_OFFSET,d.offset=i,KnurldEnrollmentImpl.get(d,function(n){var t=n.items;for(var e in t)r[r.length]=t[e];r.length>=n.total-s*KnurldConstants.FETCH_ALL_OFFSET&&l(r)},function(n){console.log(n),s++},e)}}},function(n){t(n)},e)},KnurldEnrollmentImpl.del=function(n,l,t,e){if(!KnurldSDKUtil.isValidObj(n.enrollmentId))return KnurldResponse.invalidInputResponse("enrollmentId",r);var r=KnurldSDKUtil.getAPIParams(e,l,t),s=KnurldSDKUtil.buildUrl("enrollments/"+n.enrollmentId,KnurldConstants.ISV1);return r.requestType=KnurldConstants.DELETE,KnurldHttpRequest.sendRequest(s,null,r)};var KnurldVerificationImpl=KnurldVerificationImpl||{};KnurldVerificationImpl.post=function(n,l,t,e){var r=KnurldSDKUtil.getAPIParams(e,l,t);if(!KnurldSDKUtil.isValidObj(n))return KnurldResponse.invalidInputResponse(KnurldConstants.INVALID_INPUT,r);var s;r.requestType=KnurldConstants.POST;var u={};if(KnurldSDKUtil.isValidObj(n.verificationId)){if(s=KnurldSDKUtil.buildUrl("verifications/"+n.verificationId,KnurldConstants.ISV1),!KnurldSDKUtil.isValidObj(n.verificationUrl))return KnurldResponse.invalidInputResponse("verificationUrl",r);if(u["verification.wav"]=n.verificationUrl,u.intervals=n.intervals,!KnurldSDKUtil.isValidObj(n.intervals))return KnurldSDKUtil.isValidObj(n.phrases)?void KnurldVerificationImpl.addIntervals(s,n,u,r,t):KnurldResponse.invalidInputResponse("phrases",r)}else{if(!KnurldSDKUtil.isValidObj(n.applicationId))return KnurldResponse.invalidInputResponse("applicationId",r);if(!KnurldSDKUtil.isValidObj(n.consumerId))return KnurldResponse.invalidInputResponse("consumerId",r);s=KnurldSDKUtil.buildUrl("verifications",KnurldConstants.ISV1),u.application=KnurldSDKUtil.buildApplicationIdUrl(n.applicationId),u.consumer=KnurldSDKUtil.buildConsumerIdUrl(n.consumerId)}return KnurldHttpRequest.sendRequest(s,u,r)},KnurldVerificationImpl.addIntervals=function(n,l,t,e,r){var s={};s.audioUrl=l.verificationUrl,KnurldSDK.analytics.url(s,function(s){var u=(s.taskName,{});u.isTimer=!0,u.interval=100,u.id=s.taskName;var i=KnurldSDK.analytics.get(u,function(s){if("completed"==s.taskStatus){var u=s.intervals,d=0;angular.forEach(u,function(n,t){angular.isUndefined(d)||(n.phrase=l.phrases[d]),d++})}else r("invalid audio please upload new one");return KnurldSDK.clearInterval(i),t.intervals=u,KnurldHttpRequest.sendRequest(n,t,e)},r)})},KnurldVerificationImpl.get=function(n,l,t,e){var r,s={},u=KnurldSDKUtil.getAPIParams(e,l,t);return KnurldSDKUtil.isValidObj(n.verificationId)?r=KnurldSDKUtil.buildUrl("verifications/"+n.verificationId,KnurldConstants.ISV1):(KnurldSDKUtil.isValidObj(n.limit)&&(s.limit=n.limit),KnurldSDKUtil.isValidObj(n.offset)&&(s.offset=n.offset),r=KnurldSDKUtil.buildUrl("verifications",KnurldConstants.ISV1)),KnurldHttpRequest.sendRequest(r,s,u)},KnurldVerificationImpl.getAll=function(n,l,t,e){var e={},r=[],s=0;KnurldVerificationImpl.get(n,function(n){if(KnurldSDKUtil.isValidObj(n))if(n.length<=10)l(n);else{var t=n.items;for(var u in t)r[r.length]=t[u];for(i=10;i<n.total;i+=KnurldConstants.FETCH_ALL_OFFSET){var d={};d.limit=KnurldConstants.FETCH_ALL_OFFSET,d.offset=i,KnurldVerificationImpl.get(d,function(n){var t=n.items;for(var e in t)r[r.length]=t[e];r.length>=n.total-s*KnurldConstants.FETCH_ALL_OFFSET&&l(r)},function(n){console.log(n),s++},e)}}},function(n){t(n)},e)},KnurldVerificationImpl.del=function(n,l,t,e){var r=KnurldSDKUtil.getAPIParams(e,l,t);if(!KnurldSDKUtil.isEmpty(n.verificationId))return KnurldResponse.invalidInputResponse("verificationId",r);var s=KnurldSDKUtil.buildUrl("verifications/"+n.verificationId,KnurldConstants.ISV1);return r.requestType=KnurldConstants.DELETE,KnurldHttpRequest.sendRequest(s,null,r)};var KnurldResponse=KnurldResponse||{};KnurldResponse.invalidInputResponse=function(n,l){var t={};return t.StatusCode=400,t.errorMessage="input param:"+n+" is missing",l.asyc?t:void l.errorCallBack(t)};var KnurldHttpRequest=KnurldHttpRequest||{};KnurldHttpRequest.sendRequest=function(url,bodyParams,configParams){var httpRequest=new XMLHttpRequest,urlEncodedData="",urlEncodedDataPairs=[];if(!httpRequest)return alert("Giving up :( Cannot create an XMLHTTP instance"),!1;if(null!=bodyParams)if(KnurldConstants.CONTENT_TYPE_FORM_ENCODED_URL==configParams.contentType||KnurldConstants.GET==configParams.requestType){for(name in bodyParams)urlEncodedDataPairs.push(encodeURIComponent(name)+"="+encodeURIComponent(bodyParams[name]));urlEncodedData=urlEncodedDataPairs.join("&").replace(/%20/g,"+")}else if(KnurldConstants.CONTENT_TYPE_APPLICATION_JSON==configParams.contentType){var jsonObj={};for(name in bodyParams)jsonObj[name]=bodyParams[name];urlEncodedData=JSON.stringify(jsonObj)}else if(KnurldConstants.CONTENT_TYPE_MULTIPART_FORM_DATA==configParams.contentType){urlEncodedData=new FormData;for(name in bodyParams)urlEncodedData.append(name,bodyParams[name])}return httpRequest.onreadystatechange=function(){var response={};return httpRequest.readyState==XMLHttpRequest.DONE&&configParams.async?4==httpRequest.readyState&&(200===httpRequest.status||201===httpRequest.status||202===httpRequest.status)||KnurldConstants.DELETE==configParams.requestType&&204===httpRequest.status?(response=httpRequest.responseText,""!=response&&-1!=response.indexOf("{")&&(response=eval("("+response+")")),void 0!=configParams.localSuccessHandler?configParams.localSuccessHandler(response,configParams.successCallBack):configParams.successCallBack(response),response):(response=httpRequest.responseText,response=KnurldSDKUtil.isEmpty(response)?eval("("+response+")"):{},response.StatusCode=httpRequest.status,configParams.errorCallBack(response),response):void 0},KnurldConstants.GET==configParams.requestType&&(url+="?"+urlEncodedData),httpRequest.open(configParams.requestType,url,configParams.async),KnurldConstants.POST==configParams.requestType&&KnurldConstants.CONTENT_TYPE_MULTIPART_FORM_DATA!=configParams.contentType&&httpRequest.setRequestHeader("Content-Type",configParams.contentType),configParams.sendAccessToken&&httpRequest.setRequestHeader("Authorization","Bearer "+KnurldConstants.ACCESS_TOKEN),configParams.sendDevID&&(KnurldSDK.isConsumer()&&!configParams.forceAdmin?httpRequest.setRequestHeader("Developer-Id",KnurldConstants.CONSUMER_DEV_ID):httpRequest.setRequestHeader("Developer-Id",KnurldConstants.DEV_ID)),httpRequest.send(urlEncodedData)},KnurldHttpRequest.uploadFile=function(n,l,t){var e=new XMLHttpRequest;if(!e)return alert("Giving up :( Cannot create an XMLHTTP instance"),!1;var r=new FormData;for(name in l)r.append(name,l[name]);e.onreadystatechange=function(){var n={};return e.readyState==XMLHttpRequest.DONE&&t.async?4==e.readyState&&(200===e.status||201===e.status||202===e.status)||KnurldConstants.DELETE==t.requestType&&204===e.status?(n=e.responseText,void 0!=t.localSuccessHandler?t.localSuccessHandler(n,t.successCallBack):t.successCallBack(n),n):(n=e.responseText,n.StatusCode=e.status,t.errorCallBack(n),n):void 0},e.open("post",n,!0),e.send(r)};var KnurldSDKUtil=KnurldSDKUtil||{};KnurldSDKUtil.isValidObj=function(n){return"undefined"!=typeof n&&null!=n},KnurldSDKUtil.isEmpty=function(n){return!(!KnurldSDKUtil.isValidObj(n)||(n=n.trim(),""==n))},KnurldSDKUtil.buildUrl=function(n,l){return l?KnurldConstants.HOST+KnurldConstants.V1+n:KnurldConstants.HOST+n},KnurldSDKUtil.buildApplicationIdUrl=function(n){return KnurldConstants.APP_URL+n},KnurldSDKUtil.buildConsumerIdUrl=function(n){return KnurldConstants.CONSUMER_URL+n},KnurldSDKUtil.getAPIParams=function(n,l,t){return KnurldSDKUtil.isValidObj(n)||(n={}),void 0===n.async&&(n.async=!0),void 0===n.requestType&&(n.requestType=KnurldConstants.GET),KnurldSDKUtil.isFunction(l)||(l=KnurldSDKUtil.commonCallBack),KnurldSDKUtil.isFunction(t)||(t=KnurldSDKUtil.commonCallBack),n.successCallBack=l,n.errorCallBack=t,n.sendDevID=!0,n.sendAccessToken=!0,n.contentType=KnurldConstants.CONTENT_TYPE_APPLICATION_JSON,n.forceAdmin=!1,n},KnurldSDKUtil.isFunction=function(n){return typeof n==typeof Function},KnurldSDKUtil.commonCallBack=function(n){},KnurldSDKUtil.setupURL=function(){KnurldConstants.APP_URL=KnurldConstants.HOST+KnurldConstants.V1+KnurldConstants.APPLICATION+KnurldConstants.URL_SEPR,KnurldConstants.CONSUMER_URL=KnurldConstants.HOST+KnurldConstants.V1+KnurldConstants.CONSUMER+KnurldConstants.URL_SEPR},KnurldSDKUtil.pausecomp=function(n){var l=new Date,t=null;do t=new Date;while(n>t-l)};