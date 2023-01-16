import TeamInfo from "./TeamInfo"
import TeamHeroPicks from "./TeamHeroPicks"

import DataTable from "react-data-table-component"

const TeamTable = ({selectedStatGroup, teamData}) => {

   const teamColumns = [
      {
         name: "Team",
         selector: team => team.name,
         sortable: true,
         cell: team => <TeamInfo teamId={team.id} teamName={team.name} />,
         grow: 2
      },
      {
         name: "Games Played",
         selector: team => team.gamesPlayed,
         sortable: true,
         center: true,
         compact: true,
      },
      {
         name: "Winrate",
         selector: team => team.winrate,
         sortable: true,
         center: true,
         cell: team => team.winrate + "%"
      },
      {
         name: "Average Game Duration",
         selector: team => team.matchDuration,
         center: true,
         sortable: true,
      },
      {
         name: "Average Kills Per Game",
         selector: team => team.kills,
         center: true,
         sortable: true
      },
      {  
         name: "# Unique Picks",
         selector: team => team.numPicks,
         center: true,
         sortable: true
      },
      {  
         name: "Most Picked Heroes",
         selector: team => team.heroesPicked,
         cell: team => <TeamHeroPicks picks={team.heroesPicked} />,
         grow: 2
      },
   ]

   return (
      <>
         {selectedStatGroup === 'Team' &&
            <DataTable
               noDataComponent=""
               highlightOnHover
               columns={teamColumns}
               data={teamData}
               defaultSortFieldId={1}
            />
         }
      </>
   )
}

export default TeamTable