import Layout from '../components/Layout';

export default ({ statusCode }) => (
  <Layout title="Error!">
    {statusCode
      ? `No se pudo cargar la información: Status Code ${statusCode}`
      : `No pude encontrar la página :( sorry!`
    }
  </Layout>
);