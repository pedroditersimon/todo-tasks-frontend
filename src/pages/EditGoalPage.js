import CreateGoalForm from "../components/Forms/CreateGoalForm";
import EditGoalForm from "../components/Forms/EditGoalForm";
import PageLayout from "../layouts/PageLayout";
import { useNavigate, useLocation } from "react-router-dom";
import apiClientService from "../services/api/ApiClientService.js";
import { ListItem } from "../components/Forms/SelectListForm";
import { useState, useEffect } from "react";
import { useSelectListPage } from "../hooks/useSelectListPage";
import useLoading from "../hooks/useLoading.js";

function EditGoalPage({onCancel}) {
    const navigate = useNavigate();
    const location = useLocation();
    const { goal } = location.state || {};
    const [currentGoal, setCurrentGoal] = useState(goal || {});
    const listPage = useSelectListPage("Tasks", {goal:currentGoal});
    const loadingTask = useLoading();

    async function setInitialItems() {
        loadingTask.setLoading(true);
        const tasks = await apiClientService.getAllTasks();
        const goalTasks = await apiClientService.getTasksByGoalID(currentGoal.id);

        // create new taskList but keeping the selected state
        const taskList = tasks.map(t =>
            ListItem.FromTodoTask(t, 
                listPage.isItemSelected(t.id) || goalTasks.some(gt => gt.id === t.id)
        ));
        listPage.setInitialItems(taskList);
        loadingTask.setLoading(false);
    }
    useEffect(() => {
        setInitialItems();
        return () => {}; // only fetch when component is rendered not when unmount
    }, []);

    async function handleOnConfirm(confirmedGoal) {
        const goalTasks = await apiClientService.getTasksByGoalID(confirmedGoal.id);

        // remove every deselected task from the goal
        const deselectedTasks = listPage.items.filter(i => {
            const isGoalTask = goalTasks.some(t => t.id === i.id);
            return isGoalTask && !i.isSelected;
        });
        for (const item of deselectedTasks) {
            await apiClientService.removeTaskFromGoal(confirmedGoal.id, item.id);
        };

        // add every selected task to the goal
        const selectedItems = listPage.getSelectedItems().filter(i => {
            const isAlreadySelected = goalTasks.some(t => t.id === i.id);
            return !isAlreadySelected;
        });
        for (const item of selectedItems) {
            await apiClientService.addTaskToGoal(confirmedGoal.id, item.id);
        }
        navigate(-1);
    }

    return (
        <PageLayout>
            <EditGoalForm
                goal={goal}
                onChange={setCurrentGoal}
                onCancel={() => navigate(-1)}
                onConfirm={handleOnConfirm}
                onDelete={() => navigate(-1)}

                items_preview_text={listPage.getSelectedTitles()}
                onTaskListClick={listPage.open}
                isTaskListLoading={loadingTask.isLoading}
            />
        </PageLayout>
    );
}

export default EditGoalPage;