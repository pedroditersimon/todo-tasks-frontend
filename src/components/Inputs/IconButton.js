
import "./IconButton.css";

function IconButton({callback, className, icon}) {
    return (
        <div className={`btn icon-button ${className}`} onClick={callback}>
            <img src={icon} />
        </div>
    );
}

export default IconButton;