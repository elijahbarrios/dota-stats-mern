import { OverlayTrigger } from "react-bootstrap"
import Card from "react-bootstrap/Card"
import Image from "react-bootstrap/Image"

const PlayerInfo = ({ player_id, name, teamTag, teamName, teamID, placement}) => (
   <div>
     {teamTag}.
     <OverlayTrigger placement={placement} overlay={
        <Card border="dark" style={{ width: '18rem' }}>
           <Card.Img variant="top" src={`https://cdn.stratz.com/images/dota2/players/${player_id}.png`} />
           <Card.Body>
              <Card.Title><p>{name}</p></Card.Title>
              <Card.Subtitle>
                 <div>
                  <Image width="64" src={`https://cdn.stratz.com/images/dota2/teams/${teamID}.png`} />
                  {teamName}
                 </div>
               </Card.Subtitle>
              <Card.Text>

              </Card.Text>
           </Card.Body>
        </Card>
      }
     >
         
      <a href={name ? `https://www.liquipedia.net/dota2/${name}` : `https://www.opendota.com/players/${player_id}`} target="_blank" rel="noreferrer">{name ? name : player_id}</a>
     </OverlayTrigger>
   </div>
)

export default PlayerInfo