import React, { FC } from "react";
import { observer } from "mobx-react";
import style from '../style/index.less'
import Type from './type'
import Button from './buttons'
import Card from './card'


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
                  {props.store.cardsInfo.map((item) =>
                     <Card imgUrl={item.imgUrl} title={item.title} words={item.words}
                        price={item.price} unit={item.unit} key={item.id} />)}
               </div>
            </div>
         </div>
      </div>
   );
})

export default View;
