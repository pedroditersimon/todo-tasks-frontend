
import GenericForm from "./GenericForm";
import TextInput from "../Inputs/TextInput";
import TextAreaInput from "../Inputs/TextAreaInput";
import ListField from "../Inputs/ListField";

function CreateGoalForm() {
    return (
        <GenericForm title="New goal" accept_text="Create" >
            <TextInput title="Name" />
            <TextAreaInput title="Description" />
            <ListField title="Tasks">Item 1, Item 2</ListField>
        </GenericForm>
    );
}

export default CreateGoalForm;