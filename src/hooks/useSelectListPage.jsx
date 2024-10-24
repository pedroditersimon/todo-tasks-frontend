import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function useSelectListPage(title, comebackState) {
    const navigate = useNavigate();
    const location = useLocation();

    const [initialItems, setInitialItems] = useState([]);
    const { items = initialItems } = location.state || {};

    // items: ListItem
    // initialItems: ListItem

    async function open() {
        navigate("/select", {
            state: {
                title: title,
                items: items,
                comebackPath: location.pathname,
                comebackState: comebackState
            },
            replace: true
        });
    };

    function getSelectedItems() {
        if (items === undefined)
            return [];

        return items.filter(i => i.isSelected);
    };

    function getSelectedTitles() {
        return getSelectedItems().map(item => item.title);
    }
    

    function isItemSelected(id) {
        if (items === undefined) return false;
        const item = items.find(i => i.id === id);
        return item ? item.isSelected : false;
    }

    return { items, setInitialItems, open, getSelectedItems, getSelectedTitles, isItemSelected };
};

export { useSelectListPage };