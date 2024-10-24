import plus_icon from "../assets/images/Plus.png";
import "./ElementsList.css";

import Separator from "./Separator";
import IconButton from "./Inputs/IconButton";
import { useEffect } from "react";

function ElementList({ title, onAddBtn, empty_message="Sin resultados", children}) {

    const showEmptyMessage = Array.isArray(children) && children.length === 0;

    return (
        <div className="element-list">
            <div className="element-list-header">
                <span className="element-list-header-title">{title}</span>
                <IconButton className="element-list-header-add-btn" onClick={onAddBtn} icon={plus_icon} />
            </div>
            <Separator />
            { showEmptyMessage
                ? <span className="element-list-empty-message">{empty_message}</span>
                : children
            }
        </div>
    );
}

export default ElementList;