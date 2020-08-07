import React, { FC, useState } from "react";
import style from '../style/index.less'
import { observer } from "mobx-react";

const Card: FC<{
   goodInfo: {
      goodId: number,
      goodImg: string,
      goodPrice: number,
      selectedNum: number,
      title: string,
      des: string,
      unit: string
   }
   addGoods: (goodId: number, edit: boolean) => void
   onJump: (id: number) => void
}> = observer((props) => {

   const [edit, setEdit] = useState(true)

   return (
      <div className={style.card} onClick={() => props.onJump(props.goodInfo.goodId)}>
         <img className={style.img} src={props.goodInfo.goodImg} />
         <div className={style.info}>
            <p className={style.title}>{props.goodInfo.title}</p>
            <p className={style.words}>{props.goodInfo.des}</p>
            <div className={style.select}>
               <div className={style.Price}>
                  <p className={style.price}>{`￥${props.goodInfo.goodPrice}`}</p>
                  <p className={style.unit}>{`/${props.goodInfo.unit}`}</p>
               </div>
               <button className={props.goodInfo.selectedNum ? style.hadClick : style.click}
                  onClick={(e) => {
                     e.stopPropagation();
                     props.addGoods(props.goodInfo.goodId, edit)
                     setEdit(!edit)
                  }}>
                  <img className={style.img}
                     src='https://image-c.weimobwmc.com/wrz/308f9cf49a724dd7855211156bc1e8ce.png' />
               </button>
            </div>
         </div>
      </div>
   )
})

export default Card;
