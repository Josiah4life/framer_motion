import { motion } from "motion/react";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

// Stronger children is a special property we can add to the "transistion" prop. whenever we're animating with variants.

const containerVariants = {
    hidden: {
        opacity: 0,
        transition: {
            staggerChildren: 0.1, //0.1seconds
            staggerDirection: -1, // 1 or -1  either from first to the last or last to the first.
            // Another props when: "afterChildren" takes either before or after Children
            // can add delay in case we dont want to animate immediately after.
        },
    },

    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        },
    },
};

const menuItems = ["Home", "Invoices", "Usage", "Profile", "Settings"];

const App = () => {
    const [navigationIsVisible, setNavigationIsVisible] = useState(false);

    return (
        <motion.div
            initial="hidden"
            animate={navigationIsVisible ? "visible" : "hidden"}
            variants={{
                hidden: {
                    width: 74,
                    transition: {
                        staggerChildren: 0.1,
                        staggerDirection: -1,
                        // delay: 0.4
                        delay: (menuItems.length - 2) * 0.1 
                    },
                },
                visible: {
                    width: 200,
                    transition: {
                        staggerChildren: 0.1,
                    },
                },
                show: { opacity: 1 },
                close: { opacity: 0 },
            }}
            className="bg-[rgba(10,10,10,.8)] h-screen p-3 text-white"
        >
            <button
                className="bg-white/5 border border-black rounded-md p-3 mb-4 cursor-pointer"
                onClick={() => setNavigationIsVisible((visible) => !visible)}
            >
                <span className="sr-only">Toggle navigation</span>
                <GiHamburgerMenu />
            </button>

            <nav>
                <ul>
                    {menuItems.map((item) => (
                        <motion.li
                            variants={{
                                hidden: { opacity: 0, x: -20,},
                                visible: { opacity: 1, x: 0,  },
                            }}
                            key={item}
                            className=" py-3 hover:bg-white/5 px-3 rounded-md transition-colors"
                        >
                            {item}
                        </motion.li>
                    ))}
                </ul>
            </nav>
        </motion.div>
    );
};

export default App;
