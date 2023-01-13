import PlayerPosition from "./PlayerPosition"
import PlayerHeroes from "./PlayerHeroes"
import PlayerInfo from "./PlayerInfo"
import PlayerMatches from "./PlayerMatches"

import DataTable from "react-data-table-component"

const PlayerTable = ({selectedStatGroup, playerData }) => {
  
  const playerColumns = [
    {
      name: 'Player',
      selector: player => player.name,
      sortable: true,
      grow: 2,
      cell: player => <PlayerInfo
      player_id={player.id}
      name={player.name}
      teamTag={player.team[1]}
      teamName={player.team[0]}
      teamID={player.team[2]}
      placement={"right"}
      />,
    },
    {
      name: 'Position',
      selector: player => player.role,
      sortable: true,
      compact: true,
      cell: player => <PlayerPosition role={player.role[0][0]} />,
    },
    {
      name: 'Heroes Played',
      selector: player => player.heroes.length,
      cell: player => <PlayerHeroes heroes={player.heroes} />,
      sortable: true,
      compact: true,
      grow: 2
    },
    {
      name: 'Kill Average',
      selector: player => player.kills,
      compact: true,
      sortable: true,
    },
    {
      name: 'Death Average',
      selector: player => player.deaths,
      compact: true,
      sortable: true
    },
    {
      name: 'Last Hit Average',
      selector: player => player.lastHits,
      sortable: true
    },
    {
      name: 'Deny Average',
      selector: player => player.denies,
      compact: true,
      sortable: true
    },
    {
      name: 'GPM Average',
      selector: player => player.gpm,
      sortable: true
    },
    {
      name: 'XPM Average',
      selector: player => player.xpm,
      sortable: true
    },
    {
      name: 'Hero Damage Average',
      selector: player => player.heroDamage,
      sortable: true
    },
    {
      name: 'Tower Damage Average',
      selector: player => player.towerDamage,
      sortable: true
    },
    {
      name: "Couriers Killed",
      selector: player => player.couriers,
      sortable: true
    },
    {
      name: 'Matches Played',
      selector: player => player.matches,
      cell: player => <PlayerMatches matches={player.matches} />,
      compact: true
    }
  ]
  
  return (
    <>
    {selectedStatGroup === 'Player' && 
    <DataTable
    noDataComponent=""
    highlightOnHover
    columns={playerColumns}
    data={playerData}
    defaultSortFieldId={1}
    />
  }
  </>
  )
}

export default PlayerTable