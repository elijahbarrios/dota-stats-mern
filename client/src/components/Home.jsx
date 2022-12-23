import Image from 'react-bootstrap/Image'

const Home = () => {
   return (
      <>
         <Image fluid src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/backgrounds/dpc_header_event_summer22.jpg"/>
         <div className="home mt-3 mx-5">
            <h1 className="">DPC Stat Tracker</h1>
            <p className="text-gray">Select a region above to start</p>
            <Image src="https://user-images.githubusercontent.com/20866892/96916369-26a3ca00-14b0-11eb-9fa5-976767f33d2f.png" height="48"/>
         </div>
      </>
   )
 }
 
 export default Home