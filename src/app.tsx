import { useAddCounterValueMutation } from "@/hooks/useAddCounterValueMutation.ts"
import { useCounterValueQuery } from "@/hooks/useCounterValueQuery.ts"
import { Coin } from "@/ui/coin.tsx"
import { Counter } from "@/ui/counter.tsx"
import { useQueryClient } from "@tanstack/react-query"
import bridge from "@vkontakte/vk-bridge"
import { useEffect, useRef } from "react"

export const App = () => {
  const queryClient = useQueryClient()

  const counterValueQuery = useCounterValueQuery()
  const addCounterValueMutation = useAddCounterValueMutation({
    onMutate: () => {
      queryClient.setQueryData(
        ["storage", "counter"],
        (prev: number) => (prev ?? 0) + 1
      )
    },
  })

  const musicRef = useRef<HTMLAudioElement>(null)

  useEffect(() => {
    if (musicRef.current) musicRef.current.volume = 0.15
  }, [])

  return (
    <div className="max-w-[360px] w-full flex-1 mx-auto flex flex-col items-center gap-8 px-4 justify-center">
      <audio ref={musicRef}>
        <source
          src="https://five-letters.layxl.dev/sad.mp3"
          type="audio/mpeg"
        />
      </audio>

      <div className={"-mt-[122px]"}>
        <Counter value={counterValueQuery.data} />
      </div>

      <Coin
        onClick={() => {
          void bridge.send("VKWebAppTapticSelectionChanged")

          addCounterValueMutation.mutate()

          if (counterValueQuery.data === 25 && musicRef.current) {
            musicRef.current.pause()
            musicRef.current.currentTime = 0
            musicRef.current.muted = false
            void musicRef.current.play()
          }
        }}
      />
    </div>
  )
}
