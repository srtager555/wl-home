import { Documentation } from 'templates/documentation';

import Head from 'next/head';

export default function DocumentationPage({ callback, sideNavRef, setSLettersOpts }) {
  const props = {
    callback,
    anchorRef: sideNavRef,
    setSLettersOpts,
  };

  return (
    <>
      <Head>
        <title>Documentation | WL 📦</title>
      </Head>
      <Documentation {...props} />
    </>
  );
}
