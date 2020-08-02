import React, { FC } from "react";
import style from '../style/index.less'


const Card: FC<{
      id: number
      imgUrl: string,
      title: string
}> = (props) => {

   const Style = {
      background: `url(${props.imgUrl}) no-repeat`,
      transform: 'scale(0.95)',
      backgroundSize: '100vw',
      height: '45vw',
      borderRadius: '10px'
   }

   return (
      <div className={style.card}>
         <div className={style.intro}>
            <img src='https://image-c.weimobwmc.com/wrz/a177bbe2bf1b4991a43c36b97114dc76.png' className={style.icon} />
            <p className={style.word}>{props.title}</p>
         </div>
         <div style={Style} />
      </div>
   )
}

export default Card;
