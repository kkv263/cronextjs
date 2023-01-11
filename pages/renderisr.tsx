import styles from '../styles/About.module.css'
import Box from '../components/Box'

export async function getStaticProps() {
  const res = await fetch('https://www.colr.org/json/color/random')
  const color = await res.json()

  return {
    props: {
      color: color.colors[0].hex,
      revalidate: 10,
    },
  }
}

export default function About({ color }: any) {
  return (
    <div className={styles.crotainer}>
      <h1>Static Site Generation random inline color</h1>
      <Box color={color}/>
    </div>
  )
}