import "./TaskCard.css";

import star_icon from "../../assets/images/star.png";
import star_filled_icon from "../../assets/images/star_filled.png";
import check_icon from "../../assets/images/check.png";

import GenericCard from "./GenericCard";
import { useEffect, useState } from "react";
import { TodoTask } from "../../services/api/models";

function TaskCard({ task, onClick }) {
    const [currentTask, setCurrentTask] = useState(task);

    function toggleFavorite() {
        currentTask.isFavorite = !currentTask.isFavorite;
        setCurrentTask(TodoTask.fromJSON(currentTask));
        // TODO: api call
    }

    return (
        <GenericCard
            title={currentTask.name}

            onPrimaryBtn={toggleFavorite}
            primary_icon={currentTask.isFavorite? star_filled_icon : star_icon}

            secondary_icon={currentTask.isCompleted? check_icon : null}
            onClick={onClick}
        >
            <span className="task-description">{currentTask.description}</span>
        </GenericCard>
    );
}

export default TaskCard;