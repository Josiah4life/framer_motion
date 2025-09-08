import { useState } from "react";
import { motion } from "motion/react";

export const App = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="grid place-items-center min-h-screen">
      <motion.div
        layout
        onClick={() => setIsExpanded((prev) => !prev)}
        className="bg-white p-6 cursor-pointer"
        style={{
          width: isExpanded ? 300 : 150,
          height: isExpanded ? 200 : 100,
        }}
      >
        <motion.h1
          layout
          style={{
            fontSize: isExpanded ? "2rem" : "1rem",
            fontWeight: isExpanded ? "bold" : "normal",
          }}
        >
          Click to toggle size
        </motion.h1>
      </motion.div>
    </div>
  );
};

export default App;
