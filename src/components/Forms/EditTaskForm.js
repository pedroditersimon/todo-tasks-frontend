
import trash_icon from "../../assets/images/trash.png";
import trash_red_icon from "../../assets/images/trash_red.png";
import star_icon from "../../assets/images/star.png";
import star_filled_icon from "../../assets/images/star_filled.png";


import GenericForm from "./GenericForm";
import TextInput from "../Inputs/TextInput";
import TextAreaInput from "../Inputs/TextAreaInput";
import SwitchField from "../Inputs/SwitchField";
import { useEffect, useState } from "react";

import ApiClientService from "../../services/api/ApiClientService";
import { TodoTask } from "../../services/api/models";


function EditTaskForm({ task }) {
    const [currentTask, setCurrentTask] = useState(task || {});

    useEffect(() => setCurrentTask(task || {}), [task]);

    async function updateTask() {
        const apiClientService = new ApiClientService(); // change this for a singleton
        //await apiClientService.updateTask(currentTask);
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

            onSecondaryConfirm={null}
            secondary_confirm_icon={trash_icon}
            secondary_confirm_icon_hover={trash_red_icon}

            onChange={updateTask}
            confirm_text="Save"

            onHeaderPrimaryBtn={setFavorite}
            header_primary_icon={currentTask.isFavorite? star_filled_icon : star_icon}
        >
            <TextInput title="Name" value={currentTask.name} onChange={setName} />
            <TextAreaInput title="Description" value={currentTask.description} onChange={setDescription} />
            <SwitchField value={currentTask.isCompleted} onToggle={setCompleted} >Completed</SwitchField>
        </GenericForm>
    );
}

export default EditTaskForm;