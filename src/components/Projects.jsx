import { projects } from '../data/content.js'

export default function Projects() {
  return (
    <div className="projects">
      {projects.map((p) => (
        <div className="proj" key={p.name}>

          <div className="proj__head">
            <span className="proj__name">{p.name}</span>
          </div>

          <p className="proj__blurb">{p.blurb}</p>

          <div className="proj__tags">
            {p.tags.map((t) => (
              <span className="tag" key={t}>{t}</span>
            ))}
          </div>

          <div className="proj__links">
            {p.live && (
              <a
                href={p.live}
                target="_blank"
                rel="noreferrer"
                className="proj__link"
              >
                Live ↗
              </a>
            )}
            {p.github && (
              <a
                href={p.github}
                target="_blank"
                rel="noreferrer"
                className="proj__link"
              >
                GitHub ↗
              </a>
            )}
          </div>

        </div>
      ))}
    </div>
  )
}