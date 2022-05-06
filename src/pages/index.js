import { Home } from "@templates/home";

export default function index({ setSLettersOpts, scrollPosition, callback }) {
   return <Home 
      setSLettersOpts={setSLettersOpts}
      scrollPosition={scrollPosition}
      callback={callback}
   />;
}