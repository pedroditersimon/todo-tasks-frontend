import trash_icon from "../../assets/images/trash.png";
import trash_red_icon from "../../assets/images/trash_red.png";

import GenericForm from "./GenericForm";
import TextInput from "../Inputs/TextInput";
import TextAreaInput from "../Inputs/TextAreaInput";
import ListField from "../Inputs/ListField";

function EditGoalForm() {
    return (
        <GenericForm title="Edit goal" accept_text="Save" secondary_icon={trash_icon} secondary_icon_hover={trash_red_icon} >
            <TextInput title="Name" />
            <TextAreaInput title="Description" />
            <ListField title="Tasks">Item 1, Item 2</ListField>
        </GenericForm>
    );
}

export default EditGoalForm;