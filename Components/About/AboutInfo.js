import style from '../../styles/About.module.scss'
function AboutInfo() {
    return (
        <div className={style.about__info}>
            {/* static tag class for common style for all tags */}
            <span className={style.htmlTag + ' tag'} > &lt;html&gt; </span><br />
            <span className={style.bodyTag + ' tag'} > &lt;body&gt; </span><br />
            <span className={style.h1Tag + ' tag'} > &lt;h1&gt; </span>
            <h1 className={style.name}>
                <span>Me, Myself & I</span><br />
            </h1>
            <span className={style.h1Tag + ' tag'} > &lt;/h1&gt; </span> <br />
            <span className={style.pTag + ' tag'} > &lt;p&gt; </span><br />
            <span>
                <p className={style.position}>
                    I am a Full Stack Developer having 4  years of experience in developing
                    applications in different technologies. As a Full stack, the flexibility of switching
                    between platforms and technologies allowed me to flourish expertise in
                    developing applications.
                    I have also the knowledge on creating Micro-services architecture, Progressive
                    Web App (PWA). I am open to other technology or framework to work.
                </p>
            </span>
            <span className={style.pTag + ' tag'} > &lt;/p&gt; </span><br />
            <span className={style.bodyTag + ' tag'} > &lt;/body&gt; </span><br />
            <span className={style.htmlTag + ' tag'} > &lt;/html&gt; </span><br />
        </div>
    )
}

export default AboutInfo
