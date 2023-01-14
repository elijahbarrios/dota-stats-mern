import Image from "react-bootstrap/Image"
import { Stack } from "react-bootstrap"
import HeroIcons from "dotaconstants/build/heroes.json"
import "../styles.css"

const HeroName = ({heroId}) => {
  return (
    <div>
      <Stack direction="horizontal" gap={2} >
        <Image className="icon" src={"https://api.opendota.com"+HeroIcons[heroId].icon}/>
        <p className="my-auto">{HeroIcons[heroId].localized_name}</p>
      </Stack>
    </div>
  )
}

export default HeroName