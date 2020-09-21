import React, { FC } from "react";
import style from '../style/index.less'


const Services: FC<{
   typeInfo: {
      id: number
      imgUrl: string,
      name: string
   }[]
}> = (props) => {

   return (
      <div className={style.services}>
         {props.typeInfo.map((item) =>
            <div className={style.serviceType} key={item.id}>
               <img src={item.imgUrl} />
               <p>{item.name}</p>
            </div>)}
      </div >
   )
}

export default Services;
