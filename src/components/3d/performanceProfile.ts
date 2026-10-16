// Phones, tablets and low-core machines start on the light rendering profile;
// other devices drop to it automatically if the frame rate can't keep up.
export function prefersLightProfile() {
  if (typeof window === 'undefined') return false
  const cores = navigator.hardwareConcurrency || 4
  return cores <= 4 || window.matchMedia('(pointer: coarse)').matches
}
