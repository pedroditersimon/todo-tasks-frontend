
import GenericForm from "./GenericForm";
import TextInput from "../Inputs/TextInput";
import TextAreaInput from "../Inputs/TextAreaInput";
import ListField from "../Inputs/ListField";
import { TodoGoal } from "../../services/api/models";
import apiClientService from "../../services/api/ApiClientService.js";
import { useState, useEffect } from "react";
import Loading from "../Loading.js";

function CreateGoalForm({ goal, onChange, onTaskListClick, items_preview_text, isTaskListLoading, onCancel, onConfirm }) {
    const [currentGoal, setCurrentGoal] = useState(goal || {});
    const [disableInputs, setDisableInputs] = useState(false);

    async function createGoal() {
        setDisableInputs(true);
        const createdGoal = await apiClientService.createGoal(currentGoal);
        if (onConfirm) onConfirm(createdGoal);
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

    return (
        <GenericForm
            title="New goal"
            confirm_text="Create"
            onConfirm={createGoal}
            onHeaderSecondaryBtn={onCancel}
            disableInputs={disableInputs}
        >
            <TextInput title="Name" value={currentGoal.name} onChange={setName} />
            <TextAreaInput title="Description" value={currentGoal.description} onChange={setDescription} />
  
            {isTaskListLoading
                ? <Loading />
                : <ListField title="Tasks" onClick={onTaskListClick} texts={items_preview_text} />
            }
        </GenericForm>
    );
}

export default CreateGoalForm;