import React, { FC, useState } from "react";
import style from '../style/index.less'
import Services from "./services";


const Carousel: FC<{
   imgUrl:Array<string>
}> = (props) => {
   
   const [touchStart, setTouchStart] = useState(0);
   let [index,setIndex] = useState(1)
   const onTouchEnd = (touchStart: number, touchEnd: number) => {
      if (touchStart - touchEnd > 100) {
         index > 1 ? setIndex(0) : setIndex(index + 1);
      }
      if (touchStart - touchEnd < -100) {
         index < 1 ? setIndex(2) : setIndex(index - 1);
      }
   }

   return (
      <div className={style.carousel}>
         <div className={style.imgs} onTouchStart={(e) => setTouchStart(e.touches[0].clientX)}
            onTouchEnd={(e) => onTouchEnd(touchStart, e.changedTouches[0].clientX)}>
            <img src={index === 0 ? props.imgUrl[2] : props.imgUrl[index - 1]} />
            <img src={props.imgUrl[index]} />
            <img src={index === 2 ? props.imgUrl[0] : props.imgUrl[index + 1]} />
         </div>
         <div className={style.order}>
            <button className={index === 0 ? style.currentImg : style.pastImg}></button>
            <button className={index === 1 ? style.currentImg : style.pastImg}></button>
            <button className={index === 2 ? style.currentImg : style.pastImg}></button>
         </div>
      </div>
   )
}

export default Carousel;
