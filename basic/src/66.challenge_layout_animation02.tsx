import { useState } from "react";
import { motion } from "motion/react";

export const App = () => {
  const [isSmall, setIsSmall] = useState(true);

  return (
    <div className="grid h-dvh w-full place-items-center">
      <motion.div
        layout
        onClick={() => setIsSmall((s) => !s)}
        className="bg-white relative grid h-[200px] cursor-pointer place-items-center"
        style={{
          width: isSmall ? 200 : 400,
          height: isSmall ? 200 : 400,
        }}
        animate={{
          borderRadius: isSmall ? 20 : 50,
        }}
      >
        <motion.span layout className="block">
          Click me 👀
        </motion.span>
      </motion.div>
    </div>
  );
};

export default App;
