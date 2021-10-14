import style from "../../styles/Skills.module.scss";
import styled from "styled-components";
import { keyframes } from "styled-components";
import { skills } from "../../Data";
const animate = (width) => keyframes`
  0% {
    width:0%
  }
  100% {
    width:${width}
  }
`;
const SkillStatus = styled.div`
  background: ${(props) => props.background};
  width: ${(props) => props.width};
  height: 100%;
  animation: ${animate} 0.8s 0.2s ease-in normal;
`;
function SkillsStatus() {

  const SkillBar = ({ skill }) => {
    return (
      <div className={style.skillBar}>
        <h3 className={style.skill__title}>{skill.name}</h3>
        <div className={style.skillBar__outer}>
          <SkillStatus background={skill.bg} width={skill.width} />
        </div>
      </div>
    );
  };
  return (
    <div className={style.skills__bar__container}>
      {skills.map((skill) => (
        <SkillBar skill={skill} key={skill.name} />
      ))}
    </div>
  );
}

export default SkillsStatus;
