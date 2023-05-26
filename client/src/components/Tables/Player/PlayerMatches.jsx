import { Container } from "react-bootstrap"

const PlayerMatches = ({matches}) => {
  return (
    <div>
      <Container>
         {matches.map((match,key) => {
            return (
               <a key={key} href={`https://www.opendota.com/matches/${match}`} target="_blank" rel="noopener noreferrer">{match}</a>
            )
         })}
      </Container>
   </div>
  )
}

export default PlayerMatches