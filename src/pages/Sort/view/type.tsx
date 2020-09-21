import React, { FC, useState } from "react";
import style from '../style/index.less'

const GuessLike: FC<{
   typeLists: Array<{
      id: number,
      title: string
   }>,
   selected: Array<{
      id: number,
      selected: boolean
   }>,
   changeSeleted: (id: number) => void
}> = (props) => {

   return (
      <div className={style.type}>
         {props.typeLists.map((item) => {
            let select = false;
            props.selected.map((seleItem) => {
               select = (seleItem.id === item.id) ? seleItem.selected : select;
            })
            return <div key={item.id} onClick={(() => props.changeSeleted(item.id))}
               className={select ? style.focusItem : style.unFocusItem} >
               <p className={style.word}
                  style={item.id === 1 ? { fontSize: '20px' } : {}}>
                  {item.title}
               </p>
            </div>
         }
         )}
      </div>
   )
}

export default GuessLike;
