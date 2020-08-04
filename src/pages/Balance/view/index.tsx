import React, { FC, useState } from "react";
import { observer } from "mobx-react";
import style from '../style/index.less'
import Confirm from '../../../components/Confirm/Confirm'


import Model from '../model'
interface Props {
   store: Model
}

const View: FC<Props> = observer((props) => {

   const [focus, setFocus] = useState(1);
   const [check, setCheck] = useState(false)

   return (
      <div className={style.balancePage}>
         <div className={style.title}>
            <img className={style.img} onClick={() => props.store.onJump('')}
               src='https://image-c.weimobwmc.com/wrz/9d010e47bed84365b2d0ec1ba7e42512.png' />
            <p className={style.word}>余额</p>
         </div>
         <div className={style.info}>
            <div className={style.card}>
               <div className={style.showBalance}>
                  <p className={style.word}>账户余额 (元)</p>
                  <p className={style.number}>888.00</p>
               </div>
               <button className={style.withDraw}>
                  <img className={style.icon}
                     src='https://image-c.weimobwmc.com/wrz/53a7c0590ec848949b14aa8e6f55cd03.png' />
                  <span className={style.word}>提现</span>
               </button>
            </div>
            <div className={style.record}>
               <div className={style.purchase}>
                  <button className={style.icon}>
                     <img className={style.img}
                        src='https://image-c.weimobwmc.com/wrz/308f9cf49a724dd7855211156bc1e8ce.png' />
                  </button>
                  <p className={style.word}>购买记录</p>
               </div>
               <div className={style.withDraw}>
                  <button className={style.icon}>
                     <img className={style.img}
                        src='https://image-c.weimobwmc.com/wrz/dca42551906e48e8ae64245cf89c8308.png' />
                  </button>
                  <p className={style.word}>提现记录</p>
               </div>
            </div>
         </div>
         <div className={style.activity}>
            <div className={style.title}>充值享折扣</div>
            <div className={style.cards}>
               <div className={focus === 1 ? style.cardFocus : style.card}
                  onClick={() => setFocus(1)}>
                  <p className={style.words}>充值19得20</p>
               </div>
               <div className={focus === 2 ? style.cardFocus : style.card}
                  onClick={() => setFocus(2)}>
                  <p className={style.words}>充值50得60</p>
               </div>
               <div className={focus === 3 ? style.cardFocus : style.card}
                  onClick={() => setFocus(3)}>
                  <p className={style.words}>充值80得100</p>
               </div>
               <div className={focus === 4 ? style.cardFocus : style.card}
                  onClick={() => setFocus(4)}>
                  <p className={style.words}>充值150得200</p>
               </div>
            </div>
            <div className={style.Agree}>
               <input type='radio' checked={check} onClick={() => setCheck(!check)}
                  onChange={() => null} />
               <span className={style.agree}>阅读并同意</span>
               <span className={style.contract}>《千库网购买协议》</span>
            </div>
         </div>
         <Confirm price={'50'} info={'确认购买'} />
      </div>
   );
})

export default View;
