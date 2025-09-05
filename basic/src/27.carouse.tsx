import { motion } from "motion/react";
import { useState } from "react";
import { useInterval } from "react-use";
import { quotes } from "./quotes";
import { Debug, useSpeedControl } from "./debugtools";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa6"


const getQuoteVariant = (index: number, suffix?: string) => `quote_${index}` + (suffix ? `_${suffix} ` : "") 
const App = () => {
  const [activeQuoteIndex, setActiveQuoteIndex] = useState(0);
  const lastQuoteIndex = quotes.length - 1;
  const [isPaused, setIsPaused] = useState(false);
  const { speed, setSpeed, faster, slower } = useSpeedControl();

  const next = () => {
    setActiveQuoteIndex((currentQuote) =>
      currentQuote >= lastQuoteIndex ? 0 : currentQuote + 1,
    );
  };

  const previous = () => {
    setActiveQuoteIndex((currentQuote) =>
      currentQuote === 0 ? lastQuoteIndex : currentQuote - 1,
    );
  };

  useInterval(
    () => {
      // See note in the lesson on why we use requestAnimationFrame here.
      window.requestAnimationFrame(next);
    },
    isPaused ? null : speed,
  );

  return (
    <div className="flex flex-col items-center justify-center min-h-screen pb-4">
      <motion.div
        initial="inactive"
        animate={`quote_${activeQuoteIndex}`}
        onPointerEnter={() => setIsPaused(true)}
        onPointerLeave={() => setIsPaused(false)}
        whileHover={["paused", getQuoteVariant(activeQuoteIndex, "highlighted")]}  //whileHove has precedence over animate // the last overides the latter in the array.
        className="bg-white relative rounded-2xl py-5 px-12 w-[400px]"
        >

            <div className="flex justify-center"> 
                {quotes.map((quote, index) => (
                    <motion.img
                        key={index}
                        variants={{
                            [getQuoteVariant(index)]: {
                                scale: 1.2,
                                zIndex: 10
                            },
                            paused: {
                                scale: 0.9,
                                filter: "grayscale()"
                            },
                                [getQuoteVariant(index, "highlighted")]: {
                                scale: 1.2,
                                zIndex: 10,
                                filter: "grayscale(0)"
                            },
                        }}
                        className="rounded-full -mx-2 relative border border-black"
                        src={quote.image}
                    />
                ))}
            </div>
            <div className="grid mt-3 text-center">
                {quotes.map((quotes, index) => (
                    <motion.blockquote
                        key={index}
                        variants={{
                            inactive: {opacity: 0, y: 20},
                            [`quotes_${index}`]: {opacity: 1, y: 0}
                        }}

                        className="[grid-area:1/1] relative"
                    >
                        <p>{quotes.text}</p>
                        <p className="font-bold mt-3 text-sm">{quotes.name} - {quotes.roleCompany}</p>
                    </motion.blockquote>
                ))}
            </div>

            <motion.button
                onClick={previous}
                variants={{
                    inactive: { x:-20, opacity: 0},
                    paused: { x: 0, opacity: 1 }
                }}
                className="absolute top-1/2 left-0 block px-3"
            >
                <FaArrowLeft /><span className="sr-only"> Next </span>
            </motion.button>
            <motion.button
                onClick={next}
                variants={{
                    inactive: { x:20, opacity: 0},
                    paused: { x: 0, opacity: 1 }
                }}

                className="absolute top-1/2 right-0 px-3 block"
            >
                <FaArrowRight /><span className="sr-only"> Next </span>
            </motion.button>
        </motion.div>
        </div>
        )
    }

// Tut 027
// className="[grid-area:1/1]"