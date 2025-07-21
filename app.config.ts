import "dotenv/config";

export default {
  expo: {
    name: "Ignite Shoes App",
    slug: "igniteshoesapp",
    scheme: "igniteshoesapp",
    version: "1.0.0",
    orientation: "portrait",
    icon: "./assets/icon.png",
    newArchEnabled: true,
    splash: {
      image: "./assets/splash.png",
      resizeMode: "contain",
      backgroundColor: "#121214",
    },
    ios: {
      supportsTablet: true,
      bundleIdentifier: "com.anonymous.igniteshoesapp",
    },
    android: {
      adaptiveIcon: {
        foregroundImage: "./assets/adaptive-icon.png",
        backgroundColor: "#121214",
      },
      package: "com.anonymous.igniteshoesapp",
    },
    web: {
      favicon: "./assets/favicon.png",
    },
    plugins: [
      "expo-font",
      [
        "onesignal-expo-plugin",
        {
          mode: "development",
        },
      ],
    ],
    extra: {
      oneSignalAndroidAppId: process.env.ONE_SIGNAL_ANDROID_APP_ID,
      oneSignalIosAppId: process.env.ONE_SIGNAL_IOS_APP_ID,
    },
  },
};
