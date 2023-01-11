import styles from '../styles/About.module.css'

export async function getServerSideProps() {
  // Call an external API endpoint to get posts
  const res = await fetch('https://jsonplaceholder.typicode.com/photos')
  const posts = await res.json()

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      posts,
    },
  }
}

export default function About({ posts }:any) {
  const random = Math.floor(Math.random() * posts.length);
  return (
    <ul className={styles.list}>
      <li><h1>About 2</h1></li>
      <li>
      <img src={posts[random].url}  />
      </li>
      {posts.map((post:any, index:number) => (
        <li key={index}>{post.title}</li>
      ))}
    </ul>
  )
}