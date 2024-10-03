import "./TextAreaInput.css";
import FormField from "../Forms/FormField.js";

import { useEffect, useState, useRef } from "react";

function TextAreaInput({title, error_msg, placeholder="Value"}) {
    const [value, setValue] = useState("");
    const textareaRef = useRef(null);

    function adjustHeight() {
        const textarea = textareaRef.current;
        textarea.style.height = "auto"; // Resetea la altura
        textarea.style.height = `${textarea.scrollHeight}px`; // Ajusta la altura al contenido
    };

    useEffect(() => {
        adjustHeight();
    }, [value]);

    return (
        <FormField title={title} error_msg={error_msg}>
            <textarea
                ref={textareaRef}
                className="text-area-value"
                placeholder={placeholder}
                onChange={(e) => setValue(e.target.value)}
            />
        </FormField>
    );
}

export default TextAreaInput;