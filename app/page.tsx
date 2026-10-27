'use client'

import { useEffect, useState } from 'react'
import {
  ArrowRight,
  BookOpen,
  CalendarDays,
  Check,
  CheckCircle2,
  ChevronRight,
  Clock3,
  Flame,
  GraduationCap,
  LayoutDashboard,
  Menu,
  Play,
  Plus,
  Sparkles,
  Target,
  TimerReset,
  TrendingUp,
  X,
  Zap,
} from 'lucide-react'

const features = [
  { icon: LayoutDashboard, title: 'Everything in one view', description: 'See subjects, tasks, and progress without switching between tools.' },
  { icon: CalendarDays, title: 'Plan your week', description: 'Turn big goals into focused sessions that fit your actual schedule.' },
  { icon: TrendingUp, title: 'Track momentum', description: 'Simple visual progress keeps your preparation moving forward.' },
]

const schedule = [
  { day: 'Mon', date: '14', active: false },
  { day: 'Tue', date: '15', active: false },
  { day: 'Wed', date: '16', active: true },
  { day: 'Thu', date: '17', active: false },
  { day: 'Fri', date: '18', active: false },
]

const subjects = [
  { name: 'Mathematics', detail: 'Calculus · 4 topics left', value: 72, tone: 'purple' },
  { name: 'Physics', detail: 'Mechanics · 2 topics left', value: 58, tone: 'blue' },
  { name: 'Computer Science', detail: 'Algorithms · 5 topics left', value: 84, tone: 'green' },
]

export default function Page() {
  const [tasks, setTasks] = useState([true, false, false])
  const [seconds, setSeconds] = useState(25 * 60)
  const [timerRunning, setTimerRunning] = useState(false)

  useEffect(() => {
    if (!timerRunning) return
    const interval = window.setInterval(() => setSeconds((value) => (value > 0 ? value - 1 : 25 * 60)), 1000)
    return () => window.clearInterval(interval)
  }, [timerRunning])

  const minutes = String(Math.floor(seconds / 60)).padStart(2, '0')
  const remaining = String(seconds % 60).padStart(2, '0')

  return (
    <main className="min-h-screen overflow-hidden bg-[#fbfaff] text-slate-950">
      <nav className="relative z-10 mx-auto flex max-w-6xl items-center justify-between px-5 py-5 sm:px-8 lg:px-10">
        <a href="#top" className="flex items-center gap-2.5 font-semibold tracking-tight">
          <span className="grid size-9 place-items-center rounded-xl bg-violet-600 text-white shadow-lg shadow-violet-200"><GraduationCap aria-hidden="true" /></span>
          <span className="text-lg">Study<span className="text-violet-600">Sprint</span></span>
        </a>
        <div className="hidden items-center gap-8 text-sm font-medium text-slate-600 md:flex">
          <a href="#features" className="transition hover:text-violet-600">Features</a>
          <a href="#preview" className="transition hover:text-violet-600">How it works</a>
          <a href="#creator" className="transition hover:text-violet-600">About</a>
        </div>
        <a href="#preview" className="hidden items-center gap-2 rounded-full bg-slate-950 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-violet-700 sm:flex">Open demo <ArrowRight aria-hidden="true" data-icon="inline-end" /></a>
        <button type="button" aria-label="Open navigation" className="rounded-lg p-2 text-slate-700 sm:hidden"><Menu aria-hidden="true" /></button>
      </nav>

      <section id="top" className="relative mx-auto grid max-w-6xl items-center gap-14 px-5 pb-20 pt-12 sm:px-8 md:pt-20 lg:grid-cols-[.9fr_1.1fr] lg:px-10 lg:pb-28">
        <div className="pointer-events-none absolute -left-40 top-0 -z-0 size-80 rounded-full bg-violet-200/40 blur-3xl" />
        <div className="relative z-[1]">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-violet-200 bg-white/80 px-3.5 py-2 text-xs font-semibold text-violet-700 shadow-sm"><Sparkles aria-hidden="true" data-icon="inline-start" /> A calmer way to prepare</div>
          <h1 className="max-w-xl text-5xl font-bold leading-[1.05] tracking-[-0.055em] text-slate-950 sm:text-6xl">Make every study session <span className="text-violet-600">count.</span></h1>
          <p className="mt-6 max-w-lg text-lg leading-8 text-slate-600">StudySprint brings your subjects, schedule, and progress into one clear space so you can focus on what matters next.</p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a href="#features" className="inline-flex items-center gap-2 rounded-full bg-violet-600 px-5 py-3.5 text-sm font-bold text-white shadow-xl shadow-violet-200 transition hover:-translate-y-0.5 hover:bg-violet-700">Explore StudySprint <ArrowRight aria-hidden="true" data-icon="inline-end" /></a>
            <span className="text-sm text-slate-500">Demo content · No sign-up required</span>
          </div>
        </div>
        <div className="relative z-[1] rounded-[2rem] border border-violet-100 bg-white p-3 shadow-[0_28px_80px_-24px_rgba(124,58,237,.35)] sm:p-5">
          <div className="rounded-[1.4rem] bg-slate-50 p-4 sm:p-6">
            <div className="mb-5 flex items-center justify-between"><div><p className="text-xs font-medium text-slate-500">WEDNESDAY, 16 OCTOBER</p><h2 className="mt-1 flex items-center gap-1 text-xl font-bold tracking-tight">Good morning, Alex <Sparkles className="text-violet-500" aria-hidden="true" /></h2></div><div className="grid size-10 place-items-center rounded-full bg-violet-100 font-bold text-violet-700">A</div></div>
            <div className="grid gap-4 sm:grid-cols-[1.4fr_.9fr]">
              <div className="rounded-2xl bg-white p-4 shadow-sm"><div className="mb-4 flex items-center justify-between"><div><p className="text-sm font-bold">This week</p><p className="text-xs text-slate-500">Demo progress overview</p></div><span className="rounded-full bg-green-50 px-2 py-1 text-[10px] font-bold text-green-700">+12%</span></div><div className="flex items-end gap-2 rounded-xl bg-violet-50/70 px-3 pt-5"><div className="h-12 flex-1 rounded-t-md bg-violet-200" /><div className="h-20 flex-1 rounded-t-md bg-violet-300" /><div className="h-16 flex-1 rounded-t-md bg-violet-400" /><div className="h-28 flex-1 rounded-t-md bg-violet-600" /><div className="h-24 flex-1 rounded-t-md bg-violet-400" /><div className="h-32 flex-1 rounded-t-md bg-violet-500" /><div className="h-20 flex-1 rounded-t-md bg-violet-300" /></div><div className="mt-2 flex justify-between px-1 text-[10px] text-slate-400"><span>M</span><span>T</span><span>W</span><span>T</span><span>F</span><span>S</span><span>S</span></div></div>
              <div className="rounded-2xl bg-slate-950 p-4 text-white"><div className="flex items-center justify-between"><p className="text-sm font-semibold">Focus timer</p><TimerReset className="text-violet-300" aria-hidden="true" /></div><p className="mt-4 text-4xl font-bold tracking-tight">25:00</p><p className="mt-1 text-xs text-slate-400">Calculus · Demo session</p><button type="button" className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-violet-600 py-2.5 text-xs font-bold transition hover:bg-violet-500"><Play fill="currentColor" aria-hidden="true" data-icon="inline-start" /> Start focus</button></div>
            </div>
            <div className="mt-4 grid gap-4 sm:grid-cols-3"><div className="rounded-2xl bg-white p-4 shadow-sm"><BookOpen className="text-violet-600" aria-hidden="true" /><p className="mt-3 text-2xl font-bold">04</p><p className="text-xs text-slate-500">Subjects in progress</p></div><div className="rounded-2xl bg-white p-4 shadow-sm"><Target className="text-orange-500" aria-hidden="true" /><p className="mt-3 text-2xl font-bold">12</p><p className="text-xs text-slate-500">Tasks this week</p></div><div className="rounded-2xl bg-white p-4 shadow-sm"><Flame className="text-pink-500" aria-hidden="true" /><p className="mt-3 text-2xl font-bold">05</p><p className="text-xs text-slate-500">Day study streak</p></div></div>
          </div>
        </div>
      </section>

      <section id="features" className="border-y border-violet-100 bg-white px-5 py-20 sm:px-8 lg:px-10"><div className="mx-auto max-w-6xl"><div className="max-w-2xl"><p className="text-sm font-bold uppercase tracking-[.18em] text-violet-600">A better study rhythm</p><h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">Built to make planning feel lighter.</h2><p className="mt-4 text-slate-600">A simple toolkit for turning “I should study” into a plan you can actually follow. Every screen is designed around one clear next step.</p></div><div className="mt-12 grid gap-5 md:grid-cols-3">{features.map((feature) => <article key={feature.title} className="rounded-3xl border border-slate-200 bg-slate-50/70 p-6 transition hover:-translate-y-1 hover:border-violet-200 hover:shadow-lg hover:shadow-violet-100/60"><div className="grid size-11 place-items-center rounded-2xl bg-violet-100 text-violet-600"><feature.icon aria-hidden="true" /></div><h3 className="mt-5 font-bold">{feature.title}</h3><p className="mt-2 text-sm leading-6 text-slate-600">{feature.description}</p></article>)}</div></div></section>

      <section id="preview" className="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:px-10"><div className="mb-10 flex flex-wrap items-end justify-between gap-5"><div><p className="text-sm font-bold uppercase tracking-[.18em] text-violet-600">Dashboard preview</p><h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">Your study day, at a glance.</h2></div><span className="rounded-full border border-violet-200 bg-violet-50 px-3 py-1.5 text-xs font-semibold text-violet-700">All data shown is demo content</span></div><div className="grid gap-5 lg:grid-cols-[1.25fr_.75fr]"><div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:p-7"><div className="flex items-center justify-between"><div><h3 className="text-lg font-bold">Weekly schedule</h3><p className="text-sm text-slate-500">Plan your sessions with intention.</p></div><button type="button" className="grid size-9 place-items-center rounded-xl bg-violet-600 text-white transition hover:bg-violet-700" aria-label="Add demo session"><Plus aria-hidden="true" /></button></div><div className="mt-7 grid grid-cols-5 gap-2">{schedule.map((item) => <div key={item.day} className={`rounded-2xl p-3 text-center ${item.active ? 'bg-violet-600 text-white shadow-lg shadow-violet-200' : 'bg-slate-50 text-slate-600'}`}><p className="text-xs font-semibold">{item.day}</p><p className="mt-2 text-lg font-bold">{item.date}</p><div className={`mx-auto mt-3 size-1.5 rounded-full ${item.active ? 'bg-violet-200' : 'bg-violet-400'}`} /></div>)}</div><div className="mt-7 flex flex-col gap-3"><div className="flex items-center gap-4 rounded-2xl border border-violet-100 bg-violet-50/60 p-4"><div className="grid size-10 place-items-center rounded-xl bg-violet-600 text-white"><Clock3 aria-hidden="true" /></div><div className="min-w-0 flex-1"><p className="text-sm font-bold">Calculus · Integration practice</p><p className="mt-1 text-xs text-slate-500">10:00 AM – 10:45 AM · Demo session</p></div><ChevronRight className="text-slate-400" aria-hidden="true" /></div><div className="flex items-center gap-4 rounded-2xl border border-slate-100 p-4"><div className="grid size-10 place-items-center rounded-xl bg-blue-100 text-blue-600"><BookOpen aria-hidden="true" /></div><div className="min-w-0 flex-1"><p className="text-sm font-bold">Physics · Review mechanics</p><p className="mt-1 text-xs text-slate-500">2:30 PM – 3:15 PM · Demo session</p></div><ChevronRight className="text-slate-400" aria-hidden="true" /></div></div></div><div className="flex flex-col gap-5"><div className="rounded-3xl bg-slate-950 p-6 text-white"><div className="flex items-center justify-between"><div><p className="text-sm font-bold">Focus timer</p><p className="mt-1 text-xs text-slate-400">A demo Pomodoro session</p></div><Zap className="text-violet-300" aria-hidden="true" /></div><div className="my-7 text-center text-6xl font-bold tracking-[-.06em]">{minutes}:{remaining}</div><div className="flex gap-3"><button type="button" onClick={() => setTimerRunning((value) => !value)} className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-violet-600 py-3 text-sm font-bold transition hover:bg-violet-500">{timerRunning ? <><span className="size-2 rounded-sm bg-white" /> Pause</> : <><Play fill="currentColor" aria-hidden="true" /> Start</>}</button><button type="button" onClick={() => { setTimerRunning(false); setSeconds(25 * 60) }} className="grid size-12 place-items-center rounded-xl border border-slate-700 text-slate-300 transition hover:bg-slate-800" aria-label="Reset timer"><TimerReset aria-hidden="true" /></button></div></div><div className="rounded-3xl border border-slate-200 bg-white p-6"><div className="flex items-center justify-between"><div><h3 className="font-bold">Upcoming exams</h3><p className="mt-1 text-xs text-slate-500">Demo countdowns</p></div><CalendarDays className="text-violet-600" aria-hidden="true" /></div><div className="mt-5 flex flex-col gap-4"><div className="flex items-center justify-between"><div><p className="text-sm font-semibold">Mathematics</p><p className="text-xs text-slate-500">Midterm · Oct 28</p></div><span className="rounded-lg bg-orange-50 px-2.5 py-1.5 text-xs font-bold text-orange-600">12 days</span></div><div className="flex items-center justify-between"><div><p className="text-sm font-semibold">Physics</p><p className="text-xs text-slate-500">Final · Nov 06</p></div><span className="rounded-lg bg-violet-50 px-2.5 py-1.5 text-xs font-bold text-violet-600">21 days</span></div></div></div></div></div></section>

      <section className="bg-violet-50/70 px-5 py-20 sm:px-8 lg:px-10"><div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[.8fr_1.2fr]"><div><p className="text-sm font-bold uppercase tracking-[.18em] text-violet-600">Keep the momentum</p><h2 className="mt-3 text-3xl font-bold tracking-tight">Small wins add up.</h2><p className="mt-4 max-w-md text-slate-600">Check off what you finish, then let your progress tell the story. These tasks are examples to show the interaction.</p></div><div className="rounded-3xl border border-violet-100 bg-white p-6 shadow-sm"><div className="flex items-center justify-between"><div><h3 className="font-bold">Today&apos;s tasks</h3><p className="mt-1 text-xs text-slate-500">Wednesday · Demo checklist</p></div><span className="text-sm font-bold text-violet-600">{tasks.filter(Boolean).length}/3 done</span></div><div className="mt-5 flex flex-col gap-3">{['Review integration rules', 'Complete practice problems', 'Summarize chapter notes'].map((task, index) => <button key={task} type="button" onClick={() => setTasks((current) => current.map((value, taskIndex) => taskIndex === index ? !value : value))} className="flex items-center gap-3 rounded-2xl border border-slate-100 p-3 text-left transition hover:border-violet-200"><span className={`grid size-6 place-items-center rounded-full border ${tasks[index] ? 'border-violet-600 bg-violet-600 text-white' : 'border-slate-300 text-transparent'}`}><Check aria-hidden="true" /></span><span className={`flex-1 text-sm font-medium ${tasks[index] ? 'text-slate-400 line-through' : 'text-slate-700'}`}>{task}</span><span className="text-xs text-slate-400">Demo</span></button>)}</div></div></div></section>

      <section id="creator" className="mx-auto max-w-6xl px-5 py-20 text-center sm:px-8 lg:px-10"><div className="mx-auto max-w-2xl"><div className="mx-auto grid size-14 place-items-center rounded-2xl bg-slate-950 text-white"><GraduationCap aria-hidden="true" /></div><h2 className="mt-5 text-3xl font-bold tracking-tight">Designed with students in mind.</h2><p className="mt-4 leading-7 text-slate-600">StudySprint is a study-planning web application concept created to make preparation feel more organized, approachable, and achievable.</p><div className="mt-7 inline-flex items-center gap-2 rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700"><CheckCircle2 className="text-violet-600" aria-hidden="true" /> Created by Jetti Prasangi Prem Kumar</div></div></section>

      <footer className="border-t border-slate-200 px-5 py-7 sm:px-8 lg:px-10"><div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 text-sm text-slate-500 sm:flex-row"><span>© 2026 StudySprint · Concept project</span><span>Demo interface · No real user data</span></div></footer>
    </main>
  )
}
