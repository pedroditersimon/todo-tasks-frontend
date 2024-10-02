import "./ProgressBar.css";

// value from 0 to 1.0
function ProgressBar({ value= 0.1, color, backgroundColor }) {
    return (
        <div
            className="progress-bar"
            style= {{'background-color': backgroundColor}}
            >
                <div 
                    className="progress-bar-fill" 
                    style= {{
                        width: `${value * 100}%`,
                        'background-color': color
                    }}
                ></div>
        </div>
    );
}

export default ProgressBar;