import React, { FC, useState } from "react";
import style from '../style/index.less'

const Buttons: FC<{
   cardInfo: {
      id: number,
      orderNo: string,
      status: number,
      imgUrl: string,
      title: string,
      info: string,
      price: number,
      unit: string,
   },
   status:number
}> = (props) => {

   const statusInfo = (status: number): string => {
      if (status === 1) return '待付款'
      if (status === 2) return '待发货'
      if (status === 3) return '待收货'
      if (status === 4) return '待评价'
      return ''
   }

   const buttonInfo = ['取消订单','查看物流','确认收货']

   return (
      props.cardInfo.status === props.status || props.status === 0 ? <div className={style.card}>
         <div className={style.title}>
            <p className={style.orderNo}>{props.cardInfo.orderNo}</p>
            <p className={style.status}>{statusInfo(props.cardInfo.status)}</p>
         </div>
         <div className={style.content}>
            <img src={props.cardInfo.imgUrl}
               className={style.img} />
            <div className={style.info}>
               <p className={style.title}>{props.cardInfo.title}</p>
               <p className={style.words}>{props.cardInfo.info}</p>
               <div className={style.select}>
                  <div className={style.Price}>
                     <p className={style.price}>{`￥${props.cardInfo.price}`}</p>
                     <p className={style.unit}>{`/${props.cardInfo.unit}`}</p>
                  </div>
                  <p className={style.num}>+1</p>
               </div>
            </div>
         </div>
         <div className={style.buttons}>
            <button className={style.buttonLeft}>
               {props.cardInfo.status < 3 ? buttonInfo[0] : buttonInfo[1]}
               </button>
            <button className={style.buttonRight}>
               {props.cardInfo.status < 3 ? buttonInfo[1] : buttonInfo[2]}
               </button>
         </div>
      </div> : null
   )
}

export default Buttons;