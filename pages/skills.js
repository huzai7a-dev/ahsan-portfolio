import handleViewport from "react-in-viewport";
import Experience from "../Components/Skills/Experience";
import SkillsContent from "../Components/Skills/SkillsContent";
import SkillsStatus from "../Components/Skills/SkillsStatus";
import style from "../styles/Skills.module.scss";
import { expDetails } from "../Data";
function skills() {

  return (
    <div className={style.skills}>
      <SkillsContent />
      <div className={style.skills__container}>
        <SkillsStatus />
        <div className={style.exp__container}>
          {expDetails.map((detail) => {
            return <Experience details={detail} key={detail.companyName} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default skills;
