/* Generic titled section with a Minecraft-font lowercase eyebrow,
   matching the reference's "I'm currently…" style. */
export default function Section({ title, children, id }) {
  return (
    <section className="block" id={id}>
      <h2 className="eyebrow">
        {title}
        <span className="tilde"> ~</span>
      </h2>
      {children}
    </section>
  )
}
