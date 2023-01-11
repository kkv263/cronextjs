import styles from '../styles/About.module.css'
import Link from 'next/link'

export default function Box({ color }) {
  return (
    <>
      <div style={{ backgroundColor: '#'+color }} className={styles.box}>#{color}</div> 
      <Link href=  "/">Back</Link>
    </>
  )
}