import Image from "next/image";
import Link from "next/link";

const metrics = [
  {
    value: "100%",
    label: "Policy Compliance",
  },
  {
    value: "0%",
    label: "False Positives",
  },
  {
    value: "0%",
    label: "False Negatives",
  },
  {
    value: "5–7%",
    label: "Avg. Latency Overhead",
  },
];

const stack = [
  "Python",
  "NeMo Guardrails",
  "Ollama",
  "GitHub Actions",
  "JSON",
  "CI/CD",
];

export default function CILLMGuardrailPage() {
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
              AI Safety & LLMOps Case Study
            </p>

            <h1 className="mt-4 text-4xl font-bold tracking-tight md:text-6xl">
              CI LLM Guardrail & Evaluation Engine
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
              An automated LLM safety and governance pipeline that evaluates
              prompts, enforces NeMo Guardrails policies, benchmarks policy
              compliance, measures latency, and blocks CI when safety
              regressions are detected.
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
                href="https://github.com/sriyukthasakhamuri/ci-llm-guardrail-evaluation"
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
              src="/projects/ci-llm-guardrail.png"
              alt="CI LLM Guardrail architecture"
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
              LLM safety needs automated regression testing.
            </h2>
          </div>

          <p className="text-lg leading-8 text-zinc-400">
            Guardrails can break as prompts, policies, models, and applications
            evolve. Manual testing is difficult to repeat and easy to miss.
            This project treats LLM safety like software quality by validating
            expected allow/block behavior automatically during CI.
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
            Safety enforcement at runtime and in CI
          </h2>

          <p className="mt-4 max-w-3xl text-lg leading-8 text-zinc-400">
            Locally, NeMo Guardrails inspects prompts before they reach Ollama.
            In CI, GitHub Actions executes a policy regression suite and fails
            the build when expected guardrail behavior changes.
          </p>

          <div className="mt-10 overflow-hidden rounded-3xl border border-zinc-800 bg-white p-3">
            <Image
              src="/projects/ci-guardrail-architecture.png"
              alt="CI LLM Guardrail and Evaluation Engine architecture"
              width={1600}
              height={1000}
              className="h-auto w-full rounded-2xl"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <p className="text-sm uppercase tracking-[0.25em] text-zinc-500">
          Evaluation Flow
        </p>

        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {[
            [
              "01",
              "Define safety policies",
              "NeMo Guardrails defines which prompts should be allowed or blocked.",
            ],
            [
              "02",
              "Build benchmark dataset",
              "The suite covers safe, jailbreak, secret-extraction, harmful, and borderline prompts.",
            ],
            [
              "03",
              "Run local evaluation",
              "The real NeMo + Ollama stack measures allow/block correctness and response latency.",
            ],
            [
              "04",
              "Measure safety quality",
              "The evaluator calculates policy compliance, false positives, false negatives, and category accuracy.",
            ],
            [
              "05",
              "Gate changes in CI",
              "GitHub Actions runs the regression gate on every push and pull request.",
            ],
            [
              "06",
              "Preserve evidence",
              "Each CI run generates a JSON report and uploads it as a GitHub Actions artifact.",
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
            Benchmark
          </p>

          <h2 className="mt-3 text-3xl font-bold">
            Safety results backed by measurable tests
          </h2>

          <p className="mt-4 max-w-3xl text-lg leading-8 text-zinc-400">
            The current benchmark includes 20 test cases across five safety
            categories. These results apply specifically to this project test
            suite and local evaluation environment.
          </p>

          <div className="mt-10 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-zinc-800 bg-black p-6">
              <p className="text-zinc-400">Policy benchmark</p>
              <p className="mt-3 text-2xl font-bold">20 / 20 passed</p>
              <p className="mt-1 text-sm text-zinc-500">
                100% compliance, 0% false positives, 0% false negatives
              </p>
            </div>

            <div className="rounded-2xl border border-zinc-800 bg-black p-6">
              <p className="text-zinc-400">Latency benchmark</p>
              <p className="mt-3 text-2xl font-bold">5–7%</p>
              <p className="mt-1 text-sm text-zinc-500">
                Average observed overhead across repeated local benchmark runs
              </p>
            </div>
          </div>

          <div className="mt-8 overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-950 p-3">
            <Image
              src="/projects/guardrail-benchmark.png"
              alt="Guardrail latency benchmark results"
              width={1600}
              height={900}
              className="h-auto w-full rounded-2xl"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <p className="text-sm uppercase tracking-[0.25em] text-zinc-500">
          CI/CD
        </p>

        <h2 className="mt-3 text-3xl font-bold">
          Policy regressions automatically fail the build
        </h2>

        <p className="mt-4 max-w-3xl text-lg leading-8 text-zinc-400">
          GitHub Actions runs the policy gate on every push and pull request to
          main. The workflow preserves a machine-readable JSON report as an
          artifact so each evaluation run can be reviewed later.
        </p>

        <div className="mt-10 overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-950 p-3">
          <Image
            src="/projects/github-actions-success.png"
            alt="Successful GitHub Actions guardrail workflow"
            width={1600}
            height={900}
            className="h-auto w-full rounded-2xl"
          />
        </div>
      </section>

      <section className="border-y border-zinc-900 bg-zinc-950/60">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <p className="text-sm uppercase tracking-[0.25em] text-zinc-500">
            Engineering Takeaways
          </p>

          <h2 className="mt-3 text-3xl font-bold">
            What this project demonstrates
          </h2>

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {[
              "LLM safety and governance",
              "NeMo Guardrails integration",
              "Jailbreak and secret-extraction testing",
              "False-positive and false-negative analysis",
              "Latency benchmarking",
              "Automated AI regression testing",
              "GitHub Actions CI/CD gates",
              "Machine-readable evaluation reporting",
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
              href="https://github.com/sriyukthasakhamuri/ci-llm-guardrail-evaluation"
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