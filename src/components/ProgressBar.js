import "./ProgressBar.css";

// value from 0 to 100
function ProgressBar({ value }) {
    return (
        <div className="progress-bar">
            <div 
                className={`progress-bar-fill ${value>=100?"completed":""}`}
                style= {{
                    width: `${value}%`
                }}
            />
        </div>
    );
}

export default ProgressBar;