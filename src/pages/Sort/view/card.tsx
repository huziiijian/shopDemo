import React, { FC, useState } from "react";
import style from '../style/index.less'

const Card: FC<{
   imgUrl: string,
   title: string,
   words: string,
   price: number,
   unit: string
}> = (props) => {


   return (
      <div className={style.card}>
         <img className={style.img} src={props.imgUrl} />
         <div className={style.info}>
            <p className={style.title}>{props.title}</p>
            <p className={style.words}>{props.words}</p>
            <div className={style.select}>
               <div className={style.Price}>
                  <p className={style.price}>{`￥${props.price}`}</p>
                  <p className={style.unit}>{`/${props.unit}`}</p>
               </div>
               <button className={style.click}>
                  <img className={style.img} src='https://image-c.weimobwmc.com/wrz/308f9cf49a724dd7855211156bc1e8ce.png' />
               </button>
            </div>
         </div>
      </div>
   )
}

export default Card;
