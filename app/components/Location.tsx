"use client";

export default function Location() {
  return (
    <section className="relative min-h-[60vh] bg-zinc-950 text-zinc-100 px-4 sm:px-6 lg:px-10 py-16 sm:py-20 flex items-center">
      <div className="mx-auto max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div className="space-y-4">
          <span className="inline-flex items-center gap-2 rounded-full border border-zinc-700 bg-zinc-900 px-4 py-1 text-[10px] sm:text-xs uppercase tracking-[0.25em] text-zinc-400">
            Location
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black">
            Streets of the{" "}
            <span className="bg-clip-text text-transparent bg-linear-to-r from-zinc-100 to-zinc-500">
              Bronx, New York City
            </span>
          </h2>
          <p className="text-sm md:text-base text-zinc-400 max-w-xl">
            The energy of hip-hop was born in the blocks and parks of the Bronx. This is the neighborhood backdrop for your battles, rehearsals, and late-night sessions.
          </p>
          <div className="space-y-1 text-sm text-zinc-300">
            <p className="font-semibold">Streets of the Bronx</p>
            <p>Bronx, New York City, NY, USA</p>
          </div>
        </div>

        <div className="w-full h-64 sm:h-80 lg:h-[380px] overflow-hidden rounded-3xl border border-zinc-800 shadow-[0_0_25px_rgba(0,0,0,0.6)] bg-black">
          <iframe
            title="Streets of the Bronx, New York City"
            src="https://www.google.com/maps?q=Streets%20of%20the%20Bronx%2C%20New%20York%20City&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full border-0"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
}
