import { Route, Routes, BrowserRouter, Navigate} from "react-router-dom";
import { Home } from "../pages/Home";
import { Post } from "../pages/Post";
export function AppRouter() {
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/post/:id" element={<Post/>}/>
            <Route path="*" element={<Navigate to="/"/>}/>
        </Routes>        
        </BrowserRouter>
    )
}