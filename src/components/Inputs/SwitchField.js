import {  useEffect, useState } from "react";
import "./SwitchField.css";

function SwitchField({ error_msg, value, onToggle, children }) {
    const [selected, setSelected] = useState(value);

    // update selected when value is modified
    useEffect(() => setSelected(value), [value]);

    function onSwitchClick() {
        setSelected((prevSelected) => !prevSelected); // Alternar el estado
        if (onToggle) onToggle(!selected);
    }

    return (
        <div className="switch-field">
            <div onClick={onSwitchClick} className="switch-field-body">
                <div className="switch-field-title">
                    <span>{children}</span>
                </div>
                <input
                    type="checkbox"
                    checked={selected}
                    onChange={onSwitchClick}
                />
                <div className="slider" />
            </div>

            <div className="switch-field-error">
                <span>{error_msg}</span>
            </div>
        </div>
    );
}


export default SwitchField;