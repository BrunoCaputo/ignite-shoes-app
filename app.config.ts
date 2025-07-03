import "dotenv/config";

export default {
  expo: {
    name: "Ignite Shoes App",
    slug: "igniteshoesapp",
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
      oneSignalAppId: process.env.ONE_SIGNAL_APP_ID,
    },
  },
};
