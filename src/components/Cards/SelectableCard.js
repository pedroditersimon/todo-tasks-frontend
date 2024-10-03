
import { useState } from "react";
import check_icon from "../../assets/images/check.png";
import GenericCard from "./GenericCard";

function SelectableCard({ title, children }) {
    const [selected, setSelected] = useState(false);

    function toggleSelect() {
        setSelected(!selected);
    }

    return (
        <GenericCard
            title={title}
            primary_icon={selected? check_icon : null}
            onClick={toggleSelect}
            >
                {children}
        </GenericCard>
    );
}

export default SelectableCard;