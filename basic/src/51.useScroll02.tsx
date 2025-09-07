import { motion, useScroll } from "motion/react";
import { useRef } from "react";

// A small placeholder component to give us some room to scroll.
const Placeholder = () => (
  <div className="shrink-0 bg-slate-300 rounded-lg aspect-video w-[600px] max-w-[80%] opacity-30" />
);

export const App = () => {
  const ref = useRef(null);
  const { scrollXProgress } = useScroll({
    container: ref,
  });

  return (
    <main className="p-2">
      <div className="sticky top-0 m-2 z-10 bg-gray-300">
        <motion.div
          style={{ scaleX: scrollXProgress }}
          className="h-3 w-full bg-[#bc9e7a] origin-left"
        />
      </div>
      <p className="text-white my-6">
        Time to make some progress and start scrolling... 😉
      </p>
      <div ref={ref} className="overflow-x-auto py-2">
        <div className="gap-2 flex">
          <Placeholder />
          <Placeholder />
          <Placeholder />
          <Placeholder />
          <Placeholder />
          <Placeholder />
          <Placeholder />
        </div>
      </div>
    </main>
  );
};

export default App;
