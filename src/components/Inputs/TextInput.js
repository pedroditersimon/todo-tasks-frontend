
import "./TextInput.css";

function TextInput() {
    return (
        <div className="text-input">
            <div className="text-input-title">
                <span>titulo</span>
            </div>
            <input className="text-input-value" type="text" />
        </div>
    );
}

export default TextInput;