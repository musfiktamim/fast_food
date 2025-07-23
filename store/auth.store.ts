import { getCurrentUser } from '@/lib/appwrite';
import { User } from '@/type';
import { create } from 'zustand';


type AuthState = {
    isAuthenticated:Boolean,
    user:User|null,
    isLoading:Boolean,
    setIsAutheticated:(value:Boolean)=>void;
    setUser:(user:User|null) => void;
    setLoading:(loading:Boolean)=>void;

    fetchAutheticatedUser:()=>Promise<void>;
}

const useAuthStore = create<AuthState>((set) => ({
    isAuthenticated:false,
    user:null,
    isLoading:true,

    setIsAutheticated:(value)=>set({isAuthenticated:value}),
    setUser:(user)=>set({user}),
    setLoading:(value)=>set({isLoading:value}),
    fetchAutheticatedUser:async()=>{
        set({isLoading:true})
        try{
            const user = await getCurrentUser();
            if(user) set({isAuthenticated:true,user: user as User})
            else set({isAuthenticated:false,user:null})
        }catch(err){
            console.log("fetchAutheticatedUser error",err);
            set({isAuthenticated:false,user:null})
        }finally{
            set({isLoading:false})
        }
    }
}))

export default useAuthStore