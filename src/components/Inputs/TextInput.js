
import "./TextInput.css";

import FormField from "../Forms/FormField.js";

function TextInput({title, value, error_msg, placeholder="Value", onChange}) {
    return (
        <FormField title={title} error_msg={error_msg}>
            <input className="text-input-value" placeholder={placeholder} value={value} onChange={onChange} type="text" />
        </FormField>
    );
}

export default TextInput;