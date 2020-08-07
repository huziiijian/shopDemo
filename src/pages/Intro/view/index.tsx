import React, { FC, useState } from "react";
import { observer } from "mobx-react";
import Model from '../model'
import style from '../style/index.less'
import Services from './services'
import SaleCard from './hotSaleCard'
import GuessLike from './guessLikes'
import GuessLikeCards from '../../../components/LikeCrads/Card'
import Carousel from './carousel'
interface Props {
   store: Model
}

const View: FC<Props> = observer((props) => {


   return (
      <div className={style.intro}>
         <div className={style.header}>
            <div className={style.searchBar}>
               <img src='https://image-c.weimobwmc.com/wrz/fd000b4fb6264b0f96dae2ae8ea75e52.png' />
               <span>上海市</span>
               <img className={style.switch}
                  src='https://image-c.weimobwmc.com/wrz/e0e76c8fef8c4c7ea16dcbde757d99c4.png' />
               <input placeholder={'      搜索商家或商品名称'} className={style.search} />
            </div>
            <Carousel imgUrl={props.store.imgUrl}/>
            <div className={style.switchShop}>
               <p>{props.store.title}</p>
               <span onClick={() => props.store.onJump('stores')}>切换门店</span>
               <img src='https://image-c.weimobwmc.com/wrz/bb87bbb6046c46fc8edf6c9f70435adf.png' />
            </div>
         </div>
         <Services typeInfo={props.store.typeInfo} />
         <div className={style.ads}>
            <div className={style.commit}>
               <div className={style.item}>
                  <img src='https://image-c.weimobwmc.com/wrz/eed0d09204464caf9c91c72eefeaa5f2.png' />
                  <p>无理由退货</p>
               </div>
               <div className={style.item}>
                  <img src='https://image-c.weimobwmc.com/wrz/becb8950f2d540cdbc758578827ae08c.png' />
                  <p>同城0元邮</p>
               </div>
               <div className={style.item}>
                  <img src='https://image-c.weimobwmc.com/wrz/b33d4cca8d57431c87a62acf02f730fe.png' />
                  <p>质量把控好</p>
               </div>
            </div>
            <img src='https://image-c.weimobwmc.com/wrz/b20230bb6360490699e04f7d600c2a2d.png' />
            <div className={style.hotSales}>
               <img src='https://image-c.weimobwmc.com/wrz/427f23a23a9f453580e8f556d7d05b2c.png' />
               <SaleCard hotSaleCardInfo={props.store.hotSaleCardInfo} />
            </div>
         </div>
         <GuessLike guessLikes={props.store.guessLikes}>
            <div className={style.allGoods}>
               <p>全部</p>
               <button>猜你喜欢</button>
            </div>
         </GuessLike>
         <GuessLikeCards allLikeCards={props.store.allLikeCards} />
      </div>
   );
})

export default View;
