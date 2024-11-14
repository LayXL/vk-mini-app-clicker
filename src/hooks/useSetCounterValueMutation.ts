import { setStorageValue } from "@/lib/setStorageValue.ts"
import { type UseMutationOptions, useMutation } from "@tanstack/react-query"

export const useSetCounterValueMutation = (
  opts?: UseMutationOptions<unknown, unknown, number>
) =>
  useMutation({
    ...opts,
    mutationKey: ["storage", "counter"],
    mutationFn: (value: number) => setStorageValue("counter", value),
  })
