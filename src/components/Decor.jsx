import { Kuromi, Cat, CreeperPlant, Vine, Skull, Heart } from '../sprites/Sprites.jsx'

/* Ambient pixel "crypt-garden" framing the page:
   hanging creeper vines from the top, and floating Kuromi / cats /
   skulls / plants tucked into the margins. Purely decorative. */
export default function Decor() {
  return (
    <div className="decor" aria-hidden="true">
      {/* hanging vines along the top */}
      <span className="vine" style={{ left: '6%', width: 22 }}><Vine len={6} width="100%" height="100%" /></span>
      <span className="vine" style={{ left: '22%', width: 18, animationDelay: '-1.5s' }}><Vine len={4} width="100%" height="100%" /></span>
      <span className="vine" style={{ left: '74%', width: 20, animationDelay: '-3s' }}><Vine len={5} width="100%" height="100%" /></span>
      <span className="vine" style={{ left: '92%', width: 18, animationDelay: '-2.2s' }}><Vine len={7} width="100%" height="100%" /></span>

      {/* floating margin sprites (hidden on narrow screens via .is-optional) */}
      <span className="decor__item is-optional float" style={{ top: '15%', left: '3%', width: 58 }}>
        <Cat width="100%" height="100%" />
      </span>
      <span className="decor__item is-optional float float--slow float--alt" style={{ top: '34%', right: '3%', width: 64 }}>
        <Kuromi width="100%" height="100%" />
      </span>
      <span className="decor__item is-optional float" style={{ top: '52%', left: '2%', width: 50, animationDelay: '-1s' }}>
        <CreeperPlant width="100%" height="100%" />
      </span>
      <span className="decor__item is-optional float float--slow" style={{ top: '68%', right: '4%', width: 46 }}>
        <Skull width="100%" height="100%" />
      </span>
      <span className="decor__item is-optional float float--alt" style={{ top: '83%', left: '4%', width: 52 }}>
        <Cat coat="#e879c5" width="100%" height="100%" />
      </span>
      <span className="decor__item is-optional float" style={{ top: '90%', right: '6%', width: 40 }}>
        <Heart width="100%" height="100%" />
      </span>
    </div>
  )
}
