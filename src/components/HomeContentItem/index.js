import style from "@styles/HomeContent.module.scss";

export function HomeContentItem({ title, description }) {
   return (
      <div className={style["HomeContentItem__container"]}>
         <div className={style["HomeContentItem__container--title"]}>
            <h2>{title}</h2>
         </div>
         <div className={style["HomeContentItem__container--description"]}>
            <p>{description}</p>
         </div>
      </div>
   );
}
