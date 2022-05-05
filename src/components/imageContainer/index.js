import style from "@styles/Documentation.module.scss";

export function ImageContainer({ src, alt = "XD" }) {
   return (
      <div className={style["documentation--container__image"]}>
         <img src={src} alt={alt} />
      </div>
   );
}
