// DashboardMain.tsx

export default function DashboardMain() {

    const user = {
        name : "guest"
    }


  return (
    <main className="w-full flex justify-center pt-24 px-4 pb-10">
      <div className="w-full max-w-5xl space-y-8">

        <section className="flex flex-col gap-2">
          <h1 className="text-xl sm:text-2xl font-semibold flex gap-2 ">
            Welcome back  <p className="font-bold uppercase text-zinc-400"> {user.name} </p>
          </h1>
          <p className="text-xs sm:text-sm text-zinc-400 max-w-xl">
            Here&apos;s a quick overview of what&apos;s happening in your account
            today.
          </p>
        </section>

        {/* Top stats */}
        <section className="grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-zinc-800 bg-zinc-900/70 p-4 shadow-lg">
            <p className="text-[11px] font-medium tracking-[0.25em] text-zinc-400">
              USERS
            </p>
            <div className="mt-4 h-6 w-24 rounded-md bg-zinc-800" />
            <div className="mt-2 h-3 w-16 rounded-md bg-zinc-800" />
          </div>

          <div className="rounded-2xl border border-zinc-800 bg-zinc-900/70 p-4 shadow-lg">
            <p className="text-[11px] font-medium tracking-[0.25em] text-zinc-400">
              REVENUE
            </p>
            <div className="mt-4 h-6 w-24 rounded-md bg-zinc-800" />
            <div className="mt-2 h-3 w-16 rounded-md bg-zinc-800" />
          </div>

          <div className="rounded-2xl border border-zinc-800 bg-zinc-900/70 p-4 shadow-lg">
            <p className="text-[11px] font-medium tracking-[0.25em] text-zinc-400">
              SESSIONS
            </p>
            <div className="mt-4 h-6 w-24 rounded-md bg-zinc-800" />
            <div className="mt-2 h-3 w-16 rounded-md bg-zinc-800" />
          </div>
        </section>

        {/* Main grid */}
        <section className="grid gap-6 lg:grid-cols-[2fr,1.2fr]">
          {/* Left column */}
          <div className="space-y-6">
            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/70 p-4 shadow-lg">
              <div className="flex items-center justify-between mb-4">
                <p className="text-xs font-semibold tracking-[0.2em] text-zinc-400">
                  OVERVIEW
                </p>
                <div className="h-6 w-20 rounded-full bg-zinc-800" />
              </div>
              <div className="h-40 rounded-xl bg-zinc-950/40 border border-zinc-800 flex items-center justify-center text-[10px] text-zinc-500">
                Chart / Graph Area
              </div>
            </div>

            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/70 p-4 shadow-lg">
              <div className="flex items-center justify-between mb-4">
                <p className="text-xs font-semibold tracking-[0.2em] text-zinc-400">
                  RECENT ACTIVITY
                </p>
                <div className="h-6 w-16 rounded-full bg-zinc-800" />
              </div>

              <div className="space-y-3">
                {[1, 2, 3, 4].map((item) => (
                  <div
                    key={item}
                    className="flex items-center justify-between border-b border-zinc-800/70 pb-3 last:border-b-0 last:pb-0"
                  >
                    <div className="space-y-2">
                      <div className="h-3 w-40 rounded-md bg-zinc-800" />
                      <div className="h-2 w-24 rounded-md bg-zinc-800/70" />
                    </div>
                    <div className="h-3 w-10 rounded-md bg-zinc-800/70" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/70 p-4 shadow-lg">
              <p className="mb-4 text-xs font-semibold tracking-[0.2em] text-zinc-400">
                QUICK ACTIONS
              </p>
              <div className="space-y-3">
                {[1, 2, 3].map((item) => (
                  <div
                    key={item}
                    className="flex items-center justify-between rounded-xl border border-zinc-800 bg-zinc-950/40 px-3 py-3"
                  >
                    <div className="space-y-2">
                      <div className="h-3 w-32 rounded-md bg-zinc-800" />
                      <div className="h-2 w-20 rounded-md bg-zinc-800/70" />
                    </div>
                    <div className="h-7 w-16 rounded-full bg-zinc-800" />
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/70 p-4 shadow-lg">
              <p className="mb-4 text-xs font-semibold tracking-[0.2em] text-zinc-400">
                SUMMARY
              </p>
              <div className="space-y-2">
                <div className="h-3 w-full rounded-md bg-zinc-800" />
                <div className="h-3 w-5/6 rounded-md bg-zinc-800" />
                <div className="h-3 w-4/5 rounded-md bg-zinc-800" />
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
