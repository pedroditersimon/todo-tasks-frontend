import HttpClient from "./HttpClient";

import { TodoGoal, TodoTask } from "./models";

class ApiClientService {
    constructor(baseURL) {
        this.httpClient = new HttpClient(baseURL);
    }

    // region Tasks
    async getAllTasks() {
        const data = await this.httpClient.get("tasks");
        if (data == null) return [];
        return data.map(t => TodoTask.fromJSON(t));
    }

    async getTasksByGoalID(goalID) {
        const data = await this.httpClient.get(`tasks/GetAllByGoalID/${goalID}`);
        if (data == null) return [];
        return data.map(t => TodoTask.fromJSON(t));
    }

    async getTaskById(id) {
        const data = await this.httpClient.get(`tasks/${id}`);
        if (data == null) return null;
        return TodoTask.fromJSON(data);
    }

    async getPendingTasks() {
        const data = await this.httpClient.get("tasks/GetPendings");
        if (data == null) return [];
        return data.map(t => TodoTask.fromJSON(t));
    }

    async getCompletedTasks() {
        const data = await this.httpClient.get("tasks/GetCompleteds");
        if (data == null) return [];
        return data.map(t => TodoTask.fromJSON(t));
    }

    async createTask(task) {
        const data = await this.httpClient.post("Tasks", task);
        if (data == null) return null;
        return TodoTask.fromJSON(data);
    }

    async updateTask(task) {
        const data = await this.httpClient.put("tasks", task);
        if (data == null) return null;
        return TodoTask.fromJSON(data);
    }

    async setTaskCompleted(taskId) {
        const data = await this.httpClient.patch(`tasks/SetCompleted`, { id: taskId });
        if (data == null) return null;
        return TodoTask.fromJSON(data);
    }

    async deleteTask(id) {
        return await this.httpClient.delete(`tasks/${id}`);
    }


    // region Goals
    async getAllGoals() {
        const data = await this.httpClient.post("goals/GetAll");
        if (data == null) return [];
        return data.map(g => TodoGoal.fromJSON(g));
    }

    async getGoalById(id) {
        const data = await this.httpClient.post(`goals/GetByID/${id}`);
        if (data == null) return null;
        return TodoGoal.fromJSON(data);
    }

    async getGoalsByTaskID(taskID) {
        const data = await this.httpClient.post(`goals/GetAllByTaskID/${taskID}`);
        if (data == null) return [];
        return data.map(g => TodoGoal.fromJSON(g));
    }

    async getPendingGoals() {
        const data = await this.httpClient.post("goals/GetPendings");
        if (data == null) return [];
        return data.map(g => TodoGoal.fromJSON(g));
    }

    async getCompletedGoals() {
        const data = await this.httpClient.post("goals/GetCompleteds");
        if (data == null) return [];
        return data.map(g => TodoGoal.fromJSON(g));
    }

    async createGoal(goal) {
        const data = await this.httpClient.post("goals/Create", goal);
        if (data == null) return null;
        return TodoGoal.fromJSON(data);
    }

    async updateGoal(goal) {
        const data = await this.httpClient.put("goals/Update", goal);
        if (data == null) return null;
        return TodoGoal.fromJSON(data);
    }

    async addTaskToGoal(goalId, taskId) {
        const data = await this.httpClient.patch(`goals/AddTask?goalID=${goalId}&taskID=${taskId}`);
        if (data == null) return null;
        return TodoGoal.fromJSON(data);
    }

    async removeTaskFromGoal(goalId, taskId) {
        const data = await this.httpClient.patch(`goals/RemoveTask?goalID=${goalId}&taskID=${taskId}`);
        if (data == null) return null;
        return TodoGoal.fromJSON(data);
    }

    async deleteGoal(id) {
        return await this.httpClient.delete(`goals/${id}`);
    }
}

const singleton = new ApiClientService("https://todo-tasks-api.onrender.com");
export default singleton;
export { ApiClientService };