import { Header } from "../../components/Header";
import { Outlet } from 'react-router-dom'
import { useEffect, useState } from "react";
import { FallingLines } from 'react-loader-spinner'
import style from "./style.module.css"
export function DefaultLayout() {

    const [isloading, setLoading] = useState(true)

    useEffect(() => {

        setTimeout(() => {
            setLoading(false)   
        }, 1000)


    }, [])

    return (

        <>
            {isloading ? <div className={style.loading}><FallingLines
                color="#3294F8"
                width="100"
                visible={true}
            /></div> : <><Header />
                <Outlet /></>}
        </>
    )
}