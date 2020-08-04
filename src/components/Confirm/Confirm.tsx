import React from 'react';
import style from './style/index.less';


const Confirm: React.FC<{
   price:string,
   info:string
}> = (props) => {

   return (
      <div className={style.Confirm}>
         <div className={style.money}>
            <span className={style.words}>支付金额</span>
            <span className={style.price}>￥{props.price}</span>
         </div>
         <button className={style.confirm}>{props.info}</button>
      </div>
   )
}

export default Confirm;