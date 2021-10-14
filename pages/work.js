import Work from '../Components/Work/Work'
import style from '../styles/Work.module.scss'
import { projects } from '../Data'
function work() {
    
    return (
        <div className={style.work__page}>
            <div className={style.work__title}>
                <h1>Projects</h1>
            </div>
            <div className={style.work__container}>
            {projects.map((project)=>{
               return <Work key={project.id} project={project}/>
            })}
            </div>
        </div>
    )
}

export default work
