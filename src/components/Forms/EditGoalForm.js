import trash_icon from "../../assets/images/trash.png";

import GenericForm from "./GenericForm";
import TextInput from "../Inputs/TextInput";
import TextAreaInput from "../Inputs/TextAreaInput";
import ListField from "../Inputs/ListField";

function EditGoalForm() {
    return (
        <GenericForm title="Edit goal" accept_text="Save"  secondary_icon={trash_icon} >
            <TextInput title="Name" />
            <TextAreaInput title="Description" />
            <ListField title="Tasks">Item 1, Item 2</ListField>
        </GenericForm>
    );
}

export default EditGoalForm;