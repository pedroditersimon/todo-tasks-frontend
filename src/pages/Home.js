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

import { useNavigate } from "react-router-dom";

function Home() {
    const navigate = useNavigate();

    const [tasks, setTasks] = useState([]);
    const [goals, setGoals] = useState([]);

    useEffect(() => {
        const apiClientService = new ApiClientService();

        apiClientService.getAllTasks()
            .then(ts => setTasks(ts));
        
        // DONT USE THIS, use getAllGoals() instead
        apiClientService.getAllGoals()
            .then(gs => setGoals(gs));
    }, []);

    function redirect(url, state = null, replace = false) {
        navigate(url, {
            state: state,
            replace: replace
        });
    }

    return (
        <PageLayout>
            <ElementList title="Tasks" onAddBtn={() => redirect("/create/task")}>
                {tasks.map(t => <TaskCard task={t} onClick={()=> redirect("/edit/task", {task:t})} />)}
            </ElementList>
            <br /><br />
            <ElementList title="Goals" onAddBtn={() => redirect("/create/goal")}>
                {goals.map(g => <GoalCard goal={g} onClick={()=> redirect("/edit/goal", {goal:g})} />)}
            </ElementList>
        </PageLayout>
    );
}

export default Home;