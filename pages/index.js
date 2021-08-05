import Head from 'next/head'
import HomeContent from '../Components/Home/HomeContent'
import HomeIcons from '../Components/Home/HomeIcons'
import styles from '../styles/Home.module.scss'

export default function Home() {
  return (
    <div className={styles.home__container}>
      <HomeContent/>
      <HomeIcons/>
    </div>
  )
}
