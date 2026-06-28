import { footerLine, profile } from '../data/content.js'

/* The cute terminal-style box that closes the page, echoing the
   reference's footer text box. */
export default function FooterBox() {
  return (
    <footer className="termbox">
      <div className="termbox__bar">
        <span className="termbox__dot" style={{ background: '#e879c5' }} />
        <span className="termbox__dot" style={{ background: '#a855f7' }} />
        <span className="termbox__dot" style={{ background: '#5ac26a' }} />
        <span className="termbox__title">ridha@kuromi ~ %</span>
      </div>
      <div className="termbox__body">
        <span className="termbox__prompt">&gt;</span>
        {footerLine}
        <span className="cursor" />
        <div className="termbox__meta">
          made with pixels &amp; &lt;3 ·{' '}
          <a href={`mailto:${profile.email}`}>{profile.email}</a> · {profile.phone}
        </div>
      </div>
    </footer>
  )
}
