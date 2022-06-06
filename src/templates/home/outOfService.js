import { useEffect } from "react";

import styles from "@styles/outOfService.module.sass";

export function OutOfService({ setSLettersOpts = {}, callback }) {
  callback();

  const lettersState = {
    Slide1: [true, false],
    Slide2: [true, false],
    Slide3: [true, false],
    Slide4: [true, false],
    Slide5: [true, false],
    Slide6: [true, false],
  };

  useEffect(() => {
    setSLettersOpts(lettersState);
  }, []);
  return (
    <div className={`container ${styles.OutOfService}`}>
      <h1>Out of Service</h1>
      <p>I working now in a new design for the page...</p>
      <small>The end date is undefiend</small>
    </div>
  );
}
