import Image from "next/image";
import Link from "next/link";

const metrics = [
  {
    value: "100%",
    label: "Routing Accuracy",
  },
  {
    value: "100%",
    label: "Retrieval Relevance",
  },
  {
    value: "100%",
    label: "Answer Generation",
  },
  {
    value: "100%",
    label: "Groundedness Safety",
  },
];

const stack = [
  "Python",
  "LangGraph",
  "Qdrant",
  "SQLite",
  "Redis",
  "FastAPI",
  "Ollama",
  "Streamlit",
];

export default function EnterpriseAgenticRAGPage() {
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
              AI Engineering Case Study
            </p>

            <h1 className="mt-4 text-4xl font-bold tracking-tight md:text-6xl">
              Enterprise Agentic RAG
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
              A multi-agent enterprise analytics assistant that combines
              semantic document retrieval, SQL analytics, Redis conversation
              memory, grounded LLM generation, confidence evaluation, and
              self-correction.
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
                href="https://github.com/sriyukthasakhamuri/enterprise-agentic-rag"
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-white px-6 py-3 font-medium text-black transition hover:bg-zinc-200"
              >
                View GitHub
              </a>

              <a
                href="#architecture"
                className="rounded-full border border-zinc-700 px-6 py-3 font-medium transition hover:border-zinc-500"
              >
                Explore Architecture
              </a>
            </div>
          </div>

          <div className="overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-950 p-3">
            <Image
              src="/projects/enterprise-agentic-rag.png"
              alt="Enterprise Agentic RAG Streamlit interface"
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
          {metrics.map((metric) => (
            <div
              key={metric.label}
              className="rounded-2xl border border-zinc-800 bg-black p-6"
            >
              <p className="text-3xl font-bold">{metric.value}</p>
              <p className="mt-2 text-sm text-zinc-400">{metric.label}</p>
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
              Business questions need more than one data source.
            </h2>
          </div>

          <p className="text-lg leading-8 text-zinc-400">
            Enterprise questions often combine structured metrics with
            unstructured operational knowledge. A traditional chatbot or a
            single retrieval method cannot reliably answer both. This project
            routes each question to SQL analytics, semantic retrieval, or both
            depending on the intent.
          </p>
        </div>
      </section>

      <section
        id="architecture"
        className="border-y border-zinc-900 bg-zinc-950/60"
      >
        <div className="mx-auto max-w-6xl px-6 py-20">
          <p className="text-sm uppercase tracking-[0.25em] text-zinc-500">
            Architecture
          </p>

          <h2 className="mt-3 text-3xl font-bold">
            Multi-agent retrieval and self-correction workflow
          </h2>

          <p className="mt-4 max-w-3xl text-lg leading-8 text-zinc-400">
            LangGraph orchestrates query routing, retrieval, generation,
            evaluation, and retries. Hybrid questions execute Qdrant semantic
            retrieval and SQLite analytics in parallel before generating a
            grounded answer.
          </p>

          <div className="mt-10 overflow-hidden rounded-3xl border border-zinc-800 bg-white p-3">
            <Image
              src="/projects/enterprise-agentic-rag-architecture.png"
              alt="Enterprise Agentic RAG architecture"
              width={1600}
              height={1000}
              className="h-auto w-full rounded-2xl"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <p className="text-sm uppercase tracking-[0.25em] text-zinc-500">
          System Flow
        </p>

        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {[
            [
              "01",
              "Route the question",
              "The router determines whether the query needs vector retrieval, SQL analytics, or both.",
            ],
            [
              "02",
              "Retrieve evidence",
              "Qdrant retrieves enterprise knowledge while SQLite calculates structured business metrics.",
            ],
            [
              "03",
              "Generate grounded answer",
              "Ollama generates the response using only the retrieved evidence and available conversation context.",
            ],
            [
              "04",
              "Evaluate confidence",
              "The evaluation layer checks whether the result has enough supporting context.",
            ],
            [
              "05",
              "Rewrite and retry",
              "Low-confidence answers trigger query rewriting and another retrieval cycle.",
            ],
            [
              "06",
              "Persist memory",
              "Redis stores session conversation history for contextual follow-up questions.",
            ],
          ].map(([number, title, description]) => (
            <div
              key={number}
              className="rounded-2xl border border-zinc-800 bg-zinc-950 p-6"
            >
              <p className="text-sm text-zinc-500">{number}</p>
              <h3 className="mt-4 text-xl font-semibold">{title}</h3>
              <p className="mt-3 leading-7 text-zinc-400">{description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-zinc-900 bg-zinc-950/60">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <p className="text-sm uppercase tracking-[0.25em] text-zinc-500">
            Evaluation
          </p>

          <h2 className="mt-3 text-3xl font-bold">
            Built with measurable quality checks
          </h2>

          <p className="mt-4 max-w-3xl text-lg leading-8 text-zinc-400">
            The project includes a 12-case evaluation suite covering routing,
            retrieval relevance, answer generation, and groundedness safety.
            The metrics below refer specifically to that project test suite.
          </p>

          <div className="mt-10 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-zinc-800 bg-black p-6">
              <p className="text-zinc-400">Initial harder benchmark</p>
              <p className="mt-3 text-2xl font-bold">58.3%</p>
              <p className="mt-1 text-sm text-zinc-500">
                Routing accuracy before router improvements
              </p>
            </div>

            <div className="rounded-2xl border border-zinc-800 bg-black p-6">
              <p className="text-zinc-400">Final evaluation</p>
              <p className="mt-3 text-2xl font-bold">100%</p>
              <p className="mt-1 text-sm text-zinc-500">
                Routing accuracy on the current 12-case suite
              </p>
            </div>
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
              "Agentic workflow orchestration with LangGraph",
              "Hybrid structured and unstructured retrieval",
              "Qdrant vector search and document ingestion",
              "Real SQL analytics with SQLite",
              "Redis-backed conversational memory",
              "Grounded local LLM inference with Ollama",
              "Confidence-based self-correction",
              "Quantitative AI evaluation",
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
              href="https://github.com/sriyukthasakhamuri/enterprise-agentic-rag"
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