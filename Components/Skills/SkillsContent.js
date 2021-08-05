import style from "../../styles/Skills.module.scss";
function SkillsContent() {
  return (
    <div className={style.skills__content}>
      <span className={style.htmlTag + " tag"}> &lt;html&gt; </span>
      <br />
      <span className={style.bodyTag + " tag"}> &lt;body&gt; </span>
      <br />
      <span className={style.h1Tag + " tag"}> &lt;h1&gt; </span>
      <h1 className={style.name}>
        <span>Skills & Experience</span>
        <br />
      </h1>
      <span className={style.h1Tag + " tag"}> &lt;/h1&gt; </span> <br />
      <ul>
        <span className={style.ulTag + " tag"}> &lt;ul&gt; </span>
        <br />
        <span className={style.liTag + " tag"}> &lt;li&gt; </span>
        <li className={style.listItem}>
          Expert in using <b style={{ color: "#61DBFB" }}>React </b>
          optimizations to allow its Virual DOM to perform at minimal processing
          for complex functional components.
        </li>
        <li className={style.listItem}>
          Hands-on expertise in modern growing framework
          <b style={{ color: "#41B883" }}> Vue</b>.
        </li>

        <li className={style.listItem}>
          Experienced in building hybrid application on
          <b style={{ color: "#61DBFB" }}> React-Native</b> and
          <b style={{ color: "#f7b3c2" }}> Flutter</b>
        </li>

        <li className={style.listItem}>
          Creating libraries for <b style={{ color: "#41B883" }}>Node</b> or
          <b style={{ color: "#29BEB0" }}> Golang</b> projects and including
          them as an external dependencies.
        </li>
        <li className={style.listItem}>
          Basics of developing REST application on
          <b style={{ color: "#6DB33F" }}> Java Spring Boot</b>
        </li>
        <li className={style.listItem}>
          Hands-on experience in building scalable application using
          <b style={{ color: "##E535AB" }}> GraphQL</b> and
          <b style={{ color: "#E535AB" }}> Apollo GraphQL</b> with
          <b style={{ color: "#41B883" }}> Node/</b>
          <b style={{ color: "#29BEB0" }}> Golang</b> and
          <b style={{ color: "#61DBFB" }}> React/</b>
          <b style={{ color: "#41B883" }}> Vue</b>.
        </li>

        <li className={style.listItem}>
          Creating IoT devices CODEC parser algorithm in{" "}
          <b style={{ color: "#29BEB0" }}> Golang</b> and convert it to
          meaningful data from Hex strings.
        </li>

        <li className={style.listItem}>
          Writing standard <b style={{ color: "#2471BD" }}> SQL</b> queries to
          handle CRUD data flow.
        </li>
        <span className={style.liTag + " tag"}> &lt;/li&gt; </span>
        <br />
        <span className={style.ulTag + " tag"}> &lt;/ul&gt; </span>
      </ul>
      <span className={style.bodyTag + " tag"}> &lt;/body&gt; </span>
      <br />
      <span className={style.htmlTag + " tag"}> &lt;/html&gt; </span>
      <br />
    </div>
  );
}

export default SkillsContent;
