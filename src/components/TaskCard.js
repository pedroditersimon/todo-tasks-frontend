import "./TaskCard.css";
import star_icon from "../assets/images/star.png";
import check_icon from "../assets/images/check.png";
import GenericCard from "./GenericCard";

function TaskCard({ task }) {
    return (
        <GenericCard
            title={task.name}
            primary_icon={star_icon}
            secondary_icon={task.isCompleted? check_icon : null}
            >
                <span className="task-description">{task.description}</span>
        </GenericCard>
    );
}

export default TaskCard;