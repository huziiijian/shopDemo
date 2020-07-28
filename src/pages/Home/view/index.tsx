import React, {FC} from "react";
import { observer } from "mobx-react";
import Login from './Login'
import style from '../style/index.less';


import Model from '../model'
interface Props {
    store: Model
}

const View:FC<Props> = observer((props) => {

    return (
       <div>
          <Login placeholder={props.store.placeholder}/>
       </div>
    );
})

export default View;
