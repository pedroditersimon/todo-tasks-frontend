import { useLocation, useNavigate } from "react-router-dom";
import CreateGoalForm from "../components/Forms/CreateGoalForm";
import PageLayout from "../layouts/PageLayout";
import apiClientService from "../services/api/ApiClientService";
import { ListItem } from "../components/Forms/SelectListForm";
import { useSelectListPage } from "../hooks/useSelectListPage";
import { useEffect, useState } from "react";


function CreateGoalPage() {
    const navigate = useNavigate();
    const location = useLocation();
    const { goal } = location.state || {};
    const [currentGoal, setCurrentGoal] = useState(goal || {});
    const listPage = useSelectListPage("Tasks", {goal: currentGoal});
    
    async function setInitialItems() {
        const tasks = await apiClientService.getAllTasks();
        // create new taskList but keeping the selected state
        const taskList = tasks.map(t => ListItem.FromTodoTask(t, listPage.isItemSelected(t.id))); 
        listPage.setInitialItems(taskList);
    }
    useEffect(() => setInitialItems, []);

    async function handleOnConfirm(confirmedGoal) {
        // add every selected task to the goal
        const selectedItems = listPage.getSelectedItems();
        for (const item of selectedItems) {
            await apiClientService.addTaskToGoal(confirmedGoal.id, item.id);
        }
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
            />
        </PageLayout>
    );
}

export default CreateGoalPage;