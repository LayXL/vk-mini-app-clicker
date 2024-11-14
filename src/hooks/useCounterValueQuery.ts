import { getStorageValue } from "@/lib/getStorageValue.ts"
import { type UseQueryOptions, useQuery } from "@tanstack/react-query"

export const useCounterValueQuery = (opts?: UseQueryOptions<number>) =>
  useQuery<number>({
    ...opts,
    queryKey: ["storage", "counter"],
    queryFn: async () => {
      const value = await getStorageValue<number>("counter", 0)

      return value ?? 0
    },
  })
