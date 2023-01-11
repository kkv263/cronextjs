import styles from '../styles/About.module.css'

export async function getStaticProps() {
  // Call an external API endpoint to get posts
  const res = await fetch('https://www.colr.org/json/color/random')
  const color = await res.json()

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      color: color.colors[0].hex,
    },
  }
}

export default function About({ color }: any) {
  return (
    <div className={styles.crotainer}>
      <h1>Static Site Generation random inline color</h1>
      <div style={{ backgroundColor: '#'+color }}className={styles.box}>#{color}</div> 
    </div>
  )
}