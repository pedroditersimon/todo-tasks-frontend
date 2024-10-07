import "./GoalCard.css";

import star_icon from "../../assets/images/star.png";
import star_filled_icon from "../../assets/images/star_filled.png";
import check_icon from "../../assets/images/check.png";

import ProgressBar from "../ProgressBar";

import GenericCard from "./GenericCard";
import { TodoGoal } from "../../services/api/models";
import { useState } from "react";
import ApiClientService from "../../services/api/ApiClientService";

function GoalCard({ goal, onClick }) {
    const [currentGoal, setCurrentGoal] = useState(goal);

    async function toggleFavorite() {
        const apiClientService = new ApiClientService(); // change this for a singleton
        currentGoal.isFavorite = !currentGoal.isFavorite;
        const updatedGoal = await apiClientService.updateGoal(currentGoal);
        setCurrentGoal(updatedGoal);
    }

    return (
        <GenericCard
            title={currentGoal.name}

            onPrimaryBtn={toggleFavorite}
            primary_icon={currentGoal.isFavorite? star_filled_icon : star_icon}

            secondary_icon={currentGoal.isCompleted? check_icon : null}

            onClick={onClick}
        >
            <ProgressBar value={currentGoal.completedPercent} />
        </GenericCard>
    );
}

export default GoalCard;