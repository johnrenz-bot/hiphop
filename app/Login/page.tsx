import Link from "next/link";

export default function Login() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-neutral-950 via-neutral-900 to-neutral-950 overflow-hidden">

            <div className="pointer-events-none fixed inset-0 -z-10">
                <div className="absolute -top-20 -left-10 h-64 w-64 rounded-full bg-purple-500/20 blur-3xl animate-float-slow" />
                <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-neutral-500/10 blur-3xl animate-float" />
            </div>

            <div className="w-full max-w-sm mx-4">
                <div className="relative rounded-3xl border border-white/10 bg-linear-to-b from-zinc-800 via-zinc-900 to-black shadow-2xl backdrop-blur-2xl px-8 py-10 animate-fadeInUp">

                    <div className="absolute top-3 left-4">
                        <Link href="/" className="text-xs text-neutral-400 hover:text-neutral-200 transition">
                            ← Back
                        </Link>
                    </div>

                    <h1 className="text-2xl font-semibold text-neutral-50 text-center mb-2 mt-3">
                        Welcome back
                    </h1>
                    <p className="text-sm text-neutral-400 text-center mb-8">
                        Sign in to continue
                    </p>

                    <form className="space-y-5">
                        <div className="space-y-2">
                            <label className="text-xs font-medium text-neutral-300">
                                Email
                            </label>
                            <input
                                type="email"
                                placeholder="you@example.com"
                                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-neutral-50 placeholder-neutral-400 outline-none backdrop-blur transition-all focus:border-neutral-400/70 focus:ring-2 focus:ring-neutral-500/40 focus:scale-[1.01]"
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-xs font-medium text-neutral-300 flex justify-between">
                                <span>Password</span>
                                <button
                                    type="button"
                                    className="text-[11px] text-neutral-300/60 hover:text-zinc-200 transition"
                                >
                                    Forgot?
                                </button>
                            </label>
                            <input
                                type="password"
                                placeholder="••••••••"
                                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-neutral-50 placeholder-neutral-400 outline-none backdrop-blur transition-all focus:border-neutral-400/70 focus:ring-2 focus:ring-neutral-500/40 focus:scale-[1.01]"
                            />
                        </div>

                        <Link
                            href="/Dashboard"
                            className="block mt-2 w-full text-center rounded-xl bg-linear-to-br from-zinc-700/30 via-zinc-500/10 to-transparent 
  hover:bg-neutral-900 hover:border-neutral-700 hover:border border-zinc-500 border 
  px-4 py-3 text-sm font-medium text-white transition-all hover:scale-[1.03] active:scale-95"
                        >
                            Sign In
                        </Link>

                        <Link
                            href="/Dashboard"
                            className="block text-center rounded-xl border border-zinc-700 bg-zinc-800/30 hover:bg-zinc-800 hover:border-zinc-600 transition-all px-4 py-3 text-sm font-medium text-neutral-300 hover:text-white hover:scale-[1.03] active:scale-95"
                        >
                            Continue as Guest
                        </Link>
                    </form>

                    <p className="mt-6 text-center text-xs text-neutral-400">
                        Don't have an account?{" "}
                        <Link href="/Login/Register" className="text-neutral-300 hover:text-neutral-200 transition">
                            Sign up
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}
