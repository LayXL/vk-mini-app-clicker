import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import bridge from "@vkontakte/vk-bridge"
import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { App } from "./app.tsx"

import "./index.css"

const queryClient = new QueryClient()
const root = document.getElementById("root")

void bridge.send("VKWebAppInit")

// @ts-ignore
createRoot(root).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </StrictMode>
)
