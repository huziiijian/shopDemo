import React from 'react';
import style from '../style/card.less';


const Input: React.FC<{
   placeholder:string
}> = (props) => {

   return (
      <div>
         {props.placeholder}
      </div>
   )
}

export default Input;