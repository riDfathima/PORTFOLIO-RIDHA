import { useEffect, useRef, useState } from 'react'
import { profile } from '../data/content.js'

function daysSince(dateStr) {
  const start = new Date(dateStr).getTime()
  const diff = Date.now() - start
  return Math.max(0, Math.floor(diff / 86400000))
}

/* count-up animation for the "building things for N days" line */
function useCountUp(target, ms = 1100) {
  const [n, setN] = useState(0)
  const raf = useRef(0)
  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce) { setN(target); return }
    const t0 = performance.now()
    const tick = (t) => {
      const p = Math.min(1, (t - t0) / ms)
      const eased = 1 - Math.pow(1 - p, 3)
      setN(Math.round(target * eased))
      if (p < 1) raf.current = requestAnimationFrame(tick)
    }
    raf.current = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf.current)
  }, [target, ms])
  return n
}

export default function Hero() {
  const total = daysSince(profile.buildingSince)
  const days = useCountUp(total)
  return (
    <header className="hero" id="top">
      <h1 className="hero__title">
        Hey, I&rsquo;m {profile.name}<span className="hero__bang">!!</span>
      </h1>
      <div className="hero__sub">
        <p>i&rsquo;m based in {profile.location}.</p>
        <p>
          i&rsquo;ve been building things for{' '}
          <span className="count">{days.toLocaleString()} days</span>.
        </p>
      </div>
    </header>
  )
}
