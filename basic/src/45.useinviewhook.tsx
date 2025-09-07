import { motion, useInView } from "motion/react";
import { useRef } from "react";

export const App = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 1 });

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="fixed top-0">{`${isInView}`}</div>
      <div className="h-screen" />
      <div ref={ref} className="text-5xl">
        📸
      </div>
      <div className="h-screen" />
    </div>
  );
};

export default App;
