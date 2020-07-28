import React from 'react';
import style from './style/index.less';
import {Button} from 'antd'


const Input: React.FC<{
   placeholder: string,
   message:string,
   type:string
}> = (props) => {

   return (
      <div className={style.input}>
         <div className={style[`${props.type}Icon`]}/>
         <div className={style.inputArea}>
            <input className={style.inputBox} placeholder={props.placeholder} />
            {props.message ? <span className={style.message}>{props.message}</span> : null}
         </div>
      </div>
   )
}

export default Input;