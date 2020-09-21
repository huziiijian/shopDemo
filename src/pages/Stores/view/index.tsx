import React, { FC } from "react";
import { observer } from "mobx-react";
import style from '../style/index.less'
import Card from './card'

import Model from '../model'
interface Props {
   store: Model
}

const View: FC<Props> = observer((props) => {

   return (
      <div className={style.stores}>
         <div className={style.title}>
            <img src='https://image-c.weimobwmc.com/wrz/9d010e47bed84365b2d0ec1ba7e42512.png'
               className={style.img} onClick={() => props.store.onJump('')} />
            <p className={style.word}>千库门店</p>
         </div>
         <div className={style.cards}>
            {props.store.cardsInfo.map((item)=>
            <Card key={item.id} imgUrl={item.imgUrl} title={item.title}
            word={item.word} distance={item.distance} onJump={props.store.onJump}/>)}
         </div>
      </div>
   );
})

export default View;
