import { Kuromi } from '../sprites/Sprites.jsx'
import { nav } from '../data/content.js'

export default function Nav() {
  return (
    <nav className="nav">
      <div className="nav__pill">
        <a className="nav__avatar" href="#top" aria-label="Ridha — home">
          <Kuromi width="100%" height="100%" />
        </a>
        <div className="nav__links">
          {nav.map((item) => (
            <a
              key={item.label}
              className="nav__link"
              href={item.href}
              target={item.href.startsWith('http') ? '_blank' : undefined}
              rel={item.href.startsWith('http') ? 'noreferrer' : undefined}
              title={item.placeholder ? 'link coming soon' : item.label}
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  )
}
