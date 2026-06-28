import { Icon } from '../sprites/Sprites.jsx'

/* A list of "> ..." lines with a small inline pixel icon, used for the
   "currently" and "previously" sections. */
export default function Rows({ items }) {
  return (
    <div className="rows">
      {items.map((row, i) => (
        <div className="row" key={i}>
          <span className="row__marker">&gt;</span>
          <span className="row__text">
            {row.sprite && (
              <span className="row__icon">
                <Icon name={row.sprite} width="100%" height="100%" />
              </span>
            )}{' '}
            {row.text}
            {row.link && (
              <>
                {' '}
                <a
                  className="ink-link"
                  href={row.link.href}
                  target={row.link.href.startsWith('http') ? '_blank' : undefined}
                  rel={row.link.href.startsWith('http') ? 'noreferrer' : undefined}
                >
                  {row.link.label}
                </a>
              </>
            )}
            {row.tail}
          </span>
        </div>
      ))}
    </div>
  )
}
