import React from 'react';
import style from './style/index.less';


const Button: React.FC<{
   text: string,
   width: string
}> = (props) => {

   return (
      <button style={{width:`${props.width}`}}>{props.text}</button>
   )
}

export default Button;