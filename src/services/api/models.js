export class TodoTask {
    id;
    creationDate;
    lastUpdatedTime;

    name;
    description;
    isCompleted;
    isFavorite;

    static fromJSON(json) {
        const task = new TodoTask();
        Object.assign(task, {
            id: json.id,
            creationDate: json.creationDate? new Date(json.creationDate) : undefined, // Convert to Date
            lastUpdatedTime: json.lastUpdatedTime? new Date(json.lastUpdatedTime) : undefined, // Convert to Date
            
            name: json.name,
            description: json.description,
            isCompleted: json.isCompleted,
            isFavorite: json.isFavorite
        });
        return task;
    }

}

export class TodoGoal {
    id;
    creationDate;
    lastUpdatedTime;

    name;
    description;
    isCompleted;
    completedPercent;
    isFavorite;

    static fromJSON(json) {
        const goal = new TodoGoal();
        Object.assign(goal, {
            id: json.id,
            creationDate: json.creationDate? new Date(json.creationDate) : undefined, // Convert to Date
            lastUpdatedTime: json.lastUpdatedTime? new Date(json.lastUpdatedTime) : undefined, // Convert to Date
            
            name: json.name,
            description: json.description,
            isCompleted: json.isCompleted,
            completedPercent: json.completedPercent,
            isFavorite: json.isFavorite
        });
        return goal;
    }
}