
import trash_icon from "../../assets/images/trash.png";

import GenericForm from "./GenericForm";
import TextInput from "../Inputs/TextInput";
import TextAreaInput from "../Inputs/TextAreaInput";
import SwitchField from "../Inputs/SwitchField";

function EditTaskForm() {
    return (
        <GenericForm title="Edit task" accept_text="Save" secondary_icon={trash_icon} >
            <TextInput title="Name" />
            <TextAreaInput title="Description" />
            <SwitchField>Completed</SwitchField>
        </GenericForm>
    );
}

export default EditTaskForm;