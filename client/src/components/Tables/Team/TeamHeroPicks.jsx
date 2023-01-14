import Image from "react-bootstrap/Image"
import HeroIcons from "dotaconstants/build/heroes.json"
import "../styles.css"

const TeamHeroPicks = ({picks}) => {
  return (
    <div>
       {picks.slice(0,5).map((pick, key) => {
          return (
            <div class="d-inline mx-2">
              <Image class="mx-1 icon" key={key} src={"https://api.opendota.com"+HeroIcons[pick[0]].icon} />
              <span class="mx-1 position-absolute translate-middle badge rounded-pill bg-secondary">{pick[1]}</span>
            </div>
          )
       })}
    </div>
  )
}

export default TeamHeroPicks