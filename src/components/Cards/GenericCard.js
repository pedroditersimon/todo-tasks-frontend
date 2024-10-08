import "./GenericCard.css";
import IconButton from "../Inputs/IconButton";
import { useEffect } from "react";

function GenericCard({ title, onClick, onPrimaryBtn, primary_icon, primary_icon_hover, secondary_icon, children  }) {
    return (
        <div onClick={onClick} className="card btn">
            <IconButton
                className="card-primary-icon"
                onClick={onPrimaryBtn}
                icon={primary_icon}
                icon_hover={primary_icon_hover}
            />
            <div className="card-body">
                <span className="card-title">{title}</span>
                {children}
            </div>
            <div className="card-secondary-icon">
                <img src={secondary_icon} />
            </div>
        </div>
    );
}

export default GenericCard;