const IMAGES = {
  iosaA: "ios-aA-icon.jpeg",
  iosWebsiteSettings: "ios-website-settings.jpeg",
  iosMicrophone: "ios-microphone.jpeg",
  iosLocation: "ios-location.jpeg",
  iosAllow: "ios-allow.jpeg",
  androidLockIcon: "android-lock-icon.png",
  androidPermissions: "android-select-permissions.png",
  androidPermissionList: "android-select-required-permission.png",
  androidAllow: "android-change-to-allow.png",
  osxFirefoxAllow: "os-x-firefox-allow.png",
  osxFirefoxPreferencesIcon: "os-x-firefox-preferences-icon.png",
};
const messages = {
  microphone: {
    deniedMessage:
      "Permission to Microphone was denied. Please allow access to the microphone to use this feature.",
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
            message: "Select the Lock icon in the address bar.",
            imageName: IMAGES.androidLockIcon,
          },
          {
            message: "Next, go to Permissions. ",
            imageName: IMAGES.androidPermissions,
          },
          {
            message:
              "Here, you’ll find a list of permissions for Chrome. Tap on Microphone.",
            imageName: IMAGES.androidPermissionList,
          },
          {
            message: "Change to Allow.",
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
    deniedMessage:
      "Permission to location was denied. Please allow access to the location to use this feature.",
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
            message: "Select the Lock icon in the address bar.",
            imageName: IMAGES.androidLockIcon,
          },
          {
            message: "Next, go to Permissions. ",
            imageName: IMAGES.androidPermissions,
          },
          {
            message:
              "Here, you’ll find a list of permissions for Chrome. Tap on Location.",
            imageName: IMAGES.androidPermissionList,
          },
          {
            message: "Change to Allow.",
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

export default messages;
