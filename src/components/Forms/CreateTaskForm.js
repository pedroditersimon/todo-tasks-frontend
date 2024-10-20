
import GenericForm from "./GenericForm";
import TextInput from "../Inputs/TextInput";
import TextAreaInput from "../Inputs/TextAreaInput";
import apiClientService from "../../services/api/ApiClientService";
import { TodoTask } from "../../services/api/models";
import Checker from "../../utils/Checker.js";
import { useContext, useState } from "react";

function CreateTaskForm({ task, onCancel, onConfirm }) {
    const [currentTask, setCurrentTask] = useState(task || {});
    const [disableInputs, setDisableInputs] = useState(false);

    async function createTask() {
        // empty name
        if (Checker.isStringEmpty(currentTask.name))
            return;

        setDisableInputs(true);
        const createdTask = await apiClientService.createTask(currentTask);
        if (onConfirm) await onConfirm(createdTask);
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

    return (
        <GenericForm
            title="New task"
            confirm_text="Create"
            onConfirm={createTask}
            onHeaderSecondaryBtn={onCancel}
            disableInputs={disableInputs}
        >
            <TextInput title="Name" value={currentTask.name} onChange={setName} required={true} />
            <TextAreaInput title="Description" value={currentTask.description} onChange={setDescription} />
        </GenericForm>
    );
}

export default CreateTaskForm;