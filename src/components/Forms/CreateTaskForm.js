
import GenericForm from "./GenericForm";
import TextInput from "../Inputs/TextInput";
import TextAreaInput from "../Inputs/TextAreaInput";
import ApiClientService from "../../api/services/ApiClientService";
import { TodoTask } from "../../api/models";
import { useState } from "react";


function CreateTaskForm() {
    const [taskName, setTaskName] = useState("");
    const [taskDescription, setTaskDescription] = useState("");

    async function createTask() {
        const apiClientService = new ApiClientService();
        var task = TodoTask.fromJSON({
            name: taskName,
            description: taskDescription
        });

        await apiClientService.createTask(task);
    }

    return (
        <GenericForm title="New task" accept_text="Create" accept_callback={createTask} >
            <TextInput title="Name" value={taskName} onChange={(e) => setTaskName(e.target.value)} />
            <TextAreaInput title="Description" value={taskDescription} onChange={(e) => setTaskDescription(e.target.value)} />
        </GenericForm>
    );
}

export default CreateTaskForm;