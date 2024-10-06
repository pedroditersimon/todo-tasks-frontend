
import "./TextInput.css";

import FormField from "../Forms/FormField.js";

function TextInput({title, value, error_msg, placeholder="Value", onChange}) {
    
    function onValueChange(event) {
        if (onChange) onChange(event.target.value);
    }

    return (
        <FormField title={title} error_msg={error_msg}>
            <input className="text-input-value" placeholder={placeholder} value={value} onChange={onValueChange} type="text" />
        </FormField>
    );
}

export default TextInput;