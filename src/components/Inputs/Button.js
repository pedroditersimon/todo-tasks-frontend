
function Button({onClick, className, children}) {
    return (
        <div className={`btn ${className}`} onClick={onClick}>
            <span>{children}</span>
        </div>
    );
}

export default Button;