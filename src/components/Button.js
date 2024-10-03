function Button({callback, children}) {
    return (
        <a className="btn" onClick={callback}>
            <span>{children}</span>
        </a>
    );
}

export default Button;