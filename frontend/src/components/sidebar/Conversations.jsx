import Conversation from "./Conversation"

const Conversations = () => {
  return (
    <div className="py-2 flex sm:flex-row md:flex-col overflow-auto ">
        <Conversation/>
        <Conversation/>
        <Conversation/>
        <Conversation/>

        <Conversation/> 
        <Conversation/>

    </div>
  )
}

export default Conversations