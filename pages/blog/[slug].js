import { useRouter } from 'next/router';
import Layout from '../../components/Layout';
import styles from '../../styles/BlogPost.module.css';

const posts = {
  'first-post': { title: 'First Post', content: 'This is the first post content' },
  'second-post': { title: 'Second Post', content: 'This is the second post content' }
};

export default function BlogPost() {
  const router = useRouter();
  const { slug } = router.query;
  const post = posts[slug];

  if (!post) return <p>Loading...</p>;

  return (
    <Layout>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </Layout>
  );
}
