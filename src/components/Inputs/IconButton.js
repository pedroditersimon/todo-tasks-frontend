
import { useState, useEffect } from "react";
import "./IconButton.css";

function IconButton({ onClick, className, icon, icon_hover }) {
    const [currentIcon, setCurrentIcon] = useState(icon);

    // update currentIcon when icon is modified
    useEffect(() => setCurrentIcon(icon), [icon]);

    return (
        <div
            className={`btn icon-button ${className}`}
            onClick={onClick}
            onMouseLeave={() => setCurrentIcon(icon)}
            onMouseEnter={() => setCurrentIcon(icon_hover??icon)}
        >
            <img src={currentIcon} />
        </div>
    );
}

export default IconButton;