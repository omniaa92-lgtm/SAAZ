interface LogoProps {
  /** Controls the badge height, e.g. "h-14". Width follows the logo's own aspect ratio. */
  className?: string
}

/**
 * The real SAAZ IDEA logo (shield + wordmark, navy/gold on transparent PNG).
 * Inverted in dark mode (navy linework -> white) so it stays legible on
 * dark backgrounds without needing a light badge behind it.
 */
export default function Logo({ className = 'h-14' }: LogoProps) {
  return (
    <img
      src="/images/logo.png"
      alt="SAAZ IDEA"
      className={`w-auto object-contain dark:brightness-0 dark:invert ${className}`}
    />
  )
}
