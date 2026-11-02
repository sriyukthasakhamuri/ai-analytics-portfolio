import Image from "next/image";
import Link from "next/link";

const stack = [
  "Python",
  "Streamlit",
  "Kafka",
  "Flask",
  "Docker",
  "Real-Time Analytics",
];

const capabilities = [
  {
    number: "01",
    title: "Real-time event monitoring",
    description:
      "The dashboard is designed around continuously arriving operational events rather than static batch reports.",
  },
  {
    number: "02",
    title: "Streaming architecture",
    description:
      "Kafka is used as the event-streaming layer for ingesting and distributing incoming records across the pipeline.",
  },
  {
    number: "03",
    title: "AI-assisted alerting",
    description:
      "Incoming signals can be evaluated for anomalies and operational risk so high-priority events can be surfaced quickly.",
  },
  {
    number: "04",
    title: "Interactive dashboard",
    description:
      "Streamlit presents live operational metrics, alert states, and system activity in a lightweight monitoring interface.",
  },
  {
    number: "05",
    title: "Service-oriented backend",
    description:
      "Flask-based service components provide a simple API layer for processing and exposing streaming data.",
  },
  {
    number: "06",
    title: "Container-ready deployment",
    description:
      "Docker support makes the project easier to reproduce and extend into a multi-service deployment.",
  },
];

export default function StreamSightPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="mx-auto max-w-6xl px-6 pb-16 pt-28">
        <Link
          href="/#projects"
          className="text-sm text-zinc-400 transition hover:text-white"
        >
          ← Back to Projects
        </Link>

        <div className="mt-8 grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-zinc-500">
              Real-Time AI Case Study
            </p>

            <h1 className="mt-4 text-4xl font-bold tracking-tight md:text-6xl">
              StreamSight Real-Time AI
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
              A real-time analytics and monitoring platform built to explore
              streaming data, live operational metrics, anomaly detection, and
              alert-driven workflows through an interactive dashboard.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {stack.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-zinc-800 bg-zinc-950 px-4 py-2 text-sm text-zinc-300"
                >
                  {item}
                </span>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="https://github.com/sriyukthasakhamuri/streamsight-real-time-ai"
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-white px-6 py-3 font-medium text-black transition hover:bg-zinc-200"
              >
                View GitHub
              </a>

              <a
                href="#workflow"
                className="rounded-full border border-zinc-700 px-6 py-3 font-medium transition hover:border-zinc-500"
              >
                Explore Workflow
              </a>
            </div>
          </div>

          <div className="overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-950 p-3">
            <Image
              src="/projects/streamsight-dashboard.png"
              alt="StreamSight Real-Time AI dashboard"
              width={1400}
              height={900}
              className="h-auto w-full rounded-2xl"
              priority
            />
          </div>
        </div>
      </section>

      <section className="border-y border-zinc-900 bg-zinc-950/60">
        <div className="mx-auto grid max-w-6xl gap-4 px-6 py-10 sm:grid-cols-2 lg:grid-cols-4">
          {[
            ["Streaming", "Event Processing"],
            ["Kafka", "Message Layer"],
            ["Streamlit", "Monitoring UI"],
            ["Docker", "Deployment Ready"],
          ].map(([value, label]) => (
            <div
              key={label}
              className="rounded-2xl border border-zinc-800 bg-black p-6"
            >
              <p className="text-2xl font-bold">{value}</p>
              <p className="mt-2 text-sm text-zinc-400">{label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-zinc-500">
              Problem
            </p>

            <h2 className="mt-3 text-3xl font-bold">
              Operational issues lose value when detected too late.
            </h2>
          </div>

          <p className="text-lg leading-8 text-zinc-400">
            Traditional reporting often analyzes events after they have already
            occurred. StreamSight explores a streaming-first architecture where
            incoming operational signals can be monitored continuously, allowing
            anomalies and important events to be surfaced much earlier.
          </p>
        </div>
      </section>

      <section
        id="workflow"
        className="border-y border-zinc-900 bg-zinc-950/60"
      >
        <div className="mx-auto max-w-6xl px-6 py-20">
          <p className="text-sm uppercase tracking-[0.25em] text-zinc-500">
            System Workflow
          </p>

          <h2 className="mt-3 text-3xl font-bold">
            Streaming events into operational insight
          </h2>

          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((capability) => (
              <div
                key={capability.number}
                className="rounded-2xl border border-zinc-800 bg-black p-6"
              >
                <p className="text-sm text-zinc-500">{capability.number}</p>

                <h3 className="mt-4 text-xl font-semibold">
                  {capability.title}
                </h3>

                <p className="mt-3 leading-7 text-zinc-400">
                  {capability.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <p className="text-sm uppercase tracking-[0.25em] text-zinc-500">
          Architecture
        </p>

        <h2 className="mt-3 text-3xl font-bold">
          Event-driven monitoring pipeline
        </h2>

        <div className="mt-10 rounded-3xl border border-zinc-800 bg-zinc-950 p-8">
          <div className="grid gap-4 md:grid-cols-5">
            {[
              "Event Source",
              "Kafka",
              "Processing Service",
              "Alert Logic",
              "Streamlit Dashboard",
            ].map((item) => (
              <div
                key={item}
                className="flex min-h-28 items-center justify-center rounded-2xl border border-zinc-800 bg-black p-5 text-center font-medium"
              >
                {item}
              </div>
            ))}
          </div>

          <p className="mt-8 text-center text-sm text-zinc-500">
            The architecture is designed to separate event ingestion,
            processing, alerting, and visualization into modular components.
          </p>
        </div>
      </section>

      <section className="border-y border-zinc-900 bg-zinc-950/60">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <p className="text-sm uppercase tracking-[0.25em] text-zinc-500">
            Dashboard
          </p>

          <h2 className="mt-3 text-3xl font-bold">
            Monitoring both system state and alerts
          </h2>

          <p className="mt-4 max-w-3xl text-lg leading-8 text-zinc-400">
            The interface is designed to make current operational conditions
            easy to scan while also surfacing alert conditions that may require
            attention.
          </p>

          <div className="mt-10 overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-950 p-3">
            <Image
              src="/projects/streamsight-dashboard.png"
              alt="StreamSight dashboard overview"
              width={1600}
              height={900}
              className="h-auto w-full rounded-2xl"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="rounded-3xl border border-zinc-800 bg-zinc-950 p-8 md:p-12">
          <p className="text-sm uppercase tracking-[0.25em] text-zinc-500">
            Engineering Takeaways
          </p>

          <h2 className="mt-3 text-3xl font-bold">
            What this project demonstrates
          </h2>

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {[
              "Real-time analytics architecture",
              "Kafka-based event streaming",
              "Operational monitoring workflows",
              "Alert-oriented application design",
              "Streamlit dashboard development",
              "Python backend services",
              "Containerization with Docker",
              "Modular event-processing design",
            ].map((item) => (
              <div
                key={item}
                className="rounded-xl border border-zinc-800 bg-black px-5 py-4 text-zinc-300"
              >
                {item}
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="https://github.com/sriyukthasakhamuri/streamsight-real-time-ai"
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-white px-6 py-3 font-medium text-black transition hover:bg-zinc-200"
            >
              View Repository
            </a>

            <Link
              href="/#contact"
              className="rounded-full border border-zinc-700 px-6 py-3 font-medium transition hover:border-zinc-500"
            >
              Contact Me
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}