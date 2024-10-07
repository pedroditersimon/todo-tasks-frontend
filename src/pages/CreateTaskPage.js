import CreateGoalForm from "../components/Forms/CreateGoalForm";
import CreateTaskForm from "../components/Forms/CreateTaskForm";
import PageLayout from "../layouts/PageLayout";
import { ListItem } from "../components/Forms/SelectListForm";
import { useSelectListPage } from "../hooks/useSelectListPage";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import ApiClientService from "../services/api/ApiClientService";

function CreateTaskPage() {
    const navigate = useNavigate();
    const location = useLocation();
    const { task } = location.state || {};

    return (
        <PageLayout>
            <CreateTaskForm
                task={task}
                onCancel={() => navigate(-1)} 
                onConfirm={(t) => navigate(-1)}
            />
        </PageLayout>
    );
}

export default CreateTaskPage;