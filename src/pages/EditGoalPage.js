import CreateGoalForm from "../components/Forms/CreateGoalForm";
import EditGoalForm from "../components/Forms/EditGoalForm";
import PageLayout from "../layouts/PageLayout";
import { useNavigate, useLocation } from "react-router-dom";
import ApiClientService from "../services/api/ApiClientService";
import { ListItem } from "../components/Forms/SelectListForm";
import { useState, useEffect } from "react";
import { useSelectListPage } from "../hooks/useSelectListPage";

function EditGoalPage({onCancel}) {
    const navigate = useNavigate();
    const location = useLocation();
    const { goal } = location.state || {};
    const [currentGoal, setCurrentGoal] = useState(goal || {});
    const listPage = useSelectListPage("Tasks", {goal:currentGoal});

    async function setInitialItems() {
        const apiClientService = new ApiClientService(); // hacer esto un singleton
        const tasks = await apiClientService.getAllTasks();
        // create new taskList but keeping the selected state
        const taskList = tasks.map(t => ListItem.FromTodoTask(t, ListItem.IsItemSelected(listPage.items, t.id))); 
        listPage.setInitialItems(taskList);   
    }
    useEffect(() => setInitialItems, []);

    return (
        <PageLayout>
            <EditGoalForm
                goal={goal}
                onChange={setCurrentGoal}
                onCancel={() => navigate(-1)}
                onConfirm={(g) => navigate(-1)}
                onDelete={() => navigate(-1)}

                items_preview_text={listPage.getSelectedTitles()}
                onTaskListClick={listPage.open}
            />
        </PageLayout>
    );
}

export default EditGoalPage;