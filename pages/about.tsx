import Layout from '../layout';
import Sidebar from '../layout/sidebar';
import { GetStaticProps } from "next";

const AboutPage = (props)=> {
  
  return (
    <section>
      <h2>{props.title}</h2>
      <p>{props.content} </p>
    </section>
  );
}
export default AboutPage;

AboutPage.getLayout = function getLayout(page) {
  return (
    <Layout>
      <Sidebar/>
      {page}
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch('http://localhost:3000/json/about.json');
  const rsp = await res.json();
  return {
    props: {
      ...rsp.data,
    },
  };
};