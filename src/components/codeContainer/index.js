import style from "@styles/Documentation.module.scss";

export function CodeContainer({ code }) {
   return (
      <div className={style["documentation--container__code"]}>
         <pre>
            <code>{code}</code>
         </pre>
      </div>
   );
}
