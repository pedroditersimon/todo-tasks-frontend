import "./GoalCard.css";
import star_icon from "../../assets/images/star.png";
import check_icon from "../../assets/images/check.png";

import ProgressBar from "../ProgressBar";

import GenericCard from "./GenericCard";

function GoalCard({ goal }) {

    // calculate the goal progress by tasks
    var goal_progress = 0;
    if (goal.tasks && goal.tasks.length > 0) {
        // count completed tasks
        var completed_tasks_count = goal.tasks.reduce((accumulator, t) => accumulator + (t.isCompleted?1:0), 0);
        // get progress percent
        goal_progress = completed_tasks_count/goal.tasks.length;
    }

    return (
        <GenericCard
            title={goal.name}
            primary_icon={star_icon}
            secondary_icon={goal_progress>=1.0?check_icon:null}
            >
                <ProgressBar value={goal_progress} />
        </GenericCard>
    );
}

export default GoalCard;