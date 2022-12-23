import Image from "react-bootstrap/Image"
import Tooltip from "react-bootstrap/Tooltip"
import OverlayTrigger from "react-bootstrap/OverlayTrigger"

const PlayerPosition = ({ role }) => {

   const getPositionIcon = () => {
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


   return (
   <div>
      <OverlayTrigger placement={'right'} overlay={<Tooltip>{role}</Tooltip>}>
         <div>
            <Image style={{ maxWidth: '60%' }} rounded src={getPositionIcon()} />
         </div>
      </OverlayTrigger>
   </div>
  )
}

export default PlayerPosition