import Image from 'react-bootstrap/Image'

const Home = () => {
   return (
      <>
         <Image fluid src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/backgrounds/dpc_header_event_summer22.jpg"/>
         <div className="home mt-3 mx-5">
            <h1 className="">DPC Stat Tracker</h1>
            <p className="text-gray">Select a region above to start</p>
         </div>
      </>
   )
 }
 
 export default Home