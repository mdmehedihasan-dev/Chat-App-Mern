import { useState } from "react";
import { IoSearch } from "react-icons/io5";
import useConversation from "../../zustand/useConversation";
import useGetConversation from "../../hooks/useGetConversation";
import toast from "react-hot-toast";

const SearchInput = () => {

    const [search, setSearch] = useState("")
    const {setSelectedConversation} = useConversation();
    const {conversations}= useGetConversation()

    const handleSubmit = (e)=>{
        e.preventDefult();
        if(!search.length <3){

            return toast.error("search term must be at least 3 characters long")
        }
        const conversation = conversations.find((c) => c.fullName.toLowerCase().includes(search.toLowerCase()));
        if(conversation){
            setSelectedConversation(conversation)
            setSearch("")
        }else toast.error("No such user found!")
    };





  return (
    <form onSubmit={handleSubmit} className="flex items-center gap-2">
        <input type="text" placeholder="Search" className="rounded-full input input-bordered" />

        <button type="submit" className="text-white btn btn-circle bg-sky-500">
            <IoSearch className="text-3xl"/>
        </button>
    </form>
    )
}

export default SearchInput