import style from '../../styles/About.module.scss'
function AboutLang() {
    const techs = [
        {
            techName:'React',
        },
        {
            techName:'Vue',    
        },
        {
            techName:'Nodejs',   
        },
        {
            techName:'Golang',
        },
        {
            techName:'SpringBoot',
        },
        {
            techName:'TypesSript',
        },
        {
            techName:'MongoDB',
        },
        {
            techName:'Mysql',
        },
        {
            techName:'Docker',
        },
        {
            techName:'GraphQL',
        }
    ]
    return (
        <div className={style.about__lang}>
            {
                techs.map((tech)=>(
                    <p className={style.techText + ' techLangs'}>{tech.techName}</p>
                ))
            }
        </div>
    )
}

export default AboutLang
