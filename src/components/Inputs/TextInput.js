
import "./TextInput.css";

import FormField from "../Forms/FormField.js";
import { useState } from "react";
import Checker from "../../utils/Checker.js";

function TextInput({title, value, error_msg, placeholder="Value", required, onChange}) {
    function onValueChange(event) {
        if (onChange) onChange(event.target.value);
    }
    
    const _error_msg = error_msg?? (required && Checker.isStringEmpty(value) && "Write something");

    return (
        <FormField title={title} error_msg={_error_msg}>
            <input className="text-input-value" placeholder={placeholder} value={value} onChange={onValueChange} type="text" />
        </FormField>
    );
}

export default TextInput;