import { createContext, useContext, ReactNode } from "react";
import { useState, useEffect } from "react";
import { api } from "../services/api";
import { FieldValues, UseFormReturn, useForm } from "react-hook-form";


const BlogContext = createContext({} as PropsContextProvider)

interface PropsBlogProvider {
    children: ReactNode
}

interface PropsContextProvider {
    ProfileInfo: PropsProfileData | undefined,
    fetchSearchForm: (query: any) => Promise<void>,
    FormSearchHook: UseFormReturn<FieldValues>,
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

function BlogProvider({ children }: PropsBlogProvider) {

    const [ProfileInfo, setProfileInfo] = useState<PropsProfileData>()
    const [DataIssues, setDataIssues] = useState([])
    const FormSearchHook = useForm()

    const { reset } = FormSearchHook


    async function fetchSearchForm(data?: string) {

        await api.get(`/search/issues`, {
            params: {
                q: `${data} user:victorparanhosdev`
            }
        }).then(response => setDataIssues(response.data.items)).catch(error => {
            if (error.response) {
                return alert(error.response.data.message)
            }
            alert("Não foi possivel buscar")
        })


        reset()

    }


    async function fecthApi() {
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

    }


    async function fetchData() {
        await Promise.all([
            fetchSearchForm(""),
            fecthApi()
        ]);


    };
    useEffect(() => {
        fetchData();
    }, [])


    return (
        <BlogContext.Provider value={{ ProfileInfo, fetchSearchForm, FormSearchHook, DataIssues }}>
            {children}
        </BlogContext.Provider>
    )
}



function useBlog() {
    const context = useContext(BlogContext);
    return context
}

export { BlogProvider, useBlog }