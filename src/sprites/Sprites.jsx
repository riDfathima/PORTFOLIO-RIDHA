/* ============================================================
   Sprites.jsx — original hand-drawn pixel art (no copyrighted assets)
   Every sprite is a 16-grid SVG built from <rect> pixels with
   crisp edges so it scales to any size while staying pixelated.
   ============================================================ */

// tiny helper: a single pixel
const P = ({ x, y, c, w = 1, h = 1 }) => (
  <rect x={x} y={y} width={w} height={h} fill={c} />
)

const palette = {
  white: '#f3eef7',
  ink: '#1a1320',
  eye: '#0d0a10',
  pink: '#e879c5',
  pinkDeep: '#d4499f',
  purple: '#a855f7',
  purpleDeep: '#7c3aed',
  lilac: '#c9a9ff',
  green: '#5ac26a',
  greenDeep: '#3f8f4c',
  pot: '#7c3aed',
  potDeep: '#502c86',
  bone: '#ece6f0',
}

/* -------------------------------- KUROMI -------------------------------- */
export const Kuromi = (props) => (
  <svg viewBox="0 0 16 16" shapeRendering="crispEdges" {...props}>
    {/* black ears / horns */}
    <P x={4} y={0} c={palette.ink} />
    <P x={3} y={1} c={palette.ink} w={2} />
    <P x={3} y={2} c={palette.ink} w={3} />
    <P x={11} y={0} c={palette.ink} />
    <P x={11} y={1} c={palette.ink} w={2} />
    <P x={10} y={2} c={palette.ink} w={3} />
    {/* white hood */}
    <P x={3} y={3} c={palette.white} w={10} />
    <P x={2} y={4} c={palette.white} w={12} h={5} />
    <P x={3} y={9} c={palette.white} w={10} />
    <P x={4} y={10} c={palette.white} w={8} />
    <P x={5} y={11} c={palette.white} w={6} />
    {/* pink skull crest */}
    <P x={6} y={3} c={palette.pink} w={4} h={3} />
    <P x={6} y={4} c={palette.eye} />
    <P x={9} y={4} c={palette.eye} />
    <P x={7} y={6} c={palette.pinkDeep} w={2} />
    {/* big eyes */}
    <P x={5} y={7} c={palette.eye} w={2} h={2} />
    <P x={9} y={7} c={palette.eye} w={2} h={2} />
    <P x={5} y={7} c={palette.white} />
    <P x={9} y={7} c={palette.white} />
    {/* blush */}
    <P x={4} y={9} c={palette.pink} />
    <P x={11} y={9} c={palette.pink} />
  </svg>
)

/* --------------------------------- CAT --------------------------------- */
export const Cat = ({ coat = palette.lilac, ...props }) => (
  <svg viewBox="0 0 16 16" shapeRendering="crispEdges" {...props}>
    {/* ears */}
    <P x={3} y={2} c={coat} w={2} h={2} />
    <P x={11} y={2} c={coat} w={2} h={2} />
    <P x={4} y={3} c={palette.pink} />
    <P x={11} y={3} c={palette.pink} />
    {/* head + body */}
    <P x={3} y={4} c={coat} w={10} />
    <P x={2} y={5} c={coat} w={12} h={5} />
    <P x={3} y={10} c={coat} w={10} />
    <P x={4} y={11} c={coat} w={8} />
    {/* eyes */}
    <P x={5} y={6} c={palette.eye} h={2} />
    <P x={10} y={6} c={palette.eye} h={2} />
    <P x={5} y={6} c={palette.bone} />
    <P x={10} y={6} c={palette.bone} />
    {/* nose + whisker hint */}
    <P x={7} y={8} c={palette.pink} w={2} />
    <P x={2} y={7} c={palette.purpleDeep} />
    <P x={13} y={7} c={palette.purpleDeep} />
    {/* tail */}
    <P x={13} y={9} c={coat} h={3} />
    <P x={14} y={8} c={coat} h={2} />
    {/* feet */}
    <P x={4} y={12} c={palette.purpleDeep} w={2} />
    <P x={9} y={12} c={palette.purpleDeep} w={2} />
  </svg>
)

/* ---------------------------- CREEPER PLANT ---------------------------- */
export const CreeperPlant = (props) => (
  <svg viewBox="0 0 16 16" shapeRendering="crispEdges" {...props}>
    {/* leafy creeper body */}
    <P x={6} y={0} c={palette.green} w={4} />
    <P x={5} y={1} c={palette.green} w={6} />
    <P x={4} y={2} c={palette.green} w={8} />
    <P x={3} y={3} c={palette.green} w={10} h={6} />
    <P x={4} y={9} c={palette.green} w={8} />
    {/* darker speckles */}
    <P x={4} y={2} c={palette.greenDeep} />
    <P x={11} y={3} c={palette.greenDeep} />
    <P x={3} y={6} c={palette.greenDeep} />
    <P x={12} y={7} c={palette.greenDeep} />
    {/* creeper face */}
    <P x={5} y={3} c={palette.eye} w={2} h={2} />
    <P x={9} y={3} c={palette.eye} w={2} h={2} />
    <P x={7} y={5} c={palette.eye} w={2} h={2} />
    <P x={6} y={6} c={palette.eye} />
    <P x={9} y={6} c={palette.eye} />
    <P x={6} y={7} c={palette.eye} />
    <P x={9} y={7} c={palette.eye} />
    {/* pot */}
    <P x={4} y={10} c={palette.pot} w={8} />
    <P x={5} y={11} c={palette.potDeep} w={6} h={4} />
    <P x={6} y={11} c={palette.pot} />
  </svg>
)

/* ----------------------------- HANGING VINE ----------------------------- */
export const Vine = ({ len = 5, ...props }) => {
  const leaves = []
  for (let i = 0; i < len; i++) {
    const y = i * 2
    leaves.push(<P key={`s${i}`} x={3} y={y} c={palette.greenDeep} h={2} />)
    if (i % 2 === 0) leaves.push(<P key={`l${i}`} x={1} y={y} c={palette.green} w={2} />)
    else leaves.push(<P key={`r${i}`} x={5} y={y} c={palette.green} w={2} />)
  }
  return (
    <svg viewBox={`0 0 8 ${len * 2 + 2}`} shapeRendering="crispEdges" {...props}>
      {leaves}
      {/* a little creeper bud at the tip */}
      <P x={2} y={len * 2} c={palette.green} w={4} h={2} />
      <P x={3} y={len * 2} c={palette.eye} />
      <P x={4} y={len * 2 + 1} c={palette.eye} />
    </svg>
  )
}

/* -------------------------------- SKULL -------------------------------- */
export const Skull = (props) => (
  <svg viewBox="0 0 16 16" shapeRendering="crispEdges" {...props}>
    <P x={4} y={2} c={palette.pink} w={8} h={6} />
    <P x={3} y={3} c={palette.pink} h={4} />
    <P x={12} y={3} c={palette.pink} h={4} />
    <P x={5} y={4} c={palette.eye} w={2} h={2} />
    <P x={9} y={4} c={palette.eye} w={2} h={2} />
    <P x={7} y={6} c={palette.pinkDeep} w={2} />
    <P x={5} y={8} c={palette.pink} w={2} />
    <P x={7} y={8} c={palette.eye} />
    <P x={9} y={8} c={palette.pink} w={2} />
    <P x={6} y={9} c={palette.pink} />
    <P x={9} y={9} c={palette.pink} />
  </svg>
)

/* -------------------------------- HEART -------------------------------- */
export const Heart = (props) => (
  <svg viewBox="0 0 16 16" shapeRendering="crispEdges" {...props}>
    <P x={3} y={3} c={palette.pink} w={3} h={2} />
    <P x={10} y={3} c={palette.pink} w={3} h={2} />
    <P x={2} y={5} c={palette.pink} w={12} h={3} />
    <P x={3} y={8} c={palette.pink} w={10} />
    <P x={4} y={9} c={palette.pink} w={8} />
    <P x={5} y={10} c={palette.pink} w={6} />
    <P x={6} y={11} c={palette.pink} w={4} />
    <P x={7} y={12} c={palette.pink} w={2} />
    <P x={4} y={5} c={palette.white} w={2} />
  </svg>
)

/* --------------------- small inline row glyph icons --------------------- */
const Grad = () => (
  <>
    <P x={2} y={5} c={palette.purple} w={12} h={2} />
    <P x={5} y={3} c={palette.bone} w={6} h={2} />
    <P x={7} y={2} c={palette.bone} w={2} />
    <P x={6} y={7} c={palette.purpleDeep} w={4} h={3} />
    <P x={13} y={6} c={palette.pink} h={4} />
    <P x={12} y={10} c={palette.pink} w={2} />
  </>
)
const Apps = () => (
  <>
    <P x={3} y={3} c={palette.purple} w={4} h={4} />
    <P x={9} y={3} c={palette.pink} w={4} h={4} />
    <P x={3} y={9} c={palette.pink} w={4} h={4} />
    <P x={9} y={9} c={palette.purple} w={4} h={4} />
  </>
)
const Flow = () => (
  <>
    <P x={3} y={4} c={palette.purple} w={3} h={3} />
    <P x={10} y={9} c={palette.pink} w={3} h={3} />
    <P x={6} y={5} c={palette.bone} w={5} />
    <P x={9} y={4} c={palette.bone} h={6} />
    <P x={8} y={3} c={palette.bone} w={3} />
    <P x={5} y={10} c={palette.bone} w={5} />
  </>
)
const Panel = () => (
  <>
    <P x={2} y={3} c={palette.purpleDeep} w={12} h={10} />
    <P x={3} y={4} c={palette.crypt || '#15101b'} w={10} h={2} />
    <P x={3} y={4} c={palette.pink} w={2} h={1} />
    <P x={3} y={7} c={palette.purple} w={4} h={5} />
    <P x={8} y={7} c={palette.bone} w={5} />
    <P x={8} y={9} c={palette.bone} w={5} />
    <P x={8} y={11} c={palette.bone} w={3} />
  </>
)
const Team = () => (
  <>
    <P x={3} y={3} c={palette.pink} w={3} h={3} />
    <P x={10} y={3} c={palette.purple} w={3} h={3} />
    <P x={2} y={7} c={palette.pink} w={5} h={5} />
    <P x={9} y={7} c={palette.purple} w={5} h={5} />
  </>
)

export const Icon = ({ name, ...props }) => {
  const glyph = { grad: <Grad />, apps: <Apps />, flow: <Flow />, panel: <Panel />, team: <Team /> }[name] || <Apps />
  return (
    <svg viewBox="0 0 16 16" shapeRendering="crispEdges" {...props}>
      {glyph}
    </svg>
  )
}

export const sprites = { Kuromi, Cat, CreeperPlant, Vine, Skull, Heart }
