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
    target: ref,
    offset: ["start end", "end end"],
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div className="border-white-opaque max-h-[400px] border text-white">
      <div className="min-h-[50vh] text-center text-2xl">
        Scroll this example 👇
      </div>
      <div
        className="bg-white/50 grid h-[200vh] grid-cols-2 items-start gap-3 rounded-3xl p-3"
        ref={ref}
      >
        <motion.div
          style={{ x }}
          className="sticky top-4 rounded-2xl bg-white text-black p-3"
        >
          Sticky div
        </motion.div>
        <div className="rounded-2xl bg-black p-3">Not so sticky div</div>
      </div>
      <div className="h-screen">
        Some content after, that is taller than our scrollable section.
      </div>
    </div>
  );
};

export default App;

//offset: [start, end]
/**
start -> when scrollYProgrss = 0
end -> when scrollYProgress = 1

Each string  "<target-edge> <container-edge>"
Target edge = "start" | "center" | "end" → describes the tracked element (our ref div).
Container edge = "start" | "center" | "end" → describes the container’s viewport (usually the screen, unless we set container).
 */

/**
"start center" → progress = 0
Means: when the start (top) of the target hits the center of the viewport.

"end start" → progress = 1
Means: when the end (bottom) of the target hits the start (top) of the viewport.
 */

/**
["start end", "end start"]
Start when the top of the target hits the bottom of the viewport.
End when the bottom of the target hits the top of the viewport.
 */

/**
["start start", "end end"]
Start when top of target hits top of viewport.
End when bottom of target hits bottom of viewport.
 */
