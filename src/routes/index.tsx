import { Route, Routes, BrowserRouter, Navigate} from "react-router-dom";
import { Home } from "../pages/Home";
import { Post } from "../pages/Post";
import { DefaultLayout } from "../pages/DefaultLayout";
export function AppRouter() {
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<DefaultLayout/>}>
                <Route path="/" element={<Home/>}/>
                <Route path="/post/:id" element={<Post/>}/>
                <Route path="*" element={<Navigate to="/"/>}/>
            </Route>
        </Routes>        
        </BrowserRouter>
    )
}