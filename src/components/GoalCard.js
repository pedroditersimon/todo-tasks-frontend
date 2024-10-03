import "./GoalCard.css";
import star_icon from "../assets/images/star.png";
import check_icon from "../assets/images/check.png";

import ProgressBar from "./ProgressBar";

import GenericCard from "./GenericCard";

function GoalCard({ goal }) {
    return (
        <GenericCard
            title={goal.name}
            primary_icon={star_icon}
            secondary_icon={check_icon}
            >
                <ProgressBar />
        </GenericCard>
    );
}

export default GoalCard;