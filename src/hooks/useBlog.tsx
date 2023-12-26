import { createContext, useContext, ReactNode } from "react";
import { useState, useEffect } from "react";
import { api } from "../services/api";


const BlogContext = createContext({} as PropsContextProvider)

interface PropsBlogProvider {
    children: ReactNode
}

interface PropsContextProvider {
    ProfileInfo: PropsProfileData | undefined

}

interface PropsProfileData{
    name: string,
    avatar_url: string
    html_url: string
    login: string
    company: string
    followers: number
    bio: string
}

function BlogProvider({children}: PropsBlogProvider){

    const [ProfileInfo, setProfileInfo] = useState<PropsProfileData>()



    async function fecthApi() {
        const response = await api.get(`/users/victorparanhosdev`)
        const {name, avatar_url, html_url, login, company, followers, bio} = response.data
        const ProfileData = {
            name,
            avatar_url,
            html_url,
            login,
            company,
            followers,
            bio
        }
        setProfileInfo(ProfileData)
        
    }



    useEffect(()=> {
        fecthApi()
    },[])


    return(
        <BlogContext.Provider value={{ProfileInfo, fecthApi}}>
        {children}
        </BlogContext.Provider>
    )
}



function useBlog() {
    const context = useContext(BlogContext);
    return context
}

export {BlogProvider, useBlog}