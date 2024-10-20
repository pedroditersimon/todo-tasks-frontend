class Checker {
    static isStringEmpty(value) {
        return value === null || 
           value === undefined || 
           (typeof value === 'string' && value.trim() === "");
    }
}

export default Checker;