import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Stack from "react-bootstrap/Stack"

const About = () => {
  return (
    <Container>
        <Row>
            <Col>
                <Stack>
                    <h5>Contact</h5>
                    <div>
                        <ion-icon name="logo-discord" size="large" style={{ color: '#5865F2'}}></ion-icon>
                        <a href="https://discordapp.com/users/77522609985564672" target="_blank" rel="noreferrer" style={{ textDecoration: 'none' }}>mtk357#0491</a>
                    </div>
                </Stack>
            </Col>
            <Col></Col>
            <Col>
                <Stack>
                    <h5>Built using</h5>
                    <a href="https://www.opendota.com/" target="_blank" rel="noreferrer" style={{ textDecoration: 'none' }}>OpenDota API</a>
                    <a href="https://reactjs.org/" target="_blank" rel="noreferrer" style={{ textDecoration: 'none' }}>React</a>
                    <a href="https://react-bootstrap.github.io/" target="_blank" rel="noreferrer" style={{ textDecoration: 'none' }}>React-Bootstrap</a>
                    <a href="https://nodejs.org/en/" target="_blank" rel="noreferrer" style={{ textDecoration: 'none' }}>Node.js</a>
                    <a href="https://expressjs.com/" target="_blank" rel="noreferrer" style={{ textDecoration: 'none' }}>Express</a>
                    <a href="https://www.mongodb.com/" target="_blank" rel="noreferrer" style={{ textDecoration: 'none' }}>MongoDB</a>
                </Stack>
            </Col>
        </Row>
    </Container>
  )
}

export default About