import {
  motion,
  useMotionValue,
  useMotionValueEvent,
  useScroll,
} from "motion/react";
import { useState } from "react";

// export default function App() {
//   const x = useMotionValue(0);

//   // Subscribe to changes
//   useMotionValueEvent(x, "change", (latest) => {
//     console.log("x changed to:", latest);
//   });

//   return (
//     <motion.div drag="x" style={{ x }} className="w-32 h-32 bg-blue-500" />
//   );
// }

export const App = () => {
  const { scrollYProgress, scrollXProgress, scrollX, scrollY } = useScroll();

  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [xProgress, setXProgress] = useState(0);
  const [yProgress, setYProgress] = useState(0);

  useMotionValueEvent<number, "change">(scrollX, "change", (x) => setX(x)); //useMotionValueEvent(motionValue, eventName, callback)
  useMotionValueEvent<number, "change">(scrollY, "change", (y) => setY(y));
  useMotionValueEvent<number, "change">(scrollXProgress, "change", (xp) =>
    setXProgress(xp)
  );
  useMotionValueEvent<number, "change">(scrollYProgress, "change", (yp) =>
    setYProgress(yp)
  );

  return (
    <div className="flex items-center min-h-[300vh] justify-center h-full text-white">
      <div className="fixed top-0">
        x: {x}
        <br />
        y: {y}
        <br />
        xProgress: {xProgress}
        <br />
        yProgress: {yProgress}
        <br />
      </div>
      Hello World
    </div>
  );
};

export default App;
