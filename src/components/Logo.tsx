interface LogoProps {
  /** Controls the badge height, e.g. "h-14". Width follows the logo's own aspect ratio. */
  className?: string
}

/**
 * The real SAAZ IDEA logo (shield + wordmark, navy/gold on transparent PNG).
 * Wrapped in a white badge so the navy linework stays legible in dark mode too.
 */
export default function Logo({ className = 'h-14' }: LogoProps) {
  return (
    <span
      className={`inline-flex items-center justify-center rounded-xl bg-white px-2 py-1.5 shadow-sm ring-1 ring-primary-100 dark:ring-white/10 ${className}`}
    >
      <img src="/images/logo.png" alt="SAAZ IDEA" className="h-full w-auto object-contain" />
    </span>
  )
}
