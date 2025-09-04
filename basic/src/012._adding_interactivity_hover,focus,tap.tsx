import {motion} from "motion/react"

const App = () => {
    return (
        <div className="flex items-center justify-center flex-col text-white w-full h-full hover:cursor-pointer">
            <motion.button
            className="h-16 rounded-full px-8 bg-blue-600"
            whileHover={{
                scale: 2
            }}
            whileFocus={{
              scale: 2.2
            }}

            whileTap={{
              scale: 1.7 
            }}

            onTap={}
            onTapStart={}
            onTapCancel={}
            
            >

                Hover me!
            </motion.button>
        </div>
    )
}

export default App;