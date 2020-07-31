import React, { FC } from "react";
import style from '../style/index.less'

const GuessLike: FC<{
   guessLikes: {
      id: number,
      type: string,
      info: string
   }[]
}> = (props) => {

   return (
      <div className={style.guessYouLike}>
         {props.children}
         <div className={style.types}>
            {props.guessLikes.map((item) =>
               <div className={style.type} key={item.id}>
                  <p>{item.type}</p>
                  <span>{item.info}</span>
               </div>
            )}
         </div>
      </div>
   )
}

export default GuessLike;
