import {motion} from "motion/react"

const App = () => {
    return (
        <div className="flex items-center justify-center flex-col text-white w-full h-full hover:cursor-pointer">
          <div className="w-[150px] overflow-hidden flex flex-col relative bg-[#41352a] aspect-[2/4] rounded-2xl text-white">
            <div className="h-full fadeout">
              <motion.div 
                className="text-[80px] [font-family:monospace] leading-[0.8] inset-1 absolute break-all origin-top-left"
                animate={{
                  opacity: [0, 1, 1, 1, 1, 1, 0],
                  scaleX: [1.5, 1.5, 2.5, 2.5, 2.5, 1.5, 1.5],
                  scaleY: [0.75, 0.75, 0.75, 1.5, 1.5, 1.5, 8],
                }}

                transition={{
                  repeat: Infinity,
                  repeatDelay: 1,
                  times: [0, 0.05, 0.2, 0.3, 0.45, 0.7, 1],  //%
                  duration: 3
                }}
                >
                responsive
              </motion.div>
            </div>
            <p className="mt-auto p-2">
              Make your animations works on all devices
            </p>
          </div>
        </div>
    )
}

export default App; 


/**
  <motion.div 
                className="text-[80px] [font-family:monospace] leading-[0.8] inset-1 absolute break-all"
                animate={{
                  opacity: [0, 1, 1, 0, 0]
                }}

                transition={{
                  repeat: Infinity,
                  // repeatDelay: 1,
                  times: [0, 0.25, 0.75, 0.8, 1],
                  duration: 3
                }}
                >
                responsive
              </motion.div>
 */