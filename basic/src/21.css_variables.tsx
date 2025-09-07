import {
  motion,
  useMotionValue,
  useTransform,
  useMotionTemplate,
} from "motion/react";

const App = () => {
  const x = useMotionValue(0);
  const scale = useTransform(x, [-100, 0, 100], [1, 1, 1.5]);
  const borderRadius = useTransform(x, [-100, 0, 100], ["50%", "0%", "50%"]);
  const backgroundColor = useTransform(
    x,
    [-100, 0, 100],
    ["#6d4b7e", "#306a87", "#695a37"]
  );
  const scale1 = useMotionValue(2);
  return (
    <div className="flex items-center flex-col gap-8 justify-center h-full text-black">
      <motion.div
        className="bg-white px-4 py-2"
        style={
          {
            "--scale": scale1,
            // transform: "scale(var(--scale))",
          } as React.CSSProperties
        }
      >
        CSS variables are cool!
      </motion.div>

      <motion.ol
        className="flex flex-col gap-3 text-center"
        initial={{ "--x": "0px" }}
        animate={{ "--x": "100px" }}
        transition={{
          repeat: Infinity,
          duration: 1,
          repeatType: "reverse",
        }}
      >
        <li className="bg-white p-5 rounded-2xl translate-x-[var(--x)]">CSS</li>
        <li className="bg-white p-5 rounded-2xl translate-x-[--x]">is</li>
        <li className="bg-white p-5 rounded-2xl translate-x-[--x]">the Best</li>
      </motion.ol>
    </div>
  );
};

export default App;
