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

   const [edit, setEdit] = useState(false)

   return (
      <>
         <div className={style.shoppingCart}>
            <div className={style.title}>
               <div className={style.carts}>购物车</div>
               <div className={style.edit} onClick={() => setEdit(!edit)}>
                  {edit ? <strong>进入编辑模式</strong> : '编辑'}
               </div>
            </div>
            <div className={style.cards}>
               {props.store.orderInfo.map((item, index) =>
                  <Card goodInfo={item} key={item.goodId} edit={edit} index={index}
                     editGood={props.store.editGood} allSelect={props.store.allSelect}
                  />)}
            </div>
            <div className={style.guessYouLike}>
               <img className={style.pic}
                  src='https://image-c.weimobwmc.com/wrz/a91207fbeac04948be0dc64fedc43d42.png' />
               <p className={style.word}>猜你喜欢</p>
            </div>
            <GuessLikeCards allLikeCards={props.store.allLikeCards} />
         </div>
         <div className={style.toPay}>
            <div className={style.left}>
               <button className={props.store.allSelect ? style.selected : style.unSelected}
                  onClick={() => props.store.setAllSelect(!props.store.allSelect)} />
               <p className={style.word}>全选</p>
            </div>
            <div className={style.right}>
               <div className={style.price}>
                  <p className={style.title}>总计</p>
                  <p className={style.num}>￥{props.store.getTotal}</p>
               </div>
               <div className={style.click}>
                  <p className={style.btn} onClick={() => props.store.checkoutTypeCount ?
                     props.store.onJump('confirmOrder') : null}>
                     去结算（{props.store.checkoutTypeCount}）
                  </p>
               </div>
            </div>
         </div>
      </>
   );
})

export default View;
