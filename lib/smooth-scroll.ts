/**
 * Smooth-scroll to a target element with custom easing.
 * Much silkier than the browser's default scroll-behavior: smooth.
 */
export function smoothScrollTo(target: HTMLElement, duration = 900): void {
  const start = window.scrollY;
  const targetTop = target.getBoundingClientRect().top + start - 80; // nav offset
  const distance = targetTop - start;
  const startTime = performance.now();

  function easeInOutCubic(t: number): number {
    return t < 0.5
      ? 4 * t * t * t
      : 1 - Math.pow(-2 * t + 2, 3) / 2;
  }

  function step(currentTime: number) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const eased = easeInOutCubic(progress);

    window.scrollTo(0, start + distance * eased);

    if (progress < 1) {
      requestAnimationFrame(step);
    }
  }

  requestAnimationFrame(step);
}
