import close_icon from "../../assets/images/close.png";

import Button from "../Inputs/Button";
import IconButton from "../Inputs/IconButton";
import "./GenericForm.css";

function GenericForm({ title="title", accept_callback, accept_text="Button", primary_callback, primary_icon=close_icon, secondary_callback, secondary_icon, secondary_icon_hover, children}) {
    return (
        <div className="form">
            <div className="form-header">
                <IconButton
                    className="form-header-secondary-btn"
                    onClick={secondary_callback}
                    icon={secondary_icon}
                    icon_hover={secondary_icon_hover}
                />
                <span className="form-header-title">{title}</span>
                <IconButton
                    className="form-header-primary-btn"
                    onClick={primary_callback}
                    icon={primary_icon}
                />
            </div>

            <div className="form-body">
                {children}
            </div>

            <Button callback={accept_callback} className="form-btn" >{accept_text}</Button>
        </div>
    );
}

export default GenericForm;