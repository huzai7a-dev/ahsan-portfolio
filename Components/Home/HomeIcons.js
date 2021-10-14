import style from '../../styles/Home.module.scss'
import Image from 'next/image'
import { icons } from '../../Data'
function HomeIcons() {

    return (
        <div className={style.icons__container + ' icon__container'}>
            {icons.map((icon) => (
                <div className='langIcon' key={icon.iconName}>
                    <Image
                        width={icon.width}
                        height={icon.height}
                        src={icon.iconPath}
                    />
                </div>
            ))}
        </div>
    )
}

export default HomeIcons
