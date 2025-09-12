import { useMemo, useState } from "react";
import { motion } from "motion/react";

const steps = ["start", "larger", "wider"];

export const App = () => {
  const [stepIndex, setStepIndex] = useState(0);
  const stepName = useMemo(() => steps[stepIndex], [stepIndex]);
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      layout
      onClick={() => setOpen(!open)}
      className="w-52 bg-blue-300 p-[20px] m-5 rounded-[10px] cursor-pointer"
    >
      {open && <motion.p layout>I smoothly appeared</motion.p>}
    </motion.div>
  );
};

export default App;
