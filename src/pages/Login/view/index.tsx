import React, { FC } from "react";
import { observer } from "mobx-react";
import Input from '../../../components/Input/Input'
import style from '../style/index.less';



import Model from '../model'
interface Props {
   store: Model
}

const View: FC<Props> = observer((props) => {


   return (
      <div className={style.login}>
         <div className={style.title}>
            <img src='https://image-c.weimobwmc.com/wrz/50bb261063d64e2ea57a9d174cc73327.png' />
         </div>
         <div className={style.input}>{props.store.inputConfig.map((item) =>
            <Input placeholder={item.placeholder} type={item.type} message={item.message}
               key={item.type} getInputValue={props.store.getInputValue} />)}
         </div>
         <div className={style.click}>
            <button className={style.login} onClick={props.store.Login}>登录</button>
            <p>其他方式登录</p>
            <div className={style.otherWay}>
               <button className={style.weChat} onClick={() => console.log('微信登录')} />
               <button className={style.aliPay} onClick={() => console.log('支付宝登录')} />
            </div>
         </div>
         <div className={style.bottom}>
            <img src='https://image-c.weimobwmc.com/wrz/1094933d2b814faabde081c5fdc89eca.png' />
         </div>
      </div>
   );
})

export default View;
