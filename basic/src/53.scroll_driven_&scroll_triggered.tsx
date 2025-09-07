import { motion, useInView, useScroll, useTransform } from "motion/react";
import {
  useRef,
  useState,
  type ComponentProps,
  type PropsWithChildren,
} from "react";
import React from "react";

export const App = () => {
  return (
    <>
      <div className="h-full text-white grid place-items-center">
        Gotta scroll down 👇
      </div>
      <div className="flex w-full flex-col items-center px-8">
        <GridOne />
        <div className="text-white py-8">some space..</div>

        <GridTwo />
        <div className="text-white py-24 min-h-screen">some 👾👾👾👾</div>
      </div>
    </>
  );
};

type CardProps = {
  title: string;
  subtitle: string;
  imageUrl: string;
};

const Card = ({ title, subtitle, imageUrl }: CardProps) => (
  <div className="h-full bg-white rounded-2xl overflow-clip">
    <div className="p-4 mb-5 text-center">
      <h2 className="text-3xl">{title}</h2>
      <p>{subtitle}</p>
    </div>
    <img className="object-cover w-full h-full" src={imageUrl} alt="" />
  </div>
);

const GridOne = () => {
  const ref = useRef(null);
  const inview = useInView(ref, { amount: 0.3 });

  const GridOneVariant = {
    inview: {
      scale: 1,
      opacity: 1,
    },

    outOfView: {
      scale: 0.8,
      opacity: 0,
    },
  };

  return (
    <motion.div
      variants={{
        inview: {
          transition: {
            staggerChildren: 0.2,
          },
        },

        outOfView: {
          transition: {
            staggerChildren: 0.1,
            staggerDirection: -1,
          },
        },
      }}
      initial="outOfView"
      animate={inview ? "inview" : "outOfView"}
      ref={ref}
      className="relative grid w-full max-w-[800px] sm:h-[500px] grid-cols-1 sm:grid-cols-2 sm:grid-rows-2 gap-4"
    >
      <motion.div variants={GridOneVariant} className="row-span-2">
        <Card
          title="TryPhone 29"
          subtitle="Call me maybe"
          imageUrl="/img/courses/framer-motion/product-1.webp"
        />
      </motion.div>

      <motion.div variants={GridOneVariant}>
        <Card
          title="BearShots Pro"
          subtitle="Ever heard better?"
          imageUrl="/img/courses/framer-motion/product-2.webp"
        />
      </motion.div>
      <motion.div variants={GridOneVariant}>
        <Card
          title="Trample Watch"
          subtitle="Right on time"
          imageUrl="/img/courses/framer-motion/product-3.webp"
        />
      </motion.div>
    </motion.div>
  );
};

type FadeInProps = {
  children: React.ReactNode;
};

type FadeInPropsClassName = ComponentProps<"div">;

const FadeIn = ({
  children,
  className,
}: PropsWithChildren<FadeInPropsClassName>) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.15, 0.8, 1],
    [0, 1, 1, 0]
  );

  return (
    <motion.div ref={ref} className={className} style={{ opacity }}>
      {children}
    </motion.div>
  );
};

const GridTwo = () => {
  return (
    <div className="relative grid w-full max-w-[800px] sm:h-[500px] grid-cols-1 sm:grid-cols-2 sm:grid-rows-2 gap-4">
      <FadeIn className="row-span-2">
        <Card
          title="TryPhone 29"
          subtitle="Call me maybe"
          imageUrl="/img/courses/framer-motion/product-1.webp"
        />
      </FadeIn>
      <FadeIn>
        <Card
          title="BearShots Pro"
          subtitle="Ever heard better?"
          imageUrl="/img/courses/framer-motion/product-2.webp"
        />
      </FadeIn>
      <FadeIn>
        <Card
          title="Trample Watch"
          subtitle="Right on time"
          imageUrl="/img/courses/framer-motion/product-3.webp"
        />
      </FadeIn>
    </div>
  );
};

export default App;
