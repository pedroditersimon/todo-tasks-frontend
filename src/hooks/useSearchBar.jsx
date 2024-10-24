import { useState } from "react";

function useSearchBar() {
    const [value, setValue] = useState(); 
   
    function has(text) {
        if (value === undefined || value === "")
            return true;

        if (text === undefined || text == null)
            return false;
        
        return text.toLowerCase().includes(value.toLowerCase());
    }

    return { value, setValue, has };
};

export { useSearchBar };