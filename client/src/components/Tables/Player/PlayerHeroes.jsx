import Image from 'react-bootstrap/Image'
import HeroIcons from "dotaconstants/build/heroes.json"

const PlayerHeroes = ({heroes}) => {
  return (
    <div>
       {heroes.map((hero, key) => {
          return (
             <Image key={key} src={"https://api.opendota.com"+HeroIcons[hero[0]].icon} />{hero[1]}
          )
       })}
    </div>
  )
}

export default PlayerHeroes