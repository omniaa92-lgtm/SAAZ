import type { IconType } from 'react-icons'

const GRADIENTS = [
  'from-primary-900 via-primary-950 to-black',
  'from-slate-800 via-primary-950 to-black',
  'from-primary-800 via-black to-primary-950',
  'from-black via-primary-900 to-primary-950',
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
 * Styled dark + gold-bordered to match the brand's real detailing photos.
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
      <div className="relative flex flex-col items-center gap-2 text-accent-400">
        <Icon className="h-10 w-10 sm:h-14 sm:w-14" />
        {label && <span className="text-xs font-medium tracking-wide text-white/80 sm:text-sm">{label}</span>}
      </div>
    </div>
  )
}
