import React, { FC } from "react";
import style from './style/index.less'


const Card: FC<{
   allLikeCards: Array<{
      id: number
      imgUrl: string,
      title: string,
      intro: string,
      price: number
   }>
}> = (props) => {

   return (
      <div className={style.allLikeCards}>
         {props.allLikeCards.map((item) =>
            <div className={style.allLikeCard} key={item.id}>
               <img src={item.imgUrl} />
               <p>{item.title}</p>
               <span>{item.intro}</span>
               <div className={style.shoppingCart}>
                  <div className={style.Price}>
                     <p className={style.price}>{`￥${item.price}`}</p>
                     <p className={style.unit}>{`/盒`}</p>
                  </div>
                  <button>
                     <img src='https://image-c.weimobwmc.com/wrz/308f9cf49a724dd7855211156bc1e8ce.png' />
                  </button>
               </div>
            </div>
         )}
      </div>
   )
}

export default Card;
