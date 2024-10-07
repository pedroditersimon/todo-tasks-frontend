import ApiClientService from "../services/api/ApiClientService";
import PageLayout from "../layouts/PageLayout";

import { useEffect, useState } from "react";
import { TodoGoal, TodoTask } from "../services/api/models";
import TaskCard from "../components/Cards/TaskCard";
import GoalCard from "../components/Cards/GoalCard";

import ProgressBar from "../components/ProgressBar";
import ElementList from "../components/ElementsList";


import CreateTaskForm from "../components/Forms/CreateTaskForm";
import EditTaskForm from "../components/Forms/EditTaskForm";

import CreateGoalForm from "../components/Forms/CreateGoalForm";

import SelectListForm, { ListItem } from "../components/Forms/SelectListForm";
import EditGoalForm from "../components/Forms/EditGoalForm";

import SelectableCard from "../components/Cards/SelectableCard";

function Home() {
    const [tasks, setTasks] = useState([TodoTask.fromJSON({name:"Titulo ola", description:"Description description", isCompleted:true})]);
    const [goals, setGoals] = useState([TodoGoal.fromJSON({name:"Titulo ola", description:"Description description", isCompleted:true,completedPercent:50})]);

    console.log(tasks);
    console.log(goals);

    useEffect(() => {
        const apiClientService = new ApiClientService();

        apiClientService.getAllTasks()
            .then(ts => setTasks(ts));
        
        // DONT USE THIS, use getAllGoals() instead
        apiClientService.getAllGoals()
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
            <CreateTaskForm  />
            <br /><br />
            <EditTaskForm task={tasks[Math.floor(Math.random() * tasks.length)] || undefined} />
            <br /><br />
            <CreateGoalForm />
            <br /><br />
            <EditGoalForm goal={goals[Math.floor(Math.random() * goals.length)] || undefined} />
            <br /><br />
            <SelectListForm title="Goals" items={goals.map(g => ListItem.FromTodoGoal(g))} />
        </PageLayout>
    );
}

export default Home;