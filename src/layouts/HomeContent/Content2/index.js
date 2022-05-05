import WL from "wrapping-letters-react";

import style from "@styles/HomePageSections.module.scss";

function Container() {

   return (
      <div className={style["letter-container"]}>
         <WL
            word="Add general class and special class"
            wordOptions={[
               {
                  ClassToAdd: style["letter-wrapp"],

                  SelectClass: {
                     wordToSearch: "class",
                     classToAdd: style["bold-letter"],
                  },
               },
            ]}
         />
      </div>
   );
}

export function Content2() {
   return [
      [
         <Container />,
         "Are you need CSS class in the letters?, No problem with wordOptions.",
      ],
      `
import WL from "wrapping-letters-react";

const letterContainer = useRef(null);

return (
    <div className="letter-container">
        <WL
            word="Add general class and special class"
            wordOptions={[
                {
                    ClassToAdd: "letter-wrapp",

                    SelectClass: {
                        wordToSearch: "class",
                        classToAdd: "bold-letter",
                    },
                },
            ]}
        />
    </div>
);
      `,
   ];
}
