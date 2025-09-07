import { motion, useScroll, useMotionValueEvent } from "motion/react";
import { useRef, useState } from "react";

export const App = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });
  const [y, setY] = useState(0);

  useMotionValueEvent(scrollYProgress, "change", (y: number) =>
    setY(Number(y.toFixed(2)))
  );

  //Props we can pass to useScroll hooks.

  //container: window .. this container is the scrollable element that we're tracking the scroll position within.
  //target: scollable area of container.

  return (
    <div className="flex justify-center min-h-[300vh] text-2xl text-white">
      <div className="fixed top-0">{y}</div>

      <div
        ref={ref}
        className="bg-gray-300 w-1/2 h-[50vh] rounded-2xl mt-[110vh]"
      ></div>
    </div>
  );
};

export default App;
