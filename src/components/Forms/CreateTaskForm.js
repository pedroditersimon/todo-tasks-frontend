
import GenericForm from "./GenericForm";
import TextInput from "../Inputs/TextInput";
import TextAreaInput from "../Inputs/TextAreaInput";

function CreateTaskForm() {
    return (
        <GenericForm title="New task" accept_text="Create" >
            <TextInput title="Name" />
            <TextAreaInput title="Description" />
        </GenericForm>
    );
}

export default CreateTaskForm;