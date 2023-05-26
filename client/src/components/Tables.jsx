import TeamTable from './Tables/Team/TeamTable'
import PlayerTable from './Tables/Player/PlayerTable'
import DraftTable from './Tables/Draft/DraftTable'

const Tables = ({selectedStatGroup, teamData, playerData, draftData}) => {

  return (
    <div className="mx-5 mt-4 mb-4">
       <TeamTable selectedStatGroup={selectedStatGroup} teamData={teamData} />
       <PlayerTable selectedStatGroup={selectedStatGroup} playerData={playerData} />
       <DraftTable selectedStatGroup={selectedStatGroup} draftData={draftData} />
    </div>
  )
}

export default Tables