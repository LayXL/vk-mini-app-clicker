import { getStorageValue } from "@/lib/getStorageValue.ts"
import { setStorageValue } from "@/lib/setStorageValue.ts"
import { type UseMutationOptions, useMutation } from "@tanstack/react-query"

export const useAddCounterValueMutation = (opts?: UseMutationOptions) =>
  useMutation({
    ...opts,
    mutationKey: ["storage", "counter"],
    mutationFn: async () => {
      const newValue = ((await getStorageValue<number>("counter", 0)) ?? 0) + 1

      await setStorageValue("counter", newValue)

      return newValue
    },
  })
