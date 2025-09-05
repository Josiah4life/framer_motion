import { motion, useMotionValue } from "motion/react";

const App = () => {
  
  const x = useMotionValue(0)


  return (
    <div className="flex items-center flex-col gap-8 justify-center h-full ">
      <motion.div 
      drag="x"
      dragConstraints={{
        left: 0,
        right: 0,
      }}

      style={{ x }}
      className="bg-blue-800 text-white px-3 py-2 rounded-md"
      >
        Drag Me
      </motion.div>
    </div>
  );
};

export default App;
