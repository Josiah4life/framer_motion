import { motion } from "motion/react";
import { useState } from "react";


const App = () => {
    return (
        <motion.div className="beautiful-drawer translate-y-[var(--y)] md:translate-[var(--x)]" animate={{
            "--x": "0%",
            "--y": "0%",
        }}
        initial={{
            "--x": "-100%",
            "--y": "100%"
        }}
        >
            Beautiful Drawer
        </motion.div>
    )
}

export default App;
