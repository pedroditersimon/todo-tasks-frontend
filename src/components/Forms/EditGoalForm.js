import trash_icon from "../../assets/images/trash.png";
import trash_red_icon from "../../assets/images/trash_red.png";
import star_icon from "../../assets/images/star.png";
import star_filled_icon from "../../assets/images/star_filled.png";

import GenericForm from "./GenericForm";
import TextInput from "../Inputs/TextInput";
import TextAreaInput from "../Inputs/TextAreaInput";
import ListField from "../Inputs/ListField";
import ApiClientService from "../../services/api/ApiClientService";
import { TodoGoal } from "../../services/api/models";
import { useState, useEffect } from "react";

function EditGoalForm({ goal, onChange, onTaskListClick, items_preview_text, onCancel, onConfirm, onDelete }) {
    const [currentGoal, setCurrentGoal] = useState(goal || {});

    useEffect(() => setCurrentGoal(goal || {}), [goal]);

    async function updateGoal() {
        const apiClientService = new ApiClientService(); // change this for a singleton
        const updatedGoal = await apiClientService.updateGoal(currentGoal);
        if (onConfirm) onConfirm(updatedGoal);
    }

    async function deleteGoal() {
        const apiClientService = new ApiClientService(); // change this for a singleton
        const success = await apiClientService.deleteGoal(currentGoal.id);
        if (success && onDelete) onDelete();
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
        >
            <TextInput title="Name" value={currentGoal.name} onChange={setName} />
            <TextAreaInput title="Description" value={currentGoal.description} onChange={setDescription} />
            <ListField title="Tasks" onClick={onTaskListClick} >{items_preview_text}</ListField>
        </GenericForm>
    );
}

export default EditGoalForm;