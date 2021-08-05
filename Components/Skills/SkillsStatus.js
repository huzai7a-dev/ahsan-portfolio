import style from "../../styles/Skills.module.scss";
import styled from "styled-components";
import { keyframes } from "styled-components";
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
  const skills = [
    {
      name: "React/React-Native",
      width: "90%",
      bg: "#61DBFB",
    },
    {
      name: "Vue",
      width: "70%",
      bg: "#41B883",
    },
    {
      name: "Flutter",
      width: "70%",
      bg: "#50BBEB",
    },
    {
      name: "Node",
      width: "75%",
      bg: "#3C873A",
    },
    {
      name: "Golang",
      width: "60%",
      bg: "#29BEB0",
    },
    {
      name: "Java",
      width: "50%",
      bg: "#E6890E",
    },

    {
      name: "TypeScript",
      width: "90%",
      bg: "#2F72BC",
    },

    {
      name: "Docker",
      width: "70%",
      bg: "#1B8AAB",
    },
    {
      name: "SQL",
      width: "50%",
      bg: "#2471BD",
    },
    {
      name: "GraphQL",
      width: "60%",
      bg: "#D932A2",
    },
  ];
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
