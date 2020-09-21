import React, { FC, useState } from "react";
import { observer } from "mobx-react";
import style from '../style/index.less'
import Card from './card'

import Model from '../model'
interface Props {
   store: Model
}

const View: FC<Props> = observer((props) => {

   const [status, setStatus] = useState(0)

   return (
      <div className={style.myOrders}>
         <div className={style.header}>
            <div className={style.title}>
               <img src='https://image-c.weimobwmc.com/wrz/9d010e47bed84365b2d0ec1ba7e42512.png'
                  className={style.img} onClick={() => props.store.onJump('')} />
               <p className={style.word}>我的订单</p>
            </div>
            <div className={style.navbar}>
               <p className={status === 0 ? style.itemFocus : style.itemUnFocus}
                  onClick={() => setStatus(0)}>
                  全部
                  </p>
               <p className={status === 1 ? style.itemFocus : style.itemUnFocus}
                  onClick={() => setStatus(1)}>
                  代付款
                  </p>
               <p className={status === 2 ? style.itemFocus : style.itemUnFocus}
                  onClick={() => setStatus(2)}>
                  代发货
               </p>
               <p className={status === 3 ? style.itemFocus : style.itemUnFocus}
                  onClick={() => setStatus(3)}>
                  待收货
               </p>
               <p className={status === 4 ? style.itemFocus : style.itemUnFocus}
                  onClick={() => setStatus(4)}>
                  待评价
               </p>
            </div>
         </div>
         <div className={style.cards}>
            {props.store.cardsInfo.map((item) =>
               <Card cardInfo={item} key={item.id} status={status} />)}
         </div>
      </div>
   );
})

export default View;
