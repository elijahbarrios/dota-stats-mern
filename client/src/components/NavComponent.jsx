import Image from 'react-bootstrap/Image'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from "react-bootstrap/Container"
import NorthAmerica from '../svgs/North_America_Icon.svg'
import WesternEurope from '../svgs/weu.svg'
import EasternEurope from '../svgs/CIS_Icon.svg'
import SouthAmerica from '../svgs/South_America_Icon.svg'
import China from '../svgs/China_Icon.svg'
import SoutheastAsia from '../svgs/Southeast_Asia_Icon.svg'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button'

const NavComponent = () => {
  return (
   <Container fluid className="mt-3">
      <Row>
         <Col></Col>
         <Col>
            <Row className="align-items-center">
               <Col>
                  <Button variant="light" as={Link} to="div1/na">
                     <Image fluid src={NorthAmerica} />
                     <p>North America</p>
                  </Button>
               </Col>
               <Col>
                  <Button variant="light" as={Link} to="div1/weu">
                     <Image fluid src={WesternEurope} />
                     <p>Western Europe</p>
                  </Button>
               </Col>
               <Col>
                  <Button variant="light" as={Link} to="div1/eeu">
                     <Image height="114.967" width="120" src={EasternEurope} />
                     <p>Eastern Europe</p>
                  </Button>
               </Col>
            </Row>
            <Row className="align-items-center">
               <Col>
                  <Button variant="light" as={Link} to="div1/sa">
                     <Image fluid src={SouthAmerica} />
                     <p>South America</p>
                  </Button>
               </Col>
               <Col>
                  <Button variant="light" as={Link} to="div1/cn">
                     <Image fluid src={China} />
                     <p>China</p>
                  </Button>
               </Col>
               <Col>
                  <Button variant="light" as={Link} to="div1/sea">
                     <Image fluid src={SoutheastAsia} />
                     <p>Southeast Asia</p>
                  </Button>
               </Col>
            </Row>
         </Col>
         <Col></Col>
      </Row>
   </Container>
  )
}

export default NavComponent
