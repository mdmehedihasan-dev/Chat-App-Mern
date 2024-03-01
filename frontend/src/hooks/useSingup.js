import { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext";

const useSignup = () =>{
    const [loading, setLoading] = useState(false);

    const {setAuthUser} = useAuthContext()

    const singup = async({fullName, username,password,confirmPassword,gender})=>{
        const success =  handleInputErrors({fullName,username,password,confirmPassword,gender})
        if(!success) return;

        setLoading(true)
        try {
            // eslint-disable-next-line no-unused-vars
            const res = await fetch('/api/auth/singup',{
                method:'POST',
                headers:{'Content-Type':'application/json'},
                body: JSON.stringify({fullName,username,password,confirmPassword,gender})
            })

             const data = await res.json();
            //  console.log(data)
            if(data.error){
                throw new Error(data.error)
            }
            // localStorage 
            localStorage.setItem("chat-user",JSON.stringify(data))
            // context  
            setAuthUser(data)





            
        } catch (error) {
            toast.error(error.message)
        } finally{
            setLoading(false)
        }



    };

    return { loading,singup}
}

export default useSignup;

function handleInputErrors({fullName,username,password,confirmPassword,gender}){
    if(!fullName || !username || !password || !confirmPassword || !gender){
          toast.error('Please fill in all fields')
          return false
    }

    if(password !== confirmPassword){
        toast.error('Password do not match')
        return false
    }

    if(password.length <6 ){
        toast.error('Password must be at Least 6 characters')
        return false
    }

    return true 

}













