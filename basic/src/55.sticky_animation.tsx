import { useRef, useState } from "react";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "motion/react";

const App = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    container: ref,
  });

  const [yPosition, setYPosition] = useState(0);
  const [xPosition, setXPosition] = useState("");
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const sety = useMotionValueEvent(scrollYProgress, "change", (p) =>
    setYPosition(Number(p))
  );
  const setx = useMotionValueEvent(x, "change", (p) => setXPosition(p));

  return (
    <div
      ref={ref}
      className="border-white max-h-[400px] overflow-auto border text-white bg-white/70"
    >
      <div className="min-h-[100px] text-center text-2xl">
        Scroll this example 👇
      </div>
      <div className="sticky top-10">
        Yposition is {yPosition}
        Xposition is {xPosition}
      </div>
      <div className="bg-white-opaque grid h-[800px] grid-cols-2 items-start gap-3 rounded-3xl border border-red-700 p-3">
        <motion.div
          style={{
            x,
          }}
          className="sticky top-0 rounded-2xl bg-black p-3"
        >
          Sticky div
        </motion.div>
        <div className="rounded-2xl bg-black p-3">Not so sticky div</div>
      </div>
      <div className="h-[500px]">
        Some content after, that is taller than our scrollable section.
      </div>
    </div>
  );
};

export default App;
