
import { useState, useEffect } from "react";
import "./IconButton.css";

function IconButton({callback, className, icon, icon_hover}) {
    const [currentIcon, setCurrentIcon] = useState(icon);
    
    useEffect(() => {
        setCurrentIcon(icon);
    }, [icon]);

    return (
        <div
            className={`btn icon-button ${className}`}
            onClick={callback}
            onMouseLeave={() => setCurrentIcon(icon)}
            onMouseEnter={() => setCurrentIcon(icon_hover??icon)}
        >
            <img src={currentIcon} />
        </div>
    );
}

export default IconButton;