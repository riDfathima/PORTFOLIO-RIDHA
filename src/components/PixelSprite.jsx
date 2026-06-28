import { sprites } from '../sprites/Sprites.jsx'

/* Renders a named sprite at a given pixel size, with optional float motion. */
export default function PixelSprite({ name, size = 48, float = false, className = '', ...props }) {
  const Sprite = sprites[name]
  if (!Sprite) return null
  const cls = ['sprite', float ? 'float' : '', className].filter(Boolean).join(' ')
  return (
    <span className={cls} style={{ width: size, height: size, display: 'inline-block' }} {...props}>
      <Sprite width="100%" height="100%" />
    </span>
  )
}
