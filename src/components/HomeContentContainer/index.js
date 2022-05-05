import { useRef, useEffect } from "react";

import { HomeContentCode } from "@components/HomeContentCode";
import { HomeContentItem } from "@components/HomeContentItem";

import style from "@styles/HomeContent.module.scss";

export function HomeContentContainer({ component, code, color, ...key }) {
   const contentRef = useRef(null);

   function handleObserProjects(entries) {
      const [entry] = entries;

      if (entry.isIntersecting) {

         document.body.className = contentRef.current.children[1].classList[1];
      }
   }

   useEffect(() => {
      const options = {
         root: null,
         rootMargin: `0px`,
         threshold: 1,
      };

      const observer = new IntersectionObserver(handleObserProjects, options);
      if (contentRef.current) {
         observer.observe(contentRef.current);
      }
      return () => {
         if (contentRef.current) {
            observer.unobserve(contentRef.current);
         }
      };
   }, [contentRef]);

   return (
      <div {...key} className={style["HomeContentContainer--main"]}>
         <div ref={contentRef} className={style["HomeContentContainer--main__content"]}>
            <HomeContentItem title={component[0]} description={component[1]} />
            <HomeContentCode code={code} color={color} />
         </div>
      </div>
   );
}
