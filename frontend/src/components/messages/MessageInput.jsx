/* eslint-disable no-mixed-spaces-and-tabs */
import { useState } from "react";
import { BsSend } from "react-icons/bs";
import useSendMessage from "../../hooks/useSendMessage";

const MessageInput = () => {
	const [message, setMessage] = useState("");
	const {loading, sendMessage} = useSendMessage()

	const handleSubmit = async (e) =>{
         e.preventDefault();
		 if(!message) return;
		 await sendMessage (message);
		 setMessage("");
	};
 
	return (
		<form className='px-4 my-3' onSubmit={handleSubmit}  >
			<div className='w-full relative'>
				<input
				value={message}
				onChange={(e)=>setMessage(e.target.value)}
					type='text'
					className='border text-sm rounded-lg block w-full p-2.5  bg-gray-700 border-gray-600 text-white'
					placeholder='Send a message'
				/>
				<button type='submit' className='absolute bottom-[12px] right-4 text-white text-xl'>
					{loading? <div className="loading loading-spinner"></div> : <BsSend />}
				</button>
			</div>
		</form>
	);
};
export default MessageInput;





