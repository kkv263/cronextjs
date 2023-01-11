import styles from '../styles/About.module.css'
import Box from '../components/Box'

export async function getServerSideProps() {
  const res = await fetch('https://www.colr.org/json/color/random')
  const color = await res.json()

  return {
    props: {
      color: color.colors[0].hex,
    },
  }
}

export default function SSRPage({ color }:any) {
  return (
    <div className={styles.crotainer}>
      <h1>Server Side Rendering random inline color</h1>
      <Box color={color}/>
    </div>
  )
}