import { motion } from "motion/react";
import { useRef } from "react";

export const App = () => {
  return (
    <div className="text-white px-8">
      <div className="h-screen grid place-items-center">Scroll down :)</div>
      <motion.div
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.2,
            },
          },

          hidden: {
            transition: {
              staggerChildren: 0.2,
              staggerDirection: -1,
            },
          },
        }}
        whileInView="visible"
        initial="hidden"
        animate="hidden"
        /* Ssst. This property isn't there. Just leave it at one, and I'll explain later ;) */
        viewport={{ amount: 1 }}
        className="space-between grid w-full grid-cols-4 justify-center gap-2"
      >
        {[1, 2, 3, 4].map((i) => (
          <motion.div
            variants={{
              visible: {
                opacity: 1,
                x: 0,
              },

              hidden: {
                opacity: 0,
                x: -30,
              },
            }}
            key={i}
            className="bg-[rgba(255,255,255,.3)] aspect-square rounded-xl"
          />
        ))}
      </motion.div>
      <div className="h-screen grid place-items-center">Scroll up :)</div>
    </div>
  );
};

export default App;
