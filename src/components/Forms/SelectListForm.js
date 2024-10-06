import "./SelectListForm.css";
import GenericForm from "./GenericForm";
import SelectableCard from "../Cards/SelectableCard";

import { useState, useContext, useEffect } from "react";

class ListItem 
{
    id = 0;
    title = "";
    description = "";
    isSelected = false;

    constructor(id, title, description, isSelected=false) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.isSelected = isSelected;
    }

    static FromTodoTask(task, isSelected=false) {
        return new ListItem(task.id, task.name, task.description, isSelected);
    }

    static FromTodoGoal(goal, isSelected=false) {
        return new ListItem(goal.id, goal.name, goal.description, isSelected);
    }
}

function SelectListForm({ title="Items", items, onConfirm }) {
    const [listItems, setListItems] = useState(items);

    // update listItems when items is modified
    useEffect(() => setListItems(items), [items]);

    function onItemToggle(item, isSelected) {
        item.isSelected = isSelected;
        setListItems(listItems);
    }

    function onFormConfirm() {
        if (onConfirm) onConfirm(listItems);
    }

    return (
        <GenericForm title={title} confirm_text="Select" onConfirm={onFormConfirm} >
            {listItems.map(item =>
                <SelectableCard
                    title={item.title}
                    description={item.description}
                    value={item.isSelected}
                    onToggle={(isSelected) => onItemToggle(item, isSelected)}
                />
            )}
        </GenericForm>
    );
}

export { ListItem };
export default SelectListForm;