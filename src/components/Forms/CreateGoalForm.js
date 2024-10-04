
import GenericForm from "./GenericForm";
import TextInput from "../Inputs/TextInput";
import TextAreaInput from "../Inputs/TextAreaInput";
import ListField from "../Inputs/ListField";
import { TodoGoal } from "../../api/models";
import ApiClientService from "../../api/services/ApiClientService";
import { useState } from "react";

function CreateGoalForm() {
    const [goalName, setGoalName] = useState("");
    const [goalDescription, setGoalDescription] = useState("");

    async function createGoal() {
        const apiClientService = new ApiClientService();
        var goal = TodoGoal.fromJSON({
            name: goalName,
            description: goalDescription
        });

        await apiClientService.createGoal(goal);
    }

    return (
        <GenericForm title="New goal" accept_text="Create" accept_callback={createGoal} >
            <TextInput title="Name" value={goalName} onChange={(e) => setGoalName(e.target.value)} />
            <TextAreaInput title="Description" value={goalDescription} onChange={(e) => setGoalDescription(e.target.value)} />
            <ListField title="Tasks">Item 1, Item 2</ListField>
        </GenericForm>
    );
}

export default CreateGoalForm;