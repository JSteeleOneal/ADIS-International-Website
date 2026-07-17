import FadeIn from "./FadeIn";

export default function About() {
  return (
    <section id="about" className="border-y border-line bg-mist py-24 md:py-32">
      <div className="mx-auto max-w-wrap px-6">
        <div className="grid gap-12 md:grid-cols-12 md:gap-8">
          <FadeIn className="md:col-span-5">
            <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.18em] text-pine">
              About ADIS
            </p>
            <h2 className="font-display text-3xl font-semibold leading-tight tracking-tight text-ink md:text-5xl">
              Agriculture, run like a technology operation.
            </h2>
          </FadeIn>

          <FadeIn delay={0.1} className="md:col-span-6 md:col-start-7">
            <p className="text-lg leading-relaxed text-slate">
              ADIS — Agricultural Drone Irrigation Systems — supplies
              professional spraying drones to commercial farms and
              agricultural businesses. We pair proven aircraft with flight
              planning, operator training, and ongoing support, so crop
              protection becomes a scheduled, measurable process rather
              than a seasonal scramble.
            </p>
            <p className="mt-5 text-lg leading-relaxed text-slate">
              Every deployment starts with your fields: crop type, terrain,
              and coverage targets. From there we configure the right
              aircraft, spray system, and workflow for your operation —
              and stay involved after delivery.
            </p>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
