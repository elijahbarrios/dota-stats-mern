import { useEffect, useState } from 'react'

import { Card } from 'react-bootstrap'

const NewHome = () => {

   const [list, setList] = useState([])

   useEffect(() => {
      setList([])
      fetchLeagueList()
   }, []) 

   const fetchLeagueList = async () => {
      const data = await fetch(`/api/leagueList`)
      const dataJSON = await data.json()
      console.log(dataJSON.data.leagues)
      setList(dataJSON.data.leagues)
   }

   return (
      <>
         <div>
            <h1>Select a league below to begin viewing stats.</h1>
            {list.map((league, key) => {
               let startDate = new Date(league.startDateTime * 1000).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })
               return (
                  <Card style={{ width: '15rem' }}>
                     <Card.Img variant="top" src={"https://steamcdn-a.akamaihd.net/apps/dota2/images/leagues/"+`{league.id}`+"/images/image_9.png"} />
                     <Card.Body>
                        <Card.Title>{league.displayName}</Card.Title>
                        <Card.Text>
                           <p>{league.region}</p>
                           <p>Start Date: {startDate}</p>
                        </Card.Text>
                     </Card.Body>
                  </Card>
               )
            })}
         </div>
      </>
   )
}

export default NewHome