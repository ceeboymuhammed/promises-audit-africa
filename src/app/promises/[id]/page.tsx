
"use client";

import { FormEvent, Suspense, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowUpRight,
  CalendarDays,
  CheckCircle2,
  Clock3,
  ExternalLink,
  FileText,
  Globe2,
  MessageCircle,
  Send,
  ShieldCheck,
  CircleDot,
  AlertTriangle,
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
  description: string;
  originalPromise: string;
  submitted: string;
};

const demoRecords: Record<string, PromiseRecord> = {
  "PAA-001": {
    id: "PAA-001",
    title: "Improve access to clean drinking water",
    institution: "Sample public institution",
    country: "Nigeria",
    location: "Abuja",
    sector: "Water",
    status: "Ongoing",
    progress: 55,
    deadline: "December 2027",
    description:
      "A demonstration record showing how a public water commitment could be tracked. The details below are fictional and are not a verified audit.",
    originalPromise:
      "Sample commitment: improve access to safe, reliable drinking water in the target community.",
    submitted: "10 October 2026",
  },
  "PAA-002": {
    id: "PAA-002",
    title: "Rehabilitate a community access road",
    institution: "Sample government agency",
    country: "Nigeria",
    location: "Lagos",
    sector: "Infrastructure",
    status: "New",
    progress: 0,
    deadline: "Not established",
    description:
      "A demonstration record awaiting an initial assessment. No real project has been verified.",
    originalPromise:
      "Sample commitment: rehabilitate a community access road.",
    submitted: "15 October 2026",
  },
  "PAA-003": {
    id: "PAA-003",
    title: "Expand access to primary education",
    institution: "Sample education authority",
    country: "Nigeria",
    location: "Kogi",
    sector: "Education",
    status: "Delivered",
    progress: 100,
    deadline: "Sample record",
    description:
      "A fictional demonstration of the delivered status. No real delivery claim is being made.",
    originalPromise:
      "Sample commitment: expand access to primary education.",
    submitted: "20 September 2026",
  },
  "PAA-004": {
    id: "PAA-004",
    title: "Restore electricity to underserved areas",
    institution: "Sample public institution",
    country: "Nigeria",
    location: "Kaduna",
    sector: "Power",
    status: "Failed",
    progress: 20,
    deadline: "Under review",
    description:
      "A fictional demonstration of a failed-status record. It is not an accusation against a real institution.",
    originalPromise:
      "Sample commitment: restore reliable electricity to underserved areas.",
    submitted: "12 August 2026",
  },
  "PAA-005": {
    id: "PAA-005",
    title: "Upgrade a community health facility",
    institution: "Sample health authority",
    country: "Nigeria",
    location: "Enugu",
    sector: "Health",
    status: "Ongoing",
    progress: 40,
    deadline: "June 2027",
    description:
      "A demonstration record for tracking health-facility improvements and supporting evidence.",
    originalPromise:
      "Sample commitment: upgrade a community health facility.",
    submitted: "18 October 2026",
  },
  "PAA-006": {
    id: "PAA-006",
    title: "Improve neighbourhood waste collection",
    institution: "Sample local authority",
    country: "Nigeria",
    location: "Abuja",
    sector: "Environment",
    status: "Ongoing",
    progress: 70,
    deadline: "March 2027",
    description:
      "A fictional record illustrating environmental project monitoring. Progress has not been independently verified.",
    originalPromise:
      "Sample commitment: improve waste collection in the target neighbourhood.",
    submitted: "22 October 2026",
  },
  "PAA-007": {
    id: "PAA-007",
    title: "Improve access to essential healthcare",
    institution: "Sample public institution",
    country: "Ghana",
    location: "Accra",
    sector: "Health",
    status: "New",
    progress: 0,
    deadline: "Not established",
    description: "A fictional demonstration record for a commitment in Ghana.",
    originalPromise:
      "Sample commitment: improve access to essential healthcare.",
    submitted: "20 October 2026",
  },
  "PAA-008": {
    id: "PAA-008",
    title: "Expand access to reliable electricity",
    institution: "Sample energy authority",
    country: "Kenya",
    location: "Nairobi",
    sector: "Power",
    status: "Ongoing",
    progress: 35,
    deadline: "September 2027",
    description: "A fictional demonstration record for an energy commitment in Kenya.",
    originalPromise:
      "Sample commitment: expand access to reliable electricity.",
    submitted: "28 September 2026",
  },
  "PAA-009": {
    id: "PAA-009",
    title: "Improve access to safe public schools",
    institution: "Sample education authority",
    country: "Uganda",
    location: "Kampala",
    sector: "Education",
    status: "Delivered",
    progress: 100,
    deadline: "Sample record",
    description: "A fictional demonstration record for an education commitment in Uganda.",
    originalPromise:
      "Sample commitment: improve access to safe public schools.",
    submitted: "30 August 2026",
  },
};

const statusStyles: Record<Status, string> = {
  New: "bg-blue-50 text-blue-700",
  Ongoing: "bg-amber-50 text-amber-700",
  Delivered: "bg-emerald-50 text-emerald-700",
  Failed: "bg-rose-50 text-rose-700",
};

const statusDescriptions: Record<Status, string> = {
  New: "This record is awaiting assessment.",
  Ongoing: "This record is being tracked. Progress requires supporting evidence.",
  Delivered: "This is a demonstration status, not a verified delivery finding.",
  Failed: "This is a demonstration status, not a verified failure finding.",
};

function PromiseDetailContent() {
  const params = useParams<{ id: string }>();
  const id = Array.isArray(params.id) ? params.id[0] : params.id;
  const record = demoRecords[id];

  const [comment, setComment] = useState("");
  const [comments, setComments] = useState<
    { id: number; text: string; date: string }[]
  >([]);
  const [notice, setNotice] = useState("");

  function submitComment(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const text = comment.trim();

    if (text.length < 5) {
      setNotice("Please enter at least 5 characters.");
      return;
    }

    if (text.length > 1000) {
      setNotice("Please keep your comment under 1,000 characters.");
      return;
    }

    setComments((previous) => [
      ...previous,
      {
        id: Date.now(),
        text,
        date: new Date().toLocaleString(),
      },
    ]);
    setComment("");
    setNotice(
      "Demo comment added in this browser session. It has not been published or saved to a database."
    );
  }

  if (!record) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-slate-50 px-5">
        <div className="max-w-md rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-sm">
          <CircleDot className="mx-auto text-slate-400" size={32} />
          <h1 className="mt-5 text-2xl font-semibold">Record not found</h1>
          <p className="mt-3 text-sm leading-6 text-slate-500">
            We could not find that promise in the current demonstration dataset.
          </p>
          <Link
            href="/promises"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white hover:bg-violet-700"
          >
            <ArrowLeft size={16} /> Return to register
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-white text-slate-900">
      <header className="border-b border-slate-100">
        <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between gap-4 px-5 sm:px-8 lg:px-10">
          <Link
            href="/promises"
            className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-violet-700"
          >
            <ArrowLeft size={17} /> <span className="hidden sm:inline">Promise register</span><span className="sm:hidden">Back</span>
          </Link>

          <Link href="/" className="text-right text-sm font-extrabold tracking-tight">
            PROMISES AUDIT
            <span className="ml-1 bg-gradient-to-r from-cyan-500 to-fuchsia-600 bg-clip-text text-transparent">
              AFRICA
            </span>
          </Link>

          <span className="hidden text-xs text-slate-400 sm:inline">
            Record {record.id}
          </span>
        </div>
      </header>

      <section className="relative overflow-hidden border-b border-slate-100 bg-slate-50/70">
        <div className="absolute -right-20 -top-24 h-80 w-80 rounded-full bg-gradient-to-br from-cyan-200/60 to-fuchsia-200/60 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-5 py-12 sm:px-8 sm:py-16 lg:px-10">
          <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-slate-500">
            <Link href="/promises" className="hover:text-violet-700">Register</Link>
            <span>/</span>
            <span>{record.id}</span>
          </div>

          <div className="mt-7 flex flex-wrap items-center gap-3">
            <span className="rounded-full bg-white px-3 py-1.5 text-xs font-semibold text-slate-600 ring-1 ring-slate-200">
              {record.id}
            </span>
            <span className={`rounded-full px-3 py-1.5 text-xs font-semibold ${statusStyles[record.status]}`}>
              {record.status}
            </span>
            <span className="rounded-full bg-violet-50 px-3 py-1.5 text-xs font-semibold text-violet-700">
              Demonstration record
            </span>
          </div>

          <div className="mt-5 grid gap-8 lg:grid-cols-[1fr_290px] lg:items-end">
            <div>
              <h1 className="max-w-4xl text-3xl font-semibold leading-tight tracking-[-0.045em] sm:text-5xl">
                {record.title}
              </h1>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
                {record.description}
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-5">
              <div className="flex items-center justify-between gap-3">
                <span className="text-xs font-medium text-slate-500">Recorded progress</span>
                <span className="text-2xl font-semibold tracking-tight">{record.progress}%</span>
              </div>
              <div className="mt-4 h-2 overflow-hidden rounded-full bg-slate-100">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-fuchsia-500"
                  style={{ width: `${record.progress}%` }}
                />
              </div>
              <p className="mt-3 text-xs leading-5 text-slate-500">
                Illustrative only. This percentage is not an independently verified audit assessment.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto grid max-w-7xl gap-8 px-5 py-10 sm:px-8 lg:grid-cols-[minmax(0,1fr)_320px] lg:gap-12 lg:px-10 lg:py-14">
        <div className="min-w-0 space-y-8">
          <section className="rounded-2xl border border-slate-200 p-5 sm:p-7">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-50 text-cyan-700">
                <FileText size={20} />
              </div>
              <div>
                <h2 className="font-semibold">The original commitment</h2>
                <p className="mt-1 text-xs text-slate-500">What was promised?</p>
              </div>
            </div>
            <blockquote className="mt-6 border-l-2 border-gradient-to-b border-cyan-400 pl-4 text-base leading-7 text-slate-700">
              {record.originalPromise}
            </blockquote>
            <div className="mt-5 rounded-xl bg-amber-50 p-4 text-sm leading-6 text-amber-900">
              <div className="flex items-start gap-2">
                <AlertTriangle size={18} className="mt-0.5 shrink-0" />
                <p>
                  Original source and source date have not been supplied for this sample record. A real promise must be linked to verifiable source material before it is treated as an established commitment.
                </p>
              </div>
            </div>
          </section>

          <section className="rounded-2xl border border-slate-200 p-5 sm:p-7">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-50 text-violet-700">
                <Clock3 size={20} />
              </div>
              <div>
                <h2 className="font-semibold">Progress & audit history</h2>
                <p className="mt-1 text-xs text-slate-500">A record of what changes and when</p>
              </div>
            </div>

            <div className="mt-7 flex gap-4">
              <div className="flex flex-col items-center">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-cyan-50 text-cyan-700">
                  <CircleDot size={17} />
                </span>
                <span className="mt-2 min-h-10 w-px flex-1 bg-slate-200" />
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-slate-500">
                  <ShieldCheck size={17} />
                </span>
              </div>
              <div className="flex-1 pb-5">
                <p className="text-sm font-semibold">Demonstration record created</p>
                <p className="mt-1 text-xs text-slate-500">{record.submitted}</p>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  This sample illustrates the point at which a record could enter the platform.
                </p>

                <div className="mt-6 border-t border-slate-100 pt-5">
                  <p className="text-sm font-semibold">Verification pending</p>
                  <p className="mt-1 text-xs text-slate-500">No real audit event recorded</p>
                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    A real record would display dated evidence reviews, field visits, official responses and documented status decisions here.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="rounded-2xl border border-slate-200 p-5 sm:p-7">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-700">
                <ShieldCheck size={20} />
              </div>
              <div>
                <h2 className="font-semibold">Evidence & sources</h2>
                <p className="mt-1 text-xs text-slate-500">Documents, official statements and field verification</p>
              </div>
            </div>

            <div className="mt-6 rounded-xl border border-dashed border-slate-300 p-6 text-center">
              <FileText className="mx-auto text-slate-400" size={28} />
              <p className="mt-3 text-sm font-semibold">No evidence attached</p>
              <p className="mx-auto mt-2 max-w-sm text-xs leading-5 text-slate-500">
                Evidence links and uploaded documents will appear here after editorial review.
              </p>
            </div>
          </section>

          <section id="comments" className="rounded-2xl border border-slate-200 p-5 sm:p-7">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-700">
                <MessageCircle size={20} />
              </div>
              <div>
                <h2 className="font-semibold">Public discussion</h2>
                <p className="mt-1 text-xs text-slate-500">Share relevant information about this commitment.</p>
              </div>
            </div>

            <div className="mt-5 rounded-xl bg-slate-50 p-4 text-xs leading-5 text-slate-600">
              Comments entered here are temporary browser-session demonstrations. A production version will need moderation, spam protection and persistent storage.
            </div>

            <form onSubmit={submitComment} className="mt-5">
              <label htmlFor="comment" className="text-sm font-medium text-slate-700">
                Add a comment
              </label>
              <textarea
                id="comment"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                placeholder="Share a source, an update or a constructive question..."
                rows={4}
                maxLength={1000}
                className="mt-2 w-full resize-y rounded-xl border border-slate-200 p-4 text-sm leading-6 outline-none transition placeholder:text-slate-400 focus:border-violet-400 focus:ring-4 focus:ring-violet-50"
              />
              <div className="mt-2 flex items-center justify-between gap-3">
                <span className="text-xs text-slate-400">{comment.length}/1000</span>
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-violet-700"
                >
                  Add demo comment <Send size={15} />
                </button>
              </div>
              {notice && (
                <p aria-live="polite" className="mt-3 text-xs leading-5 text-slate-600">
                  {notice}
                </p>
              )}
            </form>

            {comments.length > 0 && (
              <div className="mt-7 space-y-3">
                <h3 className="text-sm font-semibold">
                  Temporary comments ({comments.length})
                </h3>
                {comments.map((item) => (
                  <article key={item.id} className="rounded-xl border border-slate-200 p-4">
                    <p className="whitespace-pre-wrap text-sm leading-6 text-slate-700">{item.text}</p>
                    <p className="mt-3 text-xs text-slate-400">Demo entry · {item.date}</p>
                  </article>
                ))}
              </div>
            )}
          </section>
        </div>

        <aside className="space-y-5">
          <section className="rounded-2xl border border-slate-200 p-5">
            <h2 className="text-sm font-semibold">Commitment overview</h2>

            <div className="mt-5 space-y-5">
              <div className="flex items-start gap-3">
                <Globe2 size={18} className="mt-0.5 text-slate-400" />
                <div>
                  <p className="text-xs text-slate-500">Location</p>
                  <p className="mt-1 text-sm font-medium">{record.location}, {record.country}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CircleDot size={18} className="mt-0.5 text-slate-400" />
                <div>
                  <p className="text-xs text-slate-500">Responsible institution</p>
                  <p className="mt-1 text-sm font-medium">{record.institution}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <FileText size={18} className="mt-0.5 text-slate-400" />
                <div>
                  <p className="text-xs text-slate-500">Sector</p>
                  <p className="mt-1 text-sm font-medium">{record.sector}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CalendarDays size={18} className="mt-0.5 text-slate-400" />
                <div>
                  <p className="text-xs text-slate-500">Target deadline</p>
                  <p className="mt-1 text-sm font-medium">{record.deadline}</p>
                </div>
              </div>
            </div>

            <div className="mt-6 border-t border-slate-100 pt-5">
              <p className="text-xs font-semibold text-slate-500">STATUS EXPLANATION</p>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                {statusDescriptions[record.status]}
              </p>
            </div>
          </section>

          <section className="rounded-2xl bg-slate-950 p-5 text-white">
            <ShieldCheck size={23} className="text-cyan-300" />
            <h2 className="mt-4 font-semibold">Evidence before conclusions.</h2>
            <p className="mt-2 text-sm leading-6 text-slate-400">
              Real audit findings should show their sources, verification dates and review methodology.
            </p>
            <Link
              href="/methodology"
              className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-cyan-300 hover:text-white"
            >
              Our methodology <ArrowUpRight size={16} />
            </Link>
          </section>

          <Link
            href="/promises"
            className="flex items-center justify-center gap-2 rounded-xl border border-slate-200 px-4 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
          >
            <ArrowLeft size={16} /> Back to all promises
          </Link>
        </aside>
      </div>

      <footer className="border-t border-slate-100 px-5 py-7 text-center text-xs text-slate-400">
        Promises Audit Africa · Demonstration record · Not a verified audit finding
      </footer>
    </main>
  );
}
export default function PromiseDetailPage() {
  return (
    <Suspense
      fallback={
        <main className="min-h-screen bg-slate-50 px-6 py-16">
          <div className="mx-auto max-w-5xl">
            <p className="text-sm text-slate-500">
              Loading promise details...
            </p>
          </div>
        </main>
      }
    >
      <PromiseDetailContent />
    </Suspense>
  );
}