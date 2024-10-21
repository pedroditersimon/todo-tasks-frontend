import MathUtils from "../utils/MathUtils";
import "./ProgressBar.css";

// value from 0 to 100
function ProgressBar({ value }) {
    const _value = MathUtils.clamp(value, 0, 100);
    return (
        <div className="progress-bar">
            <div 
                className={`progress-bar-fill ${_value >=100 && "completed"}`}
                style= {{
                    width: `${_value}%`
                }}
            />
        </div>
    );
}

export default ProgressBar;