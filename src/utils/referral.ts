const STORAGE_KEY = 'saaz-ref'

/**
 * Reads ?ref=CODE from the URL (if present) and remembers it in
 * localStorage, so it survives the visitor browsing other sections
 * before eventually submitting the booking form.
 */
export function captureReferralCode() {
  const params = new URLSearchParams(window.location.search)
  const ref = params.get('ref')?.trim()
  if (ref) {
    window.localStorage.setItem(STORAGE_KEY, ref)
  }
}

export function getReferralCode(): string {
  return window.localStorage.getItem(STORAGE_KEY) ?? ''
}
