import { useLocation, useNavigate } from "react-router-dom";
import CreateGoalForm from "../components/Forms/CreateGoalForm";
import PageLayout from "../layouts/PageLayout";
import apiClientService from "../services/api/ApiClientService";
import { ListItem } from "../components/Forms/SelectListForm.jsx";
import { useSelectListPage } from "../hooks/useSelectListPage.jsx";
import { useEffect, useState } from "react";
import useLoading from "../hooks/useLoading.jsx";


function CreateGoalPage() {
    const navigate = useNavigate();
    const location = useLocation();
    const { goal } = location.state || {};
    const [currentGoal, setCurrentGoal] = useState(goal || {});
    const listPage = useSelectListPage("Tasks", {goal: currentGoal});
    const loadingTask = useLoading();
    
    async function setInitialItems() {
        loadingTask.setLoading(true);
        const tasks = await apiClientService.getAllTasks();
        // create new taskList but keeping the selected state
        const taskList = tasks.map(t => ListItem.FromTodoTask(t, listPage.isItemSelected(t.id))); 
        listPage.setInitialItems(taskList);
        loadingTask.setLoading(false);
    }
    useEffect(() => {
        setInitialItems();
        return () => {}; // only fetch when component is rendered not when unmount
    }, []);

    async function handleOnConfirm(confirmedGoal) {
        // add every selected task to the goal
        const selectedItems = listPage.getSelectedItems();
        await apiClientService.addTaskToGoal(confirmedGoal.id, selectedItems.map(i => i.id));
        navigate(-1);
    }
    console.log(listPage.items);
    return (
        <PageLayout>
            <CreateGoalForm
                goal={currentGoal}
                onChange={setCurrentGoal}
                onCancel={() => navigate(-1)}
                onConfirm={handleOnConfirm}

                items_preview_text={listPage.getSelectedTitles()}
                onTaskListClick={listPage.open}
                isTaskListLoading={loadingTask.isLoading}
            />
        </PageLayout>
    );
}

export default CreateGoalPage;