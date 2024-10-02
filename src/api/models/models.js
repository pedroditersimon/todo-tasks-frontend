export class TodoTask {
    id;
    creationDate;
    isDeleted;
    lastUpdatedTime;

    name;
    description;
    isCompleted;

    static fromJSON(json) {
        const task = new TodoTask();
        Object.assign(task, {
            id: json.id,
            creationDate: new Date(json.creationDate), // Convert to Date
            isDeleted: json.isDeleted,
            lastUpdatedTime: new Date(json.lastUpdatedTime), // Convert to Date
            
            name: json.name,
            description: json.description,
            isCompleted: json.isCompleted
        });
        return task;
    }
}

export class TodoGoal {
    id;
    creationDate;
    isDeleted;
    lastUpdatedTime;

    name;
    description;
    tasks = [];

    static fromJSON(json) {
        const goal = new TodoGoal();
        Object.assign(goal, {
            id: json.id,
            creationDate: new Date(json.creationDate), // Convert to Date
            isDeleted: json.isDeleted,
            lastUpdatedTime: new Date(json.lastUpdatedTime), // Convert to Date

            name: json.name,
            description: json.description,
            tasks: json.tasks || [] // Assign tasks, default to empty array if not provided
        });
        return goal;
    }
}