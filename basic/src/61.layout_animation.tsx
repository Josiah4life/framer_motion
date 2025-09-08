import { motion } from "motion/react";
import { useState } from "react";

const App = () => {
  const [isLarge, setIsLarge] = useState(false);

  return (
    <div className="grid place-items-center h-dvh">
      <motion.div
        onClick={() => setIsLarge((large) => !large)}
        layout
        style={{
          height: isLarge ? 80 : "auto",
        }}
        className="bg-white p-3 w-48"
      ></motion.div>
    </div>
  );
};

export default App;
