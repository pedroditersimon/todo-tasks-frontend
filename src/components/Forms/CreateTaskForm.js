
import GenericForm from "./GenericForm";
import TextInput from "../Inputs/TextInput";
import TextAreaInput from "../Inputs/TextAreaInput";
import ApiClientService from "../../services/api/ApiClientService";
import { TodoTask } from "../../services/api/models";

import { useContext, useState } from "react";

function CreateTaskForm({ task }) {
    const [currentTask, setCurrentTask] = useState(task || {});

    async function createTask() {
        const apiClientService = new ApiClientService(); // change this for a singleton
        //await apiClientService.createTask(currentTask);
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
        <GenericForm title="New task" confirm_text="Create" onConfirm={createTask} >
            <TextInput title="Name" value={currentTask.name} onChange={setName} />
            <TextAreaInput title="Description" value={currentTask.description} onChange={setDescription} />
        </GenericForm>
    );
}

export default CreateTaskForm;