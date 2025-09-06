import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
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
    <div className="w-full max-w[300px] mt-4 mx-auto">
      <button
        className="rounded-2xl bg-black p-3 mb-4 text-gray-200 transition-colors"
        onClick={() => setShowNoti((show) => !show)}
        aria-label="Toggle Noti"
      >
        <FaBell />
      </button>

        {showNoti && (
        <div
          className="w-full max-w-[300px] rounded-2xl border border-gray-300 bg-white text-black shadow-xl"
        >
          <header className="border-b border-gray-300 px-5 py-3 text-md font-bold">
            <p>Notifications</p>
          </header>
          <ul className="m-0 divide-y divide-gray-300 overflow-hidden p-0">
            {fakeNoti.map((notification) => (
              <li
                className="flex items-center gap-4 px-5 py-3 leading-tight max-sm:translate-x-[--x] md:translate-y-[--y]"
                key={notification.id}
              >
                <GiBlood />
                <div>
                  <p className="mb-2 text-md">{notification.message}</p>
                  <p className="text-sm opacity-80">{notification.timeAgo}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
