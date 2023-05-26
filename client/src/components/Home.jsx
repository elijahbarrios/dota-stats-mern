import Image from 'react-bootstrap/Image'
import NavComponent from './NavComponent'


const Home = () => {
   return (
      <div className="home">
         <Image fluid src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/dpc/headers/dpc_header_event_summer23.jpg"/>
         <NavComponent />
      </div>
   )
 }
 
 export default Home
