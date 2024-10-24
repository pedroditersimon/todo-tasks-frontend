
import GenericForm from "./GenericForm.jsx";
import TextInput from "../Inputs/TextInput.jsx";
import TextAreaInput from "../Inputs/TextAreaInput.jsx";
import ListField from "../Inputs/ListField.jsx";
import { TodoGoal } from "../../services/api/models.js";
import apiClientService from "../../services/api/ApiClientService.js";
import { useState, useEffect } from "react";
import Loading from "../Loading.jsx";
import FormField from "./FormField.jsx";
import Checker from "../../utils/Checker.js";

function CreateGoalForm({ goal, onChange, onTaskListClick, items_preview_text, isTaskListLoading, onCancel, onConfirm }) {
    const [currentGoal, setCurrentGoal] = useState(goal || {});
    const [disableInputs, setDisableInputs] = useState(false);

    async function createGoal() {
        // empty name
        if (Checker.isStringEmpty(currentGoal.name))
            return;

        setDisableInputs(true);
        const createdGoal = await apiClientService.createGoal(currentGoal);
        if (onConfirm) await onConfirm(createdGoal);
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
            <TextInput title="Name" value={currentGoal.name} onChange={setName} required={true} />
            <TextAreaInput title="Description" value={currentGoal.description} onChange={setDescription} />
  
            {isTaskListLoading
                ? <FormField title="Tasks"> <Loading /> </FormField> 
                : <ListField title="Tasks" onClick={onTaskListClick} texts={items_preview_text} />
            }
        </GenericForm>
    );
}

export default CreateGoalForm;