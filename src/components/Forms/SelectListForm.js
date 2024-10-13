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
}

function SelectListForm({ title="Items", items, empty_message="Sin resultados", onConfirm, onCancel }) {
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

    function createCards() {
        return listItems
        .filter(item => searchBar.has(item.title))
        .map(item =>
            <SelectableCard
                title={item.title}
                description={item.description}
                value={item.isSelected}
                onToggle={(isSelected) => onItemToggle(item, isSelected)}
            />
        );
    }
    const cardItems = createCards();
    const showEmptyMessage = cardItems.length === 0;

    return (
        <GenericForm
            title={title}
            confirm_text="Select"
            onConfirm={onFormConfirm}
            onHeaderSecondaryBtn={onCancel}
        >
            <SearchBar onChange={searchBar.setValue} />
            { showEmptyMessage
                ? <span className="select-list-empty-message">{empty_message}</span>
                : cardItems
            }
        </GenericForm>
    );
}

export { ListItem };
export default SelectListForm;