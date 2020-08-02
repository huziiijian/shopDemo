import React, { FC } from "react";
import { observer } from "mobx-react";
import style from '../style/index.less'
import Type from './type'
import Button from './buttons'


import Model from '../model'
interface Props {
   store: Model
}

const View: FC<Props> = observer((props) => {


   return (
      <div className={style.sort}>
         <input className={style.search}
            placeholder={`                                搜索`}>
         </input>
         <div className={style.Sales}>
            <Type typeLists={props.store.typeLists}
               selected={props.store.selected} changeSeleted={props.store.changeSeleted} />
            <div className={style.show}>
               <Button typeLists={props.store.typeLists}
                  selected={props.store.selected} changeSeleted={props.store.changeSeleted} />
               <div className={style.goods}>
                  <div>卡片</div>
               </div>
            </div>
         </div>
      </div>
   );
})

export default View;
