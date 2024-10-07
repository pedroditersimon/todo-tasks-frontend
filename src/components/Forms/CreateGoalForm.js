
import GenericForm from "./GenericForm";
import TextInput from "../Inputs/TextInput";
import TextAreaInput from "../Inputs/TextAreaInput";
import ListField from "../Inputs/ListField";
import { TodoGoal } from "../../services/api/models";
import ApiClientService from "../../services/api/ApiClientService";
import { useState } from "react";

function CreateGoalForm({ goal }) {
    const [currentGoal, setCurrentGoal] = useState(goal || {});

    async function createGoal() {
        const apiClientService = new ApiClientService(); // change this for a singleton
        //await apiClientService.createGoal(currentGoal);
    }

    function setName(value) {
        currentGoal.name = value;
        setCurrentGoal(TodoGoal.fromJSON(currentGoal));
    }

    function setDescription(value) {
        currentGoal.description = value;
        setCurrentGoal(TodoGoal.fromJSON(currentGoal));
    }

    return (
        <GenericForm title="New goal" confirm_text="Create" onConfirm={createGoal} >
            <TextInput title="Name" value={currentGoal.name} onChange={setName} />
            <TextAreaInput title="Description" value={currentGoal.description} onChange={setDescription} />
            <ListField title="Tasks">Item 1, Item 2</ListField>
        </GenericForm>
    );
}

export default CreateGoalForm;