import React, { FC } from "react";
import { observer } from "mobx-react";



import Model from '../model'
interface Props {
   store: Model
}

const View: FC<Props> = observer((props) => {

   function onChange() {
      console.log('a, b, c');
   }
   console.log('sort')

   return (
      <div>
         <p>dd</p>
         <p>dd</p>
         <p>dd</p>
         <p>dd</p>
         <p>dd</p>
         <p>dd</p>
         <p>dd</p>
         <p>dd</p>
         <p>dd</p>
         <p>dd</p>
         <p>dd</p>
         <p>dd</p>
      </div>
   );
})

export default View;
