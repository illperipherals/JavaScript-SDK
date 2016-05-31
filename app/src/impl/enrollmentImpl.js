/**
 * @author ndarade
 *
 */

var KnurldEnrollmentImpl = KnurldEnrollmentImpl || {};

/**
 * [function description]
 * @param  {[type]} input           [description]
 * @param  {[type]} successCallback [description]
 * @param  {[type]} errorCallBack   [description]
 * @param  {[type]} aPIExtraParams  [description]
 * @return {[type]}                 [description]
 */
KnurldEnrollmentImpl.post = function(input, successCallback, errorCallBack,
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

  if (KnurldSDKUtil.isValidObj(input.enrollmentId)) {

    url = KnurldSDKUtil.buildUrl("enrollments/" + input.enrollmentId,
      KnurldConstants.ISV1);

    if (!KnurldSDKUtil.isValidObj(input.enrollmentUrl)) {
      return KnurldResponse.invalidInputResponse('enrollmentUrl',
        apiMetaData);
    }
    if (!KnurldSDKUtil.isValidObj(input.intervals)) {
      return KnurldResponse
        .invalidInputResponse('intervals', apiMetaData);
    }
    bodyParams["enrollment.wav"] = input.enrollmentUrl;
    bodyParams.intervals = input.intervals;

  } else {

    if (!KnurldSDKUtil.isEmpty(input.consumerId)) {
      return KnurldResponse.invalidInputResponse('consumerId', apiMetaData);
    }

    if (!KnurldSDKUtil.isEmpty(input.applicationId)) {
      return KnurldResponse
        .invalidInputResponse('applicationId', apiMetaData);
    }
    url = KnurldSDKUtil.buildUrl("enrollments", KnurldConstants.ISV1);
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
KnurldEnrollmentImpl.createAndPost = function(input, successCallback, errorCallBack,
  aPIExtraParams) {
  var bodyParams = {};

  var apiMetaData = KnurldSDKUtil.getAPIParams(aPIExtraParams,
    function(response) {
      var _apiMetaData = KnurldSDKUtil.getAPIParams(aPIExtraParams,
        successCallback, errorCallBack);
      _apiMetaData.requestType = KnurldConstants.POST;
      var _bodyParams = {};
      url = response.href;

      if (!KnurldSDKUtil.isValidObj(input.enrollmentUrl)) {
        return KnurldResponse.invalidInputResponse('enrollmentUrl',
          _apiMetaData);
      }

      if (!KnurldSDKUtil.isValidObj(input.intervals)) {
        if (!KnurldSDKUtil.isValidObj(input.vocabulary) || !KnurldSDKUtil.isValidObj(input.enrollmentRepeats)) {
          var _inputs = {};
          _inputs.appModelId = input.applicationId;
          KnurldAppModelImpl.get(_inputs, function(_response) {
            input.enrollmentRepeats = _response.enrollmentRepeats;
            input.vocabulary = _response.vocabulary;
            KnurldEnrollmentImpl.addIntervals(url, input, _bodyParams, _apiMetaData, errorCallBack);
          }, errorCallBack);
        } else {
          KnurldEnrollmentImpl.addIntervals(url, input, _bodyParams, _apiMetaData, errorCallBack);
        }
      } else {
        KnurldEnrollmentImpl.executeEnroll(url, input, _bodyParams, _apiMetaData);
      }
    },
    errorCallBack);

  if (!KnurldSDKUtil.isValidObj(input)) {
    return KnurldResponse.invalidInputResponse(KnurldConstants.INVALID_INPUT,
      apiMetaData);
  }
  if (!KnurldSDKUtil.isEmpty(input.consumerId)) {
    return KnurldResponse.invalidInputResponse('consumerId', apiMetaData);
  }
  if (!KnurldSDKUtil.isEmpty(input.applicationId)) {
    return KnurldResponse
      .invalidInputResponse('applicationId', apiMetaData);
  }
  if (!KnurldSDKUtil.isValidObj(input.enrollmentUrl)) {
    return KnurldResponse.invalidInputResponse('enrollmentUrl',
      apiMetaData);
  }
  // if (!KnurldSDKUtil.isValidObj(input.intervals)) {
  //   return KnurldResponse
  //     .invalidInputResponse('intervals', apiMetaData);
  // }

  if (KnurldSDKUtil.isValidObj(input.enrollmentId)) {
      var ___response = {};
      ___response.href=KnurldConstants.HOST + KnurldConstants.V1
    			+ KnurldConstants.ENROLLMENTS + KnurldConstants.URL_SEPR + input.enrollmentId;
      apiMetaData.successCallBack(___response);
      return;
  }
  var url = KnurldSDKUtil.buildUrl("enrollments", KnurldConstants.ISV1);
  bodyParams.application = KnurldSDKUtil
    .buildApplicationIdUrl(input.applicationId);
  bodyParams.consumer = KnurldSDKUtil
    .buildConsumerIdUrl(input.consumerId);
  apiMetaData.requestType = KnurldConstants.POST;
  KnurldHttpRequest.sendRequest(url, bodyParams, apiMetaData);

};

KnurldEnrollmentImpl.executeEnroll = function(url, input, _bodyParams, _apiMetaData) {
  if (!KnurldSDKUtil.isValidObj(input.intervals)) {
    return KnurldResponse
      .invalidInputResponse('intervals', _apiMetaData);
  }
  _bodyParams["enrollment.wav"] = input.enrollmentUrl;
  _bodyParams.intervals = input.intervals;
  KnurldHttpRequest.sendRequest(url, _bodyParams, _apiMetaData);
}

KnurldEnrollmentImpl.addIntervals = function(url, input,  _bodyParams, _apiMetaData, errorCallBack) {
  var __inputs = {};
  __inputs.audioUrl = input.enrollmentUrl;
  var taskName = "";
  var taskStatus;
  // var phrases = new Array(0);
  var count = 0;
  // for (var j = 0; j < input.vocabulary.length; j++) {
  //   for (var i = 0; i < input.enrollmentRepeats; i++) {
  //     phrases.push(input.vocabulary[j]);
  //   }
  // }
  KnurldEnrollmentImpl.executeUpload(url, input, __inputs, _bodyParams, _apiMetaData, input.vocabulary, errorCallBack);
}
KnurldEnrollmentImpl.executeUpload = function(url, input, __inputs, _bodyParams, _apiMetaData, phrases, errorCallBack) {
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
          if (!angular.isUndefined(phrases)) {
            angular.forEach(interval, function(value, key) {
              // var _i = Math.floor(i / input.enrollmentRepeats);
              // if (!angular.isUndefined(_i)) {
              //   value.phrase = phrases[i];
              // }
              value.phrase = phrases[i];
              //  if (constant.isAdJust600MiliGap()) {
              //    var gap = value.stop - value.start;
              //    if (gap < constant.getMilisRequired()) {
              //      value.stop = value.stop + (constant.getMilisRequired() - gap);
              //    }
              //  }
              i++;
            });
          }

        } else {
          errorCallBack("invalid audio please upload new one");
        }
        KnurldSDK.clearInterval(analyseIntervalId);
        input.intervals = interval;
        KnurldEnrollmentImpl.executeEnroll(url, input, _bodyParams, _apiMetaData);
      }, errorCallBack);
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
KnurldEnrollmentImpl.postWithFile = function(input, successCallback, errorCallBack,
  aPIExtraParams) {
  var apiMetaData = KnurldSDKUtil.getAPIParams(aPIExtraParams,
    successCallback, errorCallBack);
  if (!KnurldSDKUtil.isValidObj(input)) {
    return KnurldResponse.invalidInputResponse(KnurldConstants.INVALID_INPUT,
      apiMetaData);
  }
  apiMetaData.contentType = KnurldConstants.CONTENT_TYPE_MULTIPART_FORM_DATA;
  apiMetaData.requestType = KnurldConstants.POST;
  var bodyParams = {};
  var url = KnurldSDKUtil.buildUrl("enrollments/" + input.enrollmentId,
    KnurldConstants.ISV1);
  /*if (!KnurldSDKUtil.isValidObj(input.intervals)) {
  	return KnurldResponse
  			.invalidInputResponse('intervals', apiMetaData);
  }*/
  bodyParams['enrollment.wav'] = input['enrollment.wav'];
  bodyParams.name = "1.wav";
  //bodyParams.intervals = input.intervals;
  return KnurldHttpRequest.uploadFile(url, bodyParams, apiMetaData);
};
/**
 * [function description]
 * @param  {[type]} input           [description]
 * @param  {[type]} successCallback [description]
 * @param  {[type]} errorCallBack   [description]
 * @param  {[type]} aPIExtraParams  [description]
 * @return {[type]}                 [description]
 */
KnurldEnrollmentImpl.get = function(input, successCallback, errorCallBack,
  aPIExtraParams) {
  var bodyParams = {};
  var apiMetaData = KnurldSDKUtil.getAPIParams(aPIExtraParams,
    successCallback, errorCallBack);
  var url;
  if (KnurldSDKUtil.isValidObj(input.enrollmentId)) {
    url = KnurldSDKUtil.buildUrl("enrollments/" + input.enrollmentId,
      KnurldConstants.ISV1);
  } else {
    url = KnurldSDKUtil.buildUrl("enrollments", KnurldConstants.ISV1);
    if (KnurldSDKUtil.isValidObj(input.limit)) {
      bodyParams.limit = input.limit;
    }
    if (KnurldSDKUtil.isValidObj(input.offset)) {
      bodyParams.offset = input.offset;
    }
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
KnurldEnrollmentImpl.getAll = function(input, successCallback, errorCallBack,
  aPIExtraParams) {
  var aPIExtraParams = {};
  var _response = [];
  //aPIExtraParams.async = true;
  var failCount = 0;
  KnurldEnrollmentImpl.get(input, function(response) {
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
          KnurldEnrollmentImpl.get(inputs, function(response) {
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
KnurldEnrollmentImpl.del = function(input, successCallback, errorCallBack,
  aPIExtraParams) {

  if (!KnurldSDKUtil.isValidObj(input.enrollmentId)) {
    return KnurldResponse.invalidInputResponse('enrollmentId', apiMetaData);
  }

  var apiMetaData = KnurldSDKUtil.getAPIParams(aPIExtraParams,
    successCallback, errorCallBack);
  var url = KnurldSDKUtil.buildUrl("enrollments/" + input.enrollmentId,
    KnurldConstants.ISV1);

  apiMetaData.requestType = KnurldConstants.DELETE;

  return KnurldHttpRequest.sendRequest(url, null, apiMetaData);
};
