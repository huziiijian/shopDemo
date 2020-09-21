import React, { FC } from "react";
import style from '../style/index.less'

const Cards: FC<{
   orderLists: Array<{
      id: number,
      imgUrl: string,
      info: string
   }>
}> = (props) => {

   return (
      <div className={style.allOrders}>
         {props.children}
         <div className={style.orderType}>
            {props.orderLists.map((item) =>
               <div className={style.item} key={item.id}>
                  <img src={item.imgUrl} className={style.icon} />
                  <p className={style.word}>{item.info}</p>
               </div>)}
         </div>
      </div>
   )
}

export default Cards;
