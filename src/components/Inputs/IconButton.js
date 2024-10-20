
import { useState, useEffect } from "react";
import "./IconButton.css";

function IconButton({ onClick, className, icon, icon_hover, disabled }) {
    const [currentIcon, setCurrentIcon] = useState(icon);

    // update currentIcon when icon is modified
    useEffect(() => setCurrentIcon(icon), [icon]);

    function handleClickEvent(event) {
        event.stopPropagation();
        if (disabled) return; // ignore if its disabled
        if (onClick) onClick();
    }

    return (
        <div
            className={`btn icon-button ${className} ${disabled && "disabled"}`}
            onClick={handleClickEvent}
            onMouseLeave={() => setCurrentIcon(icon)}
            onMouseEnter={() => setCurrentIcon(icon_hover??icon)}
        >
            <img src={currentIcon} />
        </div>
    );
}

export default IconButton;