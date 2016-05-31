var KnurldConsumerImpl=KnurldConsumerImpl||{};KnurldConsumerImpl.post=function(n,r,s,e){var l=KnurldSDKUtil.getAPIParams(e,r,s);if(!KnurldSDKUtil.isValidObj(n))return KnurldResponse.invalidInputResponse(KnurldConstants.INVALID_INPUT,l);if(!KnurldSDKUtil.isValidObj(n.password))return KnurldResponse.invalidInputResponse("password",l);var u;l.requestType=KnurldConstants.POST;var t={};if(t.password=n.password,KnurldSDKUtil.isValidObj(n.consumerId))u=KnurldSDKUtil.buildUrl("consumers/"+n.consumerId,KnurldConstants.ISV1);else{if(u=KnurldSDKUtil.buildUrl("consumers",KnurldConstants.ISV1),!KnurldSDKUtil.isEmpty(n.Gender))return KnurldResponse.invalidInputResponse("Gender",l);if(!KnurldSDKUtil.isValidObj(n.username))return KnurldResponse.invalidInputResponse("username",l);t.gender=n.Gender,t.username=n.username}return KnurldHttpRequest.sendRequest(u,t,l)},KnurldConsumerImpl.get=function(n,r,s,e){var l,u={},t=KnurldSDKUtil.getAPIParams(e,r,s);return KnurldSDKUtil.isValidObj(n.consumerId)?l=KnurldSDKUtil.buildUrl("consumers/"+n.consumerId,KnurldConstants.ISV1):(l=KnurldSDKUtil.buildUrl("consumers",KnurldConstants.ISV1),KnurldSDKUtil.isValidObj(n.limit)&&(u.limit=n.limit),KnurldSDKUtil.isValidObj(n.offset)&&(u.offset=n.offset)),KnurldHttpRequest.sendRequest(l,u,t)},KnurldConsumerImpl.getAll=function(n,r,s,e){var e={},l=[],u=0;KnurldConsumerImpl.get(n,function(n){if(KnurldSDKUtil.isValidObj(n))if(n.length<=10)r(n);else{var s=n.items;for(var t in s)l[l.length]=s[t];for(i=10;i<n.total;i+=KnurldConstants.FETCH_ALL_OFFSET){var d={};d.limit=KnurldConstants.FETCH_ALL_OFFSET,d.offset=i,KnurldConsumerImpl.get(d,function(n){var s=n.items;for(var e in s)l[l.length]=s[e];l.length>=n.total-u*KnurldConstants.FETCH_ALL_OFFSET&&r(l)},function(n){console.log(n),u++},e)}}},function(n){s(n)},e)},KnurldConsumerImpl.getAllInOneCall=function(n,r,s,e){var l=KnurldSDKUtil.getAPIParams(e,r,s),u={};u.limit=1e3,u.offset=0;var t=KnurldSDKUtil.buildUrl("consumers",KnurldConstants.ISV1);return KnurldHttpRequest.sendRequest(t,u,l)},KnurldConsumerImpl.del=function(n,r,s,e){var l=KnurldSDKUtil.getAPIParams(e,r,s);if(!KnurldSDKUtil.isValidObj(n.consumerId))return KnurldResponse.invalidInputResponse("consumerId",l);var u=KnurldSDKUtil.buildUrl("consumers/"+n.consumerId,KnurldConstants.ISV1);return l.requestType=KnurldConstants.DELETE,KnurldHttpRequest.sendRequest(u,null,l)},KnurldConsumerImpl.token=function(n,r,s,e){var l=KnurldSDKUtil.getAPIParams(e,r,s);if(l.forceAdmin=!0,l.localSuccessHandler=KnurldConsumerImpl.catchAccessTokenSuccessCallBack,!KnurldSDKUtil.isValidObj(n.username))return KnurldResponse.invalidInputResponse("username",l);if(!KnurldSDKUtil.isValidObj(n.password))return KnurldResponse.invalidInputResponse("password",l);var u=KnurldSDKUtil.buildUrl("consumers/token",KnurldConstants.ISV1),t={};return l.requestType=KnurldConstants.POST,t.username=n.username,t.password=n.password,KnurldHttpRequest.sendRequest(u,t,l)},KnurldConsumerImpl.catchAccessTokenSuccessCallBack=function(n,r){KnurldSDK.setConsumerDevID("Bearer: "+n.token),r(n)};