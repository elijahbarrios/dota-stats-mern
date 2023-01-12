import Image from 'react-bootstrap/Image'
import HeroIcons from "dotaconstants/build/heroes.json"

const PlayerHeroes = ({heroes}) => {
  return (
    <div>
       {heroes.map((hero, key) => {
          return (
            <div>
             <Image key={key} src={"https://api.opendota.com"+HeroIcons[hero[0]].icon} />
             <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-info">{hero[1]}</span>
            </div>
          )
       })}
    </div>
  )
}

export default PlayerHeroes
