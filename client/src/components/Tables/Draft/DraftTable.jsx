import DataTable from "react-data-table-component"
import { Spinner } from "react-bootstrap"

import HeroName from "./HeroName"
import HeroWinrate from "./HeroWinrate"
import HeroPosition from "./HeroPosition"
import HeroPlayedBy from "./HeroPlayedBy"

const DraftTable = ({loadingDraft, selectedStatGroup, draftData}) => {

   const winrateSort = (rowA, rowB) => {
      const a = rowA.wins / rowA.pickCount
      const b = rowB.wins / rowB.pickCount
      if(!isFinite(a) && !isFinite(b) ) {
         return 0;
      }
      if(!isFinite(a) ) {
         return 1;
      }
      if(!isFinite(b) ) {
         return -1;
      }
     return a-b;
   }

   const draftColumns = [
      {
         name: "Hero",
         selector: hero => hero.heroId,
         cell: hero => <HeroName heroId={hero.heroId} />,
         compact: true
      },
      {
         id: "winrate",
         name: "Winrate",
         selector: hero => hero.wins / hero.pickCount,
         sortable: true,
         sortFunction: winrateSort,
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
         cell: hero => <HeroPlayedBy playedBy={hero.playedBy} />,
         grow: 2
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