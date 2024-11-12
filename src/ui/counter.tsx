import NumberFlow from "@number-flow/react"

type CounterProps = {
  value?: number
}

export const Counter = (props: CounterProps) => {
  return (
    <span className={"text-6xl font-bold text-center tabular-nums"}>
      <NumberFlow value={props.value ?? 0} />
    </span>
  )
}
