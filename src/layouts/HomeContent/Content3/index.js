import React from "react";
import WL from "wrapping-letters-react";

import style from "@styles/HomePageSections.module.scss";

function Container() {
   function ReactComponent({ letter, cssClass, ...props }) {
      return (
         <div className={`${style["container-letter"]} ${cssClass}`} {...props}>
            <span className={`${style["letter-wrapp"]} ${cssClass}`}>{letter}</span>
         </div>
      );
   }

   return (
      <div className={style["letter-container"]}>
         <WL
            word="Create the packaging of your choice"
            wordOptions={[
               {
                  ClassToAdd: style["letter-wrapp"],

                  SelectClass: {
                     wordToSearch: "packaging",
                     classToAdd: style["pack-letter"],
                  },
                  PerWord: true,
               },
            ]}
            structure={ReactComponent}
         />
      </div>
   );
}

export function Content3() {
   return [
      [
         <Container />,
         "The <span /> is not functional for your component? No problem, you can create a special structure for your component",
      ],
      `
import WL from "wrapping-letters-react";

function ReactComponent({ letter, cssClass, ...props }) {
    return (
        <div 
            className={\`container-letter \${cssClass}\`} 
            {...props}
        >
            <span className={\`letter-wrapp \${cssClass}\`}>
                {letter}
            </span>
        </div>
    );
}

return (
    <div className="letter-container">
        <WL
            word="Create the packaging of your choice"
            wordOptions={[
                {
                    ClassToAdd: "letter-wrapp",

                    SelectClass: {
                        wordToSearch: "packaging",
                        classToAdd: "pack-letter",
                    },
                    PerWord: true,
                },
            ]}
            structure={ReactComponent}
        />
</div>
);
      `,
   ];
}
