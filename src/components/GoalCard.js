import "./GoalCard.css";
import star_icon from "../assets/images/star.png";
import check_icon from "../assets/images/check.png";

import ProgressBar from "./ProgressBar";

function GoalCard({ goal }) {
    return (
        <div className="goal-card">
            <div className="goal-favorite">
                <img src={star_icon} />
            </div>
            <div className="goal-body">
                <span className="goal-title">{goal.name}</span>
                <ProgressBar />
            </div>
            <div className="goal-status">
                <img src={check_icon} />
            </div>
        </div>
    );
}

export default GoalCard;