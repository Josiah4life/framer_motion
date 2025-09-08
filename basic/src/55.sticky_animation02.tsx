import {
  motion,
  useInView,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "motion/react";
import { useRef, useState } from "react";

export const App = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll();

  const scale = useTransform(scrollYProgress, [0, 0.05], [0.8, 1]);
  const xRow1 = useTransform(scrollYProgress, [0.15, 0.83], [0, -300]); //100% / 6 = 16.67% then it means we run the animation
  //between 15% and 83%.
  const xRow2 = useTransform(scrollYProgress, [0.15, 0.83], [0, 300]);
  const xRow3 = useTransform(scrollYProgress, [0.15, 0.83], [0, -400]);
  const opacity = useTransform(scrollYProgress, [0.66, 0.72], [1, 0]);
  const newOpacity = useTransform(scrollYProgress, [0.72, 0.85], [0, 1]);
  const [visible, setVisible] = useState(false);
  useMotionValueEvent(newOpacity, "change", (latest) => {
    setVisible(latest > 0); // show only if opacity > 0
  });

  const x = useTransform(scrollYProgress, [0, 1], [0, 500]);

  return (
    <>
      <div className="h-screen" />
      <div ref={ref} className="h-[300vh]">
        <div className="sticky top-1/2 -translate-y-1/2 text-[68px] text-white overflow-clip space-y-4">
          <motion.div
            style={{ scale, x: xRow1, opacity }}
            className="flex gap-6 justify-center items-center"
          >
            <p>HTML</p>
            <Image id={1} />
            <p>CSS</p>
            <Image id={2} />
            <p>JavaScript</p>
            <Image id={3} />
            <p>TypeScript</p>
            <Image id={4} />
          </motion.div>
          <motion.div
            style={{ scale, x: xRow2, opacity }}
            className="flex gap-6 justify-center items-center"
          >
            <p>Svelte</p>
            <Image id={5} />
            <p>Vue</p>
            <Image id={6} />
            <p>React</p>
            <Image id={7} />
            <p>Angular</p>
            <Image id={8} />
          </motion.div>
          <motion.div
            style={{ scale, x: xRow3, opacity }}
            className="flex gap-6 justify-center items-center"
          >
            <p>Accessibility</p>
            <Image id={9} />
            <p>Performance</p>
            <Image id={10} />
            <p>SEO</p>
            <Image id={11} />
            <p>Semantics</p>
            <Image id={12} />
          </motion.div>

          {/* New content that fades IN */}
          {/* New content that fades IN */}
          {/* <motion.div
            style={{ opacity: newOpacity }}
            className="absolute inset-0 flex flex-col items-center justify-center text-center text-yellow-400"
          >
            <p>✨ New Section Appears ✨</p>
            <p>Now we fade in more content smoothly</p>
          </motion.div> */}

          {/* <motion.div
            style={{ opacity: newOpacity }}
            className="flex gap-6 justify-center items-center"
            animate={{ display: newOpacity.get() === 0 ? "none" : "flex" }}
          >
            ...
          </motion.div> */}

          {visible && (
            <motion.div
              style={{ opacity: newOpacity }}
              className="flex flex-col gap-6 justify-center items-center"
            >
              <p>✨ New Section Appears ✨</p>
              <p>Now we fade in more content smoothly</p>
            </motion.div>
          )}
        </div>
      </div>
      <div className="h-screen" />
    </>
  );
};

const Image = ({ id }: { id: number }) => (
  <img
    className="w-16 h-16 shrink-0 rounded-full"
    src={`https://randomuser.me/api/portraits/women/${id}.jpg`}
    alt="Random user picture"
  />
);

export default App;
