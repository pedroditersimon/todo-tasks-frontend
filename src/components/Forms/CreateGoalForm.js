
import GenericForm from "./GenericForm";
import TextInput from "../Inputs/TextInput";
import TextAreaInput from "../Inputs/TextAreaInput";
import ListField from "../Inputs/ListField";
import { TodoGoal } from "../../services/api/models";
import apiClientService from "../../services/api/ApiClientService.js";
import { useState, useEffect } from "react";

function CreateGoalForm({ goal, onChange, onTaskListClick, items_preview_text, onCancel, onConfirm }) {
    const [currentGoal, setCurrentGoal] = useState(goal || {});

    async function createGoal() {
        const createdGoal = await apiClientService.createGoal(currentGoal);
        if (onConfirm) onConfirm(createdGoal);
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

    return (
        <GenericForm
            title="New goal"
            confirm_text="Create"
            onConfirm={createGoal}
            onHeaderSecondaryBtn={onCancel}
        >
            <TextInput title="Name" value={currentGoal.name} onChange={setName} />
            <TextAreaInput title="Description" value={currentGoal.description} onChange={setDescription} />
            <ListField title="Tasks" onClick={onTaskListClick} texts={items_preview_text} />
        </GenericForm>
    );
}

export default CreateGoalForm;