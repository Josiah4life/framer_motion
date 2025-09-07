import { motion, useInView, useScroll, useTransform } from "motion/react";
import {
  useRef,
  useState,
  type ComponentProps,
  type PropsWithChildren,
} from "react";
import React from "react";

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

const ScrollContainer = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={containerRef}
      className="w-full overflow-y-scroll border border-gray-400 rounded-xl"
    >
      <div className="h-[300px] flex gap-8 p-8 space-y-8">
        <FadeIn containerRef={containerRef}>
          <Card
            title="Inside container"
            subtitle="Scroll me into view!"
            imageUrl="/img/courses/framer-motion/product-1.webp"
          />
        </FadeIn>

        <FadeIn containerRef={containerRef}>
          <Card
            title="Another card"
            subtitle="Still tracked inside container"
            imageUrl="/img/courses/framer-motion/product-2.webp"
          />
        </FadeIn>
        <FadeIn containerRef={containerRef}>
          <Card
            title="Inside container"
            subtitle="Scroll me into view!"
            imageUrl="/img/courses/framer-motion/product-1.webp"
          />
        </FadeIn>

        <FadeIn containerRef={containerRef}>
          <Card
            title="Another card"
            subtitle="Still tracked inside container"
            imageUrl="/img/courses/framer-motion/product-2.webp"
          />
        </FadeIn>
        <FadeIn containerRef={containerRef}>
          <Card
            title="Inside container"
            subtitle="Scroll me into view!"
            imageUrl="/img/courses/framer-motion/product-1.webp"
          />
        </FadeIn>

        <FadeIn containerRef={containerRef}>
          <Card
            title="Another card"
            subtitle="Still tracked inside container"
            imageUrl="/img/courses/framer-motion/product-2.webp"
          />
        </FadeIn>
        <FadeIn containerRef={containerRef}>
          <Card
            title="Inside container"
            subtitle="Scroll me into view!"
            imageUrl="/img/courses/framer-motion/product-1.webp"
          />
        </FadeIn>

        <FadeIn containerRef={containerRef}>
          <Card
            title="Another card"
            subtitle="Still tracked inside container"
            imageUrl="/img/courses/framer-motion/product-2.webp"
          />
        </FadeIn>
        <FadeIn containerRef={containerRef}>
          <Card
            title="Inside container"
            subtitle="Scroll me into view!"
            imageUrl="/img/courses/framer-motion/product-1.webp"
          />
        </FadeIn>

        <FadeIn containerRef={containerRef}>
          <Card
            title="Another card"
            subtitle="Still tracked inside container"
            imageUrl="/img/courses/framer-motion/product-2.webp"
          />
        </FadeIn>
        <FadeIn containerRef={containerRef}>
          <Card
            title="Inside container"
            subtitle="Scroll me into view!"
            imageUrl="/img/courses/framer-motion/product-1.webp"
          />
        </FadeIn>

        <FadeIn containerRef={containerRef}>
          <Card
            title="Another card"
            subtitle="Still tracked inside container"
            imageUrl="/img/courses/framer-motion/product-2.webp"
          />
        </FadeIn>
      </div>
    </div>
  );
};

type FadeInProps = {
  children: React.ReactNode;
  className?: string;
  containerRef?: React.RefObject<HTMLDivElement | null>;
};

const FadeIn = ({ children, className, containerRef }: FadeInProps) => {
  const ref = useRef(null);

  // 👇 each FadeIn tracks its own visibility
  const isInView = useInView(ref, {
    root: containerRef, // limit viewport to container
    margin: "0px 0px -20% 0px", // tweak when animation should trigger
    amount: 0.3, // 0 = any pixel, 1 = fully visible
    once: false, // true = only animate first time
  });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, x: 10 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 10 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};

export default ScrollContainer;
