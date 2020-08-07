import React, { FC, useState } from "react";
import style from '../style/index.less'

const Goods: FC<{
   checkoutInfo: Array<{
      goodId: number;
      goodImg: string;
      goodPrice: number;
      selectedNum: number;
      title: string;
      des: string;
      unit: string;
      isSelected?: boolean | undefined;
  }>,
   checkoutTypeCount:number
}> = (props) => {

   return (
      <div className={style.goods}>
         <div className={style.imgs}>
            {props.checkoutInfo.map((item) =>
               <img className={style.img} key={item.goodId}
                  src={item.goodImg} />)
            }
         </div>
         <div className={style.numInfo}>
            <span className={style.span}>共{props.checkoutTypeCount}件</span>
            <img className={style.img}
               src='https://image-c.weimobwmc.com/wrz/beedd66148784f8c923166eacfb481fa.png' />
         </div>
      </div>
   )
}

export default Goods;
