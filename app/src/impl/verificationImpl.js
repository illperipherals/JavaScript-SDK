/**
 * @author ndarade
 *
 */

var KnurldVerificationImpl = KnurldVerificationImpl || {};
/**
 * [function description]
 * @param  {[type]} input           [description]
 * @param  {[type]} successCallback [description]
 * @param  {[type]} errorCallBack   [description]
 * @param  {[type]} aPIExtraParams  [description]
 * @return {[type]}                 [description]
 */
KnurldVerificationImpl.post = function(input, successCallback, errorCallBack,
  aPIExtraParams) {

  var apiMetaData = KnurldSDKUtil.getAPIParams(aPIExtraParams,
    successCallback, errorCallBack);
  if (!KnurldSDKUtil.isValidObj(input)) {
    return KnurldResponse.invalidInputResponse(KnurldConstants.INVALID_INPUT,
      apiMetaData);
  }
  var url;
  apiMetaData.requestType = KnurldConstants.POST;
  var bodyParams = {};
  if (KnurldSDKUtil.isValidObj(input.verificationId)) {
    url = KnurldSDKUtil.buildUrl("verifications/" + input.verificationId,
      KnurldConstants.ISV1);
    if (!KnurldSDKUtil.isValidObj(input.verificationUrl)) {
      return KnurldResponse.invalidInputResponse('verificationUrl',
        apiMetaData);
    }

    bodyParams["verification.wav"] = input.verificationUrl;
    bodyParams.intervals = input.intervals;


    if (!KnurldSDKUtil.isValidObj(input.intervals)) {
      if (KnurldSDKUtil.isValidObj(input.phrases)) {
        KnurldVerificationImpl.addIntervals(url, input, bodyParams, apiMetaData, errorCallBack);
      } else {
        return KnurldResponse.invalidInputResponse('phrases',
          apiMetaData);
      }
      return;
    }
  } else {

    if (!KnurldSDKUtil.isValidObj(input.applicationId)) {
      return KnurldResponse
        .invalidInputResponse('applicationId', apiMetaData);
    }
    if (!KnurldSDKUtil.isValidObj(input.consumerId)) {
      return KnurldResponse
        .invalidInputResponse('consumerId', apiMetaData);
    }

    url = KnurldSDKUtil.buildUrl("verifications", KnurldConstants.ISV1);
    bodyParams.application = KnurldSDKUtil
      .buildApplicationIdUrl(input.applicationId);
    bodyParams.consumer = KnurldSDKUtil
      .buildConsumerIdUrl(input.consumerId);
  }
  return KnurldHttpRequest.sendRequest(url, bodyParams, apiMetaData);
};

/**
 * [function description]
 * @param  {[type]} input           [description]
 * @param  {[type]} successCallback [description]
 * @param  {[type]} errorCallBack   [description]
 * @param  {[type]} aPIExtraParams  [description]
 * @return {[type]}                 [description]
 */
KnurldVerificationImpl.createAndGet = function(input, successCallback, errorCallBack,
  aPIExtraParams) {

  var apiMetaData = KnurldSDKUtil.getAPIParams(aPIExtraParams,
    function(response) {
      var _inputs = {};
      _inputs.verificationId = response.href.split("/").pop();
      return KnurldVerificationImpl.get(_inputs, successCallback, errorCallBack);
    }, errorCallBack);

  if (!KnurldSDKUtil.isValidObj(input)) {
    return KnurldResponse.invalidInputResponse(KnurldConstants.INVALID_INPUT,
      apiMetaData);
  }
  apiMetaData.requestType = KnurldConstants.POST;
  var bodyParams = {};
  if (!KnurldSDKUtil.isValidObj(input.applicationId)) {
    return KnurldResponse
      .invalidInputResponse('applicationId', apiMetaData);
  }
  if (!KnurldSDKUtil.isValidObj(input.consumerId)) {
    return KnurldResponse
      .invalidInputResponse('consumerId', apiMetaData);
  }
  var url = KnurldSDKUtil.buildUrl("verifications", KnurldConstants.ISV1);
  bodyParams.application = KnurldSDKUtil
    .buildApplicationIdUrl(input.applicationId);
  bodyParams.consumer = KnurldSDKUtil
    .buildConsumerIdUrl(input.consumerId);
  return KnurldHttpRequest.sendRequest(url, bodyParams, apiMetaData);
};

KnurldVerificationImpl.addIntervals = function(url, input, bodyParams, apiMetaData, errorCallBack) {
  var __inputs = {};
  __inputs.audioUrl = input.verificationUrl;
  KnurldSDK.analytics.url(__inputs, function(response) {
    var taskName = response.taskName;
    var ___inputs = {};
    ___inputs.isTimer = true;
    ___inputs.interval = 100;
    ___inputs.id = response.taskName;
    var analyseIntervalId = KnurldSDK.analytics.get(___inputs, function(response) {
        if (response.taskStatus == "completed") {

          var interval = response.intervals;
          var i = 0;
          if(interval.length != input.phrases.length){
            errorCallBack("invalid audio please upload new one");
            KnurldSDK.clearInterval(analyseIntervalId);
            return;
          }
          angular.forEach(interval, function(value, key) {
            //  var _i = Math.floor(i / 3);
            if (!angular.isUndefined(i)) {
              value.phrase = input.phrases[i];
            }
            // if (constant.isAdJust600MiliGap()) {
            //   var gap = value.stop - value.start;
            //   if (gap < constant.getMilisRequired()) {
            //     value.stop = value.stop + (constant.getMilisRequired() - gap);
            //   }
            // }
            i++;
          });
        } else {
          errorCallBack("invalid audio please upload new one");
          return;
        }
        KnurldSDK.clearInterval(analyseIntervalId);
        bodyParams.intervals = interval;
        return KnurldHttpRequest.sendRequest(url, bodyParams, apiMetaData);
      },
      errorCallBack);
  });
}

/**
 * [function description]
 * @param  {[type]} input           [description]
 * @param  {[type]} successCallback [description]
 * @param  {[type]} errorCallBack   [description]
 * @param  {[type]} aPIExtraParams  [description]
 * @return {[type]}                 [description]
 */
KnurldVerificationImpl.get = function(input, successCallback, errorCallBack,
  aPIExtraParams) {
  var bodyParams = {};
  var apiMetaData = KnurldSDKUtil.getAPIParams(aPIExtraParams,
    successCallback, errorCallBack);
  var url;
  if (KnurldSDKUtil.isValidObj(input.verificationId)) {
    url = KnurldSDKUtil.buildUrl("verifications/" + input.verificationId,
      KnurldConstants.ISV1);
  } else {
    if (KnurldSDKUtil.isValidObj(input.limit)) {
      bodyParams.limit = input.limit;
    }
    if (KnurldSDKUtil.isValidObj(input.offset)) {
      bodyParams.offset = input.offset;
    }
    url = KnurldSDKUtil.buildUrl("verifications", KnurldConstants.ISV1);
  }
  return KnurldHttpRequest.sendRequest(url, bodyParams, apiMetaData);
};

/**
 * [function description]
 * @param  {[type]} input           [description]
 * @param  {[type]} successCallback [description]
 * @param  {[type]} errorCallBack   [description]
 * @param  {[type]} aPIExtraParams  [description]
 * @return {[type]}                 [description]
 */
KnurldVerificationImpl.getAll = function(input, successCallback, errorCallBack,
  aPIExtraParams) {
  var aPIExtraParams = {};
  var _response = [];
  //aPIExtraParams.async = true;
  var failCount = 0;
  KnurldVerificationImpl.get(input, function(response) {
    if (KnurldSDKUtil.isValidObj(response)) {
      if (response.length <= 10) {
        successCallback(response);
      } else {
        var items = response.items;
        for (var key in items) {
          _response[_response.length] = items[key];
        }
        for (i = 10; i < response.total; i += KnurldConstants.FETCH_ALL_OFFSET) {
          var inputs = {};
          inputs.limit = KnurldConstants.FETCH_ALL_OFFSET;
          inputs.offset = i;
          KnurldVerificationImpl.get(inputs, function(response) {
            var items = response.items;
            for (var key in items) {
              _response[_response.length] = items[key];
            }
            if (_response.length >= (response.total - failCount * KnurldConstants.FETCH_ALL_OFFSET)) {
              successCallback(_response);
            }
          }, function(response) {
            console.log(response);
            failCount++;
          }, aPIExtraParams);
        }
      }
    }
  }, function(response) {
    errorCallBack(response);
  }, aPIExtraParams);
};

/**
 * [function description]
 * @param  {[type]} input           [description]
 * @param  {[type]} successCallback [description]
 * @param  {[type]} errorCallBack   [description]
 * @param  {[type]} aPIExtraParams  [description]
 * @return {[type]}                 [description]
 */
KnurldVerificationImpl.del = function(input, successCallback, errorCallBack,
  aPIExtraParams) {

  var apiMetaData = KnurldSDKUtil.getAPIParams(aPIExtraParams,
    successCallback, errorCallBack);

  if (!KnurldSDKUtil.isEmpty(input.verificationId)) {
    return KnurldResponse.invalidInputResponse('verificationId', apiMetaData);
  }

  var url = KnurldSDKUtil.buildUrl("verifications/" + input.verificationId,
    KnurldConstants.ISV1);

  apiMetaData.requestType = KnurldConstants.DELETE;

  return KnurldHttpRequest.sendRequest(url, null, apiMetaData);
};
