"use client";

import Link from "next/link";
import { useState } from "react";

const modes = {
  ai: {
    label: "Agentic AI",
    headline: "I build intelligent AI systems that reason across data.",
    description:
      "Agentic RAG, multi-agent workflows, semantic retrieval, grounded generation, evaluation, and self-correction.",
    stack: ["LangGraph", "Qdrant", "Redis", "FastAPI", "Ollama"],
  },

  analytics: {
    label: "Analytics",
    headline: "I turn complex data into decision-ready products.",
    description:
      "Real-time analytics, SQL modeling, KPI systems, Power BI dashboards, and operational data workflows.",
    stack: ["Python", "SQL", "Power BI", "Kafka", "Streamlit"],
  },

  llmops: {
    label: "LLMOps",
    headline: "I build safety and evaluation into the LLM lifecycle.",
    description:
      "Guardrails, policy testing, latency benchmarking, AI regression gates, and automated CI evaluation.",
    stack: [
      "NeMo Guardrails",
      "GitHub Actions",
      "Python",
      "Ollama",
      "LLM Evaluation",
    ],
  },
};

type Mode = keyof typeof modes;

const metricCards = [
  {
    value: "6",
    label: "Project Case Studies",
    detail: "AI, ML/MLOps, analytics, real-time systems, and LLM safety",
    href: "/#projects",
  },
  {
    value: "2",
    label: "Production AI Systems",
    detail: "Agentic RAG and automated LLM governance",
    href: "/projects/enterprise-agentic-rag",
  },
  {
    value: "100%",
    label: "Measured Routing Accuracy",
    detail: "Enterprise Agentic RAG project evaluation suite",
    href: "/projects/enterprise-agentic-rag",
  },
  {
    value: "20",
    label: "Guardrail Benchmark Cases",
    detail: "Safe, jailbreak, secret, harmful, and borderline",
    href: "/projects/ci-llm-guardrail",
  },
];

export default function Hero() {
  const [activeMode, setActiveMode] = useState<Mode>("ai");

  const active = modes[activeMode];

  return (
    <section className="relative overflow-hidden border-b border-zinc-900">
      <div className="mx-auto max-w-6xl px-6 pb-24 pt-32">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.28em] text-zinc-500">
              Sriyuktha Sakhamuri
            </p>

            <h1 className="mt-5 max-w-4xl text-5xl font-bold tracking-tight md:text-7xl">
              AI & Analytics Engineer
            </h1>

            <p className="mt-4 text-sm uppercase tracking-[0.22em] text-zinc-600">
              Agentic AI • LLMOps • Analytics Engineering
            </p>

            <p className="mt-6 max-w-3xl text-xl leading-9 text-zinc-400">
              I build intelligent systems that combine LLMs, data engineering,
              analytics, and production-minded software to solve real business
              problems.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {(Object.keys(modes) as Mode[]).map((mode) => {
                const isActive = activeMode === mode;

                return (
                  <button
                    key={mode}
                    type="button"
                    onClick={() => setActiveMode(mode)}
                    className={`rounded-full border px-5 py-2.5 text-sm font-medium transition ${
                      isActive
                        ? "border-white bg-white text-black"
                        : "border-zinc-800 bg-zinc-950 text-zinc-400 hover:border-zinc-600 hover:text-white"
                    }`}
                  >
                    {modes[mode].label}
                  </button>
                );
              })}
            </div>

            <div className="mt-8 max-w-3xl rounded-3xl border border-zinc-800 bg-zinc-950/70 p-6 transition-all duration-300">
              <p className="text-sm uppercase tracking-[0.2em] text-zinc-500">
                Currently focused on
              </p>

              <h2 className="mt-3 text-2xl font-semibold">
                {active.headline}
              </h2>

              <p className="mt-3 leading-7 text-zinc-400">
                {active.description}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {active.stack.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-zinc-800 bg-black px-3 py-1.5 text-sm text-zinc-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/#projects"
                className="rounded-full bg-white px-6 py-3 font-medium text-black transition hover:bg-zinc-200"
              >
                Explore My Work
              </Link>

              <a
                href="/resume/Sriyuktha_Sakhamuri_Resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-zinc-700 px-6 py-3 font-medium text-white transition hover:border-zinc-500"
              >
                View Resume
              </a>

              <Link
                href="/#contact"
                className="rounded-full border border-zinc-800 px-6 py-3 font-medium text-zinc-400 transition hover:border-zinc-600 hover:text-white"
              >
                Connect
              </Link>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            {metricCards.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="group block rounded-2xl border border-zinc-800 bg-zinc-950 p-5 transition duration-300 hover:-translate-y-1 hover:border-zinc-600 hover:bg-zinc-900"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-3xl font-bold">{item.value}</p>

                    <p className="mt-2 font-medium text-white">
                      {item.label}
                    </p>

                    <p className="mt-2 text-sm leading-6 text-zinc-500">
                      {item.detail}
                    </p>
                  </div>

                  <span className="text-zinc-600 transition duration-300 group-hover:translate-x-1 group-hover:text-white">
                    ↗
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-16 border-t border-zinc-900 pt-8">
          <p className="text-sm uppercase tracking-[0.22em] text-zinc-600">
            Building across the AI lifecycle
          </p>

          <div className="mt-5 flex flex-wrap items-center gap-3 text-sm text-zinc-400">
            <span>Data</span>
            <span className="text-zinc-700">→</span>

            <span>Retrieval</span>
            <span className="text-zinc-700">→</span>

            <span>Reasoning</span>
            <span className="text-zinc-700">→</span>

            <span>Evaluation</span>
            <span className="text-zinc-700">→</span>

            <span>Deployment</span>
          </div>
        </div>
      </div>
    </section>
  );
}