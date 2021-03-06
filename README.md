# JavaScript-SDK for Knurld Voice Verification APIs

##How to use the Knurld JavaScript SDK

1. Extract the html docs from the docs folder to your local machine and open KnurldSDK.html

2. The JavaScript file can be found in the root folder - knurldsdk.js and can be hosted at your location of choice.


We have developer a HTML5 based convenience app for developers using the SDK that allows you to explore the API functionality without writing any code. Check it out at:
https://explore.knurld-demo.com/#/login

To use this application, you will need valid security credentials that can be obtained from the Knurld Developer Portal at https://developer.knurld.io/

#Demo https://explore.knurld-demo.com/
For Developers:

#Execute following commands

$ npm install

$ gulp build

For test cases

$ ./node_modules/karma/bin/karma  start ../JavaScript-SDK/app/test/jasmine/websdk_test.conf.js 

or 

$ gulp test

For creating documentation

$ ./node_modules/.bin/jsdoc app/src/sdk.js

$ ./node_modules/.bin/jsdoc -c jsdoc.conf -t ./node_modules/ink-docstrap/template

## Contributing

Bug reports and pull requests are welcome on GitHub at https://github.com/knurld/JavaScript-SDK . This project is intended to be a safe, welcoming space for collaboration, and contributors are expected to adhere to the [Contributor Covenant](http://contributor-covenant.org) code of conduct.

