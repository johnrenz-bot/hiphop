"use client";

import { useState } from "react";
import DashboardHeader from "../Components/DashboardHeader";

type Message = {
    from: "Me" | "Them";
    text: string;
};

export default function Messenger() {
    const [selectedUser, setSelectedUser] = useState("....");
    const [message, setMessage] = useState("");
    const [messages, setMessages] = useState<Message[]>([
        { from: "Them", text: "...." },
        { from: "Me", text: "...." },
        { from: "Them", text: "...." },
    ]);

    const users = [
        { name: "Unknown", status: "Online" },
        { name: "Random", status: "Offline" },
        { name: "Guest", status: "Online" },
        { name: "Peter", status: "Away" },
    ];

    const sendMessage = () => {
        if (!message.trim()) return;
        setMessages((prev) => [...prev, { from: "Me", text: message }]);
        setMessage("");
    };

    return (
        <>
            <DashboardHeader />

            <main className="min-h-screen bg-linear-to-b from-zinc-950 via-zinc-900 to-black pt-28 pb-6 px-4 flex justify-center">
                <div className="w-full max-w-6xl">
                    <div className="mb-4 flex items-center justify-between">
                        <div>
                            <h1 className="text-lg md:text-xl font-semibold text-white">
                                Messenger
                            </h1>
                            <p className="text-xs text-zinc-400">
                                Chat with your contacts in real time.
                            </p>
                        </div>
                    </div>

                    <div className="w-full h-[550px] md:h-[640px] flex rounded-2xl border border-zinc-800 bg-zinc-900/80 shadow-2xl backdrop-blur">
                        <aside className="w-64 border-r border-zinc-800 bg-zinc-950/70 p-4 flex flex-col">
                            <div className="mb-3">
                                <input
                                    type="text"
                                    placeholder="Search"
                                    className="w-full rounded-full bg-zinc-900 px-3 py-2 text-xs text-zinc-200 outline-none border border-zinc-800 focus:border-blue-500"
                                />
                            </div>

                            <div className="flex-1 overflow-y-auto space-y-2 pr-1">
                                {users.map((user) => (
                                    <button
                                        key={user.name}
                                        onClick={() => setSelectedUser(user.name)}
                                        className={`w-full flex items-center gap-3 rounded-xl px-3 py-2 text-left transition ${selectedUser === user.name
                                            ? "bg-zinc-800 text-white"
                                            : "bg-transparent text-zinc-300 hover:bg-zinc-800/70"
                                            }`}
                                    >
                                        <div className="relative flex h-8 w-8 items-center justify-center rounded-full bg-zinc-700 text-xs font-semibold">
                                            {user.name
                                                .split(" ")
                                                .map((n) => n[0])
                                                .join("")}
                                            <span
                                                className={`absolute -bottom-0.5 -right-0.5 h-2.5 w-2.5 rounded-full border border-zinc-900 ${user.status === "Online"
                                                    ? "bg-emerald-400"
                                                    : user.status === "Away"
                                                        ? "bg-amber-400"
                                                        : "bg-zinc-500"
                                                    }`}
                                            />
                                        </div>
                                        <div className="flex-1">
                                            <p className="text-sm font-medium leading-tight">
                                                {user.name}
                                            </p>
                                            <p className="text-[11px] text-zinc-500">
                                                {user.status}
                                            </p>
                                        </div>
                                    </button>
                                ))}
                            </div>
                        </aside>

                        <section className="flex-1 flex flex-col">
                            <div className="flex items-center justify-between border-b border-zinc-800 px-5 py-3">
                                <div>
                                    <p className="font-semibold text-sm text-white">
                                        {selectedUser}
                                    </p>
                                    <p className="text-[11px] text-zinc-500">
                                        Last seen recently
                                    </p>
                                </div>
                                <div className="flex gap-2 text-xs text-zinc-400">
                                    <button className="rounded-full border border-zinc-700 px-3 py-1 hover:bg-zinc-800">
                                        Mute
                                    </button>
                                    <button className="rounded-full border border-zinc-700 px-3 py-1 hover:bg-zinc-800">
                                        Details
                                    </button>
                                </div>
                            </div>

                            <div className="flex-1 overflow-y-auto px-4 md:px-6 py-4 space-y-3 text-sm">
                                {messages.map((msg, i) => (
                                    <div
                                        key={i}
                                        className={`flex ${msg.from === "Me" ? "justify-end" : "justify-start"
                                            }`}
                                    >
                                        <div
                                            className={`max-w-[75%] rounded-2xl px-3 py-2 leading-snug shadow-sm ${msg.from === "Me"
                                                ? "bg-blue-600 text-white rounded-br-sm"
                                                : "bg-zinc-800 text-zinc-100 rounded-bl-sm"
                                                }`}
                                        >
                                            {msg.text}
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="border-t border-zinc-800 px-4 md:px-5 py-3 flex items-center gap-2">
                                <input
                                    type="text"
                                    placeholder="Type a message..."
                                    className="flex-1 rounded-full bg-zinc-900 px-4 py-2 text-sm text-zinc-100 outline-none border border-zinc-800 focus:border-blue-500"
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                                />
                                <button
                                    onClick={sendMessage}
                                    className="rounded-full px-5 py-2 text-sm font-medium bg-blue-600 hover:bg-blue-500 text-white transition"
                                >
                                    Send
                                </button>
                            </div>
                        </section>
                    </div>
                </div>
            </main>
        </>
    );
}
