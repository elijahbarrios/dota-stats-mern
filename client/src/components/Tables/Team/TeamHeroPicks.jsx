import Image from "react-bootstrap/Image"
import HeroIcons from "dotaconstants/build/heroes.json"

const TeamHeroPicks = ({picks}) => {
  return (
    <div>
       {picks.slice(0,5).map((pick, key) => {
          return (
            <Image key={key} src={"https://api.opendota.com"+HeroIcons[pick[0]].icon} />
          )
       })}
    </div>
  )
}

export default TeamHeroPicks