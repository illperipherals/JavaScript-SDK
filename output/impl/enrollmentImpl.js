var KnurldEnrollmentImpl=KnurldEnrollmentImpl||{};KnurldEnrollmentImpl.post=function(n,l,e,r){var t=KnurldSDKUtil.getAPIParams(r,l,e);if(!KnurldSDKUtil.isValidObj(n))return KnurldResponse.invalidInputResponse(KnurldConstants.INVALID_INPUT,t);var i;t.requestType=KnurldConstants.POST;var u={};if(KnurldSDKUtil.isValidObj(n.enrollmentId)){if(i=KnurldSDKUtil.buildUrl("enrollments/"+n.enrollmentId,KnurldConstants.ISV1),!KnurldSDKUtil.isValidObj(n.enrollmentUrl))return KnurldResponse.invalidInputResponse("enrollmentUrl",t);if(!KnurldSDKUtil.isValidObj(n.intervals))return KnurldResponse.invalidInputResponse("intervals",t);u["enrollment.wav"]=n.enrollmentUrl,u.intervals=n.intervals}else{if(!KnurldSDKUtil.isEmpty(n.consumerId))return KnurldResponse.invalidInputResponse("consumerId",t);if(!KnurldSDKUtil.isEmpty(n.applicationId))return KnurldResponse.invalidInputResponse("applicationId",t);i=KnurldSDKUtil.buildUrl("enrollments",KnurldConstants.ISV1),u.application=KnurldSDKUtil.buildApplicationIdUrl(n.applicationId),u.consumer=KnurldSDKUtil.buildConsumerIdUrl(n.consumerId)}return KnurldHttpRequest.sendRequest(i,u,t)},KnurldEnrollmentImpl.createAndPost=function(n,l,e,r){var t={},i=KnurldSDKUtil.getAPIParams(r,function(t){var i=KnurldSDKUtil.getAPIParams(r,l,e);i.requestType=KnurldConstants.POST;var s={};if(u=t.href,!KnurldSDKUtil.isValidObj(n.enrollmentUrl))return KnurldResponse.invalidInputResponse("enrollmentUrl",i);if(KnurldSDKUtil.isValidObj(n.intervals))KnurldEnrollmentImpl.executeEnroll(u,n,s,i);else if(KnurldSDKUtil.isValidObj(n.vocabulary)&&KnurldSDKUtil.isValidObj(n.enrollmentRepeats))KnurldEnrollmentImpl.addIntervals(u,n,s,i,e);else{var d={};d.appModelId=n.applicationId,KnurldAppModelImpl.get(d,function(l){n.enrollmentRepeats=l.enrollmentRepeats,n.vocabulary=l.vocabulary,KnurldEnrollmentImpl.addIntervals(u,n,s,i,e)},e)}},e);if(!KnurldSDKUtil.isValidObj(n))return KnurldResponse.invalidInputResponse(KnurldConstants.INVALID_INPUT,i);if(!KnurldSDKUtil.isEmpty(n.consumerId))return KnurldResponse.invalidInputResponse("consumerId",i);if(!KnurldSDKUtil.isEmpty(n.applicationId))return KnurldResponse.invalidInputResponse("applicationId",i);if(!KnurldSDKUtil.isValidObj(n.enrollmentUrl))return KnurldResponse.invalidInputResponse("enrollmentUrl",i);var u=KnurldSDKUtil.buildUrl("enrollments",KnurldConstants.ISV1);t.application=KnurldSDKUtil.buildApplicationIdUrl(n.applicationId),t.consumer=KnurldSDKUtil.buildConsumerIdUrl(n.consumerId),i.requestType=KnurldConstants.POST,KnurldHttpRequest.sendRequest(u,t,i)},KnurldEnrollmentImpl.executeEnroll=function(n,l,e,r){return KnurldSDKUtil.isValidObj(l.intervals)?(e["enrollment.wav"]=l.enrollmentUrl,e.intervals=l.intervals,void KnurldHttpRequest.sendRequest(n,e,r)):KnurldResponse.invalidInputResponse("intervals",r)},KnurldEnrollmentImpl.addIntervals=function(n,l,e,r,t){var i={};i.audioUrl=l.enrollmentUrl;for(var u=new Array(0),s=0;s<l.vocabulary.length;s++)for(var d=0;d<l.enrollmentRepeats;d++)u.push(l.vocabulary[s]);KnurldEnrollmentImpl.executeUpload(n,l,i,e,r,u,t)},KnurldEnrollmentImpl.executeUpload=function(n,l,e,r,t,i,u){KnurldSDK.analytics.url(e,function(e){var s=(e.taskName,{});s.isTimer=!0,s.interval=100,s.id=e.taskName;var d=KnurldSDK.analytics.get(s,function(e){if("completed"==e.taskStatus){var s=e.intervals,a=0;angular.isUndefined(i)||angular.forEach(s,function(n,e){var r=Math.floor(a/l.enrollmentRepeats);angular.isUndefined(r)||(n.phrase=i[r]),a++})}else u("invalid audio please upload new one");KnurldSDK.clearInterval(d),l.intervals=s,KnurldEnrollmentImpl.executeEnroll(n,l,r,t)},u)})},KnurldEnrollmentImpl.postWithFile=function(n,l,e,r){var t=KnurldSDKUtil.getAPIParams(r,l,e);if(!KnurldSDKUtil.isValidObj(n))return KnurldResponse.invalidInputResponse(KnurldConstants.INVALID_INPUT,t);t.contentType=KnurldConstants.CONTENT_TYPE_MULTIPART_FORM_DATA,t.requestType=KnurldConstants.POST;var i={},u=KnurldSDKUtil.buildUrl("enrollments/"+n.enrollmentId,KnurldConstants.ISV1);return i["enrollment.wav"]=n["enrollment.wav"],i.name="1.wav",KnurldHttpRequest.uploadFile(u,i,t)},KnurldEnrollmentImpl.get=function(n,l,e,r){var t,i={},u=KnurldSDKUtil.getAPIParams(r,l,e);return KnurldSDKUtil.isValidObj(n.enrollmentId)?t=KnurldSDKUtil.buildUrl("enrollments/"+n.enrollmentId,KnurldConstants.ISV1):(t=KnurldSDKUtil.buildUrl("enrollments",KnurldConstants.ISV1),KnurldSDKUtil.isValidObj(n.limit)&&(i.limit=n.limit),KnurldSDKUtil.isValidObj(n.offset)&&(i.offset=n.offset)),KnurldHttpRequest.sendRequest(t,i,u)},KnurldEnrollmentImpl.getAll=function(n,l,e,r){var r={},t=[],u=0;KnurldEnrollmentImpl.get(n,function(n){if(KnurldSDKUtil.isValidObj(n))if(n.length<=10)l(n);else{var e=n.items;for(var s in e)t[t.length]=e[s];for(i=10;i<n.total;i+=KnurldConstants.FETCH_ALL_OFFSET){var d={};d.limit=KnurldConstants.FETCH_ALL_OFFSET,d.offset=i,KnurldEnrollmentImpl.get(d,function(n){var e=n.items;for(var r in e)t[t.length]=e[r];t.length>=n.total-u*KnurldConstants.FETCH_ALL_OFFSET&&l(t)},function(n){console.log(n),u++},r)}}},function(n){e(n)},r)},KnurldEnrollmentImpl.del=function(n,l,e,r){if(!KnurldSDKUtil.isValidObj(n.enrollmentId))return KnurldResponse.invalidInputResponse("enrollmentId",t);var t=KnurldSDKUtil.getAPIParams(r,l,e),i=KnurldSDKUtil.buildUrl("enrollments/"+n.enrollmentId,KnurldConstants.ISV1);return t.requestType=KnurldConstants.DELETE,KnurldHttpRequest.sendRequest(i,null,t)};