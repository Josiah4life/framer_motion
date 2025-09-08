import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

const portfolioLinks = [
  "Google",
  "Facebook",
  "Amazon",
  "Microsoft",
  "Apple",
  "Tesla",
];

export const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <AnimatePresence>
      <div className="flex h-[400px] items-end justify-center">
        <motion.div
          style={{ borderRadius: 12 }}
          layout
          className="flex flex-col bg-white p-4 overflow-clip"
        >
          {isOpen && (
            <motion.div
              layout
              variants={{
                visible: {},
                hidden: {},
              }}
              initial="hidden"
              animate="visible"
              exit="hidden"
              transition={{
                staggerChildren: 0.03,
                delayChildren: 0.2,
              }}
              className="mb-8 grid w-[600px] grid-cols-2 gap-4 *:rounded-xl *:bg-white *:px-4 *:py-2"
            >
              {portfolioLinks.map((linkTitle) => (
                <motion.a
                  variants={{
                    visible: { opacity: 1, y: 0 },
                    hidden: { opacity: 0, y: 20 },
                  }}
                  key={linkTitle}
                  href="#"
                >
                  {linkTitle}
                </motion.a>
              ))}
            </motion.div>
          )}

          <motion.ol
            layout
            className="mx-auto flex gap-4 *:rounded-3xl *:p-2 *:transition-colors *:hover:bg-gray-300"
          >
            <li>
              <a>Home</a>
            </li>
            <li>
              <button
                className="flex items-center gap-1"
                onClick={() => setIsOpen(!isOpen)}
              >
                Portfolio
              </button>
            </li>
            <li>
              <a>Contact</a>
            </li>
          </motion.ol>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default App;
