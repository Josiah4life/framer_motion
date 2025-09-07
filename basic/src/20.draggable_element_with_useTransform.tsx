import { motion, useMotionValue, useTransform } from "motion/react";

const App = () => {
  const x = useMotionValue(0);
  const scale = useTransform(x, [-100, 0, 100], [1, 1, 1.5]); //The last prop is the output.
  const borderRadius = useTransform(x, [-100, 0, 100], ["50%", "0%", "50%"]);
  const backgroundColor = useTransform(
    x,
    [-100, 0, 100],
    ["#6d4b7e", "#306a87", "#695a37"]
  );

  return (
    <div className="flex items-center flex-col gap-8 justify-center h-full ">
      <motion.div
        drag="x"
        style={{ x, scale, borderRadius, backgroundColor }}
        className="w-32 h-32 bg-[#306a87] flex text-white px-3 py-2 rounded-md"
        dragConstraints={{
          left: 0,
          right: 0,
        }}
      ></motion.div>
    </div>
  );
};

export default App;
