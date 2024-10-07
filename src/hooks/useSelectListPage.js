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

    function getSelectedTitles() {
        if (items === undefined)
            return 'Select';

        const selectedItems = items.filter(i => i.isSelected);
        if (selectedItems.length === 0)
            return 'Select';

        return selectedItems.map(i => i.title).join(', ');
    };

    return { items, setInitialItems, open, getSelectedTitles };
};

export { useSelectListPage };