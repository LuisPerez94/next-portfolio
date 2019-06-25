import Layout from '../components/Layout';
import { withRouter } from 'next/router';

const Post = ({ router }) => (
  <Layout title={router.query.title}>
    <p>
      Ullamco velit amet et quis fugiat irure laborum adipisicing voluptate dolore. Amet cupidatat pariatur cillum elit cupidatat amet pariatur aliqua deserunt reprehenderit laboris. Consequat sunt ex aliqua id eu excepteur non. Esse ipsum excepteur occaecat sit labore Lorem excepteur deserunt esse ea pariatur veniam eiusmod.
      Reprehenderit culpa aute magna mollit Lorem adipisicing. Et nisi adipisicing id eu amet et eiusmod voluptate est eiusmod. Consectetur commodo incididunt consequat laboris laboris. Qui non esse cillum excepteur reprehenderit laboris do ullamco. Amet eiusmod dolore officia sunt est pariatur voluptate do non occaecat incididunt. Deserunt occaecat quis nisi occaecat adipisicing nostrud in exercitation voluptate deserunt aute voluptate nisi. Dolor sit minim dolore esse nulla mollit ullamco.
      Tempor adipisicing Lorem ea nisi nulla anim sunt. Enim dolore cillum pariatur eu sint proident. Irure consequat quis dolor Lorem mollit elit amet occaecat. Anim sint irure magna anim enim qui officia cupidatat aute qui quis in sunt nulla. Laboris laboris sit mollit ad Lorem elit deserunt consectetur ad esse.
    </p>
  </Layout>
);

export default withRouter(Post);
