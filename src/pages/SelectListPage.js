import CreateGoalForm from "../components/Forms/CreateGoalForm";
import CreateTaskForm from "../components/Forms/CreateTaskForm";
import SelectListForm from "../components/Forms/SelectListForm";
import PageLayout from "../layouts/PageLayout";
import { useLocation, useNavigate } from "react-router-dom";

function SelectListPage({}) {
    const navigate = useNavigate();
    const location = useLocation();
    const { title, items, comebackPath, comebackState } = location.state || {};

    // items: ListItem

    function onConfirm(confirmedItems) {
        navigate(comebackPath, {
            state: {
                items: confirmedItems,
                ...comebackState
            },
            replace: true
        });
    }

    return (
        <PageLayout>
            <SelectListForm
                title={title}
                items={items}
                onConfirm={onConfirm}
                onCancel={() => navigate(-1)}
            />
        </PageLayout>
    );
}

export default SelectListPage;