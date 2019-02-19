/* global window */

import {
    createElement,
    StyleSheet,
    View
} from 'react-native-web'

import PropTypes from 'prop-types'
import React, { Component } from 'react';

import resolveAssetSource from './resolveAssetSource';
import RTCViewResizeMode from './RTCViewResizeMode';


const STATUS_ERRORED = 'ERRORED';
const STATUS_LOADED = 'LOADED';
const STATUS_LOADING = 'LOADING';
const STATUS_PENDING = 'PENDING';
const STATUS_IDLE = 'IDLE';

const RTCViewSourcePropType = PropTypes.oneOfType([
    PropTypes.shape({
        uri: PropTypes.string.isRequired
    }),
    PropTypes.string
]);


class RTCView extends Component {
  render() {
    const {mirror, objectFit, srcObject, zOrder} = this.props;

    return createElement('video', {srcObject});
  }
}
Object.defineProperties(RTCView,
{
  displayName:
  {
    configurable: true,
    enumerable: true,
    writable: true,
    value: 'RTCView'
  },
  propTypes:
  {
    configurable: true,
    enumerable: true,
    writable: true,
    value: {
      /**
       * Indicates whether the video specified by {@link #streamURL} should be
       * mirrored during rendering. Commonly, applications choose to mirror the
       * user-facing camera.
       */
      mirror: PropTypes.bool,

      /**
       * In the fashion of
       * https://www.w3.org/TR/html5/embedded-content-0.html#dom-video-videowidth
       * and https://www.w3.org/TR/html5/rendering.html#video-object-fit,
       * resembles the CSS style object-fit.
       */
      objectFit: PropTypes.oneOf(['contain', 'cover']),

      srcObject: PropTypes.shape({
        addTrack: PropTypes.func.isRequired,
        removeTrack: PropTypes.func.isRequired
      }),

      /**
       * Similarly to the CSS property z-index, specifies the z-order of this
       * RTCView in the stacking space of all RTCViews. When RTCViews overlap,
       * zOrder determines which one covers the other. An RTCView with a larger
       * zOrder generally covers an RTCView with a lower one.
       *
       * Non-overlapping RTCViews may safely share a z-order (because one does not
       * have to cover the other).
       *
       * The support for zOrder is platform-dependent and/or
       * implementation-specific. Thus, specifying a value for zOrder is to be
       * thought of as giving a hint rather than as imposing a requirement. For
       * example, video renderers such as RTCView are commonly implemented using
       * OpenGL and OpenGL views may have different numbers of layers in their
       * stacking space. Android has three: a layer bellow the window (aka
       * default), a layer bellow the window again but above the previous layer
       * (aka media overlay), and above the window. Consequently, it is advisable
       * to limit the number of utilized layers in the stacking space to the
       * minimum sufficient for the desired display. For example, a video call
       * application usually needs a maximum of two zOrder values: 0 for the
       * remote video(s) which appear in the background, and 1 for the local
       * video(s) which appear above the remote video(s).
       */
      zOrder: PropTypes.number
    }
  },
  defaultProps:
  {
    configurable: true,
    enumerable: true,
    writable: true,
    value: {}
  },
  resizeMode:
  {
    configurable: true,
    enumerable: true,
    writable: true,
    value: RTCViewResizeMode
  }
})

const styles = StyleSheet.create({
    initial: {
        alignSelf: 'flex-start',
        backgroundColor: 'transparent',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
    },
    video: {
        borderWidth: 0,
        height: 'auto',
        maxHeight: '100%',
        maxWidth: '100%',
        opacity: 0
    },
    children: {
        bottom: 0,
        left: 0,
        position: 'absolute',
        right: 0,
        top: 0
    }
});

const resizeModeStyles = StyleSheet.create({
    center: {
        backgroundSize: 'auto',
        backgroundPosition: 'center'
    },
    contain: {
        backgroundSize: 'contain'
    },
    cover: {
        backgroundSize: 'cover'
    },
    none: {
        backgroundSize: 'auto'
    },
    repeat: {
        backgroundSize: 'auto',
        backgroundRepeat: 'repeat'
    },
    stretch: {
        backgroundSize: '100% 100%'
    }
});


export default RTCView;
