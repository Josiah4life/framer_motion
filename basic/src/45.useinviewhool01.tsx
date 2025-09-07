import { motion, useInView } from "motion/react";
import { useEffect, useRef } from "react";
import { useSound } from "use-sound";

export const App = () => {
  const imageRef = useRef(null);
  const isInview = useInView(imageRef, { amount: 0.9 });
  const [playshutter, { stop }] = useSound("/music/adonai.mp3");

  useEffect(() => {
    if (isInview) {
      playshutter();
    } else {
      stop();
    }
  }, [isInview, playshutter, stop]);

  return (
    <div className="mx-auto max-w-[640px] py-8 px-8">
      <div className="-rotate-3 bg-gradient-to-br from-slate-100 to-slate-400 p-8 text-black shadow-2xl text-lg">
        <p className="mb-4 text-4xl font-bold leading-[1.1]">
          That beautiful cabin on that idyllic lake..
        </p>
        <p className="mb-3 mt-4">
          Last summer, I escaped to a remote cabin nestled along the serene
          shores of a hidden fjord. Each morning, I woke up to the soft glow of
          dawn, painting the sky in pastel hues of pink and orange, interior and
          rustic charm, was the perfect retreat from the hustle reflecting off
          the tranquil water. The red cabin, with its cozy and bustle of
          everyday life.
        </p>
        <p>
          Surrounded by towering mountains and the gentle sound of lapping
          waves, I spent my days exploring the rugged landscape and evenings
          curled up with a good book by the fire. It was a slice of paradise, a
          place where time seemed to stand still, allowing me to savor each
          peaceful moment.
        </p>
      </div>
      <motion.img
        variants={{
          hidden: {
            opacity: 0,
            rotate: "0deg",
            scale: 0.9,
          },
          visible: {
            opacity: 1,
            rotate: "5deg",
            scale: 1,
          },
        }}
        initial="hidden"
        animate={isInview ? "visible" : "hidden"}
        ref={imageRef}
        className="relative z-10 w-[80%] border-8 border-white shadow-2xl"
        src="public/house-lake.webp"
        alt="House on a lake"
      />
    </div>
  );
};

export default App;
