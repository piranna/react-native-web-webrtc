# react-native-web-webrtc

A WebRTC module for React Native Web.

## Support
- Supports browsers and chromeOS.  
- Support video and audio communication.  
- Supports data channels.  
- You can use it to build a client side application using react-native-web that can use WebRTC.

## Installation

### react-native-web-webrtc:

- [Web](https://github.com/liivevideo/react-native-web-webrtc/blob/master/Documentation/WebInstallation.md)
- [ChromeOS](https://github.com/liivevideo/react-native-web-webrtc/blob/master/Documentation/ChromeOSInstallation.md)

## Usage
Now, you can use WebRTC like in browser.
In your `index.web.js`/`index.chromeos.js`

```javascript
var WebRTC = require('react-native-web-webrtc');
var {
  RTCPeerConnection,
  RTCMediaStream,
  RTCIceCandidate,
  RTCSessionDescription,
  MediaStreamTrack,
  getUserMedia,
} = WebRTC;
```

## Demo
The demo project is comming.

## TODO:

* Example project
* ChromeOS support
* Video Tag migrated from liivevideo/react-native-web
* Documentation of implementation

## Sister Projects:

This is a sister project to: [react-native-webrtc](https://github.com/oney/react-native-webrtc) and [react-native-web](git://github.com/necolas/react-native-web.git)
