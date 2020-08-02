import React, { FC } from "react";
import { observer } from "mobx-react";
import style from '../style/index.less'
import Orders from './orderLists'
import Service from './service'


import Model from '../model'
interface Props {
   store: Model
}

const View: FC<Props> = observer((props) => {

   return (
      <>
         <div className={style.header}>
            <div className={style.userInfo}>
               <button className={style.avatar} />
               <p className={style.title}>千库网</p>
               <button className={style.button}>普通用户</button>
               <img className={style.edit} src='https://image-c.weimobwmc.com/wrz/8b356d0673784b53a6d282ec3d4509c6.png' />
            </div>
            <div className={style.ads}>
               <div className={style.luckyMoney}>
                  <img src="https://image-c.weimobwmc.com/wrz/b4bfd20d68da484395920f837df0106b.png" alt="" className={style.icon} />
                  <p className={style.info}>新人邀请好友注册，做任务红包</p>
               </div>
               <div className={style.member}>
                  <p className={style.title}>千库会员</p>
                  <p className={style.info}>开通即可享受权益</p>
                  <button className={style.button}>立即开通</button>
               </div>
            </div>
            <div className={style.profit}>
               <div className={style.item}>
                  <p className={style.num}>0</p>
                  <p className={style.word}>余额</p>
               </div>
               <div className={style.cut} />
               <div className={style.item}>
                  <p className={style.num}>20</p>
                  <p className={style.word}>积分</p>
               </div>
               <div className={style.cut} />
               <div className={style.item}>
                  <p className={style.num}>0</p>
                  <p className={style.word}>红包</p>
               </div>
            </div>
         </div>
         <Orders orderLists={props.store.orderLists}>
            <div className={style.title}>
               <p className={style.myOrder}>我的订单</p>
               <p className={style.viewOrders}>查看全部订单</p>
            </div>
         </Orders>
         <Service serviceLists={props.store.serviceLists}>
            <div className={style.title}>
               <p className={style.myOrder}>我的服务</p>
            </div>
         </Service>
      </>
   );
})

export default View;
