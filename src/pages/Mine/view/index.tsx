import React, {FC} from "react";
import { observer } from "mobx-react";



import Model from '../model'
interface Props {
    store: Model
}

const View:FC<Props> = observer((props) => {

    return (
    <div>base</div>
    );
})

export default View;
