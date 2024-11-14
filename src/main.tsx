import { App } from "@/app"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import bridge from "@vkontakte/vk-bridge"
import { StrictMode } from "react"
import { createRoot } from "react-dom/client"

import "./index.css"

export let isVK = false

const queryClient = new QueryClient()
const root = document.getElementById("root")

const render = () => {
  // @ts-ignore
  createRoot(root).render(
    <StrictMode>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </StrictMode>
  )
}

bridge.send("VKWebAppInit").then(() => {
  isVK = true
  render()
})

setTimeout(() => {
  if (!isVK) render()
}, 500)
