import Layout from '../components/Layout';
import styles from '../styles/Home.module.css';

const posts = [
  { title: 'First Post', slug: 'first-post', excerpt: 'This is the first post' },
  { title: 'Second Post', slug: 'second-post', excerpt: 'This is the second post' }
];

export default function Home() {
  return (
    <Layout>
      <h1>Latest Blog Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.slug}>
            <a href={`/blog/${post.slug}`}>
              <h2>{post.title}</h2>
              <p>{post.excerpt}</p>
            </a>
          </li>
        ))}
      </ul>
    </Layout>
  );
}
