import { Platform, StatusBar } from "react-native";
import { NativeBaseProvider } from "native-base";
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";
import { NotificationClickEvent, OneSignal } from "react-native-onesignal";

import { env } from "./src/env/env";
import { Routes } from "./src/routes";

import { THEME } from "./src/theme";
import { Loading } from "./src/components/Loading";

import { CartContextProvider } from "./src/contexts/CartContext";
import { createTagUserEmail } from "./src/notifications/notificationsTags";
import { useEffect } from "react";

const oneSignalAppId =
  Platform.OS === "ios" ? env.oneSignalIosAppId : env.oneSignalAndroidAppId;
OneSignal.initialize(oneSignalAppId);
OneSignal.Notifications.requestPermission(true);

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });

  createTagUserEmail("test@email.com");

  useEffect(() => {
    const handleNotificationClick = (event: NotificationClickEvent): void => {
      const { actionId } = event.result;

      switch (actionId) {
        case "1":
          console.log("Action 1");
          break;
        case "2":
          console.log("Action 2");
          break;
        default:
          console.log("None");
          break;
      }
    };

    OneSignal.Notifications.addEventListener("click", handleNotificationClick);

    return () =>
      OneSignal.Notifications.removeEventListener(
        "click",
        handleNotificationClick
      );
  }, []);

  return (
    <NativeBaseProvider theme={THEME}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <CartContextProvider>
        {fontsLoaded ? <Routes /> : <Loading />}
      </CartContextProvider>
    </NativeBaseProvider>
  );
}
