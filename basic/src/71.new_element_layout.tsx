import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "motion/react";

export const App = () => {
  const [showContent, setShowContent] = useState(false);

  return (
    <div className="grid place-items-center min-h-dvh grid-cols-1 grid-rows-1">
      <AnimatePresence>
        <motion.div layout className="bg-white p-5">
          <motion.button
            layout
            className="bg-black text-white p-2 rounded-xl"
            onClick={() => setShowContent((show) => !show)}
          >
            Toggle content
          </motion.button>
          {showContent && (
            <motion.div
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1 },
              }}
              initial="hidden"
              animate="visible"
              exit="hidden"
            >
              <h1>This text appeared out of nowhere!</h1>
            </motion.div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default App;
