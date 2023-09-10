"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const IMAGES = {
    iosaA: "ios-aA-icon.jpeg",
    iosWebsiteSettings: "ios-website-settings.jpeg",
    iosMicrophone: "ios-microphone.jpeg",
    iosLocation: "ios-location.jpeg",
    iosAllow: "ios-allow.jpeg",
    androidSettings: "android-settings.jpeg",
    androidPermissions: "android-permissions.jpeg",
    androidAllow: "android-allow.jpeg",
    osxFirefoxAllow: "os-x-firefox-allow.png",
    osxFirefoxPreferencesIcon: "os-x-firefox-preferences-icon.png",
};
const messages = {
    microphone: {
        deniedMessage: "You denied access to the microphone. Please allow access to the microphone to use this feature.",
        steps: [
            // ios / safari
            {
                platform: "ios",
                browser: "safari",
                steps: [
                    {
                        message: "Tap the aA icon in the address bar.",
                        imageName: IMAGES.iosaA,
                    },
                    {
                        message: "Tap 'Website Settings'.",
                        imageName: IMAGES.iosWebsiteSettings,
                    },
                    {
                        message: "Tap 'Microphone'.",
                        imageName: IMAGES.iosMicrophone,
                    },
                    {
                        message: "Tap 'Allow'.",
                        imageName: IMAGES.iosAllow,
                    },
                ],
            },
            // android / chrome
            {
                platform: "android",
                browser: "chrome",
                steps: [
                    {
                        message: "Open the Settings app on your phone and go to Apps and notifications. Scroll down to locate Chrome on the app list.",
                        imageName: IMAGES.androidSettings,
                    },
                    {
                        message: "Next, go to Permissions. Here, you’ll find a list of permissions for Chrome.",
                        imageName: IMAGES.androidPermissions,
                    },
                    {
                        message: "Tap on Microphone and select Allow.",
                        imageName: IMAGES.androidAllow,
                    },
                ],
            },
            {
                platform: "os x",
                browser: "firefox",
                steps: [
                    {
                        message: "Click the preferences icon in the address bar.",
                        imageName: IMAGES.osxFirefoxPreferencesIcon,
                    },
                    {
                        message: "Allow for 'Microphone'.",
                        imageName: IMAGES.osxFirefoxAllow,
                    },
                ],
            },
        ],
    },
    location: {
        deniedMessage: "You denied access to the location. Please allow access to the location to use this feature.",
        steps: [
            // ios / safari
            {
                platform: "ios",
                browser: "safari",
                steps: [
                    {
                        message: "Tap the AA icon in the address bar.",
                        imageName: IMAGES.iosaA,
                    },
                    {
                        message: "Tap 'Website Settings'.",
                        imageName: IMAGES.iosWebsiteSettings,
                    },
                    {
                        message: "Tap 'Location'.",
                        imageName: IMAGES.iosLocation,
                    },
                    {
                        message: "Tap 'Allow'.",
                        imageName: IMAGES.iosAllow,
                    },
                ],
            },
            // android / chrome
            {
                platform: "android",
                browser: "chrome",
                steps: [
                    {
                        message: "Open the Settings app on your phone and go to Apps and notifications. Scroll down to locate Chrome on the app list.",
                        imageName: IMAGES.androidSettings,
                    },
                    {
                        message: " Next, go to Permissions. Here, you’ll find a list of permissions for Chrome.",
                        imageName: IMAGES.androidPermissions,
                    },
                    {
                        message: "Tap on Location and select Allow.",
                        imageName: IMAGES.androidAllow,
                    },
                ],
            },
            //   desktop / os x
            {
                platform: "os x",
                browser: "firefox",
                steps: [
                    {
                        message: "Click the preferences icon in the address bar.",
                        imageName: IMAGES.osxFirefoxPreferencesIcon,
                    },
                    {
                        message: "Allow for 'Location'.",
                        imageName: IMAGES.osxFirefoxAllow,
                    },
                ],
            },
        ],
    },
};
exports.default = messages;
