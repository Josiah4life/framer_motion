import { motion } from "motion/react";
import { useRef } from "react";

const App = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-2xl text-white">
      <div className="h-screen w-full" />
      <motion.div
        variants={{
          visible: {
            opacity: 1,
            borderRadius: "100%",
          },
          invisible: {
            opacity: 0,
            borderRadius: "25%",
          },
        }}
        viewport={{ amount: 1 }} // Means the whole element must be in-view before it triggers
        whileInView="visible"
        animate="invisible" // Sometimes when dealing with viewport it doesn't go back to it initial state.
        initial="invisible"
        transition={{
          duration: 0.5,
        }}
        className="w-40 h-40 rounded-3xl bg-[rgba(255,255,255,.3)]"
      >
        <motion.div
          variants={{
            visible: {
              background: "#f00",
            },
            invisible: {
              background: "#00f",
            },
          }}
          className="w-20 h-20"
        />
      </motion.div>
      <div className="h-screen w-full" />
    </div>
  );
};

export default App;

const containerRef = useRef<HTMLDivElement>(null);
<motion.div
  viewport={{
    once: true, // This will only trigger the animation once. Regardless if it enters the viewport again or not
    root: containerRef, //use this element as the viewport instead of the browser window when detecting if a motion element is in view.
    amount: 1, // We can use some(default), all(1), number(0 is 0% and 1 is 100%)
    // margin:
  }}
></motion.div>;

{
  /* <div ref={containerRef} className="h-64 overflow-y-scroll">
  <motion.div
    whileInView={{ opacity: 1 }}
    initial={{ opacity: 0 }}
    viewport={{ root: containerRef }}
  >
    I fade in when scrolled into view inside the container!
  </motion.div>
</div> */
}
