import Head from 'next/head';
import SignUpForm from '../components/SignUpForm';

function Home() {
  return (
    <>
      <Head>
        <title>Sign Up Form</title>
      </Head>
      <SignUpForm />
    </>
  );
}

export default Home;