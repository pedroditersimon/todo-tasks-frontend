
import { useState, useEffect } from "react";

import check_icon from "../../assets/images/check.png";

import GenericCard from "./GenericCard";

import "./SelectableCard.css";

function SelectableCard({ title, description, value=false, onToggle }) {
    const [isSelected, setIsSelected] = useState(value);
    
    function toggleSelect() {
        setIsSelected((prevSelected) => {
            if (onToggle) onToggle(!prevSelected);
            return !prevSelected;
        });
    }
    
    return (
        <GenericCard
            title={title}
            primary_icon={isSelected? check_icon : null}
            onClick={toggleSelect}
        >
            <span className="selectable-card-description">{description}</span>
        </GenericCard>
    );
}

export default SelectableCard;