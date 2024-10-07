import "./SelectListForm.css";
import GenericForm from "./GenericForm";
import SelectableCard from "../Cards/SelectableCard";

import { useState, useContext, useEffect } from "react";
import SearchBar from "../Inputs/SearchBar";
import { useSearchBar } from "../../hooks/useSearchBar";

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

    static IsItemSelected(items, id) {
        if (items === undefined) return false;
        const item = items.find(i => i.id === id);
        return item ? item.isSelected : false;
    }
}

function SelectListForm({ title="Items", items, onConfirm, onCancel }) {
    const [listItems, setListItems] = useState(items || []);
    const searchBar = useSearchBar();

    function onItemToggle(item, isSelected) {
        const updatedItems = listItems.map(i => 
            i.id === item.id ? {...i, isSelected} : i
        );
        setListItems(updatedItems);
    }

    function onFormConfirm() {
        if (onConfirm) onConfirm(listItems);
    }

    return (
        <GenericForm
            title={title}
            confirm_text="Select"
            onConfirm={onFormConfirm}
            onHeaderSecondaryBtn={onCancel}
        >
            <SearchBar onChange={searchBar.setValue} />
            {listItems
                .filter(item => searchBar.has(item.title))
                .map(item =>
                    <SelectableCard
                        title={item.title}
                        description={item.description}
                        value={item.isSelected}
                        onToggle={(isSelected) => onItemToggle(item, isSelected)}
                    />
                )
            }
        </GenericForm>
    );
}

export { ListItem };
export default SelectListForm;