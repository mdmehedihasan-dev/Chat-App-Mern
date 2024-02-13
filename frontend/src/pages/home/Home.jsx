import MessageContainer from "../../components/messages/MessageContainer"
import Sidebar from "../../components/sidebar/SideBar"

const Home = () => {
  return (
    <div className="flex flex-col sm:h-[350px] md:flex-row  md:h-[550px] rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
      <Sidebar/>
      <MessageContainer/>
    </div>
  )
}

export default Home