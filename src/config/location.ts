/**
 * Real Google Maps link provided by the client (SAAZ IDEA showroom, Jeddah).
 * GOOGLE_MAPS_EMBED_SRC is a best-effort text-search embed (built from the
 * business name + city) since the short link above can't be resolved to
 * exact coordinates from this environment (no internet access here).
 *
 * For a pixel-exact pin: open Google Maps → find the showroom → Share →
 * "Embed a map" → copy the iframe `src` (starts with
 * https://www.google.com/maps/embed?pb=...) and paste it below.
 */
export const GOOGLE_MAPS_URL = 'https://maps.app.goo.gl/zRFqZRgbdfpa2mkM6'

export const GOOGLE_MAPS_EMBED_SRC =
  'https://www.google.com/maps?q=' + encodeURIComponent('SAAZ IDEA ساز آيديا جدة') + '&output=embed'
