import close_icon from "../../assets/images/close.png";

import Button from "../Inputs/Button";
import IconButton from "../Inputs/IconButton";
import "./GenericForm.css";


function GenericForm({
        title = "Form",

        onConfirm,
        confirm_text = "Button",
        is_confirm_warning =false,

        onSecondaryConfirm,
        secondary_confirm_icon,
        secondary_confirm_icon_hover,

        onHeaderPrimaryBtn,
        header_primary_icon,
        header_primary_icon_hover,

        onHeaderSecondaryBtn,
        header_secondary_icon = close_icon,
        header_secondary_icon_hover,

        disableInputs,

        children
    })
{

    return (
        <div className="form">
            <div className="form-header">
                <IconButton
                    className="form-header-primary-btn"
                    onClick={onHeaderPrimaryBtn}
                    icon={header_primary_icon}
                    icon_hover={header_primary_icon_hover}
                    disabled={disableInputs}
                />
                <span className="form-header-title">{title}</span>
                <IconButton
                    className="form-header-secondary-btn"
                    onClick={onHeaderSecondaryBtn}
                    icon={header_secondary_icon}
                    icon_hover={header_secondary_icon_hover}
                    disabled={disableInputs}
                />
            </div>

            <div className="form-body">
                {children}
            </div>

            <div className="form-confirm">
                { secondary_confirm_icon?
                    <IconButton
                        onClick={onSecondaryConfirm}
                        icon={secondary_confirm_icon}
                        icon_hover={secondary_confirm_icon_hover}

                        className="form-confirm-btn secondary"
                        disabled={disableInputs}
                    />
                : null}

                <Button onClick={onConfirm} className={`form-confirm-btn ${is_confirm_warning && "warning"}`} disabled={disableInputs} >{confirm_text}</Button>
            </div>
            
        </div>
    );
}

export default GenericForm;