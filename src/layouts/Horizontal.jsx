
function Horizontal({children}) {
    return (
        <div style={{display: "flex", flexDirection: "row", gap: "var(--size-smaller)"}}>
            {children}
        </div>
    );
}

export default Horizontal;