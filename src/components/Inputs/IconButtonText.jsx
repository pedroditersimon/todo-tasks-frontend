import IconButton from "./IconButton";
import "./IconButtonText.css";

function IconButtonText({ onClick, className, icon, icon_hover, text, disabled, href, children }) {
   
    return (
        <a className="icon-button-text" onClick={onClick} href={href} target="_blank" >
            <img className="icon-button-text-icon" src={icon} />
            <span className="icon-button-text-title">{text}</span>
        </a>
    );
}

export default IconButtonText;