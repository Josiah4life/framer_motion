import { useMemo, useState } from "react";
import { motion } from "motion/react";

const steps = ["start", "larger", "wider"];

export const App = () => {
  const [stepIndex, setStepIndex] = useState(0);
  const stepName = useMemo(() => steps[stepIndex], [stepIndex]);

  return (
    <div className="grid place-items-center min-h-dvh grid-cols-1 grid-rows-1">
      <motion.div
        layout
        onClick={() => setStepIndex((stepIndex) => ++stepIndex % steps.length)}
        style={{
          width: stepName !== "start" ? 200 : 100,
          height: stepName === "larger" ? 200 : 100,
        }}
        className="bg-white p-6 cursor-pointer"
      >
        <div className="bg-black rounded-full w-12 h-12" />
      </motion.div>
    </div>
  );
};

export default App;
