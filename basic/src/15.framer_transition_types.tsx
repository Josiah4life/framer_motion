import { motion, useMotionValue, useSpring } from "motion/react";

const App = () => {
  //To use our custom motion value we can include that in the style properties instead of animate props. i.e style={{scale}}
  const scale = useMotionValue(2);
  const scale01 = useSpring(1, {
    stiffness: 200,  //spring strength higher = faster
    damping: 2,  // energy loss higher = less bouncer
    mass: 10,  // heavier moves more slowly.
    // velocity: 0
  });
  const onRangeChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
    scale01.set(parseFloat(ev.target.value));
  }
  
  return (
    <div className="flex items-center flex-col gap-80 justify-center h-full ">
      <div className="">
        <motion.div
          className="rounded-full w-32 h-12 bg-blue-600"
          style={{ scale }}

          // transition={{
          //   duration: 5
          // }}
        ></motion.div>
      </div>

      <div className="">
        <motion.button
          className="bg-black text-white px-3 py-2 rounded-md"
          style={{
            scale: scale01
          }}
          // transition={{
          //   type: "spring",
          //   damping: 3
          // }}
        >
            Scale ⚖️
        </motion.button>
        <div className="fixed bottom-6 left-1/2 p-3 bg-white/10 -translate-x-1/2 rounded-xl flex items-center justify-center">
          <input
            type="range"
            min={0.5}
            max={5}
            step={0.01}
            defaultValue={1}
            onChange={onRangeChange}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
