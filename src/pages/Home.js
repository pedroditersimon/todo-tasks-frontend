import ApiClientService from "../api/services/ApiClientService";
import PageLayout from "../layouts/PageLayout";

import { useEffect, useState } from "react";
import { TodoGoal, TodoTask } from "../api/models";
import TaskCard from "../components/TaskCard";
import GoalCard from "../components/GoalCard";

import ProgressBar from "../components/ProgressBar";

function Home() {
    const [task, setTask] = useState(new TodoTask());
    const [goal, setGoal] = useState(new TodoGoal());

    useEffect(() => {
        const apiClientService = new ApiClientService();

        apiClientService.getTaskById(1)
            .then(t => {t.description+="asddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddasdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd";setTask(t)});

        apiClientService.getGoalById(1)
                .then(t => setGoal(t));
    }, []);

    return (
        <PageLayout>
            <TaskCard task={task} />
            <GoalCard goal={goal} />
        </PageLayout>
    );
}

export default Home;