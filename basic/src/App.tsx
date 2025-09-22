import { useState } from "react";
import { motion } from "motion/react";

export const App = () => {
  /**
   * Like explained earlier: In the real world you probably have the state
   * of a router to tell you the active url. And on click you would update the state
   * in the router, which would then also show the correct active item.
   *
   * To simplify this example we keep track of the clicked index.
   */
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="grid place-items-center min-h-dvh">
      <ul className="bg-white rounded-xl flex gap-3 px-3 py-2">
        <li className="relative px-2 py-1" onClick={() => setActiveIndex(0)}>
          <a className="z-10 relative" href="#">
            Home
          </a>
          {activeIndex === 0 && (
            <motion.span
              layoutId="indicators"
              className="block rounded-full bg-gray-300 inset-0 absolute"
            />
          )}
        </li>
        <li className="relative px-2 py-1" onClick={() => setActiveIndex(1)}>
          <a className="z-10 relative" href="#">
            About
          </a>
          {activeIndex === 1 && (
            <motion.span
              layoutId="indicators"
              className="block rounded-full bg-gray-300 inset-0 absolute"
            />
          )}
        </li>
        <li className="relative px-2 py-1" onClick={() => setActiveIndex(2)}>
          <a className="z-10 relative" href="#">
            Contact
          </a>
          {activeIndex === 2 && (
            <motion.span
              layoutId="indicators"
              className="block rounded-full bg-gray-300 inset-0 absolute"
            />
          )}
        </li>
      </ul>
    </div>
  );
};

export default App;
