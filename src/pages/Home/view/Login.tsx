import React from 'react';
import Input from '../../../components/Input/Input'
import style from '../style/card.less';


const Login: React.FC<{
   placeholder:string
}> = (props) => {

   return (
      <div>
         <Input placeholder={props.placeholder}/>
      </div>
   )
}

export default Login;