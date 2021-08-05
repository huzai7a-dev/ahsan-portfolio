import { StylesProvider } from "@material-ui/styles";
import style from "../../styles/Skills.module.scss";
function Experience({ details }) {
  return (
    <div className={style.exp}>
      <h1 className={style.exp__title}>{details.expTitle}</h1>
      <div className={style.exp__detail}>
        <h2 className={style.exp__compTitle}>{details.companyName}</h2>
        <p className={style.exp__period}>{details.expPeriod}</p>
        <p className={style.exp__location}>
          <span>Location: </span>
          {details.location}
        </p>
        <p>
          Company URL :<a href={details.compnayURL}>{details.companyName}</a>
        </p>
        <p>Projects: {details.project}</p>
      </div>
    </div>
  );
}

export default Experience;
