import { useState } from "react"

export const App = () => {
  const [count, setCount] = useState(0)

  return (
    <div>
      <p>{count}</p>
      <button
        type={"button"}
        onClick={() => {
          setCount((prev) => prev + 1)
        }}
      >
        Click
      </button>
    </div>
  )
}
