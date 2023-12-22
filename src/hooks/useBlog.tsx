import { createContext, useContext, ReactNode } from "react";

const BlogContext = createContext({})

interface PropsBlogProvider {
    children: ReactNode
}


function BlogProvider({children}: PropsBlogProvider){
    return(
        <BlogContext.Provider value={{}}>
        {children}
        </BlogContext.Provider>
    )
}



function useBlog() {
    const context = useContext(BlogContext);
    return context
}

export {BlogProvider, useBlog}