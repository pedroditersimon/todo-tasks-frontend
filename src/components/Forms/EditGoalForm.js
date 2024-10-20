import trash_icon from "../../assets/images/trash.png";
import trash_red_icon from "../../assets/images/trash_red.png";
import star_icon from "../../assets/images/star.png";
import star_filled_icon from "../../assets/images/star_filled.png";

import GenericForm from "./GenericForm";
import TextInput from "../Inputs/TextInput";
import TextAreaInput from "../Inputs/TextAreaInput";
import ListField from "../Inputs/ListField";
import apiClientService from "../../services/api/ApiClientService";
import { TodoGoal } from "../../services/api/models";
import { useState, useEffect } from "react";
import useLoading from "../../hooks/useLoading";
import Loading from "../Loading";
import FormField from "./FormField";

function EditGoalForm({ goal, onChange, onTaskListClick, items_preview_text, isTaskListLoading, onCancel, onConfirm, onDelete }) {
    const [currentGoal, setCurrentGoal] = useState(goal || {});
    const [disableInputs, setDisableInputs] = useState(false);

    useEffect(() => setCurrentGoal(goal || {}), [goal]);

    async function updateGoal() {
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

    return (
        <GenericForm 
            title="Edit goal"

            onSecondaryConfirm={deleteGoal}
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