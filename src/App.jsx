import Decor from './components/Decor.jsx'
import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import Section from './components/Section.jsx'
import Rows from './components/Rows.jsx'
import Projects from './components/Projects.jsx'
import { SkillChips, Certs } from './components/SkillsCerts.jsx'
import FooterBox from './components/FooterBox.jsx'
import { currently, previously } from './data/content.js'

export default function App() {
  return (
    <>
      <div className="scanlines" aria-hidden="true" />
      <Nav />
      <div className="page">
        <Decor />
        <main className="shell">
          <Hero />

          <Section title="I'm currently…">
            <Rows items={currently} />
          </Section>

          <Section title="Previously I…">
            <Rows items={previously} />
          </Section>

          <Section title="A few projects I've built…">
            <Projects />
          </Section>

          <Section title="Skills I pixel with…">
            <SkillChips />
          </Section>

          <Section title="Certifications & training…">
            <Certs />
          </Section>

          <FooterBox />
        </main>
      </div>
    </>
  )
}
