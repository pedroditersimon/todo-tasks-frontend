import "./TextAreaInput.css";
import FormField from "../Forms/FormField.jsx";

import { useEffect, useState, useRef } from "react";

function TextAreaInput({title, value, onChange, error_msg, placeholder="Value"}) {
    const [currentValue, setCurrentValue] = useState(value);
    const textareaRef = useRef(null);

    useEffect(() => setCurrentValue(value), [value]);

    useEffect(() => adjustHeight, [currentValue]);

    function adjustHeight() {
        const textarea = textareaRef.current;
        if (!textarea) return;
        textarea.style.height = "auto"; // Resetea la altura
        textarea.style.height = `${textarea.scrollHeight}px`; // Ajusta la altura al contenido
    };

    function onValueChange(event) {
        setCurrentValue(event.target.value);
        if (onChange) onChange(event.target.value);
    }

    return (
        <FormField title={title} error_msg={error_msg}>
            <textarea
                ref={textareaRef}
                className="text-area-value"
                placeholder={placeholder}
                value={currentValue}
                onChange={onValueChange}
            />
        </FormField>
    );
}

export default TextAreaInput;