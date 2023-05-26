import { Container } from "react-bootstrap"
import { ListGroup } from "react-bootstrap"
import { Col } from "react-bootstrap"
import { Row } from "react-bootstrap"
import { Image } from "react-bootstrap"
import HeroIcons from "dotaconstants/build/heroes.json"
import "../../styles.css"

const PlayerMatches = ({data}) => {
  return (
    <div>
      <Container fluid>
         <Row>
            <Col>
               <h4>Matches</h4>
               <ListGroup>
                  {data.matches.map((match,key) => {
                     return (
                        <ListGroup.Item key={key} action href={`https://www.opendota.com/matches/${match.match_id}`}>
                           <p>
                              <Image className="mx-1 my-1 icon" key={key} src={"https://api.opendota.com"+HeroIcons[match.hero_played].icon} />
                              {match.win ? "W" : "L"} vs {match.team_played[0]}
                           </p>
                        </ListGroup.Item>
                     )
                  })}
               </ListGroup>
            </Col>
            <Col></Col>
            <Col></Col>
         </Row>
      </Container>
   </div>
  )
}

export default PlayerMatches