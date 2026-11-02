import Image from "next/image";
import Link from "next/link";

const stack = [
  "Python",
  "FastAPI",
  "LangGraph",
  "RAG",
  "Pydantic",
  "Streamlit",
];

const features = [
  {
    number: "01",
    title: "Multi-agent workflow",
    description:
      "LangGraph coordinates the analysis flow and combines outputs from multiple agent steps into a single response.",
  },
  {
    number: "02",
    title: "RAG retrieval",
    description:
      "Relevant supporting context is retrieved and included with the generated analytical response.",
  },
  {
    number: "03",
    title: "Structured outputs",
    description:
      "Pydantic models help keep agent inputs and outputs predictable and easier to validate.",
  },
  {
    number: "04",
    title: "Segmentation analysis",
    description:
      "The system includes a dedicated segmentation analysis path for customer and business analysis questions.",
  },
  {
    number: "05",
    title: "FastAPI backend",
    description:
      "Backend endpoints expose the analysis workflow so it can be called independently of the user interface.",
  },
  {
    number: "06",
    title: "Streamlit interface",
    description:
      "A lightweight UI allows users to ask analytical questions and inspect retrieved supporting information.",
  },
];

export default function InsightPilotPage() {
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
              AI Analytics Case Study
            </p>

            <h1 className="mt-4 text-4xl font-bold tracking-tight md:text-6xl">
              InsightPilot AI Analytics
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
              An AI-powered analytics assistant that combines FastAPI,
              LangGraph multi-agent orchestration, retrieval-augmented
              generation, structured outputs, and an interactive Streamlit
              interface for business analysis.
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
                href="https://github.com/sriyukthasakhamuri/insightpilot-ai-analytics"
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
              src="/projects/insightpilot-dashboard.png"
              alt="InsightPilot AI Analytics dashboard"
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
            ["Multi-Agent", "LangGraph Workflow"],
            ["RAG", "Context Retrieval"],
            ["FastAPI", "Backend API"],
            ["Streamlit", "Interactive UI"],
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
              Business users need answers, not just dashboards.
            </h2>
          </div>

          <p className="text-lg leading-8 text-zinc-400">
            Traditional dashboards require users to know where to look and how
            to interpret each visual. InsightPilot explores a conversational
            approach where users can ask analytical questions in natural
            language and receive a structured response supported by retrieved
            context.
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
            From business question to AI-assisted analysis
          </h2>

          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div
                key={feature.number}
                className="rounded-2xl border border-zinc-800 bg-black p-6"
              >
                <p className="text-sm text-zinc-500">{feature.number}</p>

                <h3 className="mt-4 text-xl font-semibold">
                  {feature.title}
                </h3>

                <p className="mt-3 leading-7 text-zinc-400">
                  {feature.description}
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
          Modular AI analytics pipeline
        </h2>

        <div className="mt-10 rounded-3xl border border-zinc-800 bg-zinc-950 p-8">
          <div className="grid gap-4 md:grid-cols-5 md:items-center">
            {[
              "User Question",
              "FastAPI",
              "LangGraph Agents",
              "RAG Retrieval",
              "AI Response",
            ].map((item, index) => (
              <div
                key={item}
                className="flex items-center gap-4 md:flex-col"
              >
                <div className="flex min-h-28 w-full items-center justify-center rounded-2xl border border-zinc-800 bg-black p-5 text-center font-medium">
                  {item}
                </div>

                {index < 4 && (
                  <span className="text-zinc-600 md:hidden">→</span>
                )}
              </div>
            ))}
          </div>

          <p className="mt-8 text-center text-sm text-zinc-500">
            Streamlit provides the user interface while Pydantic validates
            structured data exchanged throughout the workflow.
          </p>
        </div>
      </section>

      <section className="border-y border-zinc-900 bg-zinc-950/60">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <p className="text-sm uppercase tracking-[0.25em] text-zinc-500">
            Key Capabilities
          </p>

          <h2 className="mt-3 text-3xl font-bold">
            Designed for explainable analytics workflows
          </h2>

          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {[
              "Natural-language analytics questions",
              "Multi-agent orchestration with LangGraph",
              "Retrieved supporting documents and knowledge sources",
              "Segmentation analysis workflow",
              "Structured Pydantic state and outputs",
              "FastAPI service layer",
              "Streamlit dashboard experience",
              "Combined analytical response generation",
            ].map((item) => (
              <div
                key={item}
                className="rounded-xl border border-zinc-800 bg-black px-5 py-4 text-zinc-300"
              >
                {item}
              </div>
            ))}
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
              "Multi-agent AI application design",
              "LangGraph state orchestration",
              "Retrieval-Augmented Generation",
              "FastAPI backend development",
              "Structured validation with Pydantic",
              "Interactive AI analytics with Streamlit",
              "Knowledge-source transparency",
              "Modular AI service architecture",
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
              href="https://github.com/sriyukthasakhamuri/insightpilot-ai-analytics"
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