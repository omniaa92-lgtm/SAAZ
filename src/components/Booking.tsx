import { useState, type FormEvent } from 'react'
import { useTranslation } from 'react-i18next'
import {
  HiOutlineCheckCircle,
  HiOutlineExclamationCircle,
  HiOutlineCalendarDays,
} from 'react-icons/hi2'

const FORMSPREE_ID = import.meta.env.VITE_FORMSPREE_ID as string | undefined
const SALES_EMAIL = 'saazidea@gmail.com'

type Status = 'idle' | 'submitting' | 'success' | 'error'

export default function Booking() {
  const { t } = useTranslation()
  const [status, setStatus] = useState<Status>('idle')
  const serviceOptions = t('booking.form.serviceOptions', { returnObjects: true }) as string[]

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!FORMSPREE_ID) {
      console.error(
        'VITE_FORMSPREE_ID is not set. Create a Formspree form pointing to saazidea@gmail.com and add the ID to your .env file.',
      )
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

  if (status === 'success') {
    return (
      <section id="booking" className="section-y">
        <div className="container-x">
          <div className="mx-auto flex max-w-lg flex-col items-center rounded-3xl border border-primary-100 bg-primary-50/60 p-10 text-center dark:border-primary-500/20 dark:bg-primary-500/5">
            <HiOutlineCheckCircle className="h-14 w-14 text-primary-600 dark:text-primary-400" />
            <h3 className="mt-4 text-xl font-bold">{t('booking.form.successTitle')}</h3>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">{t('booking.form.successBody')}</p>
            <button onClick={() => setStatus('idle')} className="btn-outline mt-6">
              {t('booking.form.newRequest')}
            </button>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="booking" className="section-y bg-slate-50 dark:bg-slate-900/40">
      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">
            <HiOutlineCalendarDays className="h-4 w-4" />
            {t('booking.eyebrow')}
          </span>
          <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">{t('booking.title')}</h2>
          <p className="mt-4 text-slate-600 dark:text-slate-400">{t('booking.subtitle')}</p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="mx-auto mt-12 max-w-2xl rounded-3xl border border-slate-100 bg-white p-6 shadow-sm sm:p-10 dark:border-slate-800 dark:bg-slate-900"
        >
          <input type="hidden" name="_to" value={SALES_EMAIL} />
          <input type="hidden" name="_subject" value="طلب حجز جديد من موقع SAAZ IDEA" />

          <div className="grid gap-5 sm:grid-cols-2">
            <Field label={t('booking.form.name')} required>
              <input
                type="text"
                name="name"
                required
                placeholder={t('booking.form.namePlaceholder')}
                className="input"
              />
            </Field>
            <Field label={t('booking.form.phone')} required>
              <input
                type="tel"
                name="phone"
                required
                placeholder={t('booking.form.phonePlaceholder')}
                className="input"
              />
            </Field>
            <Field label={t('booking.form.email')} required>
              <input
                type="email"
                name="email"
                required
                placeholder={t('booking.form.emailPlaceholder')}
                className="input"
              />
            </Field>
            <Field label={t('booking.form.date')}>
              <input type="date" name="preferred_date" className="input" />
            </Field>
            <Field label={t('booking.form.service')} className="sm:col-span-2" required>
              <select name="service" required defaultValue="" className="input">
                <option value="" disabled>
                  —
                </option>
                {serviceOptions.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            </Field>
            <Field label={t('booking.form.message')} className="sm:col-span-2">
              <textarea
                name="message"
                rows={4}
                placeholder={t('booking.form.messagePlaceholder')}
                className="input resize-none"
              />
            </Field>
          </div>

          {status === 'error' && (
            <div className="mt-5 flex items-start gap-2 rounded-xl bg-red-50 p-4 text-sm text-red-700 dark:bg-red-500/10 dark:text-red-300">
              <HiOutlineExclamationCircle className="mt-0.5 h-5 w-5 shrink-0" />
              <div>
                <p className="font-semibold">{t('booking.form.errorTitle')}</p>
                <p>{t('booking.form.errorBody')}</p>
              </div>
            </div>
          )}

          <button type="submit" disabled={status === 'submitting'} className="btn-primary mt-7 w-full">
            {status === 'submitting' ? t('booking.form.submitting') : t('booking.form.submit')}
          </button>
        </form>
      </div>
    </section>
  )
}

function Field({
  label,
  required,
  className = '',
  children,
}: {
  label: string
  required?: boolean
  className?: string
  children: React.ReactNode
}) {
  return (
    <label className={`block text-start text-sm font-semibold text-slate-700 dark:text-slate-200 ${className}`}>
      {label} {required && <span className="text-red-500">*</span>}
      <div className="mt-1.5">{children}</div>
    </label>
  )
}
