import Image from "next/image";
import Link from "next/link";

const stack = [
  "Power BI",
  "SQL",
  "Python",
  "DAX",
  "Retail Analytics",
  "KPI Monitoring",
];

const capabilities = [
  {
    number: "01",
    title: "Executive KPI monitoring",
    description:
      "The dashboard brings together revenue, orders, inventory, availability, and fulfillment metrics into a single operational view.",
  },
  {
    number: "02",
    title: "Inventory visibility",
    description:
      "Low-stock and availability views help identify products and categories that may require replenishment or closer monitoring.",
  },
  {
    number: "03",
    title: "Order tracking",
    description:
      "Operational reporting follows orders through key stages so delays and fulfillment issues can be identified more quickly.",
  },
  {
    number: "04",
    title: "Trend analysis",
    description:
      "Time-based visuals help users understand changes in sales, demand, stock levels, and operational performance.",
  },
  {
    number: "05",
    title: "Interactive filtering",
    description:
      "Slicers and drill-down controls allow users to explore performance by category, product, period, and operational dimension.",
  },
  {
    number: "06",
    title: "Decision support",
    description:
      "The control-tower layout is designed to help business users move from high-level KPIs to the specific operational areas driving change.",
  },
];

export default function RetailAnalyticsControlTowerPage() {
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
              Business Intelligence Case Study
            </p>

            <h1 className="mt-4 text-4xl font-bold tracking-tight md:text-6xl">
              Retail Analytics Control Tower
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
              An interactive retail analytics dashboard designed to centralize
              sales, inventory, order, and fulfillment KPIs so operational
              performance can be monitored from a single control-tower view.
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
                href="https://github.com/sriyukthasakhamuri"
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
                Explore Dashboard
              </a>
            </div>
          </div>

          <div className="overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-950 p-3">
            <Image
              src="/projects/retail-control-tower.png"
              alt="Retail Analytics Control Tower dashboard"
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
            ["Sales", "Revenue Visibility"],
            ["Inventory", "Stock Monitoring"],
            ["Orders", "Fulfillment Tracking"],
            ["Power BI", "Interactive Reporting"],
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
              Retail performance is difficult to manage when KPIs live in
              separate reports.
            </h2>
          </div>

          <p className="text-lg leading-8 text-zinc-400">
            Sales, inventory, and fulfillment decisions often depend on
            multiple disconnected data views. The control tower brings these
            signals together so users can identify stock risk, order issues,
            demand changes, and performance trends from one dashboard.
          </p>
        </div>
      </section>

      <section
        id="workflow"
        className="border-y border-zinc-900 bg-zinc-950/60"
      >
        <div className="mx-auto max-w-6xl px-6 py-20">
          <p className="text-sm uppercase tracking-[0.25em] text-zinc-500">
            Analytics Workflow
          </p>

          <h2 className="mt-3 text-3xl font-bold">
            From raw retail data to operational decisions
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
          Dashboard Design
        </p>

        <h2 className="mt-3 text-3xl font-bold">
          A control-tower view for rapid operational scanning
        </h2>

        <p className="mt-4 max-w-3xl text-lg leading-8 text-zinc-400">
          The dashboard prioritizes top-level KPI visibility first, then gives
          users the ability to move into trends, categories, inventory
          conditions, and order-level operational detail.
        </p>

        <div className="mt-10 overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-950 p-3">
          <Image
            src="/projects/retail-control-tower.png"
            alt="Retail Analytics Control Tower dashboard overview"
            width={1600}
            height={900}
            className="h-auto w-full rounded-2xl"
          />
        </div>
      </section>

      <section className="border-y border-zinc-900 bg-zinc-950/60">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <p className="text-sm uppercase tracking-[0.25em] text-zinc-500">
            Business Questions
          </p>

          <h2 className="mt-3 text-3xl font-bold">
            Designed around practical retail decisions
          </h2>

          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {[
              "Which products or categories are driving current sales?",
              "Where are low-stock conditions creating availability risk?",
              "How are order volumes and fulfillment patterns changing?",
              "Which operational KPIs require immediate attention?",
              "How does performance vary across time periods?",
              "Where should teams investigate unexpected changes?",
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
              "Business intelligence dashboard design",
              "Retail KPI modeling",
              "Power BI and DAX development",
              "SQL-based data preparation",
              "Inventory and fulfillment analytics",
              "Interactive filtering and drill-down",
              "Operational trend analysis",
              "Decision-focused data storytelling",
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
              href="https://github.com/sriyukthasakhamuri"
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-white px-6 py-3 font-medium text-black transition hover:bg-zinc-200"
            >
              View GitHub
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