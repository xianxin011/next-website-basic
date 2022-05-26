import Layout from '../layout';
import Sidebar from '../layout/sidebar';
import { GetStaticProps } from "next";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { examplesAsync } from "../store/user/action";


const IndexPage = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
   dispatch(examplesAsync({ message: 'examplesAsync' }));
  }, []);

  return (
    <section>
      <h2>{props.title}</h2>
      <p>{props.content} </p>
    </section>
  );
}
export default IndexPage;

IndexPage.getLayout = function getLayout(page) {
  return (
    <Layout>
      <Sidebar/>
      {page}
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch('http://localhost:3000/json/index.json');
  const rsp = await res.json();
  return {
    props: {
      ...rsp.data,
    },
  };
};