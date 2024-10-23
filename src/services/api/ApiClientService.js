import HttpClient from "./HttpClient";

import { TodoGoal, TodoTask } from "./models";

import { MemoryCache } from "./MemoryCache";

class ApiClientService {
    constructor(baseURL) {
        this.httpClient = new HttpClient(baseURL);
        this.memoryCache = new MemoryCache();
    }

    async _fetchWithCache(key, fetchFunction) {
        // if expired, fetch
        if (this.memoryCache.isExpired(key)) {
            const _data = await fetchFunction(key);
            this.memoryCache.set(key, _data);
        }

        // not expired, return data
        return this.memoryCache.getData(key);
    }

    _replaceCacheData(key, replaceFunction) {
        if (this.memoryCache.isExpired(key)) return; // data is expired or no data
        
        // get
        const data = this.memoryCache.getData(key);

        // data can be modified by reference, if no data is returned, fallback to the original data
        const newData = replaceFunction(data) || data;
        this.memoryCache.replaceData(key, newData);
    }


    // region Tasks
    async getAllTasks() {
        const data = await this._fetchWithCache("tasks",
            async (key) => await this.httpClient.get(key)
        );

        if (data == null) return [];
        return data.map(t => TodoTask.fromJSON(t));
    }

    async getTasksByGoalID(goalID) {
        const data = await this.httpClient.get(`tasks/GetAllByGoalID/${goalID}`);
        if (data == null) return [];
        return data.map(t => TodoTask.fromJSON(t));
    }

    async getTaskById(id) {
        const tasks = await this.getAllTasks();
        return tasks.find(t => t.id === id) || new TodoTask();
    }

    async getPendingTasks() {
        const tasks = await this.getAllTasks();
        const pendingTasks = tasks.filter(t => !t.isCompleted);
        return pendingTasks;
    }

    async getCompletedTasks() {
        const tasks = await this.getAllTasks();
        const completedTasks = tasks.filter(t => t.isCompleted);
        return completedTasks;
    }

    async createTask(task) {
        const data = await this.httpClient.post("Tasks", task);
        if (data == null) return null;
        const createdTask = TodoTask.fromJSON(data);

        // add to cache
        this._replaceCacheData("tasks", (data) => {
            data.push(createdTask);
        });

        return createdTask;
    }

    async updateTask(task) {
        const data = await this.httpClient.put("tasks", task);
        if (data == null) return null;
        const createdTask = TodoTask.fromJSON(data);

        // replace cache
        this._replaceCacheData("tasks", (data) => {
            const updatedTasks = data.map(t => (t.id === createdTask.id ? createdTask : t));
            return updatedTasks;
        });
        // need to re-fetch goals if a task is modified
        this.memoryCache.markAsExpired("goals"); 

        return createdTask;
    }

    async setTaskCompleted(taskId) {
        const data = await this.httpClient.patch(`tasks/SetCompleted`, { id: taskId });
        if (data == null) return null;
        const updatedTask = TodoTask.fromJSON(data);

        // replace cache
        this._replaceCacheData("tasks", (data) => {
            const updatedTasks = data.map(t => (t.id === updatedTask.id ? updatedTask : t));
            return updatedTasks;
        });
        // need to re-fetch goals if a task is modified
        this.memoryCache.markAsExpired("goals"); 

        return updatedTask;
    }

    async deleteTask(id) {
        const deleted = await this.httpClient.delete(`tasks/${id}`);
        if (!deleted) return false;

        // remove from cache
        this._replaceCacheData("tasks", (data) => {
            const filteredTasks = data.filter(t => t.id !== id);
            return filteredTasks;
        });
        // need to re-fetch goals if a task is modified
        this.memoryCache.markAsExpired("goals"); 

        return true;
    }


    // region Goals
    async getAllGoals() {
        const data = await this._fetchWithCache("goals",
            async (key) => await this.httpClient.post("goals/GetAll")
        );

        if (data == null) return [];
        return data.map(g => TodoGoal.fromJSON(g));
    }

    async getGoalById(id) {
        const goals = await this.getAllGoals();
        return goals.find(g => g.id === id) || new TodoGoal();
    }

    async getGoalsByTaskID(taskID) {
        const data = await this.httpClient.post(`goals/GetAllByTaskID/${taskID}`);
        if (data == null) return [];
        return data.map(g => TodoGoal.fromJSON(g));
    }

    async getPendingGoals() {
        const goals = await this.getAllGoals();
        const pendingGoals = goals.filter(g => !g.isCompleted);
        return pendingGoals;
    }

    async getCompletedGoals() {
        const goals = await this.getAllGoals();
        const completedGoals = goals.filter(g => g.isCompleted);
        return completedGoals;
    }

    async createGoal(goal) {
        const data = await this.httpClient.post("goals/Create", goal);
        if (data == null) return null;
        const createdGoal = TodoGoal.fromJSON(data);

        // need to re-fetch goals
        this.memoryCache.markAsExpired("goals"); 

        return createdGoal;
    }

    async updateGoal(goal) {
        const data = await this.httpClient.put("goals/Update", goal);
        if (data == null) return null;
        const updatedGoal = TodoGoal.fromJSON(data);

        // replace cache
        this._replaceCacheData("goals", (data) => {
            const updatedGoals = data.map(g => (g.id === updatedGoal.id ? updatedGoal : g));
            return updatedGoals;
        });

        return updatedGoal;
    }

    // taskIds: Array of ids [1,2,3]
    async addTaskToGoal(goalId, taskIds) {
        if (taskIds.length === 0) return; // no items

        const data = await this.httpClient.patch(`goals/AddTask?goalID=${goalId}`, taskIds);
        if (data == null) return null;

        // need to re-fetch goals if a task is modified
        this.memoryCache.markAsExpired("goals"); 

        return TodoGoal.fromJSON(data);
    }

    // taskIds: Array of ids [1,2,3]
    async removeTaskFromGoal(goalId, taskIds) {
        if (taskIds.length === 0) return; // no items
        
        const data = await this.httpClient.patch(`goals/RemoveTask?goalID=${goalId}`, taskIds);
        if (data == null) return null;

        // need to re-fetch goals if a task is modified
        this.memoryCache.markAsExpired("goals"); 

        return TodoGoal.fromJSON(data);
    }

    async deleteGoal(id) {
        const deleted = await this.httpClient.delete(`goals/${id}`);
        if (!deleted) return false;

        // remove from cache
        this._replaceCacheData("goals", (data) => {
            const filteredGoals = data.filter(g => g.id !== id);
            return filteredGoals;
        });

        return true;
    }
}

// export singleton
const singleton = new ApiClientService(process.env.REACT_APP_API_URL);
export default singleton;

export { ApiClientService };