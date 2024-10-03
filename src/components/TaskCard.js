import "./TaskCard.css";
import star_icon from "../assets/images/star.png";
import check_icon from "../assets/images/check.png";
import GenericCard from "./GenericCard";

function TaskCard({ task }) {
    return (
        <GenericCard
            title={task.name}
            primary_icon={star_icon}
            secondary_icon={check_icon}
            >
                <span className="task-description">{task.description}</span>
        </GenericCard>
    );

    return (
        <div className="task-card">
            <div className="task-favorite">
                <img src={star_icon} />
            </div>
            <div className="task-body">
                <span className="task-title">{task.name}</span>
                <span className="task-description">{task.description}</span>
            </div>
            <div className="task-status">
                <img src={check_icon} />
            </div>
        </div>
    );
}

export default TaskCard;