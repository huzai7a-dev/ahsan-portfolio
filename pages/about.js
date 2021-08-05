import AboutInfo from '../Components/About/AboutInfo';
import AboutLang from '../Components/About/AboutLang';
import style from '../styles/About.module.scss';
function about() {
    return (
        <div className={style.about}>
            <AboutInfo/>
            <AboutLang/>
        </div>
    )
}

export default about
