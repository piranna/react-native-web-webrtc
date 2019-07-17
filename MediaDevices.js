'use strict';

class MediaDevices {
    getUserMedia(constraints) {
        return navigator.mediaDevices.getUserMedia(constraints);
    }
}

export default new MediaDevices;
