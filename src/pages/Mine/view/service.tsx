import React, { FC } from "react";
import style from '../style/index.less'

const Cards: FC<{
   serviceLists: Array<{
      id: number,
      imgUrl: string,
      info: string
   }>
}> = (props) => {

   return (
      <div className={style.myServices}>
         {props.children}
         <div className={style.serviceType}>
            {props.serviceLists.map((item) =>
               <div className={style.item} key={item.id}>
                  <img src={item.imgUrl} className={style.icon} />
                  <p className={style.word}>{item.info}</p>
               </div>)}
         </div>
      </div>
   )
}

export default Cards;
