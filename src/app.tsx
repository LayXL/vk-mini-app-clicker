import bridge from "@vkontakte/vk-bridge"
import { useEffect, useRef, useState } from "react"
import { Coin } from "./ui/coin.tsx"
import { Counter } from "./ui/counter.tsx"

export const App = () => {
  const [count, setCount] = useState(0)

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
        <Counter value={count} />
      </div>

      <Coin
        onClick={() => {
          // noinspection JSIgnoredPromiseFromCall
          bridge.send("VKWebAppTapticSelectionChanged")
          setCount((prev) => prev + 1)

          if (count === 25 && musicRef.current) {
            musicRef.current.pause()
            musicRef.current.currentTime = 0
            musicRef.current.muted = false
            musicRef.current.play()
          }
        }}
      />
    </div>
  )
}
