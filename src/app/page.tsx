import Image from "next/image";

const projects = [
  {
    title: "InsightPilot AI Analytics",
    description:
      "Agentic AI analytics platform for customer churn intelligence, risk scoring, explainability, semantic retrieval, and business-facing AI insights.",
    stack:
      "Python • FastAPI • LangGraph • Ollama • PostgreSQL • Machine Learning • RAG",
    github:
      "https://github.com/sriyukthasakhamuri/insightpilot-ai-analytics",
    image: "/projects/insightpilot-dashboard.png",
  },
  {
    title: "StreamSight Real-Time AI",
    description:
      "Real-time AI operations analytics platform that streams order events with Kafka, detects anomalies, persists data in PostgreSQL, and generates grounded AI operational summaries.",
    stack:
      "Python • Kafka • PostgreSQL • FastAPI • Streamlit • Docker • Ollama",
    github:
      "https://github.com/sriyukthasakhamuri/streamsight-real-time-ai",
    image: "/projects/streamsight-dashboard.png",
  },
  {
    title: "Retail Analytics Control Tower",
    description:
      "End-to-end retail analytics solution combining Python, SQL, DuckDB, and Power BI to monitor sales, delivery performance, customer behavior, and operational risk.",
    stack:
      "Python • SQL • DuckDB • Power BI • Analytics Engineering",
    github:
      "https://github.com/sriyukthasakhamuri/accenture-retail-control-tower",
    image: "/projects/retail-control-tower.png",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <header className="fixed left-0 top-0 z-50 w-full border-b border-zinc-900 bg-black/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#home" className="text-lg font-semibold tracking-tight">
            Sriyuktha Sakhamuri
          </a>

          <nav className="hidden gap-6 text-sm text-zinc-400 md:flex">
            <a href="#home" className="transition hover:text-white">
              Home
            </a>

            <a href="#projects" className="transition hover:text-white">
              Projects
            </a>

            <a href="#about" className="transition hover:text-white">
              About
            </a>

            <a href="#skills" className="transition hover:text-white">
              Skills
            </a>

            <a href="#resume" className="transition hover:text-white">
              Resume
            </a>

            <a href="#contact" className="transition hover:text-white">
              Contact
            </a>
          </nav>
        </div>
      </header>

      {/* Home */}
      <section
        id="home"
        className="mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-6 py-20 pt-28"
      >
        <p className="mb-4 text-sm uppercase tracking-[0.3em] text-zinc-400">
          AI • Analytics • Engineering
        </p>

        <h1 className="max-w-4xl text-5xl font-bold leading-tight sm:text-6xl md:text-7xl">
          Building intelligent data products that turn real-time data into
          decisions.
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
          I build AI-powered analytics systems, real-time data pipelines,
          machine learning solutions, and business intelligence applications
          using Python, SQL, Kafka, FastAPI, PostgreSQL, Power BI, and LLMs.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="#projects"
            className="rounded-full bg-white px-6 py-3 font-medium text-black transition hover:bg-zinc-200"
          >
            View Projects
          </a>

          <a
            href="https://github.com/sriyukthasakhamuri"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-zinc-700 px-6 py-3 font-medium transition hover:border-white"
          >
            GitHub
          </a>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="mx-auto max-w-6xl px-6 py-24">
        <div className="mb-12">
          <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">
            Selected Work
          </p>

          <h2 className="mt-3 text-4xl font-bold">Featured Projects</h2>

          <p className="mt-4 max-w-2xl text-zinc-400">
            Projects focused on AI analytics, real-time data systems, machine
            learning, and business intelligence.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="flex min-h-[520px] flex-col rounded-3xl border border-zinc-800 bg-zinc-950 p-7 transition duration-300 hover:-translate-y-1 hover:border-zinc-600"
            >
              <div className="mb-6 overflow-hidden rounded-2xl border border-zinc-800">
                <Image
                  src={project.image}
                  alt={`${project.title} dashboard`}
                  width={1200}
                  height={700}
                  className="h-48 w-full object-cover"
                />
              </div>

              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl border border-zinc-800 bg-black text-xl">
                ✦
              </div>

              <h3 className="text-2xl font-semibold">{project.title}</h3>

              <p className="mt-4 leading-7 text-zinc-400">
                {project.description}
              </p>

              <p className="mt-5 text-sm leading-6 text-zinc-500">
                {project.stack}
              </p>

              <div className="mt-auto pt-7">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-medium text-white hover:text-zinc-300"
                >
                  View on GitHub
                  <span>↗</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* About */}
      <section id="about" className="mx-auto max-w-6xl px-6 py-24">
        <div className="grid gap-12 md:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">
              About
            </p>

            <h2 className="mt-3 text-4xl font-bold">
              Building at the intersection of AI, data, and analytics.
            </h2>
          </div>

          <div className="space-y-6 text-lg leading-8 text-zinc-400">
            <p>
              I am a data and AI professional focused on building practical
              analytics products that turn complex data into clear business
              decisions.
            </p>

            <p>
              My work combines analytics engineering, machine learning,
              real-time data systems, business intelligence, and generative AI.
              I enjoy building complete solutions — from data pipelines and APIs
              to dashboards and AI-powered user experiences.
            </p>

            <p>
              Recent projects include an agentic churn analytics platform, a
              real-time Kafka-based operations intelligence system, and an
              end-to-end retail analytics control tower.
            </p>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="mx-auto max-w-6xl px-6 py-24">
        <div className="mb-12">
          <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">
            Skills
          </p>

          <h2 className="mt-3 text-4xl font-bold">
            Tools I use to build data and AI products.
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-3xl border border-zinc-800 bg-zinc-950 p-6">
            <h3 className="text-xl font-semibold">Data & Analytics</h3>
            <p className="mt-4 leading-7 text-zinc-400">
              Python, SQL, Pandas, NumPy, DuckDB, Power BI, Tableau, Excel
            </p>
          </div>

          <div className="rounded-3xl border border-zinc-800 bg-zinc-950 p-6">
            <h3 className="text-xl font-semibold">
              AI & Machine Learning
            </h3>
            <p className="mt-4 leading-7 text-zinc-400">
              Machine Learning, LLMs, RAG, LangGraph, Ollama, Prompt Engineering
            </p>
          </div>

          <div className="rounded-3xl border border-zinc-800 bg-zinc-950 p-6">
            <h3 className="text-xl font-semibold">Data Engineering</h3>
            <p className="mt-4 leading-7 text-zinc-400">
              Apache Kafka, PostgreSQL, Spark, PySpark, Databricks, Airflow
            </p>
          </div>

          <div className="rounded-3xl border border-zinc-800 bg-zinc-950 p-6">
            <h3 className="text-xl font-semibold">Backend & APIs</h3>
            <p className="mt-4 leading-7 text-zinc-400">
              FastAPI, REST APIs, PostgreSQL, Docker
            </p>
          </div>

          <div className="rounded-3xl border border-zinc-800 bg-zinc-950 p-6">
            <h3 className="text-xl font-semibold">Cloud & Platforms</h3>
            <p className="mt-4 leading-7 text-zinc-400">
              AWS S3, Glue, Athena, Git, GitHub, Docker
            </p>
          </div>

          <div className="rounded-3xl border border-zinc-800 bg-zinc-950 p-6">
            <h3 className="text-xl font-semibold">
              Frontend & Visualization
            </h3>
            <p className="mt-4 leading-7 text-zinc-400">
              Streamlit, React, Next.js, TypeScript, Tailwind CSS
            </p>
          </div>
        </div>
      </section>
      {/* Resume */}
<section
  id="resume"
  className="mx-auto max-w-6xl px-6 py-24"
>
  <div className="rounded-3xl border border-zinc-800 bg-zinc-950 p-8 md:p-12">
    <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">
      Resume
    </p>

    <h2 className="mt-3 text-4xl font-bold">
      Experience across AI, analytics, and data engineering.
    </h2>

    <p className="mt-5 max-w-2xl text-lg leading-8 text-zinc-400">
      Explore my experience building AI systems, analytics solutions,
      real-time data pipelines, dashboards, and machine learning applications.
    </p>

    <div className="mt-8">
      <a
        href="/resume/Sriyuktha_Sakhamuri_Resume.pdf"
        target="_blank"
        className="rounded-full bg-white px-6 py-3 font-medium text-black transition hover:bg-zinc-200"
      >
        View Resume
      </a>
    </div>
  </div>
</section>

      {/* Contact */}
      <section id="contact" className="mx-auto max-w-6xl px-6 py-24">
        <div className="rounded-3xl border border-zinc-800 bg-zinc-950 p-8 md:p-12">
          <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">
            Contact
          </p>

          <h2 className="mt-3 max-w-3xl text-4xl font-bold">
            Let&apos;s connect about AI, analytics, and data engineering
            opportunities.
          </h2>

          <p className="mt-5 max-w-2xl text-lg leading-8 text-zinc-400">
            I&apos;m interested in opportunities where I can build practical
            AI, analytics, and data products that solve real business problems.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="mailto:sriyukthasakhamuri@gmail.com"
              className="rounded-full bg-white px-6 py-3 font-medium text-black transition hover:bg-zinc-200"
            >
              Email Me
            </a>

            <a
              href="https://www.linkedin.com/in/sriyuktha-sakhamuri-7a909a375/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-zinc-700 px-6 py-3 font-medium transition hover:border-white"
            >
              LinkedIn
            </a>

            <a
              href="https://github.com/sriyukthasakhamuri"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-zinc-700 px-6 py-3 font-medium transition hover:border-white"
            >
              GitHub
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}