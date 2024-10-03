
import GenericForm from "./GenericForm";
import TextInput from "../Inputs/TextInput";
import TextAreaInput from "../Inputs/TextAreaInput";
import SwitchField from "../Inputs/SwitchField";

function SelectListForm({title="Items", children}) {
    return (
        <GenericForm title={title} accept_text="Select" >
            {children}
        </GenericForm>
    );
}

export default SelectListForm;