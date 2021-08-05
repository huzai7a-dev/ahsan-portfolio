import style from '../../styles/Home.module.scss';
function HomeContent() {
    return (
        <div className={style.home__content}>
                {/* static tag class for common style for all tags */}
                <span className={style.htmlTag + ' tag'} > &lt;html&gt; </span><br />
                <span className={style.bodyTag + ' tag'} > &lt;body&gt; </span><br />
                <span className={style.h1Tag + ' tag'} > &lt;h1&gt; </span>
                <h1 className={style.name}>
                    <span>Hi,</span><br />
                    <span>I’m</span> <br />
                    <span style={{color:"#08FDD8"}}>A</span>hsan <span style={{color:"#08FDD8"}}>A</span>hmed
                </h1>
                <span className={style.h1Tag + ' tag'} > &lt;/h1&gt; </span> <br />
                <span className={style.pTag + ' tag'} > &lt;p&gt; </span><br />
                    <span>
                        <p className={style.position}>Full Stack Developer</p>
                    </span>
                <span className={style.pTag + ' tag'} > &lt;/p&gt; </span><br />
                <span className={style.bodyTag + ' tag'} > &lt;/body&gt; </span><br />
                <span className={style.htmlTag + ' tag'} > &lt;/html&gt; </span><br />
        </div>
    )
}

export default HomeContent;
