import "./SearchBar.css";

import search_icon from "../../assets/images/search.png";
import erase_icon from "../../assets/images/close.png"

import IconButton from "./IconButton";
import { useEffect, useRef } from "react";

function SearchBar({ placeholder="Search", onChange, onSearchBtn }) {
    const inputRef = useRef();

    function focusInput() {
        inputRef.current.focus();
    }

    function onValueChange(event) {
        if (onChange) onChange(event.target.value);
    }

    function eraseInputValue() {
        inputRef.current.value = "";
        if (onChange) onChange("");
    }

    function inputHasValue() {
        if (inputRef.current === undefined)
            return false;
        return inputRef.current.value.length > 0;
    }

    return (
        <div className="search-bar" onClick={focusInput}>
            <IconButton className="search-bar-btn" icon={search_icon} onClick={onSearchBtn} />
            <input ref={inputRef} className="search-bar-input" placeholder={placeholder} onChange={onValueChange} type="text" />
            {inputHasValue() ?
                <IconButton className="search-bar-btn" icon={erase_icon} onClick={eraseInputValue} />
                :null}
        </div>
    );
}

export default SearchBar;