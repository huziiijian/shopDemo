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
      <div className={style.find}>
         <div className={style.title}>发现</div>
         <div className={style.type}>
            <div className={style.updates}>
               <div className={style.typeChoose}>
                  <button className={style.graph}>
                     <img src='https://image-c.weimobwmc.com/wrz/5b71b6f153b447f88404cbf92c7ccbbd.png' className={style.icon} />
                  </button>
                  <span className={style.info}>动态</span>
               </div>
            </div>
            <div className={style.interact}>
               <div className={style.typeChoose}>
                  <button className={style.graph}>
                     <img src='https://image-c.weimobwmc.com/wrz/bac5d330c705405a89a5cc0cf4c0d69f.png' className={style.icon} />
                  </button>
                  <span className={style.info}>互动</span>
               </div>
            </div>
         </div>
         <div className={style.hotTopic}>
            <img src='https://image-c.weimobwmc.com/wrz/95b96bfbbe8d43e9a70760b11f388ab9.png' className={style.icon} />
            <span className={style.info}>热门话题</span>
         </div>
         <div className={style.topics}>
            {props.store.cardInfo.map((item) =>
               <Card id={item.id} imgUrl={item.imgUrl} title={item.title} key={item.id}/>
               )}
         </div>
      </div>
   );
})

export default View;
