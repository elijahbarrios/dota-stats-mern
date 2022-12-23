import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'

const TeamInfo = ({teamId, teamName}) => {
  return (
    <div>
       <Container>
        <Row>
          <Col md="auto">
            <Image width="64" src={`https://cdn.stratz.com/images/dota2/teams/${teamId}.png`} />
          </Col>
          <Col md="auto">
            {teamName}
          </Col>
        </Row>
       </Container>
    </div>
  )
}

export default TeamInfo