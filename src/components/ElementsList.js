import plus_icon from "../assets/images/Plus.png";
import "./ElementsList.css";

import Separator from "./Separator";
import IconButton from "./Inputs/IconButton";
import { useEffect } from "react";

function ElementList({ title, onAddBtn, children}) {
    return (
        <div className="element-list">
            <div className="element-list-header">
                <span className="element-list-header-title">{title}</span>
                <IconButton onClick={onAddBtn} icon={plus_icon} />
            </div>
            <Separator />
            {children}
        </div>
    );
}

export default ElementList;