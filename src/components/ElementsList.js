import plus_icon from "../assets/images/Plus.png";
import "./ElementsList.css";

import Separator from "./Separator";

function ElementList({ tittle, children}) {
    return (
        <div className="element-list">
            <div className="element-list-header">
                <span className="element-list-header-tittle">{tittle}</span>
                <div className="element-list-header-plus">
                    <img src={plus_icon} />
                </div>
            </div>
            <Separator />
            <div className="element-list-body">
                {children}
            </div>
        </div>
    );
}

export default ElementList;