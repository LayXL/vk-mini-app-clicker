import bridge from "@vkontakte/vk-bridge"
import React from "react"
import { createRoot } from "react-dom/client"
import { App } from "./app.tsx"

import "./index.css"

const root = document.getElementById("root")

// noinspection JSIgnoredPromiseFromCall
bridge.send("VKWebAppInit")

// @ts-ignore
createRoot(root).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
