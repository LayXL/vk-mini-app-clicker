import { motion } from "framer-motion"

type CoinProps = {
  onClick?: () => void
}

export const Coin = (props: CoinProps) => {
  return (
    <motion.div
      initial={{ scale: 1 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.1 }}
      className={"w-full aspect-square bg-amber-500 rounded-full"}
      style={{
        backgroundImage: "url(/coin.svg)",
        backgroundSize: "100%",
      }}
      onClick={props.onClick}
    />
  )
}
