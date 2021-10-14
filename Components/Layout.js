import Sidebar from "./Sidebar/Sidebar";
import style from '../styles/Layout.module.scss'
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";

export default function Layout({ children }) {
    const [sidebarShow, setSidebarShow] = useState(false)
    return (
        <div className={style.content}>
            <GiHamburgerMenu className={style.navIcon} onClick={() => { setSidebarShow(!sidebarShow) }} />
            <Sidebar sidebarShow={sidebarShow} setSidebarShow={setSidebarShow} />
            {children}
        </div>
    )
}
