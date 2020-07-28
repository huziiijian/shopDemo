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
      <div>
         {props.store.inputConfig.map((item) =>
            <Input placeholder={item.placeholder} type={item.type} message={item.message} />)}
      </div>
   );
})

export default View;
