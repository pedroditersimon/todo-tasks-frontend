
import trash_icon from "../../assets/images/trash.png";
import trash_red_icon from "../../assets/images/trash_red.png";
import star_icon from "../../assets/images/star.png";
import star_filled_icon from "../../assets/images/star_filled.png";


import GenericForm from "./GenericForm.jsx";
import TextInput from "../Inputs/TextInput.jsx";
import TextAreaInput from "../Inputs/TextAreaInput.jsx";
import SwitchField from "../Inputs/SwitchField.jsx";
import { useEffect, useState } from "react";
import Checker from "../../utils/Checker.js";
import apiClientService from "../../services/api/ApiClientService";
import { TodoTask } from "../../services/api/models";


function EditTaskForm({ task, onConfirm, onCancel, onDelete }) {
    const [currentTask, setCurrentTask] = useState(task || {});
    const [disableInputs, setDisableInputs] = useState(false);

    useEffect(() => setCurrentTask(task || {}), [task]);

    async function updateTask() {
        // empty name
        if (Checker.isStringEmpty(currentTask.name))
            return;

        setDisableInputs(true);
        const updatedTask = await apiClientService.updateTask(currentTask);
        if (onConfirm) await onConfirm(updatedTask);
        setDisableInputs(false);
    }

    async function deleteTask() {
        setDisableInputs(true);
        const success = await apiClientService.deleteTask(currentTask.id);
        if (success && onDelete) await onDelete();
        setDisableInputs(false);
    }

    function setName(value) {
        currentTask.name = value;
        setCurrentTask(TodoTask.fromJSON(currentTask));
    }

    function setDescription(value) {
        currentTask.description = value;
        setCurrentTask(TodoTask.fromJSON(currentTask));
    }

    function setFavorite() {
        currentTask.isFavorite = !currentTask.isFavorite;
        setCurrentTask(TodoTask.fromJSON(currentTask));
    }

    function setCompleted(value) {
        currentTask.isCompleted = value;
        setCurrentTask(TodoTask.fromJSON(currentTask));
    }

    return (
        <GenericForm
            title="Edit task"

            onSecondaryConfirm={deleteTask}
            secondary_confirm_icon={trash_icon}
            secondary_confirm_icon_hover={trash_red_icon}

            onConfirm={updateTask}
            confirm_text="Save"

            onHeaderPrimaryBtn={setFavorite}
            header_primary_icon={currentTask.isFavorite? star_filled_icon : star_icon}

            onHeaderSecondaryBtn={onCancel}
            disableInputs={disableInputs}
        >
            <TextInput title="Name" value={currentTask.name} onChange={setName} required={true} />
            <TextAreaInput title="Description" value={currentTask.description} onChange={setDescription} />
            <SwitchField value={currentTask.isCompleted} onToggle={setCompleted} >Completed</SwitchField>
        </GenericForm>
    );
}

export default EditTaskForm;