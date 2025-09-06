import { motion } from "motion/react";
import { useState } from 'react';

const App = () => {
  const [isOpened, setIsOpened] = useState(false);

  return (
    <div>
      <button className="bg-white px-8 py-2 rounded-full fixed top-3 left-1/2 -translate-x-1/2 z-20" onClick={() => setIsOpened(open => !open)}>
        {isOpened? "Close" : "Open"} drawer
      </button>

      <motion.div

        variants={{
            "opened": {
                opacity: 1,
                "--x": "0%",
                "--y": "0%"
            },
            closed: {
                opacity: 0,
                "--x": "-100%",
                "--y": "100%"
            }
        }}
        initial="closed"
        animate={
            isOpened ? "opened" : "closed"
        }
        className="translate-y-[var(--y)] md:translate-x-[var(--x)] bg-white w-[90%] max-h-[90%] overflow-auto md:max-w-[500px] fixed left-0 bottom-0 p-5">
        <Skeleton />
      </motion.div>
    </div>
  );
}

export default App;

const Skeleton = () => (
  <>
    <div className="bg-gray-300 w-full aspect-video rounded-2xl mb-4" />
    <div className="bg-gray-300 w-[90%] h-[40px] rounded-2xl mb-2" />
    <div className="bg-gray-300 w-[80%] h-[20px] rounded-2xl mb-2" />
    <div className="bg-gray-300 w-[80%] h-[20px] rounded-2xl mb-2" />
    <div className="bg-gray-300 w-[80%] h-[20px] rounded-2xl mb-2" />
    <div className="flex gap-3 mb-12">
      <div className="bg-gray-300 w-[30%] h-[20px] rounded-2xl" />
      <div className="bg-gray-300 w-[30%] h-[20px] rounded-2xl" />
    </div>

    <div className="bg-gray-300 w-[50%] aspect-[5/1] rounded-2xl" />
  </>
);