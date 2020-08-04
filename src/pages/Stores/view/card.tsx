import React, { FC } from "react";
import style from '../style/index.less'

const Card: FC<{
   imgUrl:string,
   title:string,
   word:string,
   distance:string,
   onJump:(key:string)=>void
}> = (props) => {

   return (
      <div className={style.card} onClick={()=>props.onJump(props.title)}>
         <img className={style.img}
            src={props.imgUrl} />
         <div className={style.info}>
            <div className={style.words}>
               <p className={style.title}>{props.title}</p>
               <p className={style.word}>{props.word}</p>
            </div>
            <div className={style.distanceInfo}>
               <img className={style.icon}
                  src='https://image-c.weimobwmc.com/wrz/c5d01b2cf84c4138b019728973f3496b.png' />
               <p className={style.distance}>{props.distance}km</p>
            </div>
         </div>
      </div>
   )
}

export default Card;
