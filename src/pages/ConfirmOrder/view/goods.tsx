import React, { FC, useState } from "react";
import style from '../style/index.less'

const Goods: FC<{
   imgs: Array<{
      id: number,
      url: string
   }>
}> = (props) => {

   return (
      <div className={style.goods}>
         <div className={style.imgs}>
            {props.imgs.map((item) =>
               <img className={style.img} key={item.id}
                  src={item.url} />)
            }
         </div>
         <div className={style.numInfo}>
         <span className={style.span}>共{props.imgs.length}件</span>
            <img className={style.img}
               src='https://image-c.weimobwmc.com/wrz/beedd66148784f8c923166eacfb481fa.png' />
         </div>
      </div>
   )
}

export default Goods;
