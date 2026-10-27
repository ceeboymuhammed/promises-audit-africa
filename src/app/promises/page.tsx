
"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  CircleDot,
  Clock3,
  Search,
  ShieldAlert,
  SlidersHorizontal,
  X,
} from "lucide-react";

type Status = "New" | "Ongoing" | "Delivered" | "Failed";

type PromiseRecord = {
  id: string;
  title: string;
  institution: string;
  country: string;
  location: string;
  sector: string;
  status: Status;
  progress: number;
  deadline: string;
  dateAdded: string;
};

const records: PromiseRecord[] = [
  {
    id: "PAA-001",
    title: "Improve access to clean drinking water",
    institution: "Sample public institution",
    country: "Nigeria",
    location: "Abuja",
    sector: "Water",
    status: "Ongoing",
    progress: 55,
    deadline: "Dec 2027",
    dateAdded: "2026-10-10",
  },
  {
    id: "PAA-002",
    title: "Rehabilitate a community access road",
    institution: "Sample government agency",
    country: "Nigeria",
    location: "Lagos",
    sector: "Infrastructure",
    status: "New",
    progress: 0,
    deadline: "Not established",
    dateAdded: "2026-10-15",
  },
  {
    id: "PAA-003",
    title: "Expand access to primary education",
    institution: "Sample education authority",
    country: "Nigeria",
    location: "Kogi",
    sector: "Education",
    status: "Delivered",
    progress: 100,
    deadline: "Sample record",
    dateAdded: "2026-09-20",
  },
  {
    id: "PAA-004",
    title: "Restore electricity to underserved areas",
    institution: "Sample public institution",
    country: "Nigeria",
    location: "Kaduna",
    sector: "Power",
    status: "Failed",
    progress: 20,
    deadline: "Under review",
    dateAdded: "2026-08-12",
  },
  {
    id: "PAA-005",
    title: "Upgrade a community health facility",
    institution: "Sample health authority",
    country: "Nigeria",
    location: "Enugu",
    sector: "Health",
    status: "Ongoing",
    progress: 40,
    deadline: "Jun 2027",
    dateAdded: "2026-10-18",
  },
  {
    id: "PAA-006",
    title: "Improve neighbourhood waste collection",
    institution: "Sample local authority",
    country: "Nigeria",
    location: "Abuja",
    sector: "Environment",
    status: "Ongoing",
    progress: 70,
    deadline: "Mar 2027",
    dateAdded: "2026-10-22",
  },
  {
    id: "PAA-007",
    title: "Improve access to essential healthcare",
    institution: "Sample public institution",
    country: "Ghana",
    location: "Accra",
    sector: "Health",
    status: "New",
    progress: 0,
    deadline: "Not established",
    dateAdded: "2026-10-20",
  },
  {
    id: "PAA-008",
    title: "Expand access to reliable electricity",
    institution: "Sample energy authority",
    country: "Kenya",
    location: "Nairobi",
    sector: "Power",
    status: "Ongoing",
    progress: 35,
    deadline: "Sep 2027",
    dateAdded: "2026-09-28",
  },
  {
    id: "PAA-009",
    title: "Improve access to safe public schools",
    institution: "Sample education authority",
    country: "Uganda",
    location: "Kampala",
    sector: "Education",
    status: "Delivered",
    progress: 100,
    deadline: "Sample record",
    dateAdded: "2026-08-30",
  },
];

const statuses = ["All statuses", "New", "Ongoing", "Delivered", "Failed"];
const sectors = [
  "All sectors",
  "Education",
  "Environment",
  "Health",
  "Infrastructure",
  "Power",
  "Water",
];

const statusStyle: Record<Status, string> = {
  New: "bg-blue-50 text-blue-700",
  Ongoing: "bg-amber-50 text-amber-700",
  Delivered: "bg-emerald-50 text-emerald-700",
  Failed: "bg-rose-50 text-rose-700",
};

function ProgressBar({
  status,
  progress,
}: {
  status: Status;
  progress: number;
}) {
  const barColor: Record<Status, string> = {
    New: "bg-blue-500",
    Ongoing: "bg-amber-500",
    Delivered: "bg-emerald-500",
    Failed: "bg-rose-500",
  };

  return (
    <div>
      <div className="flex items-center justify-between text-xs">
        <span className="text-slate-500">Recorded progress</span>
        <span className="font-semibold text-slate-800">{progress}%</span>
      </div>
      <div
        className="mt-2 h-1.5 overflow-hidden rounded-full bg-slate-100"
        role="progressbar"
        aria-label="Illustrative recorded progress"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={progress}
      >
        <div
          className={`h-full rounded-full ${barColor[status]}`}
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}

export default function PromisesPage() {
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("All statuses");
  const [sector, setSector] = useState("All sectors");
  const [country, setCountry] = useState("All countries");
  const [sort, setSort] = useState("newest");
  const [page, setPage] = useState(1);

  const pageSize = 6;

  const filtered = useMemo(() => {
    const query = search.toLowerCase().trim();

    return records
      .filter((item) => {
        const matchesSearch =
          !query ||
          [
            item.id,
            item.title,
            item.institution,
            item.country,
            item.location,
            item.sector,
          ].some((value) => value.toLowerCase().includes(query));

        const matchesStatus =
          status === "All statuses" || item.status === status;

        const matchesSector =
          sector === "All sectors" || item.sector === sector;

        const matchesCountry =
          country === "All countries" || item.country === country;

        return (
          matchesSearch &&
          matchesStatus &&
          matchesSector &&
          matchesCountry
        );
      })
      .sort((a, b) => {
        if (sort === "oldest") {
          return a.dateAdded.localeCompare(b.dateAdded);
        }
        if (sort === "title") {
          return a.title.localeCompare(b.title);
        }
        return b.dateAdded.localeCompare(a.dateAdded);
      });
  }, [search, status, sector, country, sort]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / pageSize));
  const currentPage = Math.min(page, totalPages);
  const visibleRecords = filtered.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  function resetFilters() {
    setSearch("");
    setStatus("All statuses");
    setSector("All sectors");
    setCountry("All countries");
    setSort("newest");
    setPage(1);
  }

  function updateFilter(
    setter: (value: string) => void,
    value: string
  ) {
    setter(value);
    setPage(1);
  }

  const summary = [
    {
      label: "All records",
      value: records.length,
      icon: <CircleDot size={19} />,
      color: "text-slate-700",
    },
    {
      label: "Being tracked",
      value: records.filter((r) => r.status === "Ongoing").length,
      icon: <Clock3 size={19} />,
      color: "text-amber-600",
    },
    {
      label: "Delivered",
      value: records.filter((r) => r.status === "Delivered").length,
      icon: <CheckCircle2 size={19} />,
      color: "text-emerald-600",
    },
    {
      label: "Failed",
      value: records.filter((r) => r.status === "Failed").length,
      icon: <ShieldAlert size={19} />,
      color: "text-rose-600",
    },
  ];

  return (
    <main className="min-h-screen bg-white text-slate-900">
      <header className="border-b border-slate-100">
        <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10">
          <Link
            href="/"
            className="flex items-center gap-2 text-sm font-semibold text-slate-600 transition hover:text-violet-700"
          >
            <ArrowLeft size={17} />
            <span className="hidden sm:inline">Back to home</span>
            <span className="sm:hidden">Home</span>
          </Link>

          <Link
            href="/"
            className="text-right text-sm font-extrabold tracking-tight"
          >
            PROMISES AUDIT
            <span className="ml-1 bg-gradient-to-r from-cyan-500 to-fuchsia-600 bg-clip-text text-transparent">
              AFRICA
            </span>
          </Link>

          <Link
            href="/submit"
            className="rounded-full bg-slate-900 px-4 py-2.5 text-xs font-semibold text-white transition hover:bg-violet-700 sm:px-5 sm:text-sm"
          >
            Submit a promise
          </Link>
        </div>
      </header>

      <section className="relative overflow-hidden border-b border-slate-100 bg-slate-50/70">
        <div className="absolute -right-20 -top-32 h-80 w-80 rounded-full bg-violet-200/40 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-5 py-12 sm:px-8 sm:py-16 lg:px-10">
          <div className="text-xs font-bold uppercase tracking-[0.22em] text-violet-700">
            The public register
          </div>

          <div className="mt-4 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <h1 className="text-4xl font-semibold tracking-[-0.045em] sm:text-5xl">
                The promise register<span className="text-violet-600">.</span>
              </h1>
              <p className="mt-4 max-w-xl text-sm leading-7 text-slate-600 sm:text-base">
                Discover commitments. Follow their progress. Examine the
                record.
              </p>
            </div>

            <div className="flex items-center gap-2 text-xs text-slate-500">
              <span className="h-2 w-2 rounded-full bg-cyan-500" />
              Searchable public records
            </div>
          </div>

          <div className="mt-9 grid grid-cols-2 gap-3 lg:grid-cols-4">
            {summary.map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-slate-200/80 bg-white p-4 sm:p-5"
              >
                <div className={`flex items-center gap-2 ${item.color}`}>
                  {item.icon}
                  <span className="text-xs font-medium text-slate-500">
                    {item.label}
                  </span>
                </div>
                <div className="mt-3 text-3xl font-semibold tracking-tight">
                  {String(item.value).padStart(2, "0")}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-9 sm:px-8 sm:py-12 lg:px-10">
        <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-5">
          <div className="relative">
            <Search
              size={19}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
            />
            <input
              type="search"
              value={search}
              onChange={(e) => updateFilter(setSearch, e.target.value)}
              placeholder="Search promises, institutions, locations..."
              aria-label="Search the promise register"
              className="h-12 w-full rounded-xl border border-slate-200 bg-slate-50 pl-11 pr-10 text-sm outline-none transition placeholder:text-slate-400 focus:border-violet-400 focus:bg-white focus:ring-4 focus:ring-violet-50"
            />
            {search && (
              <button
                type="button"
                aria-label="Clear search"
                onClick={() => updateFilter(setSearch, "")}
                className="absolute right-3 top-1/2 -translate-y-1/2 rounded-md p-1 text-slate-400 hover:text-slate-900"
              >
                <X size={17} />
              </button>
            )}
          </div>

          <div className="mt-4 flex items-center gap-2 text-xs font-semibold text-slate-500">
            <SlidersHorizontal size={15} />
            FILTER THE REGISTER
          </div>

          <div className="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            <select
              aria-label="Filter by status"
              value={status}
              onChange={(e) => updateFilter(setStatus, e.target.value)}
              className="h-11 rounded-xl border border-slate-200 bg-white px-3 text-sm outline-none focus:border-violet-400"
            >
              {statuses.map((s) => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>

            <select
              aria-label="Filter by sector"
              value={sector}
              onChange={(e) => updateFilter(setSector, e.target.value)}
              className="h-11 rounded-xl border border-slate-200 bg-white px-3 text-sm outline-none focus:border-violet-400"
            >
              {sectors.map((s) => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>

            <select
              aria-label="Filter by country"
              value={country}
              onChange={(e) => updateFilter(setCountry, e.target.value)}
              className="h-11 rounded-xl border border-slate-200 bg-white px-3 text-sm outline-none focus:border-violet-400"
            >
              {["All countries", ...Array.from(new Set(records.map((r) => r.country))).sort()].map((c) => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>

            <select
              aria-label="Sort records"
              value={sort}
              onChange={(e) => updateFilter(setSort, e.target.value)}
              className="h-11 rounded-xl border border-slate-200 bg-white px-3 text-sm outline-none focus:border-violet-400"
            >
              <option value="newest">Newest first</option>
              <option value="oldest">Oldest first</option>
              <option value="title">Title A–Z</option>
            </select>
          </div>
        </div>

        <div className="mt-7 flex flex-wrap items-center justify-between gap-3">
          <p className="text-sm text-slate-500">
            Showing{" "}
            <span className="font-semibold text-slate-900">
              {visibleRecords.length}
            </span>{" "}
            of{" "}
            <span className="font-semibold text-slate-900">
              {filtered.length}
            </span>{" "}
            records
          </p>

          <button
            type="button"
            onClick={resetFilters}
            className="text-xs font-semibold text-slate-500 transition hover:text-violet-700"
          >
            Reset all filters
          </button>
        </div>

        <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {visibleRecords.map((item) => (
            <article
              key={item.id}
              className="group overflow-hidden rounded-2xl border border-slate-200 bg-white transition duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-xl hover:shadow-slate-200/50"
            >
              <div className="h-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-fuchsia-500" />

              <div className="p-5 sm:p-6">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-xs font-semibold tracking-wider text-slate-400">
                    {item.id}
                  </span>
                  <span
                    className={`rounded-full px-3 py-1.5 text-xs font-semibold ${statusStyle[item.status]}`}
                  >
                    {item.status}
                  </span>
                </div>

                <h2 className="mt-5 min-h-[3.5rem] text-lg font-semibold leading-snug tracking-tight text-slate-900">
                  {item.title}
                </h2>

                <p className="mt-2 text-sm text-slate-500">
                  {item.institution}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="rounded-lg bg-slate-50 px-2.5 py-1.5 text-xs text-slate-600">
                    {item.location}, {item.country}
                  </span>
                  <span className="rounded-lg bg-slate-50 px-2.5 py-1.5 text-xs text-slate-600">
                    {item.sector}
                  </span>
                </div>

                <div className="mt-6">
                  <ProgressBar
                    status={item.status}
                    progress={item.progress}
                  />
                </div>

                <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4">
                  <div>
                    <p className="text-[10px] uppercase tracking-wider text-slate-400">
                      Target date
                    </p>
                    <p className="mt-1 text-xs font-medium text-slate-700">
                      {item.deadline}
                    </p>
                  </div>

                  <Link
                    href={`/promises/${item.id}`}
                    className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 px-3.5 py-2 text-xs font-semibold transition hover:border-violet-300 hover:bg-violet-50 hover:text-violet-700"
                  >
                    View record <ArrowUpRight size={14} />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {visibleRecords.length === 0 && (
          <div className="mt-6 rounded-2xl border border-dashed border-slate-300 px-5 py-16 text-center">
            <Search className="mx-auto text-slate-400" size={28} />
            <h2 className="mt-4 text-lg font-semibold">
              No matching records
            </h2>
            <p className="mt-2 text-sm text-slate-500">
              Try changing your search or filters.
            </p>
            <button
              type="button"
              onClick={resetFilters}
              className="mt-5 rounded-full bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white hover:bg-violet-700"
            >
              Clear filters
            </button>
          </div>
        )}

        {filtered.length > pageSize && (
          <nav
            aria-label="Promise register pages"
            className="mt-10 flex items-center justify-center gap-4"
          >
            <button
              type="button"
              disabled={currentPage === 1}
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-4 py-2.5 text-sm font-medium disabled:cursor-not-allowed disabled:opacity-40"
            >
              <ArrowLeft size={15} /> Previous
            </button>

            <span className="text-sm text-slate-500">
              Page {currentPage} of {totalPages}
            </span>

            <button
              type="button"
              disabled={currentPage === totalPages}
              onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
              className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-4 py-2.5 text-sm font-medium disabled:cursor-not-allowed disabled:opacity-40"
            >
              Next <ArrowRight size={15} />
            </button>
          </nav>
        )}

        <p className="mt-8 text-center text-xs leading-5 text-slate-400">
          All records currently shown are fictional demonstration data.
          Progress percentages are illustrative, not verified audit findings.
        </p>
      </section>

      <footer className="border-t border-slate-100 py-7">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-3 px-5 text-xs text-slate-400 sm:flex-row sm:px-8 lg:px-10">
          <Link href="/" className="font-semibold text-slate-600 hover:text-violet-700">
            PROMISES AUDIT AFRICA
          </Link>
          <p>Track. Audit. Ensure completion. Celebrate.</p>
        </div>
      </footer>
    </main>
  );
}
