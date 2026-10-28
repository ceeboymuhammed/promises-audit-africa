
"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Check,
  ChevronDown,
  CircleDot,
  Clock3,
  Globe2,
  Menu,
  Search,
  ShieldCheck,
  Sparkles,
  X,
} from "lucide-react";

type Status = "New" | "Ongoing" | "Delivered" | "Failed";

type PromiseRecord = {
  id: string;
  title: string;
  promisor: string;
  location: string;
  sector: string;
  status: Status;
  progress: number;
  deadline: string;
  description: string;
  accent: string;
};

const promises: PromiseRecord[] = [
  {
    id: "PAA-001",
    title: "Improve access to clean drinking water",
    promisor: "Sample public institution",
    location: "Abuja, Nigeria",
    sector: "Water",
    status: "Ongoing",
    progress: 55,
    deadline: "December 2027",
    description:
      "A sample commitment to improve access to reliable and safe drinking water.",
    accent: "from-cyan-400 to-blue-500",
  },
  {
    id: "PAA-002",
    title: "Rehabilitate a community access road",
    promisor: "Sample government agency",
    location: "Lagos, Nigeria",
    sector: "Infrastructure",
    status: "New",
    progress: 0,
    deadline: "Not established",
    description:
      "A sample road rehabilitation commitment awaiting initial assessment.",
    accent: "from-violet-500 to-fuchsia-500",
  },
  {
    id: "PAA-003",
    title: "Expand access to primary education",
    promisor: "Sample education authority",
    location: "Kogi, Nigeria",
    sector: "Education",
    status: "Delivered",
    progress: 100,
    deadline: "Sample record",
    description:
      "A demonstration record showing how a completed commitment will appear.",
    accent: "from-emerald-400 to-teal-500",
  },
  {
    id: "PAA-004",
    title: "Restore electricity to underserved areas",
    promisor: "Sample public institution",
    location: "Kaduna, Nigeria",
    sector: "Power",
    status: "Failed",
    progress: 20,
    deadline: "Under review",
    description:
      "A demonstration record for the failed status. This is not an actual audit finding.",
    accent: "from-orange-400 to-rose-500",
  },
  {
    id: "PAA-005",
    title: "Upgrade a community health facility",
    promisor: "Sample health authority",
    location: "Enugu, Nigeria",
    sector: "Health",
    status: "Ongoing",
    progress: 40,
    deadline: "June 2027",
    description:
      "A sample commitment illustrating project milestones and progress tracking.",
    accent: "from-blue-400 to-violet-500",
  },
  {
    id: "PAA-006",
    title: "Improve neighbourhood waste collection",
    promisor: "Sample local authority",
    location: "Abuja, Nigeria",
    sector: "Environment",
    status: "Ongoing",
    progress: 70,
    deadline: "March 2027",
    description:
      "A sample environmental commitment with progress yet to be independently verified.",
    accent: "from-teal-400 to-cyan-500",
  },
];

const statusStyles: Record<Status, string> = {
  New: "bg-blue-50 text-blue-700 ring-blue-100",
  Ongoing: "bg-amber-50 text-amber-700 ring-amber-100",
  Delivered: "bg-emerald-50 text-emerald-700 ring-emerald-100",
  Failed: "bg-rose-50 text-rose-700 ring-rose-100",
};

const filters = ["All", "New", "Ongoing", "Delivered", "Failed"];

function NetworkGraphic() {
  const nodes = [
    [35, 100], [83, 58], [113, 125], [55, 176],
    [135, 200], [180, 95], [193, 155], [233, 55],
    [265, 112], [250, 188], [300, 150], [318, 80],
    [342, 207], [287, 240], [200, 240],
  ];

  const edges = [
    [0, 1], [0, 3], [1, 2], [1, 5], [2, 3], [2, 4],
    [2, 5], [3, 4], [4, 6], [4, 14], [5, 6], [5, 7],
    [6, 8], [6, 14], [7, 8], [7, 11], [8, 9], [8, 11],
    [9, 10], [9, 12], [9, 14], [10, 11], [10, 12],
    [12, 13], [12, 14], [13, 14],
  ];

  return (
    <svg
      viewBox="0 0 380 280"
      fill="none"
      className="h-auto w-full"
      role="img"
      aria-label="Connected network representing public accountability"
    >
      <defs>
        <linearGradient id="networkGradient" x1="20" y1="20" x2="340" y2="250">
          <stop stopColor="#10C7D5" />
          <stop offset=".5" stopColor="#397FE8" />
          <stop offset="1" stopColor="#D52BEA" />
        </linearGradient>
      </defs>
      {edges.map(([a, b], i) => (
        <line
          key={i}
          x1={nodes[a][0]}
          y1={nodes[a][1]}
          x2={nodes[b][0]}
          y2={nodes[b][1]}
          stroke="url(#networkGradient)"
          strokeWidth="2"
          opacity=".65"
        />
      ))}
      {nodes.map(([x, y], i) => (
        <circle
          key={i}
          cx={x}
          cy={y}
          r={i % 4 === 0 ? 8 : 5}
          fill="url(#networkGradient)"
        />
      ))}
      {[42, 65, 88].map((r, i) => (
        <path
          key={r}
          d={`M ${335 + i * 2} ${140 - r} A ${r} ${r} 0 0 1 ${335 + i * 2} ${140 + r}`}
          stroke="url(#networkGradient)"
          strokeWidth="5"
          strokeLinecap="round"
          opacity={1 - i * 0.2}
        />
      ))}
    </svg>
  );
}

function PromiseCard({ item }: { item: PromiseRecord }) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-slate-200/80 bg-white transition duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-xl hover:shadow-slate-200/50">
      <div className={`h-1.5 bg-gradient-to-r ${item.accent}`} />
      <div className="p-5 sm:p-6">
        <div className="flex items-center justify-between gap-3">
          <span className="text-xs font-semibold tracking-wider text-slate-400">
            {item.id}
          </span>
          <span
            className={`rounded-full px-3 py-1 text-xs font-semibold ring-1 ring-inset ${statusStyles[item.status]}`}
          >
            {item.status}
          </span>
        </div>

        <div className="mt-5 flex h-12 w-12 items-center justify-center rounded-xl bg-slate-50 text-slate-700 transition group-hover:bg-cyan-50 group-hover:text-cyan-700">
          {item.status === "Delivered" ? (
            <Check size={23} />
          ) : item.status === "Failed" ? (
            <ShieldCheck size={23} />
          ) : item.status === "New" ? (
            <Sparkles size={23} />
          ) : (
            <CircleDot size={23} />
          )}
        </div>

        <h3 className="mt-5 min-h-[3.5rem] text-lg font-semibold leading-snug tracking-tight text-slate-900">
          {item.title}
        </h3>
        <p className="mt-2 text-sm text-slate-500">{item.promisor}</p>

        <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-slate-500">
          <span>{item.location}</span>
          <span className="text-slate-300">•</span>
          <span>{item.sector}</span>
        </div>

        <div className="mt-6">
          <div className="flex items-center justify-between text-xs">
            <span className="font-medium text-slate-600">
              Illustrative progress
            </span>
            <span className="font-semibold text-slate-900">
              {item.progress}%
            </span>
          </div>
          <div
            className="mt-2 h-1.5 overflow-hidden rounded-full bg-slate-100"
            role="progressbar"
            aria-label={`Illustrative progress for ${item.title}`}
            aria-valuenow={item.progress}
            aria-valuemin={0}
            aria-valuemax={100}
          >
            <div
              className={`h-full rounded-full bg-gradient-to-r ${item.accent}`}
              style={{ width: `${item.progress}%` }}
            />
          </div>
        </div>

        <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4">
          <span className="text-xs text-slate-500">
            Due: {item.deadline}
          </span>
          <Link
            href={`/promises/${item.id}`}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-900 transition group-hover:text-violet-700"
          >
            View record <ArrowUpRight size={15} />
          </Link>
        </div>
      </div>
    </article>
  );
}

export default function Home() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [search, setSearch] = useState("");
  const [mobileMenu, setMobileMenu] = useState(false);

  const filteredPromises = useMemo(() => {
    return promises.filter((item) => {
      const matchesStatus =
        activeFilter === "All" || item.status === activeFilter;
      const query = search.toLowerCase().trim();
      const matchesSearch =
        !query ||
        [
          item.title,
          item.promisor,
          item.location,
          item.sector,
          item.id,
        ].some((value) => value.toLowerCase().includes(query));

      return matchesStatus && matchesSearch;
    });
  }, [activeFilter, search]);

  return (
    <main className="min-h-screen overflow-hidden bg-white text-slate-900">
      <div className="border-b border-slate-100 bg-slate-50 px-4 py-2 text-center text-xs font-medium text-slate-600">
        A public record of promises, progress and accountability.
      </div>

      <header className="sticky top-0 z-40 border-b border-slate-100/80 bg-white/90 backdrop-blur-xl">
        <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10">
          <Link href="/" className="flex items-center gap-3">
            <div className="relative h-12 w-12 shrink-0">
              <Image
                src="/logo.jpg"
                alt="Promises Audit Africa logo"
                fill
                sizes="48px"
                className="object-contain"
                priority
              />
            </div>
            <div>
              <div className="text-sm font-extrabold tracking-tight text-slate-900 sm:text-base">
                PROMISES AUDIT
              </div>
              <div className="text-[10px] font-bold tracking-[0.24em] text-slate-500">
                AFRICA
              </div>
            </div>
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            <Link href="/promises" className="text-sm text-slate-600 hover:text-slate-950">
              Explore promises
            </Link>
            <a href="#how-it-works" className="text-sm text-slate-600 hover:text-slate-950">
              How it works
            </a>
            <a href="#about" className="text-sm text-slate-600 hover:text-slate-950">
              About
            </a>
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <Link
              href="/submit"
              className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-violet-700"
            >
              Submit a promise <ArrowUpRight size={16} />
            </Link>
          </div>

          <button
            type="button"
            aria-label={mobileMenu ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenu}
            onClick={() => setMobileMenu(!mobileMenu)}
            className="rounded-lg border border-slate-200 p-2 md:hidden"
          >
            {mobileMenu ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>

        {mobileMenu && (
          <nav className="grid gap-1 border-t border-slate-100 bg-white p-4 md:hidden">
            <Link onClick={() => setMobileMenu(false)} href="/promises" className="rounded-lg p-3 text-sm hover:bg-slate-50">
              Explore promises
            </Link>
            <a onClick={() => setMobileMenu(false)} href="#how-it-works" className="rounded-lg p-3 text-sm hover:bg-slate-50">
              How it works
            </a>
            <a onClick={() => setMobileMenu(false)} href="#about" className="rounded-lg p-3 text-sm hover:bg-slate-50">
              About
            </a>
            <Link onClick={() => setMobileMenu(false)} href="/submit" className="rounded-lg bg-slate-900 p-3 text-sm font-semibold text-white">
              Submit a promise
            </Link>
          </nav>
        )}
      </header>

      <section className="relative isolate">
        <div className="pointer-events-none absolute -right-40 -top-20 -z-10 h-[500px] w-[500px] rounded-full bg-gradient-to-br from-cyan-100 via-violet-100 to-fuchsia-100 opacity-60 blur-3xl" />
        <div className="mx-auto grid max-w-7xl items-center gap-8 px-5 pb-16 pt-14 sm:px-8 sm:pb-24 sm:pt-20 lg:grid-cols-[1.05fr_.95fr] lg:gap-12 lg:px-10 lg:pb-28 lg:pt-24">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-3.5 py-2 text-xs font-semibold text-slate-600 shadow-sm">
              <span className="h-2 w-2 rounded-full bg-gradient-to-r from-cyan-400 to-fuchsia-500" />
              ACCOUNTABILITY, MADE VISIBLE
            </div>

            <h1 className="mt-7 text-[2.9rem] font-semibold leading-[1.04] tracking-[-0.055em] sm:text-6xl lg:text-[4.65rem]">
              Every promise
              <br />
              deserves an{" "}
              <span className="bg-gradient-to-r from-cyan-500 via-blue-600 to-fuchsia-600 bg-clip-text text-transparent">
                answer.
              </span>
            </h1>

            <p className="mt-6 max-w-lg text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
              Track commitments. Follow the evidence. See what gets delivered.
              A public record for a more accountable Africa.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/promises"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-900 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-violet-700"
              >
                Explore the register <ArrowRight size={17} />
              </Link>
              <Link
                href="/submit"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-3.5 text-sm font-semibold text-slate-800 transition hover:border-slate-400"
              >
                Submit a promise <ArrowUpRight size={16} />
              </Link>
            </div>

            <div className="mt-9 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-slate-500">
              <span className="inline-flex items-center gap-1.5">
                <ShieldCheck size={15} className="text-emerald-600" />
                Evidence-led
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Globe2 size={15} className="text-blue-600" />
                Africa-focused
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Clock3 size={15} className="text-violet-600" />
                Progress over time
              </span>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[540px]">
            <div className="absolute inset-8 rounded-full bg-gradient-to-br from-cyan-200/60 via-blue-200/50 to-fuchsia-200/60 blur-3xl" />
            <div className="relative rounded-[2rem] border border-white bg-white/70 p-5 shadow-2xl shadow-violet-100/60 backdrop-blur sm:p-8">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                    The promise network
                  </p>
                  <h2 className="mt-1 text-lg font-semibold tracking-tight">
                    From words to evidence
                  </h2>
                </div>
                <span className="rounded-full bg-cyan-50 px-3 py-1.5 text-xs font-semibold text-cyan-800">
                  Traceable
                </span>
              </div>

              <div className="my-5 rounded-2xl bg-gradient-to-br from-slate-50 to-white p-3 sm:p-5">
                <NetworkGraphic />
              </div>

              <div className="grid grid-cols-3 gap-2">
                <div className="rounded-xl border border-slate-100 bg-white p-3">
                  <span className="text-xs text-slate-500">01</span>
                  <p className="mt-1 text-sm font-semibold">Track</p>
                </div>
                <div className="rounded-xl border border-slate-100 bg-white p-3">
                  <span className="text-xs text-slate-500">02</span>
                  <p className="mt-1 text-sm font-semibold">Verify</p>
                </div>
                <div className="rounded-xl border border-slate-100 bg-white p-3">
                  <span className="text-xs text-slate-500">03</span>
                  <p className="mt-1 text-sm font-semibold">Recognise</p>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-5 -left-3 hidden items-center gap-3 rounded-2xl border border-slate-100 bg-white p-4 shadow-xl sm:flex">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-700">
                <Check size={21} />
              </div>
              <div>
                <p className="text-sm font-semibold">Evidence matters</p>
                <p className="text-xs text-slate-500">Every finding needs a basis</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-100 bg-slate-50/70">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px px-5 py-5 sm:px-8 lg:grid-cols-4 lg:px-10">
          {[
            ["01", "New promises"],
            ["02", "Being tracked"],
            ["03", "Delivered"],
            ["04", "Failed / unmet"],
          ].map(([number, label], i) => (
            <div key={number} className="flex items-center gap-3 px-3 py-4 sm:px-6">
              <span className={`text-xl font-semibold tracking-tight sm:text-2xl ${
                i === 0 ? "text-blue-600" :
                i === 1 ? "text-amber-600" :
                i === 2 ? "text-emerald-600" : "text-rose-600"
              }`}>
                {number}
              </span>
              <span className="text-sm font-medium text-slate-600">{label}</span>
            </div>
          ))}
        </div>
      </section>

      <section id="promises" className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-24">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <div className="text-xs font-bold uppercase tracking-[0.22em] text-violet-600">
              The public register
            </div>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              Promises in focus<span className="text-violet-600">.</span>
            </h2>
            <p className="mt-3 max-w-xl text-sm leading-6 text-slate-500 sm:text-base">
              Explore commitments, review progress and follow the evidence.
            </p>
          </div>
          <Link
            href="/promises"
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-800 hover:text-violet-700"
          >
            View all promises <ArrowDownRight size={17} />
          </Link>
        </div>

        <div className="mt-9 rounded-2xl border border-slate-200 bg-white p-3 sm:p-4">
          <div className="flex flex-col gap-3 lg:flex-row">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
              <input
                type="search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search a promise, institution or location..."
                aria-label="Search promises"
                className="h-12 w-full rounded-xl border border-slate-200 bg-slate-50 pl-11 pr-4 text-sm outline-none transition placeholder:text-slate-400 focus:border-violet-400 focus:bg-white focus:ring-4 focus:ring-violet-50"
              />
            </div>
            <div className="flex gap-1.5 overflow-x-auto pb-1 lg:pb-0">
              {filters.map((filter) => (
                <button
                  key={filter}
                  type="button"
                  onClick={() => setActiveFilter(filter)}
                  aria-pressed={activeFilter === filter}
                  className={`shrink-0 rounded-xl px-4 py-3 text-sm font-medium transition ${
                    activeFilter === filter
                      ? "bg-slate-900 text-white"
                      : "bg-slate-50 text-slate-600 hover:bg-slate-100"
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-7 flex items-center justify-between">
          <p className="text-sm text-slate-500">
            <span className="font-semibold text-slate-900">{filteredPromises.length}</span>{" "}
            demonstration records
          </p>
          <button
            type="button"
            onClick={() => {
              setSearch("");
              setActiveFilter("All");
            }}
            className="inline-flex items-center gap-1 text-xs font-medium text-slate-500 hover:text-slate-900"
          >
            Reset filters <ChevronDown size={14} />
          </button>
        </div>

        <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filteredPromises.map((item) => (
            <PromiseCard key={item.id} item={item} />
          ))}
        </div>

        {filteredPromises.length === 0 && (
          <div className="rounded-2xl border border-dashed border-slate-300 py-16 text-center">
            <Search className="mx-auto text-slate-400" size={28} />
            <h3 className="mt-4 font-semibold">No matching promises</h3>
            <p className="mt-2 text-sm text-slate-500">
              Try another search term or status.
            </p>
            <button
              type="button"
              onClick={() => {
                setSearch("");
                setActiveFilter("All");
              }}
              className="mt-4 text-sm font-semibold text-violet-700"
            >
              Clear filters
            </button>
          </div>
        )}

        <p className="mt-7 text-xs leading-5 text-slate-400">
          Demonstration data only. These records, progress percentages and
          institutions are fictional examples, not verified audit findings.
        </p>
      </section>

      <section id="how-it-works" className="bg-slate-950 text-white">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-24">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-cyan-300">
              How it works
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              Accountability is a process.
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-400 sm:text-base">
              A commitment becomes meaningful when people can follow its
              progress and examine the evidence.
            </p>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {[
              {
                no: "01",
                title: "Track",
                desc: "Record the original promise, its source, scope and deadline.",
                color: "text-cyan-300",
              },
              {
                no: "02",
                title: "Verify",
                desc: "Monitor progress, examine evidence and document findings.",
                color: "text-violet-300",
              },
              {
                no: "03",
                title: "Recognise",
                desc: "Celebrate verified delivery and explain unmet commitments fairly.",
                color: "text-fuchsia-300",
              },
            ].map((step) => (
              <div
                key={step.no}
                className="rounded-2xl border border-white/10 bg-white/[0.04] p-7 transition hover:bg-white/[0.07]"
              >
                <span className={`text-sm font-bold ${step.color}`}>{step.no}</span>
                <h3 className="mt-8 text-xl font-semibold">{step.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-400">{step.desc}</p>
                <div className={`mt-8 h-1 w-12 rounded-full bg-gradient-to-r from-cyan-400 to-fuchsia-500`} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-24">
        <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-cyan-50 via-white to-fuchsia-50 p-7 sm:p-12 lg:p-16">
          <div className="absolute -right-12 -top-16 h-56 w-56 rounded-full bg-violet-200/40 blur-3xl" />
          <div className="relative max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-violet-700">
              Be part of the record
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-5xl">
              Have a promise we should track?
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-7 text-slate-600 sm:text-base">
              Help document public commitments by sharing the original source,
              project details and evidence. Every submission is reviewed before
              publication.
            </p>
            <Link
              href="/submit"
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-slate-900 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-violet-700"
            >
              Submit a promise <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-100 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-5 py-8 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-10">
          <Link href="/" className="flex items-center gap-3">
            <div className="relative h-9 w-9">
              <Image src="/logo.jpg" alt="" fill sizes="36px" className="object-contain" />
            </div>
            <div>
              <p className="text-xs font-bold tracking-tight">PROMISES AUDIT AFRICA</p>
              <p className="mt-1 text-xs text-slate-500">A public record of accountability.</p>
            </div>
          </Link>

          <div className="flex flex-wrap gap-x-5 gap-y-3 text-xs text-slate-500">
            <Link href="/methodology" className="hover:text-slate-900">Methodology</Link>
            <Link href="/privacy" className="hover:text-slate-900">Privacy</Link>
            <Link href="/contact" className="hover:text-slate-900">Contact</Link>
          </div>

          <p className="text-xs text-slate-400">
             © 2026 Clin MultiCom Services | All rights reserved. 
             
          </p>
        </div>
      </footer>
    </main>
  );
}
