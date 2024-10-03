import ApiClientService from "../api/services/ApiClientService";
import PageLayout from "../layouts/PageLayout";

import { useEffect, useState } from "react";
import { TodoGoal, TodoTask } from "../api/models";
import TaskCard from "../components/Cards/TaskCard";
import GoalCard from "../components/Cards/GoalCard";

import ProgressBar from "../components/ProgressBar";
import ElementList from "../components/ElementsList";


import CreateTaskForm from "../components/Forms/CreateTaskForm";
import EditTaskForm from "../components/Forms/EditTaskForm";

import CreateGoalForm from "../components/Forms/CreateGoalForm";

import SelectListForm from "../components/Forms/SelectListForm";
import EditGoalForm from "../components/Forms/EditGoalForm";

import SelectableCard from "../components/Cards/SelectableCard";

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
            <ElementList title="Tasks">
                {tasks.map(t => <TaskCard task={t} />)}
            </ElementList>
            <br /><br />
            <ElementList title="Goals">
                {goals.map(g => <GoalCard goal={g} />)}
            </ElementList>
            
            <br /><br />
            <CreateTaskForm accept_callback={()=>console.log("gola")} close_callback={()=>console.log("chau")} />
            <br /><br />
            <EditTaskForm task={tasks[Math.floor(Math.random() * tasks.length)] || undefined} />
            <br /><br />
            <CreateGoalForm accept_callback={()=>console.log("gola")} close_callback={()=>console.log("chau")} />
            <br /><br />
            <EditGoalForm accept_callback={()=>console.log("gola")} close_callback={()=>console.log("chau")} />
            <br /><br />
            <SelectListForm title="Goals" >
                {goals.map(g => <SelectableCard title={g.name} description={g.description} />)}
            </SelectListForm>
        </PageLayout>
    );
}

export default Home;