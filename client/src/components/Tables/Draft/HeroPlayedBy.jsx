import Badge from "react-bootstrap/Badge"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

import PlayerInfo from "../Player/PlayerInfo"
import Button from "react-bootstrap/Button"

const HeroPlayedBy = ({playedBy}) => {

    let players = playedBy.reduce((acc, obj) => {
        const key = obj["playerID"]
        const curGroup = acc[key] ?? []
        return {...acc, [key]: [...curGroup, obj]}
      }, {})

    return (
        <div>
            {Object.entries(players).map((player, key) => {
                return (
                    <div>
                        <Button variant="outline-primary" size="sm" disabled>
                            <PlayerInfo
                                player_id={player[0]}
                                name={player[1][0].playerName}
                                teamTag={player[1][0].teamTag}
                                teamName={player[1][0].teamName}
                                teamID={player[1][0].teamID}
                                placement={"left"}
                                key={key}
                            />
                            <Badge bg="secondary">{player[1].length}</Badge>
                        </Button>
                    </div>
                )
            })
        }
    </div>
  )
}

export default HeroPlayedBy