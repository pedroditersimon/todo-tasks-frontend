import "./GenericCard.css";

function GenericCard({ title, primary_icon, secondary_icon, children  }) {
    return (
        <div className="card">
            <div className="card-primary-icon">
                <img src={primary_icon} />
            </div>
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