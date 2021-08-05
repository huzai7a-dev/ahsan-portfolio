import style from '../../styles/Home.module.scss'
import Image from 'next/image'
function HomeIcons() {
    const icons = [
        {
            iconPath:'/react.png',
            iconName:'reactIcon',
            width:90,
            height:70
        },
        {
            iconPath:'/vue.png',
            iconName:'vueIcon',
            width:70,
            height:70
        },
        {
            iconPath:'/nodejs.png',
            iconName:'nodejsIcon',
            width:70,
            height:70   
        },
        {
            iconPath:'/golang.png',
            iconName:'golangIcon',
            width:70,
            height:70
        },
        {
            iconPath:'/springBoot.png',
            iconName:'springBootIcon',
            width:100,
            height:60
        },
        {
            iconPath:'/typescript.png',
            iconName:'typescriptIcon',
            width:100,
            height:70
        },
        {
            iconPath:'/mongodb.png',
            iconName:'mongodbIcon',
            width:100,
            height:70
        },
        {
            iconPath:'/mysql.png',
            iconName:'mysqlIcon',
            width:70,
            height:70
        },
        {
            iconPath:'/docker.png',
            iconName:'dockerIcon',
            width:70,
            height:70
        },
        {
            iconPath:'/graphql.png',
            iconName:'graphqlIcon',
            width:70,
            height:70
        }
    ]
    return (
        <div className={style.icons__container + ' icon__container'}>
            {icons.map((icon)=>(
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
