import { useState, useEffect } from "react";

import { HomeSwitch } from "@components/HomeSwitch";
import { arrContent } from "../context/HomeContentList";
import { HomeContentContainer } from "@components/HomeContentContainer";

import styleHomePage from "@styles/HomePage.module.scss";
import styleHomePageSec from "@styles/HomePageSections.module.scss";

export default function Home({ setSLettersOpts = {}, scrollPosition, callback }) {
   const [colorCounter, setColorCounter] = useState(0);
   const [colorArr, setColorArr] = useState([]);
   const lettersState1 = {
      Slide1: [true, true],
      Slide2: [true, true],
      Slide3: [false, true],
      Slide4: [false, true],
      Slide5: [false, true],
      Slide6: [false, true],
   };
   const lettersState2 = {
      Slide1: [true, false],
      Slide2: [true, false],
      Slide3: [true, false],
      Slide4: [true, false],
      Slide5: [true, false],
      Slide6: [true, false],
   };

   callback();

   function scrollToTop() {
      window.scroll(0, 0);
   }

   useEffect(() => {
      scrollToTop();
   }, []);

   function isResizing() {
      if (window.innerWidth > 1024) {
         setSLettersOpts(lettersState2);
      } else setSLettersOpts({ Slide1: [true, false], Slide2: [true, false] });
   }

   function a() {
      if (colorCounter === 3) {
         setColorCounter(0);
      } else setColorCounter(colorCounter + 1);
   }

   useEffect(() => {
      setSLettersOpts({
         Slide1: [true, false],
         Slide2: [true, false],
         Slide3: [false, false],
         Slide4: [false, false],
         Slide5: [false, false],
         Slide6: [false, false],
      });
      window.addEventListener("resize", isResizing);
      return () => window.removeEventListener("resize", isResizing);
   }, []);

   useEffect(() => {
      if (
         scrollPosition >=
         document.body.clientHeight - window.innerHeight * 1.50
      ) {
         setSLettersOpts(lettersState1);
         // console.log("a")
      } else if (scrollPosition < window.innerHeight / 10) {
         setSLettersOpts(lettersState1);
      } else {
         setSLettersOpts(lettersState2);
      }
   }, [scrollPosition]);

   useEffect(() => {
      if (arrContent.length != colorArr.length) {
         a();
         setColorArr([...colorArr, colorCounter]);
      }
   }, [colorCounter]);

   const e = arrContent.map((e, index) => {
      return (
         <HomeContentContainer
            component={e[0]}
            code={e[1]}
            color={colorArr[index]}
            key={`container__${index}`}
         />
      );
   });

   return (
      <div className={styleHomePage.HomePage__main}>
         <HomeSwitch />
         {e}
         <HomeSwitch bottom={true} />
      </div>
   );
}
