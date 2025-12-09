"use client";


import { useState } from "react";
import { useRouter } from "next/navigation";

export default function HeaderProfile() {
    const user = {
        name: "Guest",
        username: "guest",
        followers: 0,
        following: 0,
        posts: 0,
        bio: "coffee lover.",
        role: "Member",
    };

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
        <section className="rounded-2xl border border-zinc-800 bg-zinc-950/70 backdrop-blur-lg px-6 py-6 md:px-8 md:py-7 shadow-[0_18px_40px_rgba(0,0,0,0.8)]">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                <div className="flex items-center gap-5">
                    <div className="relative">
                        <div className="w-24 h-24 md:w-28 md:h-28 rounded-2xl bg-linear-to-br from-zinc-700 via-zinc-800 to-black flex items-center justify-center text-3xl font-bold">
                            JD
                        </div>
                        <span className="absolute -bottom-1 -right-1 px-2 py-0.5 rounded-full bg-emerald-700/80 text-[10px] font-semibold uppercase tracking-[0.15em]">
                            {user.role}
                        </span>
                    </div>

                    <div className="space-y-1">
                        <div className="flex items-center gap-2">
                            <h1 className="text-xl md:text-2xl font-semibold">
                                {user.name}
                            </h1>
                            <span className="text-xs rounded-full border border-zinc-700 px-2 py-0.5 uppercase tracking-[0.18em] text-zinc-400">
                                @{user.username}
                            </span>
                        </div>
                        <p className="text-sm text-zinc-400 max-w-md">{user.bio}</p>
                    </div>
                </div>

                <div className="flex flex-col items-start md:items-end gap-3">
                    <div className="flex gap-6 text-xs text-zinc-300">
                        <div className="flex flex-col items-center">
                            <span className="text-base font-semibold">{user.posts}</span>
                            <span className="uppercase tracking-[0.16em] text-[10px] text-zinc-500">
                                Posts
                            </span>
                        </div>
                        <div className="flex flex-col items-center">
                            <span className="text-base font-semibold">
                                {user.followers}
                            </span>
                            <span className="uppercase tracking-[0.16em] text-[10px] text-zinc-500">
                                Followers
                            </span>
                        </div>
                        <div className="flex flex-col items-center">
                            <span className="text-base font-semibold">
                                {user.following}
                            </span>
                            <span className="uppercase tracking-[0.16em] text-[10px] text-zinc-500">
                                Following
                            </span>
                        </div>
                    </div>

                    <div className="flex flex-wrap gap-3">
                       <button
                onClick={() => goTo("/Dashboard/profile/ProfileSettings")}
                            className="px-4 py-2 rounded-full bg-zinc-100 text-black text-xs font-semibold tracking-[0.16em] uppercase hover:bg-white transition">
                            Edit Profile
                        </button>
                        <button className="px-4 py-2 rounded-full border border-zinc-700 text-xs font-semibold tracking-[0.16em] uppercase text-zinc-200 hover:border-zinc-400 transition">
                            Share
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}