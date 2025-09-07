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
