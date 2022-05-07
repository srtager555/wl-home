import NotFound from '@templates/notFound';

import Head from 'next/head';

export default function NotFoundPage({ setSLettersOpts }) {
  return (
    <>
      <Head>
        <title>404 | WL 📦</title>
      </Head>
      <NotFound setSLettersOpts={setSLettersOpts} />
    </>
  );
}
