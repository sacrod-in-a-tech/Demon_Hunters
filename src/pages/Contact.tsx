import { useState } from 'react'
import type { FormEvent } from 'react'
import PageHeader from '../components/PageHeader/PageHeader'
import Reveal from '../components/shared/Reveal'
import { socials } from '../data/content'

interface FormState {
  name: string
  email: string
  subject: string
  message: string
}

const initialState: FormState = { name: '', email: '', subject: '', message: '' }

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

export default function Contact() {
  const [form, setForm] = useState<FormState>(initialState)
  const [errors, setErrors] = useState<Partial<FormState>>({})
  const [status, setStatus] = useState<'idle' | 'submitted'>('idle')

  const handleChange = (field: keyof FormState) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }))
  }

  const validate = (): boolean => {
    const next: Partial<FormState> = {}
    if (!form.name.trim()) next.name = 'Name is required.'
    if (!form.email.trim()) next.email = 'Email is required.'
    else if (!isValidEmail(form.email)) next.email = 'Enter a valid email address.'
    if (!form.subject.trim()) next.subject = 'Subject is required.'
    if (!form.message.trim() || form.message.trim().length < 10)
      next.message = 'Message should be at least 10 characters.'
    setErrors(next)
    return Object.keys(next).length === 0
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (!validate()) return
    // No backend is wired up in this project — this simply confirms
    // the form is valid and gives the user feedback.
    setStatus('submitted')
    setForm(initialState)
  }

  const fieldClass = (hasError: boolean) =>
    `w-full border bg-transparent px-4 py-3 text-sm text-white placeholder:text-[var(--color-ash)] focus:outline-none ${
      hasError ? 'border-[var(--color-crimson-bright)]' : 'border-[var(--color-line)] focus:border-[var(--color-line-red)]'
    }`

  return (
    <>
      <PageHeader
        eyebrow="GET IN TOUCH"
        title="Contact"
        description="Have a question, a lead, or a collaboration in mind? Send the Demon Hunters team a message."
      />

      <section className="relative py-20">
        <div className="mx-auto grid max-w-5xl gap-16 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-10">
          <Reveal>
            <div>
              <h3 className="font-[family-name:var(--font-display)] text-lg font-semibold uppercase tracking-wide text-white">
                Connect
              </h3>
              <p className="mt-3 max-w-xs text-sm leading-relaxed text-[var(--color-ash)]">
                Follow along or reach out directly through any of these channels.
              </p>
              <div className="mt-6 flex flex-col gap-3">
                {socials.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className="w-fit border-b border-transparent font-[family-name:var(--font-display)] text-xs tracking-[0.15em] text-white/80 transition-colors hover:border-[var(--color-crimson-bright)] hover:text-[var(--color-crimson-bright)]"
                  >
                    {social.label.toUpperCase()}
                  </a>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            {status === 'submitted' ? (
              <div className="border border-[var(--color-line-red)] bg-[var(--color-crimson)]/5 px-6 py-10 text-center">
                <p className="font-[family-name:var(--font-display)] text-sm tracking-[0.2em] text-white">
                  MESSAGE READY TO SEND
                </p>
                <p className="mt-2 text-sm text-[var(--color-ash)]">
                  Thanks for reaching out — your message passed validation.
                </p>
                <button
                  onClick={() => setStatus('idle')}
                  className="mt-6 border border-[var(--color-line)] px-5 py-2 font-[family-name:var(--font-display)] text-xs tracking-[0.15em] text-white transition-colors hover:border-[var(--color-crimson-bright)]"
                >
                  SEND ANOTHER
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
                <div>
                  <label htmlFor="name" className="mb-2 block font-[family-name:var(--font-display)] text-[10px] tracking-[0.2em] text-[var(--color-ash)]">
                    NAME
                  </label>
                  <input
                    id="name"
                    type="text"
                    value={form.name}
                    onChange={handleChange('name')}
                    className={fieldClass(!!errors.name)}
                    placeholder="Your name"
                  />
                  {errors.name && <p className="mt-1.5 text-xs text-[var(--color-crimson-bright)]">{errors.name}</p>}
                </div>

                <div>
                  <label htmlFor="email" className="mb-2 block font-[family-name:var(--font-display)] text-[10px] tracking-[0.2em] text-[var(--color-ash)]">
                    EMAIL
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange('email')}
                    className={fieldClass(!!errors.email)}
                    placeholder="you@example.com"
                  />
                  {errors.email && <p className="mt-1.5 text-xs text-[var(--color-crimson-bright)]">{errors.email}</p>}
                </div>

                <div>
                  <label htmlFor="subject" className="mb-2 block font-[family-name:var(--font-display)] text-[10px] tracking-[0.2em] text-[var(--color-ash)]">
                    SUBJECT
                  </label>
                  <input
                    id="subject"
                    type="text"
                    value={form.subject}
                    onChange={handleChange('subject')}
                    className={fieldClass(!!errors.subject)}
                    placeholder="What's this about?"
                  />
                  {errors.subject && <p className="mt-1.5 text-xs text-[var(--color-crimson-bright)]">{errors.subject}</p>}
                </div>

                <div>
                  <label htmlFor="message" className="mb-2 block font-[family-name:var(--font-display)] text-[10px] tracking-[0.2em] text-[var(--color-ash)]">
                    MESSAGE
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    value={form.message}
                    onChange={handleChange('message')}
                    className={fieldClass(!!errors.message)}
                    placeholder="Tell us what's on your mind..."
                  />
                  {errors.message && <p className="mt-1.5 text-xs text-[var(--color-crimson-bright)]">{errors.message}</p>}
                </div>

                <button
                  type="submit"
                  className="mt-2 w-fit bg-[var(--color-crimson)] px-8 py-3.5 font-[family-name:var(--font-display)] text-xs font-semibold tracking-[0.2em] text-white transition-all hover:bg-[var(--color-crimson-bright)] hover:shadow-[0_0_30px_rgba(255,26,26,0.4)]"
                >
                  SEND MESSAGE
                </button>
              </form>
            )}
          </Reveal>
        </div>
      </section>
    </>
  )
}
