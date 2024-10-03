
import { useState, useEffect } from "react";

import check_icon from "../../assets/images/check.png";

import GenericCard from "./GenericCard";

import "./SelectableCard.css";

function SelectableCard({ title, description }) {
    const [selected, setSelected] = useState(false);

    function toggleSelect() {
        setSelected((prevSelected) => !prevSelected);
    }
    
    return (
        <GenericCard
            title={title}
            primary_icon={selected? check_icon : null}
            onClick={toggleSelect}
        >
            <span className="selectable-card-description">{description}</span>
        </GenericCard>
    );
}

export default SelectableCard;