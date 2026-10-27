
"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  FileText,
  Globe2,
  ShieldCheck,
  Upload,
} from "lucide-react";

const inputClass =
  "mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-violet-400 focus:ring-4 focus:ring-violet-50";

const labelClass = "text-sm font-medium text-slate-700";

export default function SubmitPromisePage() {
  const [category, setCategory] = useState("New promise");
  const [consent, setConsent] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");

    if (!consent) {
      setError("Please confirm that the information is accurate to the best of your knowledge.");
      return;
    }

    // This is a frontend demonstration only.
    // No information is sent to a database yet.
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <main className="min-h-screen bg-white text-slate-900">
      <header className="border-b border-slate-100">
        <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-5 sm:px-8">
          <Link
            href="/promises"
            className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-violet-700"
          >
            <ArrowLeft size={17} />
            <span className="hidden sm:inline">Promise register</span>
            <span className="sm:hidden">Back</span>
          </Link>

          <Link href="/" className="text-sm font-extrabold tracking-tight">
            PROMISES AUDIT
            <span className="ml-1 bg-gradient-to-r from-cyan-500 to-fuchsia-600 bg-clip-text text-transparent">
              AFRICA
            </span>
          </Link>

          <span className="hidden text-xs text-slate-400 sm:block">
            Public submission
          </span>
        </div>
      </header>

      <section className="relative overflow-hidden border-b border-slate-100 bg-slate-50/70">
        <div className="absolute -right-20 -top-24 h-72 w-72 rounded-full bg-gradient-to-br from-cyan-200/60 to-fuchsia-200/60 blur-3xl" />

        <div className="relative mx-auto max-w-4xl px-5 py-12 sm:px-8 sm:py-16">
          <div className="text-xs font-bold uppercase tracking-[0.2em] text-violet-700">
            Public accountability starts here
          </div>

          <h1 className="mt-4 text-4xl font-semibold tracking-[-0.045em] sm:text-5xl">
            Put a promise
            <br />
            <span className="bg-gradient-to-r from-cyan-500 via-blue-600 to-fuchsia-600 bg-clip-text text-transparent">
              on the record.
            </span>
          </h1>

          <p className="mt-5 max-w-xl text-sm leading-7 text-slate-600 sm:text-base">
            Submit a commitment, report an abandoned project or nominate a
            completed promise. Our team will review the information and
            supporting evidence.
          </p>

          <div className="mt-7 flex flex-wrap gap-4 text-xs text-slate-500">
            <span className="inline-flex items-center gap-2">
              <ShieldCheck size={16} className="text-emerald-600" />
              Reviewed before publication
            </span>
            <span className="inline-flex items-center gap-2">
              <Globe2 size={16} className="text-violet-600" />
              Across Africa
            </span>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-5 py-10 sm:px-8 sm:py-14">
        {submitted ? (
          <div className="rounded-3xl border border-emerald-200 bg-white p-7 text-center shadow-sm sm:p-12">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
              <CheckCircle2 size={32} />
            </div>

            <h2 className="mt-6 text-2xl font-semibold tracking-tight">
              Form demonstration complete
            </h2>

            <p className="mx-auto mt-4 max-w-md text-sm leading-7 text-slate-600">
              The form passed its frontend checks. Your information has not
              been sent or saved. We will connect the form to the submission
              database before accepting real nominations.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <button
                onClick={() => {
                  setSubmitted(false);
                  setConsent(false);
                  setError("");
                }}
                className="rounded-full border border-slate-200 px-5 py-3 text-sm font-semibold hover:bg-slate-50"
              >
                Enter another submission
              </button>

              <Link
                href="/promises"
                className="rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white hover:bg-violet-700"
              >
                Explore promises
              </Link>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="flex items-start gap-3 border-b border-slate-100 pb-6">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-violet-50 text-violet-700">
                <FileText size={21} />
              </div>
              <div>
                <h2 className="text-lg font-semibold">Submit a commitment</h2>
                <p className="mt-1 text-sm leading-6 text-slate-500">
                  Fields marked with * are required.
                </p>
              </div>
            </div>

            <section className="space-y-5">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.15em] text-slate-400">
                  01 — Submission type
                </p>
                <h3 className="mt-2 text-base font-semibold">
                  What would you like us to track?
                </h3>
              </div>

              <div className="grid gap-3 sm:grid-cols-3">
                {[
                  {
                    title: "New promise",
                    description: "Record a public commitment.",
                  },
                  {
                    title: "Failed / abandoned",
                    description: "Request tracking or an audit.",
                  },
                  {
                    title: "Delivered promise",
                    description: "Nominate a promise keeper.",
                  },
                ].map((item) => (
                  <button
                    key={item.title}
                    type="button"
                    onClick={() => setCategory(item.title)}
                    className={`rounded-2xl border p-4 text-left transition ${
                      category === item.title
                        ? "border-violet-400 bg-violet-50/70 ring-2 ring-violet-100"
                        : "border-slate-200 hover:border-slate-300"
                    }`}
                  >
                    <span
                      className={`flex h-5 w-5 items-center justify-center rounded-full border ${
                        category === item.title
                          ? "border-violet-600"
                          : "border-slate-300"
                      }`}
                    >
                      {category === item.title && (
                        <span className="h-2.5 w-2.5 rounded-full bg-violet-600" />
                      )}
                    </span>
                    <span className="mt-4 block text-sm font-semibold">
                      {item.title}
                    </span>
                    <span className="mt-1 block text-xs leading-5 text-slate-500">
                      {item.description}
                    </span>
                  </button>
                ))}
              </div>
            </section>

            <section className="space-y-5 border-t border-slate-100 pt-7">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.15em] text-slate-400">
                  02 — The person or project
                </p>
                <h3 className="mt-2 text-base font-semibold">
                  Identify the commitment
                </h3>
              </div>

              <div>
                <label htmlFor="promiseTitle" className={labelClass}>
                  Promise or project title *
                </label>
                <input
                  id="promiseTitle"
                  name="promiseTitle"
                  required
                  minLength={5}
                  maxLength={180}
                  placeholder="e.g. Rehabilitation of a community health centre"
                  className={inputClass}
                />
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="responsible" className={labelClass}>
                    Responsible person / institution *
                  </label>
                  <input
                    id="responsible"
                    name="responsible"
                    required
                    maxLength={180}
                    placeholder="Name of leader or institution"
                    className={inputClass}
                  />
                </div>

                <div>
                  <label htmlFor="sector" className={labelClass}>
                    Sector *
                  </label>
                  <select
                    id="sector"
                    name="sector"
                    required
                    defaultValue=""
                    className={inputClass}
                  >
                    <option value="" disabled>
                      Select a sector
                    </option>
                    <option>Electricity / Power</option>
                    <option>Roads / Infrastructure</option>
                    <option>Education</option>
                    <option>Health</option>
                    <option>Water</option>
                    <option>Politics / Governance</option>
                    <option>Environment</option>
                    <option>Employment</option>
                    <option>Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="country" className={labelClass}>
                    Country *
                  </label>
                  <input
                    id="country"
                    name="country"
                    required
                    defaultValue="Nigeria"
                    maxLength={100}
                    placeholder="Country"
                    className={inputClass}
                  />
                </div>

                <div>
                  <label htmlFor="location" className={labelClass}>
                    State, region or city *
                  </label>
                  <input
                    id="location"
                    name="location"
                    required
                    maxLength={150}
                    placeholder="e.g. FCT, Abuja"
                    className={inputClass}
                  />
                </div>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="promiseDate" className={labelClass}>
                    When was the promise made?
                  </label>
                  <input
                    id="promiseDate"
                    name="promiseDate"
                    type="date"
                    className={inputClass}
                  />
                </div>

                <div>
                  <label htmlFor="deadline" className={labelClass}>
                    Expected completion date
                  </label>
                  <input
                    id="deadline"
                    name="deadline"
                    type="date"
                    className={inputClass}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="description" className={labelClass}>
                  Describe the promise and its current status *
                </label>
                <textarea
                  id="description"
                  name="description"
                  required
                  minLength={20}
                  maxLength={3000}
                  rows={5}
                  placeholder="What was promised? What has happened so far? Include dates and relevant details."
                  className={inputClass}
                />
              </div>
            </section>

            <section className="space-y-5 border-t border-slate-100 pt-7">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.15em] text-slate-400">
                  03 — Supporting evidence
                </p>
                <h3 className="mt-2 text-base font-semibold">
                  Help us verify the facts
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-500">
                  Share original announcements, credible news coverage,
                  official documents or links to relevant photographs and
                  videos.
                </p>
              </div>

              <div>
                <label htmlFor="sourceUrl" className={labelClass}>
                  Original promise or source link
                </label>
                <input
                  id="sourceUrl"
                  name="sourceUrl"
                  type="url"
                  maxLength={1000}
                  placeholder="https://..."
                  className={inputClass}
                />
              </div>

              <div>
                <label htmlFor="evidenceUrl" className={labelClass}>
                  Evidence or project update link
                </label>
                <input
                  id="evidenceUrl"
                  name="evidenceUrl"
                  type="url"
                  maxLength={1000}
                  placeholder="https://..."
                  className={inputClass}
                />
                <p className="mt-2 text-xs leading-5 text-slate-400">
                  Uploads and multiple evidence files will be enabled when
                  we connect secure file storage.
                </p>
              </div>
            </section>

            <section className="space-y-5 border-t border-slate-100 pt-7">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.15em] text-slate-400">
                  04 — Your details
                </p>
                <h3 className="mt-2 text-base font-semibold">
                  Who is submitting this record?
                </h3>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="fullName" className={labelClass}>
                    Full name *
                  </label>
                  <input
                    id="fullName"
                    name="fullName"
                    required
                    autoComplete="name"
                    maxLength={150}
                    placeholder="Your full name"
                    className={inputClass}
                  />
                </div>

                <div>
                  <label htmlFor="relationship" className={labelClass}>
                    Relationship to project
                  </label>
                  <select
                    id="relationship"
                    name="relationship"
                    defaultValue=""
                    className={inputClass}
                  >
                    <option value="">Select relationship</option>
                    <option>Community member</option>
                    <option>Project beneficiary</option>
                    <option>Journalist / researcher</option>
                    <option>Government / institution representative</option>
                    <option>Civil society organisation</option>
                    <option>Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="email" className={labelClass}>
                    Email address *
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    maxLength={254}
                    placeholder="you@example.com"
                    className={inputClass}
                  />
                </div>

                <div>
                  <label htmlFor="phone" className={labelClass}>
                    Phone / WhatsApp
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    maxLength={40}
                    placeholder="+234..."
                    className={inputClass}
                  />
                </div>
              </div>
            </section>

            <section className="rounded-2xl border border-slate-200 bg-slate-50 p-5 sm:p-6">
              <div className="flex items-start gap-3">
                <ShieldCheck size={22} className="mt-0.5 shrink-0 text-violet-700" />
                <div>
                  <h3 className="text-sm font-semibold">
                    Accuracy and responsible reporting
                  </h3>
                  <p className="mt-2 text-xs leading-6 text-slate-600">
                    Submissions are requests for review, not proof of
                    wrongdoing or completion. The editorial team must
                    independently assess evidence and seek relevant responses
                    before publishing audit conclusions.
                  </p>
                </div>
              </div>

              <label className="mt-5 flex cursor-pointer items-start gap-3">
                <input
                  type="checkbox"
                  checked={consent}
                  onChange={(event) => setConsent(event.target.checked)}
                  className="mt-1 h-4 w-4 accent-violet-600"
                />
                <span className="text-xs leading-6 text-slate-600">
                  I confirm that the information provided is accurate to the
                  best of my knowledge and that I am entitled to share the
                  materials submitted. I understand that the platform may
                  contact me for clarification. *
                </span>
              </label>
            </section>

            {error && (
              <p
                role="alert"
                className="rounded-xl border border-rose-200 bg-rose-50 p-4 text-sm text-rose-700"
              >
                {error}
              </p>
            )}

            <div className="flex flex-col justify-between gap-4 border-t border-slate-100 pt-6 sm:flex-row sm:items-center">
              <p className="max-w-sm text-xs leading-5 text-slate-400">
                Your submission is not published automatically. Do not include
                confidential or unnecessary personal information.
              </p>

              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-950 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-violet-700"
              >
                Submit for review <ArrowRight size={16} />
              </button>
            </div>
          </form>
        )}
      </section>

      <footer className="border-t border-slate-100 px-5 py-7 text-center text-xs text-slate-400">
        Promises Audit Africa · Track. Audit. Ensure completion. Celebrate.
      </footer>
    </main>
  );
}
