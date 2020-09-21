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
      unit: string,
      isSelected?:boolean
   },
   index: number,
   edit: boolean,
   allSelect: boolean,
   editGood: (id: number, type: string) => void
}> = observer((props) => { // 性能方面，防止父组件渲染的影响。根据实际应用情况决定
   // 注意更改整个view层中state会影响view层渲染时，需要利用observer包裹

   const [touchStart, setTouchStart] = useState(0)
   const changeNum = (type: string) => {
      if (type === 'add') props.editGood(props.goodInfo.goodId, type)
      else props.goodInfo.selectedNum === 0 ? null : props.editGood(props.goodInfo.goodId, type)
   }
   const onTouchEnd = (touchStart: number, touchEnd: number, edit: boolean) => {
      if (edit && touchStart - touchEnd > 140) {
         props.editGood(props.goodInfo.goodId, 'del');
      }
   }
   const selectGood = (select: boolean, goodId: number) => {
      if (!select) {
         props.editGood(goodId, 'select')
      }
      else {
         props.editGood(goodId, 'cancelSelect')
      }
   }

   return props.goodInfo.goodPrice ? ( // 通过一个demo去理解react和mobx管理机制
      <>
         {props.index != 0 ? <div style={{
            borderBottom: "solid 1px rgba(56, 44, 44, 0.28627)"
         }} /> : null}
         <div className={style.card}
            onTouchStart={(e) => setTouchStart(e.touches[0].clientX)}
            onTouchEnd={(e) => onTouchEnd(touchStart, e.changedTouches[0].clientX, props.edit)}>
            <button className={props.goodInfo.isSelected || props.allSelect ?
               style.selected : style.unSelected}
               onClick={() => selectGood(props.goodInfo.isSelected || false, props.goodInfo.goodId)} />
            <img className={style.pic}
               src={props.goodInfo.goodImg} />
            <div className={style.Info}>
               <p className={style.title}>{props.goodInfo.title}</p>
               <p className={style.info}>{props.goodInfo.des}</p>
               <div className={style.select}>
                  <div className={style.priceShow}>
                     <span className={style.price}>{`￥${props.goodInfo.goodPrice}`}</span>
                     <span className={style.unit}>{`/${props.goodInfo.unit}`}</span>
                  </div>
                  <div className={style.selectNum}>
                     <button className={style.minus} onClick={() => changeNum('minus')} ></button>
                     <p className={style.num}>{props.goodInfo.selectedNum}</p>
                     <button className={style.add} onClick={() => changeNum('add')} ></button>
                  </div>
               </div>
            </div>
         </div>
      </>
   ) : null
})

export default Card;
