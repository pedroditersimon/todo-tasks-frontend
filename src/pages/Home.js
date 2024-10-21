import apiClientService from "../services/api/ApiClientService.js";
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
import SearchBar from "../components/Inputs/SearchBar";
import { useSearchBar } from "../hooks/useSearchBar";
import useLoading from "../hooks/useLoading.js";
import FormField from "../components/Forms/FormField.js";

function Home() {
    const navigate = useNavigate();
    const searchBar = useSearchBar();
    const [tasks, setTasks] = useState([]);
    const [goals, setGoals] = useState([]);
    const loadingTasks = useLoading(false, true);
    const loadingGoals = useLoading();

    useEffect(() => {
        loadingTasks.setLoading(true);
        loadingGoals.setLoading(true);
        
        apiClientService.getAllTasks()
            .then(ts => {
                setTasks(ts);
                loadingTasks.setLoading(false);
            });
        
        apiClientService.getAllGoals()
            .then(gs => {
                setGoals(gs);
                loadingGoals.setLoading(false);
            });
    }, []);

    function redirect(url, state = null, replace = false) {
        navigate(url, {
            state: state,
            replace: replace
        });
    }

    function createTaskCard(t) {
        return <TaskCard task={t} onClick={()=> redirect("/edit/task", {task:t})} />
    }

    function createGoalCard(g) {
        return <GoalCard goal={g} onClick={()=> redirect("/edit/goal", {goal:g})} />
    }
    console.log(loadingTasks.getLoadingTime()    );
    return (
        <PageLayout>
            {loadingTasks.getLoadingTime() > 5000 &&
                <FormField title="Backend server is starting...">
                    <ProgressBar value={((loadingTasks.getLoadingTime()-5000)/30000)*100} />
                </FormField>
            }
            
            <SearchBar onChange={searchBar.setValue} />

            <ElementList title="Tasks" onAddBtn={() => redirect("/create/task")}>
                {loadingTasks.showElement(
                    tasks.filter(t => searchBar.has(t.name)).map(createTaskCard)
                )}
            </ElementList> 
            

            <ElementList title="Goals" onAddBtn={() => redirect("/create/goal")}>
                {loadingGoals.isLoading
                    ? loadingGoals.show()
                    : goals.filter(g => searchBar.has(g.name)).map(createGoalCard)
                }
            </ElementList>
        </PageLayout>
    );
}

export default Home;