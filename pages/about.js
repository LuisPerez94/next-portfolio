import Layout from '../components/Layout';
import Error from './_error';
import { Component } from 'react';
import fetch from 'isomorphic-unfetch';

class About extends Component {

  static async getInitialProps(){
    const res = await fetch("https://api.github.com/users/LuisPerez94");
    const data = await res.json();
    const statusCode = res.status > 200 ? res.status : false;
    return { user:  data, statusCode };
  }

  render(){
    const { user, statusCode } = this.props;
    if (statusCode) {
      return <Error statusCode={statusCode} />
    }
    return(
      <Layout title="Acerca de mi">
        <p>{user.name}</p>
        <p>{user.bio}</p>
        <img
          src={user.avatar_url}
          alt="Me"
          height="200px"
        />
      </Layout>
    );
  }
}

export default About;