import style from "@styles/Documentation.module.scss";

export function ImageContainer({ src, alt = "XD" }) {
   return (
      <div className={style["container__image"]}>
         <img src={src} alt={alt} />
      </div>
   );
}
