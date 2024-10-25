import PageLayout from "../../layouts/PageLayout";
import GenericForm from "./GenericForm";

function ConfirmForm({title="Confirm", confirm_text="Confirm", onConfirm, onCancel, is_confirm_warning, disabled, children}) {
    return (
        <GenericForm
            title={title}
            confirm_text={confirm_text}

            onConfirm={onConfirm}
            onHeaderSecondaryBtn={onCancel}

            is_confirm_warning={is_confirm_warning}
            disableInputs={disabled}
        >
            {children}
        </GenericForm>
    );
}

export default ConfirmForm;