import {motion, scale} from "motion/react"


const App = () => {
  return (
    <div className="flex items-center justify-center min-h-screen w-screen gap-10">
      <motion.div
        className="bg-gray-400 w-24 h-24"
        animate={{
          scale: [1, 2, 2, 1, 1],
          rotate: [0, 0, 180, 180, 0,],
          borderRadius: ["0%", "0%", "50%", "50%", "0%"]
        }}

        transition={{
          ease: "easeInOut",
          repeat: Infinity,
          repeatDelay: 1,
          duration: 5, // To control multiple steps (scales
          times: [0, 0.1, 0.2, 0.5, 1]  // Start time for each animation we can represent this as percent
        }}
      >

      </motion.div>
      <motion.div
        className="bg-amber-800 w-24 h-24"
        animate={{
          scale: [1, 2, 1],
          rotate: [0, 0, 180, 180, 0,],
          borderRadius: ["0%", "0%", "50%", "50%", "0%"]
        }}

        transition={{
          ease: "easeInOut",
          repeat: Infinity,
          repeatDelay: 1,
          duration: 5 // To control multiple steps (scales)
        }}
      >

      </motion.div>
    </div>
  )
}

export default App