import loading_icon from "../assets/images/loading.png";

function Loading() {
    return (
        <div 
            style={{
                'display': 'flex',
                'flexDirection': 'rows',
                'justifyContent': 'center'
            }}
        >
            <img
                className="rotate"
                src={loading_icon}
                style={{
                    'width': '25px',
                    'height': '25px'
                }}
            />
        </div>
    );
}


export default Loading;