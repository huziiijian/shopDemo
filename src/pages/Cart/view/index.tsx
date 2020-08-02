import React, { FC, useState } from "react";
import { observer } from "mobx-react";
import style from '../style/index.less'
import Card from './card'
import GuessLikeCards from '../../../components/LikeCrads/Card'

import Model from '../model'
interface Props {
   store: Model
}

const View: FC<Props> = observer((props) => {


   return (
      <div className={style.shoppingCart}>
         <div className={style.title}>
            <div className={style.carts}>购物车</div>
            <div className={style.edit}>编辑</div>
         </div>
         <div className={style.cards}>
            {props.store.cardInfo.map((item) =>
               <Card id={item.id} imgUrl={item.imgUrl} title={item.title}
                  info={item.info} price={item.price} unit={item.unit} key={item.id}/>)}
         </div>
         <div className={style.guessYouLike}>
            <img className={style.pic}
            src= 'https://image-c.weimobwmc.com/wrz/782c1fa121c2455a9df3edd5ce190f8d.png'/>
            <p className={style.word}>猜你喜欢</p>
         </div>
         <GuessLikeCards allLikeCards={props.store.allLikeCards}/>
      </div>
   );
})

export default View;
