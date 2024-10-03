import { useRef } from "react";
import FormField from "../Forms/FormField";
import "./SwitchField.css";

function SwitchField({ error_msg, children}) {
    const switchRef = useRef(null);

    function onSwitchClick() {
        const switchElement = switchRef.current;
        switchElement.checked = !switchElement.checked;
    }

    return (
        <div className="switch-field">
            <div onClick={onSwitchClick} className="switch-field-body">
                <div className="switch-field-title">
                    <span>{children}</span>
                </div>
                <input ref={switchRef} type="checkbox" />
                <slider className="slider" />
            </div>

            <div className="switch-field-error">
                <span>{error_msg}</span>
            </div>
        </div>
    );
}

export default SwitchField;