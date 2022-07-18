import Head from 'next/head'
import Boxes from '../components/Boxes'
import data from '../components/data'
import Footer from '../components/Footer'
import Header from '../components/Header'
import styles from '../styles/Home.module.css'

export default function Home(props) {
  return (
    <div className={styles.container}>

  
    <Head>
      <title>Developers Projects</title>
      <meta name="description" content="Find out what developers are building. Expose your projects to other Developers. Get inspiration to create your first project by others. " />
      <link rel="icon" href="/favicon.ico" />
    </Head>
     
     
      <div>
      <Header/>
      <Boxes data={props.usersData}/>
      <Footer/>
      </div>
    </div>
  )
}

export async function getStaticProps(context) {
  const usersData = data
  for (let i = data.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [data[i], data[j]] = [data[j], data[i]];
    
  }
  return {

    props: {usersData}, 
  }
}