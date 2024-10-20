
import "./TextInput.css";

import FormField from "../Forms/FormField.js";
import { useState } from "react";

function TextInput({title, value, error_msg, placeholder="Value", required, onChange}) {
    function onValueChange(event) {
        if (onChange) onChange(event.target.value);
    }

    const isEmpty = value === undefined || value.trim() === "";
    const _error_msg = error_msg?? (required && isEmpty && "Write something");

    return (
        <FormField title={title} error_msg={_error_msg}>
            <input className="text-input-value" placeholder={placeholder} value={value} onChange={onValueChange} type="text" />
        </FormField>
    );
}

export default TextInput;