
import "./TextInput.css";

import FormField from "../Forms/FormField.js";

function TextInput({title, error_msg, placeholder="Value"}) {
    return (
        <FormField title={title} error_msg={error_msg}>
            <input className="text-input-value" placeholder={placeholder} type="text" />
        </FormField>
    );
}

export default TextInput;