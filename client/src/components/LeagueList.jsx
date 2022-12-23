const LeagueList = ({leaguelist}) => {

   return (
      <div>
         {leaguelist && leaguelist.map((league, key) => {
               return (
                  <h1>{league.displayName}</h1>
               )
            })}
      </div>   
   )
}

export default LeagueList