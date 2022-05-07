import { Home } from '@templates/home';

import Head from 'next/head';

export default function index({ setSLettersOpts, scrollPosition, callback }) {
  return (
    <>
    <Head>
       <title>Home | WL 📦</title>
    </Head>
      <Home setSLettersOpts={setSLettersOpts} scrollPosition={scrollPosition} callback={callback} />
    </>
  );
}
