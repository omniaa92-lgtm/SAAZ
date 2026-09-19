import type { IconType } from 'react-icons'

const GRADIENTS = [
  'from-primary-500 via-primary-600 to-teal-800',
  'from-accent-400 via-accent-500 to-orange-600',
  'from-primary-400 via-teal-600 to-slate-800',
  'from-accent-300 via-primary-500 to-primary-800',
]

interface ImagePlaceholderProps {
  icon: IconType
  label?: string
  variant?: 0 | 1 | 2 | 3
  className?: string
}

/**
 * Temporary visual placeholder until real photography is provided.
 * Swap for a real <img> once assets from the client are available.
 */
export default function ImagePlaceholder({
  icon: Icon,
  label,
  variant = 0,
  className = '',
}: ImagePlaceholderProps) {
  return (
    <div
      className={`relative flex items-center justify-center overflow-hidden bg-gradient-to-br ${GRADIENTS[variant]} ${className}`}
    >
      <div className="absolute inset-0 opacity-10 [background-image:radial-gradient(circle_at_2px_2px,white_1px,transparent_0)] [background-size:24px_24px]" />
      <div className="relative flex flex-col items-center gap-2 text-white/90">
        <Icon className="h-10 w-10 sm:h-14 sm:w-14" />
        {label && <span className="text-xs font-medium tracking-wide sm:text-sm">{label}</span>}
      </div>
    </div>
  )
}
