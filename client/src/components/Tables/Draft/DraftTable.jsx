import DataTable from "react-data-table-component"
import { Spinner } from "react-bootstrap"

import HeroName from "./HeroName"
import HeroWinrate from "./HeroWinrate"
import HeroPosition from "./HeroPosition"
import HeroPlayedBy from "./HeroPlayedBy"

const DraftTable = ({loadingDraft, selectedStatGroup, draftData}) => {

   const draftColumns = [
      {
         name: "Hero",
         selector: hero => hero.heroId,
         cell: hero => <HeroName heroId={hero.heroId} />
      },
      {
         name: "Winrate",
         selector: hero => hero.wins,
         sortable: true,
         cell: hero => <HeroWinrate wins={hero.wins} numPicks={hero.pickCount} />,
         compact: true
      },
      {
         name: "Pick/Ban Count",
         selector: hero => hero.pickCount + hero.banCount,
         sortable: true,
         compact: true
      },
      {
         name: "Pick Count",
         selector: hero => hero.pickCount,
         sortable: true,
         compact: true
      },
      {
         name: "Ban Count",
         selector: hero => hero.banCount,
         sortable: true,
         compact: true
      },
      {
         name: "Contest Rate",
         selector: hero => hero.contestRate,
         sortable: true,
         compact: true,
         cell: hero => hero.contestRate + "%"
      },
      {
         name: "Positions played",
         selector: hero => hero.role,
         cell: hero => <HeroPosition roles={hero.role} />,
         compact: true
      },
      {
         name: "Played by",
         selector: hero => hero.playedBy,
         cell: hero => <HeroPlayedBy playedBy={hero.playedBy} />
      }
   ]

   if(!draftData) {
      return null
   }

   return (
      <>
         {selectedStatGroup === 'Draft' && 
            <DataTable
               noDataComponent=""
               highlightOnHover
               columns={draftColumns}
               data={draftData}
               defaultSortFieldId={3}
               defaultSortAsc={false}
               progressPending={loadingDraft}
               progressComponent={<Spinner animation="border" variant="primary" className="mt-5"/>}
            />
         }
      </>
   )
}

export default DraftTable