import React, { FC } from "react";
import { observer } from "mobx-react";
import style from '../style/index.less'


import Model from '../model'
interface Props {
   store: Model
}

const View: FC<Props> = observer((props) => {

   return (
      <div className={style.goodInfo}>
         <div className={style.goodShow}>
            <div className={style.header}>
               <img src='https://image-c.weimobwmc.com/wrz/9430c13f0e104ec39f94bb877118533e.png'
                  className={style.img} onClick={() => props.store.onJump('')} />
               <img src='https://image-c.weimobwmc.com/wrz/6352a1e7775047f79d9e2ed7a46ef1e0.png'
                  className={style.img} />
            </div>
            <div className={style.carousel}>
               <img className={style.img}
                  src='https://image-c.weimobwmc.com/wrz/dcc75c9ca80f4f08b42eb637ba56799c.png' />
               <div className={style.info}>
                  <p className={style.title}>
                     社会格子衬衫女韩范欧洲站欧美时尚个性百搭闲条纹2018春
               </p>
                  <div className={style.price}>
                     <div className={style.num}>￥16</div>
                     <div className={style.unit}>/盒</div>
                  </div>
               </div>
            </div>
            <div className={style.order}>
               <img className={style.img}
                  src='https://image-c.weimobwmc.com/wrz/b1cc1e1629904b158c323795082e1ff8.png' />
               <p className={style.word}>现在下单，最快今日9:00-18:00送达（免运费）</p>
            </div>
            <div className={style.lists}>
               <div className={style.list}>
                  <p className={style.word}>产品参数</p>
                  <img className={style.img}
                     src='https://image-c.weimobwmc.com/wrz/beedd66148784f8c923166eacfb481fa.png' />
               </div>
               <div className={style.list}>
                  <p className={style.word}>商品评价</p>
                  <div className={style.select}>
                     <p className={style.word}>666人给出了评价</p>
                     <img className={style.img}
                        src='https://image-c.weimobwmc.com/wrz/beedd66148784f8c923166eacfb481fa.png' />
                  </div>
               </div>
               <div className={style.list}>
                  <p className={style.word}>搭配选择</p>
                  <div className={style.select}>
                     <p className={style.word}>请选择搭配</p>
                     <img className={style.img}
                        src='https://image-c.weimobwmc.com/wrz/beedd66148784f8c923166eacfb481fa.png' />
                  </div>
               </div>
            </div>
         </div>
         <div className={style.buttons}>
            <button className={style.buttonLeft}>加入购物车</button>
            <button className={style.buttonRight}>立即购买</button>
         </div>
      </div>
   );
})

export default View;
