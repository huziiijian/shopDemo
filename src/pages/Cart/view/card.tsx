import React, { FC, useState } from "react";
import style from '../style/index.less'


const Card: FC<{
   id: number,
   imgUrl: string,
   title: string,
   info: string,
   price: number,
   unit: string
}> = (props) => {

   const [select, setSelect] = useState(false);
   const [selectNum, setSelectNum] = useState(0);
   const changeNum = (type: string) => {
      if (type === 'add') setSelectNum(selectNum + 1)
      else selectNum === 0 ? null : setSelectNum(selectNum - 1)
   }

   return (
      <>
         {props.id != 1 ? <div style={{
            borderBottom: "solid 1px rgba(56, 44, 44, 0.28627)"
         }} /> : null}
         <div className={style.card}>
            <button className={select ? style.selected : style.unSelected}
               onClick={() => setSelect(!select)} />
            <img className={style.pic}
               src={props.imgUrl} />
            <div className={style.Info}>
               <p className={style.title}>{props.title}</p>
               <p className={style.info}>{props.info}</p>
               <div className={style.select}>
                  <div className={style.priceShow}>
                     <span className={style.price}>{`￥${props.price}`}</span>
                     <span className={style.unit}>{`/${props.unit}`}</span>
                  </div>
                  <div className={style.selectNum}>
                     <button className={style.minus} onClick={() => changeNum('minus')} ></button>
                     <p className={style.num}>{selectNum}</p>
                     <button className={style.add} onClick={() => changeNum('add')} ></button>
                  </div>
               </div>
            </div>
         </div>
      </>
   )
}

export default Card;
