import { isVK } from "@/main"
import bridge from "@vkontakte/vk-bridge"
import superjson from "superjson"

export const setStorageValue = async <T>(key: string, value: T) => {
  return isVK
    ? void bridge.send("VKWebAppStorageSet", {
        key,
        value: superjson.stringify(value),
      })
    : window.localStorage.setItem(key, superjson.stringify(value))
}
