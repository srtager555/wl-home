import { useEffect } from "react";

import { TitleContainer } from "@components/titleContainer";
import { ParagraphContainer as Parag } from "@components/paragraphContainer";
import { ImageContainer } from "@components/imageContainer";
import { CodeContainer } from "@components/codeContainer";

import style from "@styles/Documentation.module.scss";

import { SectionContainerDocs } from "../../components/SectionContainerDocs";

export function Documentation({ callback, anchorRef, setSLettersOpts }) {
   callback();

   function scrollToTop() {
      window.scroll(0, 0);
   }

   useEffect(() => {
      scrollToTop();
      document.body.classList = "";
      setSLettersOpts({
         Slide1: [false, false],
         Slide2: [false, false],
         Slide3: [false, false],
         Slide4: [false, false],
         Slide5: [false, false],
         Slide6: [false, false],
      });
   }, []);

   return (
      <div className={style["documentation--container"]}>
         <SectionContainerDocs
            anchorRef={anchorRef}
            sectionClass="getting-started"
         >
            <TitleContainer title="Getting startted" />
            <Parag text={`Wrapping Letters is easy to use!.`} />
            <CodeContainer
               code={`import React from "react";
import WrappingLetters from "wrapping-letters-react";


function App() {
  return <WrappingLetters  />;
}

export default App;`}
            />
            <Parag
               text={`Wrapping Letters is a component for react with the goal of to simplify the job to wrap letters, The component when is initialization without props, it returned a default word with the default: Hello World !!! <3`}
            />
            <Parag
               text={`The component <WrappingLetters /> always returns each letter of the word or phrase within a <span /> each letter.`}
            />
            <Parag
               text={`!IMPORTANT The component only returns the single letters, they are not inside any extra tag.`}
            />
            <CodeContainer
               code={`<span>H</span>
<span>e</span>
<span>l</span>
<span>l</span>
<span>o</span>
<span> </span>
/..
`}
            />
            <Parag text="If you want modifies the word, call the prop 'word', this prop only accept strings" />

            <CodeContainer
               code={`<WrappingLetters word="I'm the new word" />`}
            />

            <Parag text="The return is similar to the lated example." />
            <Parag text="Well, with this you can work with wrapping letters, but you want learn..." />
         </SectionContainerDocs>

         <SectionContainerDocs
            anchorRef={anchorRef}
            sectionClass="word-options"
         >
            <TitleContainer title="How to custom the wrap? # WordOptions" />

            <Parag text="Any project has a different problem, a simple wrapp is not enough, you want to customize the wrap, you can do it with the prop 'wordOptions'" />
            <Parag text="WordOptions is the manager of the wrap, any customizations rotate in it. Is easy to use:" />

            <CodeContainer code={`<WrappingLetters wordOptions={[{...}]} />`} />

            <Parag text="WordOptions has a serie of props to you help to customize the wrap:" />

            <TitleContainer title="{ ClassToAdd: <String> }" type="h3" />
            <Parag text="The work of ClassToAdd is add a general class to each element, this property chaged when Structure is called(In the section of structe has more info to about it). " />

            <CodeContainer
               code={`<WrappingLetters 
   wordOptions={[{
      ClassToAdd: "my-class",
   }]} 
/>`}
            />

            <TitleContainer title="{ SelectClass: <Object> }" type="h3" />
            <Parag text="SelecClass is your best friend when you need add a class special to a particular letter, word or phrase." />

            <CodeContainer
               code={`<WrappingLetters 
   wordOptions={[{
      word: "I have lag, my ping is up to 300ms"
      ClassToAdd: "my-class",
      SelectClass: {
         wordToSearch: "ping",
         classToAdd: "Im-the-new-class",
         spaceBetweenWord: false,
      },
   }]} 
/>`}
            />

            <TitleContainer title="wordToSearch: <String>" type="h4" />
            <Parag text="Is the word to search, only accept strings for now!." />

            <TitleContainer title="classToAdd: <String>" type="h4" />
            <Parag text="Is the class to add a the <span>" />

            <TitleContainer title="spaceBetweenWord: <Boolean>" type="h4" />
            <Parag text="Is the a conditional for the search (default is false)." />

            <Parag text='For example: wordToSearch: "ping" has the word "ping" but the algorithm can search for a word within other words and also being alone, spaceBeetwenWord in true only allows searching for the word alone, in false searches everywhere' />

            <TitleContainer title="!IMPORTANT" type="h4" />
            <Parag text='"SelectClass" look for all the times the word is repeated, spaceBetweenWord is important for avoiding problems' />

            <TitleContainer title="{ PerWord: <Boolean> }" type="h3" />
            <Parag text="PerWord is an attribute of wordOptions to wrap each word instead of wrapping each letter (default is false)" />

            <CodeContainer
               code={`<WrappingLetters 
   wordOptions={[{
      word: "I have lag, my ping is up to 300ms"
      PerWord: true,
   }]} 
/>`}
            />

            <Parag text="the return is:" />

            <CodeContainer
               code={`<span>I</span>
<span>have </span>
<span>lag, </span>
<span>my</span>
/...
`}
            />
         </SectionContainerDocs>

         <SectionContainerDocs anchorRef={anchorRef} sectionClass="structure">
            <TitleContainer title="How to add a special # structure" />
            <Parag text="Sometimes a special structure is needed for the letters or words to be wrapped, structure is the solution of this problem." />

            <Parag text="Is so easy to use:" />

            <CodeContainer
               code={`import React from 'react'
import WrappingLetters from 'wrapping-letters-react'

function App(){
    return(
        <WrappingLetters 
            word='This is the sentence to wrapped'
            wordOptions={[
                {
                    SelectClass: {
                        wordToSearch: 'sentence',
                        ClassToAdd: 'specialClass',
                        spaceBeetwenWord: true,,
                    },
                }
            ]}
            structure={ReactComponent}
        />
    )
}`}
            />
            <Parag text="structure modify the wrapper for more flexibility to do animations or whatever you can think of." />

            <CodeContainer 
               code={`// React component example

function ReactComponent({letter, cssClass, ...props}) {
    return(
        <div 
            className={\`container-letter \${cssClass}\`} 
            {...props}
        >
            <span className="letter-wrapp">{letter}</span>
        </div>
    )
} `}
         />

         <Parag text="Being able to make a personalized structure opens a new sea of ​​possibilities for the use of Wrapping-letters" />
         
         <TitleContainer title="!IMPORTANT" type="h4" />
         <Parag text="It is suggested to put out cssClass of the descontruction, if anyways not used, for evit syntax errors." />

         <TitleContainer title="The list of element to send a the component for now is small:" type="h4" />
         
         <TitleContainer title="letter" type="h4" />
         <Parag text="Is the letter to be wrapped." />
         
         <TitleContainer title="cssClass" type="h4" />
         <Parag text="Is the special css class" />

         <TitleContainer title="!IMPORTANT" type="h4" />
         <Parag text=" The elements under this line, cannot be assigned for their key name, only can be used with the deconstruction." />

         <TitleContainer title="key" type="h4" />
         <Parag text="Is the the key :3 ({wrappedElement}-{indexNumber})" />

         <TitleContainer title="!IMPORTANT" type="h4" />
         <Parag text="The classToAdd attribute of wordOptions, is disable when the structure is active, if you want a css class use className in the component." />

         <Parag text="Thanks for you visit :v" />
         </SectionContainerDocs>
      </div>
   );
}
