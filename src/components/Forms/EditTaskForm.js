
import trash_icon from "../../assets/images/trash.png";
import trash_red_icon from "../../assets/images/trash_red.png";

import GenericForm from "./GenericForm";
import TextInput from "../Inputs/TextInput";
import TextAreaInput from "../Inputs/TextAreaInput";
import SwitchField from "../Inputs/SwitchField";

function EditTaskForm({task}) {
    if (!task) {
        return (<>[!] Null task</>);
    }

    return (
        <GenericForm title="Edit task" accept_text="Save" secondary_icon={trash_icon} secondary_icon_hover={trash_red_icon} >
            <TextInput title="Name" value={task.name} />
            <TextAreaInput title="Description" value={task.description} />
            <SwitchField value={task.isCompleted}>Completed</SwitchField>
        </GenericForm>
    );
}

export default EditTaskForm;