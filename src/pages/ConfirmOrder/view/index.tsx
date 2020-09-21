import React, { FC, useState } from "react";
import { observer } from "mobx-react";
import style from '../style/index.less'
import Goods from './goods'
import Confirm from '../../../components/Confirm/Confirm'

import Model from '../model'
interface Props {
   store: Model
}

const View: FC<Props> = observer((props) => {

   const [selectTime, setSelectTime] = useState(false);
   const [time, setTime] = useState('选择送达时间')
   const chooseTime = (time: string) => {
      setTime(time)
      setSelectTime(false)
   }

   return (
      <div className={style.confirmOrder}>
         <div className={style.title}>
            <img className={style.img} onClick={() => props.store.onJump('')}
               src='https://image-c.weimobwmc.com/wrz/9d010e47bed84365b2d0ec1ba7e42512.png' />
            <p className={style.word}>确认订单</p>
         </div>
         <div className={style.addAddress}>
            <div className={style.info}>
               <img className={style.img}
                  src='https://image-c.weimobwmc.com/wrz/373286f07ec043139aa0a965d603e7f0.png' />
               <p className={style.word}>请新增收货地址</p>
            </div>
            <img className={style.img}
               src='https://image-c.weimobwmc.com/wrz/beedd66148784f8c923166eacfb481fa.png' />
         </div>
         <div className={style.addTime}>
            <div className={style.infoLeft}>
               <img className={style.img}
                  src='https://image-c.weimobwmc.com/wrz/d7557942188a42ecb330a826a1823e6e.png' />
               <p className={style.word}>配送时间</p>
            </div>
            <div className={style.infoRight}>
               <p className={style.word} onClick={() => setSelectTime(!selectTime)}>{time}</p>
               <img className={style.img}
                  src='https://image-c.weimobwmc.com/wrz/beedd66148784f8c923166eacfb481fa.png' />
            </div>
         </div>
         <Goods checkoutInfo={props.store.checkoutInfo} checkoutTypeCount={props.store.checkoutTypeCount} />
         <div className={style.totalPrice}>
            <span className={style.word}>总计：</span>
            <span className={style.price}>￥{props.store.getTotal}</span>
         </div>
         <div className={style.addInvoice}>
            <p className={style.word}>发票</p>
            <div className={style.infoRight}>
               <p className={style.word}>不开发票</p>
               <img className={style.img}
                  src='https://image-c.weimobwmc.com/wrz/beedd66148784f8c923166eacfb481fa.png' />
            </div>
         </div>
         {selectTime ? <input className={style.selectTime} type='date' onChange={(e) => chooseTime(e.target.value)} /> : null}
         <Confirm price={props.store.getTotal + ''} info={'提交订单'} />
      </div>
   );
})

export default View;
