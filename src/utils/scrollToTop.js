// Button par click karne se page badalta nahi, sirf smoothly sab se upar (navbar) chala jata hai.
export function scrollToTop(e) {
  if (e) e.preventDefault();
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  window.scrollTo({ top: 0, left: 0, behavior: reduce ? "auto" : "smooth" });
}