import style from '../../styles/About.module.scss'
import { techs } from '../../Data'
function AboutLang() {

    return (
        <div className={style.about__lang}>
            {
                techs.map((tech) => (
                    <p className={style.techText + ' techLangs'} key={tech}>{tech.techName}</p>
                ))
            }
        </div>
    )
}

export default AboutLang
