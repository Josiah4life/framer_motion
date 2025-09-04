import {motion, scale} from "motion/react"
import { forwardRef } from "react"


const Button = forwardRef<HTMLButtonElement, React.ComponentProps<"button">>((props, ref) => {
  return <button ref={ref}>...</button>
})

const Motion = motion(Button)
// That will make the button to become a framer component.

const App = () => {
  return (
    <div className="flex items-center justify-center min-h-screen text-lg w-screen">
      <motion.button 
        className="bg-black p-3 rounded-sm" 
        // animate={{
        // backgroundColor: "#f00",
        // color: "#0f0",
        // // transform: "scale(2) translateY(50px) "
        // scale: 2,
        // // y: -50,
        // rotate: 1800,
        //     }}

        animate={{
          scaleX: 2,
          scaleY: 2,
          y: "50%"
        }}

        initial ={{
          backgroundColor: "#00f"
        }}
        transition={{
          // delay: 2,
          ease: "easeInOut",
          repeat: Infinity,
          repeatDelay: 0.5,
          repeatType: "reverse",
          // type: "spring", // when not specifying the type of transistion.
          // bounce: 40,
          // damping: 10,
          // mass: 3,
          // stiffness: 30,
          // velocity: 100

          scaleX: {
            delay: 2,
            repeatDelay: 2,
            repeat: Infinity,
            ease: "easeIn"
          },

          scaleY: {
            delay: 4,
            repeatDelay: 4,
            ease: "easeOut"
          }
        }}
        >
        Hello World
      </motion.button>
    </div>
  )
}


export default App;