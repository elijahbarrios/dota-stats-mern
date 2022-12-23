import Image from 'react-bootstrap/Image'
import HeroIcons from "dotaconstants/build/heroes.json"

const PlayerHeroes = ({heroes}) => {
  return (
    <div>
       {heroes.map((hero, key) => {
          return (
             <Image key={key} src={"https://api.opendota.com"+HeroIcons[hero].icon} />
          )
       })}
    </div>
  )
}

export default PlayerHeroes