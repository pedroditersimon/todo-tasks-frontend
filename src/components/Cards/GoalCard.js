import "./GoalCard.css";

import star_icon from "../../assets/images/star.png";
import star_filled_icon from "../../assets/images/star_filled.png";
import check_icon from "../../assets/images/check.png";

import ProgressBar from "../ProgressBar";

import GenericCard from "./GenericCard";
import { TodoGoal } from "../../services/api/models";
import { useState } from "react";

function GoalCard({ goal }) {
    const [currentGoal, setCurrentGoal] = useState(goal);

    function toggleFavorite() {
        currentGoal.isFavorite = !currentGoal.isFavorite;
        setCurrentGoal(TodoGoal.fromJSON(currentGoal));
        // TODO: api call
    }

    return (
        <GenericCard
            title={currentGoal.name}

            onPrimaryBtn={toggleFavorite}
            primary_icon={currentGoal.isFavorite? star_filled_icon : star_icon}

            secondary_icon={currentGoal.isCompleted? check_icon : null}
        >
            <ProgressBar value={currentGoal.completedPercent} />
        </GenericCard>
    );
}

export default GoalCard;