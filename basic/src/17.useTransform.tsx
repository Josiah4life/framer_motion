import { motion, useMotionValue, useTransform} from "motion/react";

const App = () => {
  //To use our custom motion value we can include that in the style properties instead of animate props. i.e style={{scale}}
  const sliderValue = useMotionValue(2);
  const opacity = useTransform(sliderValue, [1, 5], [0, 1]); 
  //This useTransform takes three values and the first is MotionValue
  // Second is the range of the motionvalue 
  // The last is the opacity value.. at 1 its 0% opacity 5 it's 100%.

  
  // const scale01 = useSpring(1, {
  //   stiffness: 200,  //spring strength higher = faster
  //   damping: 2,  // energy loss higher = less bouncer
  //   mass: 10,  // heavier moves more slowly.
  //   // velocity: 0
  // });
  const onRangeChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
    sliderValue.set(parseFloat(ev.target.value));
  }
  
  return (
    <div className="flex items-center flex-col gap-80 justify-center h-full ">

      <div className="">
        <motion.button
          className="bg-black text-white px-3 py-2 rounded-md"
          style={{
            scale: sliderValue,
            opacity
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
