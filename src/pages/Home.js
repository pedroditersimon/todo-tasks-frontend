import ApiClientService from "../api/services/ApiClientService";
import PageLayout from "../layouts/PageLayout";

import { useEffect, useState } from "react";
import { TodoGoal, TodoTask } from "../api/models";
import TaskCard from "../components/TaskCard";
import GoalCard from "../components/GoalCard";

import ProgressBar from "../components/ProgressBar";
import ElementList from "../components/ElementsList";

import CreateTaskForm from "../components/Forms/CreateTaskForm";

function Home() {
    const [tasks, setTasks] = useState([]);
    const [goals, setGoals] = useState([]);

    useEffect(() => {
        const apiClientService = new ApiClientService();

        apiClientService.getAllTasks()
            .then(ts => setTasks(ts));
        
        // DONT USE THIS, use getAllGoals() instead
        apiClientService.getAllGoalsWithTasks()
            .then(gs => setGoals(gs));
    }, []);

    return (
        <PageLayout>
            <br /><br />
            <CreateTaskForm accept_callback={()=>console.log("gola")} close_callback={()=>console.log("chau")}>
                Body, cuerpo
            </CreateTaskForm>
            <br /><br />
            <ElementList tittle="Tasks">
                {tasks.map(t => <TaskCard task={t} />)}
            </ElementList>
            <br /><br />
            <ElementList tittle="Goals">
                {goals.map(g => <GoalCard goal={g} />)}
            </ElementList>
            <br /><br />
        </PageLayout>
    );
}

export default Home;