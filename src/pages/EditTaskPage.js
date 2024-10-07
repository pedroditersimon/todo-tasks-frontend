import { useLocation, useNavigate } from "react-router-dom";
import CreateGoalForm from "../components/Forms/CreateGoalForm";
import CreateTaskForm from "../components/Forms/CreateTaskForm";
import EditTaskForm from "../components/Forms/EditTaskForm";
import PageLayout from "../layouts/PageLayout";


function EditTaskPage() {
    const navigate = useNavigate();
    const location = useLocation();
    const { task } = location.state || {};

    return (
        <PageLayout>
            <EditTaskForm task={task} onCancel={() => navigate(-1)} />
        </PageLayout>
    );
}

export default EditTaskPage;