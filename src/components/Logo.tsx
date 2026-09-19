/**
 * Recreated approximation of the SAAZ IDEA shield logo (navy shield outline,
 * geometric quadrant linework, gold sparkle). Replace with the real logo
 * file (SVG/PNG) from the client for a pixel-exact match — see README.
 */
interface LogoProps {
  className?: string
  withText?: boolean
  textClassName?: string
}

export default function Logo({ className = 'h-9 w-9', withText = false, textClassName = '' }: LogoProps) {
  return (
    <div className="flex items-center gap-2">
      <svg viewBox="0 0 100 118" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M50 4 L92 16 V54 C92 82 74 102 50 114 C26 102 8 82 8 54 V16 Z"
          className="stroke-primary-800 dark:stroke-white"
          strokeWidth="5"
          strokeLinejoin="round"
        />
        <path d="M50 14 V104" className="stroke-primary-800 dark:stroke-white" strokeWidth="3" />
        <path d="M14 46 H86" className="stroke-primary-800 dark:stroke-white" strokeWidth="3" />
        <path d="M26 26 H40" className="stroke-primary-800 dark:stroke-white" strokeWidth="3" strokeLinecap="round" />
        <path d="M60 26 H74" className="stroke-primary-800 dark:stroke-white" strokeWidth="3" strokeLinecap="round" />
        <path d="M22 68 H40" className="stroke-primary-800 dark:stroke-white" strokeWidth="3" strokeLinecap="round" />
        <path d="M22 82 H36" className="stroke-primary-800 dark:stroke-white" strokeWidth="3" strokeLinecap="round" />
        <path d="M60 68 H78" className="stroke-primary-800 dark:stroke-white" strokeWidth="3" strokeLinecap="round" />
        <path d="M64 82 H78" className="stroke-primary-800 dark:stroke-white" strokeWidth="3" strokeLinecap="round" />
        <path
          d="M84 6 L87 13 L94 16 L87 19 L84 26 L81 19 L74 16 L81 13 Z"
          className="fill-accent-500"
        />
      </svg>
      {withText && (
        <span className={`leading-none font-extrabold tracking-wide ${textClassName}`}>
          <span className="block text-primary-950 dark:text-white">SAAZ</span>
          <span className="block text-accent-500">IDEA</span>
        </span>
      )}
    </div>
  )
}
