import styles from '../styles/About.module.css'

export default function Box({ color }) {
  return (
      <div style={{ backgroundColor: '#'+color }}className={styles.box}>#{color}</div> 
  )
}