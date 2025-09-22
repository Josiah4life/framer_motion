"use client";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";

const stats = [
  { num: 12, text: "Years of experience" },
  { num: 26, text: "Projects Completed" },
  { num: 8, text: "Technologies Mastered" },
  { num: 500, text: "Code Commits" },
];

const Stats = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });

  if (inView) {
    controls.start("visible");
  }

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { staggerChildren: 0.2, duration: 0.6 },
        },
      }}
      className="grid grid-cols-2 md:grid-cols-4 gap-6"
    >
      {stats.map((item, index) => (
        <motion.div
          key={index}
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0 },
          }}
          className="flex flex-col items-center"
        >
          {inView && (
            <CountUp
              end={item.num}
              duration={2}
              className="text-4xl xl:text-6xl font-extrabold"
            />
          )}
          <p className="text-lg text-gray-600">{item.text}</p>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default Stats;
