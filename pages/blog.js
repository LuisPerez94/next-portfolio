import Layout from '../components/Layout';
import Link from 'next/link';

const PostLink = ({ title, slug }) => (
  <li>
    <Link as={`/${slug}`} href={`/post?title=${title}`}>
      <a>{title}</a>
    </Link>
  </li>
);

export default () => (
  <Layout title="Mi Blog">
    <ul>
      <PostLink slug="react-post" title="React" />
      <PostLink slug="seo-post" title="SEO" />
      <PostLink slug="ssr-post" title="SSR" />
    </ul>
  </Layout>
)