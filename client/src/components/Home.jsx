import Image from 'react-bootstrap/Image'

const Home = () => {
   return (
      <div class="pb-5">
         <Image fluid src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/dpc/headers/dpc_header_event_winter23.jpg"/>
         <div className="home mt-3 mx-5">
            <h1 className="">DPC Stat Tracker</h1>
            <p className="text-gray">Select a region above to start</p>
         </div>
      </div>
   )
 }
 
 export default Home
