import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { FaBell } from "react-icons/fa6";
import { GiBlood } from "react-icons/gi";

const fakeNoti = [
  {
    id: 1,
    timeAgo: "1 hour ago",
    message: "New module about responsiveness added",
  },
  {
    id: 2,
    timeAgo: "3 hours ago",
    message: "Your profile was updated successfully",
  },
  {
    id: 3,
    timeAgo: "Yesterday",
    message: "You earned a new achievement badge 🎉",
  },
  {
    id: 4,
    timeAgo: "2 days ago",
    message: "System maintenance scheduled for this weekend",
  },
];

const App = () => {
  const [showNoti, setShowNoti] = useState(true);

  return (
    <div className="w-full max-w-[300px] mt-4 mx-auto">
      <button
        className="rounded-2xl bg-black p-3 mb-4 text-gray-200 transition-colors"
        onClick={() => setShowNoti((show) => !show)}
        aria-label="Toggle Noti"
      >
        <FaBell />
      </button>

      <AnimatePresence initial={false}>
        {showNoti && (
            <motion.div
            className="w-full max-w-[300px] rounded-2xl border border-gray-300 bg-white text-black shadow-xl"
            variants={{
                open: {
                    opacity: 1,
                    // y: 0,
                    transition: {
                        staggerChildren: 0.1
                    }
                },

                closed: {
                    opacity: 0,
                    // y: 20,
                        transition: {
                        staggerChildren: 0.04,
                        staggerDirection: -1

                    }
                    
                }
            }}

            initial="closed"
            animate="open"
            exit="closed"
            >
          <header className="border-b border-gray-300 px-5 py-3 text-md font-bold">
            <p>Notifications</p>
          </header>
          <ul className="m-0 divide-y divide-gray-300 overflow-hidden p-0">
            {fakeNoti.map((notification) => (
                <motion.li
                variants={{
                    open: {
                        opacity: 1,
                         "--x": "0px", "--y": "0px"
                    },
                    closed: {
                        opacity: 0, "--x": "30px", "--y": "30px"
                    }
                }}
                
                className="flex items-center gap-4 px-5 py-3 leading-tight max-sm:translate-x-[var(--x)] md:translate-y-[var(--y)]"
                key={notification.id}
              >
                <GiBlood />
                <div>
                  <p className="mb-2 text-md">{notification.message}</p>
                  <p className="text-sm opacity-80">{notification.timeAgo}</p>
                </div>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      )}
      </AnimatePresence>
    </div>
  );
};


export default App