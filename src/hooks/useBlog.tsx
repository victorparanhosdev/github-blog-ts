import { createContext, useContext, ReactNode } from "react";
import { useState, useEffect } from "react";
import { api } from "../services/api";


const BlogContext = createContext({} as PropsContextProvider)

interface PropsBlogProvider {
    children: ReactNode
}

interface PropsContextProvider {
    DataGit: PropsArrayData | undefined,
    fecthApi: (query?: string) => Promise<void>
}

interface PropsArrayData{
    name: string,
    avatar_url: string
    html_url: string
    login: string
    company: string
    followers: number
    bio: string
}

function BlogProvider({children}: PropsBlogProvider){

    const [DataGit, setDataGit] = useState<PropsArrayData>()



    async function fecthApi(query?: string) {

        const response = await api.get(`/users/victorparanhosdev`, {params: {
            q: query,
        }})

        const {name, avatar_url, html_url, login, company, followers, bio} = response.data
        
        const ArrayData = {
            name,
            avatar_url,
            html_url,
            login,
            company,
            followers,
            bio
        }
        
        setDataGit(ArrayData)
        
    }



    useEffect(()=> {
        fecthApi()
    },[])


    return(
        <BlogContext.Provider value={{DataGit, fecthApi}}>
        {children}
        </BlogContext.Provider>
    )
}



function useBlog() {
    const context = useContext(BlogContext);
    return context
}

export {BlogProvider, useBlog}