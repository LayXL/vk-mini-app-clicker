import { isIframe } from "@/lib/isIframe.ts"
import bridge from "@vkontakte/vk-bridge"
import superjson from "superjson"

export const getStorageValue = async <T>(
  key: string,
  defaultValue?: T
): Promise<T | undefined> => {
  try {
    if (isIframe()) {
      const data = await bridge.send("VKWebAppStorageGet", { keys: [key] })
      const value = data.keys[0].value

      if (value === "") return defaultValue
      return superjson.parse(data.keys[0].value)
    }

    const data = window.localStorage.getItem(key)

    if (!data) return defaultValue
    return superjson.parse(data)
  } catch (e) {
    return defaultValue
  }
}
