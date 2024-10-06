
import "./ListField.css";
import edit_icon from "../../assets/images/edit.png";
import IconButton from "../Inputs/IconButton.js";
import FormField from "../Forms/FormField.js";

function ListField({title, error_msg, onClick, children}) {
    return (
        <FormField title={title} error_msg={error_msg} >
            <div className="list-field-value" onClick={onClick}>
                <span>{children}</span>
                <IconButton icon={edit_icon} />
            </div>
        </FormField>
    );
}

export default ListField;