import DashboardHeader from "../Components/DashboardHeader";

export default function FAQ() {
    const faqs = [
        {
            q: "What is Hip-Hop Dance?",
            a: "Hip-Hop dance is a style born in the streets of New York during the 1970s. It includes breaking, popping, locking, and newer urban styles influenced by hip-hop culture, music, and fashion.",
        },
        {
            q: "Is Hip-Hop difficult to learn for beginners?",
            a: "Anyone can start learning Hip-Hop! It focuses on expression, rhythm, and individuality more than strict technique. With practice and consistency, beginners can improve quickly.",
        },
        {
            q: "Do I need dance experience to start?",
            a: "No. Many dancers start with no experience. Hip-Hop is known for being accessible, expressive, and community-based.",
        },
        {
            q: "What clothes should I wear for Hip-Hop dance?",
            a: "Wear loose, comfortable clothing that lets you move freely: joggers, cargo pants, oversized shirts, and sneakers are common.",
        },
        {
            q: "Is Hip-Hop a good workout?",
            a: "Yes! Hip-Hop improves stamina, flexibility, coordination, and body control. It’s fun, energetic, and burns calories while dancing.",
        },
        {
            q: "What styles fall under Hip-Hop dance?",
            a: "Popular Hip-Hop styles include breaking, popping, locking, krumping, tutting, house, urban choreography, and freestyle concepts.",
        },
        {
            q: "Can Hip-Hop be performed professionally?",
            a: "Absolutely. There are professional crews, competitions, music videos, global battles, dance companies, and careers in teaching and choreography.",
        },
    ];

    return (
        <>
            <DashboardHeader />

            <main className="min-h-screen pt-28 pb-16 flex justify-center px-4 bg-linear-to-b from-zinc-950 via-zinc-900 to-black">
                <div className="w-full max-w-4xl">
                    <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">
                        Hip-Hop Dance FAQ
                    </h1>
                    <p className="text-xs sm:text-sm text-zinc-400 mb-6">
                        Frequently asked questions about Hip-Hop dance culture, training, and style.
                    </p>

                    <div className="space-y-3">
                        {faqs.map((item, index) => (
                            <details
                                key={index}
                                className="group bg-zinc-900 border border-zinc-800 rounded-xl p-4 cursor-pointer"
                            >
                                <summary className="text-white font-medium flex justify-between items-center">
                                    {item.q}
                                    <span className="text-zinc-400 group-open:rotate-180 transition">
                                        ▼
                                    </span>
                                </summary>
                                <p className="mt-2 text-sm text-zinc-400 leading-relaxed">
                                    {item.a}
                                </p>
                            </details>
                        ))}
                    </div>
                </div>
            </main>
        </>
    );
}
