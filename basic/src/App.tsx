import { stagger } from "motion/react"

// Stronger children is a special property we can add to the "transistion" prop. whenever we're animating with variants.

const containerVariants = {
    hidden: {
        opacity: 0,
        transistion: {
            staggerChildren: 0.1,   //0.1seconds
            staggerDirection: -1
        }
    },

    visible: {
        opacity: 1,
        transistion: {
            staggerChildren: 0.1
        }
    }
}

const App = () => {
    return (
        <div>

        </div>
    )
}

export default App