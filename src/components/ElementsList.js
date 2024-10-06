import plus_icon from "../assets/images/Plus.png";
import "./ElementsList.css";

import Separator from "./Separator";
import IconButton from "./Inputs/IconButton";

function ElementList({ title, create_callback, children}) {
    return (
        <div className="element-list">
            <div className="element-list-header">
                <span className="element-list-header-title">{title}</span>
                <IconButton callback={create_callback} icon={plus_icon} />
            </div>
            <Separator />
            
            {children}
        </div>
    );
}

export default ElementList;