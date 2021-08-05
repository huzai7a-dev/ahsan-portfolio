import Experience from "../Components/Skills/Experience";
import SkillsContent from "../Components/Skills/SkillsContent";
import SkillsStatus from "../Components/Skills/SkillsStatus";
import style from "../styles/Skills.module.scss";
function skills() {
  const expDetails = [
    {
      expTitle: "Full Stack Developer",
      expPeriod: "November 2020 –Present",
      companyName: "DMS Global",
      compnayURL: "https://dmsglobal.net/",
      project: "DMS Universe",
      location: "Bahrain",
    },
    {
      expTitle: "Full Stack Developer",
      expPeriod: "January 2019 – April 2020",
      companyName: "Cohen International Group",
      compnayURL: "https://dmsglobal.net/",
      project: "Holidays By Saudia, Umrah By Saudia, Halatrip Travesys",
      location: "Bahrain",
    },
    {
      expTitle: "Full Stack Developer",
      expPeriod: "October 2017 – January 2019",
      companyName: "Doozielabs",
      compnayURL: "http://doozielabs.com/",
      project: "MilkADeal , iSay ,Eocean, Ramadan Legacy",
      location: "Karachi, Pakistan",
    },
  ];
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
