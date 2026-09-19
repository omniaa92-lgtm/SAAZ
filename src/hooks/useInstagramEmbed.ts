import { useEffect } from 'react'

declare global {
  interface Window {
    instgrm?: {
      Embeds: { process: () => void }
    }
  }
}

const SCRIPT_ID = 'instagram-embed-script'

/**
 * Loads Instagram's official embed.js once and re-processes embeds
 * whenever `deps` changes (e.g. after the reel list renders).
 * Pass `enabled: false` to skip loading the script entirely (e.g. on
 * mobile, where we link out to the Instagram app instead of embedding).
 */
export function useInstagramEmbed(deps: unknown[], enabled = true) {
  useEffect(() => {
    if (!enabled) return
    const process = () => window.instgrm?.Embeds.process()

    if (window.instgrm) {
      process()
      return
    }

    const existing = document.getElementById(SCRIPT_ID)
    if (existing) {
      existing.addEventListener('load', process)
      return () => existing.removeEventListener('load', process)
    }

    const script = document.createElement('script')
    script.id = SCRIPT_ID
    script.src = 'https://www.instagram.com/embed.js'
    script.async = true
    script.addEventListener('load', process)
    document.body.appendChild(script)

    return () => script.removeEventListener('load', process)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [...deps, enabled])
}
