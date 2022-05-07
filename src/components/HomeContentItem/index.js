import style from "@styles/HomeContent.module.scss";

export function HomeContentItem({ title, description }) {
   return (
      <div className={style["container--item"]}>
         <div className={style["container--item__title"]}>
            <h2>{title}</h2>
         </div>
         <div className={style["container--item__description"]}>
            <p>{description}</p>
         </div>
      </div>
   );
}
