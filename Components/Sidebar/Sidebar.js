import Image from "next/image";
import style from "../../styles/Sidebar.module.scss";
import Link from "next/link";
import { FaFacebookSquare, FaGithubSquare, FaLinkedin,FaWhatsappSquare } from 'react-icons/fa';
import { Button } from "@material-ui/core";
function Sidebar({sidebarShow, setSidebarShow}) {
    return (
        <div className={style.sidebar} style={{left: sidebarShow ? 0 : "-250px"}}>
            <div className="picture">
                <Image
                    src="/ahsan.png"
                    alt="Picture of the author"
                    width={250}
                    height={230}
                />
                <div className={style.social__icons__container}>
                    <a href="https://www.facebook.com/ahsan.jawed.104" target="_blank">
                        <FaFacebookSquare className={style.sidebar__icons} />
                    </a>
                    <a href="https://github.com/Ahsan-J/" target="_blank">
                        <FaGithubSquare className={style.sidebar__icons} />
                    </a>
                    <a href="https://www.linkedin.com/in/ahsan-ahmed-5b6b5382/" target="_blank">
                        <FaLinkedin className={style.sidebar__icons} />
                    </a>
                    <a href="tel:+973 3508 3168">
                        <FaWhatsappSquare className={style.sidebar__icons}/>
                    </a>
                </div>

                <div className={style.sidebar__link__container} onClick={()=>{setSidebarShow(!sidebarShow)}}>
                    <Link href='/'>
                        <Button className={style.sidebar__buttons}>Home</Button>
                    </Link>
                    <Link href='/about'>
                        <Button className={style.sidebar__buttons}>About</Button>
                    </Link>
                    <Link href='/skills'>
                        <Button className={style.sidebar__buttons}>Skills</Button>
                    </Link>
                    <Button className={style.sidebar__buttons}>Work</Button>
                    <Button className={style.sidebar__buttons}>Contact</Button>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;
