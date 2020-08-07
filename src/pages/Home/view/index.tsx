import React, { FC } from "react";
import { observer } from "mobx-react";
import { Route } from 'react-router-dom'
import Sort from '../../Sort'
import Find from '../../Find'
import Cart from '../../Cart'
import Mine from '../../Mine'
import style from '../style/index.less';
import NavBar from './navBar'
import Intro from '../../Intro'


import Model from '../model'
interface Props {
   store: Model
}

const View: FC<Props> = observer((props) => {


   return (
      <div className={style.home}>
         <div className={style.showContent}>
            <Route path="/home/intro" component={Intro} />
            <Route path="/home/sort" component={Sort} />
            <Route path="/home/find" component={Find} />
            <Route path="/home/cart" component={Cart} />
            <Route path="/home/mine" component={Mine} />
         </div>
         <NavBar route={props.store.route} setRoute={props.store.setRoute} goodTypes={1}
         goodTypeCount={props.store.goodTypeCount}/>
      </div>
   );
})

export default View;
