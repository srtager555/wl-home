import { useState, useEffect } from "react";
import style from "@styles/SlideLetters.module.scss";

export function SlideLetters({ sLettersOpts = {}, scrollPosition }) {
   const [slide1, setSlide1] = useState([false, false]);
   const [slide2, setSlide2] = useState([false, false]);
   const [slide3, setSlide3] = useState([false, false]);
   const [slide4, setSlide4] = useState([false, false]);
   const [slide5, setSlide5] = useState([false, false]);
   const [slide6, setSlide6] = useState([false, false]);

   const arrSlide = [
      [slide1, setSlide1],
      [slide2, setSlide2],
      [slide3, setSlide3],
      [slide4, setSlide4],
      [slide5, setSlide5],
      [slide6, setSlide6],
   ];

   const {
      Slide1 = [],
      Slide2 = [],
      Slide3 = [],
      Slide4 = [],
      Slide5 = [],
      Slide6 = [],
   } = sLettersOpts;

   useEffect(() => {
      setSlide1([Slide1[0], Slide1[1]]);
      setSlide2([Slide2[0], Slide2[1]]);
      setSlide3([Slide3[0], Slide3[1]]);
      setSlide4([Slide4[0], Slide4[1]]);
      setSlide5([Slide5[0], Slide5[1]]);
      setSlide6([Slide6[0], Slide6[1]]);
   }, [sLettersOpts]);

   // useEffect(() => {
   //    arrSlide.forEach((element, index) => {
   //       if (scrollPosition >= document.body.clientHeight - window.innerHeight * 1.5) {
   //          if (element[0][0] === true) element[1]([true, true]);
   //       } else if (scrollPosition < window.innerHeight / 10) {
   //          if (element[0][0] === true) element[1]([true, true]);
   //       } else {
   //          if (element[0][0] === true) element[1]([true, false]);
   //       }
   //    });
   // }, [scrollPosition]);

   return (
      <div className={`${style.container} ${style.container__SlideLetters}`}>
         <div
            className={`${style["container__SlideLetters--slideLetter"]} ${
               slide1[0] ? "" : style.hidden
            } ${slide1[1] ? "" : style.opacity}`}
         >
            <span>
               Wrapping Letters Wrapping Letters Wrapping Letters Wrapping
               Letters Wrapping Letters Wrapping Letters{" "}
            </span>
            <span>
               Wrapping Letters Wrapping Letters Wrapping Letters Wrapping
               Letters Wrapping Letters Wrapping Letters{" "}
            </span>
         </div>
         <div
            className={`${style["container__SlideLetters--slideLetter"]} ${
               slide2[0] ? "" : style.hidden
            } ${slide2[1] ? "" : style.opacity}`}
         >
            <span>
               Wrapping Letters Wrapping Letters Wrapping Letters Wrapping
               Letters Wrapping Letters Wrapping Letters{" "}
            </span>
            <span>
               Wrapping Letters Wrapping Letters Wrapping Letters Wrapping
               Letters Wrapping Letters Wrapping Letters{" "}
            </span>
         </div>
         <div
            className={`${style["container__SlideLetters--slideLetter"]} ${
               slide3[0] ? "" : style.hidden
            } ${slide3[1] ? "" : style.opacity}`}
         >
            <span>
               Wrapping Letters Wrapping Letters Wrapping Letters Wrapping
               Letters Wrapping Letters Wrapping Letters{" "}
            </span>
            <span>
               Wrapping Letters Wrapping Letters Wrapping Letters Wrapping
               Letters Wrapping Letters Wrapping Letters{" "}
            </span>
         </div>
         <div
            className={`${style["container__SlideLetters--slideLetter"]} ${
               slide4[0] ? "" : style.hidden
            } ${slide4[1] ? "" : style.opacity}`}
         >
            <span>
               Wrapping Letters Wrapping Letters Wrapping Letters Wrapping
               Letters Wrapping Letters Wrapping Letters{" "}
            </span>
            <span>
               Wrapping Letters Wrapping Letters Wrapping Letters Wrapping
               Letters Wrapping Letters Wrapping Letters{" "}
            </span>
         </div>
         <div
            className={`${style["container__SlideLetters--slideLetter"]} ${
               slide5[0] ? "" : style.hidden
            } ${slide5[1] ? "" : style.opacity}`}
         >
            <span>
               Wrapping Letters Wrapping Letters Wrapping Letters Wrapping
               Letters Wrapping Letters Wrapping Letters{" "}
            </span>
            <span>
               Wrapping Letters Wrapping Letters Wrapping Letters Wrapping
               Letters Wrapping Letters Wrapping Letters{" "}
            </span>
         </div>
         <div
            className={`${style["container__SlideLetters--slideLetter"]} ${
               slide6[0] ? "" : style.hidden
            } ${slide6[1] ? "" : style.opacity}`}
         >
            <span>
               Wrapping Letters Wrapping Letters Wrapping Letters Wrapping
               Letters Wrapping Letters Wrapping Letters{" "}
            </span>
            <span>
               Wrapping Letters Wrapping Letters Wrapping Letters Wrapping
               Letters Wrapping Letters Wrapping Letters{" "}
            </span>
         </div>
      </div>
   );
}
