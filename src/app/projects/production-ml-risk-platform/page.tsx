import Image from "next/image";
import Link from "next/link";

const metrics = [
  {
    value: "0.8354",
    label: "Best ROC-AUC",
    detail: "Logistic Regression on the project test split",
  },
  {
    value: "3",
    label: "Models Compared",
    detail: "Logistic Regression, Random Forest, HistGradientBoosting",
  },
  {
    value: "87.5%",
    label: "Controlled Drift Detected",
    detail: "7 of 8 monitored features in the synthetic drift scenario",
  },
  {
    value: "6",
    label: "Automated Tests",
    detail: "API and ML pipeline tests passing in CI",
  },
];

const stack = [
  "Python",
  "scikit-learn",
  "MLflow",
  "FastAPI",
  "Evidently",
  "Docker",
  "GitHub Actions",
  "pytest",
];

export default function ProductionMLRiskPlatformPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <header className="border-b border-zinc-900">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
          <Link
            href="/"
            className="text-sm font-medium text-zinc-400 transition hover:text-white"
          >
            ← Back to Portfolio
          </Link>

          <a
            href="https://github.com/sriyukthasakhamuri/production-ml-risk-platform"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-zinc-700 px-5 py-2 text-sm font-medium transition hover:border-zinc-500"
          >
            View GitHub
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-6 pb-20 pt-20">
        <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">
          Machine Learning · MLOps · Production AI
        </p>

        <h1 className="mt-5 max-w-5xl text-5xl font-bold tracking-tight md:text-7xl">
          Production ML Risk Prediction Platform
        </h1>

        <p className="mt-7 max-w-3xl text-lg leading-8 text-zinc-400">
          An end-to-end machine learning platform for customer churn-risk
          prediction with experiment tracking, real-time inference, production
          logging, drift detection, automated retraining, Dockerized serving,
          testing, and continuous integration.
        </p>

        <div className="mt-8 flex flex-wrap gap-2">
          {stack.map((item) => (
            <span
              key={item}
              className="rounded-full border border-zinc-800 bg-zinc-950 px-4 py-2 text-sm text-zinc-300"
            >
              {item}
            </span>
          ))}
        </div>
      </section>

      {/* Architecture Image */}
      <section className="mx-auto max-w-6xl px-6 pb-20">
        <div className="overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-950">
          <Image
            src="/projects/production-ml-risk-platform.png"
            alt="Production ML Risk Prediction Platform architecture"
            width={1600}
            height={1000}
            className="h-auto w-full"
            priority
          />
        </div>
      </section>

      {/* Metrics */}
      <section className="mx-auto max-w-6xl px-6 pb-24">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {metrics.map((metric) => (
            <div
              key={metric.label}
              className="rounded-2xl border border-zinc-800 bg-zinc-950 p-6"
            >
              <p className="text-3xl font-bold">{metric.value}</p>
              <p className="mt-2 font-medium">{metric.label}</p>
              <p className="mt-2 text-sm leading-6 text-zinc-500">
                {metric.detail}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Problem */}
      <section className="border-y border-zinc-900">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <p className="text-sm uppercase tracking-[0.25em] text-zinc-500">
            Problem
          </p>

          <h2 className="mt-4 max-w-3xl text-4xl font-bold">
            A useful ML system needs more than a trained model.
          </h2>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-400">
            A model can perform well during development and still become
            unreliable when production data changes. This project was built to
            cover the broader ML lifecycle: reproducible training, experiment
            tracking, inference, monitoring, retraining, testing, and
            deployment.
          </p>
        </div>
      </section>

      {/* System Flow */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <p className="text-sm uppercase tracking-[0.25em] text-zinc-500">
          System Flow
        </p>

        <h2 className="mt-4 text-4xl font-bold">
          Closed-loop ML lifecycle
        </h2>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {[
            {
              title: "01 · Data & Features",
              text: "Telco churn data is cleaned, categorical features are encoded, numeric features are scaled, and AvgMonthlySpend is engineered.",
            },
            {
              title: "02 · Model Training",
              text: "Logistic Regression, Random Forest, and HistGradientBoosting are trained and evaluated using accuracy, precision, recall, F1, and ROC-AUC.",
            },
            {
              title: "03 · MLflow Tracking",
              text: "Experiments, parameters, metrics, and model artifacts are tracked to make model selection reproducible.",
            },
            {
              title: "04 · FastAPI Serving",
              text: "The selected model is exposed through a real-time prediction API that returns churn probability and a risk classification.",
            },
            {
              title: "05 · Drift Monitoring",
              text: "Evidently compares production-like feature distributions against the training baseline and measures the share of drifted features.",
            },
            {
              title: "06 · Automated Retraining",
              text: "When drift exceeds the configured 50% threshold, the system automatically reruns training, compares candidate models, and records the retraining event.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-zinc-800 bg-zinc-950 p-7"
            >
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="mt-3 leading-7 text-zinc-400">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Evaluation */}
      <section className="border-y border-zinc-900 bg-zinc-950/40">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <p className="text-sm uppercase tracking-[0.25em] text-zinc-500">
            Evaluation
          </p>

          <h2 className="mt-4 text-4xl font-bold">
            Measured, reproducible results
          </h2>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <div className="rounded-3xl border border-zinc-800 bg-black p-8">
              <h3 className="text-2xl font-semibold">Model Performance</h3>

              <p className="mt-4 leading-7 text-zinc-400">
                Logistic Regression achieved the highest ROC-AUC in the project
                test split at 0.8354 and was selected as the current best model.
              </p>

              <div className="mt-6 rounded-2xl border border-zinc-800 bg-zinc-950 p-5">
                <p className="text-sm text-zinc-500">Best ROC-AUC</p>
                <p className="mt-2 text-4xl font-bold">0.8354</p>
              </div>
            </div>

            <div className="rounded-3xl border border-zinc-800 bg-black p-8">
              <h3 className="text-2xl font-semibold">Drift Validation</h3>

              <p className="mt-4 leading-7 text-zinc-400">
                A controlled synthetic production batch intentionally shifted
                selected feature distributions to validate the monitoring
                pipeline.
              </p>

              <div className="mt-6 rounded-2xl border border-zinc-800 bg-zinc-950 p-5">
                <p className="text-sm text-zinc-500">
                  Drifted monitored features
                </p>
                <p className="mt-2 text-4xl font-bold">7 / 8</p>
                <p className="mt-2 text-sm text-zinc-500">
                  87.5% drift share in the controlled scenario
                </p>
              </div>
            </div>
          </div>

          <p className="mt-6 max-w-4xl text-sm leading-6 text-zinc-500">
            The 87.5% drift result comes from an intentionally shifted synthetic
            validation scenario designed to test the monitoring and retraining
            pipeline. It is not a claim about real production customer traffic.
          </p>
        </div>
      </section>

      {/* Production Engineering */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <p className="text-sm uppercase tracking-[0.25em] text-zinc-500">
          Production Engineering
        </p>

        <h2 className="mt-4 text-4xl font-bold">
          Built beyond the notebook
        </h2>

        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Docker",
              text: "The prediction API is containerized and verified through a live health endpoint.",
            },
            {
              title: "Automated Testing",
              text: "Six API and ML pipeline tests validate model loading, preprocessing, predictions, probabilities, and target integrity.",
            },
            {
              title: "GitHub Actions",
              text: "CI automatically installs dependencies and runs the complete pytest suite on pushes and pull requests.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-zinc-800 bg-zinc-950 p-7"
            >
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="mt-3 leading-7 text-zinc-400">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Takeaways */}
      <section className="border-t border-zinc-900">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <p className="text-sm uppercase tracking-[0.25em] text-zinc-500">
            Engineering Takeaways
          </p>

          <h2 className="mt-4 text-4xl font-bold">
            What this project demonstrates
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {[
              "Production ML requires monitoring and lifecycle management, not only model accuracy.",
              "ROC-AUC provides a stronger comparison signal than raw accuracy for imbalanced churn prediction.",
              "Experiment tracking makes model selection reproducible and auditable.",
              "Prediction logging creates the data foundation needed for production monitoring.",
              "Feature drift can automatically trigger retraining workflows.",
              "Docker, tests, and CI make inference behavior reproducible across environments.",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-zinc-800 bg-zinc-950 p-6 text-zinc-300"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="rounded-3xl border border-zinc-800 bg-zinc-950 p-10 text-center">
          <h2 className="text-3xl font-bold">Explore the implementation</h2>

          <p className="mx-auto mt-4 max-w-2xl text-zinc-400">
            View the complete training pipeline, MLflow tracking, FastAPI
            service, drift monitoring, retraining logic, tests, Docker setup,
            and CI workflow on GitHub.
          </p>

          <a
            href="https://github.com/sriyukthasakhamuri/production-ml-risk-platform"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-7 inline-flex rounded-full bg-white px-7 py-3 font-medium text-black transition hover:bg-zinc-200"
          >
            View Project on GitHub
          </a>
        </div>
      </section>
    </main>
  );
}