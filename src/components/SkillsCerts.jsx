import { skills, certifications } from '../data/content.js'

export function SkillChips() {
  return (
    <div className="skills">
      {skills.map((group) => (
        <div className="skillrow" key={group.group}>
          <div className="skillrow__label">{group.group}</div>
          <div className="chips">
            {group.items.map((item) => (
              <span className="chip" key={item}>{item}</span>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

export function Certs() {
  return (
    <div className="certs">
      {certifications.map((c) => (
        <div className="cert" key={c.name}>
          <span className="cert__star">&#10022;</span>
          <span className="cert__name">{c.name}</span>
          <span className="cert__org">{c.org}</span>
        </div>
      ))}
    </div>
  )
}
