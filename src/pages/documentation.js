import { Documentation } from 'templates/documentation';

export default function DocumentationPage({ callback, sideNavRef, setSLettersOpts }) {
  const props = {
    callback,
    anchorRef: sideNavRef,
    setSLettersOpts,
  };

  return <Documentation {...props} />;
}
