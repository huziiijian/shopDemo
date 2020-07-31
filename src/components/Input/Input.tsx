import React from 'react';
import style from './style/index.less';


const Input: React.FC<{
   placeholder: string,
   message: string,
   type: string,
   getInputValue: (e: string, type:string) => void
}> = (props) => {

   return (
      <div className={style.input}>
         <div className={style[`${props.type}Icon`]} />
         <div className={style.inputArea}>
            <input className={style.inputBox} placeholder={props.placeholder}
               onChange={(e) => props.getInputValue(e.target.value,props.type)} />
            {props.message ? <span className={style.message} onClick={() => console.log(props.message)}>
               {props.message}</span> : null}
         </div>
      </div>
   )
}

export default Input;