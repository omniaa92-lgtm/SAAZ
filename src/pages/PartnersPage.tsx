import { useState, type FormEvent, type ReactNode } from 'react'
import { useTranslation } from 'react-i18next'
import {
  HiOutlineLink,
  HiOutlineDocumentText,
  HiOutlineShieldCheck,
  HiOutlineChartBar,
  HiOutlineClipboardDocumentCheck,
  HiOutlineChatBubbleLeftRight,
  HiOutlineUserGroup,
  HiOutlineBuildingOffice2,
  HiOutlineBriefcase,
  HiOutlineCheckCircle,
  HiOutlineExclamationCircle,
} from 'react-icons/hi2'
import { FaWhatsapp } from 'react-icons/fa'
import { WHATSAPP_URL } from '../config/contact'

const TOOL_ICONS = [
  HiOutlineLink,
  HiOutlineDocumentText,
  HiOutlineShieldCheck,
  HiOutlineChartBar,
  HiOutlineClipboardDocumentCheck,
  HiOutlineChatBubbleLeftRight,
]
const TRACK_ICONS = [HiOutlineUserGroup, HiOutlineBuildingOffice2, HiOutlineBriefcase]

const FORMSPREE_ID = import.meta.env.VITE_FORMSPREE_ID as string | undefined
const SALES_EMAIL = 'saazidea@gmail.com'

type Status = 'idle' | 'submitting' | 'success' | 'error'

interface ToolItem {
  title: string
  desc: string
}
interface TrackItem {
  num: string
  title: string
  desc: string
  points: string[]
}
interface StepItem {
  title: string
  desc: string
}
interface FaqItem {
  q: string
  a: string
}

export default function PartnersPage() {
  const { t } = useTranslation()
  const [status, setStatus] = useState<Status>('idle')

  const chips = t('partners.hero.chips', { returnObjects: true }) as string[]
  const tools = t('partners.tools.items', { returnObjects: true }) as ToolItem[]
  const tracks = t('partners.tracks.items', { returnObjects: true }) as TrackItem[]
  const steps = t('partners.how.steps', { returnObjects: true }) as StepItem[]
  const commissionRows = t('partners.commission.rows', { returnObjects: true }) as string[]
  const rules = t('partners.rules.items', { returnObjects: true }) as string[]
  const faqs = t('partners.faq.items', { returnObjects: true }) as FaqItem[]
  const applyPoints = t('partners.apply.points', { returnObjects: true }) as string[]
  const channelOptions = t('partners.apply.form.channelOptions', { returnObjects: true }) as string[]

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!FORMSPREE_ID) {
      console.error('VITE_FORMSPREE_ID is not set.')
      setStatus('error')
      return
    }

    const form = e.currentTarget
    const formData = new FormData(form)
    setStatus('submitting')

    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        body: formData,
        headers: { Accept: 'application/json' },
      })
      if (res.ok) {
        setStatus('success')
        form.reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-primary-700 to-primary-950 pt-16 pb-20 sm:pt-24 sm:pb-28">
        <div className="container-x text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-accent-400/10 px-4 py-1.5 text-xs font-bold tracking-wide text-accent-400 uppercase">
            {t('partners.hero.eyebrow')}
          </span>
          <h1 className="mx-auto mt-5 max-w-3xl text-4xl font-extrabold leading-tight text-white sm:text-5xl">
            {t('partners.hero.title')}
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-slate-300">{t('partners.hero.subtitle')}</p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a href="#apply" className="btn-primary">
              {t('partners.hero.ctaPrimary')}
            </a>
            <a
              href="#how"
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:border-accent-400 hover:text-accent-400 active:scale-[0.98]"
            >
              {t('partners.hero.ctaSecondary')}
            </a>
          </div>
          <div className="mt-7 flex flex-wrap items-center justify-center gap-2.5">
            {chips.map((c) => (
              <span
                key={c}
                className="rounded-full border border-white/15 px-3.5 py-1.5 text-xs font-semibold text-slate-300"
              >
                {c}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Tools */}
      <section className="section-y">
        <div className="container-x">
          <div className="mx-auto max-w-2xl text-center">
            <span className="eyebrow">{t('partners.tools.eyebrow')}</span>
            <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">{t('partners.tools.title')}</h2>
            <p className="mt-4 text-slate-600 dark:text-slate-400">{t('partners.tools.subtitle')}</p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {tools.map((item, i) => {
              const Icon = TOOL_ICONS[i % TOOL_ICONS.length]
              return (
                <div key={item.title} className="card p-6">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary-950 text-accent-400">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 font-bold text-primary-950 dark:text-white">{item.title}</h3>
                  <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">{item.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Tracks */}
      <section className="section-y bg-primary-50/40 dark:bg-primary-900/20">
        <div className="container-x">
          <div className="mx-auto max-w-2xl text-center">
            <span className="eyebrow">{t('partners.tracks.eyebrow')}</span>
            <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">{t('partners.tracks.title')}</h2>
            <p className="mt-4 text-slate-600 dark:text-slate-400">{t('partners.tracks.subtitle')}</p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {tracks.map((track, i) => {
              const Icon = TRACK_ICONS[i % TRACK_ICONS.length]
              return (
                <div key={track.title} className="card p-7">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent-400/10 text-accent-600 dark:text-accent-400">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 text-lg font-extrabold text-primary-950 dark:text-white">{track.title}</h3>
                  <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">{track.desc}</p>
                  <ul className="mt-4 space-y-2">
                    {track.points.map((p) => (
                      <li key={p} className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-300">
                        <HiOutlineCheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-accent-600 dark:text-accent-400" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how" className="section-y">
        <div className="container-x">
          <div className="mx-auto max-w-2xl text-center">
            <span className="eyebrow">{t('partners.how.eyebrow')}</span>
            <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">{t('partners.how.title')}</h2>
            <p className="mt-4 text-slate-600 dark:text-slate-400">{t('partners.how.subtitle')}</p>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, i) => (
              <div key={step.title} className="card p-6">
                <span className="text-4xl font-black text-transparent [-webkit-text-stroke:1.5px_#f5b400] dark:[-webkit-text-stroke:1.5px_#ffc21c]">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="mt-4 font-bold text-primary-950 dark:text-white">{step.title}</h3>
                <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Commission */}
      <section className="section-y bg-gradient-to-b from-primary-900 to-primary-950">
        <div className="container-x grid items-center gap-10 lg:grid-cols-2">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-accent-400/10 px-4 py-1.5 text-xs font-bold tracking-wide text-accent-400 uppercase">
              {t('partners.commission.eyebrow')}
            </span>
            <h2 className="mt-4 text-3xl font-extrabold text-white sm:text-4xl">{t('partners.commission.title')}</h2>
            <p className="mt-4 text-slate-400">{t('partners.commission.desc')}</p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-7">
            <div className="flex items-baseline justify-between">
              <span className="text-3xl font-extrabold text-accent-400">10%</span>
              <span className="text-xs text-slate-400">{t('partners.commission.calcLabel')}</span>
            </div>
            <div className="mt-5 space-y-2.5">
              {commissionRows.map((row, i) => (
                <div key={row} className="flex items-center justify-between rounded-xl bg-white/5 px-4 py-3 text-sm text-slate-200">
                  <span>{row}</span>
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white/10 text-xs font-bold text-white">
                    {i + 1}
                  </span>
                </div>
              ))}
              <div className="flex items-center justify-between rounded-xl bg-accent-400/15 px-4 py-3 text-sm font-semibold text-white">
                <span>{t('partners.commission.finalRow')}</span>
                <span className="flex h-6 items-center justify-center rounded-full bg-accent-400 px-2 text-xs font-bold text-primary-950">
                  10%
                </span>
              </div>
            </div>
            <p className="mt-4 text-xs text-slate-500">{t('partners.commission.note')}</p>
          </div>
        </div>
      </section>

      {/* Rules */}
      <section className="section-y">
        <div className="container-x">
          <div className="rounded-3xl bg-primary-950 p-8 sm:p-10">
            <div className="mx-auto max-w-2xl text-center">
              <span className="inline-flex items-center gap-2 rounded-full bg-accent-400/10 px-4 py-1.5 text-xs font-bold tracking-wide text-accent-400 uppercase">
                {t('partners.rules.title')}
              </span>
              <p className="mt-4 text-slate-400">{t('partners.rules.subtitle')}</p>
            </div>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {rules.map((rule, i) => (
                <div key={rule} className="flex items-start gap-3.5 rounded-2xl bg-white/5 p-4 transition hover:bg-white/10">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent-400/15 text-xs font-extrabold text-accent-400">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <p className="pt-1 text-sm text-slate-300">{rule}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-y">
        <div className="container-x">
          <div className="mx-auto max-w-2xl text-center">
            <span className="eyebrow">{t('partners.faq.eyebrow')}</span>
            <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">{t('partners.faq.title')}</h2>
          </div>
          <div className="mx-auto mt-10 max-w-3xl space-y-3">
            {faqs.map((item) => (
              <details
                key={item.q}
                className="group rounded-2xl border border-primary-100/70 bg-white p-5 dark:border-white/10 dark:bg-primary-900"
              >
                <summary className="flex cursor-pointer list-none items-center justify-start gap-3 font-semibold text-primary-950 dark:text-white">
                  {item.q}
                  <span className="shrink-0 text-lg text-accent-600 transition group-open:rotate-45 dark:text-accent-400">
                    +
                  </span>
                </summary>
                <p className="mt-3 text-sm text-slate-500 dark:text-slate-400">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Apply */}
      <section id="apply" className="section-y bg-gradient-to-b from-primary-900 to-primary-950">
        <div className="container-x grid gap-10 lg:grid-cols-2 lg:items-start">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-accent-400/10 px-4 py-1.5 text-xs font-bold tracking-wide text-accent-400 uppercase">
              {t('partners.apply.eyebrow')}
            </span>
            <h2 className="mt-4 text-2xl font-extrabold text-white sm:text-3xl">{t('partners.apply.title')}</h2>
            <ul className="mt-6 space-y-2.5">
              {applyPoints.map((p) => (
                <li key={p} className="flex items-start gap-2 text-sm text-slate-300">
                  <HiOutlineCheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-accent-400" />
                  {p}
                </li>
              ))}
            </ul>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-flex items-center gap-2 rounded-full border border-accent-400/30 px-5 py-2.5 text-sm font-bold text-accent-400 transition hover:bg-accent-400/10"
            >
              <FaWhatsapp className="h-4 w-4" />
              {t('partners.apply.whatsapp')}
            </a>
          </div>

          {status === 'success' ? (
            <div className="flex flex-col items-center rounded-3xl bg-white p-10 text-center dark:bg-primary-900">
              <HiOutlineCheckCircle className="h-14 w-14 text-emerald-500" />
              <h3 className="mt-4 text-xl font-bold text-primary-950 dark:text-white">
                {t('partners.apply.form.successTitle')}
              </h3>
              <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">{t('partners.apply.form.successBody')}</p>
              <button onClick={() => setStatus('idle')} className="btn-outline mt-6">
                {t('partners.apply.form.newRequest')}
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="rounded-3xl bg-white p-6 shadow-sm sm:p-8 dark:bg-primary-900">
              <input type="hidden" name="_to" value={SALES_EMAIL} />
              <input type="hidden" name="_subject" value="طلب انضمام شريك تسويق جديد - ساز آيديا" />

              <h3 className="text-lg font-extrabold text-primary-950 dark:text-white">{t('partners.apply.form.title')}</h3>
              <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">{t('partners.apply.form.subtitle')}</p>

              <div className="mt-6 space-y-4">
                <Field label={t('partners.apply.form.name')} required>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder={t('partners.apply.form.namePlaceholder')}
                    className="input"
                  />
                </Field>
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field label={t('partners.apply.form.phone')} required>
                    <input
                      type="tel"
                      name="phone"
                      required
                      inputMode="numeric"
                      pattern="[0-9]{10}"
                      maxLength={10}
                      title={t('partners.apply.form.phoneHint')}
                      placeholder={t('partners.apply.form.phonePlaceholder')}
                      className="input"
                    />
                  </Field>
                  <Field label={t('partners.apply.form.email')} required>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder={t('partners.apply.form.emailPlaceholder')}
                      className="input"
                    />
                  </Field>
                </div>
                <Field label={t('partners.apply.form.channel')}>
                  <select name="channel" defaultValue={channelOptions[0]} className="input">
                    {channelOptions.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </Field>
                <Field label={t('partners.apply.form.message')}>
                  <textarea
                    name="message"
                    rows={3}
                    placeholder={t('partners.apply.form.messagePlaceholder')}
                    className="input resize-none"
                  />
                </Field>
              </div>

              {status === 'error' && (
                <div className="mt-5 flex items-start gap-2 rounded-xl bg-red-50 p-4 text-sm text-red-700 dark:bg-red-500/10 dark:text-red-300">
                  <HiOutlineExclamationCircle className="mt-0.5 h-5 w-5 shrink-0" />
                  <div>
                    <p className="font-semibold">{t('partners.apply.form.errorTitle')}</p>
                    <p>{t('partners.apply.form.errorBody')}</p>
                  </div>
                </div>
              )}

              <button type="submit" disabled={status === 'submitting'} className="btn-primary mt-6 w-full">
                {status === 'submitting' ? t('partners.apply.form.submitting') : t('partners.apply.form.submit')}
              </button>
            </form>
          )}
        </div>
      </section>
    </main>
  )
}

function Field({ label, required, children }: { label: string; required?: boolean; children: ReactNode }) {
  return (
    <label className="block text-start text-sm font-semibold text-slate-700 dark:text-slate-200">
      {label} {required && <span className="text-red-500">*</span>}
      <div className="mt-1.5">{children}</div>
    </label>
  )
}
