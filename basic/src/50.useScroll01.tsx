import { motion, useScroll, useSpring } from "motion/react";

// A small placeholder component to give us some room to scroll.
const Placeholder = () => (
  <div className="bg-slate-300 rounded-lg aspect-video w-[600px] max-w-[80%] opacity-30" />
);

export const App = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress);
  return (
    <main>
      <div className="sticky top-0 p-2 z-10">
        <motion.div
          style={{
            scaleX,
          }}
          className="h-3 w-full bg-[#bc9e7a] origin-left"
        />
      </div>
      <div className="space-y-2 flex flex-col items-center">
        <p className="text-white my-6">
          Time to make some progress and start scrolling... 😉
        </p>
        <Placeholder />
        <Placeholder />
        <Placeholder />
        <Placeholder />
        <Placeholder />
        <Placeholder />
        <Placeholder />
      </div>
    </main>
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
