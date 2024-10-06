import trash_icon from "../../assets/images/trash.png";
import trash_red_icon from "../../assets/images/trash_red.png";
import star_icon from "../../assets/images/star.png";
import star_filled_icon from "../../assets/images/star_filled.png";

import GenericForm from "./GenericForm";
import TextInput from "../Inputs/TextInput";
import TextAreaInput from "../Inputs/TextAreaInput";
import ListField from "../Inputs/ListField";
import ApiClientService from "../../api/services/ApiClientService";
import { TodoGoal } from "../../api/models";
import { useState, useEffect } from "react";

function EditGoalForm({ goal }) {
    const [currentGoal, setCurrentGoal] = useState(goal || {});

    useEffect(() => setCurrentGoal(goal || {}), [goal]);

    async function updateGoal() {
        const apiClientService = new ApiClientService(); // change this for a singleton
        //await apiClientService.updateGoal(currentGoal);
    }

    function setName(value) {
        currentGoal.name = value;
        setCurrentGoal(TodoGoal.fromJSON(currentGoal));
    }

    function setDescription(value) {
        currentGoal.description = value;
        setCurrentGoal(TodoGoal.fromJSON(currentGoal));
    }

    function setFavorite() {
        currentGoal.isFavorite = !currentGoal.isFavorite;
        setCurrentGoal(TodoGoal.fromJSON(currentGoal));
    }

    return (
        <GenericForm 
            title="Edit goal"

            onSecondaryConfirm={null}
            secondary_confirm_icon={trash_icon}
            secondary_confirm_icon_hover={trash_red_icon}

            onConfirm={updateGoal}
            confirm_text="Save"

            onHeaderPrimaryBtn={setFavorite}
            header_primary_icon={currentGoal.isFavorite?star_filled_icon:star_icon}
        >
            <TextInput title="Name" value={currentGoal.name} onChange={setName} />
            <TextAreaInput title="Description" value={currentGoal.description} onChange={setDescription} />
            <ListField title="Tasks">Item 1, Item 2</ListField>
        </GenericForm>
    );
}

export default EditGoalForm;