import trash_icon from "../../assets/images/trash.png";
import trash_red_icon from "../../assets/images/trash_red.png";
import star_icon from "../../assets/images/star.png";
import star_filled_icon from "../../assets/images/star_filled.png";

import GenericForm from "./GenericForm.jsx";
import ConfirmForm from "./ConfirmForm.jsx";
import TextInput from "../Inputs/TextInput.jsx";
import TextAreaInput from "../Inputs/TextAreaInput.jsx";
import ListField from "../Inputs/ListField.jsx";
import apiClientService from "../../services/api/ApiClientService.js";
import { TodoGoal } from "../../services/api/models.js";
import { useState, useEffect } from "react";
import Loading from "../Loading.jsx";
import FormField from "./FormField.jsx";
import Checker from "../../utils/Checker.js";

function EditGoalForm({ goal, onChange, onTaskListClick, items_preview_text, isTaskListLoading, onCancel, onConfirm, onDelete }) {
    const [currentGoal, setCurrentGoal] = useState(goal || {});
    const [disableInputs, setDisableInputs] = useState(false);
    const [confirmDeletion, setConfirmDeletion] = useState(false);

    useEffect(() => setCurrentGoal(goal || {}), [goal]);

    async function updateGoal() {
        // empty name
        if (Checker.isStringEmpty(currentGoal.name))
            return;

        setDisableInputs(true);
        const updatedGoal = await apiClientService.updateGoal(currentGoal);
        if (onConfirm) await onConfirm(updatedGoal);
        setDisableInputs(false);
    }

    async function deleteGoal() {
        setDisableInputs(true);
        const success = await apiClientService.deleteGoal(currentGoal.id);
        if (success && onDelete) await onDelete();
        setDisableInputs(false);
    }

    function setName(value) {
        currentGoal.name = value;
        const newGoal = TodoGoal.fromJSON(currentGoal);

        setCurrentGoal(newGoal);
        if (onChange) onChange(newGoal);
    }

    function setDescription(value) {
        currentGoal.description = value;
        const newGoal = TodoGoal.fromJSON(currentGoal);

        setCurrentGoal(newGoal);
        if (onChange) onChange(newGoal);
    }

    function setFavorite() {
        currentGoal.isFavorite = !currentGoal.isFavorite;
        const newGoal = TodoGoal.fromJSON(currentGoal);

        setCurrentGoal(newGoal);
        if (onChange) onChange(newGoal);
    }

    if (confirmDeletion) {
        return (
            <ConfirmForm
                onConfirm={deleteGoal}
                onCancel={() => setConfirmDeletion(false)}

                title="Goal"
                confirm_text="Delete"

                is_confirm_warning={true}
                disabled={disableInputs}
            >
                <FormField title="Do you want to delete this goal?">
                    <span className="confirm-deletion-task-name">{currentGoal.name}</span>
                </FormField>
            </ConfirmForm>
        );
    }

    return (
        <GenericForm 
            title="Edit goal"

            onSecondaryConfirm={() => setConfirmDeletion(true)}
            secondary_confirm_icon={trash_icon}
            secondary_confirm_icon_hover={trash_red_icon}

            onConfirm={updateGoal}
            confirm_text="Save"

            onHeaderPrimaryBtn={setFavorite}
            header_primary_icon={currentGoal.isFavorite?star_filled_icon:star_icon}

            onHeaderSecondaryBtn={onCancel}

            disableInputs={disableInputs}
        >
            <TextInput title="Name" value={currentGoal.name} onChange={setName} required={true} />
            <TextAreaInput title="Description" value={currentGoal.description} onChange={setDescription} />

            {isTaskListLoading
                ? <FormField title="Tasks"> <Loading /> </FormField> 
                : <ListField title="Tasks" onClick={onTaskListClick} texts={items_preview_text} />
            }
            
        </GenericForm>
    );
}

export default EditGoalForm;