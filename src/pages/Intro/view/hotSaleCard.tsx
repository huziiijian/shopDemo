import React, { FC } from "react";
import style from '../style/index.less'


const Card: FC<{
   hotSaleCardInfo: {
      id:number,
      imgUrl: string,
      intro:string,
      newPrice:number,
      oldPrice:number
   }[]
}> = (props) => {

   return (
      <div className={style.swipper}>
         {props.hotSaleCardInfo.map((item) =>
            <div className={style.hotSaleCard} key={item.id}>
               <img src={item.imgUrl} />
               <p>{item.intro}</p>
               <div className={style.shoppingCart}>
                  <div className={style.price}>
                     <p>{`￥${item.newPrice}`}</p>
                     <span>{`￥${item.oldPrice}`}</span>
                  </div>
                  <button><img src='https://image-c.weimobwmc.com/wrz/308f9cf49a724dd7855211156bc1e8ce.png' /></button>
               </div>
            </div>
         )}
      </div>
   )
}

export default Card;
