
import "./FormField.css";

function FormField({title, error_msg, children}) {
    return (
        <div className="form-field">
            <div className="form-field-title">
                <span>{title}</span>
            </div>

            {children}

            <div className="form-field-error">
                <span>{error_msg}</span>
            </div>
        </div>
    );
}

export default FormField;