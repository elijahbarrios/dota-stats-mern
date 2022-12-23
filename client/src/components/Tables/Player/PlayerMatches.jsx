import Dropdown from "react-bootstrap/Dropdown"

const PlayerMatches = ({matches}) => {
  return (
    <div>
       <Dropdown>
          <Dropdown.Toggle size="sm" variant="outline-primary" id="dropdown-basic">
            Matches
          </Dropdown.Toggle>

         <Dropdown.Menu>
            {matches.map((match,key) => {
               return (
                  <Dropdown.Item key={key}>
                     <a href={`https://www.stratz.com/matches/${match}`} target="_blank" rel="noopener noreferrer">{match}</a>
                  </Dropdown.Item>
               )
            })}
         </Dropdown.Menu>

       </Dropdown>
    </div>
  )
}

export default PlayerMatches