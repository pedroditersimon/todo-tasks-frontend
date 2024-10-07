import { useLocation, useNavigate } from "react-router-dom";
import CreateGoalForm from "../components/Forms/CreateGoalForm";
import PageLayout from "../layouts/PageLayout";
import ApiClientService from "../services/api/ApiClientService";
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
        const apiClientService = new ApiClientService(); // hacer esto un singleton
        const tasks = await apiClientService.getAllTasks();
        // create new taskList but keeping the selected state
        const taskList = tasks.map(t => ListItem.FromTodoTask(t, ListItem.IsItemSelected(listPage.items, t.id))); 
        listPage.setInitialItems(taskList);   
    }
    useEffect(() => setInitialItems, []);

    return (
        <PageLayout>
            <CreateGoalForm
                goal={currentGoal}
                onChange={setCurrentGoal}
                onCancel={() => navigate(-1)}
                onConfirm={(g) => navigate(-1)}

                items_preview_text={listPage.getSelectedTitles()}
                onTaskListClick={listPage.open}
            />
        </PageLayout>
    );
}

export default CreateGoalPage;