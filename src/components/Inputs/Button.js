
function Button({callback, className, children}) {
    return (
        <div className={`btn ${className}`} onClick={callback}>
            <span>{children}</span>
        </div>
    );
}

export default Button;