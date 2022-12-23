import Tooltip from "react-bootstrap/Tooltip"
import OverlayTrigger from "react-bootstrap/OverlayTrigger"
import Image from "react-bootstrap/Image"
import { Stack } from "react-bootstrap"

const HeroPosition = ({roles}) => {

   const getPositionIcon = (role) => {
      if(role === "Carry") {
         return (
            "https://cdn.dota2.com/apps/dota2/images/items/greater_crit_lg.png?t=1593393829403"
         )
      }
      if(role === "Mid") {
         return (
            "https://cdn.dota2.com/apps/dota2/images/items/travel_boots_lg.png?t=1593393829403"
         )
      }
      if(role === "Offlane") {
         return (
            "https://cdn.dota2.com/apps/dota2/images/items/black_king_bar_lg.png?t=1593393829403"
         )
      }
      if(role === "Soft Support") {
         return (
            "https://api.opendota.com/apps/dota2/images/items/blink_lg.png?t=1593393829403"
         )
      }
      if(role === "Hard Support") {
         return (
            "https://cdn.dota2.com/apps/dota2/images/items/tango_lg.png?t=1593393829403"
         )
      }
   }

   const heroRole = (Object.entries(
      roles.reduce((allPositions, position) => {
         return {...allPositions, [position] : (allPositions[position] || 0) + 1}
         }, {})
      ).sort((a,b) => b[1] - a[1]))

   return (
      <div>
         {roles.length > 0 && heroRole.map((position, key) => {
            return (
               <div className="my-1" key={key}>
                  <OverlayTrigger placement={'right'} overlay={<Tooltip>{position[0]}</Tooltip>}>
                     <Stack direction="horizontal" gap={2}>
                        <Image style={{width: "50%"}} rounded src={getPositionIcon(position[0])} />
                        <p>{position[1]}x</p>
                     </Stack>
                  </OverlayTrigger>
               </div>
            )
         })}
      </div>
   )
}

export default HeroPosition