
function Button({onClick, className, disabled, children}) {

    function handleClickEvent(event) {
        event.stopPropagation();
        if (disabled) return; // ignore if its disabled
        if (onClick) onClick();
    }

    return (
        <div className={`btn ${className}`} onClick={handleClickEvent}>
            <span>{children}</span>
        </div>
    );
}

export default Button;