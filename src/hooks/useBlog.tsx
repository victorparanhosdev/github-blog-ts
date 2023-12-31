import { ReactNode, useState, useEffect, useCallback} from "react";
import { createContext, useContextSelector } from 'use-context-selector'
import { api } from "../services/api";

interface PropsBlogProvider {
    children: ReactNode
}

interface PropsContextProvider {
    ProfileInfo: PropsProfileData | undefined,
    fetchSearchForm: (query: any) => Promise<void>,
    DataIssues: any[] | []

}

interface PropsProfileData {
    name: string,
    avatar_url: string
    html_url: string
    login: string
    company: string
    followers: number
    bio: string
}

const BlogContext = createContext({} as PropsContextProvider)

function BlogProvider({ children }: PropsBlogProvider) {

    const [ProfileInfo, setProfileInfo] = useState<PropsProfileData>()
    const [DataIssues, setDataIssues] = useState([])

    async function fetchSearchForm(data?: any) {
 
        await api.get(`/search/issues`, {
            params: {
                q: `${data} repo:victorparanhosdev/github-blog-ts`
            }
            
        }).then(response => setDataIssues(response.data.items)).catch(error => {
            if (error.response) {
                return alert(error.response.data.message)
            }
            alert("Não foi possivel buscar")
        })



    }


    const fetchApiUsers = useCallback(async ()=> {
        const response = await api.get(`/users/victorparanhosdev`)
        const { name, avatar_url, html_url, login, company, followers, bio } = response.data
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

    },[])


    async function fetchData() {
        await Promise.all([
            fetchSearchForm(""),
            fetchApiUsers()
        ]);


    };
    useEffect(() => {
        fetchData();
    }, [])


    return (
        <BlogContext.Provider value={{ ProfileInfo, fetchSearchForm, DataIssues }}>
            {children}
        </BlogContext.Provider>
    )
}



function useBlog() {
    const contextBlog = useContextSelector(BlogContext, (context)=> context);
    return contextBlog
}

export { BlogProvider, useBlog }