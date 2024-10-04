import "./TextAreaInput.css";
import FormField from "../Forms/FormField.js";

import { useEffect, useState, useRef } from "react";

function TextAreaInput({title, value, onChange, error_msg, placeholder="Value"}) {
    const [textValue, setTextValue] = useState(value);
    const textareaRef = useRef(null);

    function adjustHeight() {
        const textarea = textareaRef.current;
        textarea.style.height = "auto"; // Resetea la altura
        textarea.style.height = `${textarea.scrollHeight}px`; // Ajusta la altura al contenido
    };

    useEffect(() => {
        adjustHeight();
    }, [textValue]);

    return (
        <FormField title={title} error_msg={error_msg}>
            <textarea
                ref={textareaRef}
                className="text-area-value"
                placeholder={placeholder}
                value={textValue}
                onChange={(e) => {setTextValue(e.target.value);onChange(e);}}
            />
        </FormField>
    );
}

export default TextAreaInput;