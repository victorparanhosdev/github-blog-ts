import { createContext, useContext, ReactNode } from "react";
import { useState, useEffect } from "react";
import { api } from "../services/api";


const BlogContext = createContext({} as PropsContextProvider)

interface PropsBlogProvider {
    children: ReactNode
}

interface PropsContextProvider {
    DataGit: any
}


function BlogProvider({children}: PropsBlogProvider){

    const [DataGit, setDataGit] = useState([])
    console.log(DataGit)


    useEffect(()=> {
        async function fecthApi(query: string = 'Um texto') {
            await api.get('/blogs',{params: {
                q: query
            }}).then(response=> setDataGit(response.data)) 
            
        }

        fecthApi()
    },[])


    return(
        <BlogContext.Provider value={{DataGit}}>
        {children}
        </BlogContext.Provider>
    )
}



function useBlog() {
    const context = useContext(BlogContext);
    return context
}

export {BlogProvider, useBlog}