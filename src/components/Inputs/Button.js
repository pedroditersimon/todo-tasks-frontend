
function Button({onClick, className, children}) {

    function handleClickEvent(event) {
        event.stopPropagation();
        if (onClick) onClick();
    }

    return (
        <div className={`btn ${className}`} onClick={handleClickEvent}>
            <span>{children}</span>
        </div>
    );
}

export default Button;