import "./GenericCard.css";
import IconButton from "../Inputs/IconButton";

function GenericCard({ title, onClick, primary_callback, primary_icon, secondary_icon, children  }) {
    return (
        <div onClick={onClick} className="card btn">
            <IconButton className="card-primary-icon" callback={primary_callback} icon={primary_icon} />
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