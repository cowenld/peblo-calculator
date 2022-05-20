import { Calculator } from '../components/calculator/Calculator';
import { Layout } from '../components/layouts/Layout';
import { Logo } from '../components/logo/Logo';
import { NextPageWithLayout } from './page';

const Home: NextPageWithLayout = () => {
  return (
    <>
      <Logo />
      <Calculator />
    </>
  );
};

Home.getLayout = (page) => {
  return <Layout>{page}</Layout>;
};

export default Home;
