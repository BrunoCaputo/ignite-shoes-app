import { OneSignal } from "react-native-onesignal";

export function createTagUserEmail(email: string) {
  OneSignal.User.addTag("user_email", email);
}

export function removeTagUserEmail() {
  OneSignal.User.removeTag("user_email");
}

export function createTagUserInfo() {
  OneSignal.User.addTags({});
}

export function updateTagCart(itemsCount: string) {
  OneSignal.User.addTag("cart_items_count", itemsCount);
}
