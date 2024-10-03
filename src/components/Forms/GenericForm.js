import close_icon from "../../assets/images/close.png";

import Button from "../Button";
import "./GenericForm.css";

function GenericForm({ accept_callback, close_callback, children}) {
    return (
        <div className="form">
            <div className="form-header">
                <span className="form-header-title">Title</span>
                <div className="form-header-close-btn" onClick={close_callback}>
                    <img src={close_icon} />
                </div>
            </div>

            <div className="form-body">
                {children}
            </div>

            <div className="form-btn" onClick={accept_callback}>
                <Button>Boton</Button>
            </div>
        </div>
    );
}

export default GenericForm;