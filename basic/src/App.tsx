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
      className="h-[500px] w-full overflow-y-scroll border border-gray-400 rounded-xl"
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
  const { scrollYProgress } = useScroll({
    container: containerRef, // 👈 track scroll inside container
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

export default ScrollContainer;
