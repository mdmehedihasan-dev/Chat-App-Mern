/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
import { useAuthContext } from "../../context/AuthContext";
import useConversation from "../../zustand/useConversation";

// eslint-disable-next-line react/prop-types
const Message = ({ message }) => {
  const { authUser } = useAuthContext();
  const { selectedConversation } = useConversation;
  const fromMe = message.senderId === authUser._id;
  const chatClassName = fromMe ? "chat-end" : "chat-start";
  const profilePic = fromMe
    ? authUser.profilePic
    : selectedConversation?.profilePic;
  const bubbleBgColor = fromMe ? "bg-blue-500" : "";

  return (
    <div className={`chat ${chatClassName}`}>
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img alt='Tailwind CSS chat bubble component' src={profilePic} />
        </div>
      </div>

      <div className={`chat-bubble text-white pb-2 ${bubbleBgColor} `}>
        {message.message}
      </div>
      <div className="flex items-center gap-1 text-xs opacity-50 chat-footer">
        {message.createdAt}
      </div>
    </div>
  );
};

export default Message;
