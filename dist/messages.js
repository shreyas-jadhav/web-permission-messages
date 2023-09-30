"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
const en = {
    microphoneDeniedMessage: `Permission to Microphone was denied. Please allow access to the microphone to use this feature.`,
    tapAaIcon: `Tap the aA icon in the address bar.`,
    tapWebsiteSettings: `Tap 'Website Settings'.`,
    tapMicrophone: `Tap 'Microphone'.`,
    tapAllow: `Tap 'Allow'.`,
    clickLockIcon: `Click the lock icon in the address bar.`,
    goToPermissions: `Next, go to Permissions.`,
    listOfPermissionsChrome: `Here, you’ll find a list of permissions for Chrome.`,
    changeToAllow: `Change to Allow.`,
    clickPreferencesIcon: `Click the preferences icon in the address bar.`,
    allowForMicrophone: `Allow for 'Microphone'.`,
    locationDeniedMessage: `Permission to location was denied. Please allow access to the location to use this feature.`,
    tapLocation: `Tap 'Location'.`,
    allowForLocation: `Allow for 'Location'.`,
};
// other languages
// spanish
const es = {
    microphoneDeniedMessage: `Se denegó el permiso para el micrófono. Por favor, permita el acceso al micrófono para usar esta función.`,
    tapAaIcon: `Toque el icono aA en la barra de direcciones.`,
    tapWebsiteSettings: `Toque 'Configuración del sitio web'.`,
    tapMicrophone: `Toque 'Micrófono'.`,
    tapAllow: `Toque 'Permitir'.`,
    clickLockIcon: `Haga clic en el icono de bloqueo en la barra de direcciones.`,
    goToPermissions: `A continuación, vaya a Permisos.`,
    listOfPermissionsChrome: `Aquí encontrará una lista de permisos para Chrome.`,
    changeToAllow: `Cambie a Permitir.`,
    clickPreferencesIcon: `Haga clic en el icono de preferencias en la barra de direcciones.`,
    allowForMicrophone: `Permitir para 'Micrófono'.`,
    locationDeniedMessage: `Se denegó el permiso para la ubicación. Por favor, permita el acceso a la ubicación para usar esta función.`,
    tapLocation: `Toque 'Ubicación'.`,
    allowForLocation: `Permitir para 'Ubicación'.`,
};
const allLocales = {
    en,
    es,
};
const messages = (locale) => {
    const strings = allLocales[locale] || en;
    return {
        microphone: {
            deniedMessage: strings.microphoneDeniedMessage,
            steps: [
                // ios / safari
                {
                    platform: "ios",
                    browser: "safari",
                    steps: [
                        {
                            message: strings.tapAaIcon,
                            imageName: IMAGES.iosaA,
                        },
                        {
                            message: strings.tapWebsiteSettings,
                            imageName: IMAGES.iosWebsiteSettings,
                        },
                        {
                            message: strings.tapMicrophone,
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
                            message: strings.clickLockIcon,
                            imageName: IMAGES.androidLockIcon,
                        },
                        {
                            message: strings.goToPermissions,
                            imageName: IMAGES.androidPermissions,
                        },
                        {
                            message: strings.listOfPermissionsChrome,
                            imageName: IMAGES.androidPermissionList,
                        },
                        {
                            message: strings.changeToAllow,
                            imageName: IMAGES.androidAllow,
                        },
                    ],
                },
                {
                    platform: "os x",
                    browser: "firefox",
                    steps: [
                        {
                            message: strings.clickPreferencesIcon,
                            imageName: IMAGES.osxFirefoxPreferencesIcon,
                        },
                        {
                            message: strings.allowForMicrophone,
                            imageName: IMAGES.osxFirefoxAllow,
                        },
                    ],
                },
            ],
        },
        location: {
            deniedMessage: strings.locationDeniedMessage,
            steps: [
                // ios / safari
                {
                    platform: "ios",
                    browser: "safari",
                    steps: [
                        {
                            message: strings.tapAaIcon,
                            imageName: IMAGES.iosaA,
                        },
                        {
                            message: strings.tapWebsiteSettings,
                            imageName: IMAGES.iosWebsiteSettings,
                        },
                        {
                            message: strings.tapLocation,
                            imageName: IMAGES.iosLocation,
                        },
                        {
                            message: strings.changeToAllow,
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
                            message: strings.clickLockIcon,
                            imageName: IMAGES.androidLockIcon,
                        },
                        {
                            message: strings.goToPermissions,
                            imageName: IMAGES.androidPermissions,
                        },
                        {
                            message: strings.listOfPermissionsChrome,
                            imageName: IMAGES.androidPermissionList,
                        },
                        {
                            message: strings.changeToAllow,
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
                            message: strings.clickPreferencesIcon,
                            imageName: IMAGES.osxFirefoxPreferencesIcon,
                        },
                        {
                            message: strings.allowForLocation,
                            imageName: IMAGES.osxFirefoxAllow,
                        },
                    ],
                },
            ],
        },
    };
};
exports.default = messages;
