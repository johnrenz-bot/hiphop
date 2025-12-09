import DashboardHeader from "../Components/DashboardHeader";
import HeaderProfile from "./HeaderProfile";
import { FaPlus } from "react-icons/fa";


// import { useState } from "react";



export default function Profile() {
    // const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <DashboardHeader />



            <main className="w-full min-h-screen bg-linear-to-b from-black via-zinc-950 to-black text-white flex flex-col items-center pt-24 px-4 pb-10">
                <div className="max-w-5xl w-full space-y-8">


                    <HeaderProfile />


                    <section className="rounded-2xl border border-zinc-900 bg-zinc-950/70 backdrop-blur-md px-4 py-3 flex items-center justify-between text-xs text-zinc-400">
                        <div className="flex gap-4">
                            <button className="px-3 py-1 rounded-full bg-zinc-800 text-zinc-100 font-medium tracking-[0.18em] uppercase text-[10px]">
                                Overview
                            </button>
                            <button className="px-3 py-1 rounded-full hover:bg-zinc-900 tracking-[0.18em] uppercase text-[10px]">
                                Activity
                            </button>
                            <button className="px-3 py-1 rounded-full hover:bg-zinc-900 tracking-[0.18em] uppercase text-[10px]">
                                Insights
                            </button>
                        </div>
                        <span className="hidden sm:inline text-[10px] tracking-[0.18em] uppercase">
                            Profile · Private view
                        </span>
                    </section>

                    <section className="rounded-2xl border border-zinc-900 bg-zinc-950/80 backdrop-blur-md px-4 py-4 md:px-6 md:py-6">
                        <div className="flex items-center justify-center gap-6 text-xs text-zinc-500 mb-5">
                            <button className="flex items-center gap-1 border-b border-white text-white pb-2">
                                <span className="tracking-[0.2em] uppercase text-[10px]">
                                    Posts
                                </span>
                            </button>
                            <button className="pb-2 hover:text-zinc-300">
                                <span className="tracking-[0.2em] uppercase text-[10px]">
                                    Appointment
                                </span>
                            </button>

                        </div>

                        <div className="w-full grid grid-cols-3 gap-1 sm:gap-2" id="post" >
                            <div className="aspect-square bg-zinc-900 flex items-center justify-center text-[10px] text-zinc-600 rounded-2xl">
                                <FaPlus size={30} className="hover:scale-105" />

                            </div>


                        </div>

                        <div className="w-full grid grid-cols-3 gap-1 sm:gap-2" id="Appointment" hidden >
                            <div className="aspect-square bg-zinc-900 flex items-center justify-center text-[10px] text-zinc-600 rounded-2xl">
                                <FaPlus size={30} className="hover:scale-105" />

                            </div>


                        </div>


                    </section>

                </div>
            </main>
        </>
    );
}
