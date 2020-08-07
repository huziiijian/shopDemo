import React, { FC } from "react";
import style from '../style/index.less'

const Buttons: FC<{
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
      <div className={style.buttons}>
         {props.typeLists.map((item) => {
            let select = false;
            props.selected.forEach((seleItem) => {
               select = ((seleItem.id === item.id) ? seleItem.selected : select);
            })
            return <button key={item.id} onClick={() => props.changeSeleted(item.id)}
               className={select ? style.focusItem : style.unFocusItem} >
               <p className={style.word}>
                  {item.title}
               </p>
            </button>
         }
         )}
      </div>
   )
}

export default Buttons;
