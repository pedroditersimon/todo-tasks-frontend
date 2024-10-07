
import { useState, useEffect } from "react";
import "./IconButton.css";

function IconButton({ onClick, className, icon, icon_hover }) {
    const [currentIcon, setCurrentIcon] = useState(icon);

    // update currentIcon when icon is modified
    useEffect(() => setCurrentIcon(icon), [icon]);

    function handleClickEvent(event) {
        event.stopPropagation();
        if (onClick) onClick();
    }

    return (
        <div
            className={`btn icon-button ${className}`}
            onClick={handleClickEvent}
            onMouseLeave={() => setCurrentIcon(icon)}
            onMouseEnter={() => setCurrentIcon(icon_hover??icon)}
        >
            <img src={currentIcon} />
        </div>
    );
}

export default IconButton;