import { useRef, useEffect } from "react";
import WL from "wrapping-letters-react";
import anime from "animejs";

import style from "@styles/HomePageSections.module.scss";

function Container() {
   const letterContainer = useRef(null);

   useEffect(() => {
      anime({
         targets: letterContainer.current.children,
         translateY: [0, 5, -5, 0],
         duration: 1000,
         loop: true,
         easing: "easeInQuad",
         delay: anime.stagger(100),
      });
   }, []);

   return (
      <div ref={letterContainer} className={style["letter-container"]}>
         <WL
            word="Wrapp any letter is easy"
         />
      </div>
   );
}

export function Content1() {
   return [
      [
         <Container />,
         "Simplify your code with the simple sintaxis of WL, Is very ease to use.",
      ],
      `
import WL from "wrapping-letters-react";

return (
   <div 
      className="letter-container"
   >
      <WL
         word="Wrapp any letter is easy"
      />
   </div>
);
      `,
   ];
}
