"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function DashboardHeader() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const router = useRouter();

  const userName = "John Doe";
  const userImage = "";

  const goTo = (path: string) => {
    router.push(path);
    setDropdownOpen(false);
  };

  const getInitials = (name: string) => {
    if (!name) return "";
    const parts = name.trim().split(/\s+/);
    if (parts.length === 1) {
      const first = parts[0];
      return (first[0] + (first[1] || "")).toUpperCase();
    }
    return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
  };

  const handleLogout = () => {
    router.push("/Login");
    setDropdownOpen(false);
  };

  return (
    <header className="w-full flex justify-center fixed top-0 left-0 z-50">
      <nav className="flex items-center justify-between px-6 sm:px-10 py-3 rounded-b-3xl rounded-t-xl md:bg-zinc-900/95 md:border md:border-zinc-700 backdrop-blur-xl shadow-xl w-full max-w-5xl">

        <div className="flex items-center gap-3">
          <span className="text-white font-bold tracking-[0.25em] text-xs sm:text-sm">
            HIPHOP
          </span>
        </div>

        <div className="hidden md:flex flex-1 justify-center">
          <ul className="flex items-center gap-10">
            <li>
              <button
                onClick={() => goTo("/Dashboard")}
                className="text-xs sm:text-sm tracking-[0.25em] text-white hover:text-zinc-200"
              >
                HOME
              </button>
            </li>
            <li>
              <button
                onClick={() => goTo("/Dashboard/messenger")}
                className="text-xs sm:text-sm tracking-[0.25em] text-white hover:text-zinc-200"
              >
                MESSENGER
              </button>
            </li>
            <li>
              <button
                onClick={() => goTo("/Dashboard/Faq")}
                className="text-xs sm:text-sm tracking-[0.25em] text-white hover:text-zinc-200"
              >
                FAQ
              </button>
            </li>
          </ul>
        </div>

        <div className="relative">
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="flex items-center gap-2 px-3  py-2 rounded-full bg-zinc-800/80 hover:bg-zinc-700 transition text-xs sm:text-sm font-semibold text-white"
          >
            {userImage ? (
              <img
                src={userImage}
                alt={userName}
                className="w-8 h-8 rounded-full object-cover"
              />
            ) : (
              <div className="w-8 h-8 rounded-full bg-zinc-600 flex items-center justify-center text-white font-bold text-xs">
                {getInitials(userName)}
              </div>
            )}

            <span className="max-w-[120px] truncate">{userName}</span>
            <span className="text-[10px] text-zinc-300">▾</span>
          </button>

          {dropdownOpen && (
            <div className="absolute right-0 mt-2 w-44 bg-zinc-900 border border-zinc-700 rounded-xl shadow-lg py-2">
              <button
                onClick={() => goTo("/Dashboard/profile")}
                className="block w-full text-left px-4 py-2 text-sm text-white hover:bg-zinc-800"
              >
                Profile
              </button>


              <div className="md:hidden border-t border-zinc-700 mt-2 pt-2">
                <button
                  onClick={() => goTo("/Dashboard")}
                  className="block w-full text-left px-4 py-2 text-sm text-white hover:bg-zinc-800"
                >
                  Home
                </button>
                <button
                  onClick={() => goTo("/Dashboard")}
                  className="block w-full text-left px-4 py-2 text-sm text-white hover:bg-zinc-800"
                >
                  Messenger
                </button>
                <button
                  onClick={() => goTo("/Dashboard/Faq")}
                  className="block w-full text-left px-4 py-2 text-sm text-white hover:bg-zinc-800"
                >
                  FAQ
                </button>
              </div>

              <button
                onClick={handleLogout}
                className="block w-full text-left px-4 py-2 text-sm text-red-400 hover:bg-zinc-800 mt-1"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}
